let activeCharts = [];

function destroyCharts() {
  activeCharts.forEach(chart => {
    if (chart) {
      chart.destroy();
    }
  });
  activeCharts = [];
}

async function renderFDADashboard(companyName) {
  try {
    // Initialize page state with safe defaults
    window.pageState = {
      udi: { current: 1, size: 10 },
      pma: { current: 1, size: 10 }
    };

    // Show loading states
    const loadingSpinner = document.getElementById('loading-spinner-fda');
    const statsSkeleton = document.getElementById('stats-skeleton');
    
    if (loadingSpinner) loadingSpinner.classList.remove('hidden');
    if (statsSkeleton) statsSkeleton.classList.remove('hidden');

    // Clear all tables on new load
    const tables = ['udiTable', 'pmaTable'];
    tables.forEach(tableId => {
      const table = document.getElementById(tableId);
      if (table) table.innerHTML = '';
    });

    // Load and process data with proper error handling
    const data = await loadFDAData(companyName);
    console.log('FDA Data Loaded:', data);

    // Normalize data structure to ensure we always have a consistent format
    const normalizedData = {
      udi: { 
        results: data.udi?.data || data.udi?.results || [] 
      },
      pma: { 
        results: data.pma?.data || data.pma?.results || [] 
      }
    };

    // Store data globally for modal access with normalized structure
    window.globalFDAData = normalizedData;

    destroyCharts();

    // Initialize components
    setupModal();
    updateOverviewStats(normalizedData);
    initializeCharts(normalizedData);

    // Populate sections based on company
    if (["Livanova", "Medtronic", "NeuroPace"].includes(companyName)) {
      // UDI data (for LivaNova and Medtronic only)
      try {
        if (["Livanova", "Medtronic"].includes(companyName) && normalizedData.udi?.results?.length) {
          populateUDIDevices(normalizedData.udi);
          const udiSection = document.getElementById('udi-section');
          if (udiSection) udiSection.classList.remove('hidden');
        } else {
          const udiSection = document.getElementById('udi-section');
          if (udiSection) udiSection.classList.add('hidden');
        }
      } catch (error) {
        console.warn('Error populating UDI devices:', error);
      }

      // PMA data (for all three companies)
      try {
        if (normalizedData.pma?.results?.length) {
          populatePMA(normalizedData.pma);
          const pmaSection = document.getElementById('pma-section');
          if (pmaSection) pmaSection.classList.remove('hidden');
        } else {
          const pmaSection = document.getElementById('pma-section');
          if (pmaSection) pmaSection.classList.add('hidden');
        }
      } catch (error) {
        console.warn('Error populating PMA:', error);
      }

      // Hide any other sections that might be in the HTML
      ['510k-section', 'registrations-section', 'adverse-section'].forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add('hidden');
      });

      // Hide no-data message for companies with data
      const noDataMessage = document.getElementById('no-data-message');
      if (noDataMessage) noDataMessage.classList.add('hidden');
    } else {
      // For companies with no data, show a message and AI summary
      const noDataMessage = document.getElementById('no-data-message');
      if (noDataMessage) noDataMessage.classList.remove('hidden');
      
      // Hide all data sections
      ['pma-section', 'udi-section'].forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add('hidden');
      });
    }

    // Set up pagination handlers
    setupPaginationHandlers();

    // Add AI summary
    displayAISummary(companyName);

    // Add table search functionality
    setupTableSearch();

  } catch (error) {
    console.error('Error rendering FDA dashboard:', error);
    showErrorState(error);
  } finally {
    // Hide loading states
    const loadingSpinner = document.getElementById('loading-spinner-fda');
    const statsSkeleton = document.getElementById('stats-skeleton');
    
    if (loadingSpinner) loadingSpinner.classList.add('hidden');
    if (statsSkeleton) statsSkeleton.classList.add('hidden');
  }
}

async function loadFDAData(companyName) {
  try {
    const data = {};
    
    if (["Livanova", "Medtronic"].includes(companyName)) {
      // These companies have both UDI and PMA data
      try {
        data.udi = await fetch(`./data/${companyName}/udi.json`).then(res => res.json());
      } catch (error) {
        console.warn(`Failed to load UDI data for ${companyName}:`, error);
        data.udi = { data: [] };
      }
      
      try {
        data.pma = await fetch(`./data/${companyName}/pma.json`).then(res => res.json());
      } catch (error) {
        console.warn(`Failed to load PMA data for ${companyName}:`, error);
        data.pma = { data: [] };
      }
    } else if (companyName === "NeuroPace") {
      // NeuroPace only has PMA data
      try {
        data.pma = await fetch(`./data/${companyName}/pma.json`).then(res => res.json());
      } catch (error) {
        console.warn(`Failed to load PMA data for ${companyName}:`, error);
        data.pma = { data: [] };
      }
    } else {
      // For other companies, just return empty data sets
      data.udi = { data: [] };
      data.pma = { data: [] };
    }
    
    return data;
  } catch (error) {
    console.error(`Failed to load FDA data: ${error.message}`);
    // Return empty data sets instead of throwing an error
    return {
      udi: { data: [] },
      pma: { data: [] }
    };
  }
}

function updateOverviewStats(data) {
  // Set counters for UDI and PMA with null checks
  setElementTextSafely('totalUDI', data.udi?.results?.length || '0');
  setElementTextSafely('totalPMA', data.pma?.results?.length || '0');
  
  // Hide the other stat elements if they exist
  const hiddenStats = ['total510k', 'totalRegistrations', 'totalAdverse'];
  hiddenStats.forEach(id => {
    const element = document.getElementById(id);
    if (element && element.parentElement) {
      element.parentElement.style.display = 'none';
    }
  });
}

// Helper function to safely set text content
function setElementTextSafely(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

function initializeCharts(data) {
  // Only try to create charts if Chart.js is available
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not found, skipping chart initialization');
    return;
  }

  // 1. PMA Approval Timeline
  const pmaTimelineCtx = document.getElementById('pma_timeline_chart');
  if (pmaTimelineCtx && data.pma?.results?.length) {
    try {
      const timelineData = processPMATimeline(data.pma.results);
      const pmaTimelineChart = new Chart(pmaTimelineCtx, {
        type: 'line',
        data: {
          labels: timelineData.labels,
          datasets: [{
            label: 'PMA Approvals',
            data: timelineData.approvals,
            borderColor: '#3B82F6',
            backgroundColor: '#3B82F633',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => `Approvals: ${context.raw}`,
                afterBody: (context) => {
                  const details = timelineData.details[context.dataIndex];
                  return [
                    '',
                    'Devices:',
                    ...details.devices.map(d => `• ${d.trade_name || d.device_name || 'Unknown Device'}`)
                  ];
                }
              }
            },
            legend: { position: 'top' }
          },
          scales: {
            x: { title: { display: true, text: 'Year' } },
            y: { title: { display: true, text: 'Number of Approvals' }, beginAtZero: true }
          }
        }
      });
      activeCharts.push(pmaTimelineChart);
    } catch (error) {
      console.warn('Error creating PMA timeline chart:', error);
    }
  }

  // 2. UDI Device Distribution (for LivaNova and Medtronic)
  const udiDistCtx = document.getElementById('udi_distribution_chart');
  if (udiDistCtx && data.udi?.results?.length) {
    try {
      const distData = processUDIDistribution(data.udi.results);
      const udiDistChart = new Chart(udiDistCtx, {
        type: 'pie',
        data: {
          labels: distData.labels,
          datasets: [{
            data: distData.data,
            backgroundColor: distData.colors
          }]
        },
        options: {
          responsive: true,
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label;
                  const value = context.raw;
                  const percentage = ((value / distData.total) * 100).toFixed(1);
                  return `${label}: ${value} (${percentage}%)`;
                }
              }
            },
            legend: { position: 'right' }
          }
        }
      });
      activeCharts.push(udiDistChart);
    } catch (error) {
      console.warn('Error creating UDI distribution chart:', error);
    }
  }

  // Hide the other chart containers that might be in the HTML
  const hiddenChartContainers = [
    'fda_safety_timeline_chart_101',
    'fda_geographic_chart_102',
    'fda_classification_chart_103',
    'fda_portfolio_chart_104'
  ];
  
  hiddenChartContainers.forEach(id => {
    const container = document.getElementById(id);
    if (container && container.parentElement && container.parentElement.parentElement) {
      container.parentElement.parentElement.style.display = 'none';
    }
  });
}

function processPMATimeline(pmaData) {
  const yearlyData = pmaData.reduce((acc, item) => {
    // Handle different date formats
    let year;
    try {
      year = new Date(item.decision_date).getFullYear();
      // Handle invalid dates
      if (isNaN(year)) {
        const match = String(item.decision_date).match(/\d{4}/);
        year = match ? parseInt(match[0]) : 2020; // Fallback to a default year
      }
    } catch (e) {
      year = 2020; // Fallback to a default year
    }
    
    if (!acc[year]) acc[year] = { count: 0, devices: [] };
    acc[year].count++;
    acc[year].devices.push({ 
      trade_name: item.trade_name || 'Unknown Device',
      device_name: item.generic_name || item.device_name || 'Unknown Device'
    });
    return acc;
  }, {});

  const years = Object.keys(yearlyData).sort();
  return {
    labels: years,
    approvals: years.map(year => yearlyData[year].count),
    details: years.map(year => yearlyData[year])
  };
}

function processUDIDistribution(udiData) {
  const categoryDict = {};
  
  udiData.forEach(device => {
    let category = 'Other';
    
    // Try to extract category from product_codes
    if (device.product_codes && device.product_codes.length > 0) {
      // First try to get medical_specialty_description
      for (let i = 0; i < device.product_codes.length; i++) {
        const code = device.product_codes[i];
        if (code.openfda && code.openfda.medical_specialty_description) {
          category = code.openfda.medical_specialty_description;
          break;
        }
      }
      
      // If still no category, try device_name
      if (category === 'Other') {
        for (let i = 0; i < device.product_codes.length; i++) {
          const code = device.product_codes[i];
          if (code.openfda && code.openfda.device_name) {
            category = code.openfda.device_name;
            break;
          }
        }
      }
    }
    
    // Add to category count
    categoryDict[category] = (categoryDict[category] || 0) + 1;
  });

  const labels = Object.keys(categoryDict);
  const data = Object.values(categoryDict);
  const total = data.reduce((sum, val) => sum + val, 0);
  const colors = labels.map((_, i) => `hsl(${(i * 360 / labels.length) % 360}, 70%, 50%)`);

  return { labels, data, colors, total };
}

function populateUDIDevices(data, page = 1) {
  const tableBody = document.getElementById('udiTable');
  if (!tableBody || !data?.results?.length) return;

  try {
    const groupedDevices = groupDevices(data.results);
    const groupEntries = Object.entries(groupedDevices);
    const start = (page - 1) * pageState.udi.size;
    const paginatedGroups = groupEntries.slice(start, start + pageState.udi.size);

    tableBody.innerHTML = paginatedGroups.map(([baseModel, variants]) => `
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
        <td colspan="5" class="px-6 py-4">
          <div class="flex justify-between items-center cursor-pointer" 
               onclick="toggleDeviceGroup('${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group')">
            <div>
              <div class="font-medium text-gray-900 dark:text-gray-100">${baseModel}</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                ${variants[0].company_name || ''} • ${variants.length} variant${variants.length > 1 ? 's' : ''}
              </div>
            </div>
            <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </td>
      </tr>
      <tr id="${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group" 
          class="hidden bg-gray-50 dark:bg-gray-700">
        <td colspan="5" class="px-6 py-4">
          <div class="space-y-4">
            ${variants.map(device => `
              <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
                <div>
                  <div class="font-medium dark:text-gray-200">
                    ${device.brand_name || 'Unknown Device'}
                    ${device.version_or_model_number ? 
                      `<span class="text-sm text-gray-500 dark:text-gray-400">(${device.version_or_model_number})</span>` : ''}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    ${getDeviceCategory(device) || 'N/A'}
                  </div>
                </div>
                <div class="flex items-center space-x-4">
                  <span class="px-2 py-1 text-sm rounded-full ${getStatusBadgeColor(device.commercial_distribution_status)}">
                    ${device.commercial_distribution_status || 'Unknown Status'}
                  </span>
                  <button onclick="showUDIDetails('${device.public_device_record_key}')"
                          class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
                    Details
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </td>
      </tr>
    `).join('');

    updatePaginationUI('udi', groupEntries.length, page);
  } catch (error) {
    console.warn('Error in populateUDIDevices:', error);
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
          Error loading UDI devices
        </td>
      </tr>
    `;
  }
}

function getDeviceCategory(device) {
  if (!device.product_codes || !device.product_codes.length) return null;
  
  // Try to get medical specialty first
  for (let i = 0; i < device.product_codes.length; i++) {
    const code = device.product_codes[i];
    if (code.openfda && code.openfda.medical_specialty_description) {
      return code.openfda.medical_specialty_description;
    }
  }
  
  // Then try device name
  for (let i = 0; i < device.product_codes.length; i++) {
    const code = device.product_codes[i];
    if (code.openfda && code.openfda.device_name) {
      return code.openfda.device_name;
    }
  }
  
  // Then try product code
  for (let i = 0; i < device.product_codes.length; i++) {
    if (device.product_codes[i].code) {
      return `Product Code: ${device.product_codes[i].code}`;
    }
  }
  
  return null;
}

function groupDevices(devices) {
  const getBaseModel = (brandName) => {
    if (!brandName) return 'Unknown Device';
    let base = brandName.split('(')[0].trim();
    base = base.replace(/(trial|pewter|platinum|sand|espresso)\s*$/i, '').trim();
    base = base.replace(/\s+V\d+(-\d+)?$/i, '');
    return base;
  };

  return devices.reduce((groups, device) => {
    const baseModel = getBaseModel(device.brand_name);
    if (!groups[baseModel]) groups[baseModel] = [];
    groups[baseModel].push(device);
    return groups;
  }, {});
}

function populatePMA(data, page = 1) {
  const tableBody = document.getElementById('pmaTable');
  if (!tableBody || !data?.results?.length) return;

  try {
    const start = (page - 1) * pageState.pma.size;
    const paginatedData = data.results.slice(start, start + pageState.pma.size);

    tableBody.innerHTML = paginatedData.map(item => `
      <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
        <td class="px-6 py-4 whitespace-nowrap">
          <div class="font-medium text-gray-900 dark:text-gray-100">${item.trade_name || item.generic_name || item.device_name || 'Unknown Device'}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">${item.applicant || 'Unknown Applicant'}</div>
        </td>
        <td class="px-6 py-4">${item.pma_number || 'N/A'}</td>
        <td class="px-6 py-4">${formatDate(item.decision_date)}</td>
        <td class="px-6 py-4">
          <span class="px-2 py-1 text-sm rounded-full ${getDecisionBadgeColor(item.decision)}">
            ${item.decision || 'Unknown'}
          </span>
        </td>
        <td class="px-6 py-4">
          <button onclick="showPMADetails('${item.pma_number || ''}', '${item.supplement_number || ''}')"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
            Details
          </button>
        </td>
      </tr>
    `).join('');

    updatePaginationUI('pma', data.results.length, page);
  } catch (error) {
    console.warn('Error in populatePMA:', error);
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
          Error loading PMA data
        </td>
      </tr>
    `;
  }
}

function displayAISummary(companyName) {
  const summaryEl = document.getElementById('ai-summary');
  if (!summaryEl) return;

  const summaries = {
    "Livanova": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for LivaNova</h3>
      <p class="text-gray-700 dark:text-gray-300">
        LivaNova has a strong presence in the epilepsy treatment market with its VNS Therapy System, which has been FDA-approved since the late 1990s for drug-resistant epilepsy. The PMA data shows approvals for various VNS Therapy models, including the SenTiva device, which was approved for patients as young as 4 years old in 2017. The UDI data reflects a wide range of VNS Therapy devices in commercial distribution, indicating active market engagement. LivaNova's long history of approvals and ongoing device registrations highlight its established role in neuromodulation for epilepsy.
      </p>
    `,
    "Medtronic": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Medtronic</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Medtronic is a major player in neuromodulation with its Deep Brain Stimulation (DBS) systems, approved for epilepsy in 2018. The PMA data includes approvals for the Activa and Percept RC systems, with the latter approved in January 2024, featuring BrainSense technology for personalized treatment. The UDI data shows a diverse portfolio of DBS devices in commercial distribution, reflecting Medtronic's broad market reach. Medtronic's focus on advanced neurostimulation technologies positions it as a leader in epilepsy treatment alongside other neurological applications.
      </p>
    `,
    "NeuroPace": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for NeuroPace</h3>
      <p class="text-gray-700 dark:text-gray-300">
        NeuroPace pioneered closed-loop neurostimulation with its RNS System, which received FDA PMA approval in November 2013 for adults with drug-resistant focal epilepsy. The PMA data also includes updates such as MRI labeling approval in 2020 and a Breakthrough Device Designation in 2021 for idiopathic generalized epilepsy. NeuroPace's focus on responsive neurostimulation has made it a key innovator in epilepsy treatment, with clinical data showing a 37.9% seizure reduction in pivotal trials.
      </p>
    `,
    "XCORPRI": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for XCOPRI (SK Biopharmaceuticals)</h3>
      <p class="text-gray-700 dark:text-gray-300">
        XCOPRI has no PMA or UDI data because it is a pharmaceutical product (cenobamate), not a medical device, and thus falls under different FDA regulatory pathways (e.g., NDA). XCOPRI was approved in November 2019 for partial-onset seizures in adults, but this data is not captured in device-specific endpoints like PMA or UDI. The lack of device data aligns with XCOPRI's classification as a drug, which is outside the scope of this dashboard's focus on device approvals.
      </p>
    `,
    "Precisis AG": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Precisis AG</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Precisis AG has no FDA PMA or UDI data as of March 2025 because its EASEE System, while promising, has not yet received FDA approval. The company received a Breakthrough Device Designation in 2022 and has CE Mark approval in Europe (2022), but U.S. clinical trials are still ongoing. The absence of FDA data reflects its early-stage status in the U.S. market, though its minimally invasive approach to epilepsy treatment suggests future potential.
      </p>
    `,
    "EpiMinder": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Epi-Minder</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Epi-Minder lacks FDA PMA or UDI data because its sub-scalp EEG monitor is still in the clinical trial phase, primarily in Australia, with no FDA approvals as of March 2025. The device aims to provide long-term seizure monitoring, which could complement epilepsy treatments, but its pre-approval status explains the absence of FDA data. Epi-Minder's focus on monitoring rather than direct treatment may also limit its immediate relevance to device approval pathways.
      </p>
    `,
    "FlowMedical": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Flow Medical/Flow Neuroscience</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Flow Medical/Flow Neuroscience has no FDA PMA or UDI data for epilepsy applications because its Flow tDCS headset is primarily approved in Europe for depression, not epilepsy. While tDCS has potential for epilepsy treatment by modulating brain excitability, no FDA trials or approvals exist for this indication as of March 2025. The lack of data reflects its current focus on depression and the early stage of exploration for epilepsy applications.
      </p>
    `
  };

  summaryEl.innerHTML = summaries[companyName] || `
    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary</h3>
    <p class="text-gray-700 dark:text-gray-300">No summary available for ${companyName}.</p>
  `;
}

function setupTableSearch() {
  const searchConfigs = [
    { inputId: 'udiSearch', tableId: 'udiTable', searchFields: ['brand_name', 'company_name', 'version_or_model_number'] },
    { inputId: 'pmaSearch', tableId: 'pmaTable', searchFields: ['trade_name', 'device_name', 'generic_name', 'pma_number', 'applicant'] }
  ];

  searchConfigs.forEach(config => {
    const searchInput = document.getElementById(config.inputId);
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterTable(config.tableId, searchTerm, config.searchFields);
      });
    }
  });
}

function filterTable(tableId, searchTerm, searchFields) {
  const tableBody = document.getElementById(tableId);
  if (!tableBody) return;

  searchTerm = searchTerm.toLowerCase();

  if (!searchTerm) {
    const rows = Array.from(tableBody.getElementsByTagName('tr'));
    rows.forEach(row => {
      row.style.display = '';
      if (row.id && row.id.includes('-group')) {
        row.classList.add('hidden');
      }
    });
    return;
  }

  const rows = Array.from(tableBody.getElementsByTagName('tr'));
  const groupsWithVisibleChildren = new Set();

  rows.forEach(row => {
    if (row.id && row.id.includes('-group')) {
      let hasVisibleChild = false;
      const entries = row.querySelectorAll('[class*="flex justify-between"]');
      entries.forEach(entry => {
        const text = entry.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm);
        entry.style.display = isVisible ? '' : 'none';
        if (isVisible) hasVisibleChild = true;
      });
      if (hasVisibleChild) {
        const groupId = row.id.split('-')[0];
        groupsWithVisibleChildren.add(groupId);
      }
    } else {
      const text = row.textContent.toLowerCase();
      const isVisible = searchFields.some(field => {
        const value = getNestedValue(row.dataset, field) || text;
        return value.toLowerCase().includes(searchTerm);
      });
      row.style.display = isVisible ? '' : 'none';
    }
  });

  rows.forEach(row => {
    if (!row.id) {
      const groupId = row.querySelector('[onclick*="toggleDeviceGroup"]')?.getAttribute('onclick')?.match(/'([^']+)/)?.[1]?.split('-')[0];
      if (groupId) {
        const hasVisibleChildren = groupsWithVisibleChildren.has(groupId);
        row.style.display = hasVisibleChildren ? '' : 'none';
        const groupContent = document.getElementById(groupId + '-group');
        if (groupContent) {
          groupContent.style.display = hasVisibleChildren ? '' : 'none';
          if (hasVisibleChildren) groupContent.classList.remove('hidden');
        }
      }
    }
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current ? current[key] : undefined, obj);
}

function setupModal() {
  const modal = document.getElementById('detail-modal');
  const closeButton = document.getElementById('modal-close');

  if (closeButton) {
    closeButton.onclick = () => {
      if (modal) modal.classList.add('hidden');
    };
  }

  if (modal) {
    window.onclick = (event) => {
      if (event.target === modal) modal.classList.add('hidden');
    };
  }
}

function showUDIDetails(recordKey) {
  const data = window.globalFDAData?.udi.results.find(d => d.public_device_record_key === recordKey);
  if (!data) return;

  const modal = document.getElementById('detail-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalTitle || !modalContent) return;

  modalTitle.textContent = `UDI Device: ${data.brand_name || 'Device Details'}`;
  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <div class="flex justify-between items-center">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100">Device Information</h4>
            <p class="text-sm text-blue-700 dark:text-blue-200">${data.identifiers?.[0]?.id || 'No ID'}</p>
          </div>
          <span class="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
            ${data.commercial_distribution_status || 'Status Unknown'}
          </span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Model/Version</p>
          <p class="font-medium dark:text-white">${data.version_or_model_number || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Device Class</p>
          <p class="font-medium dark:text-white">Class ${getDeviceClass(data) || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Company</p>
          <p class="font-medium dark:text-white">${data.company_name || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Published Date</p>
          <p class="font-medium dark:text-white">${formatDate(data.publish_date) || 'N/A'}</p>
        </div>
      </div>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Medical Specialty</p>
        <p class="font-medium dark:text-white">${getDeviceCategory(data) || 'N/A'}</p>
      </div>
      ${data.device_description ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Description</p>
          <p class="font-medium dark:text-white">${data.device_description}</p>
        </div>
      ` : ''}
      ${data.mri_safety ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">MRI Safety</p>
          <p class="font-medium dark:text-white">${data.mri_safety}</p>
        </div>
      ` : ''}
    </div>
  `;
  modal.classList.remove('hidden');
}

function getDeviceClass(device) {
  if (!device.product_codes || !device.product_codes.length) return null;
  
  for (let i = 0; i < device.product_codes.length; i++) {
    const code = device.product_codes[i];
    if (code.openfda && code.openfda.device_class) {
      return code.openfda.device_class;
    }
  }
  
  return null;
}

function showPMADetails(pmaNumber, supplementNumber) {
  const data = window.globalFDAData?.pma.results.find(d => {
    return d.pma_number === pmaNumber && 
           ((!supplementNumber && !d.supplement_number) || 
            (supplementNumber && d.supplement_number === supplementNumber));
  });
  if (!data) return;

  const modal = document.getElementById('detail-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  if (!modal || !modalTitle || !modalContent) return;

  modalTitle.textContent = `PMA ${pmaNumber}${data.supplement_number ? ' (S' + data.supplement_number + ')' : ''}`;
  modalContent.innerHTML = `
    <div class="space-y-6">
      <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
        <div class="flex justify-between items-center">
          <div>
            <h4 class="font-semibold text-green-900 dark:text-green-100">Approval Information</h4>
            <p class="text-sm text-green-700 dark:text-green-200">Approved on ${formatDate(data.decision_date)}</p>
          </div>
          <span class="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200">
            ${data.decision || 'Unknown'}
          </span>
        </div>
      </div>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Device Name</p>
        <p class="font-medium dark:text-white">${data.trade_name || data.generic_name || data.device_name || 'N/A'}</p>
      </div>
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Applicant</p>
        <p class="font-medium dark:text-white">${data.applicant || 'N/A'}</p>
      </div>
      ${data.supplement_number ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Number</p>
          <p class="font-medium dark:text-white">S${data.supplement_number}</p>
        </div>
      ` : ''}
      ${data.supplement_type ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Type</p>
          <p class="font-medium dark:text-white">${data.supplement_type}</p>
        </div>
      ` : ''}
      ${data.supplement_reason ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Reason</p>
          <p class="font-medium dark:text-white">${data.supplement_reason}</p>
        </div>
      ` : ''}
      ${data.advisory_committee ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Advisory Committee</p>
          <p class="font-medium dark:text-white">${data.advisory_committee}${data.advisory_committee_description ? ` (${data.advisory_committee_description})` : ''}</p>
        </div>
      ` : ''}
      ${data.generic_name ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Generic Name</p>
          <p class="font-medium dark:text-white">${data.generic_name}</p>
        </div>
      ` : ''}
      ${data.product_code ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Product Code</p>
          <p class="font-medium dark:text-white">${data.product_code}</p>
        </div>
      ` : ''}
      ${data.ao_statement ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">AO Statement</p>
          <p class="font-medium dark:text-white">${data.ao_statement}</p>
        </div>
      ` : ''}
    </div>
  `;
  modal.classList.remove('hidden');
}

function formatDate(dateString) {
  if (!dateString) return 'N/A';
  try {
    if (dateString.length === 8 && !isNaN(dateString)) {
      const year = dateString.substring(0, 4);
      const month = dateString.substring(4, 6);
      const day = dateString.substring(6, 8);
      const date = new Date(year, month - 1, day);
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      }
    }
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    }
    return dateString;
  } catch (error) {
    console.warn(`Date parsing error for ${dateString}:`, error);
    return dateString;
  }
}

function getStatusBadgeColor(status) {
  if (status?.includes('Commercial Distribution')) {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
  }
  return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
}

function getDecisionBadgeColor(decision) {
  if (decision === 'APPR' || decision === 'AP' || decision === 'APPV') {
    return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
  } else if (decision === 'REAS' || decision === 'LETTER') {
    return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
  } else if (decision === 'DENY' || decision === 'WDRW') {
    return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
  }
  return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
}

function updatePaginationUI(section, total, currentPage) {
  const state = pageState[section];
  const totalPages = Math.ceil(total / state.size);

  const startEl = document.getElementById(`${section}PageStart`);
  const endEl = document.getElementById(`${section}PageEnd`);
  const totalEl = document.getElementById(`${section}Total`);

  if (startEl) startEl.textContent = total > 0 ? ((currentPage - 1) * state.size) + 1 : 0;
  if (endEl) endEl.textContent = Math.min(currentPage * state.size, total);
  if (totalEl) totalEl.textContent = total;

  const prevButton = document.getElementById(`${section}PrevPage`);
  const nextButton = document.getElementById(`${section}NextPage`);

  if (prevButton) {
    prevButton.disabled = currentPage <= 1;
    prevButton.classList.toggle('opacity-50', currentPage <= 1);
  }

  if (nextButton) {
    nextButton.disabled = currentPage >= totalPages;
    nextButton.classList.toggle('opacity-50', currentPage >= totalPages);
  }
}

function setupPaginationHandlers() {
  // UDI pagination
  document.getElementById('udiPrevPage')?.addEventListener('click', () => {
    if (pageState.udi.current > 1) {
      pageState.udi.current--;
      populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
    }
  });

  document.getElementById('udiNextPage')?.addEventListener('click', () => {
    const totalPages = Math.ceil((window.globalFDAData.udi.results?.length || 0) / pageState.udi.size);
    if (pageState.udi.current < totalPages) {
      pageState.udi.current++;
      populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
    }
  });

  // PMA pagination
  document.getElementById('pmaPrevPage')?.addEventListener('click', () => {
    if (pageState.pma.current > 1) {
      pageState.pma.current--;
      populatePMA(window.globalFDAData.pma, pageState.pma.current);
    }
  });

  document.getElementById('pmaNextPage')?.addEventListener('click', () => {
    const totalPages = Math.ceil((window.globalFDAData.pma.results?.length || 0) / pageState.pma.size);
    if (pageState.pma.current < totalPages) {
      pageState.pma.current++;
      populatePMA(window.globalFDAData.pma, pageState.pma.current);
    }
  });
}

function showErrorState(error) {
  // Reset all counters to 0
  setElementTextSafely('totalUDI', '0');
  setElementTextSafely('totalPMA', '0');

  // Show error message in tables
  const tables = ['udiTable', 'pmaTable'];
  tables.forEach(tableId => {
    const table = document.getElementById(tableId);
    if (table) {
      table.innerHTML = `
        <tr>
          <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
            Error loading FDA data: ${error.message}
          </td>
        </tr>
      `;
    }
  });
}

// Helper function for toggling device groups
window.toggleDeviceGroup = function(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;

  const arrow = group.previousElementSibling.querySelector('svg');
  group.classList.toggle('hidden');
  if (arrow) {
    arrow.style.transform = group.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  }
};

// Expose the functions to the window for use in event handlers
Object.assign(window, {
  showUDIDetails,
  showPMADetails,
  formatDate,
  getStatusBadgeColor,
  getDecisionBadgeColor,
  toggleDeviceGroup
});

// Export the main function and utility functions
export {
  renderFDADashboard as default,
  showUDIDetails,
  showPMADetails,
  formatDate,
  getStatusBadgeColor,
  getDecisionBadgeColor
};
// let activeCharts = []
// function destroyCharts() {
//     activeCharts.forEach(chart => {
//         if (chart) {
//             chart.destroy();
//         }
//     });
//     activeCharts = [];
// }

// async function renderFDADashboard(companyName) {
//     try {
//         // Initialize page state with safe defaults
//         window.pageState = {
//             udi: { current: 1, size: 10 },
//             k510: { current: 1, size: 10 },
//             registrations: { current: 1, size: 10 },
//             adverse: { current: 1, size: 10 }
//         };

//         // Show loading states
//         document.getElementById('stats-skeleton')?.classList.remove('hidden');
//         document.getElementById('loading-spinner')?.classList.remove('hidden');

//         // Load and process data with proper error handling
//         const data = await loadFDAData(companyName);
//         console.log('FDA Data Loaded:', data);

//         // Store data globally for modal access with safe defaults
//         window.globalFDAData = {
//             udi: { results: [] },
//             k510: { results: [] },
//             registrations: { results: [] },
//             adverse: { results: [] },
//             ...data
//         };
// destroyCharts()
//         // Initialize components
//         setupModal();
//         updateOverviewStats(data);
//         initializeCharts(data);
//         updateEnhancedMetrics(data)

//         // Populate all sections with safe error handling
//         try {
//             populateUDIDevices(data.udi);
//         } catch (error) {
//             console.warn('Error populating UDI devices:', error);
//         }

//         try {
//             populate510k(data.k510);
//         } catch (error) {
//             console.warn('Error populating 510k:', error);
//         }

//         try {
//             populateRegistrations(data.registrations);
//         } catch (error) {
//             console.warn('Error populating registrations:', error);
//         }

//         try {
//             populateAdverseEvents(data.adverse);
//         } catch (error) {
//             console.warn('Error populating adverse events:', error);
//         }

//         // Set up pagination handlers
//         setupPaginationHandlers();
//         // Add this after populating tables
// setupTableSearch();

//     } catch (error) {
//         console.error('Error rendering FDA dashboard:', error);
//         showErrorState(error);
//     } finally {
//         // Hide loading states
//         document.getElementById('stats-skeleton')?.classList.add('hidden');
//         document.getElementById('loading-spinner')?.classList.add('hidden');
//     }
// }

// async function loadFDAData(companyName) {
//     try {
//         console.log(".")
//         // const 
//             const udiData = await   fetch(`./data/${companyName}/udi.json`).then(res => res.json())
//            const  k510Data = await  fetch(`./data/${companyName}/510k.json`).then(res => res.json())
//            const  registrationData = await  fetch(`./data/${companyName}/registrations.json`).then(res => res.json())
//            const  adverseData = await fetch(`./data/${companyName}/adverse.json`).then(res => res.json())
//         // ]);

//         return {
//             udi: udiData,
//             k510: k510Data,
//             registrations: registrationData,
//             adverse: adverseData
//         };
//     } catch (error) {
//         throw new Error(`Failed to load FDA data: ${error.message}`);
//     }
// }

// function updateOverviewStats(data) {
//     // Update main overview counters
//     document.getElementById('totalUDI').textContent = data.udi.results?.length || '0';
//     document.getElementById('total510k').textContent = data.k510.results?.length || '0';
//     document.getElementById('totalRegistrations').textContent = data.registrations.results?.length || '0';
//     document.getElementById('totalAdverse').textContent = data.adverse.results?.length || '0';
// }
// function processTimelineEvents(data) {
//     // Create a map of year-month combinations
//     const eventMap = new Map();
    
//     // Process 510k approvals
//     data.k510.results.forEach(item => {
//         const date = new Date(item.decision_date);
//         const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
//         if (!eventMap.has(key)) {
//             eventMap.set(key, { approvals: 0, adverse: 0 });
//         }
//         eventMap.get(key).approvals++;
//     });

//     // Process adverse events
//     data.adverse.results.forEach(item => {
//         const date = new Date(item.date_received);
//         const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
//         if (!eventMap.has(key)) {
//             eventMap.set(key, { approvals: 0, adverse: 0 });
//         }
//         eventMap.get(key).adverse++;
//     });

//     // Sort dates and create arrays for chart
//     const sortedDates = Array.from(eventMap.keys()).sort();
    
//     return {
//         labels: sortedDates.map(date => {
//             const [year, month] = date.split('-');
//             return `${getMonthName(parseInt(month))} ${year}`;
//         }),
//         approvals: sortedDates.map(date => eventMap.get(date).approvals),
//         adverse: sortedDates.map(date => eventMap.get(date).adverse)
//     };
// }

// function getMonthName(month) {
//     const months = [
//         'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
//         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
//     ];
//     return months[month - 1];
// }


// function initializeCharts(data) {
//         // 1. Safety Timeline (510k Approvals Only)
//         const safetyCtx = document.getElementById('fda_safety_timeline_chart_101');
//         if (safetyCtx) {
//             const approvalEvents = process510kTimelineEvents(data.k510.results);
            
//             const safetyChart = new Chart(safetyCtx, {
//                 type: 'line',
//                 data: {
//                     labels: approvalEvents.labels,
//                     datasets: [{
//                         label: '510(k) Approvals',
//                         data: approvalEvents.approvals,
//                         borderColor: '#10B981',
//                         backgroundColor: '#10B98133',
//                         fill: true,
//                         tension: 0.4
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     interaction: {
//                         mode: 'index',
//                         intersect: false
//                     },
//                     plugins: {
//                         tooltip: {
//                             callbacks: {
//                                 title: (context) => {
//                                     return context[0].label;
//                                 },
//                                 label: (context) => {
//                                     return `New Approvals: ${context.raw}`;
//                                 },
//                                 afterBody: (context) => {
//                                     const monthData = approvalEvents.details[context[0].dataIndex];
//                                     return [
//                                         '',
//                                         'Notable Approvals:',
//                                         ...monthData.devices.slice(0, 3).map(device => 
//                                             `• ${device.name} (${device.decision_description})`
//                                         )
//                                     ];
//                                 }
//                             }
//                         },
//                         legend: {
//                             position: 'top'
//                         }
//                     },
//                     scales: {
//                         x: {
//                             grid: {
//                                 display: false
//                             },
//                             title: {
//                                 display: true,
//                                 text: 'Timeline'
//                             }
//                         },
//                         y: {
//                             beginAtZero: true,
//                             title: {
//                                 display: true,
//                                 text: 'New Device Approvals'
//                             },
//                             grid: {
//                                 borderDash: [5, 5]
//                             }
//                         }
//                     }
//                 }
//             });
//             activeCharts.push(safetyChart);
//         }
    
//         // 2. Device Classification Sunburst
//         const classCtx = document.getElementById('fda_classification_chart_103');
//         if (classCtx) {
//             const deviceHierarchy = processDeviceHierarchy(data.udi.results);
            
//             const classChart = new Chart(classCtx, {
//                 type: 'pie',
//                 data: {
//                     labels: deviceHierarchy.labels,
//                     datasets: [{
//                         data: deviceHierarchy.data,
//                         backgroundColor: deviceHierarchy.colors
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         tooltip: {
//                             callbacks: {
//                                 label: (context) => {
//                                     const label = context.label;
//                                     const value = context.raw;
//                                     const percentage = ((value / deviceHierarchy.total) * 100).toFixed(1);
//                                     return `${label}: ${value} devices (${percentage}%)`;
//                                 },
//                                 afterBody: (tooltipItems) => {
//                                     const item = tooltipItems[0];
//                                     const details = deviceHierarchy.details[item.dataIndex];
//                                     return [
//                                         '',
//                                         'Common Use Cases:',
//                                         ...details.useCases
//                                     ];
//                                 }
//                             }
//                         },
//                         legend: {
//                             position: 'right',
//                             labels: {
//                                 generateLabels: (chart) => {
//                                     const data = chart.data;
//                                     return data.labels.map((label, i) => ({
//                                         text: `${label} (${data.datasets[0].data[i]})`,
//                                         fillStyle: data.datasets[0].backgroundColor[i],
//                                         hidden: false,
//                                         index: i
//                                     }));
//                                 }
//                             }
//                         }
//                     }
//                 }
//             });
//             activeCharts.push(classChart);
//         }
    
//         // 3. Geographic Distribution with Enhanced Tooltips
//         const geoCtx = document.getElementById('fda_geographic_chart_102');
//         if (geoCtx) {
//             const geoData = processGeographicData(data.registrations.results);
            
//             const geoChart = new Chart(geoCtx, {
//                 type: 'bar',
//                 data: {
//                     labels: geoData.labels,
//                     datasets: [{
//                         label: 'Manufacturing Facilities',
//                         data: geoData.data,
//                         backgroundColor: geoData.colors,
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     indexAxis: 'y',
//                     responsive: true,
//                     plugins: {
//                         tooltip: {
//                             callbacks: {
//                                 afterBody: (tooltipItems) => {
//                                     const index = tooltipItems[0].dataIndex;
//                                     const details = geoData.details[index];
//                                     return [
//                                         '',
//                                         `Full Name: ${details.fullName}`,
//                                         `Active Facilities: ${details.activeFacilities}`,
//                                         `Primary Products: ${details.primaryProducts.join(', ')}`,
//                                         '',
//                                         'Facility Types:',
//                                         ...details.facilityTypes.map(type => `• ${type}`)
//                                     ];
//                                 }
//                             }
//                         }
//                     },
//                     scales: {
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Number of Facilities'
//                             }
//                         },
//                         y: {
//                             title: {
//                                 display: true,
//                                 text: 'Country'
//                             }
//                         }
//                     }
//                 }
//             });
//             activeCharts.push(geoChart);
//         }
    
//         // 4. Enhanced Portfolio Evolution
//         const portfolioCtx = document.getElementById('fda_portfolio_chart_104');
//         if (portfolioCtx) {
//             const portfolioData = processPortfolioEvolution(data.udi.results);
            
//             const portfolioChart = new Chart(portfolioCtx, {
//                 type: 'line',
//                 data: {
//                     labels: portfolioData.labels,
//                     datasets: portfolioData.datasets
//                 },
//                 options: {
//                     responsive: true,
//                     interaction: {
//                         mode: 'nearest',
//                         axis: 'x',
//                         intersect: false
//                     },
//                     plugins: {
//                         tooltip: {
//                             callbacks: {
//                                 title: (context) => `Year: ${context[0].label}`,
//                                 label: (context) => {
//                                     const label = context.dataset.label;
//                                     const value = context.raw;
//                                     return `${label}: ${value} devices`;
//                                 },
//                                 afterBody: (context) => {
//                                     const yearData = portfolioData.details[context[0].dataIndex];
//                                     return [
//                                         '',
//                                         'Top Devices:',
//                                         ...yearData.topDevices.map(device => 
//                                             `• ${device.name} (${device.type})`
//                                         )
//                                     ];
//                                 }
//                             }
//                         },
//                         legend: {
//                             position: 'right',
//                             labels: {
//                                 boxWidth: 12,
//                                 padding: 15
//                             }
//                         }
//                     },
//                     scales: {
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Year'
//                             }
//                         },
//                         y: {
//                             title: {
//                                 display: true,
//                                 text: 'Number of Devices'
//                             },
//                             stacked: true
//                         }
//                     }
//                 }
//             });
//             activeCharts.push(portfolioChart);
//         }
//     }

//     function process510kTimelineEvents(submissions) {
//         const monthlyData = submissions.reduce((acc, submission) => {
//             const date = new Date(submission.decision_date);
//             const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            
//             if (!acc[key]) {
//                 acc[key] = {
//                     count: 0,
//                     devices: []
//                 };
//             }
            
//             acc[key].count++;
//             acc[key].devices.push({
//                 name: submission.device_name,
//                 decision_description: submission.decision_description
//             });
            
//             return acc;
//         }, {});
    
//         const sortedDates = Object.keys(monthlyData).sort();
        
//         return {
//             labels: sortedDates.map(date => {
//                 const [year, month] = date.split('-');
//                 return `${getMonthName(parseInt(month))} ${year}`;
//             }),
//             approvals: sortedDates.map(date => monthlyData[date].count),
//             details: sortedDates.map(date => monthlyData[date])
//         };
//     }
    
//     function processPortfolioEvolution(devices) {
//         // Group devices by year and medical specialty
//         const yearlyData = devices.reduce((acc, device) => {
//             const year = new Date(device.publish_date).getFullYear();
//             const specialty = device.product_codes?.[0]?.openfda?.medical_specialty_description || 'Other';
            
//             if (!acc[year]) {
//                 acc[year] = {
//                     specialties: {},
//                     devices: []
//                 };
//             }
            
//             if (!acc[year].specialties[specialty]) {
//                 acc[year].specialties[specialty] = 0;
//             }
            
//             acc[year].specialties[specialty]++;
//             acc[year].devices.push({
//                 name: device.brand_name,
//                 type: specialty
//             });
            
//             return acc;
//         }, {});
    
//         // Process for visualization
//         const years = Object.keys(yearlyData).sort();
//         const allSpecialties = [...new Set(devices.map(
//             d => d.product_codes?.[0]?.openfda?.medical_specialty_description || 'Other'
//         ))];
    
//         // Generate color palette
//         const colorPalette = generateColorPalette(allSpecialties.length);
    
//         const datasets = allSpecialties.map((specialty, index) => ({
//             label: specialty,
//             data: years.map(year => yearlyData[year].specialties[specialty] || 0),
//             borderColor: colorPalette[index],
//             backgroundColor: `${colorPalette[index]}33`,
//             fill: true
//         }));
    
//         return {
//             labels: years,
//             datasets: datasets,
//             details: years.map(year => ({
//                 topDevices: yearlyData[year].devices
//                     .sort((a, b) => b.type.localeCompare(a.type))
//                     .slice(0, 3)
//             }))
//         };
//     }

//     function generateColorPalette(count) {
//         const baseColors = [
//             '#3B82F6', '#10B981', '#F59E0B', '#EF4444', 
//             '#8B5CF6', '#EC4899', '#6366F1', '#14B8A6',
//             '#F97316', '#A855F7'
//         ];
        
//         const palette = [];
//         for (let i = 0; i < count; i++) {
//             palette.push(baseColors[i % baseColors.length]);
//         }
//         return palette;
//     }
// //     const safetyCtx = document.getElementById('fda_safety_timeline_chart_101');
// //     if (safetyCtx) {
// //         const events = processTimelineEvents(data);
        
// //         new Chart(safetyCtx, {
// //             type: 'line',
// //             data: {
// //                 labels: events.labels,
// //                 datasets: [
// //                     {
// //                         label: '510(k) Approvals',
// //                         data: events.approvals,
// //                         borderColor: '#10B981',
// //                         backgroundColor: '#10B98133',
// //                         fill: true,
// //                         yAxisID: 'y-approvals',
// //                         tension: 0.4
// //                     },
// //                     {
// //                         label: 'Adverse Events',
// //                         data: events.adverse,
// //                         borderColor: '#EF4444',
// //                         backgroundColor: '#EF444433',
// //                         fill: true,
// //                         yAxisID: 'y-adverse',
// //                         tension: 0.4
// //                     }
// //                 ]
// //             },
// //             options: {
// //                 responsive: true,
// //                 interaction: {
// //                     mode: 'nearest',
// //                     axis: 'x',
// //                     intersect: false
// //                 },
// //                 plugins: {
// //                     tooltip: {
// //                         callbacks: {
// //                             title: (context) => {
// //                                 return context[0].label;
// //                             },
// //                             label: (context) => {
// //                                 const label = context.dataset.label;
// //                                 const value = context.raw;
// //                                 if (label === '510(k) Approvals') {
// //                                     return `New Approvals: ${value}`;
// //                                 }
// //                                 return `Reported Events: ${value}`;
// //                             },
// //                             afterBody: (context) => {
// //                                 return ['Click for detailed breakdown'];
// //                             }
// //                         }
// //                     },
// //                     legend: {
// //                         position: 'top'
// //                     }
// //                 },
// //                 scales: {
// //                     x: {
// //                         grid: {
// //                             display: false
// //                         },
// //                         title: {
// //                             display: true,
// //                             text: 'Timeline'
// //                         }
// //                     },
// //                     'y-approvals': {
// //                         position: 'left',
// //                         title: {
// //                             display: true,
// //                             text: 'New Device Approvals'
// //                         },
// //                         grid: {
// //                             borderDash: [5, 5]
// //                         }
// //                     },
// //                     'y-adverse': {
// //                         position: 'right',
// //                         title: {
// //                             display: true,
// //                             text: 'Adverse Events'
// //                         },
// //                         grid: {
// //                             display: false
// //                         }
// //                     }
// //                 }
// //             }
// //         });
// //     }

// //     // Initialize device safety timeline
// //     // const safetyCtx = document.getElementById('fda_safety_timeline_chart_101');
// //     // if (safetyCtx) {
// //         // Combine 510k approvals and adverse events on timeline
// //         // const approvals = data.k510.results.map(item => ({
// //         //     date: new Date(item.decision_date),
// //         //     type: 'approval',
// //         //     device: item.device_name,
// //         //     details: item.decision_description
// //         // }));
        
// //         // const adverse = data.adverse.results.map(item => ({
// //         //     date: new Date(item.date_received),
// //         //     type: 'adverse',
// //         //     device: item.device?.[0]?.brand_name,
// //         //     details: item.event_type
// //         // }));

// //         // Combine and sort events
// //         // const allEvents = [...approvals, ...adverse].sort((a, b) => a.date - b.date);
// //                 // Process events by month/year
// //                 // const events = processTimelineEvents(data);
        
// //                 // new Chart(safetyCtx, {
// //                 //     type: 'bar',
// //                 //     data: {
// //                 //         labels: events.labels,
// //                 //         datasets: [
// //                 //             {
// //                 //                 label: '510(k) Approvals',
// //                 //                 data: events.approvals,
// //                 //                 backgroundColor: '#10B981',
// //                 //                 yAxisID: 'y-approvals'
// //                 //             },
// //                 //             {
// //                 //                 label: 'Adverse Events',
// //                 //                 data: events.adverse,
// //                 //                 backgroundColor: '#EF4444',
// //                 //                 yAxisID: 'y-adverse'
// //                 //             }
// //                 //         ]
// //                 //     },
// //                 //     options: {
// //                 //         responsive: true,
// //                 //         plugins: {
// //                 //             legend: {
// //                 //                 position: 'top',
// //                 //                 labels: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
// //                 //                 }
// //                 //             },
// //                 //             tooltip: {
// //                 //                 callbacks: {
// //                 //                     label: (context) => {
// //                 //                         const value = context.raw;
// //                 //                         return `${context.dataset.label}: ${value}`;
// //                 //                     }
// //                 //                 }
// //                 //             }
// //                 //         },
// //                 //         scales: {
// //                 //             x: {
// //                 //                 grid: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#374151' : '#E5E7EB'
// //                 //                 },
// //                 //                 ticks: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#9CA3AF' : '#4B5563'
// //                 //                 }
// //                 //             },
// //                 //             'y-approvals': {
// //                 //                 type: 'linear',
// //                 //                 position: 'left',
// //                 //                 title: {
// //                 //                     display: true,
// //                 //                     text: 'Approvals',
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
// //                 //                 },
// //                 //                 grid: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#374151' : '#E5E7EB'
// //                 //                 },
// //                 //                 ticks: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#9CA3AF' : '#4B5563'
// //                 //                 }
// //                 //             },
// //                 //             'y-adverse': {
// //                 //                 type: 'linear',
// //                 //                 position: 'right',
// //                 //                 title: {
// //                 //                     display: true,
// //                 //                     text: 'Adverse Events',
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#fff' : '#000'
// //                 //                 },
// //                 //                 grid: {
// //                 //                     display: false
// //                 //                 },
// //                 //                 ticks: {
// //                 //                     color: document.documentElement.classList.contains('dark') ? '#9CA3AF' : '#4B5563'
// //                 //                 }
// //                 //             }
// //                 //         }
// //             //         }
// //             //     });
// //             // }
    

// //     // Geographic Distribution Chart
// //     // function updateGeographicChart(data) {
// //         const geoCtx = document.getElementById('fda_geographic_chart_102');
// //         if (geoCtx) {
// //             const geoData = processGeographicData(data.registrations.results);
            
// //             new Chart(geoCtx, {
// //                 type: 'bar',
// //                 data: {
// //                     labels: geoData.labels,
// //                     datasets: [{
// //                         label: 'Manufacturing Facilities',
// //                         data: geoData.data,
// //                         backgroundColor: geoData.colors,
// //                         borderWidth: 1
// //                     }]
// //                 },
// //                 options: {
// //                     indexAxis: 'y',
// //                     responsive: true,
// //                     plugins: {
// //                         tooltip: {
// //                             callbacks: {
// //                                 afterBody: (tooltipItems) => {
// //                                     const index = tooltipItems[0].dataIndex;
// //                                     const details = geoData.details[index];
// //                                     return [
// //                                         '',
// //                                         `Full Name: ${details.fullName}`,
// //                                         `Active Facilities: ${details.activeFacilities}`,
// //                                         `Primary Products: ${details.primaryProducts.join(', ')}`
// //                                     ];
// //                                 }
// //                             }
// //                         }
// //                     },
// //                     scales: {
// //                         x: {
// //                             title: {
// //                                 display: true,
// //                                 text: 'Number of Facilities'
// //                             }
// //                         },
// //                         y: {
// //                             title: {
// //                                 display: true,
// //                                 text: 'Country'
// //                             }
// //                         }
// //                     }
// //                 }
// //             });
// //         }
    

// //     // Product Classification Analysis
// //     // 2. Device Classification Sunburst (Replacement for stacked bar)
// //     const classCtx = document.getElementById('fda_classification_chart_103');
// //     if (classCtx) {
// //         const deviceHierarchy = processDeviceHierarchy(data.udi.results);
        
// //         new Chart(classCtx, {
// //             type: 'pie',
// //             data: {
// //                 labels: deviceHierarchy.labels,
// //                 datasets: [{
// //                     data: deviceHierarchy.data,
// //                     backgroundColor: deviceHierarchy.colors
// //                 }]
// //             },
// //             options: {
// //                 responsive: true,
// //                 plugins: {
// //                     tooltip: {
// //                         callbacks: {
// //                             label: (context) => {
// //                                 const label = context.label;
// //                                 const value = context.raw;
// //                                 const percentage = ((value / deviceHierarchy.total) * 100).toFixed(1);
// //                                 return `${label}: ${value} devices (${percentage}%)`;
// //                             },
// //                             afterBody: (tooltipItems) => {
// //                                 const item = tooltipItems[0];
// //                                 const details = deviceHierarchy.details[item.dataIndex];
// //                                 return [
// //                                     '',
// //                                     'Common Use Cases:',
// //                                     ...details.useCases
// //                                 ];
// //                             }
// //                         }
// //                     },
// //                     legend: {
// //                         position: 'right',
// //                         labels: {
// //                             generateLabels: (chart) => {
// //                                 const data = chart.data;
// //                                 return data.labels.map((label, i) => ({
// //                                     text: `${label} (${data.datasets[0].data[i]})`,
// //                                     fillStyle: data.datasets[0].backgroundColor[i],
// //                                     hidden: false,
// //                                     index: i
// //                                 }));
// //                             }
// //                         }
// //                     }
// //                 }
// //             }
// //         });
// //     }

// //     // Device Portfolio Evolution
// //     const portfolioCtx = document.getElementById('fda_portfolio_chart_104');
// //     if (portfolioCtx) {
// //         // Analyze device categories over time
// //         const portfolio = data.udi.results.reduce((acc, device) => {
// //             const year = new Date(device.publish_date).getFullYear();
// //             const category = device.product_codes?.[0]?.openfda?.medical_specialty_description || 'Other';
            
// //             if (!acc[year]) acc[year] = {};
// //             acc[year][category] = (acc[year][category] || 0) + 1;
            
// //             return acc;
// //         }, {});

// //         const years = Object.keys(portfolio).sort();
// //         const categories = [...new Set(data.udi.results.map(
// //             d => d.product_codes?.[0]?.openfda?.medical_specialty_description || 'Other'
// //         ))];

// //         new Chart(portfolioCtx, {
// //             type: 'line',
// //             data: {
// //                 labels: years,
// //                 datasets: categories.map(category => ({
// //                     label: category,
// //                     data: years.map(year => portfolio[year][category] || 0),
// //                     fill: true
// //                 }))
// //             },
// //             options: {
// //                 responsive: true,
// //                 interaction: {
// //                     mode: 'nearest',
// //                     axis: 'x',
// //                     intersect: false
// //                 }
// //             }
// //         });
// //     }
// // }

// // Helper Functions
// function processDeviceHierarchy(devices) {
//     const classGroups = devices.reduce((acc, device) => {
//         const deviceClass = device.product_codes?.[0]?.openfda?.device_class || 'Unknown';
//         const specialty = device.product_codes?.[0]?.openfda?.medical_specialty_description || 'Other';
        
//         if (!acc[deviceClass]) {
//             acc[deviceClass] = {};
//         }
//         if (!acc[deviceClass][specialty]) {
//             acc[deviceClass][specialty] = [];
//         }
//         acc[deviceClass][specialty].push(device);
//         return acc;
//     }, {});

//     // Process for visualization
//     const labels = [];
//     const data = [];
//     const colors = [];
//     const details = [];
//     let total = 0;

//     const classColors = {
//         '1': '#10B981', // Green
//         '2': '#F59E0B', // Yellow
//         '3': '#EF4444', // Red
//         'Unknown': '#6B7280' // Gray
//     };

//     Object.entries(classGroups).forEach(([className, specialties]) => {
//         Object.entries(specialties).forEach(([specialty, devices]) => {
//             labels.push(`Class ${className} - ${specialty}`);
//             data.push(devices.length);
//             colors.push(classColors[className]);
//             total += devices.length;
            
//             // Generate common use cases based on device names
//             const useCases = [...new Set(devices.slice(0, 3).map(d => d.brand_name))];
//             details.push({
//                 useCases: useCases
//             });
//         });
//     });

//     return { labels, data, colors, details, total };
// }

// function processGeographicData(registrations) {
//     const countryData = registrations.reduce((acc, reg) => {
//         const country = reg.registration?.iso_country_code || 'Unknown';
//         if (!acc[country]) {
//             acc[country] = {
//                 count: 0,
//                 active: 0,
//                 products: new Set(),
//                 facilityTypes: new Set(),
//                 fullName: getCountryName(country)
//             };
//         }
//         acc[country].count++;
//         if (reg.registration?.status_code === "1") {
//             acc[country].active++;
//         }
//         reg.proprietary_name?.forEach(name => acc[country].products.add(name));
//         reg.establishment_type?.forEach(type => acc[country].facilityTypes.add(type));
//         return acc;
//     }, {});

//     const sortedData = Object.entries(countryData)
//         .sort((a, b) => b[1].count - a[1].count);

//     return {
//         labels: sortedData.map(([code]) => code),
//         data: sortedData.map(([, data]) => data.count),
//         colors: sortedData.map(() => '#6366F1'),
//         details: sortedData.map(([, data]) => ({
//             fullName: data.fullName,
//             activeFacilities: data.active,
//             primaryProducts: Array.from(data.products).slice(0, 3),
//             facilityTypes: Array.from(data.facilityTypes)
//         }))
//     };
// }

// // Country code to full name mapping (abbreviated list)
// function getCountryName(code) {
//     const countries = {
//         'USA': 'United States of America',
//         'GBR': 'United Kingdom',
//         'DEU': 'Germany',
//         'FRA': 'France',
//         'ITA': 'Italy',
//         'ESP': 'Spain',
//         'CHN': 'China',
//         'JPN': 'Japan',
//         'KOR': 'South Korea',
//         'CAN': 'Canada',
//         // Add more as needed
//     };
//     return countries[code] || code;
// }


// // Function to toggle variant groups
// function toggleVariants(groupId) {
//     const group = document.getElementById(groupId);
//     if (group) {
//         group.classList.toggle('hidden');
//         const arrow = group.previousElementSibling.querySelector('svg');
//         if (arrow) {
//             arrow.classList.toggle('rotate-180');
//         }
//     }
// }
// function updateUDIMetrics(devices) {
//     // Active Commercial Distribution Count
//     const activeCount = devices.filter(device => 
//         device.commercial_distribution_status?.toLowerCase().includes('commercial distribution')
//     ).length;
//     const activeCountElement = document.getElementById('udiActiveCount');
//     if (activeCountElement) {
//         activeCountElement.textContent = activeCount;
//     }

//     // Device Categories Count
//     const categories = new Set(devices.map(device => 
//         device.product_codes?.[0]?.openfda?.medical_specialty_description || 'Unknown'
//     ));
//     const categoryCountElement = document.getElementById('udiCategoryCount');
//     if (categoryCountElement) {
//         categoryCountElement.textContent = categories.size;
//     }

//     // Recent Listings Count (last year)
//     const oneYearAgo = new Date();
//     oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
//     const recentCount = devices.filter(device => {
//         const publishDate = new Date(device.publish_date);
//         return publishDate >= oneYearAgo;
//     }).length;
//     const recentCountElement = document.getElementById('udiRecentCount');
//     if (recentCountElement) {
//         recentCountElement.textContent = recentCount;
//     }
// }


// function populateUDIDevices(data, page = 1) {
//     const tableBody = document.getElementById('udiTable');
//     if (!tableBody || !data?.results) return;

//         // Update UDI metrics first
//     // updateUDIMetrics(data.results);

//     // Group similar devices
//     const groupedDevices = groupDevices(data.results);
//     const groupEntries = Object.entries(groupedDevices);

//     // Pagination for groups instead of individual devices
//     const start = (page - 1) * pageState.udi.size;
//     const paginatedGroups = groupEntries.slice(start, start + pageState.udi.size);

//     tableBody.innerHTML = paginatedGroups.map(([baseModel, variants]) => `
//         <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="flex justify-between items-center cursor-pointer" 
//                      onclick="toggleDeviceGroup('${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group')">
//                     <div>
//                         <div class="font-medium text-gray-900 dark:text-gray-100">${baseModel}</div>
//                         <div class="text-sm text-gray-500 dark:text-gray-400">
//                             ${variants[0].company_name} • ${variants.length} variant${variants.length > 1 ? 's' : ''}
//                         </div>
//                     </div>
// <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
//      fill="none" 
//      stroke="currentColor" 
//      viewBox="0 0 24 24">
//     <path stroke-linecap="round" 
//           stroke-linejoin="round" 
//           stroke-width="2" 
//           d="M19 9l-7 7-7-7"/>
// </svg>
//                 </div>
//             </td>
//         </tr>
//         <tr id="${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group" 
//             class="hidden bg-gray-50 dark:bg-gray-700">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="space-y-4">
//                     ${variants.map(device => `
//                         <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
//                             <div>
//                                 <div class="font-medium dark:text-gray-200">
//                                     ${device.brand_name}
//                                     ${device.version_or_model_number ? 
//                                         `<span class="text-sm text-gray-500 dark:text-gray-400">
//                                             (${device.version_or_model_number})
//                                         </span>` : 
//                                         ''}
//                                 </div>
//                                 <div class="text-sm text-gray-500 dark:text-gray-400">
//                                     ${device.product_codes?.[0]?.openfda?.medical_specialty_description || 'N/A'}
//                                 </div>
//                             </div>
//                             <div class="flex items-center space-x-4">
//                                 <span class="px-2 py-1 text-sm rounded-full ${getStatusBadgeColor(device.commercial_distribution_status)}">
//                                     ${device.commercial_distribution_status || 'Unknown Status'}
//                                 </span>
//                                 ${device.identifiers?.[0]?.id ? 
//                                     `<a href="https://accessgudid.nlm.nih.gov/devices/${device.identifiers[0].id}"
//                                         target="_blank"
//                                         class="text-blue-600 dark:text-blue-400 hover:underline">
//                                         View on FDA
//                                     </a>` : 
//                                     ''}
//                                 <button onclick="showUDIDetails('${device.public_device_record_key}')"
//                                         class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//                                     Details
//                                 </button>
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//             </td>
//         </tr>
//     `).join('');

//     updatePaginationUI('udi', groupEntries.length, page);
// }

// function groupDevices(devices) {
//     // Helper function to get base model name
//     const getBaseModel = (brandName) => {
//         // Remove color/version variations in parentheses
//         let base = brandName.split('(')[0].trim();
        
//         // Remove common suffixes that indicate variants
//         base = base.replace(/(trial|pewter|platinum|sand|espresso)\s*$/i, '').trim();
        
//         // Handle version numbers
//         base = base.replace(/\s+V\d+(-\d+)?$/i, '');
        
//         return base;
//     };

//     // Group devices by base model
//     return devices.reduce((groups, device) => {
//         const baseModel = getBaseModel(device.brand_name);
//         if (!groups[baseModel]) {
//             groups[baseModel] = [];
//         }
//         groups[baseModel].push(device);
//         return groups;
//     }, {});
// }

// // First make sure toggle function is in global scope
// window.toggleDeviceGroup = function(groupId) {
//     const group = document.getElementById(groupId);
//     if (!group) return;

//     const arrow = group.previousElementSibling.querySelector('svg');
    
//     // Toggle visibility
//     group.classList.toggle('hidden');
    
//     // Animate arrow
//     if (arrow) {
//         arrow.style.transform = group.classList.contains('hidden') ? 
//             'rotate(0deg)' : 'rotate(180deg)';
//     }
// };

// // Pagination state
// const pageState = {
//     udi: { current: 1, size: 10 },
//     k510: { current: 1, size: 10 },
//     registrations: { current: 1, size: 10 },
//     adverse: { current: 1, size: 10 }
// };

// // function populateUDIDevices(data, page = 1) {
// //     const tableBody = document.getElementById('udiTable');
// //     if (!tableBody || !data.results) return;

// //     // Update metrics
// //     document.getElementById('udiActiveCount').textContent = data.results.filter(d => 
// //         d.commercial_distribution_status === 'In Commercial Distribution'
// //     ).length;
    
// //     document.getElementById('udiCategoryCount').textContent = new Set(
// //         data.results.map(d => d.product_codes?.[0]?.openfda?.medical_specialty_description)
// //     ).size;
    
// //     // Get recent items (last year)
// //     const oneYearAgo = new Date();
// //     oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
// //     const recentItems = data.results.filter(d => new Date(d.publish_date) >= oneYearAgo);
// //     document.getElementById('udiRecentCount').textContent = recentItems.length;

// //     // Pagination
// //     const start = (page - 1) * pageState.udi.size;
// //     const paginatedData = data.results.slice(start, start + pageState.udi.size);
    
// //     tableBody.innerHTML = paginatedData.map(device => `
// //         <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
// //             <td class="px-6 py-4 whitespace-nowrap">
// //                 <div class="font-medium text-gray-900 dark:text-gray-100">${device.brand_name}</div>
// //                 <div class="text-sm text-gray-500 dark:text-gray-400">${device.company_name}</div>
// //             </td>
// //             <td class="px-6 py-4">${device.version_or_model_number || 'N/A'}</td>
// //             <td class="px-6 py-4">
// //                 <span class="px-2 py-1 text-sm rounded-full ${getDeviceClassBadgeColor(device.product_codes?.[0]?.openfda?.device_class)}">
// //                     ${device.product_codes?.[0]?.openfda?.medical_specialty_description || 'N/A'}
// //                 </span>
// //             </td>
// //             <td class="px-6 py-4">
// //                 <span class="px-2 py-1 text-sm rounded-full ${getStatusBadgeColor(device.commercial_distribution_status)}">
// //                     ${device.commercial_distribution_status || 'Unknown'}
// //                 </span>
// //             </td>
// //             <td class="px-6 py-4">
// //                 <button onclick="showUDIDetails('${device.public_device_record_key}')"
// //                         class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
// //                     View Details
// //                 </button>
// //             </td>
// //         </tr>
// //     `).join('');

// //     // Update pagination UI
// //     try {
// //         updatePaginationUI('udi', data.results.length, page);
// //     } catch (error) {
// //         console.warn('Error updating UDI pagination:', error);
// //     }
// // }
// // Group 510k submissions by device family
// function group510kSubmissions(submissions) {
//     const getDeviceFamily = (submission) => {
//         // Remove specific variations/numbers but keep main device type
//         let baseName = submission.device_name.split(/\s+v\d+/i)[0]
//             .replace(/\s*\([^)]*\)/g, '') // Remove text in parentheses
//             .replace(/\s*(model|version|rev|type)\s*\d+/gi, '') // Remove model/version numbers
//             .trim();
        
//         // Fallback if empty
//         return baseName || 'Other Devices';
//     };

//     return submissions.reduce((groups, submission) => {
//         const family = getDeviceFamily(submission);
//         if (!groups[family]) {
//             groups[family] = [];
//         }
//         groups[family].push(submission);
//         return groups;
//     }, {});
// }

// // Group registrations by company/facility type
// function groupRegistrations(registrations) {
//     return registrations.reduce((groups, reg) => {
//         // Group by establishment type or fallback to country if no type
//         const groupKey = reg.establishment_type?.[0] || 
//                         `Facilities in ${reg.registration?.iso_country_code}` || 
//                         'Other Facilities';
        
//         if (!groups[groupKey]) {
//             groups[groupKey] = [];
//         }
//         groups[groupKey].push(reg);
//         return groups;
//     }, {});
// }

// // Group adverse events by event type and device
// function groupAdverseEvents(events) {
//     return events.reduce((groups, event) => {
//         // Group by event type and device category
//         const deviceCategory = event.device?.[0]?.generic_name || 'Other Devices';
//         const groupKey = `${event.event_type || 'Unknown'} - ${deviceCategory}`;
        
//         if (!groups[groupKey]) {
//             groups[groupKey] = [];
//         }
//         groups[groupKey].push(event);
//         return groups;
//     }, {});
// }

// // Add search functionality to all tables
// function setupTableSearch() {
//     // Setup search for each table type
//     const searchConfigs = [
//         { 
//             inputId: 'udiSearch', 
//             tableId: 'udiTable',
//             searchFields: ['brand_name', 'company_name', 'version_or_model_number']
//         },
//         { 
//             inputId: '510kSearch', 
//             tableId: '510kTable',
//             searchFields: ['k_number', 'device_name', 'applicant']
//         },
//         { 
//             inputId: 'regSearch', 
//             tableId: 'registrationsTable',
//             searchFields: ['registration.name', 'registration.registration_number', 'registration.city']
//         },
//         { 
//             inputId: 'adverseSearch', 
//             tableId: 'adverseTable',
//             searchFields: ['report_number', 'event_type', 'device.0.brand_name']
//         }
//     ];

//     searchConfigs.forEach(config => {
//         const searchInput = document.getElementById(config.inputId);
//         if (searchInput) {
//             searchInput.addEventListener('input', (e) => {
//                 const searchTerm = e.target.value.toLowerCase();
//                 filterTable(config.tableId, searchTerm, config.searchFields);
//             });
//         }
//     });
// }
// function filterTable(tableId, searchTerm, searchFields) {
//     const tableBody = document.getElementById(tableId);
//     if (!tableBody) return;
    
//     searchTerm = searchTerm.toLowerCase();
    
//     // Reset table if search is empty
//     if (!searchTerm) {
//         const rows = Array.from(tableBody.getElementsByTagName('tr'));
//         rows.forEach(row => {
//             row.style.display = '';
//             if (row.id && row.id.includes('-group')) {
//                 row.classList.add('hidden');
//             }
//         });
//         return;
//     }
    
//     const rows = Array.from(tableBody.getElementsByTagName('tr'));
//     const groupsWithVisibleChildren = new Set();
    
//     rows.forEach(row => {
//         if (row.id && (row.id.includes('-group') || 
//                       row.id.includes('-510k') || 
//                       row.id.includes('-reg') || 
//                       row.id.includes('-adverse'))) {
//             let hasVisibleChild = false;
//             const entries = row.querySelectorAll('[class*="flex justify-between"]');
            
//             entries.forEach(entry => {
//                 const text = entry.textContent.toLowerCase();
//                 const isVisible = text.includes(searchTerm);
//                 entry.style.display = isVisible ? '' : 'none';
//                 if (isVisible) hasVisibleChild = true;
//             });
            
//             if (hasVisibleChild) {
//                 const groupId = row.id.split('-')[0];
//                 groupsWithVisibleChildren.add(groupId);
//             }
//         }
//     });
    
//     rows.forEach(row => {
//         if (!row.id) {
//             const groupId = row.querySelector('[onclick*="toggleDeviceGroup"]')?.
//                 getAttribute('onclick')?.
//                 match(/'([^']+)/)?.[1]?.
//                 split('-')[0];
                
//             if (groupId) {
//                 const hasVisibleChildren = groupsWithVisibleChildren.has(groupId);
//                 row.style.display = hasVisibleChildren ? '' : 'none';
                
//                 const groupContent = document.getElementById(groupId + 
//                     (tableId.includes('510k') ? '-510k' : 
//                      tableId.includes('reg') ? '-reg' : 
//                      tableId.includes('adverse') ? '-adverse' : 
//                      '-group'));
                     
//                 if (groupContent) {
//                     groupContent.style.display = hasVisibleChildren ? '' : 'none';
//                     if (hasVisibleChildren) {
//                         groupContent.classList.remove('hidden');
//                     }
//                 }
//             }
//         }
//     });
// }
// // function filterTable(tableId, searchTerm, searchFields) {
// //     const tableBody = document.getElementById(tableId);
// //     if (!tableBody) return;
    
// //     searchTerm = searchTerm.toLowerCase();
    
// //     // If search is empty, reset the table
// //     if (!searchTerm) {
// //         // Reset all group headers and contents
// //         const rows = Array.from(tableBody.getElementsByTagName('tr'));
// //         rows.forEach(row => {
// //             row.style.display = ''; // Show all rows
// //             if (row.id && row.id.includes('-group')) {
// //                 row.classList.add('hidden'); // Re-hide group contents
// //                 // Reset visibility of all patent entries
// //                 const patentEntries = row.querySelectorAll('.flex.justify-between.items-center.py-2');
// //                 patentEntries.forEach(patent => {
// //                     patent.style.display = '';
// //                 });
// //             }
// //         });
// //         return;
// //     }
    
// //     const rows = Array.from(tableBody.getElementsByTagName('tr'));
// //     const groupsWithVisibleChildren = new Set();
    
// //     // First pass: check individual patents and mark their groups
// //     rows.forEach(row => {
// //         if (row.id && row.id.includes('-group')) {
// //             const patentEntries = row.querySelectorAll('.flex.justify-between.items-center.py-2');
// //             let hasVisibleChild = false;
            
// //             patentEntries.forEach(patent => {
// //                 const patentText = patent.textContent.toLowerCase();
// //                 const isVisible = patentText.includes(searchTerm);
// //                 patent.style.display = isVisible ? '' : 'none';
// //                 if (isVisible) hasVisibleChild = true;
// //             });
            
// //             if (hasVisibleChild) {
// //                 groupsWithVisibleChildren.add(row.id.replace('-group', ''));
// //             }
// //         }
// //     });
    
// //     // Second pass: show/hide groups based on their children
// //     rows.forEach(row => {
// //         if (!row.id) {
// //             const groupId = row.querySelector('.flex.justify-between')?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
// //             if (groupId) {
// //                 const baseGroupId = groupId.replace('-group', '');
// //                 const hasVisibleChildren = groupsWithVisibleChildren.has(baseGroupId);
// //                 row.style.display = hasVisibleChildren ? '' : 'none';
                
// //                 const groupContent = document.getElementById(groupId);
// //                 if (groupContent) {
// //                     groupContent.style.display = hasVisibleChildren ? '' : 'none';
// //                     if (hasVisibleChildren) {
// //                         groupContent.classList.remove('hidden');
// //                     }
// //                 }
// //             }
// //         }
// //     });
// // }

// // Helper function to get nested object values from string path
// function getNestedValue(obj, path) {
//     return path.split('.').reduce((current, key) => {
//         return current ? current[key] : undefined;
//     }, obj);
// }


// // Enhanced metrics functions
// function updateEnhancedMetrics(data) {
//     // UDI Metrics
//     const udiMetrics = {
//         totalActive: data.udi.results.filter(d => 
//             d.commercial_distribution_status?.includes('Commercial Distribution')).length,
//         deviceClasses: Object.entries(data.udi.results.reduce((acc, d) => {
//             const deviceClass = d.product_codes?.[0]?.openfda?.device_class || 'Unknown';
//             acc[deviceClass] = (acc[deviceClass] || 0) + 1;
//             return acc;
//         }, {})),
//         mriSafety: data.udi.results.reduce((acc, d) => {
//             const safety = d.mri_safety || 'Unknown';
//             acc[safety] = (acc[safety] || 0) + 1;
//             return acc;
//         }, {}),
//         prescriptionTypes: data.udi.results.reduce((acc, d) => {
//             const type = d.is_rx === 'true' ? 'Prescription' : 'OTC';
//             acc[type] = (acc[type] || 0) + 1;
//             return acc;
//         }, {})
//     };

//     // Update UDI metrics display
//     document.getElementById('udiActiveCount').textContent = udiMetrics.totalActive;
//     document.getElementById('udiCategoryCount').textContent = udiMetrics.deviceClasses.length;
//     document.getElementById('udiRecentCount').textContent = getRecentCount(data.udi.results, 'publish_date');

//     // 510k Metrics
//     const k510Metrics = {
//         totalCleared: data.k510.results.filter(d => 
//             d.decision_code === 'SESE').length,
//         avgReviewTime: calculateAverageReviewTime(data.k510.results),
//         recentSubmissions: getRecentCount(data.k510.results, 'decision_date'),
//         decisionTypes: data.k510.results.reduce((acc, d) => {
//             const decision = d.decision_description || 'Unknown';
//             acc[decision] = (acc[decision] || 0) + 1;
//             return acc;
//         }, {})
//     };

//     // Update 510k metrics display
//     document.getElementById('k510ClearedCount').textContent = k510Metrics.totalCleared;
//     document.getElementById('k510ReviewTime').textContent = `${k510Metrics.avgReviewTime} days`;
//     document.getElementById('k510RecentCount').textContent = k510Metrics.recentSubmissions;

//     // Registration Metrics
//     const regMetrics = {
//         activeLocations: data.registrations.results.filter(r => 
//             r.registration?.status_code === "1").length,
//         countries: new Set(data.registrations.results.map(r => 
//             r.registration?.iso_country_code)).size,
//         establishmentTypes: new Set(data.registrations.results.flatMap(r => 
//             r.establishment_type || [])).size,
//         productLines: new Set(data.registrations.results.flatMap(r => 
//             r.proprietary_name || [])).size
//     };

//     // Update registration metrics display
//     document.getElementById('regFacilityCount').textContent = regMetrics.activeLocations;
//     document.getElementById('regProductCount').textContent = regMetrics.productLines;
//     document.getElementById('regCountryCount').textContent = regMetrics.countries;

//     // Adverse Events Metrics
//     const adverseMetrics = {
//         totalEvents: data.adverse.results.length,
//         recentEvents: getRecentCount(data.adverse.results, 'date_received'),
//         byType: data.adverse.results.reduce((acc, e) => {
//             const type = e.event_type || 'Unknown';
//             acc[type] = (acc[type] || 0) + 1;
//             return acc;
//         }, {}),
//         uniqueProducts: new Set(data.adverse.results.map(e => 
//             e.device?.[0]?.brand_name)).size
//     };

//     // Update adverse events metrics display
//     document.getElementById('adverseTotalCount').textContent = adverseMetrics.totalEvents;
//     document.getElementById('adverseRecentCount').textContent = adverseMetrics.recentEvents;
//     document.getElementById('adverseProductCount').textContent = 
//         Object.keys(adverseMetrics.byType).length;
// }

// // Helper functions
// function calculateAverageReviewTime(submissions) {
//     const times = submissions
//         .filter(s => s.decision_date && s.date_received)
//         .map(s => {
//             const decision = new Date(s.decision_date);
//             const received = new Date(s.date_received);
//             return Math.round((decision - received) / (1000 * 60 * 60 * 24));
//         });
    
//     return times.length ? 
//         Math.round(times.reduce((a, b) => a + b) / times.length) : 
//         0;
// }

// function getRecentCount(items, dateField) {
//     const oneYearAgo = new Date();
//     oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    
//     return items.filter(item => {
//         const itemDate = new Date(item[dateField]);
//         return itemDate >= oneYearAgo;
//     }).length;
// }

// // Add these to your window assignments
// Object.assign(window, {
//     // ... existing assignments
//     updateEnhancedMetrics,
//     calculateAverageReviewTime,
//     getRecentCount
// });

// function calculateRecentTrend(events) {
//     const sixMonthsAgo = new Date();
//     sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
//     const recentEvents = events.filter(e => new Date(e.date_received) >= sixMonthsAgo);
//     const monthlyCount = recentEvents.reduce((acc, event) => {
//         const month = new Date(event.date_received).getMonth();
//         acc[month] = (acc[month] || 0) + 1;
//         return acc;
//     }, {});
    
//     return Object.values(monthlyCount);
// }

// function populate510k(data, page = 1) {
//     const tableBody = document.getElementById('510kTable');
//     if (!tableBody || !data?.results) return;

//     // Group submissions by device family
//     const groupedSubmissions = group510kSubmissions(data.results);
//     const groupEntries = Object.entries(groupedSubmissions);

//     // Pagination for groups
//     const start = (page - 1) * pageState.k510.size;
//     const paginatedGroups = groupEntries.slice(start, start + pageState.k510.size);

//     tableBody.innerHTML = paginatedGroups.map(([deviceFamily, submissions]) => `
//         <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="flex justify-between items-center cursor-pointer" 
//                      onclick="toggleDeviceGroup('${deviceFamily.replace(/[^a-zA-Z0-9]/g, '-')}-510k')">
//                     <div>
//                         <div class="font-medium text-gray-900 dark:text-gray-100">${deviceFamily}</div>
//                         <div class="text-sm text-gray-500 dark:text-gray-400">
//                             ${submissions[0].applicant} • ${submissions.length} submission${submissions.length > 1 ? 's' : ''}
//                         </div>
//                     </div>
// <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
//      fill="none" 
//      stroke="currentColor" 
//      viewBox="0 0 24 24">
//     <path stroke-linecap="round" 
//           stroke-linejoin="round" 
//           stroke-width="2" 
//           d="M19 9l-7 7-7-7"/>
// </svg>
//                 </div>
//             </td>
//         </tr>
//         <tr id="${deviceFamily.replace(/[^a-zA-Z0-9]/g, '-')}-510k" 
//             class="hidden bg-gray-50 dark:bg-gray-700">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="space-y-4">
//                     ${submissions.map(submission => `
//                         <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
//                             <div>
//                                 <div class="font-medium dark:text-gray-200">
//                                     ${submission.k_number}
//                                     <span class="text-sm text-gray-500 dark:text-gray-400">
//                                         (${formatDate(submission.decision_date)})
//                                     </span>
//                                 </div>
//                                 <div class="text-sm text-gray-500 dark:text-gray-400">
//                                     ${submission.device_name}
//                                 </div>
//                             </div>
//                             <div class="flex items-center space-x-4">
//                                 <span class="px-2 py-1 text-sm rounded-full ${getDecisionBadgeColor(submission.decision_code)}">
//                                     ${submission.decision_description}
//                                 </span>
//                                 <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=${submission.k_number}"
//                                    target="_blank"
//                                    class="text-blue-600 dark:text-blue-400 hover:underline">
//                                     View on FDA
//                                 </a>
//                                 <button onclick="show510kDetails('${submission.k_number}')"
//                                         class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//                                     Details
//                                 </button>
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//             </td>
//         </tr>
//     `).join('');

//     updatePaginationUI('k510', groupEntries.length, page);
// }


// function populateRegistrations(data, page = 1) {
//     const tableBody = document.getElementById('registrationsTable');
//     if (!tableBody || !data?.results) return;

//     // Group registrations
//     const groupedRegistrations = groupRegistrations(data.results);
//     const groupEntries = Object.entries(groupedRegistrations);

//     // Pagination for groups
//     const start = (page - 1) * pageState.registrations.size;
//     const paginatedGroups = groupEntries.slice(start, start + pageState.registrations.size);

//     tableBody.innerHTML = paginatedGroups.map(([groupType, facilities]) => `
//         <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="flex justify-between items-center cursor-pointer" 
//                      onclick="toggleDeviceGroup('${groupType.replace(/[^a-zA-Z0-9]/g, '-')}-reg')">
//                     <div>
//                         <div class="font-medium text-gray-900 dark:text-gray-100">${groupType}</div>
//                         <div class="text-sm text-gray-500 dark:text-gray-400">
//                             ${facilities.length} facilit${facilities.length > 1 ? 'ies' : 'y'}
//                         </div>
//                     </div>
// <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
//      fill="none" 
//      stroke="currentColor" 
//      viewBox="0 0 24 24">
//     <path stroke-linecap="round" 
//           stroke-linejoin="round" 
//           stroke-width="2" 
//           d="M19 9l-7 7-7-7"/>
// </svg>
//                 </div>
//             </td>
//         </tr>
//         <tr id="${groupType.replace(/[^a-zA-Z0-9]/g, '-')}-reg" 
//             class="hidden bg-gray-50 dark:bg-gray-700">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="space-y-4">
//                     ${facilities.map(reg => `
//                         <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
//                             <div>
//                                 <div class="font-medium dark:text-gray-200">
//                                     ${reg.registration?.name || 'N/A'}
//                                 </div>
//                                 <div class="text-sm text-gray-500 dark:text-gray-400">
//                                     ${reg.registration?.city || ''}, ${reg.registration?.iso_country_code || ''}
//                                 </div>
//                             </div>
//                             <div class="flex items-center space-x-4">
//                                 <span class="px-2 py-1 text-sm rounded-full ${getRegistrationStatusBadgeColor(reg.registration?.status_code)}">
//                                     ${reg.registration?.status_code === "1" ? "Active" : "Inactive"}
//                                 </span>
//                                 <button onclick="showRegistrationDetails('${reg.registration?.registration_number}')"
//                                         class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//                                     Details
//                                 </button>
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//             </td>
//         </tr>
//     `).join('');

//     updatePaginationUI('registrations', groupEntries.length, page);
// }

// function populateAdverseEvents(data, page = 1) {
//     const tableBody = document.getElementById('adverseTable');
//     if (!tableBody || !data?.results) return;

//     // Group adverse events
//     const groupedEvents = groupAdverseEvents(data.results);
//     const groupEntries = Object.entries(groupedEvents);

//     // Pagination for groups
//     const start = (page - 1) * pageState.adverse.size;
//     const paginatedGroups = groupEntries.slice(start, start + pageState.adverse.size);

//     tableBody.innerHTML = paginatedGroups.map(([eventType, events]) => `
//         <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="flex justify-between items-center cursor-pointer" 
//                      onclick="toggleDeviceGroup('${eventType.replace(/[^a-zA-Z0-9]/g, '-')}-adverse')">
//                     <div>
//                         <div class="font-medium text-gray-900 dark:text-gray-100">${eventType}</div>
//                         <div class="text-sm text-gray-500 dark:text-gray-400">
//                             ${events.length} event${events.length > 1 ? 's' : ''}
//                         </div>
//                     </div>
// <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
//      fill="none" 
//      stroke="currentColor" 
//      viewBox="0 0 24 24">
//     <path stroke-linecap="round" 
//           stroke-linejoin="round" 
//           stroke-width="2" 
//           d="M19 9l-7 7-7-7"/>
// </svg>
//                 </div>
//             </td>
//         </tr>
//         <tr id="${eventType.replace(/[^a-zA-Z0-9]/g, '-')}-adverse" 
//             class="hidden bg-gray-50 dark:bg-gray-700">
//             <td colspan="5" class="px-6 py-4">
//                 <div class="space-y-4">
//                     ${events.map(event => `
//                         <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
//                             <div>
//                                 <div class="font-medium dark:text-gray-200">
//                                     ${event.report_number}
//                                     <span class="text-sm text-gray-500 dark:text-gray-400">
//                                         (${formatDate(event.date_received)})
//                                     </span>
//                                 </div>
//                                 <div class="text-sm text-gray-500 dark:text-gray-400">
//                                     ${event.device?.[0]?.brand_name || 'N/A'}
//                                 </div>
//                             </div>
//                             <div class="flex items-center space-x-4">
//                                 <span class="px-2 py-1 text-sm rounded-full ${getEventTypeBadgeColor(event.event_type)}">
//                                     ${event.event_type}
//                                 </span>
//                                 <button onclick="showAdverseEventDetails('${event.report_number}')"
//                                         class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//                                     Details
//                                 </button>
//                             </div>
//                         </div>
//                     `).join('')}
//                 </div>
//             </td>
//         </tr>
//     `).join('');

//     updatePaginationUI('adverse', groupEntries.length, page);
    
// }



// function updatePaginationUI(section, total, currentPage) {
//     const state = pageState[section];
//     const totalPages = Math.ceil(total / state.size);
    
//     // Update page numbers
//     const startEl = document.getElementById(`${section}PageStart`);
//     const endEl = document.getElementById(`${section}PageEnd`);
//     const totalEl = document.getElementById(`${section}Total`);
    
//     if (startEl) {
//         startEl.textContent = ((currentPage - 1) * state.size) + 1;
//     }
//     if (endEl) {
//         endEl.textContent = Math.min(currentPage * state.size, total);
//     }
//     if (totalEl) {
//         totalEl.textContent = total;
//     }
//     // Update button states
//     const prevButton = document.getElementById(`${section}PrevPage`);
//     const nextButton = document.getElementById(`${section}NextPage`);

//     if (prevButton) {
//         prevButton.disabled = currentPage === 1;
//         prevButton.classList.toggle('opacity-50', currentPage === 1);
//     }

//     if (nextButton) {
//         nextButton.disabled = currentPage >= totalPages;
//         nextButton.classList.toggle('opacity-50', currentPage >= totalPages);
//     }
// }

// // Modal Functions
// function setupModal() {
//     const modal = document.getElementById('detail-modal');
//     const closeButton = document.getElementById('modal-close');

//     if (closeButton) {
//         closeButton.onclick = () => {
//             modal?.classList.add('hidden');
//         };
//     }

//     window.onclick = (event) => {
//         if (event.target === modal) {
//             modal?.classList.add('hidden');
//         }
//     };
// }

// function showUDIDetails(recordKey) {
//     const data = window.globalFDAData?.udi.results.find(d => d.public_device_record_key === recordKey);
//     if (!data) return;

//     const modal = document.getElementById('detail-modal');
//     const modalTitle = document.getElementById('modal-title');
//     const modalContent = document.getElementById('modal-content');

//     if (!modal || !modalTitle || !modalContent) return;

//     modalTitle.textContent = `UDI Device: ${data.brand_name}`;
    
//     modalContent.innerHTML = `
//         <div class="space-y-6">
//             <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
//                 <div class="flex justify-between items-center">
//                     <div>
//                         <h4 class="font-semibold text-blue-900 dark:text-blue-100">Device Information</h4>
//                         <p class="text-sm text-blue-700 dark:text-blue-200">${data.identifiers?.[0]?.id || 'No ID'}</p>
//                     </div>
//                     <span class="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
//                         ${data.commercial_distribution_status || 'Status Unknown'}
//                     </span>
//                 </div>
//             </div>

//             <div class="grid grid-cols-2 gap-4">
//                 <div>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Model/Version</p>
//                     <p class="font-medium dark:text-white">${data.version_or_model_number || 'N/A'}</p>
//                 </div>
//                 <div>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Device Class</p>
//                     <p class="font-medium dark:text-white">Class ${data.product_codes?.[0]?.openfda?.device_class || 'N/A'}</p>
//                 </div>
//             </div>

//             ${data.gmdn_terms?.[0] ? `
//                 <div class="border dark:border-gray-700 rounded-lg p-4">
//                     <h5 class="font-medium mb-2 dark:text-white">GMDN Classification</h5>
//                     <p class="text-gray-700 dark:text-gray-300">${data.gmdn_terms[0].name}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">${data.gmdn_terms[0].definition}</p>
//                 </div>
//             ` : ''}

//             <div class="grid grid-cols-2 gap-4">
//                 <div class="col-span-2">
//                     <h5 class="font-medium mb-2 dark:text-white">Product Characteristics</h5>
//                     <div class="grid grid-cols-2 gap-4">
//                         <div class="flex items-center">
//                             <span class="text-gray-600 dark:text-gray-400">Single Use:</span>
//                             <span class="ml-2 dark:text-white">${data.is_single_use === 'true' ? 'Yes' : 'No'}</span>
//                         </div>
//                         <div class="flex items-center">
//                             <span class="text-gray-600 dark:text-gray-400">Prescription:</span>
//                             <span class="ml-2 dark:text-white">${data.is_rx === 'true' ? 'Required' : 'OTC'}</span>
//                         </div>
//                         <div class="flex items-center">
//                             <span class="text-gray-600 dark:text-gray-400">MRI Safety:</span>
//                             <span class="ml-2 dark:text-white">${data.mri_safety || 'Not Specified'}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             ${data.customer_contacts?.[0] ? `
//                 <div class="border-t dark:border-gray-700 pt-4 mt-4">
//                     <h5 class="font-medium mb-2 dark:text-white">Contact Information</h5>
//                     <p class="text-gray-700 dark:text-gray-300">
//                         Phone: ${data.customer_contacts[0].phone}<br>
//                         Email: ${data.customer_contacts[0].email}
//                     </p>
//                 </div>
//             ` : ''}
//         </div>
//     `;

//     modal.classList.remove('hidden');
// }

// function showAdverseEventDetails(reportNumber) {
//     const data = window.globalFDAData?.adverse.results.find(d => d.report_number === reportNumber);
//     if (!data) return;

//     const modal = document.getElementById('detail-modal');
//     const modalTitle = document.getElementById('modal-title');
//     const modalContent = document.getElementById('modal-content');

//     if (!modal || !modalTitle || !modalContent) return;

//     modalTitle.textContent = `Adverse Event Report: ${reportNumber}`;
    
//     modalContent.innerHTML = `
//         <div class="space-y-6">
//             <div class="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
//                 <div class="flex justify-between items-center">
//                     <div>
//                         <h4 class="font-semibold text-red-900 dark:text-red-100">Event Information</h4>
//                         <p class="text-sm text-red-700 dark:text-red-200">Reported on ${formatDate(data.date_received)}</p>
//                     </div>
//                     <span class="px-3 py-1 text-sm rounded-full bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200">
//                         ${data.event_type}
//                     </span>
//                 </div>
//             </div>

//             ${data.device?.[0] ? `
//                 <div class="border dark:border-gray-700 rounded-lg p-4">
//                     <h5 class="font-medium mb-2 dark:text-white">Device Information</h5>
//                     <p class="font-medium dark:text-white">${data.device[0].brand_name || 'N/A'}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">${data.device[0].generic_name || ''}</p>
//                     ${data.device[0].model_number ? `
//                         <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Model: ${data.device[0].model_number}</p>
//                     ` : ''}
//                 </div>
//             ` : ''}

//             ${data.mdr_text?.length ? `
//                 <div class="border dark:border-gray-700 rounded-lg p-4">
//                     <h5 class="font-medium mb-2 dark:text-white">Event Description</h5>
//                     ${data.mdr_text.map(text => `
//                         <div class="mb-4">
//                             <p class="text-sm font-medium text-gray-600 dark:text-gray-400">${text.text_type_code}</p>
//                             <p class="mt-1 text-gray-700 dark:text-gray-300">${text.text}</p>
//                         </div>
//                     `).join('')}
//                 </div>
//             ` : ''}

//             ${data.product_problems?.length ? `
//                 <div class="border dark:border-gray-700 rounded-lg p-4">
//                     <h5 class="font-medium mb-2 dark:text-white">Product Problems</h5>
//                     <ul class="list-disc list-inside text-gray-700 dark:text-gray-300">
//                         ${data.product_problems.map(problem => `
//                             <li>${problem}</li>
//                         `).join('')}
//                     </ul>
//                 </div>
//             ` : ''}
//         </div>
//     `;

//     modal.classList.remove('hidden');
// }

// // Utility Functions
// function formatDate(dateString) {
//     if (!dateString) return 'N/A';
    
//     try {
//         // Handle YYYYMMDD format
//         if (dateString.length === 8 && !isNaN(dateString)) {
//             const year = dateString.substring(0, 4);
//             const month = dateString.substring(4, 6);
//             const day = dateString.substring(6, 8);
//             const date = new Date(year, month - 1, day);
            
//             if (!isNaN(date.getTime())) {
//                 return date.toLocaleDateString('en-US', {
//                     year: 'numeric',
//                     month: 'short',
//                     day: 'numeric'
//                 });
//             }
//         }

//         const date = new Date(dateString);
//         if (!isNaN(date.getTime())) {
//             return date.toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'short',
//                 day: 'numeric'
//             });
//         }

//         return dateString;
//     } catch (error) {
//         console.warn(`Date parsing error for ${dateString}:`, error);
//         return dateString;
//     }
// }

// function getDeviceClassBadgeColor(deviceClass) {
//     switch (deviceClass) {
//         case '1': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//         case '2': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
//         case '3': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
//         default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
//     }
// }

// function getStatusBadgeColor(status) {
//     if (status?.includes('Commercial Distribution')) {
//         return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//     }
//     return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
// }

// function getDecisionBadgeColor(decision) {
//     switch (decision) {
//         case 'SESE': return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//         case 'NSEQ': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
//         default: return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
//     }
// }

// function getEventTypeBadgeColor(type) {
//     switch (type?.toLowerCase()) {
//         case 'injury': return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
//         case 'death': return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
//         case 'malfunction': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
//         default: return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
//     }
// }

// function getRegistrationStatusBadgeColor(status) {
//     return status === "1" ? 
//         'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 
//         'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
// }

// function setupTabNavigation() {
//     const tabs = document.querySelectorAll('.tab-button');
//     const contents = document.querySelectorAll('.tab-content');
//     let activeTab = null;

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             if (activeTab) {
//                 activeTab.classList.remove('border-blue-500', 'text-blue-600', 'dark:text-blue-400');
//             }
            
//             contents.forEach(content => {
//                 content.classList.add('hidden');
//             });

//             const tabId = tab.id;
//             const contentId = `tab-content-${tabId.split('-')[1]}`;
//             const content = document.getElementById(contentId);
            
//             if (content) {
//                 content.classList.remove('hidden');
//                 tab.classList.add('border-blue-500', 'text-blue-600', 'dark:text-blue-400');
//                 activeTab = tab;
//             }
//         });
//     });

//     // Activate first tab by default
//     if (tabs.length > 0) {
//         const firstTabId = tabs[0].id;
//         const firstContentId = `tab-content-${firstTabId.split('-')[1]}`;
//         const firstContent = document.getElementById(firstContentId);
        
//         if (firstContent) {
//             tabs[0].classList.add('border-blue-500', 'text-blue-600', 'dark:text-blue-400');
//             firstContent.classList.remove('hidden');
//             activeTab = tabs[0];
//         }
//     }

//     // Set up pagination handlers
//     setupPaginationHandlers();
// }

// function setupPaginationHandlers() {
//     // UDI pagination
//     document.getElementById('udiPrevPage')?.addEventListener('click', () => {
//         if (pageState.udi.current > 1) {
//             pageState.udi.current--;
//             populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
//         }
//     });

//     document.getElementById('udiNextPage')?.addEventListener('click', () => {
//         const totalPages = Math.ceil(window.globalFDAData.udi.results.length / pageState.udi.size);
//         if (pageState.udi.current < totalPages) {
//             pageState.udi.current++;
//             populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
//         }
//     });

//     // 510k pagination
//     document.getElementById('510kPrevPage')?.addEventListener('click', () => {
//         if (pageState.k510.current > 1) {
//             pageState.k510.current--;
//             populate510k(window.globalFDAData.k510, pageState.k510.current);
//         }
//     });

//     document.getElementById('510kNextPage')?.addEventListener('click', () => {
//         const totalPages = Math.ceil(window.globalFDAData.k510.results.length / pageState.k510.size);
//         if (pageState.k510.current < totalPages) {
//             pageState.k510.current++;
//             populate510k(window.globalFDAData.k510, pageState.k510.current);
//         }
//     });

//     // Registrations pagination
//     document.getElementById('regPrevPage')?.addEventListener('click', () => {
//         if (pageState.registrations.current > 1) {
//             pageState.registrations.current--;
//             populateRegistrations(window.globalFDAData.registrations, pageState.registrations.current);
//         }
//     });

//     document.getElementById('regNextPage')?.addEventListener('click', () => {
//         const totalPages = Math.ceil(window.globalFDAData.registrations.results.length / pageState.registrations.size);
//         if (pageState.registrations.current < totalPages) {
//             pageState.registrations.current++;
//             populateRegistrations(window.globalFDAData.registrations, pageState.registrations.current);
//         }
//     });

//     // Adverse events pagination
//     document.getElementById('adversePrevPage')?.addEventListener('click', () => {
//         if (pageState.adverse.current > 1) {
//             pageState.adverse.current--;
//             populateAdverseEvents(window.globalFDAData.adverse, pageState.adverse.current);
//         }
//     });

//     document.getElementById('adverseNextPage')?.addEventListener('click', () => {
//         const totalPages = Math.ceil(window.globalFDAData.adverse.results.length / pageState.adverse.size);
//         if (pageState.adverse.current < totalPages) {
//             pageState.adverse.current++;
//             populateAdverseEvents(window.globalFDAData.adverse, pageState.adverse.current);
//         }
//     });
// }

// function showErrorState(error) {
//     const elements = ['totalUDI', 'total510k', 'totalRegistrations', 'totalAdverse'];
//     elements.forEach(id => {
//         document.getElementById(id).textContent = '0';
//     });

//     // Show error message in tables
//     const tables = document.querySelectorAll('tbody');
//     tables.forEach(table => {
//         table.innerHTML = `
//             <tr>
//                 <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
//                     Error loading FDA data: ${error.message}
//                 </td>
//             </tr>
//         `;
//     });
// }

// // Store the FDA data globally for modal access
// window.globalFDAData = null;

// // Export main function and utilities
// export {
//     renderFDADashboard as default,
//     showUDIDetails,
//     showAdverseEventDetails,
//     formatDate,
//     getDeviceClassBadgeColor,
//     getStatusBadgeColor,
//     getDecisionBadgeColor,
//     getEventTypeBadgeColor,
//     getRegistrationStatusBadgeColor
// };

// // Make functions globally available for event handlers
// Object.assign(window, {
//     showUDIDetails,
//     showAdverseEventDetails,
//     formatDate,
//     getDeviceClassBadgeColor,
//     getStatusBadgeColor,
//     getDecisionBadgeColor,
//     getEventTypeBadgeColor,
//     getRegistrationStatusBadgeColor,
//     setupTableSearch
// });
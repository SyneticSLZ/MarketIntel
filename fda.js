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
  // Declare variables in a broader scope
  let loadingSpinner = document.getElementById('loading-spinner-fda');
  let statsSkeleton = document.getElementById('stats-skeleton');

  try {
    window.pageState = {
      udi: { current: 1, size: 10 },
      pma: { current: 1, size: 10 }
    };

    if (loadingSpinner) loadingSpinner.classList.remove('hidden');
    if (statsSkeleton) statsSkeleton.classList.remove('hidden');

    const tables = ['udiTable', 'pmaTable'];
    tables.forEach(tableId => {
      const table = document.getElementById(tableId);
      if (table) table.innerHTML = '';
    });

    const data = await loadFDAData(companyName);
    console.log('FDA Data Loaded:', data);

    const normalizedData = {
      udi: { results: data.udi?.data || data.udi?.results || [] },
      pma: { results: data.pma?.data || data.pma?.results || [] }
    };

    window.globalFDAData = normalizedData;
    destroyCharts();

    setupModal();
    
    const hasData = normalizedData.udi.results.length > 0 || normalizedData.pma.results.length > 0;
    const isNeuroPace = companyName === "NeuroPace";

    // Hide all sections by default
    ['udi-section', 'pma-section', '510k-section', 'registrations-section', 'adverse-section'].forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) section.classList.add('hidden');
    });

    if (hasData) {
      updateOverviewStats(normalizedData);
      initializeCharts(normalizedData);

      document.getElementById('fdacharts').classList.remove('hidden');
      document.getElementById('fdam').classList.remove('hidden');

      if (["Livanova", "Medtronic"].includes(companyName) && normalizedData.udi.results.length) {
        const udiSection = document.getElementById('udi-section');
        if (udiSection) {
          populateUDIDevices(normalizedData.udi);
          udiSection.classList.remove('hidden');
        }
      }

      if (["Livanova", "Medtronic", "NeuroPace"].includes(companyName) && normalizedData.pma.results.length) {
        const pmaSection = document.getElementById('pma-section');
        if (pmaSection) {
          populatePMA(normalizedData.pma);
          pmaSection.classList.remove('hidden');
        }
      }

      const noDataMessage = document.getElementById('no-data-message');
      if (noDataMessage) noDataMessage.classList.add('hidden');

      // Only show AI summary for NeuroPace if it has no UDI data
      if (isNeuroPace && !normalizedData.udi.results.length) {
        displayAISummary(companyName);
      } else {
        const summaryEl = document.getElementById('ai-summary');
        if (summaryEl) summaryEl.innerHTML = '';
      }
    } else {
      // For companies with no data, show only the no-data message and AI summary
      const noDataMessage = document.getElementById('no-data-message');
      document.getElementById('fdacharts').classList.add('hidden');
      document.getElementById('fdam').classList.add('hidden');
      if (noDataMessage) noDataMessage.classList.remove('hidden');

      
      ['udi-section', 'pma-section'].forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.classList.add('hidden');
      });

      updateOverviewStats({ udi: { results: [] }, pma: { results: [] } }); // Reset stats to 0
      displayAISummary(companyName); // Show AI summary only for no-data companies
    }

    setupPaginationHandlers();
    setupTableSearch();

  } catch (error) {
    console.error('Error rendering FDA dashboard:', error);
    showErrorState(error);
  } finally {
    if (loadingSpinner) loadingSpinner.classList.add('hidden');
    if (statsSkeleton) statsSkeleton.classList.add('hidden');
  }
}

async function loadFDAData(companyName) {
  try {
    const data = {};
    
    if (["Livanova", "Medtronic"].includes(companyName)) {
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
      try {
        data.pma = await fetch(`./data/${companyName}/pma.json`).then(res => res.json());
      } catch (error) {
        console.warn(`Failed to load PMA data for ${companyName}:`, error);
        data.pma = { data: [] };
      }
      data.udi = { data: [] }; // NeuroPace has no UDI data
    } else {
      data.udi = { data: [] };
      data.pma = { data: [] };
    }
    
    return data;
  } catch (error) {
    console.error(`Failed to load FDA data: ${error.message}`);
    return {
      udi: { data: [] },
      pma: { data: [] }
    };
  }
}

function updateOverviewStats(data) {
  setElementTextSafely('totalUDI', data.udi?.results?.length || '0');
  setElementTextSafely('totalPMA', data.pma?.results?.length || '0');
  
  const hiddenStats = ['total510k', 'totalRegistrations', 'totalAdverse'];
  hiddenStats.forEach(id => {
    const element = document.getElementById(id);
    if (element && element.parentElement) {
      element.parentElement.style.display = 'none';
    }
  });

  // Specifically hide UDI stat for NeuroPace
  if (window.globalFDAData?.udi.results.length === 0) {
    const udiStat = document.getElementById('totalUDI');
    if (udiStat && udiStat.parentElement) {
      udiStat.parentElement.style.display = 'none';
    }
  }
}

function initializeCharts(data) {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not found, skipping chart initialization');
    return;
  }

  const chartContainers = [
    'pma_timeline_chart',
    'udi_distribution_chart',
    'fda_safety_timeline_chart_101',
    'fda_geographic_chart_102',
    'fda_classification_chart_103',
    'fda_portfolio_chart_104'
  ];

  // Hide all chart containers by default
  chartContainers.forEach(id => {
    const container = document.getElementById(id);
    if (container && container.parentElement && container.parentElement.parentElement) {
      container.parentElement.parentElement.style.display = 'none';
    }
  });

  if (data.pma?.results?.length) {
    const pmaTimelineCtx = document.getElementById('pma_timeline_chart');
    if (pmaTimelineCtx) {
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
        pmaTimelineCtx.parentElement.parentElement.style.display = 'block';
      } catch (error) {
        console.warn('Error creating PMA timeline chart:', error);
      }
    }
  }

  if (data.udi?.results?.length) {
    const udiDistCtx = document.getElementById('udi_distribution_chart');
    if (udiDistCtx) {
      try {
        const distData = processUDIDeviceStatus(data.udi.results);
        const udiDistChart = new Chart(udiDistCtx, {
          type: 'doughnut',
          data: {
            labels: distData.labels,
            datasets: [{
              data: distData.data,
              backgroundColor: distData.colors,
              borderWidth: 2,
              borderColor: '#ffffff'
            }]
          },
          options: {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Device Distribution Status',
                font: { size: 16, weight: 'bold' }
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    const label = context.label;
                    const value = context.raw;
                    const percentage = ((value / distData.total) * 100).toFixed(1);
                    return `${label}: ${value} devices (${percentage}%)`;
                  },
                  afterLabel: (context) => {
                    const examples = distData.examples[context.dataIndex];
                    return examples ? ['', 'Examples:', ...examples.slice(0, 3).map(ex => `• ${ex}`)] : [];
                  }
                }
              },
              legend: { 
                position: 'bottom',
                labels: {
                  padding: 20,
                  usePointStyle: true
                }
              }
            },
            cutout: '40%'
          }
        });
        activeCharts.push(udiDistChart);
        udiDistCtx.parentElement.parentElement.style.display = 'block';
      } catch (error) {
        console.warn('Error creating UDI status chart:', error);
      }
    }
  }
}

// Helper function to safely set text content
function setElementTextSafely(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
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

function processUDIDeviceStatus(udiData) {
  const statusData = {};
  const examples = {};
  
  udiData.forEach(device => {
    const status = device.commercial_distribution_status || 'Unknown Status';
    const deviceName = device.brand_name || 'Unknown Device';
    
    // Simplify status names for better readability
    let simpleStatus = status;
    if (status.includes('Commercial Distribution')) {
      simpleStatus = 'In Commercial Distribution';
    } else if (status.includes('Not in Commercial Distribution')) {
      simpleStatus = 'Not in Commercial Distribution';
    } else if (status.includes('Unknown')) {
      simpleStatus = 'Status Unknown';
    }
    
    // Count devices by status
    statusData[simpleStatus] = (statusData[simpleStatus] || 0) + 1;
    
    // Store examples for tooltips
    if (!examples[simpleStatus]) examples[simpleStatus] = [];
    if (examples[simpleStatus].length < 5) {
      examples[simpleStatus].push(deviceName);
    }
  });

  const labels = Object.keys(statusData);
  const data = Object.values(statusData);
  const total = data.reduce((sum, val) => sum + val, 0);
  
  // Better color scheme for status
  const colors = labels.map(label => {
    if (label.includes('Commercial Distribution')) return '#10B981'; // Green
    if (label.includes('Not in Commercial')) return '#EF4444'; // Red
    if (label.includes('Unknown')) return '#6B7280'; // Gray
    return '#3B82F6'; // Blue default
  });

  return { labels, data, colors, total, examples };
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
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b dark:border-gray-600 space-y-2 sm:space-y-0">
                <div class="flex-1">
                  <div class="font-medium dark:text-gray-200">
                    ${device.brand_name || 'Unknown Device'}
                    ${device.version_or_model_number ? 
                      `<span class="text-sm text-gray-500 dark:text-gray-400">(${device.version_or_model_number})</span>` : ''}
                  </div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    ${device.company_name || getDeviceCategory(device) || formatDate(device.publish_date) || 'N/A'}
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <span class="px-2 py-1 text-sm rounded-full ${getStatusBadgeColor(device.commercial_distribution_status)} text-center">
                    ${device.commercial_distribution_status || 'Unknown Status'}
                  </span>
                  <div class="flex space-x-2">
                    <button onclick="showUDIDetails('${device.public_device_record_key}')"
                            class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm">
                      Details
                    </button>
                    <button onclick="copyUDIKey('${device.public_device_record_key}')"
                            class="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm inline-flex items-center">
                      Copy ID
                      <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </td>
      </tr>
    `).join('');

    updatePaginationUI('udi', groupEntries.length, page);
    
    // Scroll to top of table section after pagination
    const udiSection = document.getElementById('udi-section');
    if (udiSection && page > 1) {
      udiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

// Function to copy UDI key to clipboard
function copyUDIKey(recordKey) {
  if (navigator.clipboard && window.isSecureContext) {
    // Use modern clipboard API
    navigator.clipboard.writeText(recordKey).then(() => {
      showToast(`UDI Record Key copied: ${recordKey}`, 'success');
    }).catch(() => {
      fallbackCopyTextToClipboard(recordKey);
    });
  } else {
    // Fallback for older browsers or non-secure contexts
    fallbackCopyTextToClipboard(recordKey);
  }
}

// Fallback copy function
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast(`UDI Record Key copied: ${text}`, 'success');
  } catch (err) {
    showToast('Failed to copy to clipboard', 'error');
  }
  
  document.body.removeChild(textArea);
}

// Simple toast notification function
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 ${
    type === 'info' ? 'bg-blue-500 text-white' : 
    type === 'error' ? 'bg-red-500 text-white' : 
    type === 'success' ? 'bg-green-500 text-white' :
    'bg-gray-500 text-white'
  }`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 100);
  
  // Remove after delay
  setTimeout(() => {
    toast.style.transform = 'translateY(-100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, 3000);
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
          <div class="flex flex-col space-y-1">
            <span class="px-2 py-1 text-sm rounded-full ${getPMATypeBadgeColor(item.supplement_number)} text-center">
              ${item.supplement_number ? `Supplement S${item.supplement_number}` : 'Original PMA'}
            </span>
            ${item.supplement_type ? `<div class="text-xs text-gray-500 dark:text-gray-400">${item.supplement_type}</div>` : ''}
          </div>
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
    
    // Scroll to top of table section after pagination
    const pmaSection = document.getElementById('pma-section');
    if (pmaSection && page > 1) {
      pmaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

// New function to get badge color for PMA type
function getPMATypeBadgeColor(supplementNumber) {
  if (supplementNumber) {
    return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
  }
  return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
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
      </p>`,
    "XCORPRI": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for XCOPRI (SK Biopharmaceuticals)</h3>
      <p class="text-gray-700 dark:text-gray-300">
        XCOPRI has no PMA or UDI data because it is a pharmaceutical product (cenobamate), not a medical device, and thus falls under different FDA regulatory pathways (e.g., NDA). XCOPRI was approved in November 2019 for partial-onset seizures in adults, but this data is not captured in device-specific endpoints like PMA or UDI.
      </p>
    `,
    "Precisis AG": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Precisis AG</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Precisis AG has no FDA PMA or UDI data as of March 2025 because its EASEE System has not yet received FDA approval. The company received a Breakthrough Device Designation in 2022 and has CE Mark approval in Europe (2022), but U.S. clinical trials are ongoing.
      </p>
    `,
    "EpiMinder": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Epi-Minder</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Epi-Minder lacks FDA PMA or UDI data because its sub-scalp EEG monitor is still in the clinical trial phase in Australia, with no FDA approvals as of March 2025. The device aims to provide long-term seizure monitoring.
      </p>
    `,
    "FlowMedical": `
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Flow Medical/Flow Neuroscience</h3>
      <p class="text-gray-700 dark:text-gray-300">
        Flow Medical/Flow Neuroscience has no FDA PMA or UDI data for epilepsy applications because its Flow tDCS headset is approved in Europe for depression, not epilepsy, with no FDA approvals for this indication as of March 2025.
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
      const entries = row.querySelectorAll('[class*="flex flex-col sm:flex-row"]');
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
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h4 class="font-semibold text-blue-900 dark:text-blue-100">Device Information</h4>
            <p class="text-sm text-blue-700 dark:text-blue-200">${data.identifiers?.[0]?.id || 'No ID'}</p>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span class="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-center">
              ${data.commercial_distribution_status || 'Status Unknown'}
            </span>
            <button onclick="copyUDIKey('${data.public_device_record_key}')"
                    class="inline-flex items-center px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              Copy Record Key
              <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400">Record Key</p>
        <p class="font-medium dark:text-white font-mono text-sm">${data.public_device_record_key}</p>
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
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
          <div>
            <h4 class="font-semibold text-green-900 dark:text-green-100">Approval Information</h4>
            <p class="text-sm text-green-700 dark:text-green-200">Approved on ${formatDate(data.decision_date)}</p>
          </div>
          <span class="px-3 py-1 text-sm rounded-full ${getPMATypeBadgeColor(data.supplement_number)} text-center">
            ${data.supplement_number ? `Supplement S${data.supplement_number}` : 'Original PMA'}
          </span>
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Device Name</p>
          <p class="font-medium dark:text-white">${data.trade_name || data.generic_name || data.device_name || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">PMA Number</p>
          <p class="font-medium dark:text-white">${data.pma_number || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Applicant</p>
          <p class="font-medium dark:text-white">${data.applicant || 'N/A'}</p>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Approval Date</p>
          <p class="font-medium dark:text-white">${formatDate(data.decision_date)}</p>
        </div>
      </div>
      ${data.supplement_number ? `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Number</p>
            <p class="font-medium dark:text-white">S${data.supplement_number}</p>
          </div>
          ${data.supplement_type ? `
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Type</p>
              <p class="font-medium dark:text-white">${data.supplement_type}</p>
            </div>
          ` : ''}
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
      ${data.decision ? `
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400">Decision Code</p>
          <p class="font-medium dark:text-white">${data.decision}</p>
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
    prevButton.classList.toggle('cursor-not-allowed', currentPage <= 1);
  }

  if (nextButton) {
    nextButton.disabled = currentPage >= totalPages;
    nextButton.classList.toggle('opacity-50', currentPage >= totalPages);
    nextButton.classList.toggle('cursor-not-allowed', currentPage >= totalPages);
  }

  // Update page info display for better mobile visibility
  const pageInfoEl = document.getElementById(`${section}PageInfo`);
  if (pageInfoEl) {
    pageInfoEl.innerHTML = `
      <span class="text-sm text-gray-700 dark:text-gray-300">
        Page <span class="font-medium">${currentPage}</span> of <span class="font-medium">${totalPages}</span>
        <span class="hidden sm:inline">(${total > 0 ? ((currentPage - 1) * state.size) + 1 : 0}-${Math.min(currentPage * state.size, total)} of ${total})</span>
      </span>
    `;
  }
}

function setupPaginationHandlers() {
  // UDI pagination
  document.getElementById('udiPrevPage')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (pageState.udi.current > 1) {
      pageState.udi.current--;
      populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
    }
  });

  document.getElementById('udiNextPage')?.addEventListener('click', (e) => {
    e.preventDefault();
    const groupedDevices = groupDevices(window.globalFDAData.udi.results || []);
    const totalGroups = Object.keys(groupedDevices).length;
    const totalPages = Math.ceil(totalGroups / pageState.udi.size);
    if (pageState.udi.current < totalPages) {
      pageState.udi.current++;
      populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
    }
  });

  // PMA pagination
  document.getElementById('pmaPrevPage')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (pageState.pma.current > 1) {
      pageState.pma.current--;
      populatePMA(window.globalFDAData.pma, pageState.pma.current);
    }
  });

  document.getElementById('pmaNextPage')?.addEventListener('click', (e) => {
    e.preventDefault();
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
  getPMATypeBadgeColor,
  toggleDeviceGroup,
  copyUDIKey,
  showToast
});

// Export the main function and utility functions
export {
  renderFDADashboard as default,
  showUDIDetails,
  showPMADetails,
  formatDate,
  getStatusBadgeColor,
  getDecisionBadgeColor,
  getPMATypeBadgeColor,
  copyUDIKey,
  showToast
};

// let activeCharts = [];

// function destroyCharts() {
//   activeCharts.forEach(chart => {
//     if (chart) {
//       chart.destroy();
//     }
//   });
//   activeCharts = [];
// }

// async function renderFDADashboard(companyName) {
//   // Declare variables in a broader scope
//   let loadingSpinner = document.getElementById('loading-spinner-fda');
//   let statsSkeleton = document.getElementById('stats-skeleton');

//   try {
//     window.pageState = {
//       udi: { current: 1, size: 10 },
//       pma: { current: 1, size: 10 }
//     };

//     if (loadingSpinner) loadingSpinner.classList.remove('hidden');
//     if (statsSkeleton) statsSkeleton.classList.remove('hidden');

//     const tables = ['udiTable', 'pmaTable'];
//     tables.forEach(tableId => {
//       const table = document.getElementById(tableId);
//       if (table) table.innerHTML = '';
//     });

//     const data = await loadFDAData(companyName);
//     console.log('FDA Data Loaded:', data);

//     const normalizedData = {
//       udi: { results: data.udi?.data || data.udi?.results || [] },
//       pma: { results: data.pma?.data || data.pma?.results || [] }
//     };

//     window.globalFDAData = normalizedData;
//     destroyCharts();

//     setupModal();
    
//     const hasData = normalizedData.udi.results.length > 0 || normalizedData.pma.results.length > 0;
//     const isNeuroPace = companyName === "NeuroPace";

//     // Hide all sections by default
//     ['udi-section', 'pma-section', '510k-section', 'registrations-section', 'adverse-section'].forEach(sectionId => {
//       const section = document.getElementById(sectionId);
//       if (section) section.classList.add('hidden');
//     });

//     if (hasData) {
//       updateOverviewStats(normalizedData);
//       initializeCharts(normalizedData);

//       document.getElementById('fdacharts').classList.remove('hidden');
//       document.getElementById('fdam').classList.remove('hidden');

//       if (["Livanova", "Medtronic"].includes(companyName) && normalizedData.udi.results.length) {
//         const udiSection = document.getElementById('udi-section');
//         if (udiSection) {
//           populateUDIDevices(normalizedData.udi);
//           udiSection.classList.remove('hidden');
//         }
//       }

//       if (["Livanova", "Medtronic", "NeuroPace"].includes(companyName) && normalizedData.pma.results.length) {
//         const pmaSection = document.getElementById('pma-section');
//         if (pmaSection) {
//           populatePMA(normalizedData.pma);
//           pmaSection.classList.remove('hidden');
//         }
//       }

//       const noDataMessage = document.getElementById('no-data-message');
//       if (noDataMessage) noDataMessage.classList.add('hidden');

//       // Only show AI summary for NeuroPace if it has no UDI data
//       if (isNeuroPace && !normalizedData.udi.results.length) {
//         displayAISummary(companyName);
//       } else {
//         const summaryEl = document.getElementById('ai-summary');
//         if (summaryEl) summaryEl.innerHTML = '';
//       }
//     } else {
//       // For companies with no data, show only the no-data message and AI summary
//       const noDataMessage = document.getElementById('no-data-message');
//       document.getElementById('fdacharts').classList.add('hidden');
//       document.getElementById('fdam').classList.add('hidden');
//       if (noDataMessage) noDataMessage.classList.remove('hidden');

      
//       ['udi-section', 'pma-section'].forEach(sectionId => {
//         const section = document.getElementById(sectionId);
//         if (section) section.classList.add('hidden');
//       });

//       updateOverviewStats({ udi: { results: [] }, pma: { results: [] } }); // Reset stats to 0
//       displayAISummary(companyName); // Show AI summary only for no-data companies
//     }

//     setupPaginationHandlers();
//     setupTableSearch();

//   } catch (error) {
//     console.error('Error rendering FDA dashboard:', error);
//     showErrorState(error);
//   } finally {
//     if (loadingSpinner) loadingSpinner.classList.add('hidden');
//     if (statsSkeleton) statsSkeleton.classList.add('hidden');
//   }
// }

// async function loadFDAData(companyName) {
//   try {
//     const data = {};
    
//     if (["Livanova", "Medtronic"].includes(companyName)) {
//       try {
//         data.udi = await fetch(`./data/${companyName}/udi.json`).then(res => res.json());
//       } catch (error) {
//         console.warn(`Failed to load UDI data for ${companyName}:`, error);
//         data.udi = { data: [] };
//       }
      
//       try {
//         data.pma = await fetch(`./data/${companyName}/pma.json`).then(res => res.json());
//       } catch (error) {
//         console.warn(`Failed to load PMA data for ${companyName}:`, error);
//         data.pma = { data: [] };
//       }
//     } else if (companyName === "NeuroPace") {
//       try {
//         data.pma = await fetch(`./data/${companyName}/pma.json`).then(res => res.json());
//       } catch (error) {
//         console.warn(`Failed to load PMA data for ${companyName}:`, error);
//         data.pma = { data: [] };
//       }
//       data.udi = { data: [] }; // NeuroPace has no UDI data
//     } else {
//       data.udi = { data: [] };
//       data.pma = { data: [] };
//     }
    
//     return data;
//   } catch (error) {
//     console.error(`Failed to load FDA data: ${error.message}`);
//     return {
//       udi: { data: [] },
//       pma: { data: [] }
//     };
//   }
// }

// function updateOverviewStats(data) {
//   setElementTextSafely('totalUDI', data.udi?.results?.length || '0');
//   setElementTextSafely('totalPMA', data.pma?.results?.length || '0');
  
//   const hiddenStats = ['total510k', 'totalRegistrations', 'totalAdverse'];
//   hiddenStats.forEach(id => {
//     const element = document.getElementById(id);
//     if (element && element.parentElement) {
//       element.parentElement.style.display = 'none';
//     }
//   });

//   // Specifically hide UDI stat for NeuroPace
//   if (window.globalFDAData?.udi.results.length === 0) {
//     const udiStat = document.getElementById('totalUDI');
//     if (udiStat && udiStat.parentElement) {
//       udiStat.parentElement.style.display = 'none';
//     }
//   }
// }

// function initializeCharts(data) {
//   if (typeof Chart === 'undefined') {
//     console.warn('Chart.js not found, skipping chart initialization');
//     return;
//   }

//   const chartContainers = [
//     'pma_timeline_chart',
//     'udi_distribution_chart',
//     'fda_safety_timeline_chart_101',
//     'fda_geographic_chart_102',
//     'fda_classification_chart_103',
//     'fda_portfolio_chart_104'
//   ];

//   // Hide all chart containers by default
//   chartContainers.forEach(id => {
//     const container = document.getElementById(id);
//     if (container && container.parentElement && container.parentElement.parentElement) {
//       container.parentElement.parentElement.style.display = 'none';
//     }
//   });

//   if (data.pma?.results?.length) {
//     const pmaTimelineCtx = document.getElementById('pma_timeline_chart');
//     if (pmaTimelineCtx) {
//       try {
//         const timelineData = processPMATimeline(data.pma.results);
//         const pmaTimelineChart = new Chart(pmaTimelineCtx, {
//           type: 'line',
//           data: {
//             labels: timelineData.labels,
//             datasets: [{
//               label: 'PMA Approvals',
//               data: timelineData.approvals,
//               borderColor: '#3B82F6',
//               backgroundColor: '#3B82F633',
//               fill: true,
//               tension: 0.4
//             }]
//           },
//           options: {
//             responsive: true,
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (context) => `Approvals: ${context.raw}`,
//                   afterBody: (context) => {
//                     const details = timelineData.details[context.dataIndex];
//                     return [
//                       '',
//                       'Devices:',
//                       ...details.devices.map(d => `• ${d.trade_name || d.device_name || 'Unknown Device'}`)
//                     ];
//                   }
//                 }
//               },
//               legend: { position: 'top' }
//             },
//             scales: {
//               x: { title: { display: true, text: 'Year' } },
//               y: { title: { display: true, text: 'Number of Approvals' }, beginAtZero: true }
//             }
//           }
//         });
//         activeCharts.push(pmaTimelineChart);
//         pmaTimelineCtx.parentElement.parentElement.style.display = 'block';
//       } catch (error) {
//         console.warn('Error creating PMA timeline chart:', error);
//       }
//     }
//   }

//   if (data.udi?.results?.length) {
//     const udiDistCtx = document.getElementById('udi_distribution_chart');
//     if (udiDistCtx) {
//       try {
//         const distData = processUDIDistribution(data.udi.results);
//         const udiDistChart = new Chart(udiDistCtx, {
//           type: 'pie',
//           data: {
//             labels: distData.labels,
//             datasets: [{
//               data: distData.data,
//               backgroundColor: distData.colors
//             }]
//           },
//           options: {
//             responsive: true,
//             plugins: {
//               tooltip: {
//                 callbacks: {
//                   label: (context) => {
//                     const label = context.label;
//                     const value = context.raw;
//                     const percentage = ((value / distData.total) * 100).toFixed(1);
//                     return `${label}: ${value} (${percentage}%)`;
//                   }
//                 }
//               },
//               legend: { position: 'right' }
//             }
//           }
//         });
//         activeCharts.push(udiDistChart);
//         udiDistCtx.parentElement.parentElement.style.display = 'block';
//       } catch (error) {
//         console.warn('Error creating UDI distribution chart:', error);
//       }
//     }
//   }
// }

// // Rest of the functions remain largely unchanged, but here's the modified displayAISummary:


// // Helper function to safely set text content
// function setElementTextSafely(elementId, text) {
//   const element = document.getElementById(elementId);
//   if (element) {
//     element.textContent = text;
//   }
// }

// // function initializeCharts(data) {
// //   // Only try to create charts if Chart.js is available
// //   if (typeof Chart === 'undefined') {
// //     console.warn('Chart.js not found, skipping chart initialization');
// //     return;
// //   }

// //   // 1. PMA Approval Timeline
// //   const pmaTimelineCtx = document.getElementById('pma_timeline_chart');
// //   if (pmaTimelineCtx && data.pma?.results?.length) {
// //     try {
// //       const timelineData = processPMATimeline(data.pma.results);
// //       const pmaTimelineChart = new Chart(pmaTimelineCtx, {
// //         type: 'line',
// //         data: {
// //           labels: timelineData.labels,
// //           datasets: [{
// //             label: 'PMA Approvals',
// //             data: timelineData.approvals,
// //             borderColor: '#3B82F6',
// //             backgroundColor: '#3B82F633',
// //             fill: true,
// //             tension: 0.4
// //           }]
// //         },
// //         options: {
// //           responsive: true,
// //           plugins: {
// //             tooltip: {
// //               callbacks: {
// //                 label: (context) => `Approvals: ${context.raw}`,
// //                 afterBody: (context) => {
// //                   const details = timelineData.details[context.dataIndex];
// //                   return [
// //                     '',
// //                     'Devices:',
// //                     ...details.devices.map(d => `• ${d.trade_name || d.device_name || 'Unknown Device'}`)
// //                   ];
// //                 }
// //               }
// //             },
// //             legend: { position: 'top' }
// //           },
// //           scales: {
// //             x: { title: { display: true, text: 'Year' } },
// //             y: { title: { display: true, text: 'Number of Approvals' }, beginAtZero: true }
// //           }
// //         }
// //       });
// //       activeCharts.push(pmaTimelineChart);
// //     } catch (error) {
// //       console.warn('Error creating PMA timeline chart:', error);
// //     }
// //   }

// //   // 2. UDI Device Distribution (for LivaNova and Medtronic)
// //   const udiDistCtx = document.getElementById('udi_distribution_chart');
// //   if (udiDistCtx && data.udi?.results?.length) {
// //     try {
// //       const distData = processUDIDistribution(data.udi.results);
// //       const udiDistChart = new Chart(udiDistCtx, {
// //         type: 'pie',
// //         data: {
// //           labels: distData.labels,
// //           datasets: [{
// //             data: distData.data,
// //             backgroundColor: distData.colors
// //           }]
// //         },
// //         options: {
// //           responsive: true,
// //           plugins: {
// //             tooltip: {
// //               callbacks: {
// //                 label: (context) => {
// //                   const label = context.label;
// //                   const value = context.raw;
// //                   const percentage = ((value / distData.total) * 100).toFixed(1);
// //                   return `${label}: ${value} (${percentage}%)`;
// //                 }
// //               }
// //             },
// //             legend: { position: 'right' }
// //           }
// //         }
// //       });
// //       activeCharts.push(udiDistChart);
// //     } catch (error) {
// //       console.warn('Error creating UDI distribution chart:', error);
// //     }
// //   }

// //   // Hide the other chart containers that might be in the HTML
// //   const hiddenChartContainers = [
// //     'fda_safety_timeline_chart_101',
// //     'fda_geographic_chart_102',
// //     'fda_classification_chart_103',
// //     'fda_portfolio_chart_104'
// //   ];
  
// //   hiddenChartContainers.forEach(id => {
// //     const container = document.getElementById(id);
// //     if (container && container.parentElement && container.parentElement.parentElement) {
// //       container.parentElement.parentElement.style.display = 'none';
// //     }
// //   });
// // }

// function processPMATimeline(pmaData) {
//   const yearlyData = pmaData.reduce((acc, item) => {
//     // Handle different date formats
//     let year;
//     try {
//       year = new Date(item.decision_date).getFullYear();
//       // Handle invalid dates
//       if (isNaN(year)) {
//         const match = String(item.decision_date).match(/\d{4}/);
//         year = match ? parseInt(match[0]) : 2020; // Fallback to a default year
//       }
//     } catch (e) {
//       year = 2020; // Fallback to a default year
//     }
    
//     if (!acc[year]) acc[year] = { count: 0, devices: [] };
//     acc[year].count++;
//     acc[year].devices.push({ 
//       trade_name: item.trade_name || 'Unknown Device',
//       device_name: item.generic_name || item.device_name || 'Unknown Device'
//     });
//     return acc;
//   }, {});

//   const years = Object.keys(yearlyData).sort();
//   return {
//     labels: years,
//     approvals: years.map(year => yearlyData[year].count),
//     details: years.map(year => yearlyData[year])
//   };
// }

// function processUDIDistribution(udiData) {
//   const categoryDict = {};
  
//   udiData.forEach(device => {
//     let category = 'Other';
    
//     // Try to extract category from product_codes
//     if (device.product_codes && device.product_codes.length > 0) {
//       // First try to get medical_specialty_description
//       for (let i = 0; i < device.product_codes.length; i++) {
//         const code = device.product_codes[i];
//         if (code.openfda && code.openfda.medical_specialty_description) {
//           category = code.openfda.medical_specialty_description;
//           break;
//         }
//       }
      
//       // If still no category, try device_name
//       if (category === 'Other') {
//         for (let i = 0; i < device.product_codes.length; i++) {
//           const code = device.product_codes[i];
//           if (code.openfda && code.openfda.device_name) {
//             category = code.openfda.device_name;
//             break;
//           }
//         }
//       }
//     }
    
//     // Add to category count
//     categoryDict[category] = (categoryDict[category] || 0) + 1;
//   });

//   const labels = Object.keys(categoryDict);
//   const data = Object.values(categoryDict);
//   const total = data.reduce((sum, val) => sum + val, 0);
//   const colors = labels.map((_, i) => `hsl(${(i * 360 / labels.length) % 360}, 70%, 50%)`);

//   return { labels, data, colors, total };
// }

// function populateUDIDevices(data, page = 1) {
//   const tableBody = document.getElementById('udiTable');
//   if (!tableBody || !data?.results?.length) return;

//   try {
//     const groupedDevices = groupDevices(data.results);
//     const groupEntries = Object.entries(groupedDevices);
//     const start = (page - 1) * pageState.udi.size;
//     const paginatedGroups = groupEntries.slice(start, start + pageState.udi.size);

//     tableBody.innerHTML = paginatedGroups.map(([baseModel, variants]) => `
//       <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 group">
//         <td colspan="5" class="px-6 py-4">
//           <div class="flex justify-between items-center cursor-pointer" 
//                onclick="toggleDeviceGroup('${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group')">
//             <div>
//               <div class="font-medium text-gray-900 dark:text-gray-100">${baseModel}</div>
//               <div class="text-sm text-gray-500 dark:text-gray-400">
//                 ${variants[0].company_name || ''} • ${variants.length} variant${variants.length > 1 ? 's' : ''}
//               </div>
//             </div>
//             <svg class="w-5 h-5 transform transition-transform duration-200 dark:stroke-white" 
//                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
//             </svg>
//           </div>
//         </td>
//       </tr>
//       <tr id="${baseModel.replace(/[^a-zA-Z0-9]/g, '-')}-group" 
//           class="hidden bg-gray-50 dark:bg-gray-700">
//         <td colspan="5" class="px-6 py-4">
//           <div class="space-y-4">
//             ${variants.map(device => `
//               <div class="flex justify-between items-center py-2 border-b dark:border-gray-600">
//                 <div>
//                   <div class="font-medium dark:text-gray-200">
//                     ${device.brand_name || 'Unknown Device'}
//                     ${device.version_or_model_number ? 
//                       `<span class="text-sm text-gray-500 dark:text-gray-400">(${device.version_or_model_number})</span>` : ''}
//                   </div>
//                   <div class="text-sm text-gray-500 dark:text-gray-400">
//                     ${getDeviceCategory(device) || 'N/A'}
//                   </div>
//                 </div>
//                 <div class="flex items-center space-x-4">
//                   <span class="px-2 py-1 text-sm rounded-full ${getStatusBadgeColor(device.commercial_distribution_status)}">
//                     ${device.commercial_distribution_status || 'Unknown Status'}
//                   </span>
//                   <button onclick="showUDIDetails('${device.public_device_record_key}')"
//                           class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//                     Details
//                   </button>
//                 </div>
//               </div>
//             `).join('')}
//           </div>
//         </td>
//       </tr>
//     `).join('');

//     updatePaginationUI('udi', groupEntries.length, page);
//   } catch (error) {
//     console.warn('Error in populateUDIDevices:', error);
//     tableBody.innerHTML = `
//       <tr>
//         <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
//           Error loading UDI devices
//         </td>
//       </tr>
//     `;
//   }
// }

// function getDeviceCategory(device) {
//   if (!device.product_codes || !device.product_codes.length) return null;
  
//   // Try to get medical specialty first
//   for (let i = 0; i < device.product_codes.length; i++) {
//     const code = device.product_codes[i];
//     if (code.openfda && code.openfda.medical_specialty_description) {
//       return code.openfda.medical_specialty_description;
//     }
//   }
  
//   // Then try device name
//   for (let i = 0; i < device.product_codes.length; i++) {
//     const code = device.product_codes[i];
//     if (code.openfda && code.openfda.device_name) {
//       return code.openfda.device_name;
//     }
//   }
  
//   // Then try product code
//   for (let i = 0; i < device.product_codes.length; i++) {
//     if (device.product_codes[i].code) {
//       return `Product Code: ${device.product_codes[i].code}`;
//     }
//   }
  
//   return null;
// }

// function groupDevices(devices) {
//   const getBaseModel = (brandName) => {
//     if (!brandName) return 'Unknown Device';
//     let base = brandName.split('(')[0].trim();
//     base = base.replace(/(trial|pewter|platinum|sand|espresso)\s*$/i, '').trim();
//     base = base.replace(/\s+V\d+(-\d+)?$/i, '');
//     return base;
//   };

//   return devices.reduce((groups, device) => {
//     const baseModel = getBaseModel(device.brand_name);
//     if (!groups[baseModel]) groups[baseModel] = [];
//     groups[baseModel].push(device);
//     return groups;
//   }, {});
// }

// function populatePMA(data, page = 1) {
//   const tableBody = document.getElementById('pmaTable');
//   if (!tableBody || !data?.results?.length) return;

//   try {
//     const start = (page - 1) * pageState.pma.size;
//     const paginatedData = data.results.slice(start, start + pageState.pma.size);

//     tableBody.innerHTML = paginatedData.map(item => `
//       <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
//         <td class="px-6 py-4 whitespace-nowrap">
//           <div class="font-medium text-gray-900 dark:text-gray-100">${item.trade_name || item.generic_name || item.device_name || 'Unknown Device'}</div>
//           <div class="text-sm text-gray-500 dark:text-gray-400">${item.applicant || 'Unknown Applicant'}</div>
//         </td>
//         <td class="px-6 py-4">${item.pma_number || 'N/A'}</td>
//         <td class="px-6 py-4">${formatDate(item.decision_date)}</td>
//         <td class="px-6 py-4">
//           <span class="px-2 py-1 text-sm rounded-full ${getDecisionBadgeColor(item.decision)}">
//             ${item.decision || 'Unknown'}
//           </span>
//         </td>
//         <td class="px-6 py-4">
//           <button onclick="showPMADetails('${item.pma_number || ''}', '${item.supplement_number || ''}')"
//                   class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200">
//             Details
//           </button>
//         </td>
//       </tr>
//     `).join('');

//     updatePaginationUI('pma', data.results.length, page);
//   } catch (error) {
//     console.warn('Error in populatePMA:', error);
//     tableBody.innerHTML = `
//       <tr>
//         <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
//           Error loading PMA data
//         </td>
//       </tr>
//     `;
//   }
// }

// function displayAISummary(companyName) {
//   const summaryEl = document.getElementById('ai-summary');
//   if (!summaryEl) return;

//   const summaries = {
//     "Livanova": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for LivaNova</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         LivaNova has a strong presence in the epilepsy treatment market with its VNS Therapy System, which has been FDA-approved since the late 1990s for drug-resistant epilepsy. The PMA data shows approvals for various VNS Therapy models, including the SenTiva device, which was approved for patients as young as 4 years old in 2017. The UDI data reflects a wide range of VNS Therapy devices in commercial distribution, indicating active market engagement. LivaNova's long history of approvals and ongoing device registrations highlight its established role in neuromodulation for epilepsy.
//       </p>
//     `,
//     "Medtronic": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Medtronic</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         Medtronic is a major player in neuromodulation with its Deep Brain Stimulation (DBS) systems, approved for epilepsy in 2018. The PMA data includes approvals for the Activa and Percept RC systems, with the latter approved in January 2024, featuring BrainSense technology for personalized treatment. The UDI data shows a diverse portfolio of DBS devices in commercial distribution, reflecting Medtronic's broad market reach. Medtronic's focus on advanced neurostimulation technologies positions it as a leader in epilepsy treatment alongside other neurological applications.
//       </p>
//     `,
//     "NeuroPace": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for NeuroPace</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         NeuroPace pioneered closed-loop neurostimulation with its RNS System, which received FDA PMA approval in November 2013 for adults with drug-resistant focal epilepsy. The PMA data also includes updates such as MRI labeling approval in 2020 and a Breakthrough Device Designation in 2021 for idiopathic generalized epilepsy. NeuroPace's focus on responsive neurostimulation has made it a key innovator in epilepsy treatment, with clinical data showing a 37.9% seizure reduction in pivotal trials.
//       </p>
//     `,
//     "XCORPRI": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for XCOPRI (SK Biopharmaceuticals)</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         XCOPRI has no PMA or UDI data because it is a pharmaceutical product (cenobamate), not a medical device, and thus falls under different FDA regulatory pathways (e.g., NDA). XCOPRI was approved in November 2019 for partial-onset seizures in adults, but this data is not captured in device-specific endpoints like PMA or UDI.
//       </p>
//     `,
//     "Precisis AG": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Precisis AG</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         Precisis AG has no FDA PMA or UDI data as of March 2025 because its EASEE System has not yet received FDA approval. The company received a Breakthrough Device Designation in 2022 and has CE Mark approval in Europe (2022), but U.S. clinical trials are ongoing.
//       </p>
//     `,
//     "EpiMinder": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Epi-Minder</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         Epi-Minder lacks FDA PMA or UDI data because its sub-scalp EEG monitor is still in the clinical trial phase in Australia, with no FDA approvals as of March 2025. The device aims to provide long-term seizure monitoring.
//       </p>
//     `,
//     "FlowMedical": `
//       <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary for Flow Medical/Flow Neuroscience</h3>
//       <p class="text-gray-700 dark:text-gray-300">
//         Flow Medical/Flow Neuroscience has no FDA PMA or UDI data for epilepsy applications because its Flow tDCS headset is approved in Europe for depression, not epilepsy, with no FDA approvals for this indication as of March 2025.
//       </p>
//     `
//   };

//   summaryEl.innerHTML = summaries[companyName] || `
//     <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">AI Summary</h3>
//     <p class="text-gray-700 dark:text-gray-300">No summary available for ${companyName}.</p>
//   `;
// }


// function setupTableSearch() {
//   const searchConfigs = [
//     { inputId: 'udiSearch', tableId: 'udiTable', searchFields: ['brand_name', 'company_name', 'version_or_model_number'] },
//     { inputId: 'pmaSearch', tableId: 'pmaTable', searchFields: ['trade_name', 'device_name', 'generic_name', 'pma_number', 'applicant'] }
//   ];

//   searchConfigs.forEach(config => {
//     const searchInput = document.getElementById(config.inputId);
//     if (searchInput) {
//       searchInput.addEventListener('input', (e) => {
//         const searchTerm = e.target.value.toLowerCase();
//         filterTable(config.tableId, searchTerm, config.searchFields);
//       });
//     }
//   });
// }

// function filterTable(tableId, searchTerm, searchFields) {
//   const tableBody = document.getElementById(tableId);
//   if (!tableBody) return;

//   searchTerm = searchTerm.toLowerCase();

//   if (!searchTerm) {
//     const rows = Array.from(tableBody.getElementsByTagName('tr'));
//     rows.forEach(row => {
//       row.style.display = '';
//       if (row.id && row.id.includes('-group')) {
//         row.classList.add('hidden');
//       }
//     });
//     return;
//   }

//   const rows = Array.from(tableBody.getElementsByTagName('tr'));
//   const groupsWithVisibleChildren = new Set();

//   rows.forEach(row => {
//     if (row.id && row.id.includes('-group')) {
//       let hasVisibleChild = false;
//       const entries = row.querySelectorAll('[class*="flex justify-between"]');
//       entries.forEach(entry => {
//         const text = entry.textContent.toLowerCase();
//         const isVisible = text.includes(searchTerm);
//         entry.style.display = isVisible ? '' : 'none';
//         if (isVisible) hasVisibleChild = true;
//       });
//       if (hasVisibleChild) {
//         const groupId = row.id.split('-')[0];
//         groupsWithVisibleChildren.add(groupId);
//       }
//     } else {
//       const text = row.textContent.toLowerCase();
//       const isVisible = searchFields.some(field => {
//         const value = getNestedValue(row.dataset, field) || text;
//         return value.toLowerCase().includes(searchTerm);
//       });
//       row.style.display = isVisible ? '' : 'none';
//     }
//   });

//   rows.forEach(row => {
//     if (!row.id) {
//       const groupId = row.querySelector('[onclick*="toggleDeviceGroup"]')?.getAttribute('onclick')?.match(/'([^']+)/)?.[1]?.split('-')[0];
//       if (groupId) {
//         const hasVisibleChildren = groupsWithVisibleChildren.has(groupId);
//         row.style.display = hasVisibleChildren ? '' : 'none';
//         const groupContent = document.getElementById(groupId + '-group');
//         if (groupContent) {
//           groupContent.style.display = hasVisibleChildren ? '' : 'none';
//           if (hasVisibleChildren) groupContent.classList.remove('hidden');
//         }
//       }
//     }
//   });
// }

// function getNestedValue(obj, path) {
//   return path.split('.').reduce((current, key) => current ? current[key] : undefined, obj);
// }

// function setupModal() {
//   const modal = document.getElementById('detail-modal');
//   const closeButton = document.getElementById('modal-close');

//   if (closeButton) {
//     closeButton.onclick = () => {
//       if (modal) modal.classList.add('hidden');
//     };
//   }

//   if (modal) {
//     window.onclick = (event) => {
//       if (event.target === modal) modal.classList.add('hidden');
//     };
//   }
// }

// function showUDIDetails(recordKey) {
//   const data = window.globalFDAData?.udi.results.find(d => d.public_device_record_key === recordKey);
//   if (!data) return;

//   const modal = document.getElementById('detail-modal');
//   const modalTitle = document.getElementById('modal-title');
//   const modalContent = document.getElementById('modal-content');

//   if (!modal || !modalTitle || !modalContent) return;

//   modalTitle.textContent = `UDI Device: ${data.brand_name || 'Device Details'}`;
//   modalContent.innerHTML = `
//     <div class="space-y-6">
//       <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
//         <div class="flex justify-between items-center">
//           <div>
//             <h4 class="font-semibold text-blue-900 dark:text-blue-100">Device Information</h4>
//             <p class="text-sm text-blue-700 dark:text-blue-200">${data.identifiers?.[0]?.id || 'No ID'}</p>
//           </div>
//           <span class="px-3 py-1 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200">
//             ${data.commercial_distribution_status || 'Status Unknown'}
//           </span>
//         </div>
//       </div>
//       <div class="grid grid-cols-2 gap-4">
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Model/Version</p>
//           <p class="font-medium dark:text-white">${data.version_or_model_number || 'N/A'}</p>
//         </div>
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Device Class</p>
//           <p class="font-medium dark:text-white">Class ${getDeviceClass(data) || 'N/A'}</p>
//         </div>
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Company</p>
//           <p class="font-medium dark:text-white">${data.company_name || 'N/A'}</p>
//         </div>
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Published Date</p>
//           <p class="font-medium dark:text-white">${formatDate(data.publish_date) || 'N/A'}</p>
//         </div>
//       </div>
//       <div>
//         <p class="text-sm text-gray-600 dark:text-gray-400">Medical Specialty</p>
//         <p class="font-medium dark:text-white">${getDeviceCategory(data) || 'N/A'}</p>
//       </div>
//       ${data.device_description ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Description</p>
//           <p class="font-medium dark:text-white">${data.device_description}</p>
//         </div>
//       ` : ''}
//       ${data.mri_safety ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">MRI Safety</p>
//           <p class="font-medium dark:text-white">${data.mri_safety}</p>
//         </div>
//       ` : ''}
//     </div>
//   `;
//   modal.classList.remove('hidden');
// }

// function getDeviceClass(device) {
//   if (!device.product_codes || !device.product_codes.length) return null;
  
//   for (let i = 0; i < device.product_codes.length; i++) {
//     const code = device.product_codes[i];
//     if (code.openfda && code.openfda.device_class) {
//       return code.openfda.device_class;
//     }
//   }
  
//   return null;
// }

// function showPMADetails(pmaNumber, supplementNumber) {
//   const data = window.globalFDAData?.pma.results.find(d => {
//     return d.pma_number === pmaNumber && 
//            ((!supplementNumber && !d.supplement_number) || 
//             (supplementNumber && d.supplement_number === supplementNumber));
//   });
//   if (!data) return;

//   const modal = document.getElementById('detail-modal');
//   const modalTitle = document.getElementById('modal-title');
//   const modalContent = document.getElementById('modal-content');

//   if (!modal || !modalTitle || !modalContent) return;

//   modalTitle.textContent = `PMA ${pmaNumber}${data.supplement_number ? ' (S' + data.supplement_number + ')' : ''}`;
//   modalContent.innerHTML = `
//     <div class="space-y-6">
//       <div class="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
//         <div class="flex justify-between items-center">
//           <div>
//             <h4 class="font-semibold text-green-900 dark:text-green-100">Approval Information</h4>
//             <p class="text-sm text-green-700 dark:text-green-200">Approved on ${formatDate(data.decision_date)}</p>
//           </div>
//           <span class="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200">
//             ${data.decision || 'Unknown'}
//           </span>
//         </div>
//       </div>
//       <div>
//         <p class="text-sm text-gray-600 dark:text-gray-400">Device Name</p>
//         <p class="font-medium dark:text-white">${data.trade_name || data.generic_name || data.device_name || 'N/A'}</p>
//       </div>
//       <div>
//         <p class="text-sm text-gray-600 dark:text-gray-400">Applicant</p>
//         <p class="font-medium dark:text-white">${data.applicant || 'N/A'}</p>
//       </div>
//       ${data.supplement_number ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Number</p>
//           <p class="font-medium dark:text-white">S${data.supplement_number}</p>
//         </div>
//       ` : ''}
//       ${data.supplement_type ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Type</p>
//           <p class="font-medium dark:text-white">${data.supplement_type}</p>
//         </div>
//       ` : ''}
//       ${data.supplement_reason ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Supplement Reason</p>
//           <p class="font-medium dark:text-white">${data.supplement_reason}</p>
//         </div>
//       ` : ''}
//       ${data.advisory_committee ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Advisory Committee</p>
//           <p class="font-medium dark:text-white">${data.advisory_committee}${data.advisory_committee_description ? ` (${data.advisory_committee_description})` : ''}</p>
//         </div>
//       ` : ''}
//       ${data.generic_name ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Generic Name</p>
//           <p class="font-medium dark:text-white">${data.generic_name}</p>
//         </div>
//       ` : ''}
//       ${data.product_code ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">Product Code</p>
//           <p class="font-medium dark:text-white">${data.product_code}</p>
//         </div>
//       ` : ''}
//       ${data.ao_statement ? `
//         <div>
//           <p class="text-sm text-gray-600 dark:text-gray-400">AO Statement</p>
//           <p class="font-medium dark:text-white">${data.ao_statement}</p>
//         </div>
//       ` : ''}
//     </div>
//   `;
//   modal.classList.remove('hidden');
// }

// function formatDate(dateString) {
//   if (!dateString) return 'N/A';
//   try {
//     if (dateString.length === 8 && !isNaN(dateString)) {
//       const year = dateString.substring(0, 4);
//       const month = dateString.substring(4, 6);
//       const day = dateString.substring(6, 8);
//       const date = new Date(year, month - 1, day);
//       if (!isNaN(date.getTime())) {
//         return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
//       }
//     }
//     const date = new Date(dateString);
//     if (!isNaN(date.getTime())) {
//       return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
//     }
//     return dateString;
//   } catch (error) {
//     console.warn(`Date parsing error for ${dateString}:`, error);
//     return dateString;
//   }
// }

// function getStatusBadgeColor(status) {
//   if (status?.includes('Commercial Distribution')) {
//     return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//   }
//   return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
// }

// function getDecisionBadgeColor(decision) {
//   if (decision === 'APPR' || decision === 'AP' || decision === 'APPV') {
//     return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
//   } else if (decision === 'REAS' || decision === 'LETTER') {
//     return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
//   } else if (decision === 'DENY' || decision === 'WDRW') {
//     return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
//   }
//   return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
// }

// function updatePaginationUI(section, total, currentPage) {
//   const state = pageState[section];
//   const totalPages = Math.ceil(total / state.size);

//   const startEl = document.getElementById(`${section}PageStart`);
//   const endEl = document.getElementById(`${section}PageEnd`);
//   const totalEl = document.getElementById(`${section}Total`);

//   if (startEl) startEl.textContent = total > 0 ? ((currentPage - 1) * state.size) + 1 : 0;
//   if (endEl) endEl.textContent = Math.min(currentPage * state.size, total);
//   if (totalEl) totalEl.textContent = total;

//   const prevButton = document.getElementById(`${section}PrevPage`);
//   const nextButton = document.getElementById(`${section}NextPage`);

//   if (prevButton) {
//     prevButton.disabled = currentPage <= 1;
//     prevButton.classList.toggle('opacity-50', currentPage <= 1);
//   }

//   if (nextButton) {
//     nextButton.disabled = currentPage >= totalPages;
//     nextButton.classList.toggle('opacity-50', currentPage >= totalPages);
//   }
// }

// function setupPaginationHandlers() {
//   // UDI pagination
//   document.getElementById('udiPrevPage')?.addEventListener('click', () => {
//     if (pageState.udi.current > 1) {
//       pageState.udi.current--;
//       populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
//     }
//   });

//   document.getElementById('udiNextPage')?.addEventListener('click', () => {
//     const totalPages = Math.ceil((window.globalFDAData.udi.results?.length || 0) / pageState.udi.size);
//     if (pageState.udi.current < totalPages) {
//       pageState.udi.current++;
//       populateUDIDevices(window.globalFDAData.udi, pageState.udi.current);
//     }
//   });

//   // PMA pagination
//   document.getElementById('pmaPrevPage')?.addEventListener('click', () => {
//     if (pageState.pma.current > 1) {
//       pageState.pma.current--;
//       populatePMA(window.globalFDAData.pma, pageState.pma.current);
//     }
//   });

//   document.getElementById('pmaNextPage')?.addEventListener('click', () => {
//     const totalPages = Math.ceil((window.globalFDAData.pma.results?.length || 0) / pageState.pma.size);
//     if (pageState.pma.current < totalPages) {
//       pageState.pma.current++;
//       populatePMA(window.globalFDAData.pma, pageState.pma.current);
//     }
//   });
// }

// function showErrorState(error) {
//   // Reset all counters to 0
//   setElementTextSafely('totalUDI', '0');
//   setElementTextSafely('totalPMA', '0');

//   // Show error message in tables
//   const tables = ['udiTable', 'pmaTable'];
//   tables.forEach(tableId => {
//     const table = document.getElementById(tableId);
//     if (table) {
//       table.innerHTML = `
//         <tr>
//           <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
//             Error loading FDA data: ${error.message}
//           </td>
//         </tr>
//       `;
//     }
//   });
// }

// // Helper function for toggling device groups
// window.toggleDeviceGroup = function(groupId) {
//   const group = document.getElementById(groupId);
//   if (!group) return;

//   const arrow = group.previousElementSibling.querySelector('svg');
//   group.classList.toggle('hidden');
//   if (arrow) {
//     arrow.style.transform = group.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
//   }
// };

// // Expose the functions to the window for use in event handlers
// Object.assign(window, {
//   showUDIDetails,
//   showPMADetails,
//   formatDate,
//   getStatusBadgeColor,
//   getDecisionBadgeColor,
//   toggleDeviceGroup
// });

// // Export the main function and utility functions
// export {
//   renderFDADashboard as default,
//   showUDIDetails,
//   showPMADetails,
//   formatDate,
//   getStatusBadgeColor,
//   getDecisionBadgeColor
// };


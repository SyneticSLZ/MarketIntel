/**
 * Renders strategic analysis of clinical trials for epilepsy for a specified company
 * @param {string} companyName - Name of the company to search for
 * @returns {Promise<void>} - Renders content to the strategic-initiatives-content div
 */
export function renderStrategicAnalysis(companyName) {
    console.log(`Rendering analysis for company: ${companyName}`);
    
    // Get the container element
    const container = document.getElementById('strategic-initiatives-content');
    if (!container) {
      console.error('Container element not found');
      return;
    }
    
    // Show the container
    container.classList.remove('hidden');
    
    // Show loading state
    container.innerHTML = `
      <div class="flex items-center justify-center p-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p class="ml-4 text-lg text-gray-300">Loading clinical trials data for ${companyName}...</p>
      </div>
    `;
    
    // Fetch trials from backend
    fetchTrials(companyName)
      .then(trials => {
        console.log(`Received ${trials.length} trials for ${companyName}:`, trials);
        renderTrialsView(container, trials, companyName);
      })
      .catch(error => {
        console.error('Error in renderStrategicAnalysis:', error);
        container.innerHTML = `
          <div class="p-6 bg-red-900 bg-opacity-20 rounded-lg border border-red-700">
            <h3 class="text-xl font-semibold text-red-400 mb-2">Error Loading Data</h3>
            <p class="text-gray-300">${error.message || 'Failed to load clinical trials data'}</p>
            <button id="retry-button" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Retry
            </button>
          </div>
        `;
        
        // Add retry functionality
        document.getElementById('retry-button')?.addEventListener('click', () => {
          renderStrategicAnalysis(companyName);
        });
      });
  }
  
  /**
   * Fetches clinical trials from the backend API
   * @param {string} companyName - Name of the company to search for
   * @returns {Promise<Array>} - Array of trial data
   */
  async function fetchTrials(companyName) {
    try {
      console.log(`Fetching trials for company: ${companyName}`);
      
      const response = await fetch('http://localhost:3000/fetch-trials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companies: [companyName]
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server returned ${response.status}: ${errorText || response.statusText}`);
      }
      
      const data = await response.json();
      console.log(`Fetched ${data.length} trials. First trial:`, data[0]);
      
      // Debug: Check which trials are recruiting
      const recruitingTrials = data.filter(trial => {
        const status = trial.protocolSection?.statusModule?.overallStatus;
        console.log(`Trial ID: ${trial.protocolSection?.identificationModule?.nctId}, Status: ${status}`);
        return status === 'RECRUITING' || status === 'Recruiting';
      });
      console.log(`Found ${recruitingTrials.length} recruiting trials`);
      
      return data;
    } catch (error) {
      console.error('Error fetching trials:', error);
      throw error;
    }
  }
  
  /**
   * Renders the trials data in a clean table format
   * @param {HTMLElement} container - Container element
   * @param {Array} trials - Array of trial data
   * @param {string} companyName - Name of the company
   */
  function renderTrialsView(container, trials, companyName) {
    // Check if we have any trials
    if (!trials || trials.length === 0) {
      container.innerHTML = `
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-100 mb-4">Clinical Trials for Epilepsy: ${companyName}</h2>
          <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <p class="text-gray-300">No clinical trials found for this company. Please try another search.</p>
          </div>
        </div>
      `;
      return;
    }
  
    // Normalize status values (fix case-sensitivity issues)
    trials.forEach(trial => {
      if (trial.protocolSection?.statusModule?.overallStatus) {
        // Normalize status to Title Case
        let status = trial.protocolSection.statusModule.overallStatus;
        status = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        
        // Replace underscores with spaces
        status = status.replace(/_/g, ' ');
        
        // Handle special case for "RECRUITING" or other formats
        if (status.toUpperCase() === 'RECRUITING') {
          status = 'Recruiting';
        } else if (status.toUpperCase() === 'COMPLETED') {
          status = 'Completed';
        } else if (status.toUpperCase() === 'WITHDRAWN') {
          status = 'Withdrawn';
        } else if (status.toUpperCase() === 'TERMINATED') {
          status = 'Terminated';
        } else if (status.toUpperCase().includes('ACTIVE') && status.toUpperCase().includes('NOT')) {
          status = 'Active, not recruiting';
        }
        
        trial.protocolSection.statusModule.overallStatus = status;
      }
    });
    
    // Filter for recruiting trials - fixed to properly handle case sensitivity
    const recruitingTrials = trials.filter(trial => {
      const status = trial.protocolSection?.statusModule?.overallStatus;
      return status === 'Recruiting';
    });
    
    console.log(`Found ${recruitingTrials.length} recruiting trials out of ${trials.length} total after normalization`);
    
    // Sort by most recent update
    const sortedTrials = [...trials].sort((a, b) => {
      const dateA = new Date(a.protocolSection?.statusModule?.lastUpdatePostDate || '1970-01-01');
      const dateB = new Date(b.protocolSection?.statusModule?.lastUpdatePostDate || '1970-01-01');
      return dateB - dateA;
    });
    
    // Get unique statuses for filter tabs
    const statuses = [...new Set(trials.map(trial => 
      trial.protocolSection?.statusModule?.overallStatus || 'Unknown'
    ))].filter(status => status !== 'Unknown').sort();
    
    // Create header content
    const headerContent = `
      <div class="p-6 border-b border-gray-700">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-gray-100">Clinical Trials for Epilepsy: ${companyName}</h2>
          <div class="flex gap-2">
            <button id="export-csv" class="flex items-center px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <button id="refresh-data" class="flex items-center px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 class="font-semibold text-gray-300 mb-1">Total Trials</h3>
            <p class="text-3xl font-bold text-blue-400">${trials.length}</p>
          </div>
          <div class="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 class="font-semibold text-gray-300 mb-1">Currently Recruiting</h3>
            <p class="text-3xl font-bold text-green-400">${recruitingTrials.length}</p>
          </div>
          <div class="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h3 class="font-semibold text-gray-300 mb-1">Completed/Other</h3>
            <p class="text-3xl font-bold text-gray-400">${trials.length - recruitingTrials.length}</p>
          </div>
        </div>
        
        <div class="mb-4">
          <input type="text" id="search-input" class="w-full px-4 py-2 bg-gray-900 text-gray-200 border border-gray-700 rounded" 
                 placeholder="Search by title, ID, location...">
        </div>
      </div>
    `;
    
    // Create tabs for viewing different categories
    const tabsContent = `
      <div class="border-b border-gray-700">
        <div class="flex overflow-x-auto">
          <button class="px-4 py-3 text-blue-400 font-medium border-b-2 border-blue-400 active tab-button" 
                  id="recruiting-tab" data-target="recruiting-content">
            Currently Recruiting (${recruitingTrials.length})
          </button>
          <button class="px-4 py-3 text-gray-400 hover:text-gray-300 font-medium border-b-2 border-transparent hover:border-gray-600 tab-button" 
                  id="all-tab" data-target="all-content">
            All Trials (${trials.length})
          </button>
          ${statuses.map(status => {
            // Skip Recruiting since it already has a tab
            if (status === 'Recruiting') return '';
            
            const statusTrials = trials.filter(trial => 
              trial.protocolSection?.statusModule?.overallStatus === status
            );
            
            const statusId = status.replace(/\s+/g, '_').toLowerCase();
            
            return `
              <button class="px-4 py-3 text-gray-400 hover:text-gray-300 font-medium border-b-2 border-transparent hover:border-gray-600 whitespace-nowrap tab-button" 
                      id="${statusId}-tab" data-target="${statusId}-content">
                ${status} (${statusTrials.length})
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
    
    // Create tab content containers
    const tabContainersContent = `
      <div class="tab-content">
        <div id="recruiting-content" class="block" role="tabpanel">
          ${renderTrialsTable(recruitingTrials)}
        </div>
        <div id="all-content" class="hidden" role="tabpanel">
          ${renderTrialsTable(sortedTrials)}
        </div>
        ${statuses.map(status => {
          // Skip Recruiting since it already has a tab
          if (status === 'Recruiting') return '';
          
          const statusTrials = trials.filter(trial => 
            trial.protocolSection?.statusModule?.overallStatus === status
          );
          
          const statusId = status.replace(/\s+/g, '_').toLowerCase();
          
          return `
            <div id="${statusId}-content" class="hidden" role="tabpanel">
              ${renderTrialsTable(statusTrials)}
            </div>
          `;
        }).join('')}
      </div>
    `;
    
    // Combine all content
    container.innerHTML = headerContent + tabsContent + tabContainersContent;
    
    // Add event listeners for tabs
    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', function() {
        // Hide all tab contents
        document.querySelectorAll('.tab-content > div').forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('block');
        });
        
        // Show the selected tab content
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.remove('hidden');
          targetContent.classList.add('block');
        }
        
        // Update active state for tabs
        document.querySelectorAll('.tab-button').forEach(tab => {
          tab.classList.remove('text-blue-400', 'border-blue-400', 'active');
          tab.classList.add('text-gray-400', 'border-transparent');
        });
        
        this.classList.remove('text-gray-400', 'border-transparent');
        this.classList.add('text-blue-400', 'border-blue-400', 'active');
      });
    });
    
    // Add search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        
        // Get all rows across all tabs
        const allRows = container.querySelectorAll('tbody tr');
        
        if (searchTerm === '') {
          // Reset display of all rows
          allRows.forEach(row => {
            row.style.display = '';
          });
          
          // Update tab counts
          updateTabCounts(container, trials);
          return;
        }
        
        // Track matches for each tab
        const tabMatches = {
          'recruiting-content': 0,
          'all-content': 0
        };
        
        // Add status tabs
        statuses.forEach(status => {
          if (status !== 'Recruiting') {
            const statusId = status.replace(/\s+/g, '_').toLowerCase();
            tabMatches[`${statusId}-content`] = 0;
          }
        });
        
        // Filter rows
        allRows.forEach(row => {
          const searchText = row.textContent.toLowerCase();
          const isMatch = searchText.includes(searchTerm);
          
          // Set row visibility
          row.style.display = isMatch ? '' : 'none';
          
          // Update tab match counts if it's a match
          if (isMatch) {
            // Find which tab this row belongs to
            const parentTabPanel = row.closest('[role="tabpanel"]');
            if (parentTabPanel) {
              const tabId = parentTabPanel.id;
              tabMatches[tabId] = (tabMatches[tabId] || 0) + 1;
            }
          }
        });
        
        // Update tab counts with search matches
        Object.entries(tabMatches).forEach(([tabId, count]) => {
          const tab = document.querySelector(`[data-target="${tabId}"]`);
          if (tab) {
            const tabLabel = tab.textContent.split('(')[0].trim();
            tab.textContent = `${tabLabel} (${count})`;
          }
        });
      });
    }
    
    // Add refresh functionality
    document.getElementById('refresh-data')?.addEventListener('click', () => {
      renderStrategicAnalysis(companyName);
    });
    
    // Add CSV export functionality
    document.getElementById('export-csv')?.addEventListener('click', () => {
      exportToCSV(trials, `${companyName}-epilepsy-trials.csv`);
    });
  }
  
  /**
   * Updates the tab counts based on visible rows
   * @param {HTMLElement} container - The main container
   * @param {Array} trials - Trial data
   */
  function updateTabCounts(container, trials) {
    // Get recruiting trials
    const recruitingTrials = trials.filter(trial => 
      trial.protocolSection?.statusModule?.overallStatus === 'Recruiting'
    );
    
    // Update recruiting tab
    const recruitingTab = container.querySelector('#recruiting-tab');
    if (recruitingTab) {
      recruitingTab.textContent = `Currently Recruiting (${recruitingTrials.length})`;
    }
    
    // Update all trials tab
    const allTab = container.querySelector('#all-tab');
    if (allTab) {
      allTab.textContent = `All Trials (${trials.length})`;
    }
    
    // Update status tabs
    const statuses = [...new Set(trials.map(trial => 
      trial.protocolSection?.statusModule?.overallStatus || 'Unknown'
    ))].filter(status => status !== 'Unknown' && status !== 'Recruiting').sort();
    
    statuses.forEach(status => {
      const statusTrials = trials.filter(trial => 
        trial.protocolSection?.statusModule?.overallStatus === status
      );
      
      const statusId = status.replace(/\s+/g, '_').toLowerCase();
      const statusTab = container.querySelector(`#${statusId}-tab`);
      
      if (statusTab) {
        statusTab.textContent = `${status} (${statusTrials.length})`;
      }
    });
  }
  
  /**
   * Renders a table of trials
   * @param {Array} trials - Array of trial data
   * @returns {string} - HTML string for the table
   */
  function renderTrialsTable(trials) {
    if (!trials.length) {
      return `<div class="bg-gray-800 p-6 rounded-lg border border-gray-700 text-gray-300 text-center">No trials found matching these criteria.</div>`;
    }
    
    return `
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-700">
          <thead class="bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">ID / Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Intervention</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Last Update</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-gray-900 divide-y divide-gray-800">
            ${trials.map(trial => renderTrialRow(trial)).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  /**
   * Renders a single row for a trial
   * @param {Object} trial - Trial data
   * @returns {string} - HTML string for a table row
   */
  function renderTrialRow(trial) {
    // Extract needed data with safe access
    const nctId = trial.protocolSection?.identificationModule?.nctId || 'N/A';
    const title = trial.protocolSection?.identificationModule?.briefTitle || 'Unknown Title';
    
    const status = trial.protocolSection?.statusModule?.overallStatus || 'Unknown';
    const statusClass = getStatusColorClass(status);
    
    // Get intervention information
    const interventions = trial.protocolSection?.armsInterventionsModule?.interventions || [];
    const interventionTypes = [...new Set(interventions.map(i => i.type || 'Not specified'))];
    const intervention = interventionTypes.length ? interventionTypes.join(', ') : 'Not specified';
    
    // Get location information
    const locations = trial.protocolSection?.contactsLocationsModule?.locations || [];
    let locationText = 'Not specified';
    
    if (locations.length) {
      const firstLocation = locations[0];
      const city = firstLocation.city || '';
      const country = firstLocation.country || '';
      const locationStr = [city, country].filter(Boolean).join(', ');
      
      locationText = locationStr || 'Location not specified';
      if (locations.length > 1) {
        locationText += ` +${locations.length - 1} more`;
      }
    }
    
    // Handle the last update date correctly
    let lastUpdateDate = 'Unknown';
    let dateObject = null;
    
    // Try different date fields from most to least specific
    const dateSources = [
      trial.protocolSection?.statusModule?.lastUpdatePostDate,
      trial.protocolSection?.statusModule?.lastUpdateSubmitDate,
      trial.protocolSection?.statusModule?.studyFirstSubmitDate
    ];
    
    for (const dateSource of dateSources) {
      if (dateSource) {
        try {
          dateObject = new Date(dateSource);
          if (!isNaN(dateObject.getTime())) {
            lastUpdateDate = dateObject.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            break;
          }
        } catch (e) {
          console.warn(`Failed to parse date: ${dateSource}`, e);
        }
      }
    }
    
    // If we still don't have a date, check if there's any timestamp in the trial object
    if (lastUpdateDate === 'Unknown') {
      const trialString = JSON.stringify(trial);
      const dateRegex = /\d{4}-\d{2}-\d{2}/;
      const match = trialString.match(dateRegex);
      
      if (match) {
        try {
          dateObject = new Date(match[0]);
          if (!isNaN(dateObject.getTime())) {
            lastUpdateDate = dateObject.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
          }
        } catch (e) {
          console.warn(`Failed to parse extracted date: ${match[0]}`, e);
        }
      }
    }
    
    const hasResults = trial.protocolSection?.statusModule?.hasResults;
    
    return `
      <tr>
        <td class="px-6 py-4">
          <div class="flex flex-col">
            <div class="text-sm font-medium text-gray-300">${nctId}</div>
            <div class="text-sm text-gray-400 line-clamp-2">${title}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
            ${status}
          </span>
          ${hasResults ? '<span class="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900 text-blue-300">Has Results</span>' : ''}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
          ${intervention}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
          ${locationText}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
          ${lastUpdateDate}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="https://clinicaltrials.gov/study/${nctId}" target="_blank" class="text-blue-400 hover:text-blue-300 inline-flex items-center">
            View
            <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </td>
      </tr>
    `;
  }
  
  /**
   * Returns a CSS class for a trial status
   * @param {string} status - Trial status
   * @returns {string} - CSS class
   */
  function getStatusColorClass(status) {
    const statusUpper = status.toUpperCase();
    
    if (statusUpper === 'RECRUITING') {
      return 'bg-green-900 text-green-300';
    } 
    else if (statusUpper === 'ACTIVE, NOT RECRUITING' || statusUpper.includes('ACTIVE') && statusUpper.includes('NOT')) {
      return 'bg-yellow-900 text-yellow-300';
    } 
    else if (statusUpper === 'COMPLETED') {
      return 'bg-blue-900 text-blue-300';
    } 
    else if (statusUpper === 'TERMINATED' || statusUpper === 'WITHDRAWN' || statusUpper === 'SUSPENDED') {
      return 'bg-red-900 text-red-300';
    } 
    else {
      return 'bg-gray-700 text-gray-300';
    }
  }
  
  /**
   * Export trials data to CSV file
   * @param {Array} trials - Array of trial data
   * @param {string} filename - Name of the file to download
   */
  function exportToCSV(trials, filename) {
    // Define CSV columns
    const columns = [
      'NCT ID',
      'Title',
      'Status',
      'Intervention Types',
      'Locations',
      'Has Results',
      'Last Update Date',
      'Link'
    ];
    
    // Convert trials to CSV rows
    const rows = trials.map(trial => {
      const nctId = trial.protocolSection?.identificationModule?.nctId || '';
      const title = trial.protocolSection?.identificationModule?.briefTitle || '';
      const status = trial.protocolSection?.statusModule?.overallStatus || '';
      
      const interventions = trial.protocolSection?.armsInterventionsModule?.interventions || [];
      const interventionTypes = [...new Set(interventions.map(i => i.type || ''))].join(', ');
      
      const locations = trial.protocolSection?.contactsLocationsModule?.locations || [];
      const locationTexts = locations.map(loc => 
        [loc.city, loc.country].filter(Boolean).join(', ')
      ).join('; ');
      
      const hasResults = trial.protocolSection?.statusModule?.hasResults ? 'Yes' : 'No';
      const lastUpdateDate = trial.protocolSection?.statusModule?.lastUpdatePostDate || '';
      const link = `https://clinicaltrials.gov/study/${nctId}`;
      
      return [
        `"${nctId}"`,
        `"${title.replace(/"/g, '""')}"`,
        `"${status}"`,
        `"${interventionTypes.replace(/"/g, '""')}"`,
        `"${locationTexts.replace(/"/g, '""')}"`,
        `"${hasResults}"`,
        `"${lastUpdateDate}"`,
        `"${link}"`
      ].join(',');
    });
    
    // Combine header and rows
    const csv = [columns.join(','), ...rows].join('\n');
    
    // Create download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 100);
  }
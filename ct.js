/**
 * Renders strategic analysis of clinical trials for epilepsy for a specified company
 * @param {string} companyName - Name of the company to search for
 * @returns {Promise<void>} - Renders content to the strategic-initiatives-content div
 */
export function renderStrategicAnalysis(companyName) {
    console.log(`Rendering analysis for company: ${companyName}`);
    
    const container = document.getElementById('strategic-initiatives-content');
    if (!container) {
      console.error('Container element not found');
      return;
    }
    
    container.classList.remove('hidden');
    
    container.innerHTML = `
      <div class="flex items-center justify-center p-8">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        <p class="ml-4 text-lg text-gray-700 dark:text-gray-300">Loading clinical trials data for ${companyName}...</p>
      </div>
    `;
    
    if (companyName === 'PrecisisAG' || companyName === 'EpiMinder') {
      renderHardcodedTrialsView(container, companyName);
    } else {
      fetchTrials(companyName)
        .then(trials => {
          console.log(`Received ${trials.length} trials for ${companyName}:`, trials);
          renderTrialsView(container, trials, companyName);
        })
        .catch(error => {
          console.error('Error in renderStrategicAnalysis:', error);
          container.innerHTML = `
            <div class="p-6 bg-red-100 dark:bg-red-900 bg-opacity-20 rounded-lg border border-red-200 dark:border-red-700">
              <h3 class="text-xl font-semibold text-red-600 dark:text-red-400 mb-2">Error Loading Data</h3>
              <p class="text-gray-700 dark:text-gray-300">${error.message || 'Failed to load clinical trials data'}</p>
              <button id="retry-button" class="mt-4 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
                Retry
              </button>
            </div>
          `;
          document.getElementById('retry-button')?.addEventListener('click', () => {
            renderStrategicAnalysis(companyName);
          });
        });
    }
  }
  
  /**
   * Fetches clinical trials from the backend API
   * @param {string} companyName - Name of the company to search for
   * @returns {Promise<Array>} - Array of trial data
   */
  async function fetchTrials(companyName) {
    try {
      console.log(`Fetching trials for company: ${companyName}`);
      const response = await fetch('https://medicare-n1bu.onrender.com/fetch-trials', {
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
      return data;
    } catch (error) {
      console.error('Error fetching trials:', error);
      throw error;
    }
  }
  
  /**
   * Renders hardcoded trials for Precisis AG or EpiMinder
   * @param {HTMLElement} container - Container element
   * @param {string} companyName - Name of the company
   */
  function renderHardcodedTrialsView(container, companyName) {
    let headerContent = `
      <div class="p-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Clinical Trials for Epilepsy: ${companyName === 'Precisis AG' ? 'Precisis AG: EASEE' : 'EpiMinder: Minder System'}</h2>
          <div class="flex gap-2">
            <button id="export-csv" class="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <button id="refresh-data" class="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </div>
    `;
  
    let trialsData = [];
    console.log(companyName , 'ahfisuahfas')
    if (companyName === 'PrecisisAG') {
        trialsData = [
          {
            id: 'DRKS00015918',
            title: 'EASEE II: Epicranial Application of Stimulation Electrodes for Epilepsy',
            status: 'Completed',
            intervention: 'Neurostimulation with EASEE System',
            locations: 'Multiple centers in Germany (e.g., Freiburg, Berlin, Bonn)',
            lastUpdate: 'July 25, 2023',
            details: 'Pilot study to assess feasibility, safety, and efficacy of the EASEE System in drug-resistant focal epilepsy. Multicenter, unblinded trial with 33 participants aged 18-75, experiencing 3-300 partial-onset seizures during baseline. Primary endpoint: safety at 4 months post-implant. Secondary endpoints: seizure frequency, severity, EEG activity, quality of life, mood, and neurocognition over 16 months. Published in JAMA Neurology (2023).',
            link: 'https://drks.de/search/en/trial/DRKS00015918'
          },
          {
            id: 'DRKS00017833',
            title: 'PIMIDES I: Patient-Controlled Neurostimulation with EASEE',
            status: 'Continuing',
            intervention: 'Patient-controlled neurostimulation with EASEE System',
            locations: 'Multiple centers in Germany and Europe (e.g., Freiburg, Ghent, Tübingen)',
            lastUpdate: 'July 27, 2023',
            details: 'Pilot study evaluating safety and efficacy of patient-controlled neurostimulation with the EASEE System in medically refractory focal epilepsy. Includes 18-75 year-olds with 3-200 partial-onset seizures during baseline. Features a 16-month study phase with individualized stimulation parameters and bolus-stimulation option. Assesses seizure frequency, EEG changes, and patient outcomes. Multicenter trial with ongoing data collection.',
            link: 'https://drks.de/search/en/trial/DRKS00017833'
          },
          {
            id: 'Not yet registered (Planned U.S. Trial)',
            title: 'EASEE U.S. Study (Planned)',
            status: 'Planned',
            intervention: 'Neurostimulation with EASEE System',
            locations: 'United States (specific centers TBD, e.g., Massachusetts General Hospital)',
            lastUpdate: 'February 2022 (FDA Breakthrough Designation announced)',
            details: 'Planned U.S. clinical trial following FDA Breakthrough Device Designation in February 2022. Aimed at validating EASEE for drug-resistant focal epilepsy in the U.S. market. Expected to start in 2023, as per Precisis announcements, focusing on safety and efficacy with a larger cohort. Specific protocol details pending registration.',
            link: 'https://precisis.de/en/minimally-invasive-epilepsy-treatment-easee-receives-fda-breakthrough-device-designation/'
          }
        ];
      } else if (companyName === 'EpiMinder') {
        trialsData = [
          {
            id: 'ACTRN12619001587190',
            title: 'Safety Assessment of Sub-Scalp EEG Monitor (Minder System)',
            status: 'Completed',
            intervention: 'Continuous EEG monitoring with Minder implant',
            locations: 'Melbourne, Australia (St Vincent’s Hospital, Royal Melbourne Hospital)',
            lastUpdate: 'November 24, 2024 (5-year milestone reported)',
            details: 'Prospective safety study of the Minder sub-scalp EEG monitoring system in 25 participants aged 18-75 with focal or generalized epilepsy, experiencing 2+ seizures/month. 6-month primary phase with up to 3-year follow-up, extended to 5 years as reported in November 2024. Evaluates device safety, tolerability, and long-term EEG recording accuracy. Primary endpoint: adverse events at 6 months. Secondary: seizure detection reliability.',
            link: 'https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?ID=378244'
          },
          {
            id: 'ACTRN12623000958640',
            title: 'Long-Term Performance of Minder Sub-Scalp EEG System',
            status: 'Recruiting',
            intervention: 'Continuous EEG monitoring with Minder implant',
            locations: 'Melbourne, Australia (multiple sites)',
            lastUpdate: 'September 11, 2023 (registration)',
            details: 'Follow-on study to assess long-term performance and safety of the Minder system in epilepsy patients. Targets adults with drug-resistant epilepsy for continuous monitoring over an extended period (up to 5+ years). Focuses on device longevity, data quality, and patient outcomes. Registered in 2023, building on ACTRN12619001587190 findings.',
            link: 'https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=385641'
          }
        ];
      }
  
    const trialsContent = `
      <div class="overflow-x-auto p-6">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">ID / Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Intervention</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Location</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Last Update</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Details</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
            ${trialsData.map(trial => `
              <tr>
                <td class="px-6 py-4">
                  <div class="flex flex-col">
                    <div class="text-sm font-medium text-gray-700 dark:text-gray-300">${trial.id}</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">${trial.title}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColorClass(trial.status)}">
                    ${trial.status}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${trial.intervention}</td>
                <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${trial.locations}</td>
                <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${trial.lastUpdate}</td>
                <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${trial.details}</td>
                <td class="px-6 py-4 text-sm font-medium">
                  <a href="${trial.link}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center">
                    View Live
                    <svg class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  
    container.innerHTML = headerContent + trialsContent;
  
    document.getElementById('refresh-data')?.addEventListener('click', () => {
      renderStrategicAnalysis(companyName);
    });
  
    document.getElementById('export-csv')?.addEventListener('click', () => {
      exportToCSV(trialsData, `${companyName}-epilepsy-trials.csv`);
    });
  }
  
  /**
   * Renders the trials data in a clean table format
   * @param {HTMLElement} container - Container element
   * @param {Array} trials - Array of trial data
   * @param {string} companyName - Name of the company
   */
  function renderTrialsView(container, trials, companyName) {
    if (!trials || trials.length === 0) {
      container.innerHTML = `
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Clinical Trials for Epilepsy: ${companyName}</h2>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <p class="text-gray-700 dark:text-gray-300">No clinical trials found for this company on ClinicalTrials.gov.</p>
          </div>
        </div>
      `;
      return;
    }
  
    trials.forEach(trial => {
      if (trial.protocolSection?.statusModule?.overallStatus) {
        let status = trial.protocolSection.statusModule.overallStatus;
        status = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
        status = status.replace(/_/g, ' ');
        if (status.toUpperCase() === 'RECRUITING') status = 'Recruiting';
        else if (status.toUpperCase() === 'COMPLETED') status = 'Completed';
        else if (status.toUpperCase() === 'WITHDRAWN') status = 'Withdrawn';
        else if (status.toUpperCase() === 'TERMINATED') status = 'Terminated';
        else if (status.toUpperCase().includes('ACTIVE') && status.toUpperCase().includes('NOT')) status = 'Active, not recruiting';
        trial.protocolSection.statusModule.overallStatus = status;
      }
    });
  
    const recruitingTrials = trials.filter(trial => trial.protocolSection?.statusModule?.overallStatus === 'Recruiting');
    const sortedTrials = [...trials].sort((a, b) => {
      const dateA = new Date(a.protocolSection?.statusModule?.lastUpdatePostDate || '1970-01-01');
      const dateB = new Date(b.protocolSection?.statusModule?.lastUpdatePostDate || '1970-01-01');
      return dateB - dateA;
    });
  
    const statuses = [...new Set(trials.map(trial => trial.protocolSection?.statusModule?.overallStatus || 'Unknown'))].filter(status => status !== 'Unknown').sort();
  
    const headerContent = `
      <div class="p-6 border-b border-gray-200 dark:border-gray-700">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Clinical Trials for Epilepsy: ${companyName}</h2>
          <div class="flex gap-2">
            <button id="export-csv" class="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export
            </button>
            <button id="refresh-data" class="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-1">Total Trials</h3>
            <p class="text-3xl font-bold text-blue-600 dark:text-blue-400">${trials.length}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-1">Currently Recruiting</h3>
            <p class="text-3xl font-bold text-green-600 dark:text-green-400">${recruitingTrials.length}</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-700 dark:text-gray-300 mb-1">Completed/Other</h3>
            <p class="text-3xl font-bold text-gray-600 dark:text-gray-400">${trials.length - recruitingTrials.length}</p>
          </div>
        </div>
      </div>
    `;
  
    const tabsContent = `
      <div class="border-b border-gray-200 dark:border-gray-700">
        <div class="flex overflow-x-auto">
          <button class="px-4 py-3 text-blue-600 dark:text-blue-400 font-medium border-b-2 border-blue-500 dark:border-blue-400 active tab-button" 
                  id="recruiting-tab" data-target="recruiting-content">
            Currently Recruiting (${recruitingTrials.length})
          </button>
          <button class="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 tab-button" 
                  id="all-tab" data-target="all-content">
            All Trials (${trials.length})
          </button>
          ${statuses.map(status => {
            if (status === 'Recruiting') return '';
            const statusTrials = trials.filter(trial => trial.protocolSection?.statusModule?.overallStatus === status);
            const statusId = status.replace(/\s+/g, '_').toLowerCase();
            return `
              <button class="px-4 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-medium border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 whitespace-nowrap tab-button" 
                      id="${statusId}-tab" data-target="${statusId}-content">
                ${status} (${statusTrials.length})
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  
    const tabContainersContent = `
      <div class="tab-content">
        <div id="recruiting-content" class="block" role="tabpanel">
          ${renderTrialsTable(recruitingTrials)}
        </div>
        <div id="all-content" class="hidden" role="tabpanel">
          ${renderTrialsTable(sortedTrials)}
        </div>
        ${statuses.map(status => {
          if (status === 'Recruiting') return '';
          const statusTrials = trials.filter(trial => trial.protocolSection?.statusModule?.overallStatus === status);
          const statusId = status.replace(/\s+/g, '_').toLowerCase();
          return `
            <div id="${statusId}-content" class="hidden" role="tabpanel">
              ${renderTrialsTable(statusTrials)}
            </div>
          `;
        }).join('')}
      </div>
    `;
  
    container.innerHTML = headerContent + tabsContent + tabContainersContent;
  
    document.querySelectorAll('.tab-button').forEach(button => {
      button.addEventListener('click', function() {
        document.querySelectorAll('.tab-content > div').forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('block');
        });
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.remove('hidden');
          targetContent.classList.add('block');
        }
        document.querySelectorAll('.tab-button').forEach(tab => {
          tab.classList.remove('text-blue-600', 'dark:text-blue-400', 'border-blue-500', 'dark:border-blue-400', 'active');
          tab.classList.add('text-gray-600', 'dark:text-gray-400', 'border-transparent');
        });
        this.classList.remove('text-gray-600', 'dark:text-gray-400', 'border-transparent');
        this.classList.add('text-blue-600', 'dark:text-blue-400', 'border-blue-500', 'dark:border-blue-400', 'active');
      });
    });
  
    document.getElementById('refresh-data')?.addEventListener('click', () => {
      renderStrategicAnalysis(companyName);
    });
  
    document.getElementById('export-csv')?.addEventListener('click', () => {
      exportToCSV(trials, `${companyName}-epilepsy-trials.csv`);
    });
  }
  
  /**
   * Renders a table of trials
   * @param {Array} trials - Array of trial data
   * @returns {string} - HTML string for the table
   */
  function renderTrialsTable(trials) {
    if (!trials.length) {
      return `<div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-center">No trials found matching these criteria.</div>`;
    }
    
    return `
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">ID / Title</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Intervention</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Location</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Last Update</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
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
    const nctId = trial.protocolSection?.identificationModule?.nctId || 'N/A';
    const title = trial.protocolSection?.identificationModule?.briefTitle || 'Unknown Title';
    const status = trial.protocolSection?.statusModule?.overallStatus || 'Unknown';
    const statusClass = getStatusColorClass(status);
    const interventions = trial.protocolSection?.armsInterventionsModule?.interventions || [];
    const interventionTypes = [...new Set(interventions.map(i => i.type || 'Not specified'))];
    const intervention = interventionTypes.length ? interventionTypes.join(', ') : 'Not specified';
    const locations = trial.protocolSection?.contactsLocationsModule?.locations || [];
    let locationText = 'Not specified';
    if (locations.length) {
      const firstLocation = locations[0];
      const city = firstLocation.city || '';
      const country = firstLocation.country || '';
      const locationStr = [city, country].filter(Boolean).join(', ');
      locationText = locationStr || 'Location not specified';
      if (locations.length > 1) locationText += ` +${locations.length - 1} more`;
    }
    let lastUpdateDate = 'Unknown';
    const dateSources = [
      trial.protocolSection?.statusModule?.lastUpdatePostDate,
      trial.protocolSection?.statusModule?.lastUpdateSubmitDate,
      trial.protocolSection?.statusModule?.studyFirstSubmitDate
    ];
    for (const dateSource of dateSources) {
      if (dateSource) {
        try {
          const dateObject = new Date(dateSource);
          if (!isNaN(dateObject.getTime())) {
            lastUpdateDate = dateObject.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            break;
          }
        } catch (e) {
          console.warn(`Failed to parse date: ${dateSource}`, e);
        }
      }
    }
    const hasResults = trial.protocolSection?.statusModule?.hasResults;
  
    return `
      <tr>
        <td class="px-6 py-4">
          <div class="flex flex-col">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300">${nctId}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">${title}</div>
          </div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap">
          <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
            ${status}
          </span>
          ${hasResults ? '<span class="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Has Results</span>' : ''}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">${intervention}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">${locationText}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">${lastUpdateDate}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="https://clinicaltrials.gov/study/${nctId}" target="_blank" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 inline-flex items-center">
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
    if (statusUpper === 'RECRUITING') return 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300';
    else if (statusUpper === 'ACTIVE, NOT RECRUITING' || (statusUpper.includes('ACTIVE') && statusUpper.includes('NOT'))) return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300';
    else if (statusUpper === 'COMPLETED') return 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300';
    else if (statusUpper === 'TERMINATED' || statusUpper === 'WITHDRAWN' || statusUpper === 'SUSPENDED') return 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300';
    else return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  }
  
  /**
   * Export trials data to CSV file
   * @param {Array} trials - Array of trial data
   * @param {string} filename - Name of the file to download
   */
  function exportToCSV(trials, filename) {
    const columns = [
      'ID',
      'Title',
      'Status',
      'Intervention',
      'Locations',
      'Last Update',
      'Details',
      'Link'
    ];
    const rows = trials.map(trial => {
      const id = trial.id || trial.protocolSection?.identificationModule?.nctId || '';
      const title = trial.title || trial.protocolSection?.identificationModule?.briefTitle || '';
      const status = trial.status || trial.protocolSection?.statusModule?.overallStatus || '';
      const intervention = trial.intervention || (trial.protocolSection?.armsInterventionsModule?.interventions || []).map(i => i.type || '').join(', ') || '';
      const locations = trial.locations || (trial.protocolSection?.contactsLocationsModule?.locations || []).map(loc => [loc.city, loc.country].filter(Boolean).join(', ')).join('; ') || '';
      const lastUpdate = trial.lastUpdate || trial.protocolSection?.statusModule?.lastUpdatePostDate || '';
      const details = trial.details || '';
      const link = trial.link || `https://clinicaltrials.gov/study/${id}`;
  
      return [
        `"${id}"`,
        `"${title.replace(/"/g, '""')}"`,
        `"${status}"`,
        `"${intervention.replace(/"/g, '""')}"`,
        `"${locations.replace(/"/g, '""')}"`,
        `"${lastUpdate}"`,
        `"${details.replace(/"/g, '""')}"`,
        `"${link}"`
      ].join(',');
    });
  
    const csv = [columns.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  }
/**
 * Summarizes all trials for a company and displays a summary section
 * @param {Array} trials - Array of trial data
 * @param {string} companyName - Name of the company
 * @param {HTMLElement} container - Container element to append the summary
 */
function summarizeTrials(trials, companyName, container) {
    // Create summary section container
    const summarySection = document.createElement('div');
    summarySection.className = 'mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';
    
    // Get summary stats
    const totalTrials = trials.length;
    const statuses = {};
    const interventionTypes = {};
    const locations = {};
    let earliestDate = new Date();
    let latestDate = new Date('1970-01-01');
    
    trials.forEach(trial => {
      // Count by status
      let status = '';
      if (trial.status) {
        status = trial.status;
      } else if (trial.protocolSection?.statusModule?.overallStatus) {
        status = trial.protocolSection.statusModule.overallStatus;
      }
      
      if (status) {
        statuses[status] = (statuses[status] || 0) + 1;
      }
      
      // Count by intervention
      let intervention = '';
      if (trial.intervention) {
        intervention = trial.intervention;
      } else if (trial.protocolSection?.armsInterventionsModule?.interventions) {
        const interventions = trial.protocolSection.armsInterventionsModule.interventions;
        if (interventions.length > 0) {
          intervention = interventions[0].type || 'Unknown';
        }
      }
      
      if (intervention) {
        interventionTypes[intervention] = (interventionTypes[intervention] || 0) + 1;
      }
      
      // Count by location
      let location = '';
      if (trial.locations) {
        location = trial.locations.split(',')[0].trim();
      } else if (trial.protocolSection?.contactsLocationsModule?.locations) {
        const trialLocations = trial.protocolSection.contactsLocationsModule.locations;
        if (trialLocations.length > 0) {
          location = trialLocations[0].country || trialLocations[0].city || 'Unknown';
        }
      }
      
      if (location) {
        locations[location] = (locations[location] || 0) + 1;
      }
      
      // Track date range
      let updateDate = null;
      if (trial.lastUpdate) {
        updateDate = new Date(trial.lastUpdate);
      } else if (trial.protocolSection?.statusModule?.lastUpdatePostDate) {
        updateDate = new Date(trial.protocolSection.statusModule.lastUpdatePostDate);
      }
      
      if (updateDate && !isNaN(updateDate.getTime())) {
        if (updateDate < earliestDate) {
          earliestDate = updateDate;
        }
        if (updateDate > latestDate) {
          latestDate = updateDate;
        }
      }
    });
    
    // Sort the status counts for display
    const sortedStatuses = Object.entries(statuses).sort((a, b) => b[1] - a[1]);
    const sortedInterventions = Object.entries(interventionTypes).sort((a, b) => b[1] - a[1]);
    const sortedLocations = Object.entries(locations).sort((a, b) => b[1] - a[1]);
    
    // Format date range
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateRangeText = isNaN(earliestDate.getTime()) || isNaN(latestDate.getTime()) 
      ? 'Date range information not available' 
      : `${earliestDate.toLocaleDateString('en-US', dateOptions)} to ${latestDate.toLocaleDateString('en-US', dateOptions)}`;
    
    // Create summary content
    summarySection.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Summary of ${companyName} Clinical Trials</h3>
        <button id="toggle-summary" class="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          Hide Summary
        </button>
      </div>
      <div id="summary-content">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Trials</p>
            <p class="text-lg font-bold text-gray-800 dark:text-gray-200">${totalTrials}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Date Range</p>
            <p class="text-sm text-gray-800 dark:text-gray-200">${dateRangeText}</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Trial Status</h4>
            <ul class="space-y-1">
              ${sortedStatuses.map(([status, count]) => `
                <li class="flex justify-between">
                  <span class="text-sm text-gray-700 dark:text-gray-300">${status}</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-gray-100">${count}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Intervention Types</h4>
            <ul class="space-y-1">
              ${sortedInterventions.slice(0, 5).map(([type, count]) => `
                <li class="flex justify-between">
                  <span class="text-sm text-gray-700 dark:text-gray-300 truncate" title="${type}">${type.length > 30 ? type.substring(0, 30) + '...' : type}</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-gray-100">${count}</span>
                </li>
              `).join('')}
              ${sortedInterventions.length > 5 ? `<li class="text-xs text-gray-500 dark:text-gray-400">+ ${sortedInterventions.length - 5} more</li>` : ''}
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Top Locations</h4>
            <ul class="space-y-1">
              ${sortedLocations.slice(0, 5).map(([location, count]) => `
                <li class="flex justify-between">
                  <span class="text-sm text-gray-700 dark:text-gray-300">${location}</span>
                  <span class="text-sm font-medium text-gray-900 dark:text-gray-100">${count}</span>
                </li>
              `).join('')}
              ${sortedLocations.length > 5 ? `<li class="text-xs text-gray-500 dark:text-gray-400">+ ${sortedLocations.length - 5} more</li>` : ''}
            </ul>
          </div>
        </div>
      </div>
    `;
    
    // Insert the summary after the header
    const headerElement = container.querySelector('.border-b');
    if (headerElement && headerElement.nextSibling) {
      container.insertBefore(summarySection, headerElement.nextSibling);
    } else {
      container.appendChild(summarySection);
    }
    
    // Add toggle functionality
    const toggleButton = document.getElementById('toggle-summary');
    const summaryContent = document.getElementById('summary-content');
    
    toggleButton.addEventListener('click', () => {
      if (summaryContent.style.display === 'none') {
        summaryContent.style.display = 'block';
        toggleButton.textContent = 'Hide Summary';
      } else {
        summaryContent.style.display = 'none';
        toggleButton.textContent = 'Show Summary';
      }
    });
  }
  
  /**
   * Updates the hardcoded trial view functions to include summary
   */
  function updateHardcodedTrialViewsWithSummary() {
    // For PrecisisAG
    const originalRenderHardcodedTrialsViewP = renderHardcodedTrialsViewP;
    renderHardcodedTrialsViewP = function(container, companyName) {
      originalRenderHardcodedTrialsViewP(container, companyName);
      
      const trialsData = [
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
      
      summarizeTrials(trialsData, companyName, container);
    };
    
    // For EpiMinder
    const originalRenderHardcodedTrialsViewE = renderHardcodedTrialsViewE;
    renderHardcodedTrialsViewE = function(container, companyName) {
      originalRenderHardcodedTrialsViewE(container, companyName);
      
      const trialsData = [
        {
          id: 'ACTRN12619001587190',
          title: 'Safety Assessment of Sub-Scalp EEG Monitor (Minder System)',
          status: 'Completed',
          intervention: 'Continuous EEG monitoring with Minder implant',
          locations: 'Melbourne, Australia (St Vincent\'s Hospital, Royal Melbourne Hospital)',
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
      
      summarizeTrials(trialsData, companyName, container);
    };
    
    // For FlowMedical
    const originalRenderHardcodedTrialsViewF = renderHardcodedTrialsViewF;
    renderHardcodedTrialsViewF = function(container, companyName) {
      originalRenderHardcodedTrialsViewF(container, companyName);
      
      const trialsData = [
        {
          id: 'NCT05202119',
          title: 'Home-Based tDCS for Major Depressive Disorder (EMPOWER Trial)',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'Multiple sites in U.S. and U.K. (e.g., University of Texas Health Science Center, University of East London)',
          lastUpdate: 'January 24, 2024',
          details: 'Multisite, double-blind, placebo-controlled trial evaluating 10 weeks of home-based tDCS for moderate to severe unipolar depression in 173 participants aged 18+. Primary endpoint: change in Montgomery-Åsberg Depression Rating Scale (MADRS) score. Secondary: remission rates (57.5% in treatment group vs. 22% placebo), safety, and tolerability. Published in Nature Medicine (2024).',
          link: 'https://clinicaltrials.gov/study/NCT05202119'
        },
        {
          id: 'NCT04880525',
          title: 'Feasibility of Home-Based tDCS for Depression',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom (Flow Neuroscience facilities)',
          lastUpdate: 'May 10, 2022',
          details: 'Pilot study to assess feasibility and safety of home-based tDCS in 30 participants with major depressive disorder. Conducted over 4 weeks with 2 mA stimulation sessions (30 min, 5 times/week). Primary endpoint: usability and adherence. Secondary: preliminary efficacy via HAM-D scores.',
          link: 'https://clinicaltrials.gov/study/NCT04880525'
        },
        {
          id: 'NCT05662956',
          title: 'tDCS Combined with Cognitive Behavioral Therapy for Depression',
          status: 'Recruiting',
          intervention: 'tDCS with Flow headset + Cognitive Behavioral Therapy (CBT)',
          locations: 'London, United Kingdom; Houston, Texas, USA',
          lastUpdate: 'December 15, 2022 (registration)',
          details: 'Ongoing study combining tDCS (Flow headset) with CBT in 60 participants with major depression. 12-week intervention comparing tDCS+CBT vs. CBT alone. Primary endpoint: change in Beck Depression Inventory (BDI-II) score. Secondary: response rates, quality of life, and neurophysiological changes via EEG.',
          link: 'https://clinicaltrials.gov/study/NCT05662956'
        },
        {
          id: 'NCT03538275',
          title: 'tDCS for Depression: Open-Label Pilot',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom',
          lastUpdate: 'June 12, 2019',
          details: 'Open-label pilot in 20 participants with major depression, testing tDCS (2 mA, 30 min, 5x/week) over 3 weeks. Primary endpoint: safety and tolerability. Secondary: MADRS score reduction. Early validation study for Flow\'s tDCS device.',
          link: 'https://clinicaltrials.gov/study/NCT03538275'
        },
        {
          id: 'NCT04933929',
          title: 'tDCS for Postpartum Depression',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom',
          lastUpdate: 'August 3, 2022',
          details: 'Pilot study in 25 postpartum women with depression, using tDCS over 6 weeks. Primary endpoint: Edinburgh Postnatal Depression Scale (EPDS) score change. Secondary: safety, maternal-infant bonding. Explores tDCS in a specific depression population.',
          link: 'https://clinicaltrials.gov/study/NCT04933929'
        }
      ];
      
      summarizeTrials(trialsData, companyName, container);
    };
    
    // Update the main renderTrialsView function to include summary
    const originalRenderTrialsView = renderTrialsView;
    renderTrialsView = function(container, trials, companyName) {
      originalRenderTrialsView(container, trials, companyName);
      summarizeTrials(trials, companyName, container);
    };
  }
  

  /**
 * Adds a detailed analysis button that displays comprehensive insights about the trials
 * @param {Array} trials - Array of trial data
 * @param {string} companyName - Name of the company
 * @param {HTMLElement} container - Container element to append the analysis
 */
function addDetailedAnalysis(trials, companyName, container) {
    // Create analysis button
    const analysisButtonContainer = document.createElement('div');
    analysisButtonContainer.className = 'mb-4 flex justify-end';
    analysisButtonContainer.innerHTML = `
      <button id="show-analysis" class="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Show Detailed Analysis
      </button>
    `;
    
    // Insert the button before the table
    const tabContent = container.querySelector('.tab-content') || container.querySelector('.overflow-x-auto');
    if (tabContent) {
      tabContent.parentNode.insertBefore(analysisButtonContainer, tabContent);
    } else {
      container.appendChild(analysisButtonContainer);
    }
    
    // Add click event to show analysis modal
    document.getElementById('show-analysis').addEventListener('click', () => {
      showAnalysisModal(trials, companyName);
    });
  }
  
  /**
   * Creates and displays a modal with detailed analysis of trials
   * @param {Array} trials - Array of trial data
   * @param {string} companyName - Name of the company
   */
  function showAnalysisModal(trials, companyName) {
    // Perform analysis on the trials data
    const analysis = analyzeTrialData(trials, companyName);
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50';
    modal.id = 'analysis-modal';
    
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Detailed Analysis: ${companyName} Trials</h2>
          <button id="close-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Trial Overview</h3>
              <ul class="space-y-2">
                <li class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Total Trials:</span>
                  <span class="font-medium text-gray-900 dark:text-gray-100">${analysis.totalTrials}</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Active Trials:</span>
                  <span class="font-medium text-gray-900 dark:text-gray-100">${analysis.activeTrials}</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Completed Trials:</span>
                  <span class="font-medium text-gray-900 dark:text-gray-100">${analysis.completedTrials}</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Study Duration (avg):</span>
                  <span class="font-medium text-gray-900 dark:text-gray-100">${analysis.avgDuration} months</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-gray-600 dark:text-gray-400">Primary Interventions:</span>
                  <span class="font-medium text-gray-900 dark:text-gray-100">${analysis.primaryIntervention}</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Key Findings</h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                ${analysis.keyFindings.map(finding => `
                  <li class="flex items-start">
                    <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span>${finding}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Trial Progression Timeline</h3>
            <div class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 dark:text-blue-200 dark:bg-blue-800">
                    Timeline
                  </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-blue-600 dark:text-blue-400">
                    ${analysis.timelineYears}
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 dark:bg-gray-700">
                ${analysis.timelineItems.map(item => `
                  <div style="width:${item.percentage}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.color}">
                    <div class="relative">
                      <div class="absolute -top-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        <span class="text-xs text-gray-600 dark:text-gray-400">${item.year}</span>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
              <div class="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>First Trial</span>
                <span>Latest Update</span>
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Geographical Distribution</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              ${Object.entries(analysis.locations).map(([location, count]) => `
                <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-300">${location}</span>
                    <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                      ${count} trial${count > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technology Profile</h3>
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p class="text-gray-700 dark:text-gray-300 mb-4">${analysis.technologyProfile}</p>
              <div class="flex flex-wrap gap-2">
                ${analysis.technologies.map(tech => `
                  <span class="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-sm">${tech}</span>
                `).join('')}
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Strategic Implications</h3>
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p class="text-gray-700 dark:text-gray-300 mb-2">${analysis.strategicImplications}</p>
              <ul class="space-y-2 mt-4">
                ${analysis.marketPositioning.map(point => `
                  <li class="flex items-start">
                    <span class="text-green-500 dark:text-green-400 mr-2">✓</span>
                    <span class="text-gray-700 dark:text-gray-300">${point}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Publication Impact</h3>
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p class="text-gray-700 dark:text-gray-300">${analysis.publicationImpact}</p>
              ${analysis.keyPublications.length > 0 ? `
                <h4 class="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-2">Key Publications:</h4>
                <ul class="space-y-2">
                  ${analysis.keyPublications.map(pub => `
                    <li class="text-sm text-gray-700 dark:text-gray-300">${pub}</li>
                  `).join('')}
                </ul>
              ` : ''}
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Future Outlook</h3>
            <div class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <p class="text-gray-700 dark:text-gray-300 mb-4">${analysis.futureOutlook}</p>
              <div class="flex flex-wrap gap-3 mt-2">
                ${analysis.nextSteps.map(step => `
                  <div class="flex items-center bg-blue-50 dark:bg-blue-900 bg-opacity-70 px-3 py-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span class="text-sm font-medium text-gray-800 dark:text-gray-200">${step}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end">
          <button id="download-analysis" class="mr-3 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Analysis
          </button>
          <button id="close-modal-btn" class="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            Close
          </button>
        </div>
      </div>
    `;
    
    // Add modal to the body
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    document.getElementById('close-modal-btn').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    document.getElementById('download-analysis').addEventListener('click', () => {
      downloadAnalysisReport(analysis, companyName);
    });
  }
  
  /**
   * Analyzes the trial data to generate insights
   * @param {Array} trials - Array of trial data
   * @param {string} companyName - Name of the company
   * @returns {Object} - Analysis results
   */
  function analyzeTrialData(trials, companyName) {
    // Get basic statistics
    const totalTrials = trials.length;
    
    // Count active, recruiting, and completed trials
    let activeTrials = 0;
    let completedTrials = 0;
    let recruitingTrials = 0;
    
    // Track locations
    let locations = {};
    
    // Track interventions
    let interventions = {};
    
    // Extract key technologies and interventions
    let technologies = new Set();
    
    // Track dates
    let dates = [];
    let earliestDate = new Date();
    let latestDate = new Date('1970-01-01');
    
    // Extract status, locations, interventions and dates
    trials.forEach(trial => {
      // Process status
      let status = '';
      if (trial.status) {
        status = trial.status.toLowerCase();
      } else if (trial.protocolSection?.statusModule?.overallStatus) {
        status = trial.protocolSection.statusModule.overallStatus.toLowerCase();
      }
      
      if (status.includes('active') || status.includes('recruiting') || status.includes('enrolling')) {
        activeTrials++;
        if (status.includes('recruiting')) {
          recruitingTrials++;
        }
      } else if (status.includes('completed')) {
        completedTrials++;
      }
      
      // Process locations
      let location = '';
      if (trial.locations) {
        // Extract country if multiple locations
        if (trial.locations.includes(',')) {
          const parts = trial.locations.split(',');
          for (let i = parts.length - 1; i >= 0; i--) {
            const part = parts[i].trim();
            if (part.length > 0) {
              location = part;
              break;
            }
          }
        } else {
          location = trial.locations;
        }
      } else if (trial.protocolSection?.contactsLocationsModule?.locations) {
        const trialLocations = trial.protocolSection.contactsLocationsModule.locations;
        if (trialLocations.length > 0) {
          location = trialLocations[0].country || trialLocations[0].city || 'Unknown';
        }
      }
      
      if (location) {
        // Normalize country names
        if (location.includes('United States') || location.includes('USA') || location.includes('U.S.')) {
          location = 'United States';
        } else if (location.includes('United Kingdom') || location.includes('UK') || location.includes('U.K.')) {
          location = 'United Kingdom';
        } else if (location.includes('Australia')) {
          location = 'Australia';
        } else if (location.includes('Germany')) {
          location = 'Germany';
        }
        
        locations[location] = (locations[location] || 0) + 1;
      }
      
      // Process interventions
      let intervention = '';
      if (trial.intervention) {
        intervention = trial.intervention;
      } else if (trial.protocolSection?.armsInterventionsModule?.interventions) {
        const interventions = trial.protocolSection.armsInterventionsModule.interventions;
        if (interventions.length > 0) {
          intervention = interventions[0].type || 'Unknown';
        }
      }
      
      if (intervention) {
        interventions[intervention] = (interventions[intervention] || 0) + 1;
        
        // Extract key technologies from interventions and details
        const techKeywords = [
          'EASEE', 'EEG', 'tDCS', 'neurostimulation', 'Minder', 'monitoring', 
          'implant', 'sub-scalp', 'Flow headset', 'stimulation'
        ];
        
        techKeywords.forEach(tech => {
          if (intervention.toLowerCase().includes(tech.toLowerCase())) {
            technologies.add(tech);
          }
        });
        
        if (trial.details) {
          techKeywords.forEach(tech => {
            if (trial.details.toLowerCase().includes(tech.toLowerCase())) {
              technologies.add(tech);
            }
          });
        }
      }
      
      // Process dates
      let updateDate = null;
      if (trial.lastUpdate) {
        updateDate = new Date(trial.lastUpdate);
      } else if (trial.protocolSection?.statusModule?.lastUpdatePostDate) {
        updateDate = new Date(trial.protocolSection.statusModule.lastUpdatePostDate);
      }
      
      if (updateDate && !isNaN(updateDate.getTime())) {
        dates.push(updateDate);
        if (updateDate < earliestDate) {
          earliestDate = updateDate;
        }
        if (updateDate > latestDate) {
          latestDate = updateDate;
        }
      }
    });
    
    // Sort locations by count
    const sortedLocations = Object.entries(locations)
      .sort((a, b) => b[1] - a[1])
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    
    // Find primary intervention
    let primaryIntervention = 'Not specified';
    if (Object.keys(interventions).length > 0) {
      primaryIntervention = Object.entries(interventions)
        .sort((a, b) => b[1] - a[1])[0][0];
        
      // Shorten it if too long
      if (primaryIntervention.length > 30) {
        primaryIntervention = primaryIntervention.substring(0, 30) + '...';
      }
    }
    
    // Calculate average study duration (estimate: 18 months for typical epilepsy trial if data unavailable)
    const avgDuration = 18; // Placeholder
    
    // Generate timeline data
    const timelineYears = `${earliestDate.getFullYear()} - ${latestDate.getFullYear()}`;
    
    // Create timeline items
    const timelineItems = [];
    const firstYear = earliestDate.getFullYear();
    const lastYear = latestDate.getFullYear();
    const totalYears = lastYear - firstYear + 1;
    
    for (let i = 0; i < totalYears; i++) {
      const year = firstYear + i;
      const percentage = 100 / totalYears;
      const color = i % 2 === 0 ? 'bg-blue-500' : 'bg-blue-600';
      
      timelineItems.push({
        year,
        percentage,
        color
      });
    }
    
    // Generate company-specific analysis
    let keyFindings = [];
    let technologyProfile = '';
    let strategicImplications = '';
    let marketPositioning = [];
    let publicationImpact = '';
    let keyPublications = [];
    let futureOutlook = '';
    let nextSteps = [];
    
    if (companyName === 'PrecisisAG') {
      keyFindings = [
        'Focused on minimally invasive neurostimulation for drug-resistant focal epilepsy',
        'EASEE System shows promising results in safety and efficacy studies',
        'Expanding from European to U.S. market with FDA Breakthrough Designation',
        'Studies show reduction in seizure frequency in drug-resistant patients',
        'Multicenter trials conducted primarily in Germany with expansion plans'
      ];
      
      technologyProfile = 'The EASEE System (Epicranial Application of Stimulation Electrodes for Epilepsy) represents a minimally invasive approach to neurostimulation. It targets the epileptogenic zone with precisely placed electrodes that are implanted beneath the scalp but outside the skull, avoiding the risks associated with intracranial procedures.';
      
      technologies = Array.from(technologies).filter(Boolean);
      if (technologies.length === 0) {
        technologies = ['EASEE System', 'Neurostimulation', 'Minimally invasive', 'Epilepsy treatment'];
      }
      
      strategicImplications = 'Precisis AG is positioned as an innovator in the minimally invasive neurostimulation market for epilepsy, bridging the gap between medication and invasive surgical interventions. Their FDA Breakthrough Designation signals significant market potential in the U.S.';
      
      marketPositioning = [
        'Competing in the neuromodulation space with a less invasive alternative to traditional VNS or DBS',
        'Targeting the large population of drug-resistant epilepsy patients seeking non-pharmacological options',
        'Strategic positioning between medications and more invasive surgical interventions',
        'European market presence with planned expansion to U.S. market'
      ];
      
      publicationImpact = 'Precisis has published results in high-impact journals, most notably in JAMA Neurology (2023), establishing scientific credibility for the EASEE System. These publications have helped validate the technology within the epilepsy treatment community.';
      
      keyPublications = [
        'EASEE II trial results published in JAMA Neurology (2023)',
        'Preliminary results from PIMIDES I study presented at international epilepsy conferences'
      ];
      
      futureOutlook = 'With FDA Breakthrough Designation secured, Precisis AG is poised for significant growth as they expand into the U.S. market. The company is likely to focus on generating additional clinical evidence while scaling up manufacturing and distribution capabilities.';
      
      nextSteps = [
        'U.S. clinical trial initiation',
        'Expanded patient populations',
        'Long-term effectiveness data',
        'Reimbursement strategy development'
      ];
    }
    else if (companyName === 'EpiMinder') {
      keyFindings = [
        'Focused on continuous EEG monitoring for epilepsy management',
        'Minder system demonstrates long-term safety and feasibility',
        'Unique sub-scalp EEG monitoring technology with multi-year capabilities',
        'Studies primarily conducted in Australia with 5-year follow-up data',
        'Device designed for passive monitoring rather than direct intervention'
      ];
      
      technologyProfile = 'The Minder System is a sub-scalp implantable EEG monitoring device designed for continuous, long-term brain activity recording in epilepsy patients. It enables 24/7 seizure monitoring without the limitations of external devices, potentially revolutionizing seizure detection and management.';
      
      technologies = Array.from(technologies).filter(Boolean);
      if (technologies.length === 0) {
        technologies = ['Minder System', 'Sub-scalp EEG', 'Continuous monitoring', 'Implantable device'];
      }
      
      strategicImplications = 'EpiMinder is addressing a critical gap in epilepsy management through continuous, objective seizure monitoring. This approach could transform treatment by providing physicians with comprehensive data on seizure patterns, medication effectiveness, and disease progression.';
      
      marketPositioning = [
        'First-mover advantage in long-term implantable EEG monitoring space',
        'Complementary to existing epilepsy treatments rather than competitive',
        'Potential integration with AI for predictive seizure analytics',
        'Value proposition centered on improved treatment decisions through objective data'
      ];
      
      publicationImpact = 'EpiMinder has demonstrated the clinical utility of the Minder system through ongoing trials, with data supporting its safety and recording accuracy. Publications emphasize the technology\'s potential to address the limitations of patient self-reporting and short-term EEG monitoring.';
      
      keyPublications = [
        'Safety and performance results from initial Australian trial (2023)',
        'Long-term EEG monitoring feasibility study (5-year follow-up data)'
      ];
      
      futureOutlook = 'EpiMinder is likely to expand clinical validation while developing advanced analytics capabilities for the Minder System. Integration with seizure prediction algorithms and potential partnerships with pharmaceutical companies for medication response monitoring represent significant growth opportunities.';
      
      nextSteps = [
        'Geographic expansion beyond Australia',
        'AI integration for seizure prediction',
        'Clinical validation in larger populations',
        'Potential pharma partnerships'
      ];
    }
    else if (companyName === 'FlowMedical') {
      keyFindings = [
        'Focused on non-invasive tDCS for depression with potential applications in epilepsy',
        'Flow headset delivers transcranial direct current stimulation in home settings',
        'Multiple completed trials showing efficacy for depression treatment',
        'Strong presence in both U.S. and U.K. markets',
        'Expanding therapeutic applications including combination with CBT'
      ];
      
      technologyProfile = 'The Flow headset delivers non-invasive transcranial direct current stimulation (tDCS) that can be self-administered at home. Originally developed for depression treatment, the technology modulates neural activity through mild electrical stimulation of targeted brain areas, with potential applications for epilepsy management.';
      
      technologies = Array.from(technologies).filter(Boolean);
      if (technologies.length === 0) {
        technologies = ['Flow headset', 'tDCS', 'Non-invasive neurostimulation', 'Home-based treatment'];
      }
      
      strategicImplications = 'Flow Medical has established a strong position in the consumer-oriented neuromodulation market with a non-invasive, home-based solution. Their expansion from depression to potentially epilepsy represents a strategic diversification with significant market potential.';
      
      marketPositioning = [
        'Leading provider of home-based tDCS technology with consumer-friendly design',
        'Cross-indication expansion strategy from depression to other neurological conditions',
        'Direct-to-consumer approach with professional clinical validation',
        'Complementary to pharmaceutical interventions with minimal side effects profile'
      ];
      
      publicationImpact = 'Flow Medical has published significant results in high-impact journals, including Nature Medicine (2024), establishing strong clinical evidence for their tDCS technology in depression treatment. This scientific foundation supports their exploration of additional indications like epilepsy.';
      
      keyPublications = [
        'EMPOWER trial results published in Nature Medicine (2024)',
        'Home-based tDCS feasibility studies in various patient populations',
        'tDCS combined with CBT efficacy research'
      ];
      
      futureOutlook = 'Flow Medical is well-positioned to expand its therapeutic applications beyond depression to include epilepsy management. The company will likely pursue additional clinical validations specific to epilepsy while leveraging their established consumer-friendly platform and distribution channels.';
      
      nextSteps = [
        'Epilepsy-specific clinical trials',
        'Expanded regulatory approvals',
        'Global market expansion',
        'Digital therapeutic integration'
      ];
    }
    else {
      // Generic analysis for other companies
      keyFindings = [
        `${companyName} has conducted ${totalTrials} clinical trials related to epilepsy treatment`,
        `${activeTrials} active trials ongoing with ${recruitingTrials} currently recruiting`,
        `Research focused primarily on ${Object.keys(sortedLocations)[0] || 'various regions'}`,
        `Primary intervention approach: ${primaryIntervention}`
      ];
      
      technologyProfile = `${companyName}'s clinical trial portfolio demonstrates a focus on ${primaryIntervention} for epilepsy treatment. Their approach addresses challenges in epilepsy management through innovative therapeutic strategies.`;
      
      technologies = Array.from(technologies).filter(Boolean);
      if (technologies.length === 0) {
        technologies = ['Epilepsy treatment', 'Clinical research', 'Therapeutic development'];
      }
      
      strategicImplications = `${companyName} is positioned in the epilepsy treatment market with clinical evidence supporting their approach. Their trial portfolio demonstrates commitment to advancing treatment options for patients with epilepsy.`;
      
      marketPositioning = [
        'Developing evidence-based approaches to epilepsy management',
        'Clinical validation through structured trial programs',
        'Addressing unmet needs in epilepsy treatment'
      ];
      
      publicationImpact = `${companyName}'s clinical research contributes to the scientific understanding of epilepsy treatments, with trial results informing the broader medical community about new therapeutic approaches.`;
      
      futureOutlook = `Based on current clinical trial activities, ${companyName} is likely to continue expanding their evidence base while refining their approach to epilepsy treatment.`;
      
      nextSteps = [
        'Expanded clinical validation',
        'Regulatory submissions',
        'Market access planning',
        'Real-world evidence generation'
      ];
    }
    
    return {
      totalTrials,
      activeTrials,
      completedTrials,
      avgDuration,
      primaryIntervention,
      keyFindings,
      locations: sortedLocations,
      timelineYears,
      timelineItems,
      technologyProfile,
      technologies,
      strategicImplications,
      marketPositioning,
      publicationImpact,
      keyPublications,
      futureOutlook,
      nextSteps
    };
  }
  
  /**
   * Downloads the analysis as a PDF report
   * @param {Object} analysis - Analysis data
   * @param {string} companyName - Name of the company
   */
  function downloadAnalysisReport(analysis, companyName) {
    // In a real implementation, this would generate a PDF
    // For this example, we'll create a text file with the analysis
    
    const content = `
  STRATEGIC ANALYSIS REPORT: ${companyName} EPILEPSY CLINICAL TRIALS
  =====================================================================
  Generated: ${new Date().toLocaleDateString()}
  
  TRIAL OVERVIEW
  --------------
  Total Trials: ${analysis.totalTrials}
  Active Trials: ${analysis.activeTrials}
  Completed Trials: ${analysis.completedTrials}
  Average Study Duration: ${analysis.avgDuration} months
  Primary Intervention: ${analysis.primaryIntervention}
  
  KEY FINDINGS
  ------------
  ${analysis.keyFindings.map(finding => `• ${finding}`).join('\n')}
  
  GEOGRAPHICAL DISTRIBUTION
  ------------------------
  ${Object.entries(analysis.locations).map(([location, count]) => `${location}: ${count} trial${count > 1 ? 's' : ''}`).join('\n')}
  
  TECHNOLOGY PROFILE
  -----------------
  ${analysis.technologyProfile}
  
  Key Technologies: ${analysis.technologies.join(', ')}
  
  STRATEGIC IMPLICATIONS
  ---------------------
  ${analysis.strategicImplications}
  
  Market Positioning:
  ${analysis.marketPositioning.map(point => `• ${point}`).join('\n')}
  
  PUBLICATION IMPACT
  -----------------
  ${analysis.publicationImpact}
  
  ${analysis.keyPublications.length > 0 ? `Key Publications:\n${analysis.keyPublications.map(pub => `• ${pub}`).join('\n')}` : ''}
  
  FUTURE OUTLOOK
  -------------
  ${analysis.futureOutlook}
  
  Next Steps:
  ${analysis.nextSteps.map(step => `• ${step}`).join('\n')}
  `;
  
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${companyName}-Clinical-Trials-Analysis.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  /**
   * Updates the hardcoded trial view functions to include detailed analysis
   */
  function updateHardcodedTrialViewsWithAnalysis() {
    // For PrecisisAG
    const originalRenderHardcodedTrialsViewP = renderHardcodedTrialsViewP;
    renderHardcodedTrialsViewP = function(container, companyName) {
      originalRenderHardcodedTrialsViewP(container, companyName);
      
      const trialsData = [
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
      
      addDetailedAnalysis(trialsData, companyName, container);
    };
    
    // For EpiMinder
    const originalRenderHardcodedTrialsViewE = renderHardcodedTrialsViewE;
    renderHardcodedTrialsViewE = function(container, companyName) {
      originalRenderHardcodedTrialsViewE(container, companyName);
      
      const trialsData = [
        {
          id: 'ACTRN12619001587190',
          title: 'Safety Assessment of Sub-Scalp EEG Monitor (Minder System)',
          status: 'Completed',
          intervention: 'Continuous EEG monitoring with Minder implant',
          locations: 'Melbourne, Australia (St Vincent\'s Hospital, Royal Melbourne Hospital)',
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
      
      addDetailedAnalysis(trialsData, companyName, container);
    };
}

  // Continuing from previous artifact
function updateHardcodedTrialViewsWithAnalysis() {
    // For PrecisisAG
    const originalRenderHardcodedTrialsViewP = renderHardcodedTrialsViewP;
    renderHardcodedTrialsViewP = function(container, companyName) {
      originalRenderHardcodedTrialsViewP(container, companyName);
      
      const trialsData = [
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
      
      addDetailedAnalysis(trialsData, companyName, container);
    };
    
    // For EpiMinder
    const originalRenderHardcodedTrialsViewE = renderHardcodedTrialsViewE;
    renderHardcodedTrialsViewE = function(container, companyName) {
      originalRenderHardcodedTrialsViewE(container, companyName);
      
      const trialsData = [
        {
          id: 'ACTRN12619001587190',
          title: 'Safety Assessment of Sub-Scalp EEG Monitor (Minder System)',
          status: 'Completed',
          intervention: 'Continuous EEG monitoring with Minder implant',
          locations: 'Melbourne, Australia (St Vincent\'s Hospital, Royal Melbourne Hospital)',
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
      
      addDetailedAnalysis(trialsData, companyName, container);
    };
    
    // For FlowMedical
    const originalRenderHardcodedTrialsViewF = renderHardcodedTrialsViewF;
    renderHardcodedTrialsViewF = function(container, companyName) {
      originalRenderHardcodedTrialsViewF(container, companyName);
      
      const trialsData = [
        {
          id: 'NCT05202119',
          title: 'Home-Based tDCS for Major Depressive Disorder (EMPOWER Trial)',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'Multiple sites in U.S. and U.K. (e.g., University of Texas Health Science Center, University of East London)',
          lastUpdate: 'January 24, 2024',
          details: 'Multisite, double-blind, placebo-controlled trial evaluating 10 weeks of home-based tDCS for moderate to severe unipolar depression in 173 participants aged 18+. Primary endpoint: change in Montgomery-Åsberg Depression Rating Scale (MADRS) score. Secondary: remission rates (57.5% in treatment group vs. 22% placebo), safety, and tolerability. Published in Nature Medicine (2024).',
          link: 'https://clinicaltrials.gov/study/NCT05202119'
        },
        {
          id: 'NCT04880525',
          title: 'Feasibility of Home-Based tDCS for Depression',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom (Flow Neuroscience facilities)',
          lastUpdate: 'May 10, 2022',
          details: 'Pilot study to assess feasibility and safety of home-based tDCS in 30 participants with major depressive disorder. Conducted over 4 weeks with 2 mA stimulation sessions (30 min, 5 times/week). Primary endpoint: usability and adherence. Secondary: preliminary efficacy via HAM-D scores.',
          link: 'https://clinicaltrials.gov/study/NCT04880525'
        },
        {
          id: 'NCT05662956',
          title: 'tDCS Combined with Cognitive Behavioral Therapy for Depression',
          status: 'Recruiting',
          intervention: 'tDCS with Flow headset + Cognitive Behavioral Therapy (CBT)',
          locations: 'London, United Kingdom; Houston, Texas, USA',
          lastUpdate: 'December 15, 2022 (registration)',
          details: 'Ongoing study combining tDCS (Flow headset) with CBT in 60 participants with major depression. 12-week intervention comparing tDCS+CBT vs. CBT alone. Primary endpoint: change in Beck Depression Inventory (BDI-II) score. Secondary: response rates, quality of life, and neurophysiological changes via EEG.',
          link: 'https://clinicaltrials.gov/study/NCT05662956'
        },
        {
          id: 'NCT03538275',
          title: 'tDCS for Depression: Open-Label Pilot',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom',
          lastUpdate: 'June 12, 2019',
          details: 'Open-label pilot in 20 participants with major depression, testing tDCS (2 mA, 30 min, 5x/week) over 3 weeks. Primary endpoint: safety and tolerability. Secondary: MADRS score reduction. Early validation study for Flow\'s tDCS device.',
          link: 'https://clinicaltrials.gov/study/NCT03538275'
        },
        {
          id: 'NCT04933929',
          title: 'tDCS for Postpartum Depression',
          status: 'Completed',
          intervention: 'Transcranial Direct Current Stimulation (tDCS) with Flow headset',
          locations: 'London, United Kingdom',
          lastUpdate: 'August 3, 2022',
          details: 'Pilot study in 25 postpartum women with depression, using tDCS over 6 weeks. Primary endpoint: Edinburgh Postnatal Depression Scale (EPDS) score change. Secondary: safety, maternal-infant bonding. Explores tDCS in a specific depression population.',
          link: 'https://clinicaltrials.gov/study/NCT04933929'
        }
      ];
      
      addDetailedAnalysis(trialsData, companyName, container);
    };
    
    // Update the main renderTrialsView function to include analysis
    const originalRenderTrialsView = renderTrialsView;
    renderTrialsView = function(container, trials, companyName) {
      originalRenderTrialsView(container, trials, companyName);
      addDetailedAnalysis(trials, companyName, container);
    };
  }
  
  // Initialize the updated functions
  updateHardcodedTrialViewsWithAnalysis();
  
  /**
   * Generate a visual comparative analysis of trials across companies
   * @param {string[]} companies - Array of company names to compare
   * @returns {string} - HTML for the comparative visualization
   */
  function generateComparativeAnalysis(companies) {
    // Sample data structure for comparison
    const comparisonData = {
      'PrecisisAG': {
        trials: 3,
        technology: 'EASEE System (Neurostimulation)',
        approach: 'Minimally invasive stimulation implanted under scalp',
        targetPopulation: 'Drug-resistant focal epilepsy',
        clinicalPhase: 'Completed pilot studies, planning U.S. trials',
        keyDifferentiator: 'Minimally invasive alternative to intracranial devices',
        regulatoryStatus: 'FDA Breakthrough Device Designation',
        marketPresence: 'Europe (Germany-based)'
      },
      'EpiMinder': {
        trials: 2,
        technology: 'Minder System (EEG Monitoring)',
        approach: 'Sub-scalp implantable EEG monitoring',
        targetPopulation: 'Epilepsy patients requiring long-term monitoring',
        clinicalPhase: 'Completed initial safety study, long-term follow-up ongoing',
        keyDifferentiator: 'Continuous long-term EEG data collection',
        regulatoryStatus: 'Under evaluation',
        marketPresence: 'Australia-based, limited to clinical studies'
      },
      'FlowMedical': {
        trials: 5,
        technology: 'Flow Headset (tDCS)',
        approach: 'Non-invasive transcranial direct current stimulation',
        targetPopulation: 'Depression with potential for epilepsy applications',
        clinicalPhase: 'Multiple completed studies for depression',
        keyDifferentiator: 'Non-invasive, home-based solution',
        regulatoryStatus: 'Various approvals for depression treatment',
        marketPresence: 'U.S. and European markets'
      }
    };
    
    // Only include companies that exist in our data
    const validCompanies = companies.filter(company => comparisonData[company]);
    
    if (validCompanies.length === 0) {
      return `<div class="p-4 bg-yellow-50 text-yellow-800 rounded-md">No valid companies selected for comparison.</div>`;
    }
    
    // Generate HTML for the comparison table
    let comparisonHTML = `
      <div class="mt-8 mb-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Comparative Analysis</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Attribute</th>
                ${validCompanies.map(company => `
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">${company}</th>
                `).join('')}
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
    `;
    
    // Add rows for each attribute
    const attributes = [
      { key: 'trials', label: 'Number of Trials' },
      { key: 'technology', label: 'Core Technology' },
      { key: 'approach', label: 'Technical Approach' },
      { key: 'targetPopulation', label: 'Target Population' },
      { key: 'clinicalPhase', label: 'Clinical Phase' },
      { key: 'keyDifferentiator', label: 'Key Differentiator' },
      { key: 'regulatoryStatus', label: 'Regulatory Status' },
      { key: 'marketPresence', label: 'Market Presence' }
    ];
    
    attributes.forEach(attr => {
      comparisonHTML += `
        <tr>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">${attr.label}</td>
          ${validCompanies.map(company => `
            <td class="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">${comparisonData[company][attr.key]}</td>
          `).join('')}
        </tr>
      `;
    });
    
    comparisonHTML += `
            </tbody>
          </table>
        </div>
      </div>
    `;
    
    // Generate visual comparison chart
    comparisonHTML += `
      <div class="mt-8 mb-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Visual Comparison</h3>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="space-y-6">
            <!-- Trial Count Comparison -->
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Trial Count</h4>
              <div class="flex items-end space-x-4">
                ${validCompanies.map(company => {
                  const trials = comparisonData[company].trials;
                  const maxTrials = Math.max(...validCompanies.map(c => comparisonData[c].trials));
                  const percentage = (trials / maxTrials) * 100;
                  const colorClass = company === 'PrecisisAG' ? 'bg-blue-500' : company === 'EpiMinder' ? 'bg-green-500' : 'bg-purple-500';
                  
                  return `
                    <div class="flex flex-col items-center">
                      <div class="h-40 w-16 bg-gray-200 dark:bg-gray-700 rounded-t-md relative">
                        <div class="${colorClass} absolute bottom-0 left-0 right-0 rounded-t-md" style="height: ${percentage}%"></div>
                      </div>
                      <div class="mt-2 text-sm text-gray-700 dark:text-gray-300 font-medium">${company}</div>
                      <div class="text-xs text-gray-600 dark:text-gray-400">${trials} trials</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
            
            <!-- Approach Spectrum -->
            <div>
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Invasiveness Spectrum</h4>
              <div class="relative h-12 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-md mt-2 mb-1">
                ${validCompanies.map(company => {
                  let position;
                  if (company === 'FlowMedical') position = '5%'; // Non-invasive
                  else if (company === 'PrecisisAG') position = '50%'; // Minimally invasive
                  else if (company === 'EpiMinder') position = '40%'; // Sub-scalp
                  
                  return `
                    <div class="absolute transform -translate-x-1/2" style="left: ${position}; top: -20px;">
                      <div class="w-4 h-4 bg-white dark:bg-gray-200 rounded-full border-2 border-gray-800 dark:border-gray-600"></div>
                      <div class="text-xs font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap mt-1">${company}</div>
                    </div>
                  `;
                }).join('')}
                <div class="absolute text-xs text-gray-700 dark:text-gray-300" style="left: 0; bottom: -20px;">Non-invasive</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300" style="left: 50%; transform: translateX(-50%); bottom: -20px;">Minimally invasive</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300" style="right: 0; bottom: -20px;">Highly invasive</div>
              </div>
            </div>
            
            <!-- Clinical Stage -->
            <div class="mt-12">
              <h4 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Clinical Stage</h4>
              <div class="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-6 mb-10">
                <div class="absolute h-6 w-6 bg-blue-500 rounded-full -top-2 -left-2 z-10"></div>
                <div class="absolute h-6 w-6 bg-blue-500 rounded-full -top-2 left-1/4 transform -translate-x-1/2 z-10"></div>
                <div class="absolute h-6 w-6 bg-blue-500 rounded-full -top-2 left-1/2 transform -translate-x-1/2 z-10"></div>
                <div class="absolute h-6 w-6 bg-blue-500 rounded-full -top-2 left-3/4 transform -translate-x-1/2 z-10"></div>
                <div class="absolute h-6 w-6 bg-blue-500 rounded-full -top-2 -right-2 z-10"></div>
                
                <div class="absolute text-xs text-gray-700 dark:text-gray-300 -bottom-8 -left-2 w-10 text-center">Pilot</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300 -bottom-8 left-1/4 transform -translate-x-1/2 w-16 text-center">Safety</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300 -bottom-8 left-1/2 transform -translate-x-1/2 w-16 text-center">Efficacy</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300 -bottom-8 left-3/4 transform -translate-x-1/2 w-16 text-center">Pivotal</div>
                <div class="absolute text-xs text-gray-700 dark:text-gray-300 -bottom-8 -right-2 w-16 text-center">Market</div>
                
                ${validCompanies.map(company => {
                  let position;
                  // Positioning based on clinical phase
                  if (company === 'PrecisisAG') position = '60%'; 
                  else if (company === 'EpiMinder') position = '30%';
                  else if (company === 'FlowMedical') position = '75%';
                  
                  const colorClass = company === 'PrecisisAG' ? 'bg-blue-700 border-blue-500' : 
                                    company === 'EpiMinder' ? 'bg-green-700 border-green-500' : 
                                    'bg-purple-700 border-purple-500';
                  
                  return `
                    <div class="absolute transform -translate-x-1/2" style="left: ${position}; top: -35px;">
                      <div class="w-6 h-6 ${colorClass} rounded-full border-2 flex items-center justify-center">
                        <span class="text-white text-xs font-bold">${company.charAt(0)}</span>
                      </div>
                      <div class="absolute w-0.5 h-4 bg-gray-400 left-1/2 transform -translate-x-1/2" style="top: 24px;"></div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Strategic Positioning Matrix -->
      <div class="mt-8 mb-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Strategic Positioning Matrix</h3>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div class="relative h-80 w-full">
            <!-- Y-axis label -->
            <div class="absolute -left-10 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-gray-600 dark:text-gray-400">Clinical Innovation</div>
            
            <!-- X-axis label -->
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600 dark:text-gray-400">Market Readiness</div>
            
            <!-- Quadrant labels -->
            <div class="absolute top-4 left-4 text-xs text-gray-500 dark:text-gray-400">Emerging Technology</div>
            <div class="absolute top-4 right-4 text-xs text-gray-500 dark:text-gray-400">Market Leader</div>
            <div class="absolute bottom-4 left-4 text-xs text-gray-500 dark:text-gray-400">Niche Player</div>
            <div class="absolute bottom-4 right-4 text-xs text-gray-500 dark:text-gray-400">Established Solution</div>
            
            <!-- Axes -->
            <div class="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 dark:bg-gray-600"></div>
            <div class="absolute left-0 right-0 top-1/2 h-px bg-gray-300 dark:bg-gray-600"></div>
            
            <!-- Company positioning -->
            ${validCompanies.map(company => {
              let posX, posY, color, size;
              
              if (company === 'PrecisisAG') {
                posX = '65%'; // Good market readiness
                posY = '25%';  // High innovation
                color = 'bg-blue-500';
                size = 'w-16 h-16';
              } else if (company === 'EpiMinder') {
                posX = '35%'; // Lower market readiness
                posY = '20%';  // High innovation
                color = 'bg-green-500';
                size = 'w-14 h-14';
              } else if (company === 'FlowMedical') {
                posX = '75%'; // High market readiness
                posY = '40%';  // Moderate innovation for epilepsy
                color = 'bg-purple-500';
                size = 'w-18 h-18';
              }
              
              return `
                <div class="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${color} text-white rounded-full ${size}" 
                     style="left: ${posX}; top: ${posY}; opacity: 0.8;">
                  <span class="text-xs font-medium">${company}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
    
    return comparisonHTML;
  }
  
  /**
   * Creates a button to toggle comparative analysis
   * @param {HTMLElement} container - Container element
   */
  function addComparativeAnalysisButton(container) {
    // Create button
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'flex justify-end mt-6 mb-4';
    buttonContainer.innerHTML = `
      <button id="show-comparative-analysis" class="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded hover:bg-green-600 dark:hover:bg-green-700 transition-colors flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        Compare with Other Companies
      </button>
    `;
    
    // Insert the button
    container.appendChild(buttonContainer);
    
    // Add click event to show comparative analysis
    document.getElementById('show-comparative-analysis').addEventListener('click', () => {
      showComparativeAnalysisModal();
    });
  }
  
  /**
   * Shows a modal with comparative analysis
   */
  
/**
 * Shows a modal with comparative analysis
 */
function showComparativeAnalysisModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50';
    modal.id = 'comparative-analysis-modal';
    
    modal.innerHTML = `
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Comparative Analysis of Epilepsy Treatment Companies</h2>
          <button id="close-comparative-modal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="p-6">
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Companies to Compare:</label>
            <div class="flex flex-wrap gap-3">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" value="PrecisisAG" checked>
                <span class="ml-2 text-gray-700 dark:text-gray-300">Precisis AG</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" value="EpiMinder" checked>
                <span class="ml-2 text-gray-700 dark:text-gray-300">EpiMinder</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" value="FlowMedical" checked>
                <span class="ml-2 text-gray-700 dark:text-gray-300">Flow Medical</span>
              </label>
            </div>
          </div>
          
          <button id="update-comparison" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-6">
            Update Comparison
          </button>
          
          <div id="comparative-analysis-content">
            ${generateComparativeAnalysis(['PrecisisAG', 'EpiMinder', 'FlowMedical'])}
          </div>
        </div>
        
        <div class="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end">
          <button id="download-comparison" class="mr-3 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Comparison
          </button>
          <button id="close-comparative-modal-btn" class="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
            Close
          </button>
        </div>
      </div>
    `;
    
    // Add modal to the body
    document.body.appendChild(modal);
    
    // Add event listeners
    document.getElementById('close-comparative-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    document.getElementById('close-comparative-modal-btn').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    
    document.getElementById('update-comparison').addEventListener('click', () => {
      const checkboxes = modal.querySelectorAll('input[type="checkbox"]:checked');
      const selectedCompanies = Array.from(checkboxes).map(cb => cb.value);
      
      if (selectedCompanies.length === 0) {
        alert('Please select at least one company to compare.');
        return;
      }
      
      const contentContainer = document.getElementById('comparative-analysis-content');
      contentContainer.innerHTML = generateComparativeAnalysis(selectedCompanies);
    });
    
    document.getElementById('download-comparison').addEventListener('click', () => {
      const checkboxes = modal.querySelectorAll('input[type="checkbox"]:checked');
      const selectedCompanies = Array.from(checkboxes).map(cb => cb.value);
      downloadComparisonReport(selectedCompanies);
    });
  }
  
  /**
   * Downloads a comparison report for the selected companies
   * @param {string[]} companies - Array of company names
   */
  function downloadComparisonReport(companies) {
    // Sample data structure for comparison
    const comparisonData = {
      'PrecisisAG': {
        trials: 3,
        technology: 'EASEE System (Neurostimulation)',
        approach: 'Minimally invasive stimulation implanted under scalp',
        targetPopulation: 'Drug-resistant focal epilepsy',
        clinicalPhase: 'Completed pilot studies, planning U.S. trials',
        keyDifferentiator: 'Minimally invasive alternative to intracranial devices',
        regulatoryStatus: 'FDA Breakthrough Device Designation',
        marketPresence: 'Europe (Germany-based)',
        strength: 'Balance of efficacy and reduced invasiveness',
        weakness: 'Limited long-term data',
        opportunity: 'Expansion to U.S. market with breakthrough designation',
        threat: 'Competition from less invasive alternatives'
      },
      'EpiMinder': {
        trials: 2,
        technology: 'Minder System (EEG Monitoring)',
        approach: 'Sub-scalp implantable EEG monitoring',
        targetPopulation: 'Epilepsy patients requiring long-term monitoring',
        clinicalPhase: 'Completed initial safety study, long-term follow-up ongoing',
        keyDifferentiator: 'Continuous long-term EEG data collection',
        regulatoryStatus: 'Under evaluation',
        marketPresence: 'Australia-based, limited to clinical studies',
        strength: 'Unique long-term monitoring capabilities',
        weakness: 'Diagnostic only, not therapeutic',
        opportunity: 'Integration with seizure prediction algorithms',
        threat: 'Wearable EEG alternatives'
      },
      'FlowMedical': {
        trials: 5,
        technology: 'Flow Headset (tDCS)',
        approach: 'Non-invasive transcranial direct current stimulation',
        targetPopulation: 'Depression with potential for epilepsy applications',
        clinicalPhase: 'Multiple completed studies for depression',
        keyDifferentiator: 'Non-invasive, home-based solution',
        regulatoryStatus: 'Various approvals for depression treatment',
        marketPresence: 'U.S. and European markets',
        strength: 'Non-invasive, home usability',
        weakness: 'Not yet fully validated for epilepsy',
        opportunity: 'Cross-indication expansion',
        threat: 'Efficacy challenges for severe epilepsy cases'
      }
    };
    
    // Only include companies that exist in our data
    const validCompanies = companies.filter(company => comparisonData[company]);
    
    if (validCompanies.length === 0) {
      alert('No valid companies selected for comparison.');
      return;
    }
    
    // Generate report content
    let content = `
  COMPARATIVE ANALYSIS OF EPILEPSY TREATMENT COMPANIES
  ====================================================
  Generated: ${new Date().toLocaleDateString()}
  
  OVERVIEW
  --------
  This report provides a comparison of ${validCompanies.join(', ')} and their respective approaches
  to epilepsy treatment technologies based on clinical trial data and market positioning.
  
  `;
  
    // Add comparison table
    const attributes = [
      { key: 'trials', label: 'Number of Trials' },
      { key: 'technology', label: 'Core Technology' },
      { key: 'approach', label: 'Technical Approach' },
      { key: 'targetPopulation', label: 'Target Population' },
      { key: 'clinicalPhase', label: 'Clinical Phase' },
      { key: 'keyDifferentiator', label: 'Key Differentiator' },
      { key: 'regulatoryStatus', label: 'Regulatory Status' },
      { key: 'marketPresence', label: 'Market Presence' }
    ];
    
    content += 'TECHNOLOGY COMPARISON\n-------------------\n';
    
    attributes.forEach(attr => {
      content += `\n${attr.label}:\n`;
      validCompanies.forEach(company => {
        content += `  - ${company}: ${comparisonData[company][attr.key]}\n`;
      });
    });
    
    // Add SWOT analysis
    content += '\n\nSWOT ANALYSIS\n-------------\n';
    
    validCompanies.forEach(company => {
      content += `\n${company}:\n`;
      content += `  - Strengths: ${comparisonData[company].strength}\n`;
      content += `  - Weaknesses: ${comparisonData[company].weakness}\n`;
      content += `  - Opportunities: ${comparisonData[company].opportunity}\n`;
      content += `  - Threats: ${comparisonData[company].threat}\n`;
    });
    
    // Add conclusions
    content += `
  STRATEGIC IMPLICATIONS
  ---------------------
  `;
  
    if (validCompanies.includes('PrecisisAG')) {
      content += `
  • Precisis AG offers a middle-ground solution between non-invasive approaches like tDCS
    and highly invasive intracranial devices, potentially addressing a significant market need.
  `;
    }
    
    if (validCompanies.includes('EpiMinder')) {
      content += `
  • EpiMinder's focus on continuous monitoring represents a complementary approach that could
    work alongside therapeutic interventions to improve overall epilepsy management.
  `;
    }
    
    if (validCompanies.includes('FlowMedical')) {
      content += `
  • Flow Medical's non-invasive approach could serve as a first-line intervention before
    patients progress to more invasive solutions, particularly for milder forms of epilepsy.
  `;
    }
    
    if (validCompanies.length > 1) {
      content += `
  • The combined landscape demonstrates a trend toward less invasive interventions with
    home-based capabilities, indicating a market shift away from traditional surgical approaches
    for epilepsy management.
  `;
    }
    
    // Create and download file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Epilepsy-Technologies-Comparison-${validCompanies.join('-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  /**
   * Add a button in the header area to generate a meta-analysis across all companies
   */
  function addMetaAnalysisButton() {
    // Check if button already exists
    if (document.getElementById('meta-analysis-button')) {
      return;
    }
    
    // Find the container to add the button
    const container = document.querySelector('.header-actions') || document.querySelector('.flex.items-center.justify-between');
    
    if (!container) {
      console.warn('Could not find a container for the meta-analysis button');
      return;
    }
    
    // Create the button
    const metaAnalysisButton = document.createElement('button');
    metaAnalysisButton.id = 'meta-analysis-button';
    metaAnalysisButton.className = 'px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors flex items-center ml-4';
    metaAnalysisButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Cross-Company Analysis
    `;
    
    // Add click event
    metaAnalysisButton.addEventListener('click', () => {
      showComparativeAnalysisModal();
    });
    
    // Add button to container
    container.appendChild(metaAnalysisButton);
  }
  
  /**
   * Initialize all comparative analysis features
   */
  function initComparativeAnalysis() {
    // Add comparative analysis button to each company's trial view
    const addComparisonButtons = () => {
      const companies = ['PrecisisAG', 'EpiMinder', 'FlowMedical'];
      
      companies.forEach(company => {
        // Add the button after the header content in each company view
        const headers = document.querySelectorAll('.border-b.border-gray-200');
        
        headers.forEach(header => {
          const headerText = header.textContent || '';
          if (headerText.includes(company)) {
            const container = header.parentNode;
            addComparativeAnalysisButton(container);
          }
        });
      });
    };
    
    // Add meta-analysis button in the main header
    addMetaAnalysisButton();
    
    // Add comparison buttons after a short delay to ensure the DOM is ready
    setTimeout(addComparisonButtons, 1000);
  }
  
  // Call this function to initialize all comparative analysis features
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize after a short delay to ensure the UI is fully rendered
    setTimeout(initComparativeAnalysis, 1500);
  });
  
  /**
   * Function to update the navigation to include a dedicated analysis page link
   */
  function addAnalysisPageLink() {
    // Find the navigation container
    const nav = document.querySelector('nav') || document.querySelector('.sidebar-navigation');
    
    if (!nav) {
      console.warn('Could not find navigation element');
      return;
    }
    
    // Create the analysis link
    const analysisLink = document.createElement('a');
    analysisLink.href = '#';
    analysisLink.className = 'flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md';
    analysisLink.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Epilepsy Market Analysis
    `;
    
    // Add click event to show comprehensive analysis
    analysisLink.addEventListener('click', (e) => {
      e.preventDefault();
      showComprehensiveAnalysisPage();
    });
    
    // Add link to navigation
    nav.appendChild(analysisLink);
  }
  
  /**
   * Creates a comprehensive analysis page with all companies
   */
  function showComprehensiveAnalysisPage() {
    // Get the main content container
    const mainContainer = document.getElementById('strategic-initiatives-content') || document.querySelector('main');
    
    if (!mainContainer) {
      console.warn('Could not find main content container');
      return;
    }
    
    // Save the original content to restore later
    const originalContent = mainContainer.innerHTML;
    
    // Create the comprehensive analysis content
    const analysisContent = `
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Comprehensive Epilepsy Treatment Market Analysis</h2>
          <button id="back-to-trials" class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Trials
          </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Market Overview</h3>
            <p class="text-gray-600 dark:text-gray-400">
              The epilepsy treatment device market is evolving toward less invasive, more patient-friendly solutions,
              with companies developing technologies across the invasiveness spectrum from non-invasive to minimally invasive approaches.
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Trends</h3>
            <ul class="space-y-1 text-gray-600 dark:text-gray-400">
              <li class="flex items-start">
                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Shift toward home-based and patient-controlled solutions</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Increasing regulatory support for innovative devices</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 dark:text-blue-400 mr-2">•</span>
                <span>Integration of continuous monitoring with therapeutic approaches</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">Market Size</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2">
              The global epilepsy treatment devices market is projected to reach $12.8B by 2025,
              growing at a CAGR of 9.7% from 2020 to 2025.
            </p>
            <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-2">
              <div class="bg-blue-500 h-2 rounded-full" style="width: 62%;"></div>
            </div>
            <div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>2020: $8.1B</span>
              <span>2025: $12.8B</span>
            </div>
          </div>
        </div>
        
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Company Comparison</h3>
          ${generateComparativeAnalysis(['PrecisisAG', 'EpiMinder', 'FlowMedical'])}
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Market Segmentation by Invasiveness</h3>
            <div class="relative h-64">
              <canvas id="invasiveness-chart" width="400" height="250"></canvas>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Clinical Trial Activity</h3>
            <div class="relative h-64">
              <canvas id="trial-chart" width="400" height="250"></canvas>
            </div>
          </div>
        </div>
        
        <div class="mb-8">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Strategic Recommendations</h3>
          <div class="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Based on comprehensive analysis of the epilepsy treatment device market and clinical trial landscape,
              the following strategic directions are recommended:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 class="font-medium text-blue-800 dark:text-blue-300 mb-2">R&D Focus Areas</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-500 dark:text-blue-400 mr-2">→</span>
                    <span>Closed-loop systems combining monitoring and therapy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 dark:text-blue-400 mr-2">→</span>
                    <span>Non-invasive solutions with improved target specificity</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-500 dark:text-blue-400 mr-2">→</span>
                    <span>AI integration for seizure prediction and prevention</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded-lg border border-green-100 dark:border-green-800">
                <h4 class="font-medium text-green-800 dark:text-green-300 mb-2">Market Entry Strategy</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start">
                    <span class="text-green-500 dark:text-green-400 mr-2">→</span>
                    <span>Target drug-resistant population as initial beachhead</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 dark:text-green-400 mr-2">→</span>
                    <span>Develop comprehensive reimbursement strategy</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-green-500 dark:text-green-400 mr-2">→</span>
                    <span>Pursue complementary partnerships with pharmaceutical companies</span>
                  </li>
                </ul>
              </div>
              
              <div class="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                <h4 class="font-medium text-purple-800 dark:text-purple-300 mb-2">Clinical Development</h4>
                <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">→</span>
                    <span>Design studies to support both safety and QoL improvements</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">→</span>
                    <span>Pursue regulatory pathways that accelerate market access</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-500 dark:text-purple-400 mr-2">→</span>
                    <span>Generate real-world evidence alongside clinical trials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex justify-end">
          <button id="download-full-analysis" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Full Market Analysis
          </button>
        </div>
      </div>
    `;
    
    // Set the content
    mainContainer.innerHTML = analysisContent;
    
    // Add event listener to back button
    document.getElementById('back-to-trials').addEventListener('click', () => {
      mainContainer.innerHTML = originalContent;
    });
    
    // Add event listener to download button
    document.getElementById('download-full-analysis').addEventListener('click', () => {
      downloadFullMarketAnalysis();
    });
    
    // Render charts (placeholder for actual chart rendering)
    setTimeout(() => {
      renderInvasivenessChart();
      renderTrialActivityChart();
    }, 500);
  }
  
  /**
   * Render the invasiveness segmentation chart
   */
 
/**
 * Render the invasiveness segmentation chart
 */
function renderInvasivenessChart() {
    const canvas = document.getElementById('invasiveness-chart');
    if (!canvas) return;
    
    // This would be replaced with actual chart.js code
    const ctx = canvas.getContext('2d');
    
    // Draw a placeholder visualization
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 30;
    
    // Draw segments
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 0.7, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, Math.PI * 0.7, Math.PI * 1.3, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(16, 185, 129, 0.6)';
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, Math.PI * 1.3, Math.PI * 2, false);
    ctx.closePath();
    ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
    ctx.fill();
    
    // Add labels
    ctx.font = '12px Arial';
    ctx.fillStyle = '#333';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ctx.fillStyle = '#ddd';
    }
    
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Label 1
    const label1X = centerX + Math.cos(Math.PI * 0.35) * (radius * 0.7);
    const label1Y = centerY + Math.sin(Math.PI * 0.35) * (radius * 0.7);
    ctx.fillText('Non-invasive', label1X, label1Y);
    
    // Label 2
    const label2X = centerX + Math.cos(Math.PI) * (radius * 0.7);
    const label2Y = centerY + Math.sin(Math.PI) * (radius * 0.7);
    ctx.fillText('Minimally invasive', label2X, label2Y);
    
    // Label 3
    const label3X = centerX + Math.cos(Math.PI * 1.65) * (radius * 0.7);
    const label3Y = centerY + Math.sin(Math.PI * 1.65) * (radius * 0.7);
    ctx.fillText('Highly invasive', label3X, label3Y);
    
    // Add percentages
    ctx.font = 'bold 14px Arial';
    
    // Percentage 1
    const pct1X = centerX + Math.cos(Math.PI * 0.35) * (radius * 0.4);
    const pct1Y = centerY + Math.sin(Math.PI * 0.35) * (radius * 0.4);
    ctx.fillText('38%', pct1X, pct1Y);
    
    // Percentage 2
    const pct2X = centerX + Math.cos(Math.PI) * (radius * 0.4);
    const pct2Y = centerY + Math.sin(Math.PI) * (radius * 0.4);
    ctx.fillText('33%', pct2X, pct2Y);
    
    // Percentage 3
    const pct3X = centerX + Math.cos(Math.PI * 1.65) * (radius * 0.4);
    const pct3Y = centerY + Math.sin(Math.PI * 1.65) * (radius * 0.4);
    ctx.fillText('29%', pct3X, pct3Y);
    
    // Add title
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Market Share by Invasiveness', centerX, 20);
  }
  
  /**
   * Render the trial activity chart
   */
  function renderTrialActivityChart() {
    const canvas = document.getElementById('trial-chart');
    if (!canvas) return;
    
    // This would be replaced with actual chart.js code
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Define chart dimensions
    const chartWidth = canvas.width - 60;
    const chartHeight = canvas.height - 60;
    const leftMargin = 40;
    const topMargin = 30;
    
    // Define data
    const companies = ['PrecisisAG', 'EpiMinder', 'FlowMedical', 'Others'];
    const completedTrials = [2, 1, 4, 7];
    const ongoingTrials = [1, 1, 1, 5];
    const barWidth = chartWidth / companies.length / 3;
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(leftMargin, topMargin);
    ctx.lineTo(leftMargin, topMargin + chartHeight);
    ctx.lineTo(leftMargin + chartWidth, topMargin + chartHeight);
    ctx.strokeStyle = '#666';
    ctx.stroke();
    
    // Y-axis labels
    ctx.fillStyle = '#333';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ctx.fillStyle = '#ddd';
    }
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    
    const maxValue = Math.max(...completedTrials) + Math.max(...ongoingTrials);
    for (let i = 0; i <= 5; i++) {
      const y = topMargin + chartHeight - (i * chartHeight / 5);
      ctx.fillText((i * maxValue / 5).toFixed(0), leftMargin - 5, y);
      
      // Grid line
      ctx.beginPath();
      ctx.moveTo(leftMargin, y);
      ctx.lineTo(leftMargin + chartWidth, y);
      ctx.strokeStyle = '#ddd';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        ctx.strokeStyle = '#444';
      }
      ctx.stroke();
    }
    
    // Draw bars and x-axis labels
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    companies.forEach((company, i) => {
      const x = leftMargin + (i * chartWidth / companies.length) + chartWidth / companies.length / 2;
      
      // Completed trials bar
      const completedHeight = (completedTrials[i] / maxValue) * chartHeight;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.fillRect(
        x - barWidth - 2,
        topMargin + chartHeight - completedHeight,
        barWidth,
        completedHeight
      );
      
      // Ongoing trials bar
      const ongoingHeight = (ongoingTrials[i] / maxValue) * chartHeight;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
      ctx.fillRect(
        x + 2,
        topMargin + chartHeight - ongoingHeight,
        barWidth,
        ongoingHeight
      );
      
      // X-axis label
      ctx.fillStyle = '#333';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        ctx.fillStyle = '#ddd';
      }
      ctx.font = '12px Arial';
      const displayName = company.length > 8 ? company.substring(0, 8) + '..' : company;
      ctx.fillText(displayName, x, topMargin + chartHeight + 5);
    });
    
    // Chart title
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Clinical Trial Activity', canvas.width / 2, 10);
    
    // Legend
    ctx.textAlign = 'left';
    ctx.font = '12px Arial';
    
    // Completed legend
    ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
    ctx.fillRect(leftMargin, canvas.height - 20, 15, 15);
    ctx.fillStyle = '#333';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ctx.fillStyle = '#ddd';
    }
    ctx.fillText('Completed', leftMargin + 20, canvas.height - 13);
    
    // Ongoing legend
    ctx.fillStyle = 'rgba(16, 185, 129, 0.7)';
    ctx.fillRect(leftMargin + 100, canvas.height - 20, 15, 15);
    ctx.fillStyle = '#333';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      ctx.fillStyle = '#ddd';
    }
    ctx.fillText('Ongoing', leftMargin + 120, canvas.height - 13);
  }
  
  /**
   * Downloads the full market analysis report
   */
  function downloadFullMarketAnalysis() {
    const content = `
  EPILEPSY TREATMENT TECHNOLOGIES: COMPREHENSIVE MARKET ANALYSIS
  =============================================================
  Generated: ${new Date().toLocaleDateString()}
  
  EXECUTIVE SUMMARY
  ----------------
  The epilepsy treatment device market is undergoing significant transformation, with a trend
  toward less invasive, more patient-friendly solutions. Companies are developing technologies
  across the invasiveness spectrum from non-invasive to minimally invasive approaches, with
  each addressing different patient needs and clinical scenarios.
  
  MARKET OVERVIEW
  --------------
  Market Size: $8.1B (2020) → $12.8B (2025)
  CAGR: 9.7%
  Primary Growth Drivers:
  - Rising prevalence of drug-resistant epilepsy
  - Increasing patient preference for minimally invasive options
  - Technological advancements in neuromodulation
  - Growing adoption of home-based treatment solutions
  
  KEY PLAYERS ANALYSIS
  -------------------
  
  1. PrecisisAG
     Technology: EASEE System (Neurostimulation)
     Approach: Minimally invasive stimulation implanted under scalp
     Target: Drug-resistant focal epilepsy
     Differentiator: Minimally invasive alternative to intracranial devices
     Regulatory: FDA Breakthrough Device Designation
     
     SWOT:
     - Strengths: Balance of efficacy and reduced invasiveness
     - Weaknesses: Limited long-term data
     - Opportunities: Expansion to U.S. market with breakthrough designation
     - Threats: Competition from less invasive alternatives
  
  2. EpiMinder
     Technology: Minder System (EEG Monitoring)
     Approach: Sub-scalp implantable EEG monitoring
     Target: Epilepsy patients requiring long-term monitoring
     Differentiator: Continuous long-term EEG data collection
     Regulatory: Under evaluation in Australia
     
     SWOT:
     - Strengths: Unique long-term monitoring capabilities
     - Weaknesses: Diagnostic only, not therapeutic
     - Opportunities: Integration with seizure prediction algorithms
     - Threats: Wearable EEG alternatives
  
  3. FlowMedical
     Technology: Flow Headset (tDCS)
     Approach: Non-invasive transcranial direct current stimulation
     Target: Depression with potential epilepsy applications
     Differentiator: Non-invasive, home-based solution
     Regulatory: Various approvals for depression treatment
     
     SWOT:
     - Strengths: Non-invasive, home usability
     - Weaknesses: Not yet fully validated for epilepsy
     - Opportunities: Cross-indication expansion
     - Threats: Efficacy challenges for severe epilepsy cases
  
  MARKET SEGMENTATION
  ------------------
  By Invasiveness:
  - Non-invasive: 38% (Growing fastest)
  - Minimally invasive: 33% (Significant growth potential)
  - Highly invasive: 29% (Stable, legacy market)
  
  By Technology:
  - Neurostimulation: 45%
  - Monitoring devices: 28%
  - Combination approaches: 27%
  
  By Geography:
  - North America: 42%
  - Europe: 31%
  - Asia-Pacific: 18%
  - Rest of World: 9%
  
  CLINICAL TRIAL LANDSCAPE
  ----------------------
  Total Active Trials: 26
  - Recruiting: 12
  - Active, not recruiting: 8
  - Planned: 6
  
  Key Focus Areas:
  - Non-invasive neurostimulation (42% of trials)
  - Minimally invasive implantable devices (31%)
  - Seizure monitoring and prediction (27%)
  
  STRATEGIC IMPLICATIONS
  --------------------
  R&D Focus Areas:
  - Closed-loop systems combining monitoring and therapy
  - Non-invasive solutions with improved target specificity
  - AI integration for seizure prediction and prevention
  
  Market Entry Strategy:
  - Target drug-resistant population as initial beachhead
  - Develop comprehensive reimbursement strategy
  - Pursue complementary partnerships with pharmaceutical companies
  
  Clinical Development:
  - Design studies to support both safety and QoL improvements
  - Pursue regulatory pathways that accelerate market access
  - Generate real-world evidence alongside clinical trials
  
  FUTURE OUTLOOK (2025-2030)
  ------------------------
  The epilepsy treatment device market is expected to continue its transformation toward less
  invasive, more personalized approaches. Key trends to watch include:
  
  1. Convergence of diagnostic and therapeutic devices into integrated systems
  2. Increased focus on home-based, patient-controlled solutions
  3. AI-driven personalization of treatment parameters
  4. Expansion of non-invasive approaches for broader patient populations
  5. Regulatory pathways evolving to accommodate novel device types
  
  CONCLUSION
  ---------
  The epilepsy treatment landscape is shifting toward a spectrum of solutions that can be
  tailored to patient needs based on disease severity, lifestyle considerations, and efficacy
  requirements. Companies that can offer solutions across this spectrum or that establish
  clear differentiation within their segment are best positioned for success.
  
  Companies should focus on generating robust clinical evidence while simultaneously
  addressing patient quality of life considerations and physician workflow integration
  to maximize market adoption.
  `;
  
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Epilepsy-Treatment-Technologies-Market-Analysis.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  
  /**
   * Main integration function - call this to initialize all analysis features
   */
  function initAllAnalysisFeatures() {
    // First update the trial view functions to include summary
    updateHardcodedTrialViewsWithSummary();
    
    // Then update to include detailed analysis
    updateHardcodedTrialViewsWithAnalysis();
    
    // Initialize comparative analysis features
    document.addEventListener('DOMContentLoaded', () => {
      // Add with a delay to ensure DOM is ready
      setTimeout(() => {
        initComparativeAnalysis();
        addAnalysisPageLink();
      }, 1500);
    });
  }
  
  // Initialize all features
  initAllAnalysisFeatures();
  
  updateHardcodedTrialViewsWithSummary();
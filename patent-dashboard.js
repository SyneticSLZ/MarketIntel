// function patent() {
// // patent-dashboard.js
// export class PatentDashboard {
//     constructor() {
//         this.charts = {
//             categories: null,
//             trends: null
//         };
//         this.allPatents = []; 
//         this.initializeEventListeners();
//     }

//     formatNumber(number) {
//         if (!number) return '0';
//         if (number >= 1000000) {
//             return (number / 1000000).toFixed(1) + 'M';
//         } else if (number >= 1000) {
//             return (number / 1000).toFixed(1) + 'K';
//         }
//         return number.toString();
//     }

//     initializeEventListeners() {
//         const patentTypeFilter = document.getElementById('patentTypeFilter');
//         if (patentTypeFilter) {
//             patentTypeFilter.addEventListener('change', (e) => {
//                 this.filterPatentTable(e.target.value);
//             });
//         }

//         const patentSearch = document.getElementById('patentSearch');
//         if (patentSearch) {
//             patentSearch.addEventListener('input', (e) => {
//                 this.searchPatents(e.target.value);
//             });
//         }

//     }

//     // Add this new method
// searchPatents(searchTerm) {
//     console.log(this.allPatents)
//     const searchTermLower = searchTerm.toLowerCase();
//     const filteredPatents = this.allPatents.filter(patent => 
//         patent.number.toLowerCase().includes(searchTermLower) ||
//         patent.title.toLowerCase().includes(searchTermLower) ||
//         patent.date.toLowerCase().includes(searchTermLower) ||
//         patent.status.toLowerCase().includes(searchTermLower) ||
//         patent.type.toLowerCase().includes(searchTermLower)
//     );

//     this.updatePatentTable(filteredPatents);
// }

//     async fetchPatentData(companyName) {
//         try {
//             // Get historical data
//             const historicalResponse = await fetch('https://intelbackend.onrender.com/api/company-patents', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ 
//                     companyName,
//                     per_page: 10000 // Get maximum allowed
//                 })
//             });

//             if (!historicalResponse.ok) {
//                 throw new Error('Failed to fetch patent data');
//             }

//             const historicalData = await historicalResponse.json();
            
//             // Filter current year's patents from the historical data
//             const currentYear = new Date().getFullYear();
//             const currentYearPatents = historicalData.patents.filter(patent => {
//                 const patentYear = new Date(patent.patent_date).getFullYear();
//                 return patentYear === currentYear;
//             });

//             return this.processPatentData(currentYearPatents, historicalData.patents);
//         } catch (error) {
//             console.error('Error fetching patent data:', error);
//             return null;
//         }
//     }

//     processPatentData(currentYearPatents, historicalPatents) {
//         console.log('Processing historical patents:', historicalPatents);
        
//         // Get most recent 5 patents from all patents, not just current year
//         const recentPatents = [...historicalPatents]
//             .sort((a, b) => new Date(b.patent_date) - new Date(a.patent_date))
//             .slice(0, 5);

//         console.log('Most recent 5 patents:', recentPatents);

//         // Calculate stats
//         const stats = {
//             thisYearPatents: currentYearPatents.length,
//             totalHistoricalPatents: historicalPatents.length,
//             pendingApplications: historicalPatents.filter(p => 
//                 p.status?.toLowerCase().includes('pending') || 
//                 p.status?.toLowerCase().includes('application') ||
//                 p.status?.toLowerCase().includes('filed')
//             ).length,
//             recentPatents: recentPatents
//         };

//         // Process categories
//         const categories = historicalPatents.reduce((acc, patent) => {
//             const type = patent.type || 'Other';
//             acc[type] = (acc[type] || 0) + 1;
//             return acc;
//         }, {}); 

//         // Process trends (monthly for current year)
//         const trends = Array.from({ length: 12 }, (_, i) => {
//             const date = new Date();
//             date.setMonth(date.getMonth() - i);
//             const month = date.toLocaleString('default', { month: 'short' });
//             const year = date.getFullYear();
//             const monthKey = `${month} ${year}`;
//             const filings = historicalPatents.filter(p => {
//                 const patentDate = new Date(p.issueDate);
//                 return patentDate.getMonth() === date.getMonth() &&
//                        patentDate.getFullYear() === date.getFullYear();
//             }).length;
//             return { month: monthKey, filings };
//         }).reverse();

//         return {
//             stats,
//             categories,
//             trends,
//             historicalPatents: historicalPatents.map(p => ({
//                 number: p.id,
//                 title: p.title,
//                 date: new Date(p.issueDate).toLocaleDateString(),
//                 status: p.status,
//                 type: p.type,
//                 citations: p.citations || { cited: 0, citedBy: 0 }
//             })),
//             recentPatents: stats.recentPatents.map(p => ({
//                 number: p.id,
//                 title: p.title,
//                 date: new Date(p.issueDate).toLocaleDateString(),
//                 status: p.status,
//                 type: p.type,
//                 citations: p.citations || { cited: 0, citedBy: 0 }
//             }))
//         };
//     }

//     updateDashboard(data) {
//         // Update stats
//         document.getElementById('thisYearPatents').textContent = this.formatNumber(data.stats.thisYearPatents);
//         document.getElementById('totalHistoricalPatents').textContent = this.formatNumber(data.stats.totalHistoricalPatents);
//         document.getElementById('pendingPatents').textContent = this.formatNumber(data.stats.pendingApplications);

//         // Update categories chart
//         const patentCategoriesCtx = document.getElementById('patentCategoriesChart');
//         if (patentCategoriesCtx) {
//             if (this.charts.categories) {
//                 this.charts.categories.destroy();
//             }
//             this.charts.categories = new Chart(patentCategoriesCtx, {
//                 type: 'doughnut',
//                 data: {
//                     labels: Object.keys(data.categories),
//                     datasets: [{
//                         data: Object.values(data.categories),
//                         backgroundColor: [
//                             '#4299E1',
//                             '#48BB78',
//                             '#ECC94B',
//                             '#F56565',
//                             '#A0AEC0'
//                         ]
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             position: 'right'
//                         }
//                     }
//                 }
//             });
//         }

//         // Update trends chart
//         const patentTrendsCtx = document.getElementById('patentTrendsChart');
//         if (patentTrendsCtx) {
//             if (this.charts.trends) {
//                 this.charts.trends.destroy();
//             }
//             this.charts.trends = new Chart(patentTrendsCtx, {
//                 type: 'line',
//                 data: {
//                     labels: data.trends.map(t => t.month),
//                     datasets: [{
//                         label: 'Patent Filings',
//                         data: data.trends.map(t => t.filings),
//                         borderColor: '#4299E1',
//                         tension: 0.4,
//                         fill: false
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                             ticks: {
//                                 stepSize: 1
//                             }
//                         }
//                     },
//                     plugins: {
//                         tooltip: {
//                             mode: 'index',
//                             intersect: false
//                         }
//                     }
//                 }
//             });
//         }

//         // Update recent patents table (Most Recent Patents 2024)
//         const recentPatentsTable = document.getElementById('recentPatentsTable');
//         if (recentPatentsTable && data.recentPatents.length > 0) {
//             recentPatentsTable.innerHTML = data.recentPatents.map(patent => `
//                 <tr>
//                         <td class="px-6 py-4 whitespace-nowrap">
//                             <a href="https://patents.google.com/patent/US${patent.number}"
//                                target="_blank"
//                                class="text-blue-600 hover:text-blue-800 hover:underline">
//                                 ${patent.number}
//                             </a>
//                         </td>
//                     <td class="px-6 py-4">${patent.title}</td>
//                     <td class="px-6 py-4">${patent.date}</td>
//                     <td class="px-6 py-4">
//                         <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                         ${patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 
//                           patent.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                           'bg-gray-100 text-gray-800'}">
//                             ${patent.status}
//                         </span>
//                     </td>
//                     <td class="px-6 py-4">
//                         ${patent.citations.cited + patent.citations.citedBy}
//                     </td>
//                 </tr>
//             `).join('');
//         } else if (recentPatentsTable) {
//             recentPatentsTable.innerHTML = `
//                 <tr>
//                     <td colspan="5" class="px-6 py-4 text-center text-gray-500">
//                         No patents found for current year
//                     </td>
//                 </tr>
//             `;
//         }

//         // Update patent activity table (Recent Patent Activity)
//         const patentTableBody = document.getElementById('patentTableBody');
//         if (patentTableBody && data.historicalPatents.length > 0) {
//             patentTableBody.innerHTML = data.historicalPatents.map(patent => `
//                 <tr>
//                         <td class="px-6 py-4 whitespace-nowrap">
//                             <a href="https://patents.google.com/patent/US${patent.number}"
//                                target="_blank"
//                                class="text-blue-600 hover:text-blue-800 hover:underline">
//                                 ${patent.number}
//                             </a>
//                         </td>
//                     <td class="px-6 py-4">${patent.title}</td>
//                     <td class="px-6 py-4">${patent.date}</td>
//                     <td class="px-6 py-4">
//                         <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                         ${patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 
//                           patent.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                           'bg-gray-100 text-gray-800'}">
//                             ${patent.status}
//                         </span>
//                     </td>
//                     <td class="px-6 py-4">${patent.type}</td>
//                 </tr>
//             `).join('');
//         } else if (patentTableBody) {
//             patentTableBody.innerHTML = `
//                 <tr>
//                     <td colspan="5" class="px-6 py-4 text-center text-gray-500">
//                         No patents found
//                     </td>
//                 </tr>
//             `;
            
//         }
//         // console.log(data.recentPatents)
//         this.allPatents = data.historicalPatents
//         this.updatePatentTable(data.historicalPatents);
//     }

//     filterPatentTable(type) {
//         const rows = document.querySelectorAll('#patentTableBody tr');
//         rows.forEach(row => {
//             const patentType = row.querySelector('td:nth-child(5)')?.textContent;
//             if (type === 'all' || patentType?.toLowerCase() === type.toLowerCase()) {
//                 row.style.display = '';
//             } else {
//                 row.style.display = 'none';
//             }
//         });
//     }

//     updatePatentTable(patents) {
//         const patentTableBody = document.getElementById('patentTableBody');
//         if (patentTableBody) {
//             if (patents.length > 0) {
//                 console.log("yes")
//                 patentTableBody.innerHTML = patents.map(patent => `
//                     <tr>
//                         <td class="px-6 py-4 whitespace-nowrap">
//                             <a href="https://patents.google.com/patent/US${patent.number}"
//                                target="_blank"
//                                class="text-blue-600 hover:text-blue-800 hover:underline">
//                                 ${patent.number}
//                             </a>
//                         </td>
//                         <td class="px-6 py-4">${patent.title}</td>
//                         <td class="px-6 py-4">${patent.date}</td>
//                         <td class="px-6 py-4">
//                             <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                             ${patent.status === 'Granted' ? 'bg-green-100 text-green-800' : 
//                               patent.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
//                               'bg-gray-100 text-gray-800'}">
//                                 ${patent.status}
//                             </span>
//                         </td>
//                         <td class="px-6 py-4">${patent.type}</td>
//                     </tr>
//                 `).join('');
//             } else {
//                 patentTableBody.innerHTML = `
//                     <tr>
//                         <td colspan="5" class="px-6 py-4 text-center text-gray-500">
//                             No patents found matching your search
//                         </td>
//                     </tr>
//                 `;
//             }
//         }
//     }

//     async renderTechnologyAnalysis(companyName) {
//         try {
//             // Show loading state in both tables
//             document.getElementById('recentPatentsTable').innerHTML = `
//                 <tr>
//                     <td colspan="5" class="px-6 py-4 text-center">
//                         <div class="animate-pulse">Loading patent data...</div>
//                     </td>
//                 </tr>
//             `;
//             document.getElementById('patentTableBody').innerHTML = `
//                 <tr>
//                     <td colspan="5" class="px-6 py-4 text-center">
//                         <div class="animate-pulse">Loading patent data...</div>
//                     </td>
//                 </tr>
//             `;
            
//             const data = await this.fetchPatentData(companyName);
//             if (data) {
//                 this.updateDashboard(data);
//             }
//         } catch (error) {
//             console.error('Error rendering technology analysis:', error);
//             // Update all stat counters to show error
//             ['thisYearPatents', 'totalHistoricalPatents', 'pendingPatents'].forEach(id => {
//                 document.getElementById(id).textContent = '-';
//             });
            
//             // Show error in both tables
//             const errorMessage = `
//                 <tr>
//                     <td colspan="5" class="px-6 py-4 text-center text-red-500">
//                         Error loading patent data. Please try again later.
//                     </td>
//                 </tr>
//             `;
//             document.getElementById('recentPatentsTable').innerHTML = errorMessage;
//             document.getElementById('patentTableBody').innerHTML = errorMessage;
//         }
//     }
// }

// // Create and export a singleton instance
// export const patentDashboard = new PatentDashboard();

// // Export the render function directly for convenience
// export const renderPatentAnalysis = (companyName) => patentDashboard.renderTechnologyAnalysis(companyName);
// }
export class PatentDashboard {
    constructor() {
        this.charts = {
            applicants: null,
            publications: null,
            legalStatus: null,       // Add these new chart references
            jurisdiction: null,
            documentType: null
        };
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.totalPages = 1;
        this.similarityThreshold = 0.6;
        this.allPatents = [];
        this.initializeEventListeners();

        window.patentsTable = this;
        window.toggleGroup = this.toggleGroup.bind(this);
        window.showPatentModal = this.showPatentModal.bind(this)
        window.closePatentModal = this.closePatentModal.bind(this)
    }

    async initializeEventListeners() {
        document.addEventListener('click', (e) => {
            if (e.target.matches('.pagination-button')) {
                const newPage = parseInt(e.target.dataset.page);
                if (newPage !== this.currentPage) {
                    this.currentPage = newPage;
                    this.updateRecentPatentsTable(this.allPatents);
                }
            }
        });

        const patentSearch = document.getElementById('patentSearch');
        if (patentSearch) {
            patentSearch.addEventListener('input', (e) => {
                this.searchPatents(e.target.value);
            });
        }

        // Close modal when clicking outside
        window.onclick = (event) => {
            const modal = document.getElementById('patentModal');
            if (event.target === modal) {
                this.closePatentModal();
            }
        };
    }

    searchPatents(searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        const filteredPatents = this.allPatents.filter(patent => 
            patent['Display Key']?.toLowerCase().includes(searchTermLower) ||
            patent['Title']?.toLowerCase().includes(searchTermLower) ||
            patent['Application Date']?.toLowerCase().includes(searchTermLower) ||
            patent['Legal Status']?.toLowerCase().includes(searchTermLower) ||
            patent['Document Type']?.toLowerCase().includes(searchTermLower)
        );

        this.updatePatentTable(filteredPatents);
    }

    filterRecentPatents(patents) {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        
        return patents.filter(patent => {
            const pubDate = new Date(patent['Publication Date']);
            return pubDate >= oneYearAgo;
        });
    }


    // Group patents by exact title match
groupPatentsByTitle(patents) {
        // First, filter for recent patents
        const recentPatents = this.filterRecentPatents(patents);
        
        const groups = {};
        
        recentPatents.forEach(patent => {
            if (!groups[patent.Title]) {
                groups[patent.Title] = [];
            }
            groups[patent.Title].push(patent);
        });

        const groupedPatents = [];
        const singlePatents = [];

        Object.entries(groups).forEach(([title, patents]) => {
            if (patents.length > 1) {
                groupedPatents.push({
                    title: title,
                    patents: patents.sort((a, b) => new Date(b['Publication Date']) - new Date(a['Publication Date']))
                });
            } else {
                singlePatents.push(patents[0]);
            }
        });

        // Sort grouped patents by most recent publication date within each group
        groupedPatents.sort((a, b) => {
            const aDate = new Date(a.patents[0]['Publication Date']);
            const bDate = new Date(b.patents[0]['Publication Date']);
            return bDate - aDate;
        });

        // Sort single patents by publication date
        singlePatents.sort((a, b) => new Date(b['Publication Date']) - new Date(a['Publication Date']));

        return { groupedPatents, singlePatents };
    }

    renderPagination(totalItems) {
        this.totalPages = Math.ceil(totalItems / this.itemsPerPage);
        
        if (this.totalPages <= 1) return '';

        let pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(`
                <button 
                    class="pagination-button ${this.currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300'} 
                           px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white 
                           transition-colors duration-200 mx-1"
                    data-page="${i}">
                    ${i}
                </button>
            `);
        }

        const prevButton = `
            <button 
                class="pagination-button ${this.currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''} 
                       bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300 
                       px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white 
                       transition-colors duration-200"
                data-page="${this.currentPage - 1}"
                ${this.currentPage === 1 ? 'disabled' : ''}>
                Previous
            </button>
        `;

        const nextButton = `
            <button 
                class="pagination-button ${this.currentPage === this.totalPages ? 'opacity-50 cursor-not-allowed' : ''} 
                       bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-300 
                       px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-600 hover:text-white 
                       transition-colors duration-200"
                data-page="${this.currentPage + 1}"
                ${this.currentPage === this.totalPages ? 'disabled' : ''}>
                Next
            </button>
        `;

        return `
            <div class="flex justify-center items-center space-x-2 mt-4 mb-4">
                ${this.currentPage > 1 ? prevButton : ''}
                ${pages.join('')}
                ${this.currentPage < this.totalPages ? nextButton : ''}
            </div>
        `;
    }

    renderSinglePatentRow(patent) {
        return `
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <td class="px-6 py-4 whitespace-nowrap">
                    <a href="${patent.URL}"
                       target="_blank"
                       class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                        ${patent['Display Key']}
                    </a>
                </td>
                <td class="px-6 py-4 dark:text-white" onclick="showPatentModal(${JSON.stringify(patent).replace(/"/g, '&quot;')})">
                    ${patent.Title}
                </td>
                <td class="px-6 py-4 whitespace-nowrap dark:text-white">
                    ${patent['Application Date']}
                </td>
                <td class="px-6 py-4">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${patent['Legal Status'] === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                      patent['Legal Status'] === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}">
                        ${patent['Legal Status']}
                    </span>
                </td>
                <td class="px-6 py-4 dark:text-white">
                    ${patent['Cites Patent Count'] + patent['Cited by Patent Count']}
                </td>
            </tr>
        `;
    }

    renderPatentGroup(group, groupIndex) {
        const mainPatent = group.patents[0];
        return `
            <tr class="group-header hover:bg-gray-50 dark:hover:bg-gray-700">
                <td colspan="5" class="px-6 py-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <button onclick="toggleGroup('group-${groupIndex}')" 
                                    class="text-gray-500 hover:text-gray-700 dark:text-white dark:hover:text-gray-200">
                                <svg class="w-5 h-5 transform transition-transform duration-200" 
                                     fill="none" 
                                     stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path stroke-linecap="round" 
                                          stroke-linejoin="round" 
                                          stroke-width="2" 
                                          d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <div>
                                <div class="font-medium dark:text-white">${mainPatent.Title}</div>
                                <div class="text-sm text-gray-500 dark:text-gray-300">
                                    ${group.patents.length} variations
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr class="hidden" id="group-${groupIndex}">
                <td colspan="5" class="px-6 py-2 bg-gray-50 dark:bg-gray-800">
                    <div class="space-y-2">
                        ${group.patents.map(patent => `
                            <div class="border-l-4 border-blue-500 pl-4 py-2">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <a href="${patent.URL}" 
                                           target="_blank"
                                           class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                                            ${patent['Display Key']}
                                        </a>
                                        <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            Filed: ${patent['Application Date']} | Status: ${patent['Legal Status']}
                                        </p>
                                    </div>
                                    <button onclick='showPatentModal(${JSON.stringify(patent).replace(/"/g, '&quot;')})'
                                            class="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                        View Details
                                    </button>
                                </div>
                                <div class="mt-2 text-sm text-gray-600 dark:text-gray-300">
                                    Citations: ${patent['Cites Patent Count'] + patent['Cited by Patent Count']}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </td>
            </tr>
        `;
    }

    toggleGroup(groupId) {
        const content = document.getElementById(groupId);
        const button = content.previousElementSibling.querySelector('svg');
        
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            button.style.transform = 'rotate(180deg)';
        } else {
            content.classList.add('hidden');
            button.style.transform = '';
        }
    }

    formatNumber(number) {
        return new Intl.NumberFormat().format(number);
    }

    showPatentModal(patent) {
        console.log(patent)
        const modal = document.getElementById('patentModal');
        const content = document.getElementById('patentModalContent');
        
        content.innerHTML = `
            <div class="space-y-4 text-gray-700 dark:text-white">
                <h4 class="text-xl font-semibold dark:text-white">${patent.Title}</h4>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="font-medium dark:text-white">Patent Number:</p>
                        <p class="dark:text-white">${patent['Display Key']}</p>
                    </div>
                    <div>
                        <p class="font-medium dark:text-white">Status:</p>
                        <p class="dark:text-white">${patent['Legal Status']}</p>
                    </div>
                    <div>
                        <p class="font-medium dark:text-white">Application Date:</p>
                        <p class="dark:text-white">${patent['Application Date']}</p>
                    </div>
                    <div>
                        <p class="font-medium dark:text-white">Publication Date:</p>
                        <p class="dark:text-white">${patent['Publication Date']}</p>
                    </div>
                    <div>
                        <p class="font-medium dark:text-white">Applicants:</p>
                        <p class="dark:text-white">${patent['Applicants']}</p>
                    </div>
                    <div>
                        <p class="font-medium dark:text-white">Inventors:</p>
                        <p class="dark:text-white">${patent['Inventors']}</p>
                    </div>
                </div>
                <div>
                    <p class="font-medium dark:text-white">Abstract:</p>
                    <p class="mt-1 dark:text-white">${patent['Abstract'] || 'Not available'}</p>
                </div>
                <div>
                    <p class="font-medium dark:text-white">Citations:</p>
                    <p class="dark:text-white">Patent citations: ${patent['Cites Patent Count'] || 0}</p>
                    <p class="dark:text-white">Cited by patents: ${patent['Cited by Patent Count'] || 0}</p>
                </div>
                <div class="mt-4">
                    <a href="${patent['URL']}" target="_blank" 
                       class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        View Patent Details
                    </a>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    closePatentModal() {
        const modal = document.getElementById('patentModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    async processPatentData(csvData) {
        // Sort by publication date descending
        const sortedPatents = _.orderBy(csvData, ['Publication Date'], ['desc']);
        
        // Get patents from the last year
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const recentPatents = sortedPatents.filter(patent => 
            new Date(patent['Publication Date']) >= oneYearAgo
        );

        console.log(sortedPatents.length)
        console.log(recentPatents.length)
        document.getElementById('totalPatents').innerHTML = `${sortedPatents.length}`
        document.getElementById("recentApplications").innerHTML = `${recentPatents.length}`

        

        return {
            allPatents: sortedPatents,
            recentPatents: recentPatents
        };
    }



    // initializeCharts(data) {
    //     const applicantCtx = document.getElementById('applicantsChart');
    //     const publicationsCtx = document.getElementById('publicationsChart');
    //     const legalStatusCtx = document.getElementById('legalStatusChart');
    //     if (this.charts.legalStatus) this.charts.legalStatus.destroy();
    //     const jurisdictionCtx = document.getElementById('jurisdictionChart');
    //     if (this.charts.jurisdiction) this.charts.jurisdiction.destroy();
    //     const documentTypeCtx = document.getElementById('documentTypeChart');
    //     if (this.charts.documentType) this.charts.documentType.destroy();

    //     if (this.charts.applicants) {
    //         this.charts.applicants.destroy();
    //     }
    //     if (this.charts.publications) {
    //         this.charts.publications.destroy();
    //     }

    //     this.charts.legalStatus = new Chart(legalStatusCtx, {
    //         type: 'pie',
    //         data: {
    //             labels: ['Active', 'Expired', 'Inactive', 'Discontinued', 'Pending'],
    //             datasets: [{
    //                 data: [1025, 249, 197, 106, 71],
    //                 backgroundColor: [
    //                     '#10B981', '#F59E0B', '#EF4444', '#6B7280', '#3B82F6'
    //                 ]
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     position: 'right'
    //                 }
    //             }
    //         }
    //     });

    //     this.charts.jurisdiction = new Chart(jurisdictionCtx, {
    //         type: 'bar',
    //         data: {
    //             labels: ['US', 'Germany', 'Australia'],
    //             datasets: [{
    //                 label: 'Patents by Jurisdiction',
    //                 data: [1315, 35, 8],
    //                 backgroundColor: '#3B82F6'
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                 }
    //             },
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });

    //     this.charts.documentType = new Chart(documentTypeCtx, {
    //         type: 'doughnut',
    //         data: {
    //             labels: ['Patent Application', 'Granted Patents', 'Search Report', 'Design Report'],
    //             datasets: [{
    //                 data: [838, 751, 24, 31],
    //                 backgroundColor: [
    //                     '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'
    //                 ]
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     position: 'right'
    //                 }
    //             }
    //         }
    //     });
    

    //     // Applicants chart
    //     this.charts.applicants = new Chart(applicantCtx, {
    //         type: 'bar',
    //         data: {
    //             labels: ['Phonak Ag', 'Sonova Ag', 'Sennheiser', 'Others'],
    //             datasets: [{
    //                 label: 'Number of Patents',
    //                 data: [753, 716, 28, 151],
    //                 backgroundColor: [
    //                     '#3B82F6',
    //                     '#10B981',
    //                     '#F59E0B',
    //                     '#6B7280'
    //                 ]
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                 }
    //             },
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });

    //     // Publications chart
    //     const yearlyData = [1,1,1,6,29,44,56,45,70,68,53,51,90,74,52,83,69,88,84,83,60,76,104,134,111,65,49];
    //     const years = Array.from({length: yearlyData.length}, (_, i) => 1997 + i);

    //     this.charts.publications = new Chart(publicationsCtx, {
    //         type: 'line',
    //         data: {
    //             labels: years,
    //             datasets: [{
    //                 label: 'Publications',
    //                 data: yearlyData,
    //                 borderColor: '#3B82F6',
    //                 tension: 0.4,
    //                 fill: false
    //             }]
    //         },
    //         options: {
    //             responsive: true,
    //             plugins: {
    //                 legend: {
    //                     display: false
    //                 }
    //             },
    //             scales: {
    //                 y: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         }
    //     });
    // }
    initializeCharts(num) {
        const data = {
            Livanova: {
                applicants: {
                    labels: ['Livanova Usa Inc', 'East Tennessee State Uni', 'Cyberonics INC', 'Others'],
                    data: [102,15,3,3]
                },
                publications: {
                    years:[2019,2020,2021,2022,2023,2024,2025],
                    data: [23,11,21,11,13,20,3]
                },
                legalStatus: {
                    labels: ['Active', 'Discontinued', 'Pending'],
                    data: [80,3,19]
                },
                jurisdictions: {
                    labels: ['US'],
                    data: [94]
                },
                documentType: {
                    labels: ['Patent Application', 'Granted Patents'],
                    data: [47,55]
                }
            },
            Medtronic: {
                
                    applicants: {
                      labels: [
                        "Medtronic Inc",
                        "Goetz Steven M",
                        "Davis Jon P",
                        "Skelton Dennis M",
                        "Denison Timothy J",
                        "Giftakis Jonathon E",
                        "Miesel Keith A",
                        "Gerber Martin T"
                      ],
                      data: [
                        3194,
                        115,
                        72,
                        67,
                        62,
                        62,
                        60,
                        59
                      ]
                    },
                  
                  
                
                    
                    publications: {
                          years: [1977, 1980, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2007, 2011, 2012, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                          data: [2, 0, 0, 0, 1, 3, 3, 4, 3, 35, 78, 105, 79, 90, 58, 63, 51, 54, 53, 57, 90, 14],
                          thisYear: [14]
                        },
                      
                      
                legalStatus: {
                    labels: ['Active', 'Pending', 'Discontinued', 'Expired', 'Inactive', 'Patented'],
                    data: [1869, 834, 166,356, 106,13]
                },
                
                    jurisdictions: {
                      labels: ["US", "WO", "European Patents", "Australia", "Germany", "Ireland"],
                      data: [2293, 659, 391, 1, 1, 1]
                    },
                  
                  
                documentType: {
                    labels: ['Active','Granted'],
                    data: [1954,1381]
                }
            },





            NeuroPace: {
                    applicants: {
                      labels: [
                        "Neuropace Inc",
                        "Pless Benjamin D",
                        "Tcheng Thomas K",
                        "Wingeier Brett",
                        "Wingeier Brett M",
                        "Gibb Barbara",
                        "Morrell Martha J",
                        "Pless Benjamin"
                      ],
                      data: [
                        354,
                        20,
                        8,
                        7,
                        7,
                        6,
                        6,
                        6
                      ]
                    },
                                    
                    publications: {
                        years: [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                        data: [1, 5, 0, 8, 8, 2, 1, 3, 3, 2, 2, 9, 7, 12, 10, 10, 18, 23, 12, 6, 10, 6, 5, 4, 6, 3],
                        thisYear: [3]
                    },
                    
                legalStatus: {
                    labels: ['Active', 'Pending', 'Discontinued', 'Expired', 'Inactive', 'Patented'],
                    data: [160,16,26,104,46,2]
                },
                jurisdictions: {
                    labels: ['US', 'Canada', 'Australia'],
                    data: [4,327,5]
                },
                documentType: {
                    labels: ['Patent Application', 'Granted Patent',  'Amended Patent', 'Search Report'],
                    data: [174,176,1,3]
                }
            },
            XCORPRI:  {
                
                    applicants: {
                      labels: [
                        "Sk Biopharmaceuticals Co Ltd",
                        "Cha Su Bong",
                        "Chung Jin Yong",
                        "Jang Young Koo",
                        "Joung Chan Mi",
                        "Lee Ji Won",
                        "Lim Mi Jung",
                        "Maeng Cheol Young"
                      ],
                      data: [
                        125,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3,
                        3
                      ]
                    },
                                    
                publications: {
                    years: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,2025],
                    data: [2,2,8,7,8,11,6,6,10,11,16,8,15,13,2],
                    thisYear: [2]
                },
                legalStatus: {
                    labels: ['Active', 'Expired','Discontinued', 'Pending'],
                    data: [76,1,6,42]
                },
                jurisdictions: {
                    labels: ['US', 'Portugal', 'Canada', 'Finland', 'Poland','China','Japan','Malaysia', 'Australia'],
                    data: [65,1,2,1,1,2,1,1, 5]
                },
                documentType: {
                    labels: ['Patent Application', 'Granted Patents', 'Search Report', 'Patent of Addition', 'Unknown'],
                    data: [70, 49, 1, 2, 3]
                }
            },
            EpiMinder:  {
                applicants: {
                    labels: [
                        "Epi Minder Pty Ltd",
                        "Cochlear Ltd"
                      ],
                    data:  [10,5]
                },
                publications: {
                    years: [ 2021, 2022, 2023, 2024],
                    data: [1,3,4,2]
                },
                legalStatus: {
                    labels: ['Active', 'Pending'],
                    data: [7,3]
                },
                jurisdictions: {
                    labels: ['US', 'Australia'],
                    data: [4,1]
                },
                documentType: {
                    labels: ['Patent Application', 'Granted Patents'],
                    data: [7,3]
                }
            },
            FlowMedical:  { /// afnjaohusa hfushfuiash fui ahufi haduifh uaidh fiasu hfiash ufias 
                applicants: {
                    labels: [],
                    data:  []
                },
                publications: {
                    years: [ ],
                    data: []
                },
                legalStatus: {
                    labels: [],
                    data: []
                },
                jurisdictions: {
                    labels: [],
                    data: []
                },
                documentType: {
                    labels: [],
                    data: []
                }
            },
            PrecisisAG:  {
                applicants: {
                    labels: [
                        "Precisis Ag",
                        "Precisis Gmbh"
                      ],
                      data: [
                        15,
                        2
                      ]
                },
                publications: {
                    years: [ 2018, 2019, 2020, 2021, 2022, 2023, 2024],
                    data: [6,1,3,1,1,2,1]
                },
                legalStatus: {
                    labels: ['Active', 'Pending'],
                    data: [13,2]
                },
                jurisdictions: {
                    labels: ['US'],
                    data: [9]
                },
                documentType: {
                    labels: ['Patent Application', 'Granted Patents'],
                    data: [8,7]
                }
            }
        };
    
        // const selectedData = data.num
        const selectedData = num === "Livanova" ? data.Livanova 
                   : num === "Medtronic" ? data.Medtronic 
                   : num === "NeuroPace" ? data.NeuroPace 
                   : num === "XCORPRI" ? data.XCORPRI 
                   : num === "EpiMinder" ? data.EpiMinder 
                   : num === "FlowMedical" ? data.FlowMedical 
                   : data.PrecisisAG;
               
        const applicantCtx = document.getElementById('applicantsChart');
        const publicationsCtx = document.getElementById('publicationsChart');
        const legalStatusCtx = document.getElementById('legalStatusChart');
        const jurisdictionCtx = document.getElementById('jurisdictionChart');
        const documentTypeCtx = document.getElementById('documentTypeChart');
    const textColor = 'white'
        // Destroy existing charts if they exist
        Object.keys(this.charts).forEach(chartKey => {
            if (this.charts[chartKey]) this.charts[chartKey].destroy();
        });
    
        // Create charts with selected data
        this.charts.legalStatus = new Chart(legalStatusCtx, {
            type: 'pie',
            data: {
                labels: selectedData.legalStatus.labels,
                datasets: [{
                    data: selectedData.legalStatus.data,
                    backgroundColor: ['#10B981', '#F59E0B', '#EF4444', '#6B7280', '#3B82F6','#E07' ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    
        this.charts.jurisdiction = new Chart(jurisdictionCtx, {
            type: 'bar',
            data: {
                labels: selectedData.jurisdictions.labels,
                datasets: [{
                    label: 'Patents by Jurisdiction',
                    color: '#ffffff',
                    data: selectedData.jurisdictions.data,
                    backgroundColor: '#3B82F6'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    labels: { color: '#fff' }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    
        this.charts.documentType = new Chart(documentTypeCtx, {
            type: 'doughnut',
            data: {
                labels: selectedData.documentType.labels,
                datasets: [{
                    data: selectedData.documentType.data,
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    
        this.charts.applicants = new Chart(applicantCtx, {
            type: 'bar',
            data: {
                labels: selectedData.applicants.labels,
                datasets: [{
                    label: 'Number of Patents',
                    data: selectedData.applicants.data,
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#6B7280']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    
        this.charts.publications = new Chart(publicationsCtx, {
            type: 'line',
            data: {
                labels: selectedData.publications.years,
                datasets: [{
                    label: 'Publications',
                    data: selectedData.publications.data,
                    borderColor: '#3B82F6',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }

    updatePatentTable(patents) {
        const tableBody = document.getElementById('allPatentsTable');
        if (!tableBody) return;
    
        const searchTerm = document.getElementById('patentSearch')?.value || '';
        
        if (!searchTerm) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-white">
                        Enter a search term to find patents
                    </td>
                </tr>
            `;
            return;
        }
        
        if (searchTerm.length < 3) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-white">
                        Please enter at least 3 characters to search
                    </td>
                </tr>
            `;
            return;
        }
    
        if (patents.length > 0) {
            tableBody.innerHTML = patents.map(patent => `
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <a href="${patent.URL}"
                           target="_blank"
                           class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
                            ${patent['Display Key']}
                        </a>
                    </td>
                    <td class="px-6 py-4 dark:text-white" onclick="showPatentModal(${JSON.stringify(patent).replace(/"/g, '&quot;')})">
                        ${patent.Title}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap dark:text-white">
                        ${patent['Application Date']}
                    </td>
                    <td class="px-6 py-4">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${patent['Legal Status'] === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                          patent['Legal Status'] === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
                          'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white'}">
                            ${patent['Legal Status']}
                        </span>
                    </td>
                    <td class="px-6 py-4 dark:text-white">
                        ${patent['Document Type']}
                    </td>
                </tr>
            `).join('');
        } else {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-white">
                        No patents found matching your search
                    </td>
                </tr>
            `;
        }
    }

    showError() {
        const errorMessage = `
            <tr>
                <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
                    Error loading patent data. Please try again later.
                </td>
            </tr>
        `;
        document.getElementById('recentPatentsTable').innerHTML = errorMessage;
        document.getElementById('allPatentsTable').innerHTML = errorMessage;
    }


    updateRecentPatentsTable(patents) {
        const tableBody = document.getElementById('recentPatentsTable');
        if (!tableBody) return;

        // Get grouped and filtered patents
        const { groupedPatents, singlePatents } = this.groupPatentsByTitle(patents);
        
        if (groupedPatents.length === 0 && singlePatents.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                        No patents found in the last year
                    </td>
                </tr>
            `;
            return;
        }

        // Calculate total items for pagination
        const totalItems = groupedPatents.length + singlePatents.length;
        
        // Recalculate current page if it exceeds the new total pages
        const maxPages = Math.ceil(totalItems / this.itemsPerPage);
        if (this.currentPage > maxPages) {
            this.currentPage = maxPages;
        }
        
        // Calculate start and end indices for current page
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = Math.min(startIndex + this.itemsPerPage, totalItems);
        
        // Combine and slice items for current page
        const allItems = [
            ...groupedPatents.map(group => ({ type: 'group', data: group })),
            ...singlePatents.map(patent => ({ type: 'single', data: patent }))
        ];
        
        const currentPageItems = allItems.slice(startIndex, endIndex);
        
        // Render items with pagination
        tableBody.innerHTML = `
            ${currentPageItems.map((item, index) => 
                item.type === 'group' 
                    ? this.renderPatentGroup(item.data, startIndex + index)
                    : this.renderSinglePatentRow(item.data)
            ).join('')}
            ${this.renderPagination(totalItems)}
        `;
    }
    // updateRecentPatentsTable(patents) {
    //     const tableBody = document.getElementById('recentPatentsTable');
    //     if (tableBody) {
    //         if (patents.length > 0) {
    //             tableBody.innerHTML = patents.map(patent => `
    //                 <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
    //                     <td class="px-6 py-4 whitespace-nowrap">
    //                         <a href="${patent.URL}"
    //                            target="_blank"
    //                            class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 hover:underline">
    //                             ${patent['Display Key']}
    //                         </a>
    //                     </td>
    //                     <td class="px-6 py-4" onclick="patentDashboard.showPatentModal(${JSON.stringify(patent).replace(/"/g, '&quot;')})">
    //                         ${patent.Title}
    //                     </td>
    //                     <td class="px-6 py-4 whitespace-nowrap">
    //                         ${patent['Application Date']}
    //                     </td>
    //                     <td class="px-6 py-4">
    //                         <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
    //                         ${patent['Legal Status'] === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
    //                           patent['Legal Status'] === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : 
    //                           'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}">
    //                             ${patent['Legal Status']}
    //                         </span>
    //                     </td>
    //                     <td class="px-6 py-4">
    //                         ${patent['Cites Patent Count'] + patent['Cited by Patent Count']}
    //                     </td>
    //                 </tr>
    //             `).join('');
    //         } else {
    //             tableBody.innerHTML = `
    //                 <tr>
    //                     <td colspan="5" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
    //                         No recent patents found
    //                     </td>
    //                 </tr>
    //             `;
    //         }
    //     }
    // }

    async renderPatentAnalysis(csvFilename) {
        try {
            // Show loading state
            document.getElementById('recentPatentsTable').innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-4 text-center">
                        <div class="animate-pulse dark:text-gray-400">Loading patent data...</div>
                    </td>
                </tr>
            `;
            
            // Read and parse CSV file
            // const csvData = await window.fs.readFile(csvFilename, { encoding: 'utf8' });
                // Read the CSV file
    const response = await fetch(`./data/${csvFilename}/patents.csv`);
    const csvData = await response.text();
    
            Papa.parse(csvData, {
                header: true,
                complete: async (results) => {
                    const processedData = await this.processPatentData(results.data);
                    this.allPatents = processedData.allPatents;
                    
                    // Initialize charts
                    this.initializeCharts(csvFilename);
                    
                    // Update tables
                    this.updatePatentTable(processedData.allPatents);
                    this.updateRecentPatentsTable(processedData.recentPatents);
                },
                error: (error) => {
                    console.error('Error parsing CSV:', error);
                    this.showError();
                }
            });
        } catch (error) {
            console.error('Error rendering patent analysis:', error);
            this.showError();
        }
    }

    showError() {
        const errorMessage = `
            <tr>
                <td colspan="5" class="px-6 py-4 text-center text-red-500 dark:text-red-400">
                    Error loading patent data. Please try again later.
                </td>
            </tr>
        `;
        document.getElementById('recentPatentsTable').innerHTML = errorMessage;
        document.getElementById('allPatentsTable').innerHTML = errorMessage;
    }
}

// Create and export singleton instance
export const patentDashboard = new PatentDashboard();

// Export render function
export const renderPatentAnalysis = (csvFilename) => patentDashboard.renderPatentAnalysis(csvFilename);
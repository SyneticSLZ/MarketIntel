// Import company data
import gnData from './data/Gn/finance.js';
import sonovaData from './data/Sonova/finance.js';
import wsData from './data/Ws/finance.js';
import DemantData from './data/Demant/finance.js'
import NeuroPace from './data/NeuroPace/finance.js'



const livanovaData = {
    "companyName": "LivaNova",
    "segments": [
      {
        "name": "Neuromodulation",
        "description": "Design, development, manufacture, marketing, and sale of devices that deliver neuromodulation therapy for treating DRE (Drug-Resistant Epilepsy) and DTD (Difficult-to-Treat Depression)",
        "products": [
          {
            "name": "VNS Therapy System",
            "components": ["Implantable pulse generator", "Lead connecting generator to vagus nerve", "Accessories"],
            "models": [
              {"model": "Model 103", "name": "Demipulse"},
              {"model": "Model 106", "name": "AspireSR", "features": ["Closed loop stimulation (AutoStim)", "Expanded MRI access"]},
              {"model": "Model 1000", "name": "SenTiva", "features": ["Smallest and lightest VNS device", "Responsive therapy", "Scheduled Programming", "Day & Night Programming", "Expanded MRI access"]},
              {"model": "Model 1000D", "name": "SenTiva Duo"}
            ],
            "approvals": [
              "First medical device approved by FDA for treatment of DRE (1997)",
              "Only neuromodulation device approved in US for DRE patients as young as four years",
              "Many worldwide regulatory bodies approved without age or seizure-type restrictions"
            ],
            "reimbursement": [
              {"condition": "Dravet Syndrome", "year": 2020, "agency": "CMS"},
              {"condition": "Lennox-Gastaut Syndrome", "year": 2022, "month": "January", "agency": "CMS"}
            ],
            "evidence": "Peer reviewed evidence published in 2021 and 2022 confirms safety, efficacy, and cost effectiveness in both adult and pediatric populations"
          },
          {
            "name": "aura6000 System",
            "description": "System for treating OSA (Obstructive Sleep Apnea)",
            "status": "In development and clinical testing"
          }
        ],
        "financialData": {
          "revenue": {
            "total": {
              "2022": 476993,
              "2023": 519710,
              "2024": 554223,
              "growth": {
                "2023vs2022": 9.0,
                "2024vs2023": 6.6
              }
            },
            "byRegion": {
              "UnitedStates": {
                "2022": 374542,
                "2023": 407493,
                "2024": 441022,
                "growth": {
                  "2023vs2022": 8.8,
                  "2024vs2023": 8.2
                }
              },
              "Europe": {
                "2022": 50291,
                "2023": 57435,
                "2024": 54899,
                "growth": {
                  "2023vs2022": 14.2,
                  "2024vs2023": -4.4
                }
              },
              "RestOfWorld": {
                "2022": 52160,
                "2023": 54782,
                "2024": 58302,
                "growth": {
                  "2023vs2022": 5.0,
                  "2024vs2023": 6.4
                }
              }
            }
          },
          "segmentIncome": {
            "2022": 172775,
            "2023": 153384,
            "2024": 195309,
            "growth": {
              "2023vs2022": -11.2,
              "2024vs2023": 27.3
            }
          },
          "expenses": {
            "2024": {
              "costOfSales": 50236,
              "sellingGeneralAdministrative": 187649,
              "researchAndDevelopment": 121029
            },
            "2023": {
              "costOfSales": 50213,
              "sellingGeneralAdministrative": 175273,
              "researchAndDevelopment": 140840
            },
            "2022": {
              "costOfSales": 31618,
              "sellingGeneralAdministrative": 158977,
              "researchAndDevelopment": 113623
            }
          },
          "assets": {
            "2023": 647391,
            "2024": 640956
          },
          "capitalExpenditures": {
            "2022": 369,
            "2023": 1201,
            "2024": 4244
          }
        },
        "otherInfo": [
          "Segment income increased to $195.3 million in 2024 from $153.4 million in 2023",
          "The increase was primarily due to increased net revenue and decreased R&D expense",
          "R&D decrease primarily associated with winding down of the Company's heart failure program",
          "Costs associated with former heart failure program wound down during 2023"
        ]
      }
    ],
    "epilepsyTreatment": {
      "availableOptions": [
        "Multiple ASMs (Anti-Seizure Medications)",
        "Various forms of ketogenic diet",
        "VNS (Vagus Nerve Stimulation)",
        "Resective and ablative brain surgery",
        "Intracranial neurostimulation"
      ],
      "treatmentPath": "ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.",
      "vnsTherapyAdvantages": [
        "First medical device treatment approved by FDA for DRE in 1997",
        "Only neuromodulation device approved in US for DRE patients as young as four years",
        "Many worldwide regulatory bodies approved without age or seizure-type restrictions",
        "Journal of Neurology (January 2022) meta-analysis demonstrated VNS Therapy benefits in adults with DRE",
        "Improved seizure frequency without increased serious adverse events or discontinuations"
      ],
      "ongoingDevelopment": "LivaNova continues R&D focused on improving the VNS Therapy System with enhanced pulse generator, lead, and programming software, and developing new products with additional features and functionality."
    },
    "geographicRegions": ["U.S.", "Europe", "Rest of World"],
    "additionalNotes": {
      "europeDefinition": "Europe includes the UK, Germany, France, Italy, the Netherlands, Spain, Belgium, Poland, Sweden, Switzerland, Austria, Norway, Portugal, Finland, and Denmark.",
      "restOfWorldDefinition": "Rest of World includes all other countries where LivaNova operates.",
      "propertyByRegion": {
        "2024": {
          "UnitedStates": 65170,
          "Europe": 94394,
          "RestOfWorld": 10606,
          "Total": 170260
        },
        "2023": {
          "UnitedStates": 62701,
          "Europe": 85606,
          "RestOfWorld": 5874,
          "Total": 154181
        }
      }
    }
  };

  const medtronicData = {
    "marketOverview": {
      "totalMarketSize": {
        "value": 1413,
        "unit": "Million USD",
        "period": "Nine months ended January 24, 2025",
        "source": "Medtronic SEC Filing Q3 FY2025"
      },
      "quarterlyRevenue": {
        "value": 476,
        "unit": "Million USD",
        "period": "Three months ended January 24, 2025",
        "source": "Medtronic SEC Filing Q3 FY2025"
      },
      "growth": {
        "quarterly": {
          "value": 12,
          "unit": "Percent",
          "period": "Q3 FY2025 vs Q3 FY2024",
          "previousValue": 425
        },
        "yearToDate": {
          "value": 11,
          "unit": "Percent",
          "period": "Nine months ended January 24, 2025 vs Nine months ended January 26, 2024",
          "previousValue": 1270
        }
      },
      "epilepsyMarketShare": {
        "value": 32,
        "unit": "Percent",
        "notes": "Estimated portion of neuromodulation segment dedicated to epilepsy treatment"
      }
    },
    "quarterlyPerformance": [
      {
        "quarter": "Q1 FY2023",
        "revenue": 402,
        "growthRate": 3.1
      },
      {
        "quarter": "Q2 FY2023",
        "revenue": 410,
        "growthRate": 4.3
      },
      {
        "quarter": "Q3 FY2023",
        "revenue": 415,
        "growthRate": 5.1
      },
      {
        "quarter": "Q4 FY2023",
        "revenue": 420,
        "growthRate": 6.2
      },
      {
        "quarter": "Q1 FY2024",
        "revenue": 418,
        "growthRate": 4.0
      },
      {
        "quarter": "Q2 FY2024",
        "revenue": 422,
        "growthRate": 2.9
      },
      {
        "quarter": "Q3 FY2024",
        "revenue": 425,
        "growthRate": 2.4
      },
      {
        "quarter": "Q4 FY2024",
        "revenue": 430,
        "growthRate": 2.4
      },
      {
        "quarter": "Q1 FY2025",
        "revenue": 455,
        "growthRate": 8.9
      },
      {
        "quarter": "Q2 FY2025",
        "revenue": 462,
        "growthRate": 9.5
      },
      {
        "quarter": "Q3 FY2025",
        "revenue": 476,
        "growthRate": 12.0
      }
    ],
    "epilepsyProducts": {
      "currentPortfolio": [
        {
          "name": "Percept PC",
          "type": "Deep Brain Stimulation",
          "approvalStatus": "FDA Approved",
          "features": ["BrainSense Technology", "Personalized therapy", "Objective data capture"],
          "marketShare": 42,
          "launchYear": 2020,
          "medicareCode": "61886",
          "medicareReimbursement": 35826.45
        },
        {
          "name": "Percept RC",
          "type": "Deep Brain Stimulation",
          "approvalStatus": "FDA Approved",
          "features": ["Rechargeable", "BrainSense Technology", "Extended battery life", "Personalized therapy"],
          "marketShare": 28,
          "launchYear": 2023,
          "medicareCode": "61886",
          "medicareReimbursement": 35826.45
        },
        {
          "name": "DBS for Asleep Procedures",
          "type": "Surgical Technique",
          "approvalStatus": "FDA Approved Aug 2024",
          "features": ["Reduces procedure time", "Improved patient comfort", "Lower sedation risks"],
          "marketShare": 18,
          "launchYear": 2024,
          "medicareCode": "61886",
          "medicareReimbursement": 35826.45
        },
        {
          "name": "BrainSense Adaptive DBS",
          "type": "Deep Brain Stimulation",
          "approvalStatus": "CE Mark Jan 2025",
          "features": ["Responsive stimulation", "Advanced seizure detection", "Personalized therapy"],
          "marketShare": 12,
          "launchYear": 2025,
          "medicareCode": "61886",
          "medicareReimbursement": 35826.45,
          "notes": "Pending FDA approval"
        }
      ],
      "pipelineProducts": [
        {
          "name": "Next-gen Sensing DBS",
          "type": "Deep Brain Stimulation",
          "developmentStage": "Clinical Trials",
          "anticipatedLaunch": 2026,
          "keyFeatures": ["Multi-area sensing", "Cloud connectivity", "Advanced algorithms"]
        },
        {
          "name": "Wireless Epilepsy Monitor",
          "type": "Diagnostic",
          "developmentStage": "Early Development",
          "anticipatedLaunch": 2027,
          "keyFeatures": ["Continuous monitoring", "AI seizure prediction", "Remote monitoring"]
        }
      ]
    },
    "medicareReimbursement": {
      "dbs": {
        "implantation": {
          "cptCode": "61886",
          "description": "Insertion or replacement of cranial neurostimulator pulse generator or receiver, with connection to 2 or more leads",
          "facility": 1220.43,
          "device": 34603.02,
          "total": 35826.45
        },
        "programming": {
          "cptCode": "95983",
          "description": "Electronic analysis of implanted neurostimulator pulse generator/transmitter with brain neurostimulator programming",
          "payment": 138.69
        },
        "analysis": {
          "cptCode": "95970",
          "description": "Electronic analysis of implanted neurostimulator pulse generator",
          "payment": 146.69
        }
      },
      "yearOverYearChanges": {
        "implantation": -3.31,
        "programming": -1.52,
        "analysis": 5.01
      }
    },
    "epilepsyMarketSegmentation": {
      "byRegion": [
        {
          "region": "North America",
          "share": 62,
          "growth": 14.2
        },
        {
          "region": "Europe",
          "share": 21,
          "growth": 9.7
        },
        {
          "region": "Asia Pacific",
          "share": 12,
          "growth": 16.3
        },
        {
          "region": "Rest of World",
          "share": 5,
          "growth": 7.5
        }
      ],
      "byPatientSegment": [
        {
          "segment": "Drug-Resistant Epilepsy",
          "share": 68,
          "growthRate": 13.2
        },
        {
          "segment": "Generalized Epilepsy",
          "share": 18,
          "growthRate": 8.5
        },
        {
          "segment": "Focal Epilepsy",
          "share": 14,
          "growthRate": 9.3
        }
      ],
      "byPayerType": [
        {
          "payer": "Medicare",
          "share": 48,
          "growthRate": 10.5
        },
        {
          "payer": "Medicaid",
          "share": 12,
          "growthRate": 7.2
        },
        {
          "payer": "Commercial",
          "share": 35,
          "growthRate": 14.8
        },
        {
          "payer": "Other",
          "share": 5,
          "growthRate": 6.1
        }
      ]
    },
    "competitiveLandscape": {
      "keyCompetitors": [
        {
          "name": "NeuroPace",
          "product": "RNS System",
          "marketShare": 15,
          "growthRate": 8.2,
          "keyDifferentiator": "Responsive neurostimulation specifically for epilepsy"
        },
        {
          "name": "Boston Scientific",
          "product": "Vercise DBS",
          "marketShare": 12,
          "growthRate": 7.5,
          "keyDifferentiator": "Multiple independent current control"
        },
        {
          "name": "LivaNova",
          "product": "VNS Therapy",
          "marketShare": 18,
          "growthRate": 5.3,
          "keyDifferentiator": "Vagus nerve stimulation approach"
        },
        {
          "name": "Abbott",
          "product": "Infinity DBS",
          "marketShare": 9,
          "growthRate": 6.8,
          "keyDifferentiator": "Directional leads and iOS programming"
        },
        {
          "name": "Medtronic",
          "product": "Percept DBS",
          "marketShare": 46,
          "growthRate": 12.0,
          "keyDifferentiator": "BrainSense technology and adaptive DBS"
        }
      ]
    }
  }


  const combinedNeuromodulationData = {
    // Medtronic Data
    medtronic: {
      "companyName": "Medtronic",
      "segments": [
        {
          "name": "Neuromodulation",
          "financialData": {
            "revenue": {
              "threeMonths": {
                "2024": {
                  "January24": 476,
                  "January26": 425
                },
                "growth": {
                  "percentage": 12
                }
              },
              "nineMonths": {
                "2024": {
                  "January24": 1413,
                  "January26": 1270
                },
                "growth": {
                  "percentage": 11
                }
              }
            }
          },
          "products": [
            {
              "name": "Inceptiv",
              "type": "Spinal cord stimulator",
              "status": "Continued launch in the U.S.",
              "contributionToGrowth": "Driver of net sales increase",
              "description": "Advanced closed-loop stimulation system for chronic pain management with real-time sensing and adaptive therapy delivery."
            },
            {
              "name": "Percept RC",
              "type": "Deep brain neurostimulator",
              "status": "Continued launch",
              "contributionToGrowth": "Driver of net sales increase",
              "description": "Next-generation device with enhanced battery life, improved sensing capabilities, and expanded programming options for movement disorders.",
              "epilepsyUse": "Can be used for certain types of drug-resistant epilepsy as an adjunctive therapy."
            },
            {
              "name": "DBS Therapy",
              "type": "Deep brain stimulation system",
              "status": "Established therapy",
              "description": "For epilepsy patients who are refractory to multiple anti-seizure medications and are not candidates for respective surgery.",
              "epilepsyFocus": true
            }
          ],
          "growthDrivers": [
            "Continued launch of Inceptiv spinal cord stimulator in the U.S.",
            "Continued launch of Percept RC deep brain neurostimulator",
            "Expanded applications in epilepsy treatment",
            "Growing acceptance of neuromodulation for drug-resistant conditions"
          ],
          "epilepsyFocus": {
            "products": ["Deep Brain Stimulation (DBS)"],
            "approvals": "FDA approved for reducing seizure frequency in adults with partial-onset seizures who are refractory to antiepileptic medications",
            "mechanism": "Delivers targeted electrical stimulation to the anterior nucleus of the thalamus (ANT)"
          }
        }
      ],
      "financialReporting": {
        "period": "Three and nine months ended January 24, 2025 and January 26, 2024",
        "revenueUnit": "in millions"
      }
    },
    
    // LivaNova Data
    livanova: {
      "companyName": "LivaNova",
      "segments": [
        {
          "name": "Neuromodulation",
          "description": "Design, development, manufacture, marketing, and sale of devices that deliver neuromodulation therapy for treating DRE (Drug-Resistant Epilepsy) and DTD (Difficult-to-Treat Depression)",
          "products": [
            {
              "name": "VNS Therapy System",
              "components": ["Implantable pulse generator", "Lead connecting generator to vagus nerve", "Accessories"],
              "models": [
                {"model": "Model 103", "name": "Demipulse"},
                {"model": "Model 106", "name": "AspireSR", "features": ["Closed loop stimulation (AutoStim)", "Expanded MRI access"]},
                {"model": "Model 1000", "name": "SenTiva", "features": ["Smallest and lightest VNS device", "Responsive therapy", "Scheduled Programming", "Day & Night Programming", "Expanded MRI access"]},
                {"model": "Model 1000D", "name": "SenTiva Duo"}
              ],
              "approvals": [
                "First medical device approved by FDA for treatment of DRE (1997)",
                "Only neuromodulation device approved in US for DRE patients as young as four years",
                "Many worldwide regulatory bodies approved without age or seizure-type restrictions"
              ],
              "reimbursement": [
                {"condition": "Dravet Syndrome", "year": 2020, "agency": "CMS"},
                {"condition": "Lennox-Gastaut Syndrome", "year": 2022, "month": "January", "agency": "CMS"}
              ],
              "epilepsyFocus": true
            }
          ],
          "financialData": {
            "revenue": {
              "total": {
                "2022": 476993,
                "2023": 519710,
                "2024": 554223,
                "growth": {
                  "2023vs2022": 9.0,
                  "2024vs2023": 6.6
                }
              },
              "byRegion": {
                "UnitedStates": {
                  "2022": 374542,
                  "2023": 407493,
                  "2024": 441022,
                  "growth": {
                    "2023vs2022": 8.8,
                    "2024vs2023": 8.2
                  }
                },
                "Europe": {
                  "2022": 50291,
                  "2023": 57435,
                  "2024": 54899,
                  "growth": {
                    "2023vs2022": 14.2,
                    "2024vs2023": -4.4
                  }
                },
                "RestOfWorld": {
                  "2022": 52160,
                  "2023": 54782,
                  "2024": 58302,
                  "growth": {
                    "2023vs2022": 5.0,
                    "2024vs2023": 6.4
                  }
                }
              }
            },
            "segmentIncome": {
              "2022": 172775,
              "2023": 153384,
              "2024": 195309,
              "growth": {
                "2023vs2022": -11.2,
                "2024vs2023": 27.3
              }
            }
          }
        }
      ],
      "epilepsyTreatment": {
        "availableOptions": [
          "Multiple ASMs (Anti-Seizure Medications)",
          "Various forms of ketogenic diet",
          "VNS (Vagus Nerve Stimulation)",
          "Resective and ablative brain surgery",
          "Intracranial neurostimulation"
        ],
        "treatmentPath": "ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.",
        "vnsTherapyAdvantages": [
          "First medical device approved by FDA for DRE in 1997",
          "Only neuromodulation device approved in US for DRE patients as young as four years",
          "Many worldwide regulatory bodies approved without age or seizure-type restrictions",
          "Journal of Neurology (January 2022) meta-analysis demonstrated VNS Therapy benefits in adults with DRE",
          "Improved seizure frequency without increased serious adverse events or discontinuations"
        ],
        "ongoingDevelopment": "LivaNova continues R&D focused on improving the VNS Therapy System with enhanced pulse generator, lead, and programming software, and developing new products with additional features and functionality."
      }
    },
    
    // Market Data
    epilepsyMarket: {
      "overview": "The global neuromodulation market for epilepsy treatment is experiencing steady growth driven by the rising prevalence of drug-resistant epilepsy and technological advancements in neurostimulation devices.",
      "prevalence": {
        "global": "Approximately 50 million people worldwide have epilepsy",
        "drugResistant": "About 30-40% of epilepsy patients develop drug-resistant epilepsy (DRE)",
        "potentialPatients": "Significant untapped market potential as many eligible patients have not yet been treated with neuromodulation"
      },
      "treatments": {
        "vns": {
          "marketLeader": "LivaNova",
          "approvals": "FDA and multiple international regulatory approvals for DRE",
          "usageStats": "Over 100,000 patients implanted worldwide",
          "growthDrivers": ["Expanded reimbursement", "Increased clinical evidence", "Technology improvements"]
        },
        "dbs": {
          "marketLeader": "Medtronic",
          "approvals": "FDA approved for specific epilepsy indications",
          "growthDrivers": ["Expanded indications", "Advanced sensing capabilities", "Personalized therapy delivery"]
        }
      },
      "trends": [
        "Increasing adoption of closed-loop stimulation technologies",
        "Growing focus on minimally invasive procedures",
        "Integration of diagnostic and therapeutic capabilities",
        "Expansion of reimbursement coverage for specific syndromes",
        "Development of advanced battery technologies for extended device longevity"
      ],
      "challenges": [
        "High device and implantation costs",
        "Insurance coverage limitations in some regions",
        "Patient awareness and educational barriers",
        "Competition from other therapeutic approaches"
      ],
      "futureOutlook": {
        "cagr": "Estimated 8-10% compound annual growth rate for epilepsy neuromodulation market through 2028",
        "innovationFocus": "Development of smaller, more efficient devices with improved sensing capabilities and patient-specific programming options",
        "opportunities": "Expansion into emerging markets, broader indications, and integration with digital health platforms for remote monitoring"
      }
    }
  };

  const XCOPRI = {
    "company": {
      "name": "SK Biopharmaceuticals Co., Ltd. / SK Life Science, Inc.",
      "focus": "Antiseizure medication for drug-resistant focal epilepsy",
      "product": "XCOPRI (cenobamate)",
      "approval_date": "November 21, 2019",
      "launch_date_us": "May 2020"
    },
    "financials": {
      "full_year_revenue": {
        "2024": {
          "total": 405627407,
          "growth_rate": "54.3%",
          "compared_to": 262962963,
          "xcopri_us_sales": 324962963,
          "xcopri_us_growth_rate": "62%"
        },
        "2023": {
          "total": 262962963
        },
        "2022": {
          "total": 338296296
        }
      },
      "quarterly_revenue": {
        "q3_2023": {
          "total": 56074074,
          "growth_rate": "19.2%"
        },
        "q1_2021": {
          "total": 103703704
        },
        "q4_2024": {
          "total": 120740741
        }
      },
      "operating_profit": {
        "2024": 71333333
      },
      "net_profit": {
        "2024": 168148148
      }
    },
    "sales_data": {
      "xcopri_us_sales_2024": {
        "amount": 324962963,
        "percentage_of_total_revenue": "80.1%"
      },
      "sales_growth_drivers": [
        "U.S. prescription growth (175,000+ patients by Sep 2024)",
        "High gross margin (>90%)",
        "Expansion into new markets (e.g., Northeast Asia)"
      ]
    },
    "growth_metrics": {
      "annual_growth_rates": {
        "2024_vs_2023_total": "54.3%",
        "2024_vs_2023_xcopri_us": "62%"
      },
      "clinical_growth_indicator": {
        "study": "Phase 3 Northeast Asia",
        "result": "100% seizure freedom at 400 mg dose vs. 25.9% placebo",
        "presentation_date": "December 9, 2024",
        "event": "AES Annual Meeting"
      }
    },
    "additional_insights": {
      "patient_reach": {
        "amount": "175000+",
        "as_of_date": "September 30, 2024"
      },
      "market_opportunity": {
        "us_market_size_2024": 5000000000,
        "global_market_size_2024": 11130000000,
        "xcopri_us_market_share": "6.5%"
      },
      "future_products": {
        "pipeline_expansion": "TPD, RPT, oncology",
        "xcopri_indications": "Expand by 2025-2026",
        "new_markets": "Korea, Japan NDA planned"
      }
    }
  } 

  const EpiMinder = {
    "name": "Epi-Minder",
    "type": "early-stage",
    "treatment": "Seizure Monitoring",
    "keywords": ["Epi-Minder epilepsy", "wearable seizure monitoring", "behind-the-ear EEG"],
    "cik": null,
    "epilepsy_market_details": {
      "focus": "Wearable EEG-based seizure monitoring for epilepsy management",
      "technology": "Minimally invasive, behind-the-ear EEG device for continuous seizure detection and data logging",
      "market_segment": "Epilepsy Monitoring Devices Market",
      "market_size_2023": 559000000, // $559M (Grand View Research, 2023)
      "market_growth_cagr": "6.6%", // 2024-2030 (Grand View Research)
      "market_projected_size_2030": 863000000, // ~$863M by 2030 (calculated from CAGR and base year)
      "specific_growth_driver": "Rising demand for ambulatory and continuous monitoring solutions; targets ~50M epilepsy patients globally (WHO), with focus on improving diagnosis accuracy",
      "patient_reach_potential": "3M+ U.S. patients (CDC, 2021) and 80% of global patients in low/middle-income countries needing better monitoring access"
    },
    "revenue": {
      "estimate": "Not publicly disclosed; raised AUD 40M (~$26M USD, Aug 2022) in Series A funding led by Cochlear and others",
      "source": "Epi-Minder Press Release, August 2022; BioWorld, Aug 2022"
    },
    "market_impact": {
      "contribution": "Enhances epilepsy management with a discreet, wearable solution, competing with conventional EEGs and wearables like Empatica. Clinical trials (Phase III ongoing as of 2024) aim for regulatory approval by 2026.",
      "threat_to_market": "Could disrupt traditional EEG market (e.g., Natus Medical, Koninklijke Philips) by offering a lower-cost, patient-friendly alternative. Limited battery life and data privacy concerns may hinder adoption."
    }
  }

  const Flow = {
    "name": "Flow Medical",
    "type": "early-stage",
    "treatment": "Depression Device",
    "keywords": ["Flow Medical epilepsy", "transcranial direct current stimulation", "tDCS depression"],
    "cik": null,
    "epilepsy_market_details": {
      "focus": "Transcranial Direct Current Stimulation (tDCS) primarily for depression, with potential epilepsy crossover",
      "technology": "Non-invasive brain stimulation via a wearable headset delivering low-intensity electrical currents",
      "market_segment": "Epilepsy Treatment Devices Market (peripheral overlap)",
      "market_size_2024": 548400000, // $548.4M (Global Epilepsy Treatment Devices Market, Custom Market Insights)
      "market_growth_cagr": "4.1%", // 2024-2032 (Custom Market Insights)
      "market_projected_size_2032": 787300000, // $787.3M by 2034 (Custom Market Insights)
      "specific_growth_driver": "Potential off-label use for epilepsy due to tDCS’s neuromodulatory effects; ~50% of epilepsy patients experience depression comorbidity (Epilepsy Foundation)",
      "patient_reach_potential": "Indirectly targets ~25M epilepsy patients with comorbid depression globally"
    },
    "revenue": {
      "estimate": "Not publicly disclosed; raised $9M USD in Series A (May 2023) from Gilde Healthcare and others",
      "source": "Flow Neuroscience Press Release, May 2023; TechCrunch, May 2023"
    },
    "market_impact": {
      "contribution": "Primarily targets depression ($4.8B market, 2023), but tDCS’s neuromodulation could extend to epilepsy, competing with non-invasive therapies like TMS. CE-marked in Europe (2019) for depression.",
      "threat_to_market": "Poses a peripheral threat by offering a low-cost, home-use alternative to epilepsy-specific neurostimulation devices. Lack of epilepsy-specific trials (as of 2025) limits direct impact."
    }
  }
  const Precisis = {
    "name": "Precisis AG",
    "type": "early-stage",
    "treatment": "EASEE",
    "keywords": ["EASEE epilepsy", "minimally invasive neurostimulation", "focal epilepsy"],
    "cik": null,
    "epilepsy_market_details": {
      "focus": "Minimally invasive neurostimulation for drug-resistant focal epilepsy",
      "technology": "Epicranial Application of Stimulation Electrodes for Epilepsy (EASEE) - electrodes placed under the scalp on the skull bone, delivering targeted electrical impulses to suppress seizure origins",
      "market_segment": "Epilepsy Treatment Devices Market",
      "market_size_2024": 548400000, // $548.4M (Global Epilepsy Treatment Devices Market, Custom Market Insights)
      "market_growth_cagr": "4.1%", // 2025-2034 (Custom Market Insights)
      "market_projected_size_2032": 787300000, // $787.3M by 2034 (Custom Market Insights)
      "specific_growth_driver": "Addresses ~30% of epilepsy patients (drug-refractory, ~15M globally) needing alternative therapies",
      "patient_reach_potential": "Up to 10.1M globally eligible for surgical/neurostimulation treatments (Towards Healthcare, 2024)"
    },
    "revenue": {
      "estimate": "Not publicly disclosed; raised €20M (~$21.6M USD, Oct 2021) in financing from Cochlear Limited",
      "source": "Precisis Press Release, October 2021; Medical Product Outsourcing, Feb 22, 2022"
    },
    "market_impact": {
      "contribution": "Introduces a minimally invasive alternative to traditional neurostimulation (e.g., VNS, DBS), reducing surgical risk and improving patient quality of life. CE certified in Europe (Sep 15, 2022) and FDA Breakthrough Device Designation (Feb 19, 2022) signal strong growth potential.",
      "threat_to_market": "Challenges established implantable device leaders (e.g., NeuroPace RNS, LivaNova VNS) by offering a less invasive option, potentially shifting market share from surgical solutions. High development costs and regulatory hurdles could delay widespread adoption."
    }
  }
// Map company data
const companyData = {
    'Gn': gnData,
    'Sonova': sonovaData,
    'Ws': wsData,
    'Demant': DemantData,
    'NeuroPace' : NeuroPace,
    'Livanova' : livanovaData,
    'Medtronic' : medtronicData,
    'XCORPRI' : XCOPRI,
             'EpiMinder':EpiMinder,
              
              
               'PrecisisAG':Precisis,
             
               
          'FlowMedical': Flow,
       
};


// function getGrowthColor(value) {
//     return value >= 0 ? 'text-green-500' : 'text-red-500';
//   }
  
  // Combined Neuromodulation & Epilepsy Dashboard
  function generateNeuromodulationEpilepsyDashboard(medtronic, livanova) {
    return `
      <div class="container mx-auto px-4 py-8 dark:text-white">
        <!-- Dashboard Header -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-3xl font-bold mb-2">Neuromodulation & Epilepsy Market Analysis</h1>
              <p class="text-gray-600 dark:text-gray-400">Key market players and financial performance</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
  
        <!-- Key Metrics Comparison -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <!-- Medtronic Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-xl font-bold">Medtronic</h2>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Medical Technology
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">3-Month Revenue (Jan 2025)</h3>
                <p class="mt-1 text-2xl font-semibold">${formatCurrency(medtronic.segments[0].financialData.revenue.threeMonths["2024"].January24)}</p>
                <p class="text-sm ${getGrowthColor(medtronic.segments[0].financialData.revenue.threeMonths.growth.percentage)}">
                  ${formatPercentage(medtronic.segments[0].financialData.revenue.threeMonths.growth.percentage)} YoY
                </p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">9-Month Revenue (Jan 2025)</h3>
                <p class="mt-1 text-2xl font-semibold">${formatCurrency(medtronic.segments[0].financialData.revenue.nineMonths["2024"].January24)}</p>
                <p class="text-sm ${getGrowthColor(medtronic.segments[0].financialData.revenue.nineMonths.growth.percentage)}">
                  ${formatPercentage(medtronic.segments[0].financialData.revenue.nineMonths.growth.percentage)} YoY
                </p>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Products</h3>
              <div class="space-y-2">
                ${medtronic.segments[0].products.map(product => `
                  <div class="flex items-center">
                    <span class="flex-shrink-0 h-4 w-4 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="ml-2 text-sm">${product.name} (${product.type})</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- LivaNova Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div class="flex justify-between items-start mb-4">
              <h2 class="text-xl font-bold">LivaNova</h2>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Medical Devices
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">2024 Revenue</h3>
                <p class="mt-1 text-2xl font-semibold">${formatCurrency(livanova.segments[0].financialData.revenue.total["2024"])}</p>
                <p class="text-sm ${getGrowthColor(livanova.segments[0].financialData.revenue.growth["2024vs2023"])}">
                ${livanova.segments?.[0]?.financialData?.revenue?.growth?.["2024vs2023"] !== undefined ? 
                    formatPercentage(livanova.segments[0].financialData.revenue.growth["2024vs2023"]) : 
                    'N/A'}
                </p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">2024 Segment Income</h3>
                <p class="mt-1 text-2xl font-semibold">${formatCurrency(livanova.segments[0].financialData.segmentIncome["2024"])}</p>
                <p class="text-sm ${getGrowthColor(livanova.segments[0].financialData.segmentIncome.growth["2024vs2023"])}">
                  ${formatPercentage(livanova.segments[0].financialData.segmentIncome.growth["2024vs2023"])} vs 2023
                </p>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Key Products</h3>
              <div class="space-y-2">
                ${livanova.segments[0].products[0].models.slice(0, 3).map(model => `
                  <div class="flex items-center">
                    <span class="flex-shrink-0 h-4 w-4 text-blue-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="ml-2 text-sm">${model.name} (${model.model})</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
  
        <!-- Growth Comparison Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-medium">Neuromodulation Revenue Growth Comparison</h2>
          </div>
          <div class="p-4 h-80">
            <canvas id="neuromodulation-growth-comparison"></canvas>
          </div>
        </div>
  
        <!-- Epilepsy Treatment Focus -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Epilepsy Treatment Options -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Epilepsy Treatment Options</h2>
            </div>
            <div class="p-4">
              <ul class="space-y-2">
                ${livanova.epilepsyTreatment.availableOptions.map(option => `
                  <li class="flex items-center">
                    <span class="mr-2 text-blue-500">●</span>
                    <span class="text-sm">${option}</span>
                  </li>
                `).join('')}
              </ul>
              
              <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded">
                <p class="text-xs text-gray-800 dark:text-gray-200">${livanova.epilepsyTreatment.treatmentPath}</p>
              </div>
            </div>
          </div>
  
          <!-- VNS Therapy for Epilepsy -->
          <div class="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">VNS Therapy for Epilepsy</h2>
            </div>
            <div class="p-4">
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Vagus Nerve Stimulation (VNS) is a key neuromodulation technology for treating Drug-Resistant Epilepsy (DRE).
                LivaNova's VNS Therapy System was the first approved by the FDA for treating DRE.
              </p>
              
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Advantages</h3>
                  <ul class="space-y-1">
                    ${livanova.epilepsyTreatment.vnsTherapyAdvantages.slice(0, 3).map(advantage => `
                      <li class="flex items-start">
                        <span class="inline-flex items-center justify-center h-4 w-4 rounded-full bg-green-100 text-green-500 mr-2 mt-0.5 flex-shrink-0">
                          <svg class="h-2 w-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <span class="text-xs">${advantage}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recent Developments</h3>
                  <ul class="space-y-1">
                    <li class="flex items-start">
                      <span class="inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-100 text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                        <svg class="h-2 w-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span class="text-xs">CMS expanded reimbursement for VNS Therapy in Dravet Syndrome (2020)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-100 text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                        <svg class="h-2 w-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span class="text-xs">CMS expanded reimbursement for VNS Therapy in Lennox-Gastaut Syndrome (Jan 2022)</span>
                    </li>
                    <li class="flex items-start">
                      <span class="inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-100 text-blue-500 mr-2 mt-0.5 flex-shrink-0">
                        <svg class="h-2 w-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span class="text-xs">Journal of Neurology (2022) meta-analysis confirming efficacy in adults with DRE</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Medtronic Neuromodulation Data -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Growth Metrics -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Medtronic Neuromodulation Growth</h2>
            </div>
            <div class="p-4">
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Period</th>
                      <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Jan 24, 2025</th>
                      <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Jan 26, 2024</th>
                      <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-xs">Three Months</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right">${formatCurrency(medtronic.segments[0].financialData.revenue.threeMonths["2024"].January24)}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right">${formatCurrency(medtronic.segments[0].financialData.revenue.threeMonths["2024"].January26)}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right ${getGrowthColor(medtronic.segments[0].financialData.revenue.threeMonths.growth.percentage)}">
                        ${formatPercentage(medtronic.segments[0].financialData.revenue.threeMonths.growth.percentage)}
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-xs">Nine Months</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right">${formatCurrency(medtronic.segments[0].financialData.revenue.nineMonths["2024"].January24)}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right">${formatCurrency(medtronic.segments[0].financialData.revenue.nineMonths["2024"].January26)}</td>
                      <td class="px-4 py-3 whitespace-nowrap text-xs text-right ${getGrowthColor(medtronic.segments[0].financialData.revenue.nineMonths.growth.percentage)}">
                        ${formatPercentage(medtronic.segments[0].financialData.revenue.nineMonths.growth.percentage)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="mt-4 p-3 bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 rounded text-xs">
                <p>Growth drivers: Continued launch of both the Inceptiv spinal cord stimulator in the U.S. and the Percept RC deep brain neurostimulator.</p>
              </div>
            </div>
          </div>
  
          <!-- Neuromodulation Products -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Key Neuromodulation Products</h2>
            </div>
            <div class="p-4">
              <div class="space-y-4">
                ${medtronic.segments[0].products.map(product => `
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414L10 11.414l1.42 1.42a3.5 3.5 0 101.414-1.414L11.414 10l1.42-1.42a3.5 3.5 0 10-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm1.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm8-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <h3 class="text-sm font-medium">${product.name}</h3>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">${product.type}</p>
                      <p class="text-xs mt-1">${product.description || 'Advanced neuromodulation device contributing to segment growth.'}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
  
        <!-- LivaNova Regional Performance -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-medium">LivaNova Neuromodulation Revenue by Region</h2>
          </div>
          <div class="p-4 h-80">
            <canvas id="livanova-regional-performance"></canvas>
          </div>
        </div>
  
        <!-- Market Analysis and Future Outlook -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Market Analysis -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Neuromodulation Market Analysis</h2>
            </div>
            <div class="p-4">
              <div class="space-y-4">
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Market Size & Growth</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    The neuromodulation market is showing strong growth with Medtronic reporting 12% three-month and 11% nine-month growth,
                    while LivaNova reports 6.6% year-over-year growth in 2024.
                  </p>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Regional Performance</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    For LivaNova, the U.S. market leads with 8.2% growth in 2024, while Europe shows a 4.4% decline. 
                    Rest of World markets are growing at 6.4%. Geographic diversification appears to be an important factor in overall performance.
                  </p>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Product Innovation</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Both companies are investing in advanced technologies. Medtronic with Inceptiv SCS and Percept RC, and
                    LivaNova with ongoing enhancements to the VNS Therapy System including closed-loop stimulation capabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Future Outlook -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Future Outlook</h2>
            </div>
            <div class="p-4">
              <div class="space-y-4">
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Epilepsy Treatment</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Growth in the epilepsy segment of neuromodulation is supported by expanded reimbursement coverage,
                    particularly for specific syndromes like Dravet and Lennox-Gastaut. Clinical evidence continues to support efficacy.
                  </p>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Growth Drivers</h3>
                  <ul class="mt-1 list-disc list-inside text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <li>Increasing prevalence of drug-resistant epilepsy cases</li>
                    <li>Expanded indications for neuromodulation therapy</li>
                    <li>Technological advancements in device functionality and battery life</li>
                    <li>Growing acceptance of neuromodulation as an adjunctive therapy</li>
                    <li>Expanded reimbursement coverage from insurers and government programs</li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-700 dark:text-gray-300">Challenges</h3>
                  <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    Despite growth, challenges include device costs, reimbursement limitations in some regions,
                    and competition from alternative treatments. Continued innovation and clinical evidence
                    will be essential to maintain market expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  // Function to initialize charts for the dashboard
  function initializeNeuromodulationEpilepsyCharts(medtronic, livanova) {
    // Set up chart options based on dark/light mode
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#e5e7eb' : '#374151';
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    
    // 1. Growth Comparison Chart
    new Chart(document.getElementById('neuromodulation-growth-comparison').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Medtronic (3-Month)', 'Medtronic (9-Month)', 'LivaNova (2024)'],
        datasets: [{
          label: 'Growth Rate (%)',
          data: [
            medtronic.segments[0].financialData.revenue.threeMonths.growth.percentage,
            medtronic.segments[0].financialData.revenue.nineMonths.growth.percentage,
            livanova.segments[0].financialData.revenue.growth["2024vs2023"]
          ],
          backgroundColor: ['#8b5cf6', '#6366f1', '#60a5fa']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.raw + '%';
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor,
              callback: function(value) {
                return value + '%';
              }
            },
            beginAtZero: true
          }
        }
      }
    });
    
    // 2. LivaNova Regional Performance Chart
    new Chart(document.getElementById('livanova-regional-performance').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['United States', 'Europe', 'Rest of World'],
        datasets: [
          {
            label: '2022',
            data: [
              livanova.segments[0].financialData.revenue.byRegion.UnitedStates["2022"],
              livanova.segments[0].financialData.revenue.byRegion.Europe["2022"],
              livanova.segments[0].financialData.revenue.byRegion.RestOfWorld["2022"]
            ],
            backgroundColor: '#93c5fd' // blue-300
          },
          {
            label: '2023',
            data: [
              livanova.segments[0].financialData.revenue.byRegion.UnitedStates["2023"],
              livanova.segments[0].financialData.revenue.byRegion.Europe["2023"],
              livanova.segments[0].financialData.revenue.byRegion.RestOfWorld["2023"]
            ],
            backgroundColor: '#60a5fa' // blue-400
          },
          {
            label: '2024',
            data: [
              livanova.segments[0].financialData.revenue.byRegion.UnitedStates["2024"],
              livanova.segments[0].financialData.revenue.byRegion.Europe["2024"],
              livanova.segments[0].financialData.revenue.byRegion.RestOfWorld["2024"]
            ],
            backgroundColor: '#3b82f6' // blue-500
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: textColor
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + formatCurrency(context.raw);
              }
            }
          }
        },
        scales: {
          x: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor
            }
          },
          y: {
            grid: {
              color: gridColor
            },
            ticks: {
              color: textColor,
              callback: function(value) {
                return formatCurrency(value);
              }
            },
            beginAtZero: true
          }
        }
      }
    });
  }

// Utility functions
// const formatCurrency = (value, unit = 'M') => {
//     if (typeof value !== 'number' || isNaN(value)) return '-';
//     if (unit === 'B') {
//         return `${(value / 1000).toFixed(1)}B`;
//     }
//     return `${value.toFixed(1)}M`;
// };

// const formatPercentage = (value) => {
//     if (typeof value !== 'number' || isNaN(value)) return '-';
//     return `${value.toFixed(1)}%`;
// };

const formatNumber = (value) => {
    if (typeof value !== 'number' || isNaN(value)) return '-';
    return value.toLocaleString();
};

// // Helper function to safely get nested object values
// const getValue = (obj, path) => {
//     return path.split('.').reduce((acc, part) => acc && acc[part], obj);
// };

// Create metric card with dark mode support
const createMetricCard = (title, value, change = null, tooltip = '', additionalInfo = null) => {
    const changeClass = !change ? '' : change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
    const changeIcon = !change ? '' : change >= 0 ? '↑' : '↓';
    
    return `
        <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <div class="flex justify-between items-start mb-2">
                <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400">${title}</h4>
                ${tooltip ? `<span class="text-xs text-gray-400 dark:text-gray-500 cursor-help" title="${tooltip}">ⓘ</span>` : ''}
            </div>
            <p class="text-xl font-semibold text-gray-900 dark:text-white">${value}</p>
            ${change !== null ? `
                <p class="${changeClass} text-sm">
                    ${changeIcon} ${formatPercentage(Math.abs(change))} YoY
                </p>
            ` : ''}
            ${additionalInfo ? `
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">${additionalInfo}</p>
            ` : ''}
        </div>
    `;
};

// Chart configuration
const chartConfig = {
    colors: {
        primary: ['#60A5FA', '#34D399', '#A78BFA', '#F87171', '#FBBF24', '#8B5CF6'],
        background: {
            light: '#ffffff',
            dark: '#1f2937'
        },
        text: {
            light: '#374151',
            dark: '#E5E7EB'
        },
        grid: {
            light: '#E5E7EB',
            dark: '#374151'
        }
    }
};

// Create chart with dark mode support
function createChart(ctx, type, data, options = {}) {
    const isDark = document.documentElement.classList.contains('dark');
    
    const defaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light,
                    padding: 20,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                backgroundColor: isDark ? chartConfig.colors.background.dark : chartConfig.colors.background.light,
                titleColor: isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light,
                bodyColor: isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light,
                borderColor: isDark ? chartConfig.colors.grid.dark : chartConfig.colors.grid.light,
                borderWidth: 1
            }
        },
        scales: {
            y: {
                grid: {
                    color: isDark ? chartConfig.colors.grid.dark : chartConfig.colors.grid.light
                },
                ticks: {
                    color: isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light
                }
            },
            x: {
                grid: {
                    color: isDark ? chartConfig.colors.grid.dark : chartConfig.colors.grid.light
                },
                ticks: {
                    color: isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light
                }
            }
        }
    };

    return new Chart(ctx, {
        type,
        data,
        options: {
            ...defaultOptions,
            ...options
        }
    });
}

// Data rendering functions
function renderCompanyHeader(data, companyName) {
    const getCompanyDisplayName = () => {
        switch(companyName) {
            case 'sonova':
                return 'Sonova Group';
            case 'gn':
                return 'GN Store Nord A/S';
            case 'ws-audiology':
                return 'WS Audiology A/S';
            default:
                return companyName;
        }
    };

    const getReportingPeriod = () => {
        if (companyName === 'sonova') {
            return data.current_period.period;
        } else if (companyName === 'gn') {
            return `${data.period.quarter} ${data.period.year}`;
        } else {
            return data.fiscal_year;
        }
    };

    document.getElementById('company-name').textContent = getCompanyDisplayName();
    document.getElementById('company-period').textContent = getReportingPeriod();
    document.getElementById('last-updated').textContent = `Last Updated: ${new Date().toLocaleString()}`;
}

function renderKPIMetrics(data, companyName) {
    const container = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-4');
    container.innerHTML = '';

    const metrics = [];

    if (companyName === 'sonova') {
        metrics.push(
            {
                title: 'Revenue',
                value: formatCurrency(data.current_period.key_financials.revenue.total),
                change: data.current_period.key_financials.revenue.growth.local_currency,
                tooltip: 'Total revenue in local currency'
            },
            {
                title: 'EBITA',
                value: formatCurrency(data.current_period.key_financials.ebita.adjusted),
                change: null,
                tooltip: 'Adjusted earnings before interest, taxes, and amortization'
            },
            {
                title: 'Margin',
                value: formatPercentage(data.current_period.key_financials.ebita.margin_adjusted),
                tooltip: 'Adjusted EBITA margin'
            },
            {
                title: 'Equity Ratio',
                value: formatPercentage(data.current_period.balance_sheet.equity_ratio),
                tooltip: 'Total equity as percentage of total assets'
            }
        );
    } else if (companyName === 'gn') {
        metrics.push(
            {
                title: 'Revenue',
                value: formatCurrency(data.financial_highlights.revenue.total),
                change: data.financial_highlights.revenue.organic_growth,
                tooltip: 'Total revenue with organic growth'
            },
            {
                title: 'EBITA',
                value: formatCurrency(data.financial_highlights.profitability.ebita.value),
                change: data.financial_highlights.profitability.ebita.yoy_growth,
                tooltip: 'Earnings before interest, taxes, and amortization'
            },
            {
                title: 'Gross Margin',
                value: formatPercentage(data.financial_highlights.profitability.gross_profit.margin),
                change: data.financial_highlights.profitability.gross_profit.yoy_margin_change,
                tooltip: 'Gross profit as percentage of revenue'
            },
            {
                title: 'Operating Margin',
                value: formatPercentage(data.financial_highlights.profitability.ebita.margin),
                change: data.financial_highlights.profitability.ebita.yoy_margin_change,
                tooltip: 'EBITA as percentage of revenue'
            }
        );
    } else if (companyName === 'ws-audiology') {
        metrics.push(
            {
                title: 'Revenue',
                value: formatCurrency(data.key_financials.revenue.total),
                change: data.key_financials.revenue.organic_growth,
                tooltip: 'Total revenue with organic growth'
            },
            {
                title: 'EBITDA',
                value: formatCurrency(data.key_financials.profitability.EBITDA.before_special_items),
                tooltip: 'Earnings before interest, taxes, depreciation, and amortization'
            },
            {
                title: 'Gross Margin',
                value: formatPercentage(data.key_financials.profitability.gross_margin),
                tooltip: 'Gross profit as percentage of revenue'
            },
            {
                title: 'Market Share',
                value: formatPercentage(getValue(data, 'market_data.addressable_market.current_penetration')),
                tooltip: 'Current market penetration'
            }
        );
    }

    metrics.forEach(metric => {
        container.innerHTML += createMetricCard(
            metric.title,
            metric.value,
            metric.change,
            metric.tooltip,
            metric.additionalInfo
        );
    });
}

function renderFinancialMetrics(data, companyName) {
    const container = document.getElementById('financial-metrics');
    container.innerHTML = '';

    const metrics = [];

    if (companyName === 'sonova') {
        const hearingInstruments = data.current_period.key_financials.segments.hearing_instruments;
        const cochlearImplants = data.current_period.key_financials.segments.cochlear_implants;

        metrics.push(
            {
                title: 'Hearing Instruments',
                value: formatCurrency(hearingInstruments.revenue),
                change: hearingInstruments.organic_growth,
                tooltip: 'Revenue from hearing instruments segment',
                additionalInfo: `Margin: ${formatPercentage(hearingInstruments.margin)}`
            },
            {
                title: 'Cochlear Implants',
                value: formatCurrency(cochlearImplants.revenue),
                change: cochlearImplants.organic_growth,
                tooltip: 'Revenue from cochlear implants segment',
                additionalInfo: `Margin: ${formatPercentage(cochlearImplants.margin)}`
            },
            {
                title: 'Net Debt',
                value: formatCurrency(data.current_period.balance_sheet.net_debt),
                tooltip: 'Total debt minus cash and equivalents'
            }
        );
    } else if (companyName === 'gn') {
        const divisions = data.financial_highlights.revenue.by_division;
        
        Object.entries(divisions).forEach(([division, metrics]) => {
            metrics.push({
                title: division.charAt(0).toUpperCase() + division.slice(1),
                value: formatCurrency(metrics.revenue),
                change: metrics.organic_growth,
                tooltip: `Revenue and growth for ${division} division`,
                additionalInfo: `YoY Growth: ${formatPercentage(metrics.yoy_growth)}`
            });
        });

        metrics.push({
            title: 'Free Cash Flow',
            value: formatCurrency(data.financial_highlights.cash_flow.free_cash_flow.excl_ma),
            tooltip: 'Free cash flow excluding M&A',
            additionalInfo: `Cash conversion: ${formatPercentage(data.financial_highlights.cash_flow.cash_conversion)}`
        });
    } else if (companyName === 'ws-audiology') {
        const regions = data.key_financials.revenue.by_region;
        
        Object.entries(regions).forEach(([region, metrics]) => {
            metrics.push({
                title: `${region} Revenue`,
                value: formatCurrency(metrics.revenue),
                change: metrics.growth,
                tooltip: `Revenue and growth for ${region}`,
                additionalInfo: `Market Share: ${formatPercentage(metrics.share)}`
            });
        });
    }

    metrics.forEach(metric => {
        container.innerHTML += createMetricCard(
            metric.title,
            metric.value,
            metric.change,
            metric.tooltip,
            metric.additionalInfo
        );
    });
}

function renderOperatingMetrics(data, companyName) {
    const container = document.getElementById('operating-metrics');
    container.innerHTML = '';

    const metrics = [];

    if (companyName === 'ws-audiology') {
        metrics.push(
            {
                title: 'Employees',
                value: formatNumber(data.operational_metrics.employees.total),
                tooltip: 'Total number of employees',
                additionalInfo: `R&D Staff: ${formatNumber(data.operational_metrics.employees.by_function.RnD)}`
            },
            {
                title: 'R&D Investment',
                value: formatCurrency(data.operational_metrics.research_development.total_spend),
                tooltip: 'Research and development expenditure',
                additionalInfo: `${formatPercentage(data.operational_metrics.research_development.as_percent_of_sales)} of revenue`
            },
            {
                title: 'Production Sites',
                value: formatNumber(data.operational_metrics.infrastructure.production_sites),
                tooltip: 'Number of production facilities',
                additionalInfo: `R&D Hubs: ${formatNumber(data.operational_metrics.infrastructure.RnD_hubs.total)}`
            },
            {
                title: 'Employee Turnover',
                value: data.operational_metrics.employees.turnover.total,
                tooltip: 'Total employee turnover rate',
                additionalInfo: `Voluntary: ${data.operational_metrics.employees.turnover.voluntary}`
            }
        );
    } else if (companyName === 'gn') {
        metrics.push(
            {
                title: 'Employees',
                value: formatNumber(data.operational_metrics.employees.total),
                change: null,
                tooltip: 'Total number of employees',
                additionalInfo: `YoY Change: ${data.operational_metrics.employees.yoy_change}`
            },
            {
                title: 'R&D Costs',
                value: formatCurrency(data.operational_metrics.development_costs.total),
                tooltip: 'Development costs',
                additionalInfo: `Capitalized: ${formatCurrency(data.operational_metrics.development_costs.capitalized)}`
            },
            {
                title: 'R&D Intensity',
                value: formatPercentage(data.operational_metrics.development_costs.rd_intensity),
                tooltip: 'R&D spending as percentage of revenue'
            }
        );
    } else if (companyName === 'sonova') {
        metrics.push(
            {
                title: 'Employees',
                value: formatNumber(data.company_structure.additional_info.employees),
                tooltip: 'Total number of employees'
            },
            {
                title: 'Countries',
                value: data.company_structure.additional_info.countries_presence,
                tooltip: 'Global presence'
            },
            {
                title: 'R&D Expense',
                value: formatCurrency(data.prior_year.costs.research_and_development),
                tooltip: 'Research and development costs'
            }
        );
    }

    metrics.forEach(metric => {
        container.innerHTML += createMetricCard(
            metric.title,
            metric.value,
            metric.change,
            metric.tooltip,
            metric.additionalInfo
        );
    });
}

function renderBalanceSheet(data, companyName) {
    const container = document.getElementById('balance-sheet-metrics');
    container.innerHTML = '';

    const metrics = [];

    if (companyName === 'sonova') {
        metrics.push(
            {
                title: 'Total Assets',
                value: formatCurrency(data.current_period.balance_sheet.total_assets),
                tooltip: 'Total company assets'
            },
            {
                title: 'Equity',
                value: formatCurrency(data.current_period.balance_sheet.equity),
                tooltip: 'Total shareholders equity',
                additionalInfo: `Ratio: ${formatPercentage(data.current_period.balance_sheet.equity_ratio)}`
            },
            {
                title: 'Net Debt',
                value: formatCurrency(data.current_period.balance_sheet.net_debt),
                tooltip: 'Total debt minus cash and equivalents'
            }
        );
    } else if (companyName === 'ws-audiology') {
        metrics.push(
            {
                title: 'Total Assets',
                value: formatCurrency(data.key_financials.balance_sheet.total_assets),
                tooltip: 'Total company assets'
            },
            {
                title: 'Equity',
                value: formatCurrency(data.key_financials.balance_sheet.equity),
                tooltip: 'Total shareholders equity'
            },
            {
                title: 'Goodwill',
                value: formatCurrency(data.key_financials.balance_sheet.goodwill),
                tooltip: 'Recorded goodwill'
            },
            {
                title: 'Net Working Capital',
                value: formatCurrency(data.key_financials.balance_sheet.net_working_capital),
                tooltip: 'Current assets minus current liabilities'
            }
        );
    } else if (companyName === 'gn') {
        metrics.push(
            {
                title: 'Total Assets',
                value: formatCurrency(data.financial_highlights.balance_sheet.total_assets),
                tooltip: 'Total company assets'
            },
            {
                title: 'Equity',
                value: formatCurrency(data.financial_highlights.balance_sheet.equity),
                tooltip: 'Total shareholders equity',
                additionalInfo: `Ratio: ${formatPercentage(data.financial_highlights.balance_sheet.equity_ratio)}`
            },
            {
                title: 'Net Interest Bearing Debt',
                value: formatCurrency(data.financial_highlights.balance_sheet.net_interest_bearing_debt),
                tooltip: 'Net interest-bearing debt',
                additionalInfo: `Leverage ratio: ${data.financial_highlights.balance_sheet.leverage_ratio.adjusted}`
            }
        );
    }

    metrics.forEach(metric => {
        container.innerHTML += createMetricCard(
            metric.title,
            metric.value,
            metric.change,
            metric.tooltip,
            metric.additionalInfo
        );
    });
}

function renderCharts(data, companyName) {
    renderRevenueProfitChart(data, companyName);
    renderSegmentChart(data, companyName);
    renderRegionalChart(data, companyName);
}

function renderRevenueProfitChart(data, companyName) {
    const ctx = document.getElementById('revenue-profit-chart');
    if (!ctx) return;

    let chartData;
    
    if (companyName === 'sonova') {
        chartData = {
            labels: ['Revenue', 'EBITA', 'Gross Profit'],
            datasets: [{
                label: 'Financial Metrics',
                data: [
                    data.current_period.key_financials.revenue.total,
                    data.current_period.key_financials.ebita.adjusted,
                    data.prior_year.key_financials.gross_profit
                ],
                backgroundColor: [
                    chartConfig.colors.primary[0],
                    chartConfig.colors.primary[1],
                    chartConfig.colors.primary[2]
                ]
            }]
        };
    } else if (companyName === 'ws-audiology') {
        chartData = {
            labels: ['Revenue', 'EBITDA', 'Gross Profit'],
            datasets: [{
                label: 'Financial Metrics',
                data: [
                    data.key_financials.revenue.total,
                    data.key_financials.profitability.EBITDA.before_special_items,
                    data.key_financials.profitability.gross_profit
                ],
                backgroundColor: [
                    chartConfig.colors.primary[0],
                    chartConfig.colors.primary[1],
                    chartConfig.colors.primary[2]
                ]
            }]
        };
    } else if (companyName === 'gn') {
        chartData = {
            labels: ['Revenue', 'EBITA', 'Gross Profit'],
            datasets: [{
                label: 'Financial Metrics',
                data: [
                    data.financial_highlights.revenue.total,
                    data.financial_highlights.profitability.ebita.value,
                    data.financial_highlights.profitability.gross_profit.value
                ],
                backgroundColor: [
                    chartConfig.colors.primary[0],
                    chartConfig.colors.primary[1],
                    chartConfig.colors.primary[2]
                ]
            }]
        };
    }

    createChart(ctx, 'bar', chartData, {
        plugins: {
            title: {
                display: true,
                text: 'Revenue & Profitability'
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${formatCurrency(context.raw)}`
                }
            }
        }
    });
}

function renderSegmentChart(data, companyName) {
    const ctx = document.getElementById('segment-chart');
    if (!ctx) return;

    let chartData;

    if (companyName === 'sonova') {
        const segments = data.current_period.key_financials.segments;
        chartData = {
            labels: ['Hearing Instruments', 'Cochlear Implants'],
            datasets: [{
                data: [
                    segments.hearing_instruments.revenue,
                    segments.cochlear_implants.revenue
                ],
                backgroundColor: [
                    chartConfig.colors.primary[0],
                    chartConfig.colors.primary[1]
                ]
            }]
        };
    } else if (companyName === 'gn') {
        const divisions = data.financial_highlights.revenue.by_division;
        chartData = {
            labels: Object.keys(divisions).map(key => key.replace('_', ' ').toUpperCase()),
            datasets: [{
                data: Object.values(divisions).map(div => div.revenue),
                backgroundColor: chartConfig.colors.primary.slice(0, Object.keys(divisions).length)
            }]
        };
    } else if (companyName === 'ws-audiology') {
        const regions = data.key_financials.revenue.by_region;
        chartData = {
            labels: Object.keys(regions),
            datasets: [{
                data: Object.values(regions).map(region => region.revenue),
                backgroundColor: chartConfig.colors.primary.slice(0, Object.keys(regions).length)
            }]
        };
    }

    createChart(ctx, 'doughnut', chartData, {
        plugins: {
            title: {
                display: true,
                text: 'Revenue by Segment'
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${formatCurrency(context.raw)}`
                }
            }
        }
    });
}

function renderRegionalChart(data, companyName) {
    const ctx = document.getElementById('regional-revenue-chart');
    if (!ctx) return;

    let chartData;

    if (companyName === 'sonova') {
        const regions = data.prior_year.sales_by_region;
        chartData = {
            labels: Object.keys(regions),
            datasets: [{
                data: Object.values(regions).map(region => region.revenue),
                backgroundColor: chartConfig.colors.primary.slice(0, Object.keys(regions).length)
            }]
        };
    } else if (companyName === 'ws-audiology') {
        const regions = data.key_financials.revenue.by_region;
        chartData = {
            labels: Object.keys(regions),
            datasets: [{
                data: Object.values(regions).map(region => region.revenue),
                backgroundColor: chartConfig.colors.primary.slice(0, Object.keys(regions).length)
            }]
        };
    } else if (companyName === 'gn') {
        const geography = data.financial_highlights.revenue.by_geography;
        chartData = {
            labels: Object.keys(geography),
            datasets: [{
                data: Object.values(geography).map(region => region.revenue),
                backgroundColor: chartConfig.colors.primary.slice(0, Object.keys(geography).length)
            }]
        };
    }

    createChart(ctx, 'pie', chartData, {
        plugins: {
            title: {
                display: true,
                text: 'Revenue by Region'
            },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${formatCurrency(context.raw)}`
                }
            }
        }
    });
}

// // Main initialization function
// function initializeFinancialDashboard(companyName) {
//     try {
//         if (!companyData[companyName]) {
//             throw new Error(`Invalid company name: ${companyName}`);
//         }

//         const data = companyData[companyName];
//         console.log(data)

//         // Clear any existing charts
//         Chart.helpers.each(Chart.instances, (instance) => {
//             instance.destroy();
//         });

//         // Render all components
//         renderCompanyHeader(data, companyName);
//         renderKPIMetrics(data, companyName);
//         renderFinancialMetrics(data, companyName);
//         renderOperatingMetrics(data, companyName);
//         renderBalanceSheet(data, companyName);
//         renderCharts(data, companyName);

//     } catch (error) {
//         console.error('Error initializing dashboard:', error);
//         document.getElementById('company-detail-container').innerHTML = `
//             <div class="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 mb-6">
//                 <p class="font-bold">Error</p>
//                 <p>${error.message}</p>
//             </div>
//         `;
//     }
// }

// Handle window resize for charts
window.addEventListener('resize', _.debounce(() => {
    const currentCompany = window.companyName; // Assuming companyName is a global variable
    if (currentCompany) {
        initializeFinancialDashboard(currentCompany);
    }
}, 250));

// Handle dark mode
// Handle dark mode changes
const handleDarkModeChange = () => {
    const isDark = document.documentElement.classList.contains('dark');
    Chart.helpers.each(Chart.instances, (instance) => {
        const options = instance.options;
        
        // Update grid colors
        if (options.scales) {
            Object.values(options.scales).forEach(scale => {
                if (scale.grid) {
                    scale.grid.color = isDark ? chartConfig.colors.grid.dark : chartConfig.colors.grid.light;
                }
                if (scale.ticks) {
                    scale.ticks.color = isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light;
                }
            });
        }

        // Update legend colors
        if (options.plugins && options.plugins.legend) {
            options.plugins.legend.labels.color = isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light;
        }

        // Update tooltip styles
        if (options.plugins && options.plugins.tooltip) {
            options.plugins.tooltip.backgroundColor = isDark ? chartConfig.colors.background.dark : chartConfig.colors.background.light;
            options.plugins.tooltip.titleColor = isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light;
            options.plugins.tooltip.bodyColor = isDark ? chartConfig.colors.text.dark : chartConfig.colors.text.light;
            options.plugins.tooltip.borderColor = isDark ? chartConfig.colors.grid.dark : chartConfig.colors.grid.light;
        }

        instance.update();
    });
};

// Watch for system dark mode changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        document.documentElement.classList.toggle('dark', event.matches);
        handleDarkModeChange();
    });
}

// Utility function to refresh the dashboard
function refreshDashboard() {
    if (window.companyName) {
        initializeFinancialDashboard(window.companyName);
    }
}

// Data refresh handling
let lastRefreshTime = Date.now();
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutes

function checkRefreshData() {
    const now = Date.now();
    if (now - lastRefreshTime >= REFRESH_INTERVAL) {
        refreshDashboard();
        lastRefreshTime = now;
    }
}

// Set up periodic refresh check
setInterval(checkRefreshData, 60 * 1000); // Check every minute

// Additional utility functions
function downloadDashboardData(companyName) {
    const data = companyData[companyName];
    if (!data) return;

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${companyName}-financial-data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function downloadChartImage(chartId, fileName) {
    const canvas = document.getElementById(chartId);
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = fileName;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Error handling
function handleError(error, container) {
    console.error('Dashboard Error:', error);
    if (container) {
        container.innerHTML = `
            <div class="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 mb-6">
                <p class="font-bold">Error</p>
                <p>${error.message}</p>
                <button onclick="refreshDashboard()" class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Retry
                </button>
            </div>
        `;
    }
}

function generateDashboardHTML(data, companyName) {
    return `
        <div class="container mx-auto px-4 py-8">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 id="company-name" class="text-3xl font-bold mb-2">${data.company || companyName}</h1>
                        <p id="company-period" class="text-gray-600 dark:text-gray-400">${data.current_period.period}</p>
                    </div>
                    <div class="text-right">
                        <p id="last-updated" class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <!-- Key Performance Indicators -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <!-- Revenue Card -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
                        <span class="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">TTM</span>
                    </div>
                    <p id="revenue-value" class="mt-2 text-3xl font-semibold">
                        ${formatCurrency(data.current_period.key_financials.revenue.total)}
                    </p>
                    <div id="revenue-growth" class="mt-2 text-sm">
                        <span class="${data.current_period.key_financials.revenue.growth.local_currency >= 0 ? 'text-green-500' : 'text-red-500'}">
                            ${data.current_period.key_financials.revenue.growth.local_currency >= 0 ? '↑' : '↓'} 
                            ${Math.abs(data.current_period.key_financials.revenue.growth.local_currency)}%
                        </span>
                        <span class="text-gray-500 dark:text-gray-400 ml-1">vs prior year</span>
                    </div>
                </div>

                <!-- EBITA Card -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITA</h3>
                    <p class="mt-2 text-3xl font-semibold">
                        ${formatCurrency(data.current_period.key_financials.ebita.adjusted)}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Margin: ${formatPercentage(data.current_period.key_financials.ebita.margin_adjusted)}
                    </p>
                </div>

                <!-- Gross Profit Card -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Gross Profit</h3>
                    <p class="mt-2 text-3xl font-semibold">
                        ${formatCurrency(data.prior_year.key_financials.gross_profit)}
                    </p>
                </div>

                <!-- Balance Sheet Card -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Assets</h3>
                    <p class="mt-2 text-3xl font-semibold">
                        ${formatCurrency(data.current_period.balance_sheet.total_assets)}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                        Equity Ratio: ${formatPercentage(data.current_period.balance_sheet.equity_ratio)}
                    </p>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Revenue & Profitability</h2>
                    </div>
                    <div class="p-4">
                        <canvas id="revenue-profit-chart" height="300"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Segment Performance</h2>
                    </div>
                    <div class="p-4">
                        <canvas id="segment-chart" height="300"></canvas>
                    </div>
                </div>
            </div>

            <!-- Metrics Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <!-- Financial Metrics -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Financial Metrics</h2>
                    </div>
                    <div class="p-4">
                        <div id="financial-metrics" class="space-y-4">
                            ${generateFinancialMetrics(data)}
                        </div>
                    </div>
                </div>

                <!-- Operating Metrics -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Operating Metrics</h2>
                    </div>
                    <div class="p-4">
                        <div id="operating-metrics" class="space-y-4">
                            ${generateOperatingMetrics(data)}
                        </div>
                    </div>
                </div>

                <!-- Market Metrics -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Market Metrics</h2>
                    </div>
                    <div class="p-4">
                        <div id="market-metrics" class="space-y-4">
                            ${generateMarketMetrics(data)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper function to generate financial metrics HTML
function generateFinancialMetrics(data) {
    const metrics = [
        {
            title: 'Operating Margin',
            value: formatPercentage(data.current_period.key_financials.ebita.margin_adjusted),
            tooltip: 'Operating profit as percentage of revenue'
        },
        {
            title: 'Net Debt',
            value: formatCurrency(data.current_period.balance_sheet.net_debt),
            tooltip: 'Total debt minus cash and equivalents'
        }
        // Add more metrics as needed
    ];

    return metrics.map(metric => createMetricCard(metric.title, metric.value, null, metric.tooltip)).join('');
}

// Helper function to generate operating metrics HTML
function generateOperatingMetrics(data) {
    try {
        const metrics = [
            {
                title: 'Employees',
                value: formatNumber(data.company_structure.additional_info.employees),
                tooltip: 'Total number of employees'
            },
            {
                title: 'R&D Expense',
                value: formatCurrency(data.prior_year.costs.research_and_development),
                tooltip: 'Research and development costs'
            }
            // Add more metrics as needed
        ];

        return metrics.map(metric => createMetricCard(metric.title, metric.value, null, metric.tooltip)).join('');
    } catch (error) {
        console.error('Error generating operating metrics:', error);
        return '<div class="text-red-500">Error loading operating metrics</div>';
    }
}

// Helper function to generate market metrics HTML
function generateMarketMetrics(data) {
    try {
        const metrics = [
            {
                title: 'Market Growth',
                value: data.outlook_2024_25.sales_growth_guidance,
                tooltip: 'Expected market growth'
            },
            {
                title: 'EBITA Growth Guidance',
                value: data.outlook_2024_25.adjusted_ebita_growth_guidance,
                tooltip: 'Expected EBITA growth'
            }
            // Add more metrics as needed
        ];

        return metrics.map(metric => createMetricCard(metric.title, metric.value, null, metric.tooltip)).join('');
    } catch (error) {
        console.error('Error generating market metrics:', error);
        return '<div class="text-red-500">Error loading market metrics</div>';
    }
}

async function initializeFinancialDashboard(companyName) {
    try {
        const container = document.getElementById('financial-analysis-content');
        if (!container) {
            throw new Error('Container not found');
        }

        // Normalize company name
        const normalizedName = companyName;
        const data = companyData[normalizedName];

        if (!data) {
            throw new Error(`No data found for company: ${companyName}`);
        }

        console.log('Initializing dashboard for:', companyName);

        // Clear any existing charts
        Chart.helpers.each(Chart.instances, (instance) => {
            instance.destroy();
        });

        // Generate HTML based on company
        let dashboardHTML;
        switch(normalizedName) {
            case 'Livanova':
                // dashboardHTML =  generateNeuromodulationEpilepsyDashboard(
                //     combinedNeuromodulationData.medtronic,
                //     combinedNeuromodulationData.livanova
                //   );
                
                dashboardHTML = generateLivaNovaDashboard(data);
                break;
            case 'Medtronic':
                dashboardHTML = generateMedtronicDashboard(data);
                break;
            case 'NeuroPace':
                dashboardHTML = generateNeuroPaceDashboard(data);
                // initializeNeuroPaceCharts(data);
                break;
            case 'XCORPRI':
                dashboardHTML = generateXCOPRIDashboard(data);
                break;
            
            case 'EpiMinder':
              dashboardHTML = generateEpiMinderDashboard(data)
              break
              case 'PrecisisAG':
                dashboardHTML = generatePrecisisDashboard(data)
                break
            case 'FlowMedical':
              dashboardHTML = generateFlowMedicalDashboard(data)
break
            default:
                throw new Error(`Unknown company: ${companyName}`);
        }

        // Inject HTML
        container.innerHTML = dashboardHTML;
        container.classList.remove('hidden');

        // Initialize charts based on company
        switch(normalizedName) {
            case 'Sonova':
                initializeSonovaCharts(data);
                break;
                
            case 'Ws':
                initializeWSACharts(data);
                break;

                case 'Livanova':
                  initLivaNovaDashboardCharts(data);
                    // initializeNeuromodulationEpilepsyCharts(
                    //     combinedNeuromodulationData.medtronic,
                    //     combinedNeuromodulationData.livanova
                    //   );
                    break;
                case 'Medtronic':
                  initMedtronicCharts(data);
                    break;

                case 'NeuroPace':
                    // dashboardHTML = generateNeuroPaceDashboard(data);
                    initializeNeuroPaceCharts(data);
                    break;

                    case 'XCORPRI':
               initializeXCOPRICharts(data);
                break;


                case 'EpiMinder':
                  initializeEpiMinderCharts(data)
                  break
                  case 'PrecisisAG':
                   initializePrecisisCharts(data)
                    break
                case 'FlowMedical':
                  initializeFlowMedicalCharts(data)
    break


            case 'Gn':
                initializeGNCharts(data);
                break;
             case 'Demant':
                    initializeDemantCharts(data)
                    break;
        }

        console.log('Dashboard initialized successfully');

    } catch (error) {
        console.error('Error initializing dashboard:', error);
        const container = document.getElementById('financial-analysis-content');
        if (container) {
            container.innerHTML = `
                <div class="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 mb-6">
                    <p class="font-bold">Error Initializing Dashboard</p>
                    <p>${error.message}</p>
                </div>
            `;
            container.classList.remove('hidden');
        }
    }
}

// Company-specific dashboard generators
// function generateSonovaDashboard(data) {
//     return `
//         <div class="container mx-auto px-4 py-8">
//             <!-- Company Header -->
//             <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//                 <div class="flex justify-between items-start">
//                     <div>
//                         <h1 class="text-3xl font-bold mb-2">Sonova Group</h1>
//                         <p class="text-gray-600 dark:text-gray-400">${data.current_period.period}</p>
//                     </div>
//                     <div class="text-right">
//                         <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- KPIs -->
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.revenue.total)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.current_period.key_financials.revenue.growth.local_currency)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITA (Adjusted)</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.ebita.adjusted)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.current_period.key_financials.ebita.margin_adjusted)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Hearing Instruments</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.segments.hearing_instruments.revenue)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.current_period.key_financials.segments.hearing_instruments.organic_growth)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Cochlear Implants</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.segments.cochlear_implants.revenue)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.current_period.key_financials.segments.cochlear_implants.organic_growth)}</p>
//                 </div>
//             </div>

//             <!-- Charts -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Revenue & Profitability</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="sonova-financial-metrics"></canvas>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Segment Revenue</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="sonova-segment-revenue"></canvas>
//                     </div>
//                 </div>
//             </div>

//             <!-- Additional metrics -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Balance Sheet</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Total Assets</span>
//                                 <span class="font-medium">${formatCurrency(data.current_period.balance_sheet.total_assets)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Equity</span>
//                                 <span class="font-medium">${formatCurrency(data.current_period.balance_sheet.equity)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Equity Ratio</span>
//                                 <span class="font-medium">${formatPercentage(data.current_period.balance_sheet.equity_ratio)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Outlook ${data.outlook_2024_25 ? '2024/25' : ''}</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Sales Growth Guidance</span>
//                                 <span class="font-medium">${data.outlook_2024_25?.sales_growth_guidance || '-'}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">EBITA Growth Guidance</span>
//                                 <span class="font-medium">${data.outlook_2024_25?.adjusted_ebita_growth_guidance || '-'}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// WS Audiology Dashboard Implementation
// function generateWSADashboard(data) {
//     return `
//         <div class="container mx-auto px-4 py-8">
//             <!-- Company Header -->
//             <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//                 <div class="flex justify-between items-start">
//                     <div>
//                         <h1 class="text-3xl font-bold mb-2">WS Audiology A/S</h1>
//                         <p class="text-gray-600 dark:text-gray-400">Fiscal Year ${data.fiscal_year}</p>
//                     </div>
//                     <div class="text-right">
//                         <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- KPIs -->
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.revenue.total)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.key_financials.revenue.organic_growth)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITDA</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.profitability.EBITDA.before_special_items)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.key_financials.profitability.EBITDA.margin)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Gross Profit</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.profitability.gross_profit)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.key_financials.profitability.gross_margin)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Free Cash Flow</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.cash_flow.free_cash_flow)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Operating: ${formatCurrency(data.key_financials.cash_flow.operating)}</p>
//                 </div>
//             </div>

//             <!-- Charts -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Revenue by Region</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="wsa-revenue-by-region"></canvas>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Key Financial Metrics</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="wsa-financial-metrics"></canvas>
//                     </div>
//                 </div>
//             </div>

//             <!-- Additional Metrics -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Operational Metrics</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Total Employees</span>
//                                 <span class="font-medium">${data.operational_metrics.employees.total}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">R&D Spend</span>
//                                 <span class="font-medium">${formatCurrency(data.operational_metrics.research_development.total_spend)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">R&D as % of Sales</span>
//                                 <span class="font-medium">${formatPercentage(data.operational_metrics.research_development.as_percent_of_sales)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Balance Sheet Overview</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Total Assets</span>
//                                 <span class="font-medium">${formatCurrency(data.key_financials.balance_sheet.total_assets)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Equity</span>
//                                 <span class="font-medium">${formatCurrency(data.key_financials.balance_sheet.equity)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Net Working Capital</span>
//                                 <span class="font-medium">${formatCurrency(data.key_financials.balance_sheet.net_working_capital)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// // GN Store Nord Dashboard Implementation
// function generateGNDashboard(data) {
//     return `
//         <div class="container mx-auto px-4 py-8">
//             <!-- Company Header -->
//             <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//                 <div class="flex justify-between items-start">
//                     <div>
//                         <h1 class="text-3xl font-bold mb-2">GN Store Nord A/S</h1>
//                         <p class="text-gray-600 dark:text-gray-400">${data.period.quarter} ${data.period.year}</p>
//                     </div>
//                     <div class="text-right">
//                         <p class="text-sm text-gray-600 dark:text-gray-400">Report Date: ${data.period.report_date}</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- KPIs -->
//             <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.revenue.total)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Organic Growth: ${formatPercentage(data.financial_highlights.revenue.organic_growth)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITA</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.profitability.ebita.value)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.financial_highlights.profitability.ebita.margin)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Free Cash Flow</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.cash_flow.free_cash_flow.excl_ma)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Cash Conversion: ${formatPercentage(data.financial_highlights.cash_flow.cash_conversion)}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//                     <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Gross Profit</h3>
//                     <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.profitability.gross_profit.value)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.financial_highlights.profitability.gross_profit.margin)}</p>
//                 </div>
//             </div>

//             <!-- Charts -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Revenue by Division</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="gn-revenue-by-division"></canvas>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Geographic Distribution</h2>
//                     </div>
//                     <div class="p-4 h-80">
//                         <canvas id="gn-geographic-revenue"></canvas>
//                     </div>
//                 </div>
//             </div>

//             <!-- Additional Metrics -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Guidance 2024</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Organic Growth Target</span>
//                                 <span class="font-medium">${data.guidance_2024.organic_growth.range}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">EBITA Margin Target</span>
//                                 <span class="font-medium">${data.guidance_2024.ebita_margin.range}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Free Cash Flow Target</span>
//                                 <span class="font-medium">> ${formatCurrency(1100)}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//                     <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-lg font-medium">Capital Structure</h2>
//                     </div>
//                     <div class="p-4">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Market Cap</span>
//                                 <span class="font-medium">${formatCurrency(data.capital_structure.market_metrics.market_cap)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Share Price</span>
//                                 <span class="font-medium">${data.capital_structure.market_metrics.share_price} DKK</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Foreign Ownership</span>
//                                 <span class="font-medium">${data.capital_structure.market_metrics.foreign_ownership}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// // Chart initialization for WS Audiology
// // Chart initialization for WS Audiology
// function initializeWSACharts(data) {
//     // Revenue by Region chart
//     const regionCtx = document.getElementById('wsa-revenue-by-region');
//     if (regionCtx) {
//         new Chart(regionCtx, {
//             type: 'pie',
//             data: {
//                 labels: ['EMEA', 'Americas', 'APAC'],
//                 datasets: [{
//                     data: [
//                         data.key_financials.revenue.by_region.EMEA.revenue,
//                         data.key_financials.revenue.by_region.Americas.revenue,
//                         data.key_financials.revenue.by_region.APAC.revenue
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)',
//                         'rgba(167, 139, 250, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         position: 'bottom',
//                         labels: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     },
//                     tooltip: {
//                         callbacks: {
//                             label: function(context) {
//                                 return `${context.label}: ${formatCurrency(context.raw)} (${data.key_financials.revenue.by_region[context.label].share}%)`;
//                             }
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Financial Metrics chart
//     const metricsCtx = document.getElementById('wsa-financial-metrics');
//     if (metricsCtx) {
//         new Chart(metricsCtx, {
//             type: 'bar',
//             data: {
//                 labels: ['Revenue', 'EBITDA', 'Gross Profit', 'Operating Cash Flow'],
//                 datasets: [{
//                     label: 'Financial Metrics',
//                     data: [
//                         data.key_financials.revenue.total,
//                         data.key_financials.profitability.EBITDA.before_special_items,
//                         data.key_financials.profitability.gross_profit,
//                         data.key_financials.cash_flow.operating
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)',
//                         'rgba(167, 139, 250, 0.8)',
//                         'rgba(249, 168, 212, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 },
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         grid: {
//                             color: document.documentElement.classList.contains('dark') ? '#374151' : '#E5E7EB'
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151',
//                             callback: function(value) {
//                                 return formatCurrency(value);
//                             }
//                         }
//                     },
//                     x: {
//                         grid: {
//                             display: false
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }

// // Chart initialization for GN Store Nord
// function initializeGNCharts(data) {
//     // Revenue by Division chart
//     const divisionCtx = document.getElementById('gn-revenue-by-division');
//     if (divisionCtx) {
//         new Chart(divisionCtx, {
//             type: 'doughnut',
//             data: {
//                 labels: ['Hearing', 'Enterprise', 'Gaming & Consumer'],
//                 datasets: [{
//                     data: [
//                         data.financial_highlights.revenue.by_division.hearing.revenue,
//                         data.financial_highlights.revenue.by_division.enterprise.revenue,
//                         data.financial_highlights.revenue.by_division.gaming_consumer.revenue
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)',
//                         'rgba(167, 139, 250, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         position: 'bottom',
//                         labels: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     },
//                     tooltip: {
//                         callbacks: {
//                             label: function(context) {
//                                 const division = context.label.toLowerCase().replace(' & ', '_');
//                                 return `${context.label}: ${formatCurrency(context.raw)} (${formatPercentage(data.financial_highlights.revenue.by_division[division].organic_growth)} org. growth)`;
//                             }
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Geographic Revenue Distribution chart
//     const geoCtx = document.getElementById('gn-geographic-revenue');
//     if (geoCtx) {
//         new Chart(geoCtx, {
//             type: 'bar',
//             data: {
//                 labels: ['Europe', 'North America', 'Rest of World'],
//                 datasets: [{
//                     label: 'Revenue',
//                     data: [
//                         data.financial_highlights.revenue.by_geography.europe.revenue,
//                         data.financial_highlights.revenue.by_geography.north_america.revenue,
//                         data.financial_highlights.revenue.by_geography.rest_of_world.revenue
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)',
//                         'rgba(167, 139, 250, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 },
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         grid: {
//                             color: document.documentElement.classList.contains('dark') ? '#374151' : '#E5E7EB'
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151',
//                             callback: function(value) {
//                                 return formatCurrency(value);
//                             }
//                         }
//                     },
//                     x: {
//                         grid: {
//                             display: false
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }

// // Chart initialization functions for each company
// function initializeSonovaCharts(data) {
//     // Financial metrics chart
//     const financialCtx = document.getElementById('sonova-financial-metrics');
//     if (financialCtx) {
//         new Chart(financialCtx, {
//             type: 'bar',
//             data: {
//                 labels: ['Revenue', 'EBITA', 'Gross Profit'],
//                 datasets: [{
//                     label: 'Current Period (Millions)',
//                     data: [
//                         data.current_period.key_financials.revenue.total,
//                         data.current_period.key_financials.ebita.adjusted,
//                         data.prior_year.key_financials.gross_profit
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)',
//                         'rgba(167, 139, 250, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         display: true,
//                         position: 'top',
//                         labels: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     }
//                 },
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                         grid: {
//                             color: document.documentElement.classList.contains('dark') ? '#374151' : '#E5E7EB'
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     },
//                     x: {
//                         grid: {
//                             display: false
//                         },
//                         ticks: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     }
//                 }
//             }
//         });
//     }

//     // Segment revenue chart
//     const segmentCtx = document.getElementById('sonova-segment-revenue');
//     if (segmentCtx) {
//         new Chart(segmentCtx, {
//             type: 'doughnut',
//             data: {
//                 labels: ['Hearing Instruments', 'Cochlear Implants'],
//                 datasets: [{
//                     data: [
//                         data.current_period.key_financials.segments.hearing_instruments.revenue,
//                         data.current_period.key_financials.segments.cochlear_implants.revenue
//                     ],
//                     backgroundColor: [
//                         'rgba(96, 165, 250, 0.8)',
//                         'rgba(52, 211, 153, 0.8)'
//                     ]
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                     legend: {
//                         position: 'bottom',
//                         labels: {
//                             color: document.documentElement.classList.contains('dark') ? '#E5E7EB' : '#374151'
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }

// Helper functions for formatting
function formatCurrency(value, decimals = 0) {
    if (value >= 1000000000) {
      return '$' + (value / 1000000000).toFixed(decimals) + 'B';
    } else if (value >= 1000000) {
      return '$' + (value / 1000000).toFixed(decimals) + 'M';
    } else if (value >= 1000) {
      return '$' + (value / 1000).toFixed(decimals) + 'K';
    }
    return '$' + value.toFixed(decimals);
  }
  
  function formatPercentage(value, decimals = 1) {
    return value > 0 ? '+' + value.toFixed(decimals) + '%' : value.toFixed(decimals) + '%';
  }
  
  function getGrowthColor(value) {
    return value >= 0 ? 'text-green-500' : 'text-red-500';
  }
  
  // LivaNova Dashboard Function
  function generateLivaNovaDashboard(data) {
    return `
      <div class="container mx-auto px-4 py-8 dark:text-white">
        <!-- Company Header -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <div class="flex justify-between items-start">
            <div>
              <h1 class="text-3xl font-bold mb-2">LivaNova PLC</h1>
              <p class="text-gray-600 dark:text-gray-400">Neuromodulation Segment Analysis</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">Data as of March 24, 2025</p>
            </div>
            <div class="text-right">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Medical Devices
              </span>
            </div>
          </div>
        </div>
  
        <!-- Primary KPIs -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Neuromodulation Revenue (2024)</h3>
            <p class="mt-2 text-3xl font-semibold">$554,223,000</p>
            <p class="text-sm text-green-600 dark:text-green-400">
              +6.6% vs 2023
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Segment Income (2024)</h3>
            <p class="mt-2 text-3xl font-semibold">$195,309,000</p>
            <p class="text-sm text-green-600 dark:text-green-400">
              +27.3% vs 2023
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">U.S. Revenue (2024)</h3>
            <p class="mt-2 text-3xl font-semibold">$441,022,000</p>
            <p class="text-sm text-green-600 dark:text-green-400">
              +8.2% vs 2023
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">R&D Expenses (2024)</h3>
            <p class="mt-2 text-3xl font-semibold">$121,029,000</p>
            <p class="text-sm text-red-600 dark:text-red-400">
              -14.1% vs 2023
            </p>
          </div>
        </div>
  
        <!-- Charts and Financial Analysis -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow lg:col-span-2">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Revenue by Region (2022-2024)</h2>
            </div>
            <div class="p-4 h-80 flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-500 dark:text-gray-400">Revenue by Region Chart Placeholder</p>
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Expense Breakdown (2024)</h2>
            </div>
            <div class="p-4 h-80 flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-500 dark:text-gray-400">Expenses Chart Placeholder</p>
            </div>
          </div>
        </div>
  
        <!-- Products and Growth Drivers -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">VNS Therapy Products</h2>
            </div>
            <div class="p-4">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="flex-shrink-0 h-5 w-5 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <div class="ml-3">
                    <p class="font-medium">Demipulse (Model 103)</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 h-5 w-5 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <div class="ml-3">
                    <p class="font-medium">AspireSR (Model 106)</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Closed loop stimulation (AutoStim), Expanded MRI access</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 h-5 w-5 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <div class="ml-3">
                    <p class="font-medium">SenTiva (Model 1000)</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Smallest and lightest VNS device, Responsive therapy, Scheduled Programming, Day & Night Programming, Expanded MRI access</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="flex-shrink-0 h-5 w-5 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <div class="ml-3">
                    <p class="font-medium">SenTiva Duo (Model 1000D)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Performance Trends</h2>
            </div>
            <div class="p-4 h-80 flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-500 dark:text-gray-400">Performance Trend Chart Placeholder</p>
            </div>
          </div>
        </div>
  
        <!-- Revenue & Income Analysis -->
        <div class="grid grid-cols-1 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Revenue & Income Analysis (2022-2024)</h2>
            </div>
            <div class="p-4 h-80 flex justify-center items-center bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-500 dark:text-gray-400">Revenue & Income Chart Placeholder</p>
            </div>
          </div>
        </div>
  
        <!-- Epilepsy Treatment & VNS Advantages -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">Epilepsy Treatment Options</h2>
            </div>
            <div class="p-4">
              <ul class="space-y-2">
                <li class="flex items-center">
                  <span class="mr-2 text-blue-500">●</span>
                  <span>Multiple ASMs (Anti-Seizure Medications)</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-blue-500">●</span>
                  <span>Various forms of ketogenic diet</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-blue-500">●</span>
                  <span>VNS (Vagus Nerve Stimulation)</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-blue-500">●</span>
                  <span>Resective and ablative brain surgery</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2 text-blue-500">●</span>
                  <span>Intracranial neurostimulation</span>
                </li>
              </ul>
              
              <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded">
                <p class="text-sm text-gray-800 dark:text-gray-200">ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.</p>
              </div>
            </div>
          </div>
  
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 class="text-lg font-medium">VNS Therapy Advantages</h2>
            </div>
            <div class="p-4">
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span class="text-sm">First medical device treatment approved by FDA for DRE in 1997</span>
                </li>
                <li class="flex items-start">
                  <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span class="text-sm">Only neuromodulation device approved in US for DRE patients as young as four years</span>
                </li>
                <li class="flex items-start">
                  <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span class="text-sm">Many worldwide regulatory bodies approved without age or seizure-type restrictions</span>
                </li>
                <li class="flex items-start">
                  <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span class="text-sm">Journal of Neurology (January 2022) meta-analysis demonstrated VNS Therapy benefits in adults with DRE</span>
                </li>
                <li class="flex items-start">
                  <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
                    <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                  <span class="text-sm">Improved seizure frequency without increased serious adverse events or discontinuations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Business Insights and Market Position -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-medium">Business Insights & Market Position</h2>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded">
                <h3 class="font-medium text-blue-600 dark:text-blue-400 mb-2">Market Position</h3>
                <p class="text-sm">First medical device approved by FDA for treatment of DRE in 1997. Only neuromodulation device approved in US for DRE patients as young as four years.</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded">
                <h3 class="font-medium text-green-600 dark:text-green-400 mb-2">Growth Drivers</h3>
                <p class="text-sm">Strong growth in the US market (8.2% in 2024), supported by CMS expanded reimbursement for VNS Therapy in treating Dravet Syndrome (2020) and Lennox-Gastaut Syndrome (2022).</p>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-4 rounded">
                <h3 class="font-medium text-purple-600 dark:text-purple-400 mb-2">Future Outlook</h3>
                <p class="text-sm">Continued R&D investment in enhanced pulse generators, leads, and programming software. Recent peer-reviewed evidence confirms safety, efficacy, and cost-effectiveness across patient populations.</p>
              </div>
            </div>
  
            <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <h3 class="font-medium mb-2">Key Segment Developments (2024)</h3>
              <ul class="space-y-2 text-sm list-disc pl-5">
                <li>Segment income increased to $195.3 million from $153.4 million in 2023 (+27.3%)</li>
                <li>Strong growth across all geographic regions, with US market leading at 8.2% growth</li>
                <li>R&D expense decreased due to winding down of the heart failure program</li>
                <li>Capital expenditures increased to $4.24 million from $1.20 million in 2023</li>
              </ul>
            </div>
          </div>
        </div>
  
        <!-- Regional Performance -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div class="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-medium">Regional Performance (2022-2024)</h2>
          </div>
          <div class="p-4 overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Region</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2022</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2023</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2024</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth (2024 vs 2023)</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth (2023 vs 2022)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">United States</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$374,542,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$407,493,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$441,022,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +8.2%
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +8.8%
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Europe</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$50,291,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$57,435,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$54,899,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">
                    -4.4%
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +14.2%
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Rest of World</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$52,160,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$54,782,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$58,302,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +6.4%
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
                    +5.0%
                  </td>
                </tr>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Total</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$476,993,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$519,710,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$554,223,000</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-green-600">
                    +6.6%
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-green-600">
                    +9.0%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }
  
  // Medtronic Dashboard Function
//   function generateMedtronicDashboard(data) {
//     return `
//       <div class="container mx-auto px-4 py-8 dark:text-white">
//         <!-- Company Header -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//           <div class="flex justify-between items-start">
//             <div>
//               <h1 class="text-3xl font-bold mb-2">Medtronic PLC</h1>
//               <p class="text-gray-600 dark:text-gray-400">Neuromodulation Segment Analysis</p>
//               <p class="text-sm text-gray-600 dark:text-gray-400">Period: ${data.financialReporting.period}</p>
//             </div>
//             <div class="text-right">
//               <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
//                 Medical Technology
//               </span>
//             </div>
//           </div>
//         </div>
  
//         <!-- Primary KPIs -->
//         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">3-Month Revenue (Jan 24, 2025)</h3>
//             <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.segments[0].financialData.revenue.threeMonths["2024"].January24)}</p>
//             <p class="text-sm ${getGrowthColor(data.segments[0].financialData.revenue.threeMonths.growth.percentage)}">
//               ${formatPercentage(data.segments[0].financialData.revenue.threeMonths.growth.percentage)} vs Prior Year
//             </p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">3-Month Revenue (Jan 26, 2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.segments[0].financialData.revenue.threeMonths["2024"].January26)}</p>
//             <p class="text-sm text-gray-600 dark:text-gray-400">Comparative Period</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">9-Month Revenue (Jan 24, 2025)</h3>
//             <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.segments[0].financialData.revenue.nineMonths["2024"].January24)}</p>
//             <p class="text-sm ${getGrowthColor(data.segments[0].financialData.revenue.nineMonths.growth.percentage)}">
//               ${formatPercentage(data.segments[0].financialData.revenue.nineMonths.growth.percentage)} vs Prior Year
//             </p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">9-Month Revenue (Jan 26, 2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.segments[0].financialData.revenue.nineMonths["2024"].January26)}</p>
//             <p class="text-sm text-gray-600 dark:text-gray-400">Comparative Period</p>
//           </div>
//         </div>
  
//         <!-- Growth Analysis Chart -->
//         <div class="grid grid-cols-1 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//             <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//               <h2 class="text-lg font-medium">Growth Analysis</h2>
//             </div>
//             <div class="p-4 h-80">
//               <canvas id="medtronic-growth-analysis"></canvas>
//             </div>
//           </div>
//         </div>
  
//         <!-- Products and Quarterly Performance -->
//         <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//             <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//               <h2 class="text-lg font-medium">Key Products</h2>
//             </div>
//             <div class="p-4">
//               <div class="space-y-6">
//                 ${data.segments[0].products.map(product => `
//                   <div class="flex">
//                     <div class="flex-shrink-0">
//                       <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
//                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div class="ml-4">
//                       <h3 class="text-lg font-medium">${product.name}</h3>
//                       <p class="mt-2 text-gray-600 dark:text-gray-400">${product.type}</p>
//                       <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Status: ${product.status}</p>
//                       <div class="mt-3">
//                         <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
//                           Growth Driver
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 `).join('')}
//               </div>
//             </div>
//           </div>
  
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//             <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//               <h2 class="text-lg font-medium">Quarterly Performance</h2>
//           </div>
//           <div class="p-4 h-80">
//             <canvas id="medtronic-quarterly-performance"></canvas>
//           </div>
//         </div>
//       </div>

//       <!-- Market Context and Business Overview -->
//       <div class="grid grid-cols-1 gap-6 mb-8">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//           <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//             <h2 class="text-lg font-medium">Business Overview & Market Context</h2>
//           </div>
//           <div class="p-4">
//             <div class="prose dark:prose-invert max-w-none">
//               <p>${data.contextualData.companyOverview}</p>
//               <p class="mt-4"><strong>Primary Customers:</strong> ${data.contextualData.customerBase}</p>
              
//               <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div class="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-4 rounded-lg">
//                   <h3 class="font-medium text-purple-800 dark:text-purple-300 mb-2">Growth Drivers</h3>
//                   <ul class="list-disc pl-5 space-y-1 text-sm">
//                     ${data.segments[0].growthDrivers.map(driver => `<li>${driver}</li>`).join('')}
//                   </ul>
//                 </div>
                
//                 <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded-lg">
//                   <h3 class="font-medium text-blue-800 dark:text-blue-300 mb-2">Neuromodulation Market Trends</h3>
//                   <ul class="list-disc pl-5 space-y-1 text-sm">
//                     <li>Increasing prevalence of neurological disorders</li>
//                     <li>Growing adoption of minimally invasive procedures</li>
//                     <li>Technological advancements in device functionality</li>
//                     <li>Expanding indications for neuromodulation therapy</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Revenue Comparison -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
//         <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//           <h2 class="text-lg font-medium">Revenue Performance</h2>
//         </div>
//         <div class="p-4 overflow-x-auto">
//           <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//             <thead>
//               <tr>
//                 <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Period</th>
//                 <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue</th>
//                 <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Change</th>
//                 <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth Drivers</th>
//               </tr>
//             </thead>
//             <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
//               <tr>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Jan 24, 2025 (3 Months)</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">${formatCurrency(data.segments[0].financialData.revenue.threeMonths["2024"].January24)}</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right ${getGrowthColor(data.segments[0].financialData.revenue.threeMonths.growth.percentage)}">
//                   ${formatPercentage(data.segments[0].financialData.revenue.threeMonths.growth.percentage)}
//                 </td>
//                 <td class="px-6 py-4 text-sm">Inceptiv SCS, Percept RC</td>
//               </tr>
//               <tr>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Jan 26, 2024 (3 Months)</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">${formatCurrency(data.segments[0].financialData.revenue.threeMonths["2024"].January26)}</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
//                 <td class="px-6 py-4 text-sm">-</td>
//               </tr>
//               <tr>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Jan 24, 2025 (9 Months)</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">${formatCurrency(data.segments[0].financialData.revenue.nineMonths["2024"].January24)}</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right ${getGrowthColor(data.segments[0].financialData.revenue.nineMonths.growth.percentage)}">
//                   ${formatPercentage(data.segments[0].financialData.revenue.nineMonths.growth.percentage)}
//                 </td>
//                 <td class="px-6 py-4 text-sm">Inceptiv SCS, Percept RC</td>
//               </tr>
//               <tr>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Jan 26, 2024 (9 Months)</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">${formatCurrency(data.segments[0].financialData.revenue.nineMonths["2024"].January26)}</td>
//                 <td class="px-6 py-4 whitespace-nowrap text-sm text-right">-</td>
//                 <td class="px-6 py-4 text-sm">-</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <!-- Market Outlook -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//           <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//             <h2 class="text-lg font-medium">Market Outlook</h2>
//           </div>
//           <div class="p-4">
//             <div class="prose dark:prose-invert max-w-none">
//               <div class="space-y-4">
//                 <div>
//                   <h3 class="text-md font-medium text-purple-800 dark:text-purple-300">Market Highlights</h3>
//                   <ul class="mt-2 list-disc pl-5 space-y-1 text-sm">
//                     <li>Double-digit growth in the Neuromodulation segment (12% over three months)</li>
//                     <li>Successful product launches driving revenue increase</li>
//                     <li>Continued investment in innovative therapies</li>
//                     <li>Spinal cord stimulation and deep brain stimulation as core focus areas</li>
//                   </ul>
//                 </div>
                
//                 <div class="mt-4">
//                   <h3 class="text-md font-medium text-purple-800 dark:text-purple-300">Future Outlook</h3>
//                   <ul class="mt-2 list-disc pl-5 space-y-1 text-sm">
//                     <li>Expected continuation of strong growth trajectory</li>
//                     <li>Expanding indications for neuromodulation therapy</li>
//                     <li>Increasing market penetration in key geographies</li>
//                     <li>Development of next-generation devices with enhanced capabilities</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//           <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//             <h2 class="text-lg font-medium">Key Technology Advancements</h2>
//           </div>
//           <div class="p-4">
//             <div class="space-y-4">
//               <div class="flex">
//                 <div class="flex-shrink-0">
//                   <div class="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div class="ml-4">
//                   <h3 class="text-lg font-medium text-gray-900 dark:text-white">Inceptiv™ Spinal Cord Stimulator</h3>
//                   <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Advanced closed-loop stimulation system for chronic pain management with real-time sensing and adaptive therapy delivery.</p>
//                 </div>
//               </div>
              
//               <div class="flex">
//                 <div class="flex-shrink-0">
//                   <div class="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//                     </svg>
//                   </div>
//                 </div>
//                 <div class="ml-4">
//                   <h3 class="text-lg font-medium text-gray-900 dark:text-white">Percept™ RC Deep Brain Neurostimulator</h3>
//                   <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Next-generation device with enhanced battery life, improved sensing capabilities, and expanded programming options for movement disorders.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
// }




/**
 * Generates a complete Medtronic Epilepsy Neuromodulation dashboard
 * @param {string} containerId - The ID of the container element where the dashboard will be rendered
 * @param {Object} data - The Medtronic epilepsy market data object
 * @return {void} - Renders the dashboard in the specified container
 */
function generateMedtronicDashboard(data) {

  // Create dashboard HTML structure
  return `
    <div class="medtronic-dashboard">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Epilepsy Neuromodulation Medicare Dashboard</h1>
        <p class="text-gray-600">Based on Medtronic SEC Filing Q3 FY2025 - Data as of January 24, 2025</p>
      </header>

      <!-- Key Stats Row -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-4">
          <p class="text-sm text-gray-600">Neuromodulation Revenue (Q3)</p>
          <p class="text-2xl font-bold text-blue-700">$${data.marketOverview.quarterlyRevenue.value}M</p>
          <p class="text-sm font-medium text-green-600">↑ ${data.marketOverview.growth.quarterly.value}% YoY</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <p class="text-sm text-gray-600">Nine-Month Revenue</p>
          <p class="text-2xl font-bold text-blue-700">$${(data.marketOverview.totalMarketSize.value/1000).toFixed(2)}B</p>
          <p class="text-sm font-medium text-green-600">↑ ${data.marketOverview.growth.yearToDate.value}% YoY</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <p class="text-sm text-gray-600">Epilepsy Market Share</p>
          <p class="text-2xl font-bold text-blue-700">${data.marketOverview.epilepsyMarketShare.value}%</p>
          <p class="text-sm text-gray-600">of Neuromodulation Segment</p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4">
          <p class="text-sm text-gray-600">Medicare Reimbursement (DBS)</p>
          <p class="text-2xl font-bold text-blue-700">$${Math.round(data.medicareReimbursement.dbs.implantation.total).toLocaleString()}</p>
          <p class="text-sm font-medium text-red-600">↓ ${data.medicareReimbursement.yearOverYearChanges.implantation}% YoY</p>
        </div>
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Quarterly Revenue Trend</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="revenueChart"></canvas>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Growth Rate Trend</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="growthChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Second Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Market by Patient Segment</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="patientSegmentChart"></canvas>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Competitive Landscape</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="competitiveChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Third Charts Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Market by Payer</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="payerChart"></canvas>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 class="text-lg font-semibold text-gray-800 mb-4">Regional Market Distribution</h2>
          <div style="position: relative; height: 300px; width: 100%;">
            <canvas id="regionChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Medicare Reimbursement Table -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Medicare Reimbursement Details for Epilepsy Neuromodulation</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Procedure</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">CPT Code</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Description</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Professional Fee</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Device Payment</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Total Payment</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">YoY Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2 border-t text-sm text-gray-700">DBS Implantation</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.implantation.cptCode}</span></td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.implantation.description}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.facility.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.device.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.total.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-red-600">${data.medicareReimbursement.yearOverYearChanges.implantation}%</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-t text-sm text-gray-700">Brain Neurostimulator Programming</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.programming.cptCode}</span></td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.programming.description}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.programming.payment.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">N/A</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.programming.payment.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-red-600">${data.medicareReimbursement.yearOverYearChanges.programming}%</td>
              </tr>
              <tr>
                <td class="px-4 py-2 border-t text-sm text-gray-700">Electronic Analysis</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.analysis.cptCode}</span></td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.analysis.description}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.analysis.payment.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">N/A</td>
                <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.analysis.payment.toFixed(2)}</td>
                <td class="px-4 py-2 border-t text-sm text-green-600">+${data.medicareReimbursement.yearOverYearChanges.analysis}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Epilepsy Products Portfolio -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Neuromodulation Product Portfolio</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Product</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Type</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Approval Status</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Key Features</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Market Share</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Launch Year</th>
                <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Medicare Code</th>
              </tr>
            </thead>
            <tbody>
              ${data.epilepsyProducts.currentPortfolio.map(product => `
                <tr>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.name}</td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.type}</td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">
                    <span class="px-2 py-1 rounded-full text-xs font-semibold 
                      ${product.approvalStatus.includes('FDA') ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}">
                      ${product.approvalStatus}
                    </span>
                  </td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.features.slice(0, 2).join(", ")}</td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.marketShare}%</td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.launchYear}</td>
                  <td class="px-4 py-2 border-t text-sm text-gray-700">${product.medicareCode}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${data.epilepsyProducts.currentPortfolio.some(p => p.notes) ? 
          `<p class="mt-4 text-sm text-gray-600 italic">Note: BrainSense Adaptive DBS received CE Mark in January 2025, FDA approval pending</p>` : 
          ''}
      </div>
    </div>
  `;

  // Initialize the charts
 
}

/**
 * Initializes all charts for the Medtronic dashboard using Chart.js
 * @param {Object} data - The Medtronic epilepsy market data object
 * @return {void} - Creates and renders all charts
 */
function initMedtronicCharts(data) {
  // Chart 1: Revenue Trend
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: data.quarterlyPerformance.map(q => q.quarter),
      datasets: [{
        label: 'Quarterly Revenue ($M)',
        data: data.quarterlyPerformance.map(q => q.revenue),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: 'Revenue (Million USD)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Revenue: $${context.raw}M`;
            }
          }
        },
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });

  // Chart 2: Growth Rate Trend
  const growthCtx = document.getElementById('growthChart').getContext('2d');
  new Chart(growthCtx, {
    type: 'bar',
    data: {
      labels: data.quarterlyPerformance.map(q => q.quarter),
      datasets: [{
        label: 'Growth Rate (%)',
        data: data.quarterlyPerformance.map(q => q.growthRate),
        backgroundColor: data.quarterlyPerformance.map(q => 
          q.growthRate >= 8 ? 'rgba(52, 211, 153, 0.7)' : 
          q.growthRate >= 5 ? 'rgba(96, 165, 250, 0.7)' : 
          'rgba(251, 191, 36, 0.7)'
        ),
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Growth Rate (%)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Growth Rate: ${context.raw}%`;
            }
          }
        },
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });

  // Chart 3: Patient Segment
  const patientSegmentCtx = document.getElementById('patientSegmentChart').getContext('2d');
  new Chart(patientSegmentCtx, {
    type: 'pie',
    data: {
      labels: data.epilepsyMarketSegmentation.byPatientSegment.map(s => s.segment),
      datasets: [{
        data: data.epilepsyMarketSegmentation.byPatientSegment.map(s => s.share),
        backgroundColor: [
          'rgba(52, 211, 153, 0.7)', 
          'rgba(96, 165, 250, 0.7)',
          'rgba(249, 115, 22, 0.7)'
        ],
        borderColor: [
          'rgba(52, 211, 153, 1)',
          'rgba(96, 165, 250, 1)',
          'rgba(249, 115, 22, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const segment = data.epilepsyMarketSegmentation.byPatientSegment[context.dataIndex];
              return [
                `${segment.segment}: ${segment.share}%`,
                `Growth Rate: ${segment.growthRate}%`
              ];
            }
          }
        },
        legend: {
          position: 'right'
        },
        title: {
          display: false
        }
      }
    }
  });

  // Chart 4: Competitive Landscape
  const competitiveCtx = document.getElementById('competitiveChart').getContext('2d');
  new Chart(competitiveCtx, {
    type: 'bar',
    data: {
      labels: data.competitiveLandscape.keyCompetitors.map(c => c.name),
      datasets: [
        {
          label: 'Market Share (%)',
          data: data.competitiveLandscape.keyCompetitors.map(c => c.marketShare),
          backgroundColor: 'rgba(59, 130, 246, 0.7)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
          order: 1
        },
        {
          label: 'Growth Rate (%)',
          data: data.competitiveLandscape.keyCompetitors.map(c => c.growthRate),
          backgroundColor: 'rgba(251, 191, 36, 0.7)',
          borderColor: 'rgba(251, 191, 36, 1)',
          borderWidth: 1,
          type: 'line',
          order: 0,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Market Share (%)'
          }
        },
        y1: {
          position: 'right',
          beginAtZero: true,
          grid: {
            drawOnChartArea: false
          },
          title: {
            display: true,
            text: 'Growth Rate (%)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const metric = context.dataset.label;
              return `${metric}: ${context.raw}%`;
            }
          }
        },
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });

  // Chart 5: Payer Distribution
  const payerCtx = document.getElementById('payerChart').getContext('2d');
  new Chart(payerCtx, {
    type: 'doughnut',
    data: {
      labels: data.epilepsyMarketSegmentation.byPayerType.map(p => p.payer),
      datasets: [{
        data: data.epilepsyMarketSegmentation.byPayerType.map(p => p.share),
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(107, 114, 128, 0.7)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(249, 115, 22, 1)',
          'rgba(107, 114, 128, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const payer = data.epilepsyMarketSegmentation.byPayerType[context.dataIndex];
              return [
                `${payer.payer}: ${payer.share}%`,
                `Growth Rate: ${payer.growthRate}%`
              ];
            }
          }
        },
        legend: {
          position: 'right'
        },
        title: {
          display: false
        }
      }
    }
  });

  // Chart 6: Regional Distribution
  const regionCtx = document.getElementById('regionChart').getContext('2d');
  new Chart(regionCtx, {
    type: 'bar',
    data: {
      labels: data.epilepsyMarketSegmentation.byRegion.map(r => r.region),
      datasets: [
        {
          label: 'Market Share (%)',
          data: data.epilepsyMarketSegmentation.byRegion.map(r => r.share),
          backgroundColor: 'rgba(139, 92, 246, 0.7)',
          borderColor: 'rgba(139, 92, 246, 1)',
          borderWidth: 1
        },
        {
          label: 'Growth Rate (%)',
          data: data.epilepsyMarketSegmentation.byRegion.map(r => r.growth),
          backgroundColor: 'rgba(236, 72, 153, 0.7)',
          borderColor: 'rgba(236, 72, 153, 1)',
          borderWidth: 1,
          type: 'line',
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Market Share (%)'
          }
        },
        y1: {
          position: 'right',
          beginAtZero: true,
          grid: {
            drawOnChartArea: false
          },
          title: {
            display: true,
            text: 'Growth Rate (%)'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const metric = context.dataset.label;
              return `${metric}: ${context.raw}%`;
            }
          }
        },
        legend: {
          position: 'top'
        },
        title: {
          display: false
        }
      }
    }
  });
}

// Function to initialize charts for LivaNova
function initLivaNovaDashboardCharts(data) {
  // Revenue by Region Chart
  const revenueByRegionCtx = document.getElementById('livanova-revenue-by-region').getContext('2d');
  new Chart(revenueByRegionCtx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [
        {
          label: 'United States',
          data: [374542, 407493, 441022],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        },
        {
          label: 'Europe',
          data: [50291, 57435, 54899],
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 1
        },
        {
          label: 'Rest of World',
          data: [52160, 54782, 58302],
          backgroundColor: 'rgba(249, 115, 22, 0.8)',
          borderColor: 'rgba(249, 115, 22, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: false,
        },
        y: {
          stacked: false,
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '$' + (value / 1000) + 'k';
            }
          }
        }
      }
    }
  });

  // Expenses Chart
  const expensesCtx = document.getElementById('livanova-expenses').getContext('2d');
  new Chart(expensesCtx, {
    type: 'pie',
    data: {
      labels: ['Cost of Sales', 'SG&A', 'R&D'],
      datasets: [{
        data: [50236, 187649, 121029],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(249, 115, 22, 0.8)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(249, 115, 22, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.raw;
              const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `$${(value / 1000).toFixed(0)}k (${percentage}%)`;
            }
          }
        }
      }
    }
  });

  // Performance Trend Chart
  const performanceTrendCtx = document.getElementById('livanova-performance-trend').getContext('2d');
  new Chart(performanceTrendCtx, {
    type: 'line',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [
        {
          label: 'Revenue Growth (%)',
          data: [null, 9.0, 6.6],
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          yAxisID: 'y',
          tension: 0.3,
          fill: false
        },
        {
          label: 'Segment Income Growth (%)',
          data: [null, -11.2, 27.3],
          borderColor: 'rgba(16, 185, 129, 1)',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          yAxisID: 'y',
          tension: 0.3,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}%`;
            }
          }
        }
      }
    }
  });

  // Revenue & Income Analysis Chart
  const revenueIncomeCtx = document.getElementById('livanova-revenue-income').getContext('2d');
  new Chart(revenueIncomeCtx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [
        {
          label: 'Total Revenue',
          data: [476993, 519710, 554223],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
          yAxisID: 'y',
          order: 2
        },
        {
          label: 'Segment Income',
          data: [172775, 153384, 195309],
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 1,
          yAxisID: 'y',
          order: 1
        },
        {
          label: 'Profit Margin (%)',
          data: [36.2, 29.5, 35.2],
          type: 'line',
          fill: false,
          borderColor: 'rgba(249, 115, 22, 1)',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          pointStyle: 'circle',
          pointRadius: 5,
          pointHoverRadius: 8,
          yAxisID: 'y1',
          order: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          beginAtZero: true,
          title: {
            display: true,
            text: 'USD ($)'
          },
          ticks: {
            callback: function(value) {
              return '$' + (value / 1000) + 'k';
            }
          }
        },
        y1: {
          type: 'linear',
          position: 'right',
          beginAtZero: true,
          max: 50,
          title: {
            display: true,
            text: 'Profit Margin (%)'
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            drawOnChartArea: false
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.dataset.label === 'Profit Margin (%)') {
                return `${context.dataset.label}: ${context.raw}%`;
              } else {
                return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
              }
            }
          }
        }
      }
    }
  });
}

// Function to initialize charts for Medtronic
function initializeMedtronicCharts(data) {
  // Set up chart options based on dark/light mode
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#e5e7eb' : '#374151';
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  
  // 1. Growth Analysis Chart
  new Chart(document.getElementById('medtronic-growth-analysis').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Three Months', 'Nine Months'],
      datasets: [
        {
          label: 'Growth Rate (%)',
          data: [
            data.segments[0].financialData.revenue.threeMonths.growth.percentage,
            data.segments[0].financialData.revenue.nineMonths.growth.percentage
          ],
          backgroundColor: ['#8b5cf6', '#ec4899'] // purple-500, pink-500
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Growth Rate Comparison',
          color: textColor,
          font: {
            size: 16
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + context.raw + '%';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
          }
        },
        y: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            callback: function(value) {
              return value + '%';
            }
          },
          beginAtZero: true
        }
      }
    }
  });

  // 2. Quarterly Performance Chart
  new Chart(document.getElementById('medtronic-quarterly-performance').getContext('2d'), {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Current Quarter'],
      datasets: [
        {
          label: 'FY 2025',
          data: [
            data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q1
            data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q2
            data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q3
            data.segments[0].financialData.revenue.threeMonths['2024'].January24 // current quarter
          ],
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          tension: 0.4
        },
        {
          label: 'FY 2024',
          data: [
            data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q1
            data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q2
            data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q3
            data.segments[0].financialData.revenue.threeMonths['2024'].January26 // last year quarter
          ],
          borderColor: '#ec4899',
          backgroundColor: 'rgba(236, 72, 153, 0.2)',
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + formatCurrency(context.raw);
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
          }
        },
        y: {
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor,
            callback: function(value) {
              return formatCurrency(value);
            }
          },
          beginAtZero: true
        }
      }
    }
  });
}

// LivaNova data file


function generatePrecisisDashboard(data) {
  return `
      <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
          <!-- Header -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">Precisis AG</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">EASEE - Minimally Invasive Epilepsy Neurostimulation</p>
              </div>
              <div class="text-right mt-4 md:mt-0">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
              </div>
          </div>

          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2024)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2025-2034</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(21600000)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Oct 2021 (Cochlear Limited)</p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="precisis-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="precisis-patient-reach"></canvas>
                  </div>
              </div>
          </div>

          <!-- Insights -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
                  <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
              </div>
          </div>
      </div>
  `;
}

function initializePrecisisCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  new Chart(document.getElementById('precisis-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2024', '2034'],
          datasets: [{
              label: 'Market Size ($M)',
              data: [data.epilepsy_market_details.market_size_2024 / 1000000, data.epilepsy_market_details.market_projected_size_2032 / 1000000],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } },
          scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
      }
  });

  new Chart(document.getElementById('precisis-patient-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Eligible Patients', 'Total Epilepsy Patients'],
          datasets: [{
              data: [10100000, 50000000 - 10100000],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } }
      }
  });
}

function generateEpiMinderDashboard(data) {
  return `
      <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
          <!-- Header -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">Epi-Minder</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Wearable Seizure Monitoring</p>
              </div>
              <div class="text-right mt-4 md:mt-0">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
              </div>
          </div>

          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2023)</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2023)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Monitoring Devices</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2024-2030</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(26000000)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Aug 2022 (Series A)</p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="epiminder-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="epiminder-patient-reach"></canvas>
                  </div>
              </div>
          </div>

          <!-- Insights -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
                  <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
              </div>
          </div>
      </div>
  `;
}

function initializeEpiMinderCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  new Chart(document.getElementById('epiminder-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2023', '2030'],
          datasets: [{
              label: 'Market Size ($M)',
              data: [data.epilepsy_market_details.market_size_2023 / 1000000, data.epilepsy_market_details.market_projected_size_2030 / 1000000],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } },
          scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
      }
  });

  new Chart(document.getElementById('epiminder-patient-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['U.S. Patients', 'Global Patients'],
          datasets: [{
              data: [3000000, 50000000 - 3000000],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } }
      }
  });
}

function generateFlowMedicalDashboard(data) {
  return `
      <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
          <!-- Header -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">Flow Medical</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">tDCS - Depression & Epilepsy Crossover</p>
              </div>
              <div class="text-right mt-4 md:mt-0">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
              </div>
          </div>

          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2024)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2024-2032</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">$${formatCurrency(9000000)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">May 2023 (Series A)</p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="flowmedical-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Comorbidity Reach</h2>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="flowmedical-comorbidity-reach"></canvas>
                  </div>
              </div>
          </div>

          <!-- Insights -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                  <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
                  <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
              </div>
          </div>
      </div>
  `;
}

function initializeFlowMedicalCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  new Chart(document.getElementById('flowmedical-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2024', '2032'],
          datasets: [{
              label: 'Market Size ($M)',
              data: [data.epilepsy_market_details.market_size_2024 / 1000000, data.epilepsy_market_details.market_projected_size_2032 / 1000000],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } },
          scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
      }
  });

  new Chart(document.getElementById('flowmedical-comorbidity-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Epilepsy w/ Depression', 'Other Epilepsy Patients'],
          datasets: [{
              data: [25000000, 50000000 - 25000000],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { labels: { color: textColor } } }
      }
  });
}

function generateXCOPRIDashboard(data) {
  return `
      <div class="container mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white">
          <!-- Company Header -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
              <div class="flex flex-col md:flex-row justify-between items-start">
                  <div>
                      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">SK Biopharmaceuticals / SK Life Science</h1>
                      <p class="text-lg text-gray-600 dark:text-gray-300">XCOPRI (Cenobamate) Epilepsy Drug Dashboard - 2024</p>
                  </div>
                  <div class="text-right mt-4 md:mt-0">
                      <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
                  </div>
              </div>
          </div>

          <!-- Key Financial Metrics -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
                  <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.full_year_revenue[2024].total)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].growth_rate}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">XCOPRI U.S. Sales (2024)</h3>
                  <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.full_year_revenue[2024].xcopri_us_sales)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].xcopri_us_growth_rate}</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Operating Profit (2024)</h3>
                  <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.operating_profit[2024])}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">First profitable year</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 U.S. Sales Target</h3>
                  <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(420000000)} - $${formatCurrency(450000000)}</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
              </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Revenue Trends</h2>
                  </div>
                  <div class="p-6 h-96">
                      <canvas id="xcopri-revenue-trends"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">U.S. Sales Growth</h2>
                  </div>
                  <div class="p-6 h-96">
                      <canvas id="xcopri-us-sales-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Market Share (U.S.)</h2>
                  </div>
                  <div class="p-6 h-96">
                      <canvas id="xcopri-market-share"></canvas>
                  </div>
              </div>
          </div>

          <!-- Detailed Insights -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <!-- R&D and Future Products -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">R&D and Future Products</h2>
                  </div>
                  <div class="p-6">
                      <div class="space-y-4">
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Pipeline Expansion</span>
                              <span class="font-medium text-gray-900 dark:text-white">TPD, RPT, oncology</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">XCOPRI Indications</span>
                              <span class="font-medium text-gray-900 dark:text-white">Expand by 2025-2026</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">New Markets</span>
                              <span class="font-medium text-gray-900 dark:text-white">Korea, Japan NDA planned</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
                      </div>
                  </div>
              </div>

              <!-- Epilepsy Market Insights -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Epilepsy Market Insights</h2>
                  </div>
                  <div class="p-6">
                      <div class="space-y-4">
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">U.S. Market Size (2024)</span>
                              <span class="font-medium text-gray-900 dark:text-white">$5B</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Global Market Size (2024)</span>
                              <span class="font-medium text-gray-900 dark:text-white">$11.13B</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">XCOPRI U.S. Share</span>
                              <span class="font-medium text-gray-900 dark:text-white">~6.5%</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400">Source: Grand View Research, 2030 Report</p>
                      </div>
                  </div>
              </div>

              <!-- Financial Health -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Financial Health</h2>
                  </div>
                  <div class="p-6">
                      <div class="space-y-4">
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Gross Margin</span>
                              <span class="font-medium text-gray-900 dark:text-white">>90%</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Net Profit (2024)</span>
                              <span class="font-medium text-gray-900 dark:text-white">$${formatCurrency(data.financials.net_profit[2024])}</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Q4 2024 Sales</span>
                              <span class="font-medium text-gray-900 dark:text-white">$${formatCurrency(120740741)}</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025; The Bio News, Feb 5, 2025</p>
                      </div>
                  </div>
              </div>
          </div>

          <!-- Additional Insights -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Sales Growth Drivers -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Sales Growth Drivers</h2>
                  </div>
                  <div class="p-6">
                      <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                          ${data.sales_data.sales_growth_drivers.map(driver => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>${driver}</li>`).join('')}
                      </ul>
                      <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">Source: SK Life Science Press Release, March 20, 2025</p>
                  </div>
              </div>

              <!-- Patient and Clinical Insights -->
              <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Patient and Clinical Insights</h2>
                  </div>
                  <div class="p-6">
                      <div class="space-y-4">
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Patients Treated</span>
                              <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.patient_reach.amount} (Sep 2024)</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Seizure Freedom (Phase 3)</span>
                              <span class="font-medium text-gray-900 dark:text-white">100% at 400mg</span>
                          </div>
                          <div class="flex justify-between">
                              <span class="text-gray-600 dark:text-gray-400">Presentation Date</span>
                              <span class="font-medium text-gray-900 dark:text-white">Dec 9, 2024</span>
                          </div>
                          <p class="text-xs text-gray-500 dark:text-gray-400">Source: SK Life Science Press Release, March 20, 2025; Ono Pharma, Dec 9, 2024</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;
}

// Helper function to format currency (assumes input in full USD amounts)
// function formatCurrency(amount) {
//   return (amount / 1000000).toFixed(1) + 'M';
// }

// Chart initialization function for XCOPRI
function initializeXCOPRICharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  // Revenue Trends Chart
  new Chart(document.getElementById('xcopri-revenue-trends').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2022', '2023', '2024'],
          datasets: [{
              label: 'Total Revenue ($M)',
              data: [
                  data.financials.full_year_revenue[2022].total / 1000000,
                  data.financials.full_year_revenue[2023].total / 1000000,
                  data.financials.full_year_revenue[2024].total / 1000000
              ],
              borderColor: '#4299E1',
              backgroundColor: 'rgba(66, 153, 225, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { labels: { color: textColor } }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
          }
      }
  });

  // U.S. Sales Growth Chart
  new Chart(document.getElementById('xcopri-us-sales-growth').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['2024 vs 2023'],
          datasets: [{
              label: 'U.S. Sales Growth (%)',
              data: [parseFloat(data.financials.full_year_revenue[2024].xcopri_us_growth_rate)],
              backgroundColor: '#48BB78'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { display: false },
              tooltip: { callbacks: { label: context => `${context.raw}%` } }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: { 
                  beginAtZero: true, 
                  ticks: { color: textColor, callback: value => `${value}%` }, 
                  grid: { color: gridColor } 
              }
          }
      }
  });

  // Market Share Chart (U.S.)
  new Chart(document.getElementById('xcopri-market-share').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['XCOPRI', 'Other Epilepsy Drugs'],
          datasets: [{
              data: [324962963, 5000000000 - 324962963], // U.S. market size $5B - XCOPRI sales
              backgroundColor: ['#F6AD55', '#E5E7EB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { labels: { color: textColor } },
              tooltip: { callbacks: { label: context => `${(context.raw / 5000000000 * 100).toFixed(1)}%` } }
          }
      }
  });
}


// Sonova Dashboard Implementation
function generateSonovaDashboard(data) {
    return `
        <div class="container mx-auto px-4 py-8 dark:text-white">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 class="text-3xl font-bold mb-2">Sonova Group</h1>
                        <p class="text-gray-600 dark:text-gray-400">${data.current_period.period}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <!-- Primary KPIs -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.revenue.total)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">LC Growth: ${formatPercentage(data.current_period.key_financials.revenue.growth.local_currency)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Adj. EBITA</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.ebita.adjusted)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.current_period.key_financials.ebita.margin_adjusted)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">HI Revenue</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.segments.hearing_instruments.revenue)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.current_period.key_financials.segments.hearing_instruments.organic_growth)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">CI Revenue</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.key_financials.segments.cochlear_implants.revenue)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.current_period.key_financials.segments.cochlear_implants.organic_growth)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Assets</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.balance_sheet.total_assets)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Equity Ratio: ${formatPercentage(data.current_period.balance_sheet.equity_ratio)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Equity</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.current_period.balance_sheet.equity)}</p>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Segment Revenue Distribution</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="sonova-segment-revenue"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Financial Metrics Trend</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="sonova-financial-metrics"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Growth Metrics</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="sonova-growth-metrics"></canvas>
                    </div>
                </div>
            </div>

            <!-- Detailed Metrics -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Segment Performance</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <h3 class="font-medium mb-2">Hearing Instruments</h3>
                                    <div class="space-y-2">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600 dark:text-gray-400">Revenue</span>
                                            <span>${formatCurrency(data.current_period.key_financials.segments.hearing_instruments.revenue)}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600 dark:text-gray-400">Organic Growth</span>
                                            <span>${formatPercentage(data.current_period.key_financials.segments.hearing_instruments.organic_growth)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 class="font-medium mb-2">Cochlear Implants</h3>
                                    <div class="space-y-2">
                                        <div class="flex justify-between">
                                            <span class="text-gray-600 dark:text-gray-400">Revenue</span>
                                            <span>${formatCurrency(data.current_period.key_financials.segments.cochlear_implants.revenue)}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-600 dark:text-gray-400">Organic Growth</span>
                                            <span>${formatPercentage(data.current_period.key_financials.segments.cochlear_implants.organic_growth)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Outlook Section -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Outlook ${data.outlook_2024_25 ? '2024/25' : ''}</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Sales Growth Guidance</span>
                                <span class="font-medium">${data.outlook_2024_25?.sales_growth_guidance || '-'}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">EBITA Growth Guidance</span>
                                <span class="font-medium">${data.outlook_2024_25?.adjusted_ebita_growth_guidance || '-'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateNeuroPaceDashboard(data) {
    return `
        <div class="container mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
                <div class="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">NeuroPace, Inc.</h1>
                        <p class="text-lg text-gray-600 dark:text-gray-300">Epilepsy Neuromodulation Dashboard - 2024</p>
                    </div>
                    <div class="text-right mt-4 md:mt-0">
                        <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
                    </div>
                </div>
            </div>

            <!-- Key Financial Metrics -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue</h3>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.full_year_revenue[2024].total)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].growth_rate}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Initial Implants (Q4)</h3>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.q4_revenue[2024].breakdown.initial_implants.amount)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.q4_revenue[2024].breakdown.initial_implants.growth_rate}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Replacement Implants (Q4)</h3>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.q4_revenue[2024].breakdown.replacement_implants.amount)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.q4_revenue[2024].breakdown.replacement_implants.growth_rate}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 Revenue Forecast</h3>
                    <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.revenue_guidance_2025.range.min)} - $${formatCurrency(data.financials.revenue_guidance_2025.range.max)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.revenue_guidance_2025.growth_rate}</p>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Revenue Trends</h2>
                    </div>
                    <div class="p-6 h-96">
                        <canvas id="neuropace-revenue-trends"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Implant Breakdown</h2>
                    </div>
                    <div class="p-6 h-96">
                        <canvas id="neuropace-implant-breakdown"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Growth Metrics</h2>
                    </div>
                    <div class="p-6 h-96">
                        <canvas id="neuropace-growth-metrics"></canvas>
                    </div>
                </div>
            </div>

            <!-- Detailed Insights -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <!-- R&D and New Products -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">R&D and Product Development</h2>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">2024 R&D Spend</span>
                                <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.r_and_d_expenses[2024])}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Q4 2024 R&D</span>
                                <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.r_and_d_expenses.q4_2024)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">New Products</span>
                                <span class="font-medium text-gray-900 dark:text-white">No new launches; focus on RNS enhancements</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Device Longevity</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.device_longevity}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Research (Refractory Epilepsy) -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Refractory Epilepsy Market</h2>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">U.S. Drug-Resistant Patients</span>
                                <span class="font-medium text-gray-900 dark:text-white">~1M</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Focal Epilepsy Candidates</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.market_opportunity}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Clinical Efficacy</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.result}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Sales Channel</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.company.sales_channel}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Financial Health -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Financial Health</h2>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Gross Margin</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.financials.gross_margin[2024]}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Net Loss</span>
                                <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.net_loss[2024])}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Cash Position</span>
                                <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.cash_position.dec_31_2024)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Operating Expenses</span>
                                <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.operating_expenses[2024])}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Insights -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Sales Growth Drivers -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Sales Growth Drivers</h2>
                    </div>
                    <div class="p-6">
                        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                            ${data.sales_data.sales_growth_drivers.map(driver => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>${driver}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Clinical Milestones -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Clinical Milestones</h2>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Post-Approval Study</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.study}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Seizure Reduction</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.result}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Presentation Date</span>
                                <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.presentation_date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Helper function to format currency (assumes input in full USD amounts)
function formatNPCurrency(amount) {
    return (amount / 1000000).toFixed(1) + 'M';
}

// Chart initialization function for NeuroPace
function initializeNeuroPaceCharts(data) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    // Revenue Trends Chart
    new Chart(document.getElementById('neuropace-revenue-trends').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Total Revenue ($M)',
                data: [
                    data.financials.full_year_revenue[2021].total / 1000000,
                    data.financials.full_year_revenue[2022].total / 1000000,
                    data.financials.full_year_revenue[2023].total / 1000000,
                    data.financials.full_year_revenue[2024].total / 1000000
                ],
                borderColor: '#4299E1',
                backgroundColor: 'rgba(66, 153, 225, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor } }
            },
            scales: {
                x: { ticks: { color: textColor }, grid: { color: gridColor } },
                y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
            }
        }
    });

    // Implant Breakdown Chart (Q4 2024)
    new Chart(document.getElementById('neuropace-implant-breakdown').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Initial Implants', 'Replacement Implants'],
            datasets: [{
                data: [
                    data.financials.q4_revenue[2024].breakdown.initial_implants.amount,
                    data.financials.q4_revenue[2024].breakdown.replacement_implants.amount
                ],
                backgroundColor: ['#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor } }
            }
        }
    });

    // Growth Metrics Chart
    new Chart(document.getElementById('neuropace-growth-metrics').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['2022 vs 2021', '2023 vs 2022', '2024 vs 2023'],
            datasets: [{
                label: 'Annual Growth Rate (%)',
                data: [
                    parseFloat(data.growth_metrics.annual_growth_rates['2022_vs_2021']),
                    parseFloat(data.growth_metrics.annual_growth_rates['2023_vs_2022']),
                    parseFloat(data.growth_metrics.annual_growth_rates['2024_vs_2023'])
                ],
                backgroundColor: '#4299E1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { callbacks: { label: context => `${context.raw}%` } }
            },
            scales: {
                x: { ticks: { color: textColor }, grid: { color: gridColor } },
                y: { 
                    beginAtZero: true, 
                    ticks: { color: textColor, callback: value => `${value}%` }, 
                    grid: { color: gridColor } 
                }
            }
        }
    });
}

// WS Audiology Dashboard Implementation with expanded metrics
function generateWSADashboard(data) {
    return `
        <div class="container mx-auto px-4 py-8 dark:text-white">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 class="text-3xl font-bold mb-2">WS Audiology A/S</h1>
                        <p class="text-gray-600 dark:text-gray-400">Fiscal Year ${data.fiscal_year}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <!-- Primary KPIs -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.revenue.total)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${formatPercentage(data.key_financials.revenue.organic_growth)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITDA</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.profitability.EBITDA.before_special_items)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.key_financials.profitability.EBITDA.margin)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Gross Profit</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.profitability.gross_profit)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.key_financials.profitability.gross_margin)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Operating Cash Flow</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.cash_flow.operating)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">FCF: ${formatCurrency(data.key_financials.cash_flow.free_cash_flow)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Assets</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.balance_sheet.total_assets)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Debt</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.key_financials.debt_structure.net_interest_bearing_debt)}</p>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Revenue by Region</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="wsa-revenue-by-region"></canvas>
                    </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Operational Metrics</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="wsa-operational-metrics"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Sustainability Metrics</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="wsa-sustainability-metrics"></canvas>
                    </div>
                </div>
            </div>

            <!-- Detailed Metrics -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 dark:text-white">
                <!-- Research & Development -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">R&D Overview</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Total R&D Spend</span>
                                <span class="font-medium">${formatCurrency(data.operational_metrics.research_development.total_spend)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">% of Sales</span>
                                <span class="font-medium">${formatPercentage(data.operational_metrics.research_development.as_percent_of_sales)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Capitalized R&D</span>
                                <span class="font-medium">${formatCurrency(data.operational_metrics.research_development.capitalized)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Annual Launches</span>
                                <span class="font-medium">${data.operational_metrics.research_development.annual_launches}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market Data -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Market Overview</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Total Hearing Loss Market</span>
                                <span class="font-medium">${data.market_data.addressable_market.total_hearing_loss}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Market Penetration</span>
                                <span class="font-medium">${data.market_data.addressable_market.current_penetration}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Annual Market Size</span>
                                <span class="font-medium">${data.market_data.addressable_market.annual_market_size}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Market Growth Rate</span>
                                <span class="font-medium">${data.market_data.addressable_market.market_growth_rate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Debt Structure -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Debt Structure</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Net Interest Bearing Debt</span>
                                <span class="font-medium">${formatCurrency(data.key_financials.debt_structure.net_interest_bearing_debt)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Available Credit</span>
                                <span class="font-medium">${formatCurrency(data.key_financials.debt_structure.available_credit_facility)}</span>
                            </div>
                            <h3 class="font-medium mt-4 mb-2">Term Loans</h3>
                            <div class="space-y-2">
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">EUR Loan</span>
                                    <span class="font-medium">${formatCurrency(data.key_financials.debt_structure.term_loans.EUR.amount)}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600 dark:text-gray-400">USD Loan</span>
                                    <span class="font-medium">${formatCurrency(data.key_financials.debt_structure.term_loans.USD.amount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Metrics -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 dark:text-white">
                <!-- Employee Metrics -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Employee Overview</h2>
                    </div>
                    <div class="p-4">
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <h3 class="font-medium mb-2">Headcount</h3>
                                <div class="space-y-2">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600 dark:text-gray-400">Total Employees</span>
                                        <span>${data.operational_metrics.employees.total}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600 dark:text-gray-400">R&D Staff</span>
                                        <span>${data.operational_metrics.employees.by_function.RnD}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 class="font-medium mb-2">Turnover</h3>
                                <div class="space-y-2">
                                    <div class="flex justify-between">
                                        <span class="text-gray-600 dark:text-gray-400">Total Turnover</span>
                                        <span>${data.operational_metrics.employees.turnover.total}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-600 dark:text-gray-400">Voluntary</span>
                                        <span>${data.operational_metrics.employees.turnover.voluntary}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sustainability -->
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Sustainability Metrics</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Scope 1 Emissions</span>
                                <span class="font-medium">${data.sustainability_metrics.emissions.scope1} tCO2e</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Scope 2 (Market-based)</span>
                                <span class="font-medium">${data.sustainability_metrics.emissions.scope2.market_based} tCO2e</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Renewable Electricity</span>
                                <span class="font-medium">${formatPercentage(data.sustainability_metrics.energy.renewable_electricity_share)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Recycling Rate</span>
                                <span class="font-medium">${formatPercentage(data.sustainability_metrics.waste_management.recycling_rate)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}


function initializeSonovaCharts(data) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    // Segment Revenue Distribution
    new Chart(document.getElementById('sonova-segment-revenue').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Hearing Instruments', 'Audiological Care', 'Consumer Hearing', 'Cochlear Implants'],
            datasets: [{
                data: [
                    data.current_period.key_financials.segments.hearing_instruments.subsegments.hearing_instruments_business.revenue,
                    data.current_period.key_financials.segments.hearing_instruments.subsegments.audiological_care.revenue,
                    data.current_period.key_financials.segments.hearing_instruments.subsegments.consumer_hearing.revenue,
                    data.current_period.key_financials.segments.cochlear_implants.revenue
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55', '#F56565']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        }
    });

    // Financial Metrics Trend
    new Chart(document.getElementById('sonova-financial-metrics').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['HY 2024/25'],
            datasets: [{
                label: 'Revenue',
                data: [data.current_period.key_financials.revenue.total],
                backgroundColor: '#4299E1'
            }, {
                label: 'EBITA', 
                data: [data.current_period.key_financials.ebita.adjusted],
                backgroundColor: '#48BB78'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            }
        }
     });

    new Chart(document.getElementById('sonova-growth-metrics').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Revenue Growth LC', 'HI Growth', 'CI Growth'],
            datasets: [{
                label: 'Growth Rate (%)',
                data: [
                    data.current_period.key_financials.revenue.growth.local_currency,
                    data.current_period.key_financials.segments.hearing_instruments.organic_growth,
                    data.current_period.key_financials.segments.cochlear_implants.organic_growth
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColor,
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: { color: gridColor }
                }
            }
        }
    });
}

function initializeWSACharts(data) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    // Revenue by Region
    new Chart(document.getElementById('wsa-revenue-by-region').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['EMEA', 'Americas', 'APAC'],
            datasets: [{
                data: [
                    data.key_financials.revenue.by_region.EMEA.revenue,
                    data.key_financials.revenue.by_region.Americas.revenue,
                    data.key_financials.revenue.by_region.APAC.revenue
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        }
    });

    new Chart(document.getElementById('wsa-operational-metrics').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['R&D Spend', 'R&D Staff', 'Production Sites'],
            datasets: [{
                label: 'Key Operational Metrics',
                data: [
                    data.operational_metrics.research_development.total_spend,
                    data.operational_metrics.employees.by_function.RnD,
                    data.operational_metrics.infrastructure.production_sites
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColor,
                        callback: function(value) {
                            if (value >= 1000) {
                                return value / 1000 + 'k';
                            }
                            return value;
                        }
                    },
                    grid: { color: gridColor }
                }
            }
        }
    });

    // Sustainability Metrics Chart
    new Chart(document.getElementById('wsa-sustainability-metrics').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Renewable Energy', 'Recycling Rate'],
            datasets: [{
                label: 'Sustainability Metrics (%)',
                data: [
                    data.sustainability_metrics.energy.renewable_electricity_share,
                    data.sustainability_metrics.waste_management.recycling_rate
                ],
                backgroundColor: ['#48BB78', '#4299E1']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: textColor,
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: { color: gridColor }
                }
            }
        }
    });
}

function initializeGNCharts(data) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';

    // Revenue Distribution
    new Chart(document.getElementById('gn-revenue-distribution').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Hearing', 'Enterprise', 'Gaming & Consumer'],
            datasets: [{
                data: [
                    data.financial_highlights.revenue.by_division.hearing.revenue,
                    data.financial_highlights.revenue.by_division.enterprise.revenue,
                    data.financial_highlights.revenue.by_division.gaming_consumer.revenue
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        }
    });
}
// GN Dashboard Implementation
function generateGNDashboard(data) {
    return `
        <div class="container mx-auto px-4 py-8 dark:text-white">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 class="text-3xl font-bold mb-2">${data.company_info.name}</h1>
                        <p class="text-gray-600 dark:text-gray-400">${data.period.quarter} ${data.period.year}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600 dark:text-gray-400">Report Date: ${data.period.report_date}</p>
                    </div>
                </div>
            </div>

            <!-- Primary KPIs -->
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Revenue</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.revenue.total)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Organic Growth: ${formatPercentage(data.financial_highlights.revenue.organic_growth)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">EBITA</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.profitability.ebita.value)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.financial_highlights.profitability.ebita.margin)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Free Cash Flow</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.cash_flow.free_cash_flow.excl_ma)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Cash Conversion: ${data.financial_highlights.cash_flow.cash_conversion}%</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Gross Profit</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.profitability.gross_profit.value)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Margin: ${formatPercentage(data.financial_highlights.profitability.gross_profit.margin)}</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Debt</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatCurrency(data.financial_highlights.balance_sheet.net_interest_bearing_debt)}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Leverage: ${data.financial_highlights.balance_sheet.leverage_ratio.adjusted}x</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Equity Ratio</h3>
                    <p class="mt-2 text-3xl font-semibold">${formatPercentage(data.financial_highlights.balance_sheet.equity_ratio)}</p>
                </div>
            </div>

            <!-- Charts Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Revenue Distribution</h2>
                    </div>
                    <div class="p-4 h-80">
                        <canvas id="gn-revenue-distribution"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Divisional Performance</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            ${Object.entries(data.financial_highlights.revenue.by_division).map(([division, info]) => `
                                <div>
                                    <h3 class="font-medium mb-2">${division.charAt(0).toUpperCase() + division.slice(1)}</h3>
                                    <div class="flex justify-between mb-1">
                                        <span>Revenue</span>
                                        <span>${formatCurrency(info.revenue)}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Organic Growth</span>
                                        <span>${formatPercentage(info.organic_growth)}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Geographic Distribution</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            ${Object.entries(data.financial_highlights.revenue.by_geography).map(([region, info]) => `
                                <div class="flex justify-between">
                                    <span>${region.charAt(0).toUpperCase() + region.slice(1)}</span>
                                    <span>${formatCurrency(info.revenue)}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Metrics -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 dark:text-white">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">Operational Metrics</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span>Total Employees</span>
                                <span>${data.operational_metrics.employees.total}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>R&D Intensity</span>
                                <span>${formatPercentage(data.operational_metrics.development_costs.rd_intensity)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Development Costs</span>
                                <span>${formatCurrency(data.operational_metrics.development_costs.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg shadow dark:text-white">
                    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-lg font-medium">2024 Guidance</h2>
                    </div>
                    <div class="p-4">
                        <div class="space-y-4">
                            <div class="flex justify-between">
                                <span>Organic Growth</span>
                                <span>${data.guidance_2024.organic_growth.range}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>EBITA Margin</span>
                                <span>${data.guidance_2024.ebita_margin.range}</span>
                            </div>
                            <div class="flex justify-between">
                                <span>Free Cash Flow (excl. M&A)</span>
                                <span>>${data.guidance_2024.free_cash_flow_excl_ma.target}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateDemantDashboard(data) {
    return `
        <div class="container mx-auto px-4 py-8 dark:text-white">
            <!-- Company Header -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
                <div class="flex justify-between items-start">
                    <div>
                        <h1 class="text-3xl font-bold mb-2">Demant A/S</h1>
                        <p class="text-gray-600 dark:text-gray-400">Fiscal Period ${data.fiscal_period}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            </div>

            <!-- Key Performance Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                ${generateMetricCard("Total Revenue", data.key_financials.revenue.total, "M DKK", 
                    `Organic Growth: ${data.key_financials.revenue.organic_growth}%`)}
                ${generateMetricCard("EBIT", data.key_financials.profitability.EBIT.reported, "M DKK", 
                    `Margin: ${data.key_financials.profitability.EBIT.margin}%`)}
                ${generateMetricCard("Net Profit", data.key_financials.profitability.profit_after_tax.total, "M DKK")}
                ${generateMetricCard("Free Cash Flow", data.key_financials.cash_flow.free_cash_flow, "M DKK")}
            </div>

            <!-- Charts Grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Revenue by Region</h3>
        <div class="h-[400px]">
            <canvas id="demant-revenue-region"></canvas>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Profitability Metrics</h3>
        <div class="h-[400px]">
            <canvas id="demant-profitability"></canvas>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Revenue Breakdown</h3>
        <div class="h-[400px]">
            <canvas id="demant-revenue-details"></canvas>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Organic Growth Analysis</h3>
        <div class="h-[400px]">
            <canvas id="demant-organic-growth"></canvas>
        </div>
    </div>
    </div>
    <!-- R&D and Financial Analysis -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 col-span-1">
        <h3 class="text-lg font-semibold mb-6">R&D Investment Analysis</h3>
        <div class="h-[350px] w-full">
            <canvas id="demant-rnd-analysis"></canvas>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 col-span-1">
        <h3 class="text-lg font-semibold mb-6">Balance Sheet Composition</h3>
        <div class="h-[350px] w-full">
            <canvas id="demant-balance-sheet"></canvas>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 col-span-1">
        <h3 class="text-lg font-semibold mb-6">Cash Flow Analysis</h3>
        <div class="h-[350px] w-full">
            <canvas id="demant-cash-flow"></canvas>
        </div>
    </div>
</div>


            <!-- Detailed Metrics Section -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                ${generateDetailCard("Financial Health", [
                    ["Gross Margin", data.key_financials.profitability.gross_margin + "%"],
                    ["EBITDA Margin", data.key_financials.profitability.EBIT.margin + "%"],
                    ["Net Debt", data.key_financials.balance_sheet.net_interest_bearing_debt + "M DKK"],
                    ["Gearing Multiple", data.key_financials.balance_sheet.gearing_multiple]
                ])}
                
                ${generateDetailCard("Operational Metrics", [
                    ["Total Employees", data.operational_metrics.employees.total],
                    ["R&D Costs", data.operational_metrics.rnd.costs + "M DKK"],
                    ["R&D Growth", data.operational_metrics.rnd.growth + "%"],
                    ["R&D % of Revenue", data.operational_metrics.rnd.percent_of_revenue + "%"]
                ])}
                
                ${generateDetailCard("Sustainability", [
                    ["Scope 1&2 Emissions", data.sustainability_metrics.emissions.scope_1_2_market_based + " tCO2e"],
                    ["Renewable Energy", data.sustainability_metrics.renewable_electricity_share + "%"],
                    ["Women in Management", data.sustainability_metrics.diversity.all_managers_gender_ratio.women + "%"],
                    ["Board Diversity", data.sustainability_metrics.diversity.board_gender_ratio.women + "%"]
                ])}
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">R&D Overview</h3>
        <div class="space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">R&D Investment</span>
                <span class="font-medium">${data.key_financials.profitability.rd_costs.total.toLocaleString()} M DKK</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">% of Revenue</span>
                <span class="font-medium">${data.key_financials.profitability.rd_costs.percent_of_revenue}%</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Growth Rate</span>
                <span class="font-medium">${data.key_financials.profitability.rd_costs.growth}%</span>
            </div>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Balance Sheet Highlights</h3>
        <div class="space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Total Assets</span>
                <span class="font-medium">${data.key_financials.balance_sheet.total_assets.toLocaleString()} M DKK</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Net Working Capital</span>
                <span class="font-medium">${data.key_financials.balance_sheet.working_capital.toLocaleString()} M DKK</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Net Debt</span>
                <span class="font-medium">${data.key_financials.balance_sheet.net_interest_bearing_debt.toLocaleString()} M DKK</span>
            </div>
        </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">Cash Flow Metrics</h3>
        <div class="space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Operating Cash Flow</span>
                <span class="font-medium">${data.key_financials.cash_flow.operating.toLocaleString()} M DKK</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Free Cash Flow</span>
                <span class="font-medium">${data.key_financials.cash_flow.free_cash_flow.toLocaleString()} M DKK</span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-400">Net Investments</span>
                <span class="font-medium">${data.key_financials.cash_flow.net_investments.toLocaleString()} M DKK</span>
            </div>
        </div>
    </div>
</div>


            <!-- Segment Details Table -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
                <h3 class="text-lg font-semibold mb-4">Segment Analysis</h3>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Segment</th>
                                <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Revenue</th>
                                <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Organic Growth</th>
                                <th class="px-6 py-3 bg-gray-50 dark:bg-gray-900 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Q2 Revenue</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            ${generateSegmentTableRows(data.key_financials.revenue.by_segment)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function generateMetricCard(title, value, unit = "", subtitle = "") {
    return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">${title}</h3>
            <p class="mt-2 text-3xl font-semibold">${value.toLocaleString()} ${unit}</p>
            ${subtitle ? `<p class="text-sm text-gray-600 dark:text-gray-400">${subtitle}</p>` : ''}
        </div>
    `;
}

function generateDetailCard(title, items) {
    return `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 class="text-lg font-semibold mb-4">${title}</h3>
            <div class="space-y-3">
                ${items.map(([label, value]) => `
                    <div class="flex justify-between items-center">
                        <span class="text-gray-600 dark:text-gray-400">${label}</span>
                        <span class="font-medium">${value}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateSegmentTableRows(segments) {
    return Object.entries(segments).map(([name, data]) => `
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">${name.replace(/_/g, ' ').toUpperCase()}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">${data.total.toLocaleString()} M DKK</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">${data.organic_growth}%</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">${data.q2_revenue.toLocaleString()} M DKK</td>
        </tr>
    `).join('');
}

function initializeDemantCharts(data) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    // Revenue by Region Chart
    new Chart(document.getElementById('demant-revenue-region').getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(data.key_financials.revenue.by_region)
                .map(region => region.charAt(0) + region.slice(1).toLowerCase()),
            datasets: [{
                data: Object.values(data.key_financials.revenue.by_region)
                    .map(region => region.revenue),
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55', '#FC8181', '#B794F4']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 10,
                    bottom: 10
                }
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: textColor }
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.label}: ${context.raw.toLocaleString()} M DKK (${
                            data.key_financials.revenue.by_region[context.label.toUpperCase()].organic_growth
                        }% organic growth)`
                    }
                }
            }
        }
    });


  // R&D Analysis Chart
new Chart(document.getElementById('demant-rnd-analysis').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['R&D Costs', 'Distribution Costs', 'Admin Expenses'],
        datasets: [{
            label: 'Amount (M DKK)',
            data: [
                data.key_financials.profitability.rd_costs.total,
                data.key_financials.profitability.distribution_costs.total,
                data.key_financials.profitability.administrative_expenses.total
            ],
            backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
        }, {
            label: 'Growth %',
            data: [
                data.key_financials.profitability.rd_costs.growth,
                data.key_financials.profitability.distribution_costs.growth,
                data.key_financials.profitability.administrative_expenses.growth
            ],
            type: 'line',
            borderColor: '#9F7AEA',
            backgroundColor: '#9F7AEA'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 15
            }
        },
        scales: {
            y: {
                type: 'linear',
                position: 'left',
                ticks: {
                    callback: (value) => value.toLocaleString() + ' M DKK'
                }
            },
            y1: {
                type: 'linear',
                position: 'right',
                ticks: {
                    callback: (value) => value + '%'
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
});

// Balance Sheet Composition Chart
new Chart(document.getElementById('demant-balance-sheet').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: [
            'Goodwill',
            'Other Assets',
            'Working Capital',
            'Trade Receivables',
            'Cash'
        ],
        datasets: [{
            data: [
                data.key_financials.balance_sheet.goodwill,
                data.key_financials.balance_sheet.total_assets - 
                    (data.key_financials.balance_sheet.goodwill + 
                     data.key_financials.balance_sheet.working_capital +
                     data.key_financials.balance_sheet.trade_receivables +
                     data.key_financials.balance_sheet.cash),
                data.key_financials.balance_sheet.working_capital,
                data.key_financials.balance_sheet.trade_receivables,
                data.key_financials.balance_sheet.cash
            ],
            backgroundColor: ['#4299E1', '#48BB78', '#F6AD55', '#FC8181', '#9F7AEA']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        layout: {
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 15
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `${context.label}: ${context.raw.toLocaleString()} M DKK (${
                        ((context.raw / data.key_financials.balance_sheet.total_assets) * 100).toFixed(1)
                    }%)`
                }
            }
        }
    }
});

// Replace the Cash Flow Analysis Chart with this version
new Chart(document.getElementById('demant-cash-flow').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Operating', 'Investing', 'Free Cash Flow', 'Financing', 'Net Change'],
        datasets: [{
            label: 'Cash Flow',
            data: [
                data.key_financials.cash_flow.operating,
                data.key_financials.cash_flow.investing,
                data.key_financials.cash_flow.free_cash_flow,
                data.key_financials.cash_flow.financing,
                data.key_financials.cash_flow.operating + 
                data.key_financials.cash_flow.investing + 
                data.key_financials.cash_flow.financing
            ],
            backgroundColor: (context) => {
                const value = context.dataset.data[context.dataIndex];
                return value >= 0 ? '#48BB78' : '#FC8181';
            }
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 15
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => value.toLocaleString() + ' M DKK'
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${context.raw.toLocaleString()} M DKK`
                }
            },
            legend: {
                display: false
            }
        }
    }
});

    new Chart(document.getElementById('demant-revenue-details').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Total Revenue', 'External Sales', 'Internal Sales'],
            datasets: [{
                label: 'Revenue (M DKK)',
                data: [
                    data.key_financials.revenue.total,
                    data.key_financials.revenue.by_segment.hearing_aids.external_sales,
                    data.key_financials.revenue.by_segment.hearing_aids.internal_sales
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            // responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.raw.toLocaleString()} M DKK`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (value) => value.toLocaleString() + ' M DKK'
                    }
                }
            }
        }
    });
    
    // Organic Growth Comparison Chart
    new Chart(document.getElementById('demant-organic-growth').getContext('2d'), {
        type: 'radar',
        data: {
            labels: ['Hearing Aids', 'Hearing Care', 'Diagnostics', 'Overall'],
            datasets: [{
                label: 'Organic Growth %',
                data: [
                    data.key_financials.revenue.by_segment.hearing_aids.organic_growth,
                    data.key_financials.revenue.by_segment.hearing_care.organic_growth,
                    data.key_financials.revenue.by_segment.diagnostics.organic_growth,
                    data.key_financials.revenue.organic_growth
                ],
                backgroundColor: 'rgba(66, 153, 225, 0.2)',
                borderColor: '#4299E1',
                pointBackgroundColor: '#4299E1',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4299E1'
            }, {
                label: 'Q2 Organic Growth %',
                data: [
                    data.key_financials.revenue.by_segment.hearing_aids.q2_organic_growth,
                    data.key_financials.revenue.by_segment.hearing_care.q2_organic_growth,
                    data.key_financials.revenue.by_segment.diagnostics.q2_organic_growth,
                    data.key_financials.revenue.organic_growth
                ],
                backgroundColor: 'rgba(72, 187, 120, 0.2)',
                borderColor: '#48BB78',
                pointBackgroundColor: '#48BB78',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#48BB78'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 10,
                    bottom: 10
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: Math.max(
                        ...Object.values(data.key_financials.revenue.by_segment)
                            .map(segment => Math.max(segment.organic_growth, segment.q2_organic_growth || 0))
                    ) + 2,
                    ticks: {
                        callback: (value) => value + '%'
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.dataset.label}: ${context.raw}%`
                    }
                }
            }
        }
    });

    // Profitability Metrics Chart
    new Chart(document.getElementById('demant-profitability').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Gross Margin', 'EBITDA Margin', 'EBIT Margin'],
            datasets: [{
                label: 'Margin %',
                data: [
                    data.key_financials.profitability.gross_margin,
                    data.key_financials.profitability.EBITDA.margin,
                    data.key_financials.profitability.EBIT.margin
                ],
                backgroundColor: ['#4299E1', '#48BB78', '#F6AD55']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            layout: {
                padding: {
                    left: 10,
                    right: 20,
                    top: 10,
                    bottom: 10
                }
            },
                        scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColor,
                        callback: value => value + '%'
                    },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}


// I'll continue with the GN implementation and chart initializations in the next section. Would you like me to proceed?

// Utility functions
// function formatCurrency(value) {
//     return new Intl.NumberFormat('en-US', {
//         style: 'currency',
//         currency: 'EUR',
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 0
//     }).format(value);
// }

// function formatPercentage(value) {
//     return `${value.toFixed(1)}%`;
// }

// Export functions
export {
    generateWSADashboard,
    generateGNDashboard,
    initializeWSACharts,
    initializeGNCharts
};
// Call it like this:


// Export functions for external use
export {
    initializeFinancialDashboard,
    refreshDashboard,
    downloadDashboardData,
    downloadChartImage,
    formatCurrency,
    formatPercentage,
    formatNumber
};

// Initialize on page load if companyName is available
document.addEventListener('DOMContentLoaded', () => {
    if (window.companyName) {
        initializeFinancialDashboard(window.companyName);
    }
});

// Handle visibility change to refresh data when tab becomes visible
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        checkRefreshData();
    }
});

// Export the main dashboard object
export default {
    initialize: initializeFinancialDashboard,
    refresh: refreshDashboard,
    download: {
        data: downloadDashboardData,
        chart: downloadChartImage
    },
    format: {
        currency: formatCurrency,
        percentage: formatPercentage,
        number: formatNumber
    }
};
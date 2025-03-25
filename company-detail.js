// Import company data
import gnData from './data/Gn/finance.js';
import sonovaData from './data/Sonova/finance.js';
import wsData from './data/Ws/finance.js';
import DemantData from './data/Demant/finance.js'
// import NeuroPace from './data/NeuroPace/finance.js'

const  NeuroPace =
{
    "company": {
      "name": "NeuroPace, Inc.",
      "focus": "Brain-responsive neuromodulation for drug-resistant focal epilepsy",
      "product": "RNS System",
      "target_population": "Approximately 1 million U.S. patients with drug-resistant epilepsy, focusing on focal onset seizures",
      "sales_channel": "Level 4 Comprehensive Epilepsy Centers (CECs)"
    },
    "financials": {
      "full_year_revenue": {
        "2024": {
          "total": 76000000,
          "growth_rate": "16.2%",
          "compared_to": 65424000
        },
        "2023": {
          "total": 65424000,
          "growth_rate": "43.6%",
          "compared_to": 45516000
        },
        "2022": {
          "total": 45516000,
          "growth_rate": "0.7%",
          "compared_to": 45205000
        },
        "2021": {
          "total": 45205000,
          "growth_rate": "10.0%",
          "compared_to": 41137000
        }
      },
      "q4_revenue": {
        "2024": {
          "total": 20000000,
          "growth_rate": "14.3%",
          "compared_to": 17500000,
          "breakdown": {
            "initial_implants": {
              "amount": 17500000,
              "growth_rate": "16.7%",
              "compared_to": 15000000
            },
            "replacement_implants": {
              "amount": 2500000,
              "growth_rate": "0%",
              "compared_to": 2500000
            }
          }
        },
        "2023": {
          "total": 17500000,
          "growth_rate": "23.2%",
          "compared_to": 14200000,
          "breakdown": {
            "initial_implants": {
              "amount": 15000000
            },
            "replacement_implants": {
              "amount": 2500000
            }
          }
        },
        "2022": {
          "total": 14200000,
          "growth_rate": "29.1%",
          "compared_to": 11000000
        }
      },
      "revenue_guidance_2025": {
        "range": {
          "min": 87000000,
          "max": 91000000
        },
        "growth_rate": "14.5% to 19.7%",
        "compared_to": 76000000
      },
      "gross_margin": {
        "2024": "73.6%",
        "q4_2024": "73.7%",
        "2023": "73.8%",
        "2022": "72.0%"
      },
      "operating_expenses": {
        "2024": 80800000,
        "q4_2024": 20900000,
        "2023": 74900000
      },
      "r_and_d_expenses": {
        "2024": 34800000,
        "q4_2024": 8800000,
        "2023": 32700000,
        "2022": 31900000
      },
      "net_loss": {
        "2024": 27600000,
        "q4_2024": 6700000,
        "2023": 32957000,
        "2022": 47083000
      },
      "cash_position": {
        "dec_31_2024": 141900000
      }
    },
    "sales_data": {
      "revenue_composition_q4_2024": {
        "initial_implants": {
          "amount": 17500000,
          "percentage_of_total": "87.5%"
        },
        "replacement_implants": {
          "amount": 2500000,
          "percentage_of_total": "12.5%"
        }
      },
      "revenue_composition_q4_2023": {
        "initial_implants": {
          "amount": 15000000,
          "percentage_of_total": "85.7%"
        },
        "replacement_implants": {
          "amount": 2500000,
          "percentage_of_total": "14.3%"
        }
      },
      "sales_growth_drivers": [
        "Increased adoption at Level 4 CECs",
        "Expansion of commercial sales team in 2024",
        "Enhanced clinician education and patient referral programs"
      ]
    },
    "growth_metrics": {
      "annual_growth_rates": {
        "2024_vs_2023": "16.2%",
        "2023_vs_2022": "43.6%",
        "2022_vs_2021": "0.7%"
      },
      "q4_growth_rates": {
        "2024_vs_2023": "14.3%",
        "2023_vs_2022": "23.2%"
      },
      "clinical_growth_indicator": {
        "study": "Post-approval study",
        "result": "82% median reduction in seizure frequency over 3 years",
        "presentation_date": "April 7, 2025",
        "event": "American Academy of Neurology (AAN) meeting"
      }
    },
    "additional_insights": {
      "q3_2024_revenue": {
        "total": 19400000,
        "growth_rate": "13.5%",
        "compared_to": 17100000
      },
      "cumulative_q1_q3_2024_revenue": {
        "total": 56000000,
        "growth_rate": "16.9%",
        "compared_to": 47900000
      },
      "market_opportunity": "Approximately 575,000 U.S. patients with drug-resistant focal epilepsy",
      "device_longevity": "Average battery life of RNS System ~11 years"
    }
  }

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


const formatNumber = (value) => {
    if (typeof value !== 'number' || isNaN(value)) return '-';
    return value.toLocaleString();
};



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
                // initializeSonovaCharts(data);
                break;
                
            case 'Ws':
                initializeWSACharts(data);
                break;

                case 'Livanova':
                  // initLivaNovaCharts(data);
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


// // Helper functions for formatting
// function formatCurrency(value, decimals = 0) {
//     if (value >= 1000000000) {
//       return '$' + (value / 1000000000).toFixed(decimals) + 'B';
//     } else if (value >= 1000000) {
//       return '$' + (value / 1000000).toFixed(decimals) + 'M';
//     } else if (value >= 1000) {
//       return '$' + (value / 1000).toFixed(decimals) + 'K';
//     }
//     return '$' + value.toFixed(decimals);
//   }
  
//   function formatPercentage(value, decimals = 1) {
//     return value > 0 ? '+' + value.toFixed(decimals) + '%' : value.toFixed(decimals) + '%';
//   }
  
//   function getGrowthColor(value) {
//     return value >= 0 ? 'text-green-500' : 'text-red-500';
//   }
  
//   // LivaNova Dashboard Function
//   function generateLivaNovaDashboard() {
//     return `
//       <div class="container mx-auto px-4 py-8 dark:text-white">
//         <!-- Company Header -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
//           <div class="flex justify-between items-start">
//             <div>
//               <h1 class="text-3xl font-bold mb-2">LivaNova PLC</h1>
//               <p class="text-gray-600 dark:text-gray-400">Neuromodulation Segment Analysis</p>
//               <p class="text-sm text-gray-600 dark:text-gray-400">Data as of March 24, 2025</p>
//             </div>
//             <div class="text-right">
//               <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
//                 Medical Devices
//               </span>
//             </div>
//           </div>
//         </div>
  
//         <!-- Primary KPIs -->
//         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Neuromodulation Revenue (2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">$554,223,000</p>
//             <p class="text-sm text-green-600 dark:text-green-400">
//               +6.6% vs 2023
//             </p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Segment Income (2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">$195,309,000</p>
//             <p class="text-sm text-green-600 dark:text-green-400">
//               +27.3% vs 2023
//             </p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">U.S. Revenue (2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">$441,022,000</p>
//             <p class="text-sm text-green-600 dark:text-green-400">
//               +8.2% vs 2023
//             </p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">R&D Expenses (2024)</h3>
//             <p class="mt-2 text-3xl font-semibold">$121,029,000</p>
//             <p class="text-sm text-red-600 dark:text-red-400">
//               -14.1% vs 2023
//             </p>
//           </div>
//         </div>
  
//         <!-- Products Section -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
//           <h2 class="text-lg font-medium mb-4">VNS Therapy Products</h2>
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <ul class="space-y-3">
//               <li class="flex items-start">
//                 <span class="flex-shrink-0 h-5 w-5 text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                   </svg>
//                 </span>
//                 <div class="ml-3">
//                   <p class="font-medium">Demipulse (Model 103)</p>
//                 </div>
//               </li>
//               <li class="flex items-start">
//                 <span class="flex-shrink-0 h-5 w-5 text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                   </svg>
//                 </span>
//                 <div class="ml-3">
//                   <p class="font-medium">AspireSR (Model 106)</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">Closed loop stimulation (AutoStim), Expanded MRI access</p>
//                 </div>
//               </li>
//             </ul>
//             <ul class="space-y-3">
//               <li class="flex items-start">
//                 <span class="flex-shrink-0 h-5 w-5 text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                   </svg>
//                 </span>
//                 <div class="ml-3">
//                   <p class="font-medium">SenTiva (Model 1000)</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">Smallest and lightest VNS device, Responsive therapy, Scheduled Programming, Day & Night Programming, Expanded MRI access</p>
//                 </div>
//               </li>
//               <li class="flex items-start">
//                 <span class="flex-shrink-0 h-5 w-5 text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                     <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
//                   </svg>
//                 </span>
//                 <div class="ml-3">
//                   <p class="font-medium">SenTiva Duo (Model 1000D)</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
  
//         <!-- Epilepsy Treatment & VNS Advantages -->
//         <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//             <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//               <h2 class="text-lg font-medium">Epilepsy Treatment Options</h2>
//             </div>
//             <div class="p-4">
//               <ul class="space-y-2">
//                 <li class="flex items-center">
//                   <span class="mr-2 text-blue-500">●</span>
//                   <span>Multiple ASMs (Anti-Seizure Medications)</span>
//                 </li>
//                 <li class="flex items-center">
//                   <span class="mr-2 text-blue-500">●</span>
//                   <span>Various forms of ketogenic diet</span>
//                 </li>
//                 <li class="flex items-center">
//                   <span class="mr-2 text-blue-500">●</span>
//                   <span>VNS (Vagus Nerve Stimulation)</span>
//                 </li>
//                 <li class="flex items-center">
//                   <span class="mr-2 text-blue-500">●</span>
//                   <span>Resective and ablative brain surgery</span>
//                 </li>
//                 <li class="flex items-center">
//                   <span class="mr-2 text-blue-500">●</span>
//                   <span>Intracranial neurostimulation</span>
//                 </li>
//               </ul>
              
//               <div class="mt-4 p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded">
//                 <p class="text-sm text-gray-800 dark:text-gray-200">ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.</p>
//               </div>
//             </div>
//           </div>
  
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//             <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//               <h2 class="text-lg font-medium">VNS Therapy Advantages</h2>
//             </div>
//             <div class="p-4">
//               <ul class="space-y-2">
//                 <li class="flex items-start">
//                   <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
//                     <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span class="text-sm">First medical device treatment approved by FDA for DRE in 1997</span>
//                 </li>
//                 <li class="flex items-start">
//                   <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
//                     <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span class="text-sm">Only neuromodulation device approved in US for DRE patients as young as four years</span>
//                 </li>
//                 <li class="flex items-start">
//                   <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
//                     <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span class="text-sm">Many worldwide regulatory bodies approved without age or seizure-type restrictions</span>
//                 </li>
//                 <li class="flex items-start">
//                   <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
//                     <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span class="text-sm">Journal of Neurology (January 2022) meta-analysis demonstrated VNS Therapy benefits in adults with DRE</span>
//                 </li>
//                 <li class="flex items-start">
//                   <span class="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-500 mr-3 flex-shrink-0">
//                     <svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
//                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
//                     </svg>
//                   </span>
//                   <span class="text-sm">Improved seizure frequency without increased serious adverse events or discontinuations</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
  
//         <!-- Business Insights and Market Position -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
//           <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//             <h2 class="text-lg font-medium">Business Insights & Market Position</h2>
//           </div>
//           <div class="p-4">
//             <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded">
//                 <h3 class="font-medium text-blue-600 dark:text-blue-400 mb-2">Market Position</h3>
//                 <p class="text-sm">First medical device approved by FDA for treatment of DRE in 1997. Only neuromodulation device approved in US for DRE patients as young as four years.</p>
//               </div>
//               <div class="bg-green-50 dark:bg-green-900 dark:bg-opacity-20 p-4 rounded">
//                 <h3 class="font-medium text-green-600 dark:text-green-400 mb-2">Growth Drivers</h3>
//                 <p class="text-sm">Strong growth in the US market (8.2% in 2024), supported by CMS expanded reimbursement for VNS Therapy in treating Dravet Syndrome (2020) and Lennox-Gastaut Syndrome (2022).</p>
//               </div>
//               <div class="bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20 p-4 rounded">
//                 <h3 class="font-medium text-purple-600 dark:text-purple-400 mb-2">Future Outlook</h3>
//                 <p class="text-sm">Continued R&D investment in enhanced pulse generators, leads, and programming software. Recent peer-reviewed evidence confirms safety, efficacy, and cost-effectiveness across patient populations.</p>
//               </div>
//             </div>
  
//             <div class="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded">
//               <h3 class="font-medium mb-2">Key Segment Developments (2024)</h3>
//               <ul class="space-y-2 text-sm list-disc pl-5">
//                 <li>Segment income increased to $195.3 million from $153.4 million in 2023 (+27.3%)</li>
//                 <li>Strong growth across all geographic regions, with US market leading at 8.2% growth</li>
//                 <li>R&D expense decreased due to winding down of the heart failure program</li>
//                 <li>Capital expenditures increased to $4.24 million from $1.20 million in 2023</li>
//               </ul>
//             </div>
//           </div>
//         </div>
  
//         <!-- Regional Performance -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
//           <div class="p-4 border-b border-gray-200 dark:border-gray-700">
//             <h2 class="text-lg font-medium">Regional Performance (2022-2024)</h2>
//           </div>
//           <div class="p-4 overflow-x-auto">
//             <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//               <thead>
//                 <tr>
//                   <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Region</th>
//                   <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2022</th>
//                   <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2023</th>
//                   <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">2024</th>
//                   <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth (2024 vs 2023)</th>
//                   <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Growth (2023 vs 2022)</th>
//                 </tr>
//               </thead>
//               <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
//                 <tr>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">United States</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$374,542,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$407,493,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$441,022,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
//                     +8.2%
//                   </td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
//                     +8.8%
//                   </td>
//                 </tr>
//                 <tr>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Europe</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$50,291,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$57,435,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$54,899,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-red-600">
//                     -4.4%
//                   </td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
//                     +14.2%
//                   </td>
//                 </tr>
//                 <tr>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Rest of World</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$52,160,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$54,782,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right">$58,302,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
//                     +6.4%
//                   </td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-green-600">
//                     +5.0%
//                   </td>
//                 </tr>
//                 <tr class="bg-gray-50 dark:bg-gray-700">
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">Total</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$476,993,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$519,710,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">$554,223,000</td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-green-600">
//                     +6.6%
//                   </td>
//                   <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-green-600">
//                     +9.0%
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     `;
//   }

// function generateMedtronicDashboard(data) {

//   // Create dashboard HTML structure
//   return `
//     <div class="medtronic-dashboard">
//       <header class="mb-8">
//         <h1 class="text-3xl font-bold text-gray-800">Epilepsy Neuromodulation Medicare Dashboard</h1>
//         <p class="text-gray-600">Based on Medtronic SEC Filing Q3 FY2025 - Data as of January 24, 2025</p>
//       </header>

//       <!-- Key Stats Row -->
//       <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
//         <div class="bg-white rounded-lg shadow-md p-4">
//           <p class="text-sm text-gray-600">Neuromodulation Revenue (Q3)</p>
//           <p class="text-2xl font-bold text-blue-700">$${data.marketOverview.quarterlyRevenue.value}M</p>
//           <p class="text-sm font-medium text-green-600">↑ ${data.marketOverview.growth.quarterly.value}% YoY</p>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-4">
//           <p class="text-sm text-gray-600">Nine-Month Revenue</p>
//           <p class="text-2xl font-bold text-blue-700">$${(data.marketOverview.totalMarketSize.value/1000).toFixed(2)}B</p>
//           <p class="text-sm font-medium text-green-600">↑ ${data.marketOverview.growth.yearToDate.value}% YoY</p>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-4">
//           <p class="text-sm text-gray-600">Epilepsy Market Share</p>
//           <p class="text-2xl font-bold text-blue-700">${data.marketOverview.epilepsyMarketShare.value}%</p>
//           <p class="text-sm text-gray-600">of Neuromodulation Segment</p>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-4">
//           <p class="text-sm text-gray-600">Medicare Reimbursement (DBS)</p>
//           <p class="text-2xl font-bold text-blue-700">$${Math.round(data.medicareReimbursement.dbs.implantation.total).toLocaleString()}</p>
//           <p class="text-sm font-medium text-red-600">↓ ${data.medicareReimbursement.yearOverYearChanges.implantation}% YoY</p>
//         </div>
//       </div>

//       <!-- Charts Row -->
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Quarterly Revenue Trend</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="revenueChart"></canvas>
//           </div>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Growth Rate Trend</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="growthChart"></canvas>
//           </div>
//         </div>
//       </div>

//       <!-- Second Charts Row -->
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Market by Patient Segment</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="patientSegmentChart"></canvas>
//           </div>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Competitive Landscape</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="competitiveChart"></canvas>
//           </div>
//         </div>
//       </div>

//       <!-- Third Charts Row -->
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Market by Payer</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="payerChart"></canvas>
//           </div>
//         </div>
//         <div class="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 class="text-lg font-semibold text-gray-800 mb-4">Regional Market Distribution</h2>
//           <div style="position: relative; height: 300px; width: 100%;">
//             <canvas id="regionChart"></canvas>
//           </div>
//         </div>
//       </div>

//       <!-- Medicare Reimbursement Table -->
//       <div class="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 class="text-lg font-semibold text-gray-800 mb-4">Medicare Reimbursement Details for Epilepsy Neuromodulation</h2>
//         <div class="overflow-x-auto">
//           <table class="min-w-full">
//             <thead>
//               <tr>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Procedure</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">CPT Code</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Description</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Professional Fee</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Device Payment</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Total Payment</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">YoY Change</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">DBS Implantation</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.implantation.cptCode}</span></td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.implantation.description}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.facility.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.device.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.implantation.total.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-red-600">${data.medicareReimbursement.yearOverYearChanges.implantation}%</td>
//               </tr>
//               <tr>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">Brain Neurostimulator Programming</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.programming.cptCode}</span></td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.programming.description}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.programming.payment.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">N/A</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.programming.payment.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-red-600">${data.medicareReimbursement.yearOverYearChanges.programming}%</td>
//               </tr>
//               <tr>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">Electronic Analysis</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700"><span class="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">${data.medicareReimbursement.dbs.analysis.cptCode}</span></td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">${data.medicareReimbursement.dbs.analysis.description}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.analysis.payment.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">N/A</td>
//                 <td class="px-4 py-2 border-t text-sm text-gray-700">$${data.medicareReimbursement.dbs.analysis.payment.toFixed(2)}</td>
//                 <td class="px-4 py-2 border-t text-sm text-green-600">+${data.medicareReimbursement.yearOverYearChanges.analysis}%</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <!-- Epilepsy Products Portfolio -->
//       <div class="bg-white rounded-lg shadow-md p-6 mb-8">
//         <h2 class="text-lg font-semibold text-gray-800 mb-4">Epilepsy Neuromodulation Product Portfolio</h2>
//         <div class="overflow-x-auto">
//           <table class="min-w-full">
//             <thead>
//               <tr>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Product</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Type</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Approval Status</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Key Features</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Market Share</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Launch Year</th>
//                 <th class="px-4 py-2 text-left bg-gray-100 text-gray-600 text-sm font-medium">Medicare Code</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${data.epilepsyProducts.currentPortfolio.map(product => `
//                 <tr>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.name}</td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.type}</td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">
//                     <span class="px-2 py-1 rounded-full text-xs font-semibold 
//                       ${product.approvalStatus.includes('FDA') ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}">
//                       ${product.approvalStatus}
//                     </span>
//                   </td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.features.slice(0, 2).join(", ")}</td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.marketShare}%</td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.launchYear}</td>
//                   <td class="px-4 py-2 border-t text-sm text-gray-700">${product.medicareCode}</td>
//                 </tr>
//               `).join('')}
//             </tbody>
//           </table>
//         </div>
//         ${data.epilepsyProducts.currentPortfolio.some(p => p.notes) ? 
//           `<p class="mt-4 text-sm text-gray-600 italic">Note: BrainSense Adaptive DBS received CE Mark in January 2025, FDA approval pending</p>` : 
//           ''}
//       </div>
//     </div>
//   `;

//   // Initialize the charts
 
// }


// function initMedtronicCharts(data) {
//   // Chart 1: Revenue Trend
//   const revenueCtx = document.getElementById('revenueChart').getContext('2d');
//   new Chart(revenueCtx, {
//     type: 'line',
//     data: {
//       labels: data.quarterlyPerformance.map(q => q.quarter),
//       datasets: [{
//         label: 'Quarterly Revenue ($M)',
//         data: data.quarterlyPerformance.map(q => q.revenue),
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 2,
//         tension: 0.4,
//         pointRadius: 4,
//         pointBackgroundColor: 'rgba(54, 162, 235, 1)'
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: false,
//           title: {
//             display: true,
//             text: 'Revenue (Million USD)'
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return `Revenue: $${context.raw}M`;
//             }
//           }
//         },
//         legend: {
//           position: 'top'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });

//   // Chart 2: Growth Rate Trend
//   const growthCtx = document.getElementById('growthChart').getContext('2d');
//   new Chart(growthCtx, {
//     type: 'bar',
//     data: {
//       labels: data.quarterlyPerformance.map(q => q.quarter),
//       datasets: [{
//         label: 'Growth Rate (%)',
//         data: data.quarterlyPerformance.map(q => q.growthRate),
//         backgroundColor: data.quarterlyPerformance.map(q => 
//           q.growthRate >= 8 ? 'rgba(52, 211, 153, 0.7)' : 
//           q.growthRate >= 5 ? 'rgba(96, 165, 250, 0.7)' : 
//           'rgba(251, 191, 36, 0.7)'
//         ),
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: 'Growth Rate (%)'
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return `Growth Rate: ${context.raw}%`;
//             }
//           }
//         },
//         legend: {
//           position: 'top'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });

//   // Chart 3: Patient Segment
//   const patientSegmentCtx = document.getElementById('patientSegmentChart').getContext('2d');
//   new Chart(patientSegmentCtx, {
//     type: 'pie',
//     data: {
//       labels: data.epilepsyMarketSegmentation.byPatientSegment.map(s => s.segment),
//       datasets: [{
//         data: data.epilepsyMarketSegmentation.byPatientSegment.map(s => s.share),
//         backgroundColor: [
//           'rgba(52, 211, 153, 0.7)', 
//           'rgba(96, 165, 250, 0.7)',
//           'rgba(249, 115, 22, 0.7)'
//         ],
//         borderColor: [
//           'rgba(52, 211, 153, 1)',
//           'rgba(96, 165, 250, 1)',
//           'rgba(249, 115, 22, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const segment = data.epilepsyMarketSegmentation.byPatientSegment[context.dataIndex];
//               return [
//                 `${segment.segment}: ${segment.share}%`,
//                 `Growth Rate: ${segment.growthRate}%`
//               ];
//             }
//           }
//         },
//         legend: {
//           position: 'right'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });

//   // Chart 4: Competitive Landscape
//   const competitiveCtx = document.getElementById('competitiveChart').getContext('2d');
//   new Chart(competitiveCtx, {
//     type: 'bar',
//     data: {
//       labels: data.competitiveLandscape.keyCompetitors.map(c => c.name),
//       datasets: [
//         {
//           label: 'Market Share (%)',
//           data: data.competitiveLandscape.keyCompetitors.map(c => c.marketShare),
//           backgroundColor: 'rgba(59, 130, 246, 0.7)',
//           borderColor: 'rgba(59, 130, 246, 1)',
//           borderWidth: 1,
//           order: 1
//         },
//         {
//           label: 'Growth Rate (%)',
//           data: data.competitiveLandscape.keyCompetitors.map(c => c.growthRate),
//           backgroundColor: 'rgba(251, 191, 36, 0.7)',
//           borderColor: 'rgba(251, 191, 36, 1)',
//           borderWidth: 1,
//           type: 'line',
//           order: 0,
//           yAxisID: 'y1'
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: 'Market Share (%)'
//           }
//         },
//         y1: {
//           position: 'right',
//           beginAtZero: true,
//           grid: {
//             drawOnChartArea: false
//           },
//           title: {
//             display: true,
//             text: 'Growth Rate (%)'
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const metric = context.dataset.label;
//               return `${metric}: ${context.raw}%`;
//             }
//           }
//         },
//         legend: {
//           position: 'top'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });

//   // Chart 5: Payer Distribution
//   const payerCtx = document.getElementById('payerChart').getContext('2d');
//   new Chart(payerCtx, {
//     type: 'doughnut',
//     data: {
//       labels: data.epilepsyMarketSegmentation.byPayerType.map(p => p.payer),
//       datasets: [{
//         data: data.epilepsyMarketSegmentation.byPayerType.map(p => p.share),
//         backgroundColor: [
//           'rgba(59, 130, 246, 0.7)',
//           'rgba(16, 185, 129, 0.7)',
//           'rgba(249, 115, 22, 0.7)',
//           'rgba(107, 114, 128, 0.7)'
//         ],
//         borderColor: [
//           'rgba(59, 130, 246, 1)',
//           'rgba(16, 185, 129, 1)',
//           'rgba(249, 115, 22, 1)',
//           'rgba(107, 114, 128, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const payer = data.epilepsyMarketSegmentation.byPayerType[context.dataIndex];
//               return [
//                 `${payer.payer}: ${payer.share}%`,
//                 `Growth Rate: ${payer.growthRate}%`
//               ];
//             }
//           }
//         },
//         legend: {
//           position: 'right'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });

//   // Chart 6: Regional Distribution
//   const regionCtx = document.getElementById('regionChart').getContext('2d');
//   new Chart(regionCtx, {
//     type: 'bar',
//     data: {
//       labels: data.epilepsyMarketSegmentation.byRegion.map(r => r.region),
//       datasets: [
//         {
//           label: 'Market Share (%)',
//           data: data.epilepsyMarketSegmentation.byRegion.map(r => r.share),
//           backgroundColor: 'rgba(139, 92, 246, 0.7)',
//           borderColor: 'rgba(139, 92, 246, 1)',
//           borderWidth: 1
//         },
//         {
//           label: 'Growth Rate (%)',
//           data: data.epilepsyMarketSegmentation.byRegion.map(r => r.growth),
//           backgroundColor: 'rgba(236, 72, 153, 0.7)',
//           borderColor: 'rgba(236, 72, 153, 1)',
//           borderWidth: 1,
//           type: 'line',
//           yAxisID: 'y1'
//         }
//       ]
//     },
//     options: {
//       indexAxis: 'y',
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         x: {
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: 'Market Share (%)'
//           }
//         },
//         y1: {
//           position: 'right',
//           beginAtZero: true,
//           grid: {
//             drawOnChartArea: false
//           },
//           title: {
//             display: true,
//             text: 'Growth Rate (%)'
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const metric = context.dataset.label;
//               return `${metric}: ${context.raw}%`;
//             }
//           }
//         },
//         legend: {
//           position: 'top'
//         },
//         title: {
//           display: false
//         }
//       }
//     }
//   });
// }

// // Function to initialize charts for LivaNova
// function initLivaNovaDashboardCharts(data) {
//   // Revenue by Region Chart
//   const revenueByRegionCtx = document.getElementById('livanova-revenue-by-region').getContext('2d');
//   new Chart(revenueByRegionCtx, {
//     type: 'bar',
//     data: {
//       labels: ['2022', '2023', '2024'],
//       datasets: [
//         {
//           label: 'United States',
//           data: [374542, 407493, 441022],
//           backgroundColor: 'rgba(59, 130, 246, 0.8)',
//           borderColor: 'rgba(59, 130, 246, 1)',
//           borderWidth: 1
//         },
//         {
//           label: 'Europe',
//           data: [50291, 57435, 54899],
//           backgroundColor: 'rgba(16, 185, 129, 0.8)',
//           borderColor: 'rgba(16, 185, 129, 1)',
//           borderWidth: 1
//         },
//         {
//           label: 'Rest of World',
//           data: [52160, 54782, 58302],
//           backgroundColor: 'rgba(249, 115, 22, 0.8)',
//           borderColor: 'rgba(249, 115, 22, 1)',
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         x: {
//           stacked: false,
//         },
//         y: {
//           stacked: false,
//           beginAtZero: true,
//           ticks: {
//             callback: function(value) {
//               return '$' + (value / 1000) + 'k';
//             }
//           }
//         }
//       }
//     }
//   });

//   // Expenses Chart
//   const expensesCtx = document.getElementById('livanova-expenses').getContext('2d');
//   new Chart(expensesCtx, {
//     type: 'pie',
//     data: {
//       labels: ['Cost of Sales', 'SG&A', 'R&D'],
//       datasets: [{
//         data: [50236, 187649, 121029],
//         backgroundColor: [
//           'rgba(59, 130, 246, 0.8)',
//           'rgba(16, 185, 129, 0.8)',
//           'rgba(249, 115, 22, 0.8)'
//         ],
//         borderColor: [
//           'rgba(59, 130, 246, 1)',
//           'rgba(16, 185, 129, 1)',
//           'rgba(249, 115, 22, 1)'
//         ],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const value = context.raw;
//               const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
//               const percentage = ((value / total) * 100).toFixed(1);
//               return `$${(value / 1000).toFixed(0)}k (${percentage}%)`;
//             }
//           }
//         }
//       }
//     }
//   });

//   // Performance Trend Chart
//   const performanceTrendCtx = document.getElementById('livanova-performance-trend').getContext('2d');
//   new Chart(performanceTrendCtx, {
//     type: 'line',
//     data: {
//       labels: ['2022', '2023', '2024'],
//       datasets: [
//         {
//           label: 'Revenue Growth (%)',
//           data: [null, 9.0, 6.6],
//           borderColor: 'rgba(59, 130, 246, 1)',
//           backgroundColor: 'rgba(59, 130, 246, 0.1)',
//           yAxisID: 'y',
//           tension: 0.3,
//           fill: false
//         },
//         {
//           label: 'Segment Income Growth (%)',
//           data: [null, -11.2, 27.3],
//           borderColor: 'rgba(16, 185, 129, 1)',
//           backgroundColor: 'rgba(16, 185, 129, 0.1)',
//           yAxisID: 'y',
//           tension: 0.3,
//           fill: false
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           beginAtZero: false,
//           ticks: {
//             callback: function(value) {
//               return value + '%';
//             }
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return `${context.dataset.label}: ${context.raw}%`;
//             }
//           }
//         }
//       }
//     }
//   });

//   // Revenue & Income Analysis Chart
//   const revenueIncomeCtx = document.getElementById('livanova-revenue-income').getContext('2d');
//   new Chart(revenueIncomeCtx, {
//     type: 'bar',
//     data: {
//       labels: ['2022', '2023', '2024'],
//       datasets: [
//         {
//           label: 'Total Revenue',
//           data: [476993, 519710, 554223],
//           backgroundColor: 'rgba(59, 130, 246, 0.8)',
//           borderColor: 'rgba(59, 130, 246, 1)',
//           borderWidth: 1,
//           yAxisID: 'y',
//           order: 2
//         },
//         {
//           label: 'Segment Income',
//           data: [172775, 153384, 195309],
//           backgroundColor: 'rgba(16, 185, 129, 0.8)',
//           borderColor: 'rgba(16, 185, 129, 1)',
//           borderWidth: 1,
//           yAxisID: 'y',
//           order: 1
//         },
//         {
//           label: 'Profit Margin (%)',
//           data: [36.2, 29.5, 35.2],
//           type: 'line',
//           fill: false,
//           borderColor: 'rgba(249, 115, 22, 1)',
//           backgroundColor: 'rgba(249, 115, 22, 0.1)',
//           borderWidth: 2,
//           tension: 0.4,
//           pointStyle: 'circle',
//           pointRadius: 5,
//           pointHoverRadius: 8,
//           yAxisID: 'y1',
//           order: 0
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       scales: {
//         y: {
//           type: 'linear',
//           position: 'left',
//           beginAtZero: true,
//           title: {
//             display: true,
//             text: 'USD ($)'
//           },
//           ticks: {
//             callback: function(value) {
//               return '$' + (value / 1000) + 'k';
//             }
//           }
//         },
//         y1: {
//           type: 'linear',
//           position: 'right',
//           beginAtZero: true,
//           max: 50,
//           title: {
//             display: true,
//             text: 'Profit Margin (%)'
//           },
//           ticks: {
//             callback: function(value) {
//               return value + '%';
//             }
//           },
//           grid: {
//             drawOnChartArea: false
//           }
//         }
//       },
//       plugins: {
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               if (context.dataset.label === 'Profit Margin (%)') {
//                 return `${context.dataset.label}: ${context.raw}%`;
//               } else {
//                 return `${context.dataset.label}: $${context.raw.toLocaleString()}`;
//               }
//             }
//           }
//         }
//       }
//     }
//   });
// }

// // Function to initialize charts for Medtronic
// function initializeMedtronicCharts(data) {
//   // Set up chart options based on dark/light mode
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#e5e7eb' : '#374151';
//   const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
  
//   // 1. Growth Analysis Chart
//   new Chart(document.getElementById('medtronic-growth-analysis').getContext('2d'), {
//     type: 'bar',
//     data: {
//       labels: ['Three Months', 'Nine Months'],
//       datasets: [
//         {
//           label: 'Growth Rate (%)',
//           data: [
//             data.segments[0].financialData.revenue.threeMonths.growth.percentage,
//             data.segments[0].financialData.revenue.nineMonths.growth.percentage
//           ],
//           backgroundColor: ['#8b5cf6', '#ec4899'] // purple-500, pink-500
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           display: false
//         },
//         title: {
//           display: true,
//           text: 'Growth Rate Comparison',
//           color: textColor,
//           font: {
//             size: 16
//           }
//         },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return context.dataset.label + ': ' + context.raw + '%';
//             }
//           }
//         }
//       },
//       scales: {
//         x: {
//           grid: {
//             color: gridColor
//           },
//           ticks: {
//             color: textColor
//           }
//         },
//         y: {
//           grid: {
//             color: gridColor
//           },
//           ticks: {
//             color: textColor,
//             callback: function(value) {
//               return value + '%';
//             }
//           },
//           beginAtZero: true
//         }
//       }
//     }
//   });

//   // 2. Quarterly Performance Chart
//   new Chart(document.getElementById('medtronic-quarterly-performance').getContext('2d'), {
//     type: 'line',
//     data: {
//       labels: ['Q1', 'Q2', 'Q3', 'Current Quarter'],
//       datasets: [
//         {
//           label: 'FY 2025',
//           data: [
//             data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q1
//             data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q2
//             data.segments[0].financialData.revenue.nineMonths['2024'].January24 / 3, // estimated Q3
//             data.segments[0].financialData.revenue.threeMonths['2024'].January24 // current quarter
//           ],
//           borderColor: '#8b5cf6',
//           backgroundColor: 'rgba(139, 92, 246, 0.2)',
//           tension: 0.4
//         },
//         {
//           label: 'FY 2024',
//           data: [
//             data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q1
//             data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q2
//             data.segments[0].financialData.revenue.nineMonths['2024'].January26 / 3, // estimated Q3
//             data.segments[0].financialData.revenue.threeMonths['2024'].January26 // last year quarter
//           ],
//           borderColor: '#ec4899',
//           backgroundColor: 'rgba(236, 72, 153, 0.2)',
//           tension: 0.4
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           labels: {
//             color: textColor
//           }
//         },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return context.dataset.label + ': ' + formatCurrency(context.raw);
//             }
//           }
//         }
//       },
//       scales: {
//         x: {
//           grid: {
//             color: gridColor
//           },
//           ticks: {
//             color: textColor
//           }
//         },
//         y: {
//           grid: {
//             color: gridColor
//           },
//           ticks: {
//             color: textColor,
//             callback: function(value) {
//               return formatCurrency(value);
//             }
//           },
//           beginAtZero: true
//         }
//       }
//     }
//   });
// }


// function generatePrecisisDashboard(data) {
//   return `
//       <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
//           <!-- Header -->
//           <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
//               <div>
//                   <h1 class="text-3xl font-bold mb-2">Precisis AG</h1>
//                   <p class="text-lg text-gray-600 dark:text-gray-300">EASEE - Minimally Invasive Epilepsy Neurostimulation</p>
//               </div>
//               <div class="text-right mt-4 md:mt-0">
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//               </div>
//           </div>

//           <!-- Key Metrics -->
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2024)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
//                   <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">2025-2034</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(21600000)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Oct 2021 (Cochlear Limited)</p>
//               </div>
//           </div>

//           <!-- Charts -->
//           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Market Growth Trends</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="precisis-market-growth"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="precisis-patient-reach"></canvas>
//                   </div>
//               </div>
//           </div>

//           <!-- Insights -->
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
//                   <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
//                   <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
//               </div>
//           </div>
//       </div>
//   `;
// }

// function initializePrecisisCharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   new Chart(document.getElementById('precisis-market-growth').getContext('2d'), {
//       type: 'line',
//       data: {
//           labels: ['2024', '2034'],
//           datasets: [{
//               label: 'Market Size ($M)',
//               data: [data.epilepsy_market_details.market_size_2024 / 1000000, data.epilepsy_market_details.market_projected_size_2032 / 1000000],
//               borderColor: '#3B82F6',
//               backgroundColor: 'rgba(59, 130, 246, 0.2)',
//               fill: true,
//               tension: 0.4
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } },
//           scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
//       }
//   });

//   new Chart(document.getElementById('precisis-patient-reach').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['Eligible Patients', 'Total Epilepsy Patients'],
//           datasets: [{
//               data: [10100000, 50000000 - 10100000],
//               backgroundColor: ['#10B981', '#D1D5DB']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } }
//       }
//   });
// }

// function generateEpiMinderDashboard(data) {
//   return `
//       <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
//           <!-- Header -->
//           <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
//               <div>
//                   <h1 class="text-3xl font-bold mb-2">Epi-Minder</h1>
//                   <p class="text-lg text-gray-600 dark:text-gray-300">Wearable Seizure Monitoring</p>
//               </div>
//               <div class="text-right mt-4 md:mt-0">
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//               </div>
//           </div>

//           <!-- Key Metrics -->
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2023)</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2023)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Monitoring Devices</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
//                   <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">2024-2030</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(26000000)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Aug 2022 (Series A)</p>
//               </div>
//           </div>

//           <!-- Charts -->
//           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Market Growth Trends</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="epiminder-market-growth"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="epiminder-patient-reach"></canvas>
//                   </div>
//               </div>
//           </div>

//           <!-- Insights -->
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
//                   <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
//                   <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
//               </div>
//           </div>
//       </div>
//   `;
// }

// function initializeEpiMinderCharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   new Chart(document.getElementById('epiminder-market-growth').getContext('2d'), {
//       type: 'line',
//       data: {
//           labels: ['2023', '2030'],
//           datasets: [{
//               label: 'Market Size ($M)',
//               data: [data.epilepsy_market_details.market_size_2023 / 1000000, data.epilepsy_market_details.market_projected_size_2030 / 1000000],
//               borderColor: '#3B82F6',
//               backgroundColor: 'rgba(59, 130, 246, 0.2)',
//               fill: true,
//               tension: 0.4
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } },
//           scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
//       }
//   });

//   new Chart(document.getElementById('epiminder-patient-reach').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['U.S. Patients', 'Global Patients'],
//           datasets: [{
//               data: [3000000, 50000000 - 3000000],
//               backgroundColor: ['#10B981', '#D1D5DB']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } }
//       }
//   });
// }

// function generateFlowMedicalDashboard(data) {
//   return `
//       <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
//           <!-- Header -->
//           <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
//               <div>
//                   <h1 class="text-3xl font-bold mb-2">Flow Medical</h1>
//                   <p class="text-lg text-gray-600 dark:text-gray-300">tDCS - Depression & Epilepsy Crossover</p>
//               </div>
//               <div class="text-right mt-4 md:mt-0">
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//               </div>
//           </div>

//           <!-- Key Metrics -->
//           <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(data.epilepsy_market_details.market_size_2024)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
//                   <p class="mt-2 text-2xl font-bold">${data.epilepsy_market_details.market_growth_cagr}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">2024-2032</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
//                   <p class="mt-2 text-2xl font-bold">$${formatCurrency(9000000)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">May 2023 (Series A)</p>
//               </div>
//           </div>

//           <!-- Charts -->
//           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Market Growth Trends</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="flowmedical-market-growth"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Comorbidity Reach</h2>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="flowmedical-comorbidity-reach"></canvas>
//                   </div>
//               </div>
//           </div>

//           <!-- Insights -->
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.market_impact.contribution}</p>
//                   <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat:</span> ${data.market_impact.threat_to_market}</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
//                   <p class="text-gray-600 dark:text-gray-300">${data.epilepsy_market_details.technology}</p>
//                   <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Source: ${data.revenue.source}</p>
//               </div>
//           </div>
//       </div>
//   `;
// }

// function initializeFlowMedicalCharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   new Chart(document.getElementById('flowmedical-market-growth').getContext('2d'), {
//       type: 'line',
//       data: {
//           labels: ['2024', '2032'],
//           datasets: [{
//               label: 'Market Size ($M)',
//               data: [data.epilepsy_market_details.market_size_2024 / 1000000, data.epilepsy_market_details.market_projected_size_2032 / 1000000],
//               borderColor: '#3B82F6',
//               backgroundColor: 'rgba(59, 130, 246, 0.2)',
//               fill: true,
//               tension: 0.4
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } },
//           scales: { x: { ticks: { color: textColor }, grid: { color: gridColor } }, y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } } }
//       }
//   });

//   new Chart(document.getElementById('flowmedical-comorbidity-reach').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['Epilepsy w/ Depression', 'Other Epilepsy Patients'],
//           datasets: [{
//               data: [25000000, 50000000 - 25000000],
//               backgroundColor: ['#10B981', '#D1D5DB']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { legend: { labels: { color: textColor } } }
//       }
//   });
// }

// function generateXCOPRIDashboard(data) {
//   return `
//       <div class="container mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white">
//           <!-- Company Header -->
//           <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
//               <div class="flex flex-col md:flex-row justify-between items-start">
//                   <div>
//                       <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">SK Biopharmaceuticals / SK Life Science</h1>
//                       <p class="text-lg text-gray-600 dark:text-gray-300">XCOPRI (Cenobamate) Epilepsy Drug Dashboard - 2024</p>
//                   </div>
//                   <div class="text-right mt-4 md:mt-0">
//                       <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                       <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//                   </div>
//               </div>
//           </div>

//           <!-- Key Financial Metrics -->
//           <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
//                   <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.full_year_revenue[2024].total)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].growth_rate}</p>
//                   <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">XCOPRI U.S. Sales (2024)</h3>
//                   <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.full_year_revenue[2024].xcopri_us_sales)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].xcopri_us_growth_rate}</p>
//                   <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Operating Profit (2024)</h3>
//                   <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(data.financials.operating_profit[2024])}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">First profitable year</p>
//                   <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 U.S. Sales Target</h3>
//                   <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatCurrency(420000000)} - $${formatCurrency(450000000)}</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
//               </div>
//           </div>

//           <!-- Charts Section -->
//           <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Revenue Trends</h2>
//                   </div>
//                   <div class="p-6 h-96">
//                       <canvas id="xcopri-revenue-trends"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">U.S. Sales Growth</h2>
//                   </div>
//                   <div class="p-6 h-96">
//                       <canvas id="xcopri-us-sales-growth"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Market Share (U.S.)</h2>
//                   </div>
//                   <div class="p-6 h-96">
//                       <canvas id="xcopri-market-share"></canvas>
//                   </div>
//               </div>
//           </div>

//           <!-- Detailed Insights -->
//           <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//               <!-- R&D and Future Products -->
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">R&D and Future Products</h2>
//                   </div>
//                   <div class="p-6">
//                       <div class="space-y-4">
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Pipeline Expansion</span>
//                               <span class="font-medium text-gray-900 dark:text-white">TPD, RPT, oncology</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">XCOPRI Indications</span>
//                               <span class="font-medium text-gray-900 dark:text-white">Expand by 2025-2026</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">New Markets</span>
//                               <span class="font-medium text-gray-900 dark:text-white">Korea, Japan NDA planned</span>
//                           </div>
//                           <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025</p>
//                       </div>
//                   </div>
//               </div>

//               <!-- Epilepsy Market Insights -->
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Epilepsy Market Insights</h2>
//                   </div>
//                   <div class="p-6">
//                       <div class="space-y-4">
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">U.S. Market Size (2024)</span>
//                               <span class="font-medium text-gray-900 dark:text-white">$5B</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Global Market Size (2024)</span>
//                               <span class="font-medium text-gray-900 dark:text-white">$11.13B</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">XCOPRI U.S. Share</span>
//                               <span class="font-medium text-gray-900 dark:text-white">~6.5%</span>
//                           </div>
//                           <p class="text-xs text-gray-500 dark:text-gray-400">Source: Grand View Research, 2030 Report</p>
//                       </div>
//                   </div>
//               </div>

//               <!-- Financial Health -->
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Financial Health</h2>
//                   </div>
//                   <div class="p-6">
//                       <div class="space-y-4">
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Gross Margin</span>
//                               <span class="font-medium text-gray-900 dark:text-white">>90%</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Net Profit (2024)</span>
//                               <span class="font-medium text-gray-900 dark:text-white">$${formatCurrency(data.financials.net_profit[2024])}</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Q4 2024 Sales</span>
//                               <span class="font-medium text-gray-900 dark:text-white">$${formatCurrency(120740741)}</span>
//                           </div>
//                           <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review, Feb 5, 2025; The Bio News, Feb 5, 2025</p>
//                       </div>
//                   </div>
//               </div>
//           </div>

//           <!-- Additional Insights -->
//           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <!-- Sales Growth Drivers -->
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Sales Growth Drivers</h2>
//                   </div>
//                   <div class="p-6">
//                       <ul class="space-y-3 text-gray-600 dark:text-gray-300">
//                           ${data.sales_data.sales_growth_drivers.map(driver => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>${driver}</li>`).join('')}
//                       </ul>
//                       <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">Source: SK Life Science Press Release, March 20, 2025</p>
//                   </div>
//               </div>

//               <!-- Patient and Clinical Insights -->
//               <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Patient and Clinical Insights</h2>
//                   </div>
//                   <div class="p-6">
//                       <div class="space-y-4">
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Patients Treated</span>
//                               <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.patient_reach.amount} (Sep 2024)</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Seizure Freedom (Phase 3)</span>
//                               <span class="font-medium text-gray-900 dark:text-white">100% at 400mg</span>
//                           </div>
//                           <div class="flex justify-between">
//                               <span class="text-gray-600 dark:text-gray-400">Presentation Date</span>
//                               <span class="font-medium text-gray-900 dark:text-white">Dec 9, 2024</span>
//                           </div>
//                           <p class="text-xs text-gray-500 dark:text-gray-400">Source: SK Life Science Press Release, March 20, 2025; Ono Pharma, Dec 9, 2024</p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   `;
// }


// // Chart initialization function for XCOPRI
// function initializeXCOPRICharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   // Revenue Trends Chart
//   new Chart(document.getElementById('xcopri-revenue-trends').getContext('2d'), {
//       type: 'line',
//       data: {
//           labels: ['2022', '2023', '2024'],
//           datasets: [{
//               label: 'Total Revenue ($M)',
//               data: [
//                   data.financials.full_year_revenue[2022].total / 1000000,
//                   data.financials.full_year_revenue[2023].total / 1000000,
//                   data.financials.full_year_revenue[2024].total / 1000000
//               ],
//               borderColor: '#4299E1',
//               backgroundColor: 'rgba(66, 153, 225, 0.2)',
//               fill: true,
//               tension: 0.4
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//               legend: { labels: { color: textColor } }
//           },
//           scales: {
//               x: { ticks: { color: textColor }, grid: { color: gridColor } },
//               y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
//           }
//       }
//   });

//   // U.S. Sales Growth Chart
//   new Chart(document.getElementById('xcopri-us-sales-growth').getContext('2d'), {
//       type: 'bar',
//       data: {
//           labels: ['2024 vs 2023'],
//           datasets: [{
//               label: 'U.S. Sales Growth (%)',
//               data: [parseFloat(data.financials.full_year_revenue[2024].xcopri_us_growth_rate)],
//               backgroundColor: '#48BB78'
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//               legend: { display: false },
//               tooltip: { callbacks: { label: context => `${context.raw}%` } }
//           },
//           scales: {
//               x: { ticks: { color: textColor }, grid: { color: gridColor } },
//               y: { 
//                   beginAtZero: true, 
//                   ticks: { color: textColor, callback: value => `${value}%` }, 
//                   grid: { color: gridColor } 
//               }
//           }
//       }
//   });

//   // Market Share Chart (U.S.)
//   new Chart(document.getElementById('xcopri-market-share').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['XCOPRI', 'Other Epilepsy Drugs'],
//           datasets: [{
//               data: [324962963, 5000000000 - 324962963], // U.S. market size $5B - XCOPRI sales
//               backgroundColor: ['#F6AD55', '#E5E7EB']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//               legend: { labels: { color: textColor } },
//               tooltip: { callbacks: { label: context => `${(context.raw / 5000000000 * 100).toFixed(1)}%` } }
//           }
//       }
//   });
// }


// function generateNeuroPaceDashboard(data) {
//     return `
//         <div class="container mx-auto px-6 py-10 bg-gray-100 dark:bg-gray-900 min-h-screen dark:text-white">
//             <!-- Company Header -->
//             <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
//                 <div class="flex flex-col md:flex-row justify-between items-start">
//                     <div>
//                         <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">NeuroPace, Inc.</h1>
//                         <p class="text-lg text-gray-600 dark:text-gray-300">Epilepsy Neuromodulation Dashboard - 2024</p>
//                     </div>
//                     <div class="text-right mt-4 md:mt-0">
//                         <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: ${new Date().toLocaleString()}</p>
//                         <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//                     </div>
//                 </div>
//             </div>

//             <!-- Key Financial Metrics -->
//             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                     <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue</h3>
//                     <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.full_year_revenue[2024].total)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.full_year_revenue[2024].growth_rate}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                     <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Initial Implants (Q4)</h3>
//                     <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.q4_revenue[2024].breakdown.initial_implants.amount)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.q4_revenue[2024].breakdown.initial_implants.growth_rate}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                     <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Replacement Implants (Q4)</h3>
//                     <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.q4_revenue[2024].breakdown.replacement_implants.amount)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.q4_revenue[2024].breakdown.replacement_implants.growth_rate}</p>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
//                     <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 Revenue Forecast</h3>
//                     <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.revenue_guidance_2025.range.min)} - $${formatCurrency(data.financials.revenue_guidance_2025.range.max)}</p>
//                     <p class="text-sm text-gray-600 dark:text-gray-400">Growth: ${data.financials.revenue_guidance_2025.growth_rate}</p>
//                 </div>
//             </div>

//             <!-- Charts Section -->
//             <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Revenue Trends</h2>
//                     </div>
//                     <div class="p-6 h-96">
//                         <canvas id="neuropace-revenue-trends"></canvas>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Implant Breakdown</h2>
//                     </div>
//                     <div class="p-6 h-96">
//                         <canvas id="neuropace-implant-breakdown"></canvas>
//                     </div>
//                 </div>
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Growth Metrics</h2>
//                     </div>
//                     <div class="p-6 h-96">
//                         <canvas id="neuropace-growth-metrics"></canvas>
//                     </div>
//                 </div>
//             </div>

//             <!-- Detailed Insights -->
//             <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//                 <!-- R&D and New Products -->
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">R&D and Product Development</h2>
//                     </div>
//                     <div class="p-6">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">2024 R&D Spend</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.r_and_d_expenses[2024])}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Q4 2024 R&D</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.r_and_d_expenses.q4_2024)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">New Products</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">No new launches; focus on RNS enhancements</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Device Longevity</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.device_longevity}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Market Research (Refractory Epilepsy) -->
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Refractory Epilepsy Market</h2>
//                     </div>
//                     <div class="p-6">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">U.S. Drug-Resistant Patients</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">~1M</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Focal Epilepsy Candidates</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.additional_insights.market_opportunity}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Clinical Efficacy</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.result}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Sales Channel</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.company.sales_channel}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Financial Health -->
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Financial Health</h2>
//                     </div>
//                     <div class="p-6">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Gross Margin</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.financials.gross_margin[2024]}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Net Loss</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.net_loss[2024])}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Cash Position</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.cash_position.dec_31_2024)}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Operating Expenses</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">$${formatNPCurrency(data.financials.operating_expenses[2024])}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <!-- Additional Insights -->
//             <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <!-- Sales Growth Drivers -->
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Sales Growth Drivers</h2>
//                     </div>
//                     <div class="p-6">
//                         <ul class="space-y-3 text-gray-600 dark:text-gray-300">
//                             ${data.sales_data.sales_growth_drivers.map(driver => `<li class="flex items-center"><svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>${driver}</li>`).join('')}
//                         </ul>
//                     </div>
//                 </div>

//                 <!-- Clinical Milestones -->
//                 <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
//                     <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                         <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Clinical Milestones</h2>
//                     </div>
//                     <div class="p-6">
//                         <div class="space-y-4">
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Post-Approval Study</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.study}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Seizure Reduction</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.result}</span>
//                             </div>
//                             <div class="flex justify-between">
//                                 <span class="text-gray-600 dark:text-gray-400">Presentation Date</span>
//                                 <span class="font-medium text-gray-900 dark:text-white">${data.growth_metrics.clinical_growth_indicator.presentation_date}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

// // Helper function to format currency (assumes input in full USD amounts)
// function formatNPCurrency(amount) {
//     return (amount / 1000000).toFixed(1) + 'M';
// }

// // Chart initialization function for NeuroPace
// function initializeNeuroPaceCharts(data) {
//     const isDarkMode = document.documentElement.classList.contains('dark');
//     const textColor = isDarkMode ? '#ffffff' : '#666666';
//     const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//     // Revenue Trends Chart
//     new Chart(document.getElementById('neuropace-revenue-trends').getContext('2d'), {
//         type: 'line',
//         data: {
//             labels: ['2021', '2022', '2023', '2024'],
//             datasets: [{
//                 label: 'Total Revenue ($M)',
//                 data: [
//                     data.financials.full_year_revenue[2021].total / 1000000,
//                     data.financials.full_year_revenue[2022].total / 1000000,
//                     data.financials.full_year_revenue[2023].total / 1000000,
//                     data.financials.full_year_revenue[2024].total / 1000000
//                 ],
//                 borderColor: '#4299E1',
//                 backgroundColor: 'rgba(66, 153, 225, 0.2)',
//                 fill: true,
//                 tension: 0.4
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: { labels: { color: textColor } }
//             },
//             scales: {
//                 x: { ticks: { color: textColor }, grid: { color: gridColor } },
//                 y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
//             }
//         }
//     });

//     // Implant Breakdown Chart (Q4 2024)
//     new Chart(document.getElementById('neuropace-implant-breakdown').getContext('2d'), {
//         type: 'doughnut',
//         data: {
//             labels: ['Initial Implants', 'Replacement Implants'],
//             datasets: [{
//                 data: [
//                     data.financials.q4_revenue[2024].breakdown.initial_implants.amount,
//                     data.financials.q4_revenue[2024].breakdown.replacement_implants.amount
//                 ],
//                 backgroundColor: ['#48BB78', '#F6AD55']
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: { labels: { color: textColor } }
//             }
//         }
//     });

//     // Growth Metrics Chart
//     new Chart(document.getElementById('neuropace-growth-metrics').getContext('2d'), {
//         type: 'bar',
//         data: {
//             labels: ['2022 vs 2021', '2023 vs 2022', '2024 vs 2023'],
//             datasets: [{
//                 label: 'Annual Growth Rate (%)',
//                 data: [
//                     parseFloat(data.growth_metrics.annual_growth_rates['2022_vs_2021']),
//                     parseFloat(data.growth_metrics.annual_growth_rates['2023_vs_2022']),
//                     parseFloat(data.growth_metrics.annual_growth_rates['2024_vs_2023'])
//                 ],
//                 backgroundColor: '#4299E1'
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: { display: false },
//                 tooltip: { callbacks: { label: context => `${context.raw}%` } }
//             },
//             scales: {
//                 x: { ticks: { color: textColor }, grid: { color: gridColor } },
//                 y: { 
//                     beginAtZero: true, 
//                     ticks: { color: textColor, callback: value => `${value}%` }, 
//                     grid: { color: gridColor } 
//                 }
//             }
//         }
//     });
// }
















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initialize NeuroPace Charts
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
              data: [45.2, 45.5, 65.4, 76.0],
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
              legend: { labels: { color: textColor } },
              tooltip: { 
                  callbacks: {
                      label: context => `Revenue: $${context.raw}M`
                  }
              }
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
              data: [17.5, 2.5],
              backgroundColor: ['#48BB78', '#F6AD55']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { labels: { color: textColor } },
              tooltip: { 
                  callbacks: {
                      label: context => `$${context.raw}M (${(context.raw / 20 * 100).toFixed(1)}%)`
                  }
              }
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
              data: [0.7, 43.6, 16.2],
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

// Initialize XCOPRI Charts
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
              data: [338.3, 263.0, 405.6],
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
              legend: { labels: { color: textColor } },
              tooltip: { 
                  callbacks: {
                      label: context => `Revenue: $${context.raw}M`
                  }
              }
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
              data: [62],
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
              data: [6.5, 93.5],
              backgroundColor: ['#F6AD55', '#E5E7EB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { labels: { color: textColor } },
              tooltip: { 
                  callbacks: { 
                      label: context => `${context.label}: ${context.raw}%` 
                  } 
              }
          }
      }
  });
}

// Initialize Medtronic Charts
function initMedtronicCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';
  
  // Chart 1: Revenue Trend
  new Chart(document.getElementById('revenueChart').getContext('2d'), {
      type: 'line',
      data: {
          labels: [
              'Q1 FY2023', 'Q2 FY2023', 'Q3 FY2023', 'Q4 FY2023',
              'Q1 FY2024', 'Q2 FY2024', 'Q3 FY2024', 'Q4 FY2024',
              'Q1 FY2025', 'Q2 FY2025', 'Q3 FY2025'
          ],
          datasets: [{
              label: 'Quarterly Revenue ($M)',
              data: [402, 410, 415, 420, 418, 422, 425, 430, 455, 462, 476],
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
                      text: 'Revenue (Million USD)',
                      color: textColor
                  },
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              x: {
                  ticks: { color: textColor },
                  grid: { color: gridColor }
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
                  position: 'top',
                  labels: { color: textColor }
              }
          }
      }
  });

  // Chart 2: Growth Rate Trend
  new Chart(document.getElementById('growthChart').getContext('2d'), {
      type: 'bar',
      data: {
          labels: [
              'Q1 FY2023', 'Q2 FY2023', 'Q3 FY2023', 'Q4 FY2023',
              'Q1 FY2024', 'Q2 FY2024', 'Q3 FY2024', 'Q4 FY2024',
              'Q1 FY2025', 'Q2 FY2025', 'Q3 FY2025'
          ],
          datasets: [{
              label: 'Growth Rate (%)',
              data: [3.1, 4.3, 5.1, 6.2, 4.0, 2.9, 2.4, 2.4, 8.9, 9.5, 12.0],
              backgroundColor: context => {
                  const value = context.raw;
                  return value >= 8 ? 'rgba(52, 211, 153, 0.7)' : 
                         value >= 5 ? 'rgba(96, 165, 250, 0.7)' : 
                         'rgba(251, 191, 36, 0.7)';
              },
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
                      text: 'Growth Rate (%)',
                      color: textColor
                  },
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              x: {
                  ticks: { 
                      color: textColor,
                      maxRotation: 45,
                      minRotation: 45
                  },
                  grid: { color: gridColor }
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
                  position: 'top',
                  labels: { color: textColor }
              }
          }
      }
  });

  // Chart 3: Patient Segment
  new Chart(document.getElementById('patientSegmentChart').getContext('2d'), {
      type: 'pie',
      data: {
          labels: ['Drug-Resistant Epilepsy', 'Generalized Epilepsy', 'Focal Epilepsy'],
          datasets: [{
              data: [68, 18, 14],
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
                          const growthRates = [13.2, 8.5, 9.3];
                          return [
                              `${context.label}: ${context.raw}%`,
                              `Growth Rate: ${growthRates[context.dataIndex]}%`
                          ];
                      }
                  }
              },
              legend: {
                  position: 'right',
                  labels: { color: textColor }
              }
          }
      }
  });

  // Chart 4: Competitive Landscape
  new Chart(document.getElementById('competitiveChart').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Medtronic', 'NeuroPace', 'LivaNova', 'Boston Scientific', 'Abbott'],
          datasets: [
              {
                  label: 'Market Share (%)',
                  data: [46, 15, 18, 12, 9],
                  backgroundColor: 'rgba(59, 130, 246, 0.7)',
                  borderColor: 'rgba(59, 130, 246, 1)',
                  borderWidth: 1,
                  order: 1
              },
              {
                  label: 'Growth Rate (%)',
                  data: [12.0, 8.2, 5.3, 7.5, 6.8],
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
                      text: 'Market Share (%)',
                      color: textColor
                  },
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              y1: {
                  position: 'right',
                  beginAtZero: true,
                  grid: {
                      drawOnChartArea: false,
                      color: gridColor
                  },
                  title: {
                      display: true,
                      text: 'Growth Rate (%)',
                      color: textColor
                  },
                  ticks: { color: textColor }
              },
              x: {
                  ticks: { color: textColor },
                  grid: { color: gridColor }
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
                  position: 'top',
                  labels: { color: textColor }
              }
          }
      }
  });

  // Chart 5: Payer Distribution
  new Chart(document.getElementById('payerChart').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Medicare', 'Medicaid', 'Commercial', 'Other'],
          datasets: [{
              data: [48, 12, 35, 5],
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
                          const growthRates = [10.5, 7.2, 14.8, 6.1];
                          return [
                              `${context.label}: ${context.raw}%`,
                              `Growth Rate: ${growthRates[context.dataIndex]}%`
                          ];
                      }
                  }
              },
              legend: {
                  position: 'right',
                  labels: { color: textColor }
              }
          }
      }
  });

  // Chart 6: Regional Distribution
  new Chart(document.getElementById('regionChart').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['North America', 'Europe', 'Asia Pacific', 'Rest of World'],
          datasets: [
              {
                  label: 'Market Share (%)',
                  data: [62, 21, 12, 5],
                  backgroundColor: 'rgba(139, 92, 246, 0.7)',
                  borderColor: 'rgba(139, 92, 246, 1)',
                  borderWidth: 1
              },
              {
                  label: 'Growth Rate (%)',
                  data: [14.2, 9.7, 16.3, 7.5],
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
                      text: 'Market Share (%)',
                      color: textColor
                  },
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              y: {
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              y1: {
                  position: 'right',
                  beginAtZero: true,
                  grid: {
                      drawOnChartArea: false,
                      color: gridColor
                  },
                  title: {
                      display: true,
                      text: 'Growth Rate (%)',
                      color: textColor
                  },
                  ticks: { color: textColor }
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
                  position: 'top',
                  labels: { color: textColor }
              }
          }
      }
  });
}

// Initialize LivaNova Charts - not currently used directly
function initLivaNovaCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  // Revenue by Region Chart
  new Chart(document.getElementById('livanova-revenue-by-region').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['2022', '2023', '2024'],
          datasets: [
              {
                  label: 'United States',
                  data: [374542000/1000000, 407493000/1000000, 441022000/1000000],
                  backgroundColor: 'rgba(59, 130, 246, 0.8)',
                  borderColor: 'rgba(59, 130, 246, 1)',
                  borderWidth: 1
              },
              {
                  label: 'Europe',
                  data: [50291000/1000000, 57435000/1000000, 54899000/1000000],
                  backgroundColor: 'rgba(16, 185, 129, 0.8)',
                  borderColor: 'rgba(16, 185, 129, 1)',
                  borderWidth: 1
              },
              {
                  label: 'Rest of World',
                  data: [52160000/1000000, 54782000/1000000, 58302000/1000000],
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
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              },
              y: {
                  stacked: false,
                  beginAtZero: true,
                  ticks: {
                      color: textColor,
                      callback: function(value) {
                          return '$' + value + 'M';
                      }
                  },
                  grid: { color: gridColor }
              }
          },
          plugins: {
              legend: { 
                  position: 'top',
                  labels: { color: textColor }
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return context.dataset.label + ': $' + context.raw.toFixed(1) + 'M';
                      }
                  }
              }
          }
      }
  });

  // Expenses Chart
  new Chart(document.getElementById('livanova-expenses').getContext('2d'), {
      type: 'pie',
      data: {
          labels: ['Cost of Sales', 'SG&A', 'R&D'],
          datasets: [{
              data: [50236000/1000000, 187649000/1000000, 121029000/1000000],
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
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          const value = context.raw;
                          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                          const percentage = ((value / total) * 100).toFixed(1);
                          return `$${value.toFixed(1)}M (${percentage}%)`;
                      }
                  }
              }
          }
      }
  });

  // Performance Trend Chart
  new Chart(document.getElementById('livanova-performance-trend').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2022', '2023', '2024'],
          datasets: [
              {
                  label: 'Revenue Growth (%)',
                  data: [null, 9.0, 6.6],
                  borderColor: 'rgba(59, 130, 246, 1)',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  tension: 0.3,
                  fill: false
              },
              {
                  label: 'Segment Income Growth (%)',
                  data: [null, -11.2, 27.3],
                  borderColor: 'rgba(16, 185, 129, 1)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
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
                      color: textColor,
                      callback: function(value) {
                          return value + '%';
                      }
                  },
                  grid: { color: gridColor }
              },
              x: {
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              }
          },
          plugins: {
              legend: { labels: { color: textColor } },
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
  new Chart(document.getElementById('livanova-revenue-income').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['2022', '2023', '2024'],
          datasets: [
              {
                  label: 'Total Revenue ($M)',
                  data: [476993000/1000000, 519710000/1000000, 554223000/1000000],
                  backgroundColor: 'rgba(59, 130, 246, 0.8)',
                  borderColor: 'rgba(59, 130, 246, 1)',
                  borderWidth: 1,
                  order: 2
              },
              {
                  label: 'Segment Income ($M)',
                  data: [172775000/1000000, 153384000/1000000, 195309000/1000000],
                  backgroundColor: 'rgba(16, 185, 129, 0.8)',
                  borderColor: 'rgba(16, 185, 129, 1)',
                  borderWidth: 1,
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
                      text: 'USD ($M)',
                      color: textColor
                  },
                  ticks: {
                      color: textColor,
                      callback: function(value) {
                          return '$' + value + 'M';
                      }
                  },
                  grid: { color: gridColor }
              },
              y1: {
                  type: 'linear',
                  position: 'right',
                  beginAtZero: true,
                  max: 50,
                  title: {
                      display: true,
                      text: 'Profit Margin (%)',
                      color: textColor
                  },
                  ticks: {
                      color: textColor,
                      callback: function(value) {
                          return value + '%';
                      }
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: gridColor
                  }
              },
              x: {
                  ticks: { color: textColor },
                  grid: { color: gridColor }
              }
          },
          plugins: {
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          if (context.dataset.label === 'Profit Margin (%)') {
                              return `${context.dataset.label}: ${context.raw}%`;
                          } else {
                              return `${context.dataset.label}: $${context.raw.toFixed(1)}M`;
                          }
                      }
                  }
              }
          }
      }
  });
}

// Initialize Precisis AG Charts
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
              data: [548.4, 787.3],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { 
                  labels: { color: textColor } 
              },
              tooltip: {
                  callbacks: {
                      label: context => `Market Size: $${context.raw}M`
                  }
              }
          },
          scales: { 
              x: { 
                  ticks: { color: textColor }, 
                  grid: { color: gridColor } 
              }, 
              y: { 
                  ticks: { 
                      color: textColor, 
                      callback: value => `${value}M` 
                  },
                  grid: { color: gridColor } 
              }
          }
      }
  });

  new Chart(document.getElementById('precisis-patient-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Eligible Patients', 'Total Epilepsy Patients'],
          datasets: [{
              data: [10.1, 50 - 10.1],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { 
                  labels: { color: textColor } 
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `${context.label}: ${context.raw} million patients`;
                      }
                  }
              }
          }
      }
  });
  
  // Add technology adoption forecast chart
  new Chart(document.getElementById('precisis-adoption-forecast').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['2024', '2025', '2026', '2027', '2028'],
          datasets: [{
              label: 'Estimated Procedures',
              data: [40, 120, 350, 750, 1200],
              backgroundColor: 'rgba(79, 70, 229, 0.7)'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
              legend: { 
                  labels: { color: textColor } 
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `Estimated Procedures: ${context.raw}`;
                      }
                  }
              }
          },
          scales: {
              x: { 
                  ticks: { color: textColor }, 
                  grid: { color: gridColor },
                  title: {
                      display: true,
                      text: 'Year',
                      color: textColor
                  }
              },
              y: { 
                  ticks: { color: textColor }, 
                  grid: { color: gridColor },
                  title: {
                      display: true,
                      text: 'Estimated Procedures',
                      color: textColor
                  }
              }
          }
      }
  });
}

// Initialize EpiMinder Charts
function initializeEpiMinderCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  new Chart(document.getElementById('epiminder-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],
          datasets: [{
              label: 'Market Size ($M)',
              data: [559, 596, 635, 677, 722, 769, 820, 863],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: context => `Market Size: ${context.raw}M`
                  }
              }
          },
          scales: { 
              x: { ticks: { color: textColor }, grid: { color: gridColor } }, 
              y: { 
                  ticks: { 
                      color: textColor, 
                      callback: value => `${value}M` 
                  },
                  grid: { color: gridColor },
                  beginAtZero: false
              }
          }
      }
  });

  new Chart(document.getElementById('epiminder-patient-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['U.S. Patients (CDC, 2021)', 'Global Patients'],
          datasets: [{
              data: [3, 47],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `${context.label}: ${context.raw} million patients`;
                      }
                  }
              }
          }
      }
  });
  
  // Add technology comparison chart
  new Chart(document.getElementById('epiminder-tech-comparison').getContext('2d'), {
      type: 'radar',
      data: {
          labels: ['Ease of Use', 'Minimally Invasive', 'Detection Accuracy', 'Battery Life', 'Patient Comfort', 'Data Insights'],
          datasets: [
              {
                  label: 'EpiMinder',
                  data: [4.5, 3.7, 4.8, 4.0, 3.8, 4.9],
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  borderColor: 'rgba(16, 185, 129, 0.8)',
                  pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                  pointRadius: 4
              },
              {
                  label: 'Conventional EEG',
                  data: [2.5, 2.0, 4.0, 3.0, 2.0, 3.5],
                  backgroundColor: 'rgba(107, 114, 128, 0.2)',
                  borderColor: 'rgba(107, 114, 128, 0.8)',
                  pointBackgroundColor: 'rgba(107, 114, 128, 1)',
                  pointRadius: 4
              }
          ]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              r: {
                  angleLines: {
                      color: gridColor
                  },
                  grid: {
                      color: gridColor
                  },
                  pointLabels: {
                      color: textColor
                  },
                  ticks: {
                      backdropColor: 'transparent',
                      color: textColor
                  }
              }
          },
          plugins: {
              legend: { 
                  labels: { color: textColor } 
              },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `${context.dataset.label}: ${context.raw}/5`;
                      }
                  }
              }
          }
      }
  });
  
  // Add funding timeline chart
  new Chart(document.getElementById('epiminder-funding').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Seed Round (2019)', 'Series A (Aug 2022)'],
          datasets: [{
              label: 'Funding Amount (USD Million)',
              data: [5, 26],
              backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { display: false },
              tooltip: {
                  callbacks: {
                      label: context => `Funding: ${context.raw}M USD`
                  }
              }
          },
          scales: { 
              x: { ticks: { color: textColor }, grid: { color: gridColor } }, 
              y: { 
                  ticks: { 
                      color: textColor, 
                      callback: value => `${value}M` 
                  },
                  grid: { color: gridColor },
                  title: {
                      display: true,
                      text: 'USD (Millions)',
                      color: textColor
                  }
              }
          }
      }
  });
}

// Initialize Flow Medical Charts
function initializeFlowMedicalCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  new Chart(document.getElementById('flowmedical-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
          datasets: [{
              label: 'Epilepsy Treatment Devices Market ($M)',
              data: [548.4, 571, 594, 619, 644, 671, 698, 741, 787.3],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          },
          {
              label: 'Depression Devices Market ($B)',
              data: [4.8, 5.3, 5.8, 6.4, 7.1, 7.8, 8.6, 9.5, 10.5],
              borderColor: '#EC4899',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              fill: true,
              tension: 0.4,
              yAxisID: 'y1'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          if (context.dataset.label.includes('Depression')) {
                              return `${context.dataset.label}: ${context.raw}B`;
                          } else {
                              return `${context.dataset.label}: ${context.raw}M`;
                          }
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
                  ticks: { 
                      color: textColor, 
                      callback: value => `${value}M` 
                  },
                  grid: { color: gridColor },
                  title: {
                      display: true,
                      text: 'Epilepsy Market ($M)',
                      color: textColor
                  }
              },
              y1: {
                  position: 'right',
                  ticks: {
                      color: textColor,
                      callback: value => `${value}B`
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: gridColor
                  },
                  title: {
                      display: true,
                      text: 'Depression Market ($B)',
                      color: textColor
                  }
              }
          }
      }
  });

  new Chart(document.getElementById('flowmedical-comorbidity-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Epilepsy w/ Depression (50%)', 'Other Epilepsy Patients'],
          datasets: [{
              data: [25, 25],
              backgroundColor: ['#10B981', '#D1D5DB']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: function(context) {
                          return `${context.label}: ${context.raw} million patients`;
                      }
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Source: Epilepsy Foundation, ~50% comorbidity',
                  padding: {
                      top: 10,
                      bottom: 0
                  },
                  font: {
                      size: 12,
                      style: 'italic'
                  },
                  color: textColor
              }
          }
      }
  });
  
  // Add tDCS technology adoption chart
  new Chart(document.getElementById('flowmedical-tech-adoption').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['2021', '2022', '2023', '2024', '2025'],
          datasets: [{
              label: 'Flow tDCS Users (thousands)',
              data: [5, 8, 11, 14, 18],
              backgroundColor: 'rgba(236, 72, 153, 0.7)'
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { labels: { color: textColor } },
              tooltip: {
                  callbacks: {
                      label: context => `Users: ${context.raw}k`
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Source: Flow Neuroscience Research Updates, primarily depression patients',
                  padding: {
                      top: 10,
                      bottom: 0
                  },
                  font: {
                      size: 12,
                      style: 'italic'
                  },
                  color: textColor
              }
          },
          scales: { 
              x: { ticks: { color: textColor }, grid: { color: gridColor } }, 
              y: { 
                  ticks: { color: textColor }, 
                  grid: { color: gridColor },
                  title: {
                      display: true,
                      text: 'Users (thousands)',
                      color: textColor
                  }
              }
          }
      }
  });
  
  // Add funding timeline chart
  new Chart(document.getElementById('flowmedical-funding').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Seed Round (2018)', 'Series A (May 2023)'],
          datasets: [{
              label: 'Funding Amount (USD Million)',
              data: [2, 9],
              backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(16, 185, 129, 0.7)']
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
              legend: { display: false },
              tooltip: {
                  callbacks: {
                      label: context => `Funding: ${context.raw}M USD`
                  }
              },
              subtitle: {
                  display: true,
                  text: 'Source: Flow Neuroscience Press Release, TechCrunch May 2023',
                  padding: {
                      top: 10,
                      bottom: 0
                  },
                  font: {
                      size: 12,
                      style: 'italic'
                  },
                  color: textColor
              }
          },
          scales: { 
              x: { ticks: { color: textColor }, grid: { color: gridColor } }, 
              y: { 
                  ticks: { 
                      color: textColor, 
                      callback: value => `${value}M` 
                  },
                  grid: { color: gridColor }
              }
          }
      }
  });
}

// Helper functions for formatting
function formatCurrency(value, decimals = 0) {
  if (value >= 1000000000) {
    return (value / 1000000000).toFixed(decimals) + 'B';
  } else if (value >= 1000000) {
    return (value / 1000000).toFixed(decimals) + 'M';
  } else if (value >= 1000) {
    return (value / 1000).toFixed(decimals) + 'K';
  }
  return value.toFixed(decimals);
}


function formatPercentage(value, decimals = 1) {
  return value > 0 ? '+' + value.toFixed(decimals) + '%' : value.toFixed(decimals) + '%';
}

function getGrowthColor(value) {
  return value >= 0 ? 'text-green-500' : 'text-red-500';
}

// Generate updated dashboard HTML functions
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
                  <p class="mt-2 text-2xl font-bold">$548.4M</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
                  <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">4.1%</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2024-2032</p>
                  <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">€20M (~$21.6M)</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Oct 2021 (Cochlear Limited)</p>
                  <p class="text-xs text-gray-500 mt-2">Source: Precisis Press Release, October 2021</p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: Custom Market Insights, 2024-2032</p>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="precisis-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: Towards Healthcare, 2024</p>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="precisis-patient-reach"></canvas>
                  </div>
              </div>
          </div>
          
          <!-- Additional Charts -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden mb-8">
              <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 class="text-xl font-semibold">Estimated Procedure Adoption</h2>
                  <p class="text-xs text-gray-500 mt-1">Source: Analyst Estimates, Medical Product Outsourcing Feb 2022</p>
              </div>
              <div class="p-6 h-80">
                  <canvas id="precisis-adoption-forecast"></canvas>
              </div>
          </div>

          <!-- Insights -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                  <p class="text-gray-600 dark:text-gray-300">Introduces a minimally invasive alternative to traditional neurostimulation (e.g., VNS, DBS), reducing surgical risk and improving patient quality of life. CE certified in Europe (Sep 15, 2022) and FDA Breakthrough Device Designation (Feb 19, 2022) signal strong growth potential.</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat to Existing Devices:</span> Challenges established implantable device leaders (e.g., NeuroPace RNS, LivaNova VNS) by offering a less invasive option, potentially shifting market share from surgical solutions.</p>
                  <p class="text-xs text-gray-500 mt-3">Source: Precisis Press Release, BioSpace, Feb 22, 2022</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                  <p class="text-gray-600 dark:text-gray-300">Epicranial Application of Stimulation Electrodes for Epilepsy (EASEE) - electrodes placed under the scalp on the skull bone, delivering targeted electrical impulses to suppress seizure origins. The technology specifically targets drug-resistant focal epilepsy, addressing ~30% of epilepsy patients requiring alternative therapies.</p>
                  <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Key Regulatory Milestones:</p>
                  <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• CE certification: September 15, 2022</li>
                      <li>• FDA Breakthrough Device Designation: February 19, 2022</li>
                  </ul>
                  <p class="text-xs text-gray-500 mt-3">Source: Medical Product Outsourcing, Precisis Company Website</p>
              </div>
          </div>
          
          <!-- Citations -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
                  <li>• Precisis AG Press Release, "Funding round of €20 million" (October 2021)</li>
                  <li>• Medical Product Outsourcing, "Precisis' EASEE Epilepsy Neurostim Earns Breakthrough Status" (Feb 22, 2022)</li>
                  <li>• BioSpace, "Minimally Invasive Epilepsy Treatment EASEE Receives FDA Breakthrough Device Designation"</li>
                  <li>• Towards Healthcare, "Epilepsy Treatment Market Report" (2024)</li>
                  <li>• Precisis Company Website (www.precisis.de)</li>
                  <li>• German Clinical Trials Registry, Study DRKS00015918 and DRKS00017833</li>
              </ul>
          </div>
      </div>
  `;
}

function generateEpiMinderDashboard(data) {
  return `
      <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-sans">
          <!-- Header -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">Epi-Minder</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Wearable EEG-Based Seizure Monitoring</p>
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
                  <p class="mt-2 text-2xl font-bold">$559M</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Monitoring Devices</p>
                  <p class="text-xs text-gray-500 mt-2">Source: Grand View Research, 2023</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">6.6%</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2024-2030</p>
                  <p class="text-xs text-gray-500 mt-2">Source: Grand View Research, 2023</p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">AUD 40M (~$26M)</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Aug 2022 (Series A)</p>
                  <p class="text-xs text-gray-500 mt-2">Source: BioWorld, August 2022</p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Forecast</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: Grand View Research, 2023-2030 (6.6% CAGR)</p>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="epiminder-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: CDC 2021, WHO Global Epilepsy Data</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="epiminder-patient-reach"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Additional Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">Technology Comparison</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Clinical Publications, Company Website</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="epiminder-tech-comparison"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">Funding Timeline</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Epi-Minder Press Release, BioWorld Aug 2022</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="epiminder-funding"></canvas>
                    </div>
                </div>
            </div>

            <!-- Insights -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                    <p class="text-gray-600 dark:text-gray-300">Enhances epilepsy management with a discreet, wearable solution, competing with conventional EEGs and wearables like Empatica. Clinical trials (Phase III ongoing as of 2024) aim for regulatory approval by 2026.</p>
                    <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat to Market:</span> Could disrupt traditional EEG market (e.g., Natus Medical, Koninklijke Philips) by offering a lower-cost, patient-friendly alternative. Limited battery life and data privacy concerns may hinder adoption.</p>
                    <p class="text-xs text-gray-500 mt-3">Source: Australian New Zealand Clinical Trials Registry, Epi-Minder Website</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                    <p class="text-gray-600 dark:text-gray-300">Minimally invasive, behind-the-ear EEG device for continuous seizure detection and data logging. The system provides real-time seizure detection without penetrating the brain, making it less invasive than alternatives like deep brain stimulation (DBS) or responsive neurostimulation (RNS).</p>
                    <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Clinical Research:</p>
                    <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• First human implantation: 2019</li>
                        <li>• Safety & Efficacy: 30 patients multicenter trial</li>
                        <li>• Pediatric study: Started July 2023 (ages 12-17)</li>
                    </ul>
                    <p class="text-xs text-gray-500 mt-3">Source: Australian New Zealand Clinical Trials Registry, Epi-Minder Website</p>
                </div>
            </div>
            
            <!-- Citations -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Grand View Research, "Epilepsy Monitoring Devices Market" (2023)</li>
                    <li>• BioWorld, "Epi-Minder raises AUD40M in Series A" (August 2022)</li>
                    <li>• Epi-Minder Press Release, "Series A Funding Round" (August 2022)</li>
                    <li>• Australian New Zealand Clinical Trials Registry, Study ACTRN12619000834123</li>
                    <li>• Australian New Zealand Clinical Trials Registry, Study ACTRN12620000878976</li>
                    <li>• Centers for Disease Control and Prevention (CDC), "Epilepsy Data and Statistics" (2021)</li>
                    <li>• World Health Organization (WHO), "Global Epilepsy Report"</li>
                    <li>• Epi-Minder Company Website</li>
                </ul>
            </div>
        </div>
    `;
}

function generateFlowMedicalDashboard(data) {
  console.log('running')
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
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Size (2024)</h3>
                    <p class="mt-2 text-2xl font-bold">$548.4M</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
                    <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Depression Market Size (2024)</h3>
                    <p class="mt-2 text-2xl font-bold">$4.8B</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Depression Device Market</p>
                    <p class="text-xs text-gray-500 mt-2">Source: Flow Neuroscience, Sky News Jan 2024</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                    <p class="mt-2 text-2xl font-bold">$9M</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">May 2023 (Series A)</p>
                    <p class="text-xs text-gray-500 mt-2">Source: TechCrunch, May 2023</p>
                </div>
            </div>

            <!-- Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Custom Market Insights (Epilepsy), Industry Analysis (Depression)</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="flowmedical-market-growth"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">Comorbidity Reach</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Epilepsy Foundation</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="flowmedical-comorbidity-reach"></canvas>
                    </div>
                </div>
            </div>
            
            <!-- Additional Charts -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">tDCS Technology Adoption</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Flow Neuroscience Research Updates</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="flowmedical-tech-adoption"></canvas>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 class="text-xl font-semibold">Funding Timeline</h2>
                        <p class="text-xs text-gray-500 mt-1">Source: Flow Neuroscience Press Release, TechCrunch May 2023</p>
                    </div>
                    <div class="p-6 h-80">
                        <canvas id="flowmedical-funding"></canvas>
                    </div>
                </div>
            </div>

            <!-- Insights -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
                    <p class="text-gray-600 dark:text-gray-300">Primarily targets depression ($4.8B market, 2023), but tDCS's neuromodulation could extend to epilepsy, competing with non-invasive therapies like TMS. CE-marked in Europe (2019) for depression.</p>
                    <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat to Market:</span> Poses a peripheral threat by offering a low-cost, home-use alternative to epilepsy-specific neurostimulation devices. Lack of epilepsy-specific trials (as of 2025) limits direct impact.</p>
                    <p class="text-xs text-gray-500 mt-3">Source: Flow Neuroscience, ScienceDirect</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                    <p class="text-gray-600 dark:text-gray-300">Non-invasive brain stimulation via a wearable headset delivering low-intensity electrical currents. The device is CE-marked and approved for home use in the UK and EU for depression treatment.</p>
                    <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Key Features:</p>
                    <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Non-invasive, pain-free transcranial direct current stimulation</li>
                        <li>• Bluetooth connectivity with smartphone app</li>
                        <li>• 30-minute treatment sessions</li>
                        <li>• Real-world data from over 14,000 depression users</li>
                    </ul>
                    <p class="text-xs text-gray-500 mt-3">Source: Flow Neuroscience Website, NHS Trial Data</p>
                </div>
            </div>
            
            <!-- Citations -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Flow tDCS Headset Official Website</li>
                    <li>• tDCS Depression Treatment Flow Neuroscience</li>
                    <li>• Flow tDCS Device Flow Neuroscience</li>
                    <li>• Swedish Medtech Start-Up Flow Neuroscience Raises $9m (Silicon Republic)</li>
                    <li>• Swedish Startup Flow Neuroscience Raises Over €7.9 Million (EU-Startups)</li>
                    <li>• Research Updates Flow Neuroscience</li>
                    <li>• Exploring the Efficacy of a 5-Day Course of tDCS on Depression and Memory Function in Patients with Epilepsy (PubMed)</li>
                    <li>• The Effects of tDCS on Depression, Anxiety, and Stress in Patients with Epilepsy (PMC)</li>
                    <li>• The Flow Brain Stimulation Headset for the Treatment of Depression (PubMed)</li>
                    <li>• Transcranial Direct Current Stimulation Reduces Seizure Frequency in Patients with Refractory Focal Epilepsy (ScienceDirect)</li>
                    <li>• Epilepsy Drugs Market Size Envisioned at USD 15.16 Billion by 2032 (Towards Healthcare)</li>
                    <li>• Electric Headset for Treating Depression Recommended as Widespread Treatment After NHS Trial (Sky News, Jan 2024)</li>
                </ul>
            </div>
        </div>
    `;
}


function generateLivaNovaDashboard(data) {
  return `
    <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
          <div class="flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">LivaNova - Epilepsy Neuromodulation</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Vagus Nerve Stimulation (VNS) Analysis</p>
              </div>
              <div class="text-right mt-4 md:mt-0">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Sources: Company Reports, SEC Filings</p>
              </div>
          </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Neuromodulation Revenue (2024)</h3>
              <p class="mt-2 text-3xl font-bold">$554.2M</p>
              <p class="text-sm text-green-600 dark:text-green-400">+6.6% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">U.S. Revenue (2024)</h3>
              <p class="mt-2 text-3xl font-bold">$441.0M</p>
              <p class="text-sm text-green-600 dark:text-green-400">+8.2% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Segment Income (2024)</h3>
              <p class="mt-2 text-3xl font-bold">$195.3M</p>
              <p class="text-sm text-green-600 dark:text-green-400">+27.3% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Share</h3>
              <p class="mt-2 text-3xl font-bold">18%</p>
              <p class="text-sm text-gray-600 dark:text-gray-300">VNS Market Leader</p>
              <p class="text-xs text-gray-500 mt-2">Source: Neuromodulation Market Size Report</p>
          </div>
      </div>

      <!-- VNS Technology Section -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-6">Vagus Nerve Stimulation Technology</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <div class="flex items-center mb-4">
                      <div class="bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                      </div>
                      <h3 class="text-lg font-semibold">VNS Therapy System Models</h3>
                  </div>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div>
                              <span><strong>SenTiva (Model 1000):</strong> Smallest and lightest VNS device</span>
                              <p class="text-sm text-gray-500 dark:text-gray-400">Features: Responsive therapy, Scheduled Programming, Day & Night Programming, Expanded MRI access</p>
                          </div>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div>
                              <span><strong>AspireSR (Model 106):</strong> Advanced closed-loop system</span>
                              <p class="text-sm text-gray-500 dark:text-gray-400">Features: Closed loop stimulation (AutoStim), Expanded MRI access</p>
                          </div>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <div>
                              <span><strong>SenTiva Duo (Model 1000D) & Demipulse (Model 103)</strong></span>
                              <p class="text-sm text-gray-500 dark:text-gray-400">Comprehensive product portfolio for different patient needs</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <div class="flex items-center mb-4">
                      <div class="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                      </div>
                      <h3 class="text-lg font-semibold">Clinical Evidence & Approvals</h3>
                  </div>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>First Approval:</strong> First medical device approved by FDA for DRE in 1997</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Pediatric Approval:</strong> Only neuromodulation device approved in US for DRE patients as young as four years</span></li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Mechanism:</strong> Delivers electrical impulses to the vagus nerve, modulating brain activity</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Recent Evidence:</strong> Journal of Neurology (2022) meta-analysis demonstrated significant benefits without adverse events</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <!-- Regional Performance -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Regional Revenue Breakdown</h2>
              <div class="h-80">
                  <canvas id="livanova-revenue-by-region"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Report 2022-2024</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Expense Breakdown (2024)</h2>
              <div class="h-80">
                  <canvas id="livanova-expenses"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Report 2024</p>
          </div>
      </div>

      <!-- Performance Trends -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Performance Trend</h2>
              <div class="h-80">
                  <canvas id="livanova-performance-trend"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Reports 2022-2024</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Revenue & Income Analysis</h2>
              <div class="h-80">
                  <canvas id="livanova-revenue-income"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Reports 2022-2024</p>
          </div>
      </div>

      <!-- Special Reimbursement Coverage -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Special Reimbursement Coverage</h2>
          <div class="overflow-x-auto">
              <table class="min-w-full">
                  <thead>
                      <tr>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Condition</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Approval Date</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Agency</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Procedure Code</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">2024 Payment</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Dravet Syndrome</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">2020</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$23,542.18</td>
                      </tr>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Lennox-Gastaut Syndrome</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">January 2022</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$23,542.18</td>
                      </tr>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">VNS Programming</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Multiple</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95976</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$116.34</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <p class="text-xs text-gray-500 mt-3">Source: CMS Medicare Physician Fee Schedule, 2025 Final Rule</p>
      </div>

      <!-- Epilepsy Treatment Context -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Epilepsy Treatment Context</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                  <h3 class="text-lg font-medium mb-3">Available Treatment Options</h3>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Multiple ASMs (Anti-Seizure Medications)</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Various forms of ketogenic diet</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>VNS (Vagus Nerve Stimulation)</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Resective and ablative brain surgery</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>Intracranial neurostimulation</span>
                      </li>
                  </ul>
              </div>
              <div>
                  <h3 class="text-lg font-medium mb-3">Treatment Pathway</h3>
                  <div class="p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded-lg">
                      <p class="text-gray-700 dark:text-gray-300">ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.</p>
                      
                      <div class="mt-4">
                          <h4 class="font-medium text-gray-700 dark:text-gray-300">VNS Therapy Advantages:</h4>
                          <ul class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              <li>• First medical device approved by FDA for DRE in 1997</li>
                              <li>• Only neuromodulation device approved for patients as young as 4 years</li>
                              <li>• No direct brain tissue intervention required</li>
                              <li>• Demonstrated long-term efficacy and safety</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Sources and Citations -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
          <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
              <li>LivaNova Q4 and Full-Year 2023/2024 Results</li>
              <li>LivaNova Annual Reports (2022-2024)</li>
              <li>LivaNova VNS Therapy System Drug-Resistant Epilepsy Cost Savings Report</li>
              <li>Journal of Neurology (January 2022) meta-analysis on VNS Therapy</li>
              <li>CMS Reimbursement Updates for Dravet Syndrome (2020)</li>
              <li>CMS Reimbursement Updates for Lennox-Gastaut Syndrome (2022)</li>
              <li>Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
              <li>Neuromodulation Market Size Report (2024-2028)</li>
              <li>CMS Medicare Physician Fee Schedule, 2025 Final Rule</li>
          </ul>
      </div>
    </div>
  `;
}
// Update dashboard creation to use combined data
function generateNeuromodulationEpilepsyDashboard(medtronicData, livanovaData) {
    return `
        <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
            <!-- Header -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
                <div class="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h1 class="text-3xl font-bold mb-2">Epilepsy Neuromodulation Market</h1>
                        <p class="text-lg text-gray-600 dark:text-gray-300">Comparative Analysis - Medtronic vs. LivaNova</p>
                    </div>
                    <div class="text-right mt-4 md:mt-0">
                        <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Sources: Company Reports, SEC Filings, Clinical Data</p>
                    </div>
                </div>
            </div>

            <!-- Key Metrics Comparison -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Medtronic Neuromodulation (Q3 FY25)</h3>
                    <p class="mt-2 text-3xl font-bold">$476M</p>
                    <p class="text-sm text-green-600 dark:text-green-400">+12% YoY</p>
                    <p class="text-xs text-gray-500 mt-2">Source: Medtronic Q3 FY25 Financial Results</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">LivaNova Neuromodulation (2024)</h3>
                    <p class="mt-2 text-3xl font-bold">$554M</p>
                    <p class="text-sm text-green-600 dark:text-green-400">+6.6% YoY</p>
                    <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Share</h3>
                    <p class="mt-2 text-2xl font-bold">Medtronic: 46%</p>
                    <p class="mt-1 text-xl font-bold">LivaNova: 18%</p>
                    <p class="text-xs text-gray-500 mt-2">Source: Neuromodulation Market Size Report</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Epilepsy Devices Market</h3>
                    <p class="mt-2 text-3xl font-bold">$548.4M</p>
                    <p class="text-sm text-blue-600 dark:text-blue-400">CAGR: 4.1% (2024-2032)</p>
                    <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
                </div>
            </div>

            <!-- Technology Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                <h2 class="text-xl font-semibold mb-6">Technology Comparison</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold">Medtronic - Deep Brain Stimulation</h3>
                        </div>
                        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Approval:</strong> FDA approved for reducing partial-onset seizures refractory to antiepileptic medications</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Latest Device:</strong> Percept™ RC (rechargeable neurostimulator) with BrainSense™ technology</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Mechanism:</strong> Delivers targeted electrical stimulation to the anterior nucleus of the thalamus (ANT)</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Clinical Results:</strong> SANTE Study showed 69% median reduction in seizure frequency over 5 years</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Medicare Reimbursement:</strong> $35,826.45 (CPT 61886)</span>
                            </li>
                        </ul>
                    </div>
                    <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <div class="flex items-center mb-4">
                            <div class="bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 class="text-lg font-semibold">LivaNova - Vagus Nerve Stimulation</h3>
                        </div>
                        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Approval:</strong> First medical device approved by FDA for DRE in 1997; approved for patients as young as four years</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Latest Device:</strong> SenTiva (Model 1000) - Smallest and lightest VNS device with responsive therapy</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Mechanism:</strong> Delivers electrical impulses to the vagus nerve, modulating brain activity</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Clinical Results:</strong> Journal of Neurology (2022) meta-analysis showed significant benefits without increased adverse events</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span><strong>Special Reimbursement:</strong> CMS coverage for Dravet Syndrome (2020) and Lennox-Gastaut Syndrome (2022)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Regional Performance -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 class="text-xl font-semibold mb-4">Medtronic Regional Distribution</h2>
                    <div class="h-80">
                        <canvas id="neuromodulation-medtronic-regional"></canvas>
                    </div>
                    <p class="text-xs text-gray-500 mt-3">Source: Medtronic SEC Filing Q3 FY2025</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 class="text-xl font-semibold mb-4">LivaNova Regional Revenue</h2>
                    <div class="h-80">
                        <canvas id="neuromodulation-livanova-regional"></canvas>
                    </div>
                    <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Report 2024</p>
                </div>
            </div>

            <!-- Market Trends and Growth -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 class="text-xl font-semibold mb-4">Growth Rate Comparison</h2>
                    <div class="h-80">
                        <canvas id="neuromodulation-growth-comparison"></canvas>
                    </div>
                    <p class="text-xs text-gray-500 mt-3">Source: Company Financial Reports</p>
                </div>
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                    <h2 class="text-xl font-semibold mb-4">Epilepsy Market Trends</h2>
                    <div class="h-80">
                        <canvas id="neuromodulation-market-trends"></canvas>
                    </div>
                    <p class="text-xs text-gray-500 mt-3">Source: Custom Market Insights, Research Reports</p>
                </div>
            </div>

            <!-- Medicare Reimbursement Comparison -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
                <h2 class="text-xl font-semibold mb-4">Medicare Reimbursement Comparison</h2>
                <div class="overflow-x-auto">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Procedure</th>
                                <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">CPT Code</th>
                                <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Company</th>
                                <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">2024 Payment</th>
                                <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">YoY Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">DBS Implantation</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">61886</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Medtronic</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$35,826.45</td>
                                <td class="px-4 py-2 text-sm text-red-600 dark:text-red-400 border-b dark:border-gray-700">-3.31%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">VNS Implantation</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">LivaNova</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$23,542.18</td>
                                <td class="px-4 py-2 text-sm text-red-600 dark:text-red-400 border-b dark:border-gray-700">-2.76%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">DBS Programming</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95983</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Medtronic</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$138.69</td>
                                <td class="px-4 py-2 text-sm text-red-600 dark:text-red-400 border-b dark:border-gray-700">-1.52%</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">VNS Programming</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95976</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">LivaNova</td>
                                <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$116.34</td>
                                <td class="px-4 py-2 text-sm text-green-600 dark:text-green-400 border-b dark:border-gray-700">+0.87%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p class="text-xs text-gray-500 mt-3">Source: CMS Medicare Physician Fee Schedule, 2025 Final Rule</p>
            </div>

            <!-- Sources and Citations -->
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h3 class="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Medtronic Sources:</h3>
                        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
                            <li>Medtronic Q3 FY25 Financial Results</li>
                            <li>Medtronic 2023 Neuromodulation Product Performance Report</li>
                            <li>FDA Approval for Percept™ RC neurostimulator (Jan 2024)</li>
                            <li>Long-term efficacy and safety of thalamic stimulation for drug-resistant partial epilepsy</li>
                            <li>SANTE Study: Deep Brain Stimulation for Epilepsy</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">LivaNova Sources:</h3>
                        <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
                            <li>LivaNova Q4 and Full-Year 2023/2024 Results</li>
                            <li>LivaNova VNS Therapy System Drug-Resistant Epilepsy Cost Savings Report</li>
                            <li>Journal of Neurology (January 2022) meta-analysis</li>
                            <li>CMS Reimbursement Updates for Dravet Syndrome (2020)</li>
                            <li>CMS Reimbursement Updates for Lennox-Gastaut Syndrome (2022)</li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <h3 class="text-md font-semibold mb-2 text-gray-700 dark:text-gray-300">Market Data Sources:</h3>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
                        <li>Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
                        <li>Neuromodulation Market Size Report (2024-2028)</li>
                        <li>CMS Medicare Physician Fee Schedule, 2025 Final Rule</li>
                        <li>Grand View Research, "Epilepsy Monitoring Devices Market" (2023)</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}

// Initialize charts for the comparative neuromodulation dashboard
function initializeNeuromodulationEpilepsyCharts(medtronicData, livanovaData) {
    const isDarkMode = document.documentElement.classList.contains('dark');
    const textColor = isDarkMode ? '#ffffff' : '#666666';
    const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

    // Medtronic Regional Distribution
    new Chart(document.getElementById('neuromodulation-medtronic-regional').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['North America', 'Europe', 'Asia Pacific', 'Rest of World'],
            datasets: [{
                data: [62, 21, 12, 5],
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
                legend: { position: 'right', labels: { color: textColor } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // LivaNova Regional Revenue
    new Chart(document.getElementById('neuromodulation-livanova-regional').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['2022', '2023', '2024'],
            datasets: [
                {
                    label: 'United States',
                    data: [374.5, 407.5, 441.0],
                    backgroundColor: 'rgba(59, 130, 246, 0.7)'
                },
                {
                    label: 'Europe',
                    data: [50.3, 57.4, 54.9],
                    backgroundColor: 'rgba(16, 185, 129, 0.7)'
                },
                {
                    label: 'Rest of World',
                    data: [52.2, 54.8, 58.3],
                    backgroundColor: 'rgba(249, 115, 22, 0.7)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, ticks: { color: textColor }, grid: { color: gridColor } },
                y: {
                    stacked: true,
                    ticks: { color: textColor, callback: value => `$${value}M` },
                    grid: { color: gridColor },
                    title: { display: true, text: 'Revenue (Millions USD)', color: textColor }
                }
            },
            plugins: {
                legend: { position: 'top', labels: { color: textColor } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: $${context.raw}M`;
                        }
                    }
                }
            }
        }
    });

    // Growth Rate Comparison
    new Chart(document.getElementById('neuromodulation-growth-comparison').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Q1 FY24', 'Q2 FY24', 'Q3 FY24', 'Q4 FY24', 'Q1 FY25', 'Q2 FY25', 'Q3 FY25'],
            datasets: [
                {
                    label: 'Medtronic Quarterly Growth (%)',
                    data: [4.0, 2.9, 2.4, 2.4, 8.9, 9.5, 12.0],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: false
                },
                {
                    label: 'LivaNova YoY Growth (%)',
                    data: [null, null, null, 9.0, null, null, 6.6],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: false,
                    pointRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: { color: textColor, callback: value => `${value}%` },
                    grid: { color: gridColor },
                    title: { display: true, text: 'Growth Rate (%)', color: textColor }
                },
                x: { ticks: { color: textColor }, grid: { color: gridColor } }
            },
            plugins: {
                legend: { position: 'top', labels: { color: textColor } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.raw === null) {
                                return `${context.dataset.label}: No data`;
                            }
                            return `${context.dataset.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Epilepsy Market Trends
    new Chart(document.getElementById('neuromodulation-market-trends').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025 (est)', '2026 (est)', '2027 (est)'],
            datasets: [
                {
                    label: 'Market Size ($M)',
                    type: 'line',
                    data: [527, 548, 571, 594, 619],
                    borderColor: 'rgba(139, 92, 246, 1)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    yAxisID: 'y',
                    tension: 0.4,
                    fill: true,
                    order: 0
                },
                {
                    label: 'Growth Rate (%)',
                    data: [4.0, 4.1, 4.1, 4.2, 4.2],
                    backgroundColor: 'rgba(249, 115, 22, 0.7)',
                    yAxisID: 'y1',
                    order: 1
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
                    ticks: { color: textColor, callback: value => `$${value}M` },
                    grid: { color: gridColor },
                    title: { display: true, text: 'Market Size (USD Million)', color: textColor }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    max: 10,
                    ticks: { color: textColor, callback: value => `${value}%` },
                    grid: { drawOnChartArea: false, color: gridColor },
                    title: { display: true, text: 'Growth Rate (%)', color: textColor }
                },
                x: { ticks: { color: textColor }, grid: { color: gridColor } }
            },
            plugins: {
                legend: { position: 'top', labels: { color: textColor } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.dataset.label === 'Market Size ($M)') {
                                return `${context.dataset.label}: $${context.raw}M`;
                            } else {
                                return `${context.dataset.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        }
    });
}

function generateMedtronicDashboard(data) {
  return `
    <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
      <!-- Header -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
          <div class="flex flex-col md:flex-row justify-between items-start">
              <div>
                  <h1 class="text-3xl font-bold mb-2">Medtronic - Epilepsy Neuromodulation</h1>
                  <p class="text-lg text-gray-600 dark:text-gray-300">Deep Brain Stimulation (DBS) Analysis</p>
              </div>
              <div class="text-right mt-4 md:mt-0">
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Sources: SEC Filings, Clinical Data</p>
              </div>
          </div>
      </div>

      <!-- Key Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Neuromodulation Revenue (Q3 FY25)</h3>
              <p class="mt-2 text-3xl font-bold">$476M</p>
              <p class="text-sm text-green-600 dark:text-green-400">+12% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: Medtronic Q3 FY25 Financial Results</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Nine-Month Revenue (FY25)</h3>
              <p class="mt-2 text-3xl font-bold">$1.41B</p>
              <p class="text-sm text-green-600 dark:text-green-400">+11% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: Medtronic Q3 FY25 Financial Results</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Share</h3>
              <p class="mt-2 text-3xl font-bold">46%</p>
              <p class="text-sm text-gray-600 dark:text-gray-300">DBS Market Leader</p>
              <p class="text-xs text-gray-500 mt-2">Source: Neuromodulation Market Size Report</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Medicare Reimbursement (DBS)</h3>
              <p class="mt-2 text-3xl font-bold">$35,826</p>
              <p class="text-sm text-red-600 dark:text-red-400">-3.31% YoY</p>
              <p class="text-xs text-gray-500 mt-2">Source: CMS Medicare Physician Fee Schedule</p>
          </div>
      </div>

      <!-- Technology and DBS Details -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-6">Deep Brain Stimulation Technology</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                  <div class="flex items-center mb-4">
                      <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                      </div>
                      <h3 class="text-lg font-semibold">Percept™ DBS Systems</h3>
                  </div>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Percept™ PC:</strong> First FDA-approved DBS system with BrainSense™ technology</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Percept™ RC:</strong> Rechargeable neurostimulator approved January 2024</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>BrainSense™ Technology:</strong> Captures brain signals while delivering therapy</span>
                      </li>
                  </ul>
              </div>
              <div>
                  <div class="flex items-center mb-4">
                      <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                      </div>
                      <h3 class="text-lg font-semibold">Clinical Evidence & Approvals</h3>
                  </div>
                  <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>FDA Approval:</strong> Reducing seizure frequency in adults with partial-onset seizures refractory to medications</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>SANTE Study:</strong> 69% median reduction in seizure frequency over 5 years</span>
                      </li>
                      <li class="flex items-start">
                          <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span><strong>Mechanism:</strong> Delivers targeted electrical stimulation to the anterior nucleus of the thalamus (ANT)</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Quarterly Revenue Trend</h2>
              <div class="h-80">
                  <canvas id="revenueChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Medtronic Quarterly Reports FY2023-FY2025</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Growth Rate Trend</h2>
              <div class="h-80">
                  <canvas id="growthChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Medtronic Quarterly Reports FY2023-FY2025</p>
          </div>
      </div>

      <!-- Second Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Regional Market Distribution</h2>
              <div class="h-80">
                  <canvas id="regionChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Medtronic SEC Filing Q3 FY2025</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Competitive Landscape</h2>
              <div class="h-80">
                  <canvas id="competitiveChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Neuromodulation Market Size Report</p>
          </div>
      </div>

      <!-- Patient & Payer Segments -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Epilepsy Market by Patient Segment</h2>
              <div class="h-80">
                  <canvas id="patientSegmentChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Medtronic Market Research, 2024</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Epilepsy Market by Payer</h2>
              <div class="h-80">
                  <canvas id="payerChart"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">Source: Medtronic Market Research, 2024</p>
          </div>
      </div>

      <!-- Medicare Reimbursement -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Medicare Reimbursement Details</h2>
          <div class="overflow-x-auto">
              <table class="min-w-full">
                  <thead>
                      <tr>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Procedure</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">CPT Code</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Description</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">2024 Payment</th>
                          <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">YoY Change</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">DBS Implantation</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">61886</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Insertion or replacement of cranial neurostimulator pulse generator or receiver, with connection to 2 or more leads</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$35,826.45</td>
                          <td class="px-4 py-2 text-sm text-red-600 dark:text-red-400 border-b dark:border-gray-700">-3.31%</td>
                      </tr>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">DBS Programming</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95983</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Electronic analysis of implanted neurostimulator pulse generator/transmitter with brain neurostimulator programming</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$138.69</td>
                          <td class="px-4 py-2 text-sm text-red-600 dark:text-red-400 border-b dark:border-gray-700">-1.52%</td>
                      </tr>
                      <tr>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">DBS Analysis</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95970</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Electronic analysis of implanted neurostimulator pulse generator</td>
                          <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$146.69</td>
                          <td class="px-4 py-2 text-sm text-green-600 dark:text-green-400 border-b dark:border-gray-700">+5.01%</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <p class="text-xs text-gray-500 mt-3">Source: CMS Medicare Physician Fee Schedule, 2025 Final Rule</p>
      </div>

      <!-- Sources and Citations -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
          <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
              <li>Medtronic Q3 FY25 Financial Results (January 24, 2025)</li>
              <li>Medtronic 2023 Neuromodulation Product Performance Report</li>
              <li>FDA Approval for Percept™ RC neurostimulator (January 2024)</li>
              <li>Long-term efficacy and safety of thalamic stimulation for drug-resistant partial epilepsy</li>
              <li>SANTE Study: Deep Brain Stimulation for Epilepsy</li>
              <li>Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
              <li>Neuromodulation Market Size Report (2024-2028)</li>
              <li>CMS Medicare Physician Fee Schedule, 2025 Final Rule</li>
          </ul>
      </div>
    </div>
  `;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
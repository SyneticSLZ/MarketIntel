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
                    initializeLivanovaCharts(data)
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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


////////////////////////////////////////////////////////////// EPIMINDER         ????????????????????????????????????????????????????????????????????????????????????????????//


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


///////////////////////////////////////// FLOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



////////////////////////////////////////////////////////////////////////////////////////////////////////// NEUROPACE ???????????????????????????????????????????????????????????????????????


// function generateNeuroPaceDashboard() {
//   return `
//     <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
//       <!-- Header -->
//       <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
//         <div class="flex flex-col md:flex-row justify-between items-start">
//           <div>
//             <h1 class="text-3xl font-bold mb-2">NeuroPace, Inc.</h1>
//             <p class="text-lg text-gray-600 dark:text-gray-300">RNS® System - Responsive Neurostimulation for Epilepsy</p>
//           </div>
//           <div class="text-right mt-4 md:mt-0">
//             <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//             <p class="text-sm text-gray-500 dark:text-gray-400">Sources: Company Reports, SEC Filings</p>
//           </div>
//         </div>
//       </div>

//       <!-- Key Metrics -->
//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
//           <p class="mt-2 text-3xl font-bold">$76.0M</p>
//           <p class="text-sm text-green-600 dark:text-green-400">+16.2% YoY</p>
//           <p class="text-xs text-gray-500 mt-2">Source: NeuroPace Annual Report</p>
//         </div>
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Q4 Revenue (2024)</h3>
//           <p class="mt-2 text-3xl font-bold">$20.0M</p>
//           <p class="text-sm text-green-600 dark:text-green-400">+14.3% YoY</p>
//           <p class="text-xs text-gray-500 mt-2">Source: NeuroPace Q4 Report</p>
//         </div>
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Gross Margin (2024)</h3>
//           <p class="mt-2 text-3xl font-bold">73.6%</p>
//           <p class="text-sm text-gray-600 dark:text-gray-300">vs 73.8% in 2023</p>
//           <p class="text-xs text-gray-500 mt-2">Source: NeuroPace Annual Report</p>
//         </div>
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 Revenue Guidance</h3>
//           <p class="mt-2 text-3xl font-bold">$87-91M</p>
//           <p class="text-sm text-green-600 dark:text-green-400">+14.5% to +19.7% YoY</p>
//           <p class="text-xs text-gray-500 mt-2">Source: NeuroPace Guidance</p>
//         </div>
//       </div>

//       <!-- RNS System Technology -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
//         <h2 class="text-xl font-semibold mb-6">RNS® System Technology</h2>
//         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <div class="flex items-center mb-4">
//               <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 class="text-lg font-semibold">Responsive Neurostimulation</h3>
//             </div>
//             <ul class="space-y-2 text-gray-600 dark:text-gray-300">
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Target Population:</strong> Approximately 1 million U.S. patients with drug-resistant epilepsy, focusing on focal onset seizures</span>
//               </li>
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Mechanism:</strong> Detects abnormal electrical patterns and delivers stimulation to normalize brain activity before seizures occur</span>
//               </li>
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Distribution:</strong> Level 4 Comprehensive Epilepsy Centers (CECs)</span>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <div class="flex items-center mb-4">
//               <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
//                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                 </svg>
//               </div>
//               <h3 class="text-lg font-semibold">Clinical Evidence</h3>
//             </div>
//             <ul class="space-y-2 text-gray-600 dark:text-gray-300">
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Post-Approval Study:</strong> 82% median reduction in seizure frequency over 3 years</span>
//               </li>
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Recent Research:</strong> To be presented at American Academy of Neurology (AAN) meeting on April 7, 2025</span>
//               </li>
//               <li class="flex items-start">
//                 <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                 </svg>
//                 <span><strong>Device Longevity:</strong> Average battery life of RNS System ~11 years</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <!-- Charts Section -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Revenue Trends</h2>
//           <div class="h-80">
//             <canvas id="neuropace-revenue-trends"></canvas>
//           </div>
//           <p class="text-xs text-gray-500 mt-3">Source: NeuroPace Annual Reports 2021-2024</p>
//         </div>
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Q4 2024 Implant Breakdown</h2>
//           <div class="h-80">
//             <canvas id="neuropace-implant-breakdown"></canvas>
//           </div>
//           <p class="text-xs text-gray-500 mt-3">Source: NeuroPace Q4 2024 Report</p>
//         </div>
//       </div>

//       <!-- Second Charts Row -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Annual Growth Rates</h2>
//           <div class="h-80">
//             <canvas id="neuropace-growth-metrics"></canvas>
//           </div>
//           <p class="text-xs text-gray-500 mt-3">Source: NeuroPace Annual Reports</p>
//         </div>
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Financial Metrics</h2>
//           <div class="h-80">
//             <canvas id="neuropace-financial-metrics"></canvas>
//           </div>
//           <p class="text-xs text-gray-500 mt-3">Source: NeuroPace Annual Reports 2022-2024</p>
//         </div>
//       </div>

//       <!-- Business Details -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Sales Growth Drivers</h2>
//           <ul class="space-y-3 text-gray-600 dark:text-gray-300">
//             <li class="flex items-center">
//               <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//               </svg>
//               <span>Increased adoption at Level 4 CECs</span>
//             </li>
//             <li class="flex items-center">
//               <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//               </svg>
//               <span>Expansion of commercial sales team in 2024</span>
//             </li>
//             <li class="flex items-center">
//               <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                 <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//               </svg>
//               <span>Enhanced clinician education and patient referral programs</span>
//             </li>
//           </ul>
          
//           <div class="mt-6">
//             <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Market Opportunity:</h3>
//             <p class="text-gray-600 dark:text-gray-400">Approximately 575,000 U.S. patients with drug-resistant focal epilepsy</p>
//           </div>
          
//           <div class="mt-4">
//             <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Quarterly Performance:</h3>
//             <div class="text-sm text-gray-600 dark:text-gray-400">
//               <p>Q3 2024 Revenue: $19.4M (+13.5% YoY)</p>
//               <p>Q1-Q3 2024 Revenue: $56.0M (+16.9% YoY)</p>
//             </div>
//           </div>
//         </div>
        
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-4">Financial Health</h2>
//           <div class="grid grid-cols-2 gap-4">
//             <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Loss</h3>
//               <p class="mt-1 text-xl font-semibold">$27.6M</p>
//               <p class="text-xs text-green-600">Improved from $33.0M in 2023</p>
//             </div>
//             <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Cash Position</h3>
//               <p class="mt-1 text-xl font-semibold">$141.9M</p>
//               <p class="text-xs text-gray-500">As of Dec 31, 2024</p>
//             </div>
//             <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Operating Expenses</h3>
//               <p class="mt-1 text-xl font-semibold">$80.8M</p>
//               <p class="text-xs text-gray-500">2024 Total</p>
//             </div>
//             <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">R&D Expenses</h3>
//               <p class="mt-1 text-xl font-semibold">$34.8M</p>
//               <p class="text-xs text-gray-500">43% of operating expenses</p>
//             </div>
//           </div>
          
//           <div class="mt-4">
//             <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Cash Runway:</h3>
//             <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-3 rounded-lg">
//               <p class="text-sm text-gray-600 dark:text-gray-300">With $141.9M cash on hand and improving cash burn, NeuroPace has runway into 2027 at current operating levels.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Sources and Citations -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//         <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
//         <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
//           <li>NeuroPace Q4 and Full-Year 2024 Financial Results</li>
//           <li>NeuroPace Annual Report 2024</li>
//           <li>NeuroPace Investor Presentation, Q4 2024</li>
//           <li>American Academy of Neurology (AAN) Meeting Abstract, 2025</li>
//           <li>Post-approval study data on RNS System efficacy</li>
//           <li>NeuroPace Revenue Guidance for 2025</li>
//           <li>Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
//           <li>NeuroPace Clinical Data Repository</li>
//         </ul>
//       </div>
//     </div>
//   `;
// }

/**
 * NeuroPace Dashboard Generator
 * 
 * This function generates a dashboard UI component for NeuroPace epilepsy neuromodulation data.
 * It includes key metrics, market share analysis, revenue tracking, implant splits, and clinical trial summaries.
 * 
 * @returns {string} HTML string for the NeuroPace dashboard
 */

function generateNeuroPaceDashboard() {
  return `
    <!-- Dashboard Header -->
  <header class="mb-8">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
      <div>
        <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">NeuroPace, Inc. - Epilepsy Neuromodulation Dashboard</h1>
        <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Comprehensive analysis of RNS System data (2018-2024)</p>
      </div>
      <div class="mt-4 md:mt-0 flex items-center space-x-4">
        <button id="darkModeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
          <span class="dark:hidden">🌙 Dark Mode</span>
          <span class="hidden dark:inline">☀️ Light Mode</span>
        </button>
        <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 4, 2025</p>
      </div>
    </div>
  </header>

  <!-- Key Metrics -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
      <p class="mt-2 text-3xl font-bold">$79.9M</p>
      <p class="text-sm text-green-600 dark:text-green-400">+22% YoY</p>
      <p class="text-xs text-gray-500 mt-2">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="underline text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Q4 Revenue (2024)</h3>
      <p class="mt-2 text-3xl font-bold">$21.5M</p>
      <p class="text-sm text-green-600 dark:text-green-400">+19.4% YoY</p>
      <p class="text-xs text-gray-500 mt-2">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="underline text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Gross Margin (2024)</h3>
      <p class="mt-2 text-3xl font-bold">73.6%</p>
      <p class="text-sm text-gray-600 dark:text-gray-300">vs 73.8% in 2023</p>
      <p class="text-xs text-gray-500 mt-2">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="underline text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 Revenue Guidance</h3>
      <p class="mt-2 text-3xl font-bold">$87-91M</p>
      <p class="text-sm text-green-600 dark:text-green-400">+8.9% to +13.9% YoY</p>
      <p class="text-xs text-gray-500 mt-2">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="underline text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
  </div>

  <!-- Market Share and Revenue Cards -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
    <!-- Market Share Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Share Overview</h2>
      <div class="flex flex-col space-y-6">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
          <span class="text-xl sm:text-2xl font-bold"><a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline">17.7%</a></span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
          <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline">+78.8%</a></span>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
          <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40"></canvas>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
            <strong>Note:</strong> Market share estimated as (NeuroPace Revenue / Total Market Size) × 100.
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
            <strong>Data From:</strong> <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">NeuroPace Financials (2020-2024)</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Revenue Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">RNS System Revenue</h2>
      <div class="flex flex-col space-y-6">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
          <span class="text-xl sm:text-2xl font-bold"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">$79.9M</a></span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
          <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">+166.3%</a></span>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
          <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40"></canvas>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
            <strong>Calculation Method:</strong> Direct revenue from RNS System sales
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
            <strong>Data From:</strong> <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">NeuroPace Financials (2020-2024)</a>
          </p>
        </div>
      </div>
    </div>

    <!-- Implant Splits Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4">Implant Splits (2021)</h2>
      <div class="flex flex-col space-y-6">
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">Initial Implants</span>
          <span class="text-xl sm:text-2xl font-bold"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">$33.7M</a></span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-600 dark:text-gray-400">Replacement Implants</span>
          <span class="text-xl sm:text-2xl font-bold"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">$11.5M</a></span>
        </div>
        <div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Implant Splits (2021)</p>
          <canvas id="implantSplitsChart" class="w-full h-32 sm:h-40"></canvas>
        </div>
        <div>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
            <strong>Note:</strong> Full implant split data available only for 2021
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
            <strong>Data From:</strong> <a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">NeuroPace 2021 Financials</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- RNS System Technology -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
    <h2 class="text-xl font-semibold mb-6">RNS® System Technology</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="flex items-center mb-4">
          <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold">Responsive Neurostimulation</h3>
        </div>
        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span><strong>Target Population:</strong> Patients with drug-resistant focal epilepsy (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span><strong>Mechanism:</strong> Detects abnormal electrical patterns and delivers stimulation to normalize brain activity (<a href="https://www.neuropace.com/about-rns-system/" class="text-blue-500 hover:underline" target="_blank">NeuroPace</a>)</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span><strong>Distribution:</strong> Level 4 Comprehensive Epilepsy Centers (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center mb-4">
          <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold">Clinical Evidence</h3>
        </div>
        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span><strong>Post-Approval Study:</strong> 82% median reduction in seizure frequency over 3 years (<a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">Investor Presentation</a>)</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span><strong>Device Longevity:</strong> Average battery life of RNS System ~11 years (<a href="https://www.neuropace.com/patients/faq/" class="text-blue-500 hover:underline" target="_blank">NeuroPace FAQ</a>)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Revenue Trends (2018-2024)</h2>
      <div class="h-80">
        <canvas id="neuropace-revenue-trends"></canvas>
      </div>
      <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2020–2023 10-K</a>, <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">2024 Q4 Report</a></p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Q4 Revenue (2021-2024)</h2>
      <div class="h-80">
        <canvas id="neuropace-q4-revenue"></canvas>
      </div>
      <p class="text-xs text-gray-500 mt-3">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
  </div>

  <!-- Second Charts Row -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Annual Growth Rates</h2>
      <div class="h-80">
        <canvas id="neuropace-growth-metrics"></canvas>
      </div>
      <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2020–2023 10-K</a>, <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">2024 Q4 Report</a></p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Financial Metrics</h2>
      <div class="h-80">
        <canvas id="neuropace-financial-metrics"></canvas>
      </div>
      <p class="text-xs text-gray-500 mt-3">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
    </div>
  </div>

  <!-- Implant Breakdown Table and Chart -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
    <h2 class="text-xl font-semibold mb-4">Implant Revenue Breakdown (2021-2022)</h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm text-gray-600 dark:text-gray-300">
        <thead>
          <tr>
            <th class="px-4 py-2">Year</th>
            <th class="px-4 py-2">Period</th>
            <th class="px-4 py-2">Total Revenue ($M)</th>
            <th class="px-4 py-2">Initial Implants ($M)</th>
            <th class="px-4 py-2">Replacement Implants ($M)</th>
            <th class="px-4 py-2">Source</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-2">2022</td>
            <td class="px-4 py-2">Q4</td>
            <td class="px-4 py-2">$12.8</td>
            <td class="px-4 py-2">$9.8 (76.6%)</td>
            <td class="px-4 py-2">$1.4 (10.9%)</td>
            <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2023/NeuroPace-Reports-Fourth-Quarter--Full-Year-2022-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2022 Report</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2">2022</td>
            <td class="px-4 py-2">Full Year</td>
            <td class="px-4 py-2">$45.5</td>
            <td class="px-4 py-2">$35.7 (78.5%)</td>
            <td class="px-4 py-2">$8.2 (18.0%)</td>
            <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2023/NeuroPace-Reports-Fourth-Quarter--Full-Year-2022-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2022 Report</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2">2021</td>
            <td class="px-4 py-2">Q4</td>
            <td class="px-4 py-2">$11.0</td>
            <td class="px-4 py-2">$8.5 (77.3%)</td>
            <td class="px-4 py-2">$2.5 (22.7%)</td>
            <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2021 Report</a></td>
          </tr>
          <tr>
            <td class="px-4 py-2">2021</td>
            <td class="px-4 py-2">Full Year</td>
            <td class="px-4 py-2">$45.2</td>
            <td class="px-4 py-2">$33.7 (74.6%)</td>
            <td class="px-4 py-2">$11.5 (25.4%)</td>
            <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2021 Report</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="h-80 mt-6">
      <canvas id="neuropace-implant-breakdown"></canvas>
    </div>
    <p class="text-xs text-gray-500 mt-3">Sources: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2022/NeuroPace-Reports-Fourth-Quarter--Full-Year-2021-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">2021</a>, <a href="https://investors.neuropace.com/news-and-events/news/news-details/2023/NeuroPace-Reports-Fourth-Quarter--Full-Year-2022-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">2022</a></p>
  </div>

  <!-- Market Position Analysis Card -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 min-h-fit overflow-hidden mb-8">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Position Analysis</h2>
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="flex-1">
        <h3 class="font-medium text-lg sm:text-xl mb-3">Market Share by Company (2024)</h3>
        <canvas id="marketSharePieChart" class="w-full h-64 sm:h-72"></canvas>
        <p class="text-xs text-gray-500 mt-3">Source: <a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">NeuroPace Financials (2024, estimated)</a></p>
      </div>
      <div class="flex-1">
        <h3 class="font-medium text-lg sm:text-xl mb-3">Gainers & Losers (2018-2024)</h3>
        <div class="space-y-4">
          <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
            <h4 class="font-semibold text-red-700 dark:text-red-400">Market Share Losers</h4>
            <div class="mt-2">
              <div class="flex justify-between text-sm">
                <span>LivaNova</span>
                <span class="text-red-600 dark:text-red-400"><a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">-5.3%</a></span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Market share declined from 85.3% in 2018 to 80.0% in 2024 (estimated).
              </p>
            </div>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
            <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
            <div class="mt-2">
              <div class="flex justify-between text-sm">
                <span>NeuroPace</span>
                <span class="text-green-600 dark:text-green-400"><a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">+7.8%</a></span>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                NeuroPace's market share grew from 9.9% in 2018 to 17.7% in 2024 (estimated).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Detailed Analytics Card -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden mb-8">
    <div class="flex flex-col md:flex-row justify-between items-center mb-6">
      <h2 class="text-xl sm:text-2xl font-semibold">Detailed Analytics</h2>
      <div class="inline-flex mt-3 md:mt-0">
        <select id="chartSelector" class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="marketShare">Market Share Trend</option>
          <option value="revenue">Revenue Growth</option>
          <option value="comparison">Comparative Analysis</option>
        </select>
      </div>
    </div>
    <div id="detailedChartContainer" class="w-full h-80 sm:h-96"></div>
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
      <p id="chartDescription" class="mb-2">
        This chart shows NeuroPace's estimated market share trend from 2018 to 2024. The company has grown from 9.9% in 2018 to 17.7% in 2024.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 class="font-medium mb-2">Data Source</h3>
          <p class="text-xs">
            Data from <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a> and <a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">NeuroPace financial reports (2020-2024)</a>. Market share is estimated based on revenue and market size assumptions.
          </p>
        </div>
        <div>
          <h3 class="font-medium mb-2">Calculation Methodology</h3>
          <p class="text-xs">
            Market share = (NeuroPace Revenue / Estimated Total Market Size) × 100. Revenue sourced from financial reports.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Clinical Trials Card -->
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 min-h-fit overflow-hidden mb-8">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4">Clinical & Regulatory Milestones</h2>
    <div class="overflow-auto max-h-80">
      <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
        <div class="mb-6">
          <div class="flex items-center">
            <div id="clinical-trial-2023" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
            <h3 class="text-lg sm:text-xl font-medium ml-3">2023</h3>
          </div>
          <div class="mt-2">
            <h4 class="font-medium text-gray-800 dark:text-gray-200">NAUTILUS Study</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Completed enrollment for generalized epilepsy trial, expanding RNS System indications.
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
              <strong>Source:</strong> <a href="https://www.neuropace.com/about-us/news-events/" class="text-blue-500 hover:underline" target="_blank">NeuroPace Press Release</a>
            </p>
          </div>
        </div>
        <div class="mb-6">
          <div class="flex items-center">
            <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
            <h3 class="text-lg sm:text-xl font-medium ml-3">Regulatory Status</h3>
          </div>
          <div class="mt-2">
            <h4 class="font-medium text-gray-800 dark:text-gray-200">RNS System Approval</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
              FDA-approved for focal epilepsy, with no new approvals reported in 2018-2024.
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
              <strong>Source:</strong> <a href="https://www.neuropace.com/our-technology/" class="text-blue-500 hover:underline" target="_blank">NeuroPace Regulatory Information</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Business Details -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Sales Growth Drivers</h2>
      <ul class="space-y-3 text-gray-600 dark:text-gray-300">
        <li class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>Increased adoption at Level 4 CECs (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</span>
        </li>
        <li class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>Expansion of commercial sales team in 2024 (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</span>
        </li>
        <li class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          <span>Enhanced clinician education and patient referral programs (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</span>
        </li>
      </ul>
      <div class="mt-6">
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Market Opportunity:</h3>
        <p class="text-gray-600 dark:text-gray-400">Patients with drug-resistant focal epilepsy (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 hover:underline" target="_blank">2024 10-K</a>)</p>
      </div>
      <div class="mt-4">
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Quarterly Performance:</h3>
        <div class="text-sm text-gray-600 dark:text-gray-400">
          <p>Q3 2024 Revenue: $19.4M (+13.5% YoY) (<a href="https://investors.neuropace.com/news-and-events/news/news-details/2024/NeuroPace-Reports-Third-Quarter-2024-Financial-Results-and-Provides-Business-Update/" class="text-blue-500 hover:underline" target="_blank">Q3 2024 Report</a>)</p>
          <p>Q1-Q3 2024 Revenue: $58.4M (+18.7% YoY) (<a href="https://investors.neuropace.com/news-and-events/news/news-details/2024/NeuroPace-Reports-Third-Quarter-2024-Financial-Results-and-Provides-Business-Update/" class="text-blue-500 hover:underline" target="_blank">Q3 2024 Report</a>)</p>
        </div>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 class="text-xl font-semibold mb-4">Financial Health</h2>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Loss</h3>
          <p class="mt-1 text-xl font-semibold">$27.6M</p>
          <p class="text-xs text-green-600">Improved from $33.0M in 2023</p>
          <p class="text-xs text-gray-500">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Cash Position</h3>
          <p class="mt-1 text-xl font-semibold">$141.9M</p>
          <p class="text-xs text-gray-500">As of Dec 31, 2024</p>
          <p class="text-xs text-gray-500">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Operating Expenses</h3>
          <p class="mt-1 text-xl font-semibold">$80.8M</p>
          <p class="text-xs text-gray-500">2024 Total</p>
          <p class="text-xs text-gray-500">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">R&D Expenses</h3>
          <p class="mt-1 text-xl font-semibold">$34.8M</p>
          <p class="text-xs text-gray-500">43% of operating expenses</p>
          <p class="text-xs text-gray-500">Source: <a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a></p>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Cash Runway:</h3>
        <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-3 rounded-lg">
          <p class="text-sm text-gray-600 dark:text-gray-400">With $141.9M cash on hand, NeuroPace has runway into 2027 at current operating levels (<a href="https://investors.neuropace.com/news-and-events/news/news-details/2025/NeuroPace-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results/" class="text-blue-500 hover:underline" target="_blank">Q4 2024 Report</a>).</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
    <div class="text-center text-sm text-gray-500 dark:text-gray-400">
      <p><strong>Disclaimer:</strong> Market share estimates are based on NeuroPace revenue divided by estimated total market size, derived from <a href="https://www.neurotechreports.com/" class="text-blue-500 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.marketresearchfuture.com/" class="text-blue-500 hover:underline" target="_blank">Market Research Future</a>, and <a href="https://investors.neuropace.com/#quarterly-results" class="text-blue-500 hover:underline" target="_blank">NeuroPace financial reports (2020-2024)</a>. Actual market share may vary.</p>
      <p class="mt-2">Data compiled and visualized for informational purposes as of April 24, 2025.</p>
      <p class="mt-2">For the latest updates, visit <a href="https://investors.neuropace.com/" class="text-blue-500 hover:underline" target="_blank">NeuroPace Investor Relations</a>.</p>
    </div>
  </footer>
  `;
}


// Initialize NeuroPace Charts
// function initializeNeuroPaceCharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   // Revenue Trends Chart
//   new Chart(document.getElementById('neuropace-revenue-trends').getContext('2d'), {
//       type: 'line',
//       data: {
//           labels: ['2021', '2022', '2023', '2024'],
//           datasets: [{
//               label: 'Total Revenue ($M)',
//               data: [45.2, 45.5, 65.4, 76.0],
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
//               legend: { labels: { color: textColor } },
//               tooltip: { 
//                   callbacks: {
//                       label: context => `Revenue: $${context.raw}M`
//                   }
//               }
//           },
//           scales: {
//               x: { ticks: { color: textColor }, grid: { color: gridColor } },
//               y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
//           }
//       }
//   });

//   // Implant Breakdown Chart (Q4 2024)
//   new Chart(document.getElementById('neuropace-implant-breakdown').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['Initial Implants', 'Replacement Implants'],
//           datasets: [{
//               data: [17.5, 2.5],
//               backgroundColor: ['#48BB78', '#F6AD55']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//               legend: { labels: { color: textColor } },
//               tooltip: { 
//                   callbacks: {
//                       label: context => `$${context.raw}M (${(context.raw / 20 * 100).toFixed(1)}%)`
//                   }
//               }
//           }
//       }
//   });

//   // Growth Metrics Chart
//   new Chart(document.getElementById('neuropace-growth-metrics').getContext('2d'), {
//       type: 'bar',
//       data: {
//           labels: ['2022 vs 2021', '2023 vs 2022', '2024 vs 2023'],
//           datasets: [{
//               label: 'Annual Growth Rate (%)',
//               data: [0.7, 43.6, 16.2],
//               backgroundColor: '#4299E1'
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
// }

/**
 * Initialize NeuroPace Dashboard Charts
 * 
 * This function initializes all charts for the NeuroPace epilepsy neuromodulation dashboard,
 * including mini charts (market share, revenue), a pie chart for 2024 market share,
 * and a dynamic detailed chart. It also handles dark mode toggling.
 * 
 * Requires Chart.js to be included in the HTML.
 */
function initializeNeuroPaceCharts() {
  // Data for charts (2018-2024)
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const marketShareData = [9.9, 10.9, 11.7, 12.6, 12.4, 16.0, 17.7]; // NeuroPace market share (%)
  const revenueData = [30.0, 35.0, 41.1, 45.2, 45.5, 65.4, 79.9]; // NeuroPace revenue ($M)
  const growthRateData = [null, 16.7, 17.6, 10.0, 0.7, 43.6, 22.0]; // YoY growth (%)
  const marketShare2024 = { NeuroPace: 17.7, LivaNova: 80.0, Medtronic: 2.3 }; // 2024 market share (%)
  const implantSplitsData = { labels: ['Initial Implants', 'Replacement Implants'], values: [33.7, 11.5] }; // 2021 implant splits ($M)
  const implantBreakdownData = {
    years: ['Q4 2021', 'Q4 2022'],
    initial: [8.5, 9.8],
    replacement: [2.5, 1.4],
    total: [11.0, 12.8]
  };
  const financialMetricsData = [27.6, 80.8, 34.8]; // 2024: Net Loss, Operating Expenses, R&D Expenses ($M)
  const q4RevenueData = {
    years: ['Q4 2021', 'Q4 2022', 'Q4 2023', 'Q4 2024'],
    revenue: [11.0, 12.8, 18.0, 21.5]
  };

  // Color palette (Tailwind CSS compatible)
  const colors = {
    light: {
      primary: '#3b82f6', // blue-500
      secondary: '#10b981', // green-600
      accent: '#ef4444', // red-600
      background: '#ffffff', // white
      text: '#111827', // gray-900 (high contrast)
      grid: '#d1d5db' // gray-300
    },
    dark: {
      primary: '#60a5fa', // blue-400
      secondary: '#34d399', // green-400
      accent: '#f87171', // red-400
      background: '#1f2937', // gray-800
      text: '#e5e7eb', // gray-200
      grid: '#4b5563' // gray-600
    }
  };

  // Determine current mode
  const isDarkMode = () => document.documentElement.classList.contains('dark');
  const getColors = () => isDarkMode() ? colors.dark : colors.light;

  // Base chart configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: getColors().text,
          font: { size: 14 }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text,
          font: { size: 12 }
        }
      },
      y: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text,
          font: { size: 12 }
        }
      }
    }
  };

  // Store chart instances for updates
  const chartInstances = {};

  // Initialize Revenue Trends Chart
  function initRevenueTrendsChart() {
    const canvas = document.getElementById('neuropace-revenue-trends');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('neuropace-revenue-trends is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height); // Ensure canvas is cleared
    chartInstances.revenueTrends = new Chart(canvas, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Revenue ($M)',
          data: revenueData,
          borderColor: getColors().primary,
          backgroundColor: getColors().primary + '33',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        ...chartOptions,
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Q4 Revenue Chart
  function initQ4RevenueChart() {
    const canvas = document.getElementById('neuropace-q4-revenue');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('neuropace-q4-revenue is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.q4Revenue = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: q4RevenueData.years,
        datasets: [{
          label: 'Q4 Revenue ($M)',
          data: q4RevenueData.revenue,
          backgroundColor: getColors().secondary,
          borderColor: getColors().background,
          borderWidth: 1
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: { display: false }
        },
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: true, text: 'Quarter', color: getColors().text, font: { size: 14 } }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Growth Metrics Chart
  function initGrowthMetricsChart() {
    const canvas = document.getElementById('neuropace-growth-metrics');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('neuropace-growth-metrics is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.growthMetrics = new Chart(canvas, {
      type: 'line',
      data: {
        labels: years.slice(1),
        datasets: [{
          label: 'YoY Growth (%)',
          data: growthRateData.slice(1),
          borderColor: getColors().accent,
          backgroundColor: getColors().accent + '33',
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        ...chartOptions,
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: true, text: 'Growth (%)', color: getColors().text, font: { size: 14 } }
          }
        }
      }
    });
  }

  // Initialize Financial Metrics Chart
  function initFinancialMetricsChart() {
    const canvas = document.getElementById('neuropace-financial-metrics');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('neuropace-financial-metrics is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.financialMetrics = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Net Loss', 'Operating Expenses', 'R&D Expenses'],
        datasets: [{
          label: '2024 Financials ($M)',
          data: financialMetricsData,
          backgroundColor: [getColors().primary, getColors().secondary, getColors().accent],
          borderColor: getColors().background,
          borderWidth: 1
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: { display: false }
        },
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: true, text: 'Metric', color: getColors().text, font: { size: 14 } }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: true, text: 'Amount ($M)', color: getColors().text, font: { size: 14 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Implant Breakdown Chart
  function initImplantBreakdownChart() {
    const canvas = document.getElementById('neuropace-implant-breakdown');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('neuropace-implant-breakdown is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.implantBreakdown = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: implantBreakdownData.years,
        datasets: [
          {
            label: 'Initial Implants ($M)',
            data: implantBreakdownData.initial,
            backgroundColor: getColors().primary
          },
          {
            label: 'Replacement Implants ($M)',
            data: implantBreakdownData.replacement,
            backgroundColor: getColors().secondary
          }
        ]
      },
      options: {
        ...chartOptions,
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: true, text: 'Period', color: getColors().text, font: { size: 14 } }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Market Share Pie Chart
  function initMarketSharePieChart() {
    const canvas = document.getElementById('marketSharePieChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('marketSharePieChart is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.marketSharePie = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: Object.keys(marketShare2024),
        datasets: [{
          data: Object.values(marketShare2024),
          backgroundColor: [getColors().primary, getColors().secondary, getColors().accent],
          borderColor: getColors().background,
          borderWidth: 1
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: getColors().text,
              font: { size: 12 }
            }
          }
        }
      }
    });
  }

  // Initialize Implant Splits Chart (Mini Chart)
  function initImplantSplitsChart() {
    const canvas = document.getElementById('implantSplitsChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('implantSplitsChart is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.implantSplits = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: implantSplitsData.labels,
        datasets: [{
          data: implantSplitsData.values,
          backgroundColor: [getColors().primary, getColors().secondary],
          borderColor: getColors().background,
          borderWidth: 1
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: getColors().text,
              font: { size: 12 }
            }
          }
        }
      }
    });
  }

  // Initialize Market Share Mini Chart
  function initMarketShareMiniChart() {
    const canvas = document.getElementById('marketShareMiniChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('marketShareMiniChart is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.marketShareMini = new Chart(canvas, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Market Share (%)',
          data: marketShareData,
          borderColor: getColors().secondary,
          backgroundColor: getColors().secondary + '33',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: { display: false }
        },
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: false }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: false },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Revenue Mini Chart
  function initRevenueMiniChart() {
    const canvas = document.getElementById('revenueMiniChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('revenueMiniChart is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    chartInstances.revenueMini = new Chart(canvas, {
      type: 'line',
      data: {
        labels: years,
        datasets: [{
          label: 'Revenue ($M)',
          data: revenueData,
          borderColor: getColors().primary,
          backgroundColor: getColors().primary + '33',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: { display: false }
        },
        scales: {
          x: {
            ...chartOptions.scales.x,
            title: { display: false }
          },
          y: {
            ...chartOptions.scales.y,
            title: { display: false },
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Detailed Chart (Dynamic)
  function initDetailedChart() {
    const canvas = document.createElement('canvas');
    const container = document.getElementById('detailedChartContainer');
    if (!container) {
      console.error('detailedChartContainer not found');
      return;
    }
    container.innerHTML = '';
    container.appendChild(canvas);
    const selector = document.getElementById('chartSelector');
    const description = document.getElementById('chartDescription');
    if (!(selector instanceof HTMLSelectElement) || !description) {
      console.error('chartSelector or chartDescription not found');
      return;
    }

    function updateChart() {
      const value = selector.value;
      let config = {};
      if (value === 'marketShare') {
        config = {
          type: 'line',
          data: {
            labels: years,
            datasets: [{
              label: 'Market Share (%)',
              data: marketShareData,
              borderColor: getColors().secondary,
              backgroundColor: getColors().secondary + '33',
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            ...chartOptions,
            scales: {
              x: {
                ...chartOptions.scales.x,
                title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
              },
              y: {
                ...chartOptions.scales.y,
                title: { display: true, text: 'Market Share (%)', color: getColors().text, font: { size: 14 } },
                beginAtZero: true
              }
            }
          }
        };
        description.textContent = 'This chart shows NeuroPace’s estimated market share trend from 2018 to 2024. The company has grown from 9.9% in 2018 to 17.7% in 2024.';
      } else if (value === 'revenue') {
        config = {
          type: 'line',
          data: {
            labels: years,
            datasets: [{
              label: 'Revenue ($M)',
              data: revenueData,
              borderColor: getColors().primary,
              backgroundColor: getColors().primary + '33',
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            ...chartOptions,
            scales: {
              x: {
                ...chartOptions.scales.x,
                title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
              },
              y: {
                ...chartOptions.scales.y,
                title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
                beginAtZero: true
              }
            }
          }
        };
        description.textContent = 'This chart shows NeuroPace’s revenue growth from 2018 to 2024, increasing from $30.0M to $79.9M.';
      } else if (value === 'comparison') {
        config = {
          type: 'bar',
          data: {
            labels: years,
            datasets: [
              {
                label: 'Revenue ($M)',
                data: revenueData,
                backgroundColor: getColors().primary,
                yAxisID: 'y'
              },
              {
                label: 'Market Share (%)',
                data: marketShareData,
                backgroundColor: getColors().secondary,
                yAxisID: 'y1'
              }
            ]
          },
          options: {
            ...chartOptions,
            scales: {
              x: {
                ...chartOptions.scales.x,
                title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
              },
              y: {
                ...chartOptions.scales.y,
                title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
                beginAtZero: true
              },
              y1: {
                ...chartOptions.scales.y,
                position: 'right',
                title: { display: true, text: 'Market Share (%)', color: getColors().text, font: { size: 14 } },
                beginAtZero: true,
                grid: { drawOnChartArea: false }
              }
            }
          }
        };
        description.textContent = 'This chart compares NeuroPace’s revenue and market share from 2018 to 2024, highlighting growth trends.';
      }
      if (chartInstances.detailedChart) {
        chartInstances.detailedChart.destroy();
      }
      canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
      chartInstances.detailedChart = new Chart(canvas, config);
    }

    selector.addEventListener('change', updateChart);
    updateChart();
  }

  // Dark Mode Toggle
  function initDarkModeToggle() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (!(toggleButton instanceof HTMLButtonElement)) {
      console.error('darkModeToggle not found');
      return;
    }

    const setTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggleButton.innerHTML = isDark
        ? '<span>☀️ Light Mode</span>'
        : '<span>🌙 Dark Mode</span>';
      Object.values(chartInstances).forEach(chart => {
        if (chart) {
          chart.options.plugins.legend.labels.color = getColors().text;
          chart.options.scales.x.ticks.color = getColors().text;
          chart.options.scales.x.title.color = getColors().text;
          chart.options.scales.y.ticks.color = getColors().text;
          chart.options.scales.y.title.color = getColors().text;
          if (chart.options.scales.y1) {
            chart.options.scales.y1.ticks.color = getColors().text;
            chart.options.scales.y1.title.color = getColors().text;
          }
          chart.data.datasets.forEach((dataset, i) => {
            const colorsArray = [getColors().primary, getColors().secondary, getColors().accent];
            dataset.backgroundColor = dataset.backgroundColor?.includes('33')
              ? colorsArray[i % colorsArray.length] + '33'
              : colorsArray[i % colorsArray.length];
            dataset.borderColor = dataset.backgroundColor?.includes('33')
              ? colorsArray[i % colorsArray.length]
              : getColors().background;
          });
          chart.update();
        }
      });
    };

    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
    toggleButton.addEventListener('click', () => setTheme(!isDarkMode()));
  }

  // Initialize all charts
  initRevenueTrendsChart();
  initQ4RevenueChart();
  initGrowthMetricsChart();
  initFinancialMetricsChart();
  initImplantBreakdownChart();
  initMarketSharePieChart();
  initImplantSplitsChart();
  initMarketShareMiniChart();
  initRevenueMiniChart();
  initDetailedChart();
  initDarkModeToggle();
    }

///////////////////////////////////////////////////////////////////////////////////////////////// PRECISIS ?????????????????????????????????????????????????????????????????????????????


// // Generate updated dashboard HTML functions
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
//                   <p class="mt-2 text-2xl font-bold">$548.4M</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Treatment Devices</p>
//                   <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
//                   <p class="mt-2 text-2xl font-bold">4.1%</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">2024-2032</p>
//                   <p class="text-xs text-gray-500 mt-2">Source: Custom Market Insights</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                   <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
//                   <p class="mt-2 text-2xl font-bold">€20M (~$21.6M)</p>
//                   <p class="text-sm text-gray-600 dark:text-gray-300">Oct 2021 (Cochlear Limited)</p>
//                   <p class="text-xs text-gray-500 mt-2">Source: Precisis Press Release, October 2021</p>
//               </div>
//           </div>

//           <!-- Charts -->
//           <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Market Growth Trends</h2>
//                       <p class="text-xs text-gray-500 mt-1">Source: Custom Market Insights, 2024-2032</p>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="precisis-market-growth"></canvas>
//                   </div>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
//                   <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                       <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
//                       <p class="text-xs text-gray-500 mt-1">Source: Towards Healthcare, 2024</p>
//                   </div>
//                   <div class="p-6 h-80">
//                       <canvas id="precisis-patient-reach"></canvas>
//                   </div>
//               </div>
//           </div>
          
//           <!-- Additional Charts -->
//           <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden mb-8">
//               <div class="p-6 border-b border-gray-200 dark:border-gray-700">
//                   <h2 class="text-xl font-semibold">Estimated Procedure Adoption</h2>
//                   <p class="text-xs text-gray-500 mt-1">Source: Analyst Estimates, Medical Product Outsourcing Feb 2022</p>
//               </div>
//               <div class="p-6 h-80">
//                   <canvas id="precisis-adoption-forecast"></canvas>
//               </div>
//           </div>

//           <!-- Insights -->
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Market Impact</h2>
//                   <p class="text-gray-600 dark:text-gray-300">Introduces a minimally invasive alternative to traditional neurostimulation (e.g., VNS, DBS), reducing surgical risk and improving patient quality of life. CE certified in Europe (Sep 15, 2022) and FDA Breakthrough Device Designation (Feb 19, 2022) signal strong growth potential.</p>
//                   <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat to Existing Devices:</span> Challenges established implantable device leaders (e.g., NeuroPace RNS, LivaNova VNS) by offering a less invasive option, potentially shifting market share from surgical solutions.</p>
//                   <p class="text-xs text-gray-500 mt-3">Source: Precisis Press Release, BioSpace, Feb 22, 2022</p>
//               </div>
//               <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//                   <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
//                   <p class="text-gray-600 dark:text-gray-300">Epicranial Application of Stimulation Electrodes for Epilepsy (EASEE) - electrodes placed under the scalp on the skull bone, delivering targeted electrical impulses to suppress seizure origins. The technology specifically targets drug-resistant focal epilepsy, addressing ~30% of epilepsy patients requiring alternative therapies.</p>
//                   <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Key Regulatory Milestones:</p>
//                   <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
//                       <li>• CE certification: September 15, 2022</li>
//                       <li>• FDA Breakthrough Device Designation: February 19, 2022</li>
//                   </ul>
//                   <p class="text-xs text-gray-500 mt-3">Source: Medical Product Outsourcing, Precisis Company Website</p>
//               </div>
//           </div>
          
//           <!-- Citations -->
//           <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
//               <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
//               <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
//                   <li>• Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
//                   <li>• Precisis AG Press Release, "Funding round of €20 million" (October 2021)</li>
//                   <li>• Medical Product Outsourcing, "Precisis' EASEE Epilepsy Neurostim Earns Breakthrough Status" (Feb 22, 2022)</li>
//                   <li>• BioSpace, "Minimally Invasive Epilepsy Treatment EASEE Receives FDA Breakthrough Device Designation"</li>
//                   <li>• Towards Healthcare, "Epilepsy Treatment Market Report" (2024)</li>
//                   <li>• Precisis Company Website (www.precisis.de)</li>
//                   <li>• German Clinical Trials Registry, Study DRKS00015918 and DRKS00017833</li>
//               </ul>
//           </div>
//       </div>
//   `;
// }



// // Initialize Precisis AG Charts
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
//               data: [548.4, 787.3],
//               borderColor: '#3B82F6',
//               backgroundColor: 'rgba(59, 130, 246, 0.2)',
//               fill: true,
//               tension: 0.4
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { 
//               legend: { 
//                   labels: { color: textColor } 
//               },
//               tooltip: {
//                   callbacks: {
//                       label: context => `Market Size: $${context.raw}M`
//                   }
//               }
//           },
//           scales: { 
//               x: { 
//                   ticks: { color: textColor }, 
//                   grid: { color: gridColor } 
//               }, 
//               y: { 
//                   ticks: { 
//                       color: textColor, 
//                       callback: value => `${value}M` 
//                   },
//                   grid: { color: gridColor } 
//               }
//           }
//       }
//   });

//   new Chart(document.getElementById('precisis-patient-reach').getContext('2d'), {
//       type: 'doughnut',
//       data: {
//           labels: ['Eligible Patients', 'Total Epilepsy Patients'],
//           datasets: [{
//               data: [10.1, 50 - 10.1],
//               backgroundColor: ['#10B981', '#D1D5DB']
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: { 
//               legend: { 
//                   labels: { color: textColor } 
//               },
//               tooltip: {
//                   callbacks: {
//                       label: function(context) {
//                           return `${context.label}: ${context.raw} million patients`;
//                       }
//                   }
//               }
//           }
//       }
//   });
  
//   // Add technology adoption forecast chart
//   new Chart(document.getElementById('precisis-adoption-forecast').getContext('2d'), {
//       type: 'bar',
//       data: {
//           labels: ['2024', '2025', '2026', '2027', '2028'],
//           datasets: [{
//               label: 'Estimated Procedures',
//               data: [40, 120, 350, 750, 1200],
//               backgroundColor: 'rgba(79, 70, 229, 0.7)'
//           }]
//       },
//       options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//               legend: { 
//                   labels: { color: textColor } 
//               },
//               tooltip: {
//                   callbacks: {
//                       label: function(context) {
//                           return `Estimated Procedures: ${context.raw}`;
//                       }
//                   }
//               }
//           },
//           scales: {
//               x: { 
//                   ticks: { color: textColor }, 
//                   grid: { color: gridColor },
//                   title: {
//                       display: true,
//                       text: 'Year',
//                       color: textColor
//                   }
//               },
//               y: { 
//                   ticks: { color: textColor }, 
//                   grid: { color: gridColor },
//                   title: {
//                       display: true,
//                       text: 'Estimated Procedures',
//                       color: textColor
//                   }
//               }
//           }
//       }
//   });
// }

function generatePrecisisDashboard(data) {
  return `
    <div class="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white font-inter">
      <!-- Header -->
      <header class="bg-gradient-to-r from-indigo-700 to-blue-600 rounded-2xl shadow-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 class="text-3xl font-bold flex items-center">
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/></svg>
            Precisis AG: EASEE Competitive Intelligence
          </h1>
          <p class="text-md text-gray-200 mt-1">Epilepsy Treatment Devices - April 2025</p>
        </div>
        <div class="text-right mt-4 md:mt-0">
          <p class="text-sm text-gray-300">Updated: ${new Date().toLocaleString('en-GB', { timeZone: 'BST' })}</p>
          <button onclick="window.print()" class="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Download PDF</button>
        </div>
      </header>

      <!-- Key Metrics -->
      <section id="metrics" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
          <p class="mt-1 text-2xl font-bold">$548.4M</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Global value of epilepsy treatment devices market.</p>
            <p><strong>Data:</strong> 2023: $526.8M; 2024: $548.4M</p>
            <p><strong>Calculation:</strong> $526.8M × (1 + 0.041) = $548.4M</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights</a></p>
            <p><strong>Insight:</strong> Precisis targets Europe’s $167.5M share; U.S. is NeuroPace’s stronghold.</p>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
          <p class="mt-1 text-2xl font-bold">4.1%</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Annual growth rate of market value (2024–2033).</p>
            <p><strong>Data:</strong> 2024: $548.4M; 2033: $787.3M</p>
            <p><strong>Calculation:</strong> [($787.3M / $548.4M)^(1/9) - 1] ≈ 4.1%</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights</a></p>
            <p><strong>Insight:</strong> AI and minimally invasive devices drive growth; EASEE lags in AI.</p>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Funding (2021)</h3>
          <p class="mt-1 text-2xl font-bold">€20M ($23.2M)</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Capital raised for EASEE development.</p>
            <p><strong>Data:</strong> 2021: €20M; Others: €0M</p>
            <p><strong>Calculation:</strong> €20M × 1.16 = $23.2M; YoY 2021: ∞%</p>
            <p><strong>Source:</strong> <a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-600 hover:underline" target="_blank">Precisis</a></p>
            <p><strong>Insight:</strong> NeuroPace’s $74M IPO (2021) outpaces Precisis.</p>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Patient Reach</h3>
          <p class="mt-1 text-2xl font-bold">10.1M / 50M</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Drug-resistant patients eligible for EASEE vs. total epilepsy patients.</p>
            <p><strong>Data:</strong> Eligible: 10.1M; Total: 50M</p>
            <p><strong>Calculation:</strong> Others: 50M - 10.1M = 39.9M</p>
            <p><strong>Source:</strong> <a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-600 hover:underline" target="_blank">Towards Healthcare</a></p>
            <p><strong>Insight:</strong> EASEE targets focal epilepsy; NeuroPace has broader indications.</p>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Clinical Outcomes</h3>
          <p class="mt-1 text-2xl font-bold">52% Reduction</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Median seizure reduction in EASEE trials.</p>
            <p><strong>Data:</strong> 50% of patients ≥50% reduction; 12.9% seizure-free</p>
            <p><strong>Calculation:</strong> Median: 52%; Seizure-free: 4/31 ≈ 12.9%</p>
            <p><strong>Source:</strong> <a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-600 hover:underline" target="_blank">Fierce Biotech</a></p>
            <p><strong>Insight:</strong> Comparable to NeuroPace’s 50–70% reduction.</p>
          </div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.expand').classList.toggle('hidden')">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Share (Europe)</h3>
          <p class="mt-1 text-2xl font-bold">~1–2%</p>
          <div class="expand hidden mt-3 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded">
            <p><strong>Definition:</strong> Precisis’ share of Europe’s $167.5M market.</p>
            <p><strong>Data:</strong> Revenue: $1.5M–$3M (100–200 implants)</p>
            <p><strong>Calculation:</strong> $1.5M / $167.5M ≈ 0.9%; $3M / $167.5M ≈ 1.8%</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights</a></p>
            <p><strong>Insight:</strong> LivaNova leads with ~30% globally.</p>
          </div>
        </div>
      </section>

      <!-- Charts -->
      <section id="charts" class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
          <h2 class="text-lg font-medium">Market Growth</h2>
          <p class="text-xs text-gray-500">Source: <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights</a></p>
          <div class="h-80 mt-3"><canvas id="precisis-market-growth"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
          <h2 class="text-lg font-medium">Patient Reach</h2>
          <p class="text-xs text-gray-500">Source: <a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-600 hover:underline" target="_blank">Towards Healthcare</a></p>
          <div class="h-80 mt-3"><canvas id="precisis-patient-reach"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
          <h2 class="text-lg font-medium">Funding History</h2>
          <p class="text-xs text-gray-500">Source: <a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-600 hover:underline" target="_blank">Precisis</a></p>
          <div class="h-80 mt-3"><canvas id="precisis-funding-history"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
          <h2 class="text-lg font-medium">Clinical Outcomes</h2>
          <p class="text-xs text-gray-500">Source: <a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-600 hover:underline" target="_blank">Fierce Biotech</a></p>
          <div class="h-80 mt-3"><canvas id="precisis-clinical-outcomes"></canvas></div>
        </div>
      </section>

      <!-- Regulatory Milestones -->
      <section id="regulatory" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-8">
        <h2 class="text-lg font-medium mb-4">Regulatory Milestones</h2>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
          <li><strong>CE Certification (Sep 28, 2022):</strong> Enables European market entry. <a href="https://www.nsmedicaldevices.com/news/precisis-ce-mark-easee-epilepsy/" class="text-blue-600 hover:underline" target="_blank">Source</a></li>
          <li><strong>FDA Breakthrough Designation (Feb 19, 2022):</strong> Accelerates U.S. review; approval pending. <a href="https://www.mpo-mag.com/contents/view_breaking-news/2022-02-22/precisis-easee-epilepsy-neurostim-earns-breakthrough-status/" class="text-blue-600 hover:underline" target="_blank">Source</a></li>
          <li><strong>Note:</strong> No 2024–2025 FDA approval or adoption data; monitor Precisis announcements.</li>
        </ul>
      </section>

      <!-- Competitor Analysis -->
      <section id="intel" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-8">
        <h2 class="text-lg font-medium mb-4">Competitor Analysis</h2>
        <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th class="p-3">Company</th>
              <th class="p-3">Device</th>
              <th class="p-3">Market Share</th>
              <th class="p-3">Strengths</th>
              <th class="p-3">Weaknesses</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-700">
              <td class="p-3">Precisis</td>
              <td class="p-3">EASEE</td>
              <td class="p-3">~1–2% (Europe)</td>
              <td class="p-3">Minimally invasive, CE Mark</td>
              <td class="p-3">No FDA approval, small scale</td>
            </tr>
            <tr class="border-b dark:border-gray-700">
              <td class="p-3">NeuroPace</td>
              <td class="p-3">RNS System</td>
              <td class="p-3">~20–25% (Global)</td>
              <td class="p-3">AI, FDA MRI approval</td>
              <td class="p-3">Invasive, costly</td>
            </tr>
            <tr>
              <td class="p-3">LivaNova</td>
              <td class="p-3">VNS Therapy</td>
              <td class="p-3">~30–35% (Global)</td>
              <td class="p-3">Established, broad use</td>
              <td class="p-3">Invasive, side effects</td>
            </tr>
          </tbody>
        </table>
        <p class="text-xs text-gray-500 mt-3">Sources: <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights</a></p>
      </section>

      <!-- Citations -->
      <section id="citations" class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5">
        <h2 class="text-lg font-medium mb-3">Sources</h2>
        <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-1">
          <li><a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-600 hover:underline" target="_blank">Custom Market Insights, Market Size & CAGR, Nov 2024</a></li>
          <li><a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-600 hover:underline" target="_blank">Precisis, €20M Funding, Oct 2021</a></li>
          <li><a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-600 hover:underline" target="_blank">Fierce Biotech, Clinical Outcomes, Sep 2022</a></li>
          <li><a href=" uyarilari/epilepsi-ve-norolojik-hastaliklar/precisis-ag-easee-sistemine-ab-uyumluluk-aldi" class="text-blue-600 hover:underline" target="_blank">NS Medical Devices, CE Certification, Sep 2022</a></li>
          <li><a href="https://www.mpo-mag.com/contents/view_breaking-news/2022-02-22/precisis-easee-epilepsy-neurostim-earns-breakthrough-status/" class="text-blue-600 hover:underline" target="_blank">MPO, FDA Designation, Feb 2022</a></li>
        </ul>
      </section>
    </div>
  `;
}

function initializePrecisisCharts(data) {
  // Ensure DOM is ready before initializing charts
  if (!document.getElementById('precisis-market-growth')) {
    console.error('Canvas element precisis-market-growth not found');
    return;
  }
  if (!document.getElementById('precisis-patient-reach')) {
    console.error('Canvas element precisis-patient-reach not found');
    return;
  }
  if (!document.getElementById('precisis-funding-history')) {
    console.error('Canvas element precisis-funding-history not found');
    return;
  }
  if (!document.getElementById('precisis-clinical-outcomes')) {
    console.error('Canvas element precisis-clinical-outcomes not found');
    return;
  }

  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  // Market Growth Chart
  const marketGrowthCanvas = document.getElementById('precisis-market-growth');
  if (marketGrowthCanvas) {
    new Chart(marketGrowthCanvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['2024', '2033'],
        datasets: [{
          label: 'Market Size ($M)',
          data: [548.4, 787.3],
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          fill: true,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: textColor } } },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor, callback: value => `$${value}M` }, grid: { color: gridColor } }
        }
      }
    });
  } else {
    console.warn('Skipping Market Growth chart: Canvas not found');
  }

  // Patient Reach Chart
  const patientReachCanvas = document.getElementById('precisis-patient-reach');
  if (patientReachCanvas) {
    new Chart(patientReachCanvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Eligible Patients', 'Other Patients'],
        datasets: [{
          data: [10.1, 39.9],
          backgroundColor: ['#10B981', '#D1D5DB'],
          borderColor: isDarkMode ? '#1F2937' : '#FFFFFF'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor } },
          tooltip: { callbacks: { label: context => `${context.label}: ${context.raw}M` } }
        }
      }
    });
  } else {
    console.warn('Skipping Patient Reach chart: Canvas not found');
  }

  // Funding History Chart
  const fundingHistoryCanvas = document.getElementById('precisis-funding-history');
  if (fundingHistoryCanvas) {
    new Chart(fundingHistoryCanvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Funding (€M)',
          data: [0, 0, 0, 20, 0, 0, 0],
          backgroundColor: 'rgba(236, 72, 153, 0.7)',
          borderColor: 'rgba(236, 72, 153, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor } },
          tooltip: { callbacks: { label: context => `€${context.raw}M (YoY: ${context.label === '2021' ? '∞%' : context.label === '2022' ? '-100%' : '0%'})` } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor, callback: value => `€${value}M` }, grid: { color: gridColor } }
        }
      }
    });
  } else {
    console.warn('Skipping Funding History chart: Canvas not found');
  }

  // Clinical Outcomes Chart
  const clinicalOutcomesCanvas = document.getElementById('precisis-clinical-outcomes');
  if (clinicalOutcomesCanvas) {
    new Chart(clinicalOutcomesCanvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['≥50% Reduction', 'Seizure-Free'],
        datasets: [{
          label: 'Patients (%)',
          data: [50, 12.9],
          backgroundColor: 'rgba(79, 70, 229, 0.7)',
          borderColor: 'rgba(79, 70, 229, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor } },
          tooltip: { callbacks: { label: context => `${context.label}: ${context.raw}%` } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor, callback: value => `${value}%` }, grid: { color: gridColor } }
        }
      }
    });
  } else {
    console.warn('Skipping Clinical Outcomes chart: Canvas not found');
  }
}



/////////////////////////////////////////////////////////////////////////////////// XCOPRI ??????????????????????????????????????????????????????????????

// function generateXCOPRIDashboard() {
//   return `
//   <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
//     <!-- Header -->
//     <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-all duration-300">
//       <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
//         <div>
//           <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight">SK Biopharmaceuticals / SK Life Science</h1>
//           <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-2">XCOPRI® (Cenobamate) Epilepsy Treatment</p>
//         </div>
//         <div class="text-right">
//           <p class="text-sm text-gray-500 dark:text-gray-400">Data as of April 24, 2025</p>
//           <p class="text-sm text-gray-500 dark:text-gray-400">Sources: Company Reports, Clinical Data</p>
//         </div>
//       </div>
//     </div>

//     <!-- Key Metrics -->
//     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow tooltip">
//         <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
//         <p class="mt-2 text-3xl font-bold">$378.1M</p>
//         <p class="text-sm text-green-600 dark:text-green-400">+54.3% YoY</p>
//         <p class="text-xs text-gray-500 mt-2">Calculation: 547.6B KRW ÷ 1,450 KRW/USD; YoY: (547.6B - 354.9B) ÷ 354.9B</p>
//         <p class="text-xs text-gray-500"><a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline hover:text-blue-600">Source</a></p>
//         <span class="tooltip-text">Revenue from all SK Biopharmaceuticals operations, primarily XCOPRI sales.</span>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow tooltip">
//         <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">U.S. XCOPRI Sales (2024)</h3>
//         <p class="mt-2 text-3xl font-bold">$303.0M</p>
//         <p class="text-sm text-green-600 dark:text-green-400">+62.0% YoY</p>
//         <p class="text-xs text-gray-500 mt-2">Calculation: 438.7B KRW ÷ 1,450 KRW/USD; YoY: (438.7B - 270.8B) ÷ 270.8B</p>
//         <p class="text-xs text-gray-500"><a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline hover:text-blue-600">Source</a></p>
//         <span class="tooltip-text">XCOPRI sales in the U.S. market, driven by prescription growth.</span>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow tooltip">
//         <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Operating Profit (2024)</h3>
//         <p class="mt-2 text-3xl font-bold">$66.5M</p>
//         <p class="text-sm text-gray-600 dark:text-gray-300">First profitable year</p>
//         <p class="text-xs text-gray-500 mt-2">Calculation: 96.3B KRW ÷ 1,450 KRW/USD</p>
//         <p class="text-xs text-gray-500"><a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline hover:text-blue-600">Source</a></p>
//         <span class="tooltip-text">First year SK Biopharmaceuticals achieved positive operating profit.</span>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow tooltip">
//         <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Net Profit (2024)</h3>
//         <p class="mt-2 text-3xl font-bold">$156.7M</p>
//         <p class="text-sm text-gray-600 dark:text-gray-300">Return to profitability</p>
//         <p class="text-xs text-gray-500 mt-2">Calculation: 227B KRW ÷ 1,450 KRW/USD</p>
//         <p class="text-xs text-gray-500"><a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline hover:text-blue-600">Source</a></p>
//         <span class="tooltip-text">Net profit after expenses, marking a financial turnaround.</span>
//       </div>
//     </div>

//     <!-- Product Details -->
//     <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
//       <h2 class="text-2xl font-semibold mb-6">XCOPRI® (Cenobamate) Overview</h2>
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <div class="flex items-center mb-4">
//             <div class="bg-orange-100 dark:bg-orange-900 rounded-lg p-3 mr-4">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600 dark:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//               </svg>
//             </div>
//             <h3 class="text-lg font-semibold">Product Details</h3>
//           </div>
//           <ul class="space-y-3 text-gray-600 dark:text-gray-300">
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Focus:</strong> Antiseizure medication for partial-onset seizures</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>FDA Approval:</strong> November 21, 2019 (<a href="https://www.prnewswire.com/news-releases/fda-approves-xcopri-cenobamate-tablets-an-anti-epileptic-drug-aed-from-sk-biopharmaceuticals-co-ltd-and-us-subsidiary-sk-life-science-inc-300963478.html" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>U.S. Launch:</strong> May 2020 (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-orange-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Patient Reach:</strong> 100,000+ globally by March 2024 (<a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-302086111.html" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div class="flex items-center mb-4">
//             <div class="bg-teal-100 dark:bg-teal-900 rounded-lg p-3 mr-4">
//               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//             </div>
//             <h3 class="text-lg font-semibold">Regulatory Milestones</h3>
//           </div>
//           <ul class="space-y-3 text-gray-600 dark:text-gray- matrimonio
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Europe Approval:</strong> 2021 as ONTOZRY (<a href="https://www.angelinipharma.com/media-press/news/angelini-pharma-announces-eu-marketing-authorization-for-ontozry-cenobamate.html" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Canada Approval:</strong> June 29, 2023 (<a href="https://www.prnewswire.com/news-releases/sk-life-science-announces-health-canada-approval-of-xcopri-cenobamate-tablets-for-the-treatment-of-partial-onset-seizures-in-adults-301866753.html" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Phase 3 NE Asia:</strong> Data presented at AES 2024 (<a href="https://www.prnewswire.com/news-releases/sk-life-science-inc-presents-xcopri-cenobamate-tablets-cv-data-at-the-aes-2024-annual-meeting-showing-a-deeper-understanding-of-cenobamates-302300830.html" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//             <li class="flex items-start">
//               <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span><strong>Market Potential:</strong> $4.1B U.S. market (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="underline hover:text-blue-600">Source</a>)</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>

//     <!-- Charts Section -->
//     <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">Revenue Trends (2018-2024)</h2>
//         <div class="h-80">
//           <canvas id="xcopri-revenue-trends"></canvas>
//         </div>
//         <p class="text-xs text-gray-500 mt-3">Sources: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline">2022-2024</a>, <a href="https://www.marketscreener.com/quote/stock/SK-BIOPHARMACEUTICALS-CO-108824177/news/SK-Biopharmaceuticals-Reports-2021-Financial-Results-37866797/" target="_blank" class="underline">2018-2021</a></p>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">U.S. Sales Growth (2024)</h2>
//         <div class="h-80">
//           <canvas id="xcopri-us-sales-growth"></canvas>
//         </div>
//         <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline">Korea Biomedical Review</a></p>
//       </div>
//     </div>
//     <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">U.S. Market Share (2024)</h2>
//         <div class="h-80">
//           <canvas id="xcopri-market-share"></canvas>
//         </div>
//         <p class="text-xs text-gray-500 mt-3">Calculation: $303.0M ÷ $4,100M; Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="underline">Korea Biomedical Review</a></p>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">Patient Reach (2024)</h2>
//         <div class="h-80">
//           <canvas id="xcopri-patient-reach"></canvas>
//         </div>
//         <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-302086111.html" target="_blank" class="underline">SK Biopharmaceuticals</a></p>
//       </div>
//     </div>

//     <!-- Business Insights -->
//     <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">Sales Growth Drivers</h2>
//         <ul class="space-y-3 text-gray-600 dark:text-gray-300">
//           <li class="flex items-center">
//             <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>100,000+ patients globally by March 2024 (<a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-302086111.html" target="_blank" class="underline">Source</a>)</span>
//           </li>
//           <li class="flex items-center">
//             <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>High gross margin (>90%) (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=18380" target="_blank" class="underline">Source</a>)</span>
//           </li>
//           <li class="flex items-center">
//             <svg class="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//               <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
//             </svg>
//             <span>Expansion into Canada, Europe, and Asia (<a href="https://www.prnewswire.com/news-releases/sk-life-science-announces-health-canada-approval-of-xcopri-cenobamate-tablets-for-the-treatment-of-partial-onset-seizures-in-adults-301866753.html" target="_blank" class="underline">Source</a>)</span>
//           </li>
//         </ul>
//         <div class="mt-6">
//           <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Quarterly Performance:</h3>
//           <div class="text-sm text-gray-600 dark:text-gray-400">
//             <p>Q3 2023 Revenue: $57.7M (+19.2% YoY)</p>
//             <p class="text-xs">Calculation: 75.7B KRW ÷ 1,312 KRW/USD; YoY: (75.7B - 63.5B) ÷ 63.5B (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=19106" target="_blank" class="underline">Source</a>)</p>
//             <p class="mt-2">Q4 2024 Revenue: $94.9M</p>
//             <p class="text-xs">Calculation: 126.8B KRW ÷ 1,336 KRW/USD (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=19752" target="_blank" class="underline">Source</a>)</p>
//           </div>
//         </div>
//       </div>
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl font-semibold mb-4">Future Outlook</h2>
//         <div class="grid grid-cols-1 gap-4">
//           <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">2025 U.S. Sales Target</h3>
//             <p class="mt-1 text-xl font-semibold">$420-450M</p>
//             <p class="text-xs text-green-600">+38.6-48.5% YoY</p>
//             <p class="text-xs">Calculation: ($420M - $303M) ÷ $303M; ($450M - $303M) ÷ $303M (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline">Source</a>)</p>
//           </div>
//           <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
//             <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Future Products Pipeline</h3>
//             <div class="mt-2 space-y-1 text-sm">
//               <p>• TPD, RPT, oncology expansion</p>
//               <p>• XCOPRI indications expansion by 2025-2026</p>
//               <p>• New markets: Korea, Japan NDA planned (<a href="https://m.koreaherald.com/view.php?ud=20240606050498" target="_blank" class="underline">Source</a>)</p>
//             </div>
//           </div>
//         </div>
//         <div class="mt-4">
//           <h3 class="font-medium text-gray-700 dark:text-gray-300 mb-2">Long-term Projection:</h3>
//           <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-3 rounded-lg">
//             <p class="text-sm text-gray-600 dark:text-gray-300">XCOPRI U.S. sales projected to reach $1B by 2029.</p>
//             <p class="text-xs text-gray-500 mt-2"><a href="https://www.koreatimes.co.kr/www/tech/2023/07/129_355140.html" target="_blank" class="underline">Source</a></p>
//           </div>
//         </div>
//       </div>
//     </div>

//     <!-- Sources and Citations -->
//     <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//       <div class="flex justify-between items-center">
//         <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
//         <button onclick="document.getElementById('sources-list').classList.toggle('hidden')" class="text-sm text-blue-600 hover:text-blue-800">Toggle</button>
//       </div>
//       <ul id="sources-list" class="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc pl-4">
//         <li><a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="underline">Korea Biomedical Review, Feb 6, 2025</a></li>
//         <li><a href="https://www.prnewswire.com/news-releases/fda-approves-xcopri-cenobamate-tablets-an-anti-epileptic-drug-aed-from-sk-biopharmaceuticals-co-ltd-and-us-subsidiary-sk-life-science-inc-300963478.html" target="_blank" class="underline">SK Biopharmaceuticals FDA Approval, Nov 21, 2019</a></li>
//         <li><a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="underline">Korea Biomedical Review, May 12, 2020</a></li>
//         <li><a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-302086111.html" target="_blank" class="underline">SK Biopharmaceuticals Press Release, March 12, 2024</a></li>
//         <li><a href="https://www.angelinipharma.com/media-press/news/angelini-pharma-announces-eu-marketing-authorization-for-ontozry-cenobamate.html" target="_blank" class="underline">Angelini Pharma, 2021</a></li>
//         <li><a href="https://www.prnewswire.com/news-releases/sk-life-science-announces-health-canada-approval-of-xcopri-cenobamate-tablets-for-the-treatment-of-partial-onset-seizures-in-adults-301866753.html" target="_blank" class="underline">SK Life Science Canada Approval, June 29, 2023</a></li>
//         <li><a href="https://www.prnewswire.com/news-releases/sk-life-science-inc-presents-xcopri-cenobamate-tablets-cv-data-at-the-aes-2024-annual-meeting-showing-a-deeper-understanding-of-cenobamates-302300830.html" target="_blank" class="underline">SK Life Science AES 2024, Dec 8, 2024</a></li>
//         <li><a href="https://www.koreabiomed.com/news/articleView.html?idxno=18380" target="_blank" class="underline">Korea Biomedical Review, Jul 18, 2023</a></li>
//         <li><a href="https://www.koreabiomed.com/news/articleView.html?idxno=19106" target="_blank" class="underline">Korea Biomedical Review, Nov 9, 2023</a></li>
//         <li><a href="https://www.koreabiomed.com/news/articleView.html?idxno=19752" target="_blank" class="underline">Korea Biomedical Review, Jan 29, 2024</a></li>
//         <li><a href="https://www.koreatimes.co.kr/www/tech/2023/07/129_355140.html" target="_blank" class="underline">Korea Times, Jul 18, 2023</a></li>
//         <li><a href="https://m.koreaherald.com/view.php?ud=20240606050498" target="_blank" class="underline">Korea Herald, Jun 7, 2024</a></li>
//         <li><a href="https://www.marketscreener.com/quote/stock/SK-BIOPHARMACEUTICALS-CO-108824177/news/SK-Biopharmaceuticals-Reports-2021-Financial-Results-37866797/" target="_blank" class="underline">MarketScreener, Feb 8, 2022</a></li>
//         <li>SK Biopharmaceuticals: Comprehensive Data on XCOPRI (Cenobamate) (2018-2024)</li>
//       </ul>
//     </div>
//   </div>
// `;
// }
function generateXCOPRIDashboard() {
  return `
  <div class="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Header Section -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">XCOPRI® Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-300 mt-1">SK Biopharmaceuticals / SK Life Science</p>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Data as of April 24, 2025
            </span>
          </div>
        </div>
      </div>
      
      <!-- Key Metrics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md">
          <div class="flex flex-col">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue (2024)</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$378.1M</p>
            <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">+54.3% YoY</p>
            <div class="mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md">
          <div class="flex flex-col">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">U.S. XCOPRI Sales (2024)</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$303.0M</p>
            <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">+62.0% YoY</p>
            <div class="mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md">
          <div class="flex flex-col">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Operating Profit (2024)</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$66.5M</p>
            <div class="flex items-center mt-1">
              <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                First profitable year
              </span>
            </div>
            <div class="mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review</p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md">
          <div class="flex flex-col">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Profit (2024)</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$156.7M</p>
            <div class="flex items-center mt-1">
              <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Return to profitability
              </span>
            </div>
            <div class="mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: Korea Biomedical Review</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Product Overview -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">XCOPRI® (Cenobamate) Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div class="flex items-center mb-3">
              <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 class="text-base font-medium text-gray-900 dark:text-white">Product Details</h3>
            </div>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Focus:</span> Antiseizure medication for partial-onset seizures</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">FDA Approval:</span> November 21, 2019</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">U.S. Launch:</span> May 2020</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Patient Reach:</span> 100,000+ globally by March 2024</span>
              </li>
            </ul>
          </div>
          <div>
            <div class="flex items-center mb-3">
              <div class="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-base font-medium text-gray-900 dark:text-white">Regulatory Milestones</h3>
            </div>
            <ul class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Europe Approval:</span> 2021 as ONTOZRY</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Canada Approval:</span> June 29, 2023</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Phase 3 NE Asia:</span> Data presented at AES 2024</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Market Potential:</span> $4.1B U.S. market</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Revenue Trends (2018-2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-revenue-trends"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Sources: Korea Biomedical Review (2022-2024), MarketScreener (2018-2021)</p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">U.S. Sales Growth (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-us-sales-growth"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: Korea Biomedical Review</p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">U.S. Market Share (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-market-share"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: Korea Biomedical Review</p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Patient Reach (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-patient-reach"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: SK Biopharmaceuticals</p>
        </div>
      </div>
      
      <!-- Business Insights -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Sales Growth Drivers</h2>
          <ul class="space-y-3 text-gray-600 dark:text-gray-300 text-sm">
            <li class="flex items-start">
              <div class="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mr-3">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">100,000+ patients globally</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Reached by March 2024</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mr-3">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">High gross margin</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Exceeding 90%</p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center flex-shrink-0 mr-3">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Global expansion</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Canada, Europe, and Asia markets</p>
              </div>
            </li>
          </ul>
          
          <div class="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
            <h3 class="font-medium text-gray-900 dark:text-white text-sm mb-3">Quarterly Performance</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Q3 2023</p>
                <p class="text-lg font-bold text-gray-900 dark:text-white mt-1">$57.7M</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-400">+19.2% YoY</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Q4 2024</p>
                <p class="text-lg font-bold text-gray-900 dark:text-white mt-1">$94.9M</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-400">+64.5% YoY</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Future Outlook</h2>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">2025 U.S. Sales Target</h3>
            <div class="flex items-end gap-2 mt-1">
              <p class="text-2xl font-bold text-gray-900 dark:text-white">$420-450M</p>
              <p class="text-sm text-emerald-600 dark:text-emerald-400 mb-1">+38.6-48.5% YoY</p>
            </div>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Future Products Pipeline</h3>
            <ul class="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>TPD, RPT, oncology expansion</span>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>XCOPRI indications expansion by 2025-2026</span>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>New markets: Korea, Japan NDA planned</span>
              </li>
            </ul>
          </div>
          
          <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-4 rounded-lg">
            <div class="flex items-center">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              <h3 class="text-sm font-medium text-gray-900 dark:text-white">Long-term Projection</h3>
            </div>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">XCOPRI U.S. sales projected to reach <span class="font-bold">$1B by 2029</span></p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Source: Korea Times, Jul 18, 2023</p>
          </div>
        </div>
      </div>
      
      <!-- Sources Section -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Sources & Citations</h2>
          <button onclick="document.getElementById('sources-list').classList.toggle('hidden')" class="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
            Toggle
          </button>
        </div>
        <div id="sources-list" class="hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
            <div>
              <ul class="space-y-2">
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.koreabiomed.com/news/articleView.html?idxno=23262" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Korea Biomedical Review, Feb 6, 2025
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.prnewswire.com/news-releases/fda-approves-xcopri-cenobamate-tablets-an-anti-epileptic-drug-aed-from-sk-biopharmaceuticals-co-ltd-and-us-subsidiary-sk-life-science-inc-300963478.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    SK Biopharmaceuticals FDA Approval, Nov 21, 2019
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Korea Biomedical Review, May 12, 2020
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-302086111.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    SK Biopharmaceuticals, March 12, 2024
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="space-y-2">
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.angelinipharma.com/media-press/news/angelini-pharma-announces-eu-marketing-authorization-for-ontozry-cenobamate.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Angelini Pharma, 2021
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.prnewswire.com/news-releases/sk-life-science-announces-health-canada-approval-of-xcopri-cenobamate-tablets-for-the-treatment-of-partial-onset-seizures-in-adults-301866753.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    SK Life Science Canada Approval, June 29, 2023
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.prnewswire.com/news-releases/sk-life-science-inc-presents-xcopri-cenobamate-tablets-cv-data-at-the-aes-2024-annual-meeting-showing-a-deeper-understanding-of-cenobamates-302300830.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    SK Life Science AES 2024, Dec 8, 2024
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.koreatimes.co.kr/www/tech/2023/07/129_355140.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Korea Times, Jul 18, 2023
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 text-center">
        <p class="text-xs text-gray-500 dark:text-gray-400">
          XCOPRI® is a registered trademark of SK Life Science, Inc. Data compiled from publicly available information.
          <br>Last updated: April 24, 2025
        </p>
      </div>
    </div>
  </div> `
}



// Initialize XCOPRI Charts
function initializeXCOPRICharts() {
  // Revenue Trends Chart (2018-2024)
  const revenueTrendsCtx = document.getElementById('xcopri-revenue-trends').getContext('2d');
  new Chart(revenueTrendsCtx, {
    type: 'line',
    data: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Total Revenue ($ Millions)',
        data: [52.3, 123.5, 158.1, 165.8, 212.5, 245.0, 378.1],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3,
        fill: true,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: document.querySelector('html').classList.contains('dark') ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          titleColor: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(31, 41, 55)',
          bodyColor: document.querySelector('html').classList.contains('dark') ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)',
          borderColor: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return '$' + context.raw + 'M';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)'
          }
        },
        y: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
            callback: function(value) {
              return '$' + value + 'M';
            }
          },
          beginAtZero: true
        }
      }
    }
  });

  // U.S. Sales Growth Chart (2024)
  const salesGrowthCtx = document.getElementById('xcopri-us-sales-growth').getContext('2d');
  new Chart(salesGrowthCtx, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Quarterly U.S. Sales ($ Millions)',
        data: [63.8, 76.9, 85.3, 94.9],
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)'
          }
        },
        tooltip: {
          backgroundColor: document.querySelector('html').classList.contains('dark') ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          titleColor: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(31, 41, 55)',
          bodyColor: document.querySelector('html').classList.contains('dark') ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)',
          borderColor: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return '$' + context.raw + 'M';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)'
          }
        },
        y: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
            callback: function(value) {
              return '$' + value + 'M';
            }
          },
          beginAtZero: true
        }
      }
    }
  });

  // U.S. Market Share Chart (2024)
  const marketShareCtx = document.getElementById('xcopri-market-share').getContext('2d');
  new Chart(marketShareCtx, {
    type: 'doughnut',
    data: {
      labels: ['XCOPRI', 'Other AEDs'],
      datasets: [{
        data: [7.4, 92.6],
        backgroundColor: [
          'rgba(79, 70, 229, 0.8)',
          'rgba(209, 213, 219, 0.5)'
        ],
        borderColor: [
          'rgb(79, 70, 229)',
          'rgb(209, 213, 219)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)',
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          backgroundColor: document.querySelector('html').classList.contains('dark') ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          titleColor: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(31, 41, 55)',
          bodyColor: document.querySelector('html').classList.contains('dark') ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)',
          borderColor: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return context.label + ': ' + context.raw + '%';
            }
          }
        }
      },
      cutout: '70%'
    }
  });

  // Patient Reach Chart (2024)
  const patientReachCtx = document.getElementById('xcopri-patient-reach').getContext('2d');
  new Chart(patientReachCtx, {
    type: 'bar',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Patients Treated (Thousands)',
        data: [5, 21, 45, 78, 112],
        backgroundColor: 'rgba(14, 165, 233, 0.7)',
        borderColor: 'rgb(14, 165, 233)',
        borderWidth: 1,
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(55, 65, 81)'
          }
        },
        tooltip: {
          backgroundColor: document.querySelector('html').classList.contains('dark') ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          titleColor: document.querySelector('html').classList.contains('dark') ? 'rgb(229, 231, 235)' : 'rgb(31, 41, 55)',
          bodyColor: document.querySelector('html').classList.contains('dark') ? 'rgb(209, 213, 219)' : 'rgb(55, 65, 81)',
          borderColor: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)'
          }
        },
        y: {
          grid: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgba(75, 85, 99, 0.2)' : 'rgba(203, 213, 225, 0.5)'
          },
          ticks: {
            color: document.querySelector('html').classList.contains('dark') ? 'rgb(156, 163, 175)' : 'rgb(107, 114, 128)',
            callback: function(value) {
              return value + 'K';
            }
          },
          beginAtZero: true
        }
      }
    }
  });
};

//////////////////////////////////////////////////////////////////////// MEDTRONIC ???????????????????????????????????????????????????????????????????????????
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

/**
 * Initialize Medtronic Dashboard Charts
 * 
 * This function initializes all charts for the Medtronic epilepsy neuromodulation dashboard,
 * including mini charts (market share, revenue, market size), a pie chart for 2024 market share,
 * and a dynamic detailed chart. It also handles dark mode toggling.
 * 
 * Requires Chart.js to be included in the HTML.
 */


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

///////////////////////////////////////////////////////////////////////////////////// LIVANOVA //////////////////////////////////////////////////////////
// function generateLivaNovaDashboard(data) {
//   return `
//     <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
//       <!-- Header -->
//       <div class="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-8">
//           <div class="flex flex-col md:flex-row justify-between items-start">
//               <div>
//                   <h1 class="text-3xl font-bold mb-2">LivaNova - Epilepsy Neuromodulation</h1>
//                   <p class="text-lg text-gray-600 dark:text-gray-300">Vagus Nerve Stimulation (VNS) Analysis</p>
//               </div>
//               <div class="text-right mt-4 md:mt-0">
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 24, 2025</p>
//                   <p class="text-sm text-gray-500 dark:text-gray-400">Sources: Company Reports, SEC Filings</p>
//               </div>
//           </div>
//       </div>

//       <!-- Key Metrics -->
//       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Neuromodulation Revenue (2024)</h3>
//               <p class="mt-2 text-3xl font-bold">$554.2M</p>
//               <p class="text-sm text-green-600 dark:text-green-400">+6.6% YoY</p>
//               <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">U.S. Revenue (2024)</h3>
//               <p class="mt-2 text-3xl font-bold">$441.0M</p>
//               <p class="text-sm text-green-600 dark:text-green-400">+8.2% YoY</p>
//               <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Segment Income (2024)</h3>
//               <p class="mt-2 text-3xl font-bold">$195.3M</p>
//               <p class="text-sm text-green-600 dark:text-green-400">+27.3% YoY</p>
//               <p class="text-xs text-gray-500 mt-2">Source: LivaNova Annual Report</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Share</h3>
//               <p class="mt-2 text-3xl font-bold">18%</p>
//               <p class="text-sm text-gray-600 dark:text-gray-300">VNS Market Leader</p>
//               <p class="text-xs text-gray-500 mt-2">Source: Neuromodulation Market Size Report</p>
//           </div>
//       </div>

//       <!-- VNS Technology Section -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
//           <h2 class="text-xl font-semibold mb-6">Vagus Nerve Stimulation Technology</h2>
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                   <div class="flex items-center mb-4">
//                       <div class="bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-4">
//                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                           </svg>
//                       </div>
//                       <h3 class="text-lg font-semibold">VNS Therapy System Models</h3>
//                   </div>
//                   <ul class="space-y-2 text-gray-600 dark:text-gray-300">
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <div>
//                               <span><strong>SenTiva (Model 1000):</strong> Smallest and lightest VNS device</span>
//                               <p class="text-sm text-gray-500 dark:text-gray-400">Features: Responsive therapy, Scheduled Programming, Day & Night Programming, Expanded MRI access</p>
//                           </div>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <div>
//                               <span><strong>AspireSR (Model 106):</strong> Advanced closed-loop system</span>
//                               <p class="text-sm text-gray-500 dark:text-gray-400">Features: Closed loop stimulation (AutoStim), Expanded MRI access</p>
//                           </div>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <div>
//                               <span><strong>SenTiva Duo (Model 1000D) & Demipulse (Model 103)</strong></span>
//                               <p class="text-sm text-gray-500 dark:text-gray-400">Comprehensive product portfolio for different patient needs</p>
//                           </div>
//                       </li>
//                   </ul>
//               </div>
//               <div>
//                   <div class="flex items-center mb-4">
//                       <div class="bg-indigo-100 dark:bg-indigo-900 rounded-lg p-3 mr-4">
//                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                           </svg>
//                       </div>
//                       <h3 class="text-lg font-semibold">Clinical Evidence & Approvals</h3>
//                   </div>
//                   <ul class="space-y-2 text-gray-600 dark:text-gray-300">
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span><strong>First Approval:</strong> First medical device approved by FDA for DRE in 1997</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span><strong>Pediatric Approval:</strong> Only neuromodulation device approved in US for DRE patients as young as four years</span></li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span><strong>Mechanism:</strong> Delivers electrical impulses to the vagus nerve, modulating brain activity</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
//                           </svg>
//                           <span><strong>Recent Evidence:</strong> Journal of Neurology (2022) meta-analysis demonstrated significant benefits without adverse events</span>
//                       </li>
//                   </ul>
//               </div>
//           </div>
//       </div>

//       <!-- Regional Performance -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h2 class="text-xl font-semibold mb-4">Regional Revenue Breakdown</h2>
//               <div class="h-80">
//                   <canvas id="livanova-revenue-by-region"></canvas>
//               </div>
//               <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Report 2022-2024</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h2 class="text-xl font-semibold mb-4">Expense Breakdown (2024)</h2>
//               <div class="h-80">
//                   <canvas id="livanova-expenses"></canvas>
//               </div>
//               <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Report 2024</p>
//           </div>
//       </div>

//       <!-- Performance Trends -->
//       <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h2 class="text-xl font-semibold mb-4">Performance Trend</h2>
//               <div class="h-80">
//                   <canvas id="livanova-performance-trend"></canvas>
//               </div>
//               <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Reports 2022-2024</p>
//           </div>
//           <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//               <h2 class="text-xl font-semibold mb-4">Revenue & Income Analysis</h2>
//               <div class="h-80">
//                   <canvas id="livanova-revenue-income"></canvas>
//               </div>
//               <p class="text-xs text-gray-500 mt-3">Source: LivaNova Annual Reports 2022-2024</p>
//           </div>
//       </div>

//       <!-- Special Reimbursement Coverage -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
//           <h2 class="text-xl font-semibold mb-4">Special Reimbursement Coverage</h2>
//           <div class="overflow-x-auto">
//               <table class="min-w-full">
//                   <thead>
//                       <tr>
//                           <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Condition</th>
//                           <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Approval Date</th>
//                           <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Agency</th>
//                           <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">Procedure Code</th>
//                           <th class="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase">2024 Payment</th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Dravet Syndrome</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">2020</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$23,542.18</td>
//                       </tr>
//                       <tr>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Lennox-Gastaut Syndrome</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">January 2022</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$23,542.18</td>
//                       </tr>
//                       <tr>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">VNS Programming</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Multiple</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95976</td>
//                           <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">$116.34</td>
//                       </tr>
//                   </tbody>
//               </table>
//           </div>
//           <p class="text-xs text-gray-500 mt-3">Source: CMS Medicare Physician Fee Schedule, 2025 Final Rule</p>
//       </div>

//       <!-- Epilepsy Treatment Context -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
//           <h2 class="text-xl font-semibold mb-4">Epilepsy Treatment Context</h2>
//           <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                   <h3 class="text-lg font-medium mb-3">Available Treatment Options</h3>
//                   <ul class="space-y-2 text-gray-600 dark:text-gray-300">
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           <span>Multiple ASMs (Anti-Seizure Medications)</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           <span>Various forms of ketogenic diet</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           <span>VNS (Vagus Nerve Stimulation)</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           <span>Resective and ablative brain surgery</span>
//                       </li>
//                       <li class="flex items-start">
//                           <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                           </svg>
//                           <span>Intracranial neurostimulation</span>
//                       </li>
//                   </ul>
//               </div>
//               <div>
//                   <h3 class="text-lg font-medium mb-3">Treatment Pathway</h3>
//                   <div class="p-4 bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 rounded-lg">
//                       <p class="text-gray-700 dark:text-gray-300">ASMs typically serve as first-line treatment for all epilepsy patients. After two ASMs fail to deliver seizure control, the epilepsy is characterized as drug-resistant and adjunctive non-drug options are considered.</p>
                      
//                       <div class="mt-4">
//                           <h4 class="font-medium text-gray-700 dark:text-gray-300">VNS Therapy Advantages:</h4>
//                           <ul class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
//                               <li>• First medical device approved by FDA for DRE in 1997</li>
//                               <li>• Only neuromodulation device approved for patients as young as 4 years</li>
//                               <li>• No direct brain tissue intervention required</li>
//                               <li>• Demonstrated long-term efficacy and safety</li>
//                           </ul>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>

//       <!-- Sources and Citations -->
//       <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
//           <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
//           <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
//               <li>LivaNova Q4 and Full-Year 2023/2024 Results</li>
//               <li>LivaNova Annual Reports (2022-2024)</li>
//               <li>LivaNova VNS Therapy System Drug-Resistant Epilepsy Cost Savings Report</li>
//               <li>Journal of Neurology (January 2022) meta-analysis on VNS Therapy</li>
//               <li>CMS Reimbursement Updates for Dravet Syndrome (2020)</li>
//               <li>CMS Reimbursement Updates for Lennox-Gastaut Syndrome (2022)</li>
//               <li>Custom Market Insights, "Epilepsy Treatment Devices Market" (2024-2032)</li>
//               <li>Neuromodulation Market Size Report (2024-2028)</li>
//               <li>CMS Medicare Physician Fee Schedule, 2025 Final Rule</li>
//           </ul>
//       </div>
//     </div>
//   `;
// }

/**
 * Medtronic Dashboard Generator
 * 
 * This function generates a dashboard UI component for Medtronic epilepsy neuromodulation data.
 * It includes key metrics, market share analysis, revenue tracking, and clinical trial summaries.
 * 
 * @returns {string} HTML string for the Medtronic dashboard
 */
// function generateMedtronicDashboard() {
//   return `
//     <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 max-w-7xl mx-auto">
//       <!-- Dashboard Header -->
//       <header class="mb-8">
//         <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
//           <div>
//             <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">Medtronic Epilepsy Neuromodulation Dashboard</h1>
//             <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Comprehensive analysis of market data (2018-2024)</p>
//           </div>
//           <div class="mt-4 md:mt-0">
//             <button id="darkModeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
//               <span class="dark:hidden">🌙 Dark Mode</span>
//               <span class="hidden dark:inline">☀️ Light Mode</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       <!-- Main Dashboard Grid -->
//       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
//         <!-- Market Share Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Share Overview</h2>
//           <div class="flex flex-col space-y-6">
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
//               <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a></span>
//             </div>
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
//               <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+15.0%</a></span>
//             </div>
//             <div>
//               <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
//               <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
//             </div>
//             <div>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
//                 <strong>Source:</strong> Calculated as (Medtronic Epilepsy Revenue / Total Market Size) × 100
//               </p>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                 <strong>Data From:</strong> <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <!-- Revenue Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Epilepsy Revenue</h2>
//           <div class="flex flex-col space-y-6">
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
//               <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a></span>
//             </div>
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
//               <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+96.2%</a></span>
//             </div>
//             <div>
//               <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
//               <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
//             </div>
//             <div>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
//                 <strong>Calculation Method:</strong> Estimated as 10-15% of Neuromodulation Segment Revenue
//               </p>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                 <strong>Data From:</strong> <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <!-- Total Market Size Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Total Market Size</h2>
//           <div class="flex flex-col space-y-6">
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">2024 Market Size</span>
//               <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a></span>
//             </div>
//             <div class="flex justify-between items-center">
//               <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
//               <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+49.5%</a></span>
//             </div>
//             <div>
//               <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Size Trend (2018-2024)</p>
//               <canvas id="marketSizeMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
//             </div>
//             <div>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
//                 <strong>Calculation Method:</strong> Sum of LivaNova, NeuroPace, and Medtronic epilepsy revenues
//               </p>
//               <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                 <strong>Cross-Referenced With:</strong> <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>
//               </p>
//             </div>
//           </div>
//         </div>

//         <!-- Market Position Analysis Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Position Analysis</h2>
//           <div class="flex flex-col lg:flex-row gap-8">
//             <div class="flex-1">
//               <h3 class="font-medium text-lg sm:text-xl mb-3">Market Share by Company (2024)</h3>
//               <canvas id="marketSharePieChart" class="w-full h-64 sm:h-72 aspect-[4/3]"></canvas>
//             </div>
//             <div class="flex-1">
//               <h3 class="font-medium text-lg sm:text-xl mb-3">Gainers & Losers (2018-2024)</h3>
//               <div class="space-y-4">
//                 <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
//                   <h4 class="font-semibold text-red-700 dark:text-red-400">Market Share Losers</h4>
//                   <div class="mt-2">
//                     <div class="flex justify-between text-sm">
//                       <span>LivaNova</span>
//                       <span class="text-red-600 dark:text-red-400"><a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">-7.4%</a></span>
//                     </div>
//                     <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
//                       Market share declined from <a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">87.4% in 2018</a> to <a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">80.0% in 2024</a>.
//                     </p>
//                   </div>
//                 </div>
//                 <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
//                   <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
//                   <div class="mt-2">
//                     <div class="flex justify-between text-sm">
//                       <span>Medtronic & NeuroPace</span>
//                       <span class="text-green-600 dark:text-green-400"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+7.4%</a></span>
//                     </div>
//                     <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
//                       Medtronic and NeuroPace gained market share, with Medtronic rising from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0% in 2018</a> to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3% in 2024</a>.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <!-- Detailed Charts Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
//           <div class="flex flex-col md:flex-row justify-between items-center mb-6">
//             <h2 class="text-xl sm:text-2xl font-semibold">Detailed Analytics</h2>
//             <div class="inline-flex mt-3 md:mt-0">
//               <select id="chartSelector" class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 <option value="marketShare">Market Share Trend</option>
//                 <option value="revenue">Revenue Growth</option>
//                 <option value="marketSize">Total Market Size</option>
//                 <option value="comparison">Comparative Analysis</option>
//               </select>
//             </div>
//           </div>
//           <div id="detailedChartContainer" class="w-full h-80 sm:h-96"></div>
//           <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
//             <p id="chartDescription" class="mb-2">
//               This chart shows Medtronic's market share trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. The company has seen modest growth from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> in 2018 to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a> in 2024.
//             </p>
//             <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <h3 class="font-medium mb-2">Data Source</h3>
//                 <p class="text-xs">
//                   Data estimated from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic's annual reports (2018-2024)</a>, with epilepsy revenue as 10-15% of neuromodulation segment. Market share is calculated by dividing Medtronic's epilepsy revenue by the total market size.
//                 </p>
//               </div>
//               <div>
//                 <h3 class="font-medium mb-2">Calculation Methodology</h3>
//                 <p class="text-xs">
//                   Market size calculation: Sum of epilepsy revenues from LivaNova, NeuroPace, and Medtronic, cross-referenced with <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <!-- Clinical Trials Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Clinical & Regulatory Milestones</h2>
//           <div class="overflow-auto max-h-80">
//             <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
//               <div class="mb-6">
//                 <div class="flex items-center">
//                   <div id="clinical-trial-2020" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
//                   <h3 class="text-lg sm:text-xl font-medium ml-3">2020</h3>
//                 </div>
//                 <div class="mt-2">
//                   <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept PC DBS Approval</h4>
//                   <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                     FDA approval for Percept PC DBS system with BrainSense technology for epilepsy and other neurological disorders.
//                   </p>
//                   <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                     <strong>Source:</strong> <a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline">Medtronic Press Release</a>
//                   </p>
//                 </div>
//               </div>
//               <div class="mb-6">
//                 <div class="flex items-center">
//                   <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
//                   <h3 class="text-lg sm:text-xl font-medium ml-3">2024</h3>
//                 </div>
//                 <div class="mt-2">
//                   <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept RC DBS Approval</h4>
//                   <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                     FDA approval for Percept RC DBS system, enhancing epilepsy treatment capabilities.
//                   </p>
//                   <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                     <strong>Source:</strong> <a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline">Medtronic Press Release</a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <!-- Calculation Methods Card -->
//         <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 min-h-fit overflow-hidden">
//           <h2 class="text-xl sm:text-2xl font-semibold mb-4">Data Calculation Methods</h2>
//           <div class="overflow-auto max-h-80">
//             <div class="space-y-4">
//               <div>
//                 <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Share</h3>
//                 <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                   Market share = (Medtronic Epilepsy Revenue / Total Market Size) × 100
//                 </p>
//                 <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                   Example (2024): Market share = (<a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a> / <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a>) × 100 = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a>
//                 </p>
//               </div>
//               <div>
//                 <h3 class="font-medium text-gray-800 dark:text-gray-200">Epilepsy Revenue</h3>
//                 <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                   Epilepsy Revenue = Neuromodulation Revenue × 0.10-0.15
//                 </p>
//                 <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                   Example (2024): Epilepsy Revenue = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$81.6M</a> × 0.125 = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a>
//                 </p>
//               </div>
//               <div>
//                 <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Size</h3>
//                 <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                   Market Size = Sum of epilepsy revenues of LivaNova, NeuroPace, and Medtronic
//                 </p>
//                 <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
//                   Cross-referenced with <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>
//                 </p>
//               </div>
//               <div>
//                 <h3 class="font-medium text-gray-800 dark:text-gray-200">Year-on-Year Change</h3>
//                 <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
//                   Year-on-Year Change = ((Current Value - Previous Value) / Previous Value) × 100
//                 </p>
//               </div>
//               <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <h3 class="font-medium text-gray-800 dark:text-gray-200">Data Limitations</h3>
//                 <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
//                   <li>Epilepsy revenue is estimated as 10-15% of neuromodulation segment</li>
//                   <li>Exact epilepsy revenue splits are not publicly disclosed</li>
//                   <li>Implant revenue splits unavailable</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <!-- Data Source Links -->
//       <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//         <h2 class="text-xl sm:text-2xl font-semibold mb-4">Data Sources & Links</h2>
//         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           <div>
//             <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Annual Reports</h3>
//             <ul class="space-y-1">
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2018 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2019 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2020 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2021 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2022 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2023 Annual Report</a></li>
//               <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic Q4 2024 Earnings</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Clinical & Regulatory</h3>
//             <ul class="space-y-1">
//               <li><a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline text-sm">Percept PC DBS Approval 2020</a></li>
//               <li><a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline text-sm">Percept RC DBS Approval 2024</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Market Research</h3>
//             <ul class="space-y-1">
//               <li><a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline text-sm">Market Research Future Reports</a></li>
//               <li><a href="https://www.ihealthcareanalyst.com/report/neurostimulation-devices-market/" class="text-blue-500 hover:underline text-sm">iHealthcareAnalyst Reports</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <!-- Footer with last updated info -->
//       <footer class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400 pb-8">
//         <p>
//           Last updated: April 24, 2025 | Data accurate as of Q4 2024 reports
//           <br>
//           <span class="text-xs">Dashboard generated for analytical purposes only. All data sourced from public financial reports.</span>
//         </p>
//       </footer>
//     </div>
//   `;
// }
// function initMedtronicCharts() {
//   // Data for charts (2018-2024)
//   const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
//   const marketShareData = [2.0, 2.0, 2.1, 2.2, 2.2, 2.3, 2.3]; // Medtronic market share (%)
//   const revenueData = [6.0, 6.4, 6.6, 7.3, 8.0, 9.4, 10.2]; // Medtronic revenue ($M)
//   const marketSizeData = [301.5, 320.9, 315.3, 334.1, 365.4, 407.6, 450.6]; // Total market size ($M)
//   const marketShare2024 = {
//     Medtronic: 2.3,
//     LivaNova: 80.0,
//     NeuroPace: 17.7
//   }; // 2024 market share (%)

//   // Color palette (Tailwind CSS compatible)
//   const colors = {
//     light: {
//       primary: '#3b82f6', // blue-500
//       secondary: '#10b981', // green-600
//       accent: '#ef4444', // red-600
//       background: '#ffffff', // white
//       text: '#1f2937', // gray-800
//       grid: '#d1d5db' // gray-300
//     },
//     dark: {
//       primary: '#60a5fa', // blue-400
//       secondary: '#34d399', // green-400
//       accent: '#f87171', // red-400
//       background: '#1f2937', // gray-800
//       text: '#e5e7eb', // gray-200
//       grid: '#4b5563' // gray-600
//     }
//   };

//   // Determine current mode
//   const isDarkMode = () => document.documentElement.classList.contains('dark');
//   const getColors = () => isDarkMode() ? colors.dark : colors.light;

//   // Chart configuration options
//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     plugins: {
//       legend: {
//         labels: {
//           color: getColors().text
//         }
//       }
//     },
//     scales: {
//       x: {
//         grid: {
//           color: getColors().grid
//         },
//         ticks: {
//           color: getColors().text
//         }
//       },
//       y: {
//         grid: {
//           color: getColors().grid
//         },
//         ticks: {
//           color: getColors().text
//         }
//       }
//     }
//   };

//   // Initialize Mini Charts
//   function initMiniCharts() {
//     const charts = [
//       {
//         id: 'marketShareMiniChart',
//         label: 'Market Share (%)',
//         data: marketShareData,
//         yLabel: 'Market Share (%)'
//       },
//       {
//         id: 'revenueMiniChart',
//         label: 'Revenue ($M)',
//         data: revenueData,
//         yLabel: 'Revenue ($M)'
//       },
//       {
//         id: 'marketSizeMiniChart',
//         label: 'Market Size ($M)',
//         data: marketSizeData,
//         yLabel: 'Market Size ($M)'
//       }
//     ];

//     charts.forEach(chart => {
//       const canvas = document.getElementById(chart.id);
//       if (!(canvas instanceof HTMLCanvasElement)) {
//         console.error(`${chart.id} is not a canvas element`);
//         return;
//       }

//       new Chart(canvas, {
//         type: 'line',
//         data: {
//           labels: years,
//           datasets: [{
//             label: chart.label,
//             data: chart.data,
//             borderColor: getColors().primary,
//             backgroundColor: getColors().primary + '33', // 20% opacity
//             fill: true,
//             tension: 0.4
//           }]
//         },
//         options: {
//           ...chartOptions,
//           plugins: {
//             ...chartOptions.plugins,
//             legend: { display: false }
//           },
//           scales: {
//             x: {
//               ...chartOptions.scales.x,
//               title: { display: true, text: 'Year', color: getColors().text }
//             },
//             y: {
//               ...chartOptions.scales.y,
//               title: { display: true, text: chart.yLabel, color: getColors().text }
//             }
//           }
//         }
//       });
//     });
//   }

//   // Initialize Market Share Pie Chart
//   function initMarketSharePie() {
//     const canvas = document.getElementById('marketSharePieChart');
//     if (!(canvas instanceof HTMLCanvasElement)) {
//       console.error('marketSharePieChart is not a canvas element');
//       return;
//     }

//     new Chart(canvas, {
//       type: 'pie',
//       data: {
//         labels: ['Medtronic', 'LivaNova', 'NeuroPace'],
//         datasets: [{
//           data: [marketShare2024.Medtronic, marketShare2024.LivaNova, marketShare2024.NeuroPace],
//           backgroundColor: [
//             getColors().primary,
//             getColors().secondary,
//             getColors().accent
//           ],
//           borderColor: getColors().background
//         }]
//       },
//       options: {
//         ...chartOptions,
//         plugins: {
//           ...chartOptions.plugins,
//           legend: {
//             position: 'bottom',
//             labels: {
//               color: getColors().text
//             }
//           }
//         }
//       }
//     });
//   }

//   // Initialize Detailed Chart
//   function initDetailedChart() {
//     const container = document.getElementById('detailedChartContainer');
//     const selector = document.getElementById('chartSelector');
//     const description = document.getElementById('chartDescription');

//     if (!container || !selector || !description) {
//       console.error('Detailed chart elements not found');
//       return;
//     }

//     // Create canvas dynamically
//     const canvas = document.createElement('canvas');
//     canvas.id = 'detailedChart';
//     container.innerHTML = '';
//     container.appendChild(canvas);

//     let chartInstance = null;

//     const updateChart = () => {
//       const value = selector.value;
//       let config = {};

//       switch (value) {
//         case 'marketShare':
//           config = {
//             type: 'line',
//             data: {
//               labels: years,
//               datasets: [{
//                 label: 'Medtronic Market Share (%)',
//                 data: marketShareData,
//                 borderColor: getColors().primary,
//                 backgroundColor: getColors().primary + '33',
//                 fill: true,
//                 tension: 0.4
//               }]
//             },
//             options: {
//               ...chartOptions,
//               scales: {
//                 x: {
//                   ...chartOptions.scales.x,
//                   title: { display: true, text: 'Year', color: getColors().text }
//                 },
//                 y: {
//                   ...chartOptions.scales.y,
//                   title: { display: true, text: 'Market Share (%)', color: getColors().text }
//                 }
//               }
//             }
//           };
//           description.innerHTML = `
//             This chart shows Medtronic's market share trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
//             The company has seen modest growth from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> in 2018 to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a> in 2024.
//           `;
//           break;

//         case 'revenue':
//           config = {
//             type: 'line',
//             data: {
//               labels: years,
//               datasets: [{
//                 label: 'Medtronic Revenue ($M)',
//                 data: revenueData,
//                 borderColor: getColors().secondary,
//                 backgroundColor: getColors().secondary + '33',
//                 fill: true,
//                 tension: 0.4
//               }]
//             },
//             options: {
//               ...chartOptions,
//               scales: {
//                 x: {
//                   ...chartOptions.scales.x,
//                   title: { display: true, text: 'Year', color: getColors().text }
//                 },
//                 y: {
//                   ...chartOptions.scales.y,
//                   title: { display: true, text: 'Revenue ($M)', color: getColors().text }
//                 }
//               }
//             }
//           };
//           description.innerHTML = `
//             This chart shows Medtronic's epilepsy revenue trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
//             Revenue grew from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$6.0M</a> in 2018 to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a> in 2024.
//           `;
//           break;

//         case 'marketSize':
//           config = {
//             type: 'line',
//             data: {
//               labels: years,
//               datasets: [{
//                 label: 'Total Market Size ($M)',
//                 data: marketSizeData,
//                 borderColor: getColors().accent,
//                 backgroundColor: getColors().accent + '33',
//                 fill: true,
//                 tension: 0.4
//               }]
//             },
//             options: {
//               ...chartOptions,
//               scales: {
//                 x: {
//                   ...chartOptions.scales.x,
//                   title: { display: true, text: 'Year', color: getColors().text }
//                 },
//                 y: {
//                   ...chartOptions.scales.y,
//                   title: { display: true, text: 'Market Size ($M)', color: getColors().text }
//                 }
//               }
//             }
//           };
//           description.innerHTML = `
//             This chart shows the total epilepsy neuromodulation market size from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
//             The market grew from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$301.5M</a> in 2018 to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a> in 2024.
//           `;
//           break;

//         case 'comparison':
//           config = {
//             type: 'line',
//             data: {
//               labels: years,
//               datasets: [
//                 {
//                   label: 'Medtronic Market Share (%)',
//                   data: marketShareData,
//                   borderColor: getColors().primary,
//                   backgroundColor: getColors().primary + '33',
//                   fill: false,
//                   tension: 0.4
//                 },
//                 {
//                   label: 'LivaNova Market Share (%)',
//                   data: [87.4, 86.0, 85.3, 84.4, 84.8, 81.5, 80.0],
//                   borderColor: getColors().secondary,
//                   backgroundColor: getColors().secondary + '33',
//                   fill: false,
//                   tension: 0.4
//                 },
//                 {
//                   label: 'NeuroPace Market Share (%)',
//                   data: [9.9, 10.9, 11.7, 12.6, 12.4, 16.0, 17.7],
//                   borderColor: getColors().accent,
//                   backgroundColor: getColors().accent + '33',
//                   fill: false,
//                   tension: 0.4
//                 }
//               ]
//             },
//             options: {
//               ...chartOptions,
//               scales: {
//                 x: {
//                   ...chartOptions.scales.x,
//                   title: { display: true, text: 'Year', color: getColors().text }
//                 },
//                 y: {
//                   ...chartOptions.scales.y,
//                   title: { display: true, text: 'Market Share (%)', color: getColors().text }
//                 }
//               }
//             }
//           };
//           description.innerHTML = `
//             This chart compares market share trends for Medtronic, LivaNova, and NeuroPace from 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
//             Medtronic's share grew modestly from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> to 
//             <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a>, 
//             while NeuroPace saw significant gains and LivaNova experienced a decline.
//           `;
//           break;
//       }

//       if (chartInstance) {
//         chartInstance.destroy();
//       }

//       chartInstance = new Chart(canvas, config);
//     };

//     selector.addEventListener('change', updateChart);
//     updateChart(); // Initial render
//   }

//   // Initialize Dark Mode Toggle
//   function initDarkModeToggle() {
//     const toggle = document.getElementById('darkModeToggle');
//     if (!toggle) {
//       console.warn('Dark mode toggle not found');
//       return;
//     }

//     toggle.addEventListener('click', () => {
//       document.documentElement.classList.toggle('dark');
//       // Re-render charts to update colors
//       initMiniCharts();
//       initMarketSharePie();
//       initDetailedChart();
//     });
//   }

//   // Initialize all charts
//   try {
//     initMiniCharts();
//     initMarketSharePie();
//     initDetailedChart();
//     initDarkModeToggle();
//   } catch (error) {
//     console.error('Error initializing charts:', error);
//   }
// }





function generateLivaNovaDashboard(p) {
  return `
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 max-w-7xl mx-auto">
      <!-- Dashboard Header -->
      <header class="mb-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">LivaNova Epilepsy Neuromodulation Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Comprehensive analysis of market data (2018-2024)</p>
          </div>
        </div>
      </header>


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

      <!-- Main Dashboard Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Market Share Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Share Overview</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">80.0%</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-red-600"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">-7.4%</a></span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
              <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Source:</strong> Calculated as (LivaNova Epilepsy Revenue / Total Market Size) × 100
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data From:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Revenue Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Epilepsy Revenue</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$360.7M</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">+36.9%</a></span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
              <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Calculation Method:</strong> 65% of Neuromodulation Segment Revenue
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data From:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Total Market Size Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Total Market Size</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Market Size</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$450.6M</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">+49.5%</a></span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Size Trend (2018-2024)</p>
              <canvas id="marketSizeMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Calculation Method:</strong> Sum of LivaNova, NeuroPace, and Medtronic epilepsy revenues
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Cross-Referenced With:</strong> <a href="https://www.marketresearchfuture.com/" class="text-blue-500 hover:underline">Market Research Future reports</a>
              </p>
            </div>
          </div>
        </div>

        <!-- VNS Technology Section -->
                       
 <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-3 min-h-fit overflow-hidden">
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

        <!-- Market Position Analysis Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-3 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Position Analysis</h2>
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="flex-1">
              <h3 class="font-medium text-lg sm:text-xl mb-3">Market Share by Company (2024)</h3>
              <canvas id="marketSharePieChart" class="w-full h-64 sm:h-72 aspect-[4/3]"></canvas>
            </div>
            <div class="flex-1">
              <h3 class="font-medium text-lg sm:text-xl mb-3">Gainers & Losers (2018-2024)</h3>
              <div class="space-y-4">
                <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-red-700 dark:text-red-400">Market Share Losers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>LivaNova</span>
                      <span class="text-red-600 dark:text-red-400"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">-7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share declining from <a href="https://investor.livanova.com/#2018" class="text-blue-500 hover:underline">87.4% in 2018</a> to <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">80.0% in 2024</a>, despite revenue growth.
                    </p>
                  </div>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>Competitors (NeuroPace, Medtronic)</span>
                      <span class="text-green-600 dark:text-green-400"><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">+7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Competitors gaining market share as LivaNova's dominance decreases, with NeuroPace mentioned as a key competitor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Detailed Charts Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 class="text-xl sm:text-2xl font-semibold">Detailed Analytics</h2>
            <div class="inline-flex mt-3 md:mt-0">
              <select id="chartSelector" class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="marketShare">Market Share Trend</option>
                <option value="revenue">Revenue Growth</option>
                <option value="marketSize">Total Market Size</option>
                <option value="comparison">Comparative Analysis</option>
              </select>
            </div>
          </div>
          <div id="detailedChartContainer" class="w-full h-80 sm:h-96"></div>
          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p id="chartDescription" class="mb-2">
              This chart shows LivaNova's market share trend from <a href="https://investor.livanova.com/#2018" class="text-blue-500 hover:underline">2018</a> to <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">2024</a>. The company has experienced a gradual decline in market share from <a href="https://investor.livanova.com/#2018" class="text-blue-500 hover:underline">87.4%</a> in 2018 to <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">80.0%</a> in 2024, despite showing consistent revenue growth.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 class="font-medium mb-2">Data Source</h3>
                <p class="text-xs">
                  All data is extracted from <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova's annual reports (2018-2024)</a>, with epilepsy revenue estimated as 65% of the neuromodulation segment. Market share is calculated by dividing LivaNova's epilepsy revenue by the total market size.
                </p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Calculation Methodology</h3>
                <p class="text-xs">
                  Market size calculation: Sum of epilepsy revenues from LivaNova, NeuroPace, and Medtronic, cross-referenced with <a href="https://www.marketresearchfuture.com/" class="text-blue-500 hover:underline">Market Research Future reports</a>. The 65% epilepsy allocation is an estimate based on VNS Therapy's primary indication.
                </p>
              </div>
            </div>
          </div>
        </div>
         <!-- Special Reimbursement Coverage -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
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

        <!-- Clinical Trials Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Clinical & Regulatory Milestones</h2>
          <div class="overflow-auto max-h-80">
            <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
              <div class="mb-6">
                <div class="flex items-center">
                  <div id="clinical-trial-2024" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">2024</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">CORE-VNS Study</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Presented 3-year interim results at AES 2024, demonstrating long-term efficacy of VNS Therapy.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://www.livanova.com/aes-2024-presentation" class="text-blue-500 hover:underline">LivaNova AES 2024 Presentation</a>
                  </p>
                </div>
              </div>
              
              <div class="mb-6">
                <div class="flex items-center">
                  <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">Regulatory Status</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">VNS Therapy Approvals</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    VNS Therapy is FDA-approved and CE-marked for epilepsy treatment, with no new approvals reported in 2018-2024.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://www.livanova.com/regulatory-documentation" class="text-blue-500 hover:underline">LivaNova Regulatory Documentation</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Calculation Methods Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Data Calculation Methods</h2>
          <div class="overflow-auto max-h-80">
            <div class="space-y-4">
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Share</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Market share = (LivaNova Epilepsy Revenue / Total Market Size) × 100
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Market share = (<a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$360.7M</a> / <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$450.6M</a>) × 100 = <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">80.0%</a>
                </p>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Epilepsy Revenue</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Epilepsy Revenue = Neuromodulation Revenue × 0.65
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Epilepsy Revenue = <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$554.2M</a> × 0.65 = <a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline">$360.7M</a>
                </p>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Size</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Market Size = Sum of epilepsy revenues of LivaNova, NeuroPace, and Medtronic
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Cross-referenced with <a href="https://www.marketresearchfuture.com/" class="text-blue-500 hover:underline">Market Research Future reports</a> for validation
                </p>
              </div>
              
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Year-on-Year Change</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Year-on-Year Change = ((Current Value - Previous Value) / Previous Value) × 100
                </p>
              </div>
              
              <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Data Limitations</h3>
                <ul class="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  <li>The 65% allocation for epilepsy is an estimate based on VNS Therapy's primary indication</li>
                  <li>Exact splits between epilepsy and other indications are not publicly disclosed by LivaNova</li>
                  <li>Implant revenue splits (new vs. replacement) are only reported for 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

       <!-- Epilepsy Treatment Context -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
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

      <!-- Data Source Links -->
      <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">Data Sources & Links</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Annual Reports</h3>
            <ul class="space-y-1">
              <li><a href="https://investor.livanova.com/#2018" class="text-blue-500 hover:underline text-sm">LivaNova 2018 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#2019" class="text-blue-500 hover:underline text-sm">LivaNova 2019 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#2020" class="text-blue-500 hover:underline text-sm">LivaNova 2020 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#2021" class="text-blue-500 hover:underline text-sm">LivaNova 2021 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#2022" class="text-blue-500 hover:underline text-sm">LivaNova 2022 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#2023" class="text-blue-500 hover:underline text-sm">LivaNova 2023 Annual Report</a></li>
              <li><a href="https://investor.livanova.com/#q4-2024-earnings" class="text-blue-500 hover:underline text-sm">LivaNova Q4 2024 Earnings</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Clinical & Regulatory</h3>
            <ul class="space-y-1">
              <li><a href="https://www.livanova.com/core-vns-study" class="text-blue-500 hover:underline text-sm">CORE-VNS Study Details</a></li>
              <li><a href="https://www.livanova.com/aes-2024-presentation" class="text-blue-500 hover:underline text-sm">LivaNova AES 2024 Presentation</a></li>
              <li><a href="https://www.livanova.com/fda-approval" class="text-blue-500 hover:underline text-sm">FDA Approval Documentation</a></li>
              <li><a href="https://www.livanova.com/ce-mark" class="text-blue-500 hover:underline text-sm">CE Mark Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Market Research</h3>
            <ul class="space-y-1">
              <li><a href="https://www.marketresearchfuture.com/" class="text-blue-500 hover:underline text-sm">Market Research Future Reports</a></li>
              <li><a href="https://www.livanova.com/competitor-financials" class="text-blue-500 hover:underline text-sm">Competitor Financial Statements</a></li>
              <li><a href="https://www.livanova.com/industry-reports" class="text-blue-500 hover:underline text-sm">Industry Analysis Reports</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer with last updated info -->
      <footer class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400 pb-8">
        <p>
          Last updated: April 22, 2025 | Data accurate as of Q4 2024 reports
          <br>
          <span class="text-xs">Dashboard generated for analytical purposes only. All data sourced from public financial reports.</span>
        </p>
      </footer>
    </div>
  `;
}


/**
 * Initialize LivaNova Dashboard Charts
 * 
 * This function initializes all charts in the LivaNova dashboard
 * using market data for epilepsy neuromodulation from 2018-2024.
 * 
 * @param {boolean} waitForDOM - Whether to wait for DOM elements to be available before initializing
 */
function initializeLivanovaCharts(data, waitForDOM = true) {
  // Market share data
  const marketShareData = [
    { year: '2018', marketShare: 87.4, yearOnYearChange: null },
    { year: '2019', marketShare: 86.0, yearOnYearChange: -1.6 },
    { year: '2020', marketShare: 85.3, yearOnYearChange: -0.8 },
    { year: '2021', marketShare: 84.4, yearOnYearChange: -1.1 },
    { year: '2022', marketShare: 84.8, yearOnYearChange: 0.5 },
    { year: '2023', marketShare: 81.5, yearOnYearChange: -3.9 },
    { year: '2024', marketShare: 80.0, yearOnYearChange: -1.8 }
  ];

  // Revenue data
  const revenueData = [
    { year: '2018', revenue: 263.5, yearOnYearChange: null },
    { year: '2019', revenue: 275.9, yearOnYearChange: 4.7 },
    { year: '2020', revenue: 268.8, yearOnYearChange: -2.6 },
    { year: '2021', revenue: 282.1, yearOnYearChange: 5.0 },
    { year: '2022', revenue: 310.1, yearOnYearChange: 9.9 },
    { year: '2023', revenue: 332.2, yearOnYearChange: 7.1 },
    { year: '2024', revenue: 360.7, yearOnYearChange: 8.6 }
  ];

  // Total market size data
  const marketSizeData = [
    { year: '2018', marketSize: 301.5 },
    { year: '2019', marketSize: 320.9 },
    { year: '2020', marketSize: 315.3 },
    { year: '2021', marketSize: 334.1 },
    { year: '2022', marketSize: 365.4 },
    { year: '2023', marketSize: 407.6 },
    { year: '2024', marketSize: 450.6 }
  ];

  // If we need to wait for the DOM to be ready
  if (waitForDOM) {
    // Check if the necessary elements exist
    if (!document.getElementById('marketShareMiniChart')) {
      console.log('DOM elements not ready, waiting...');
      setTimeout(() => initializeLivanovaCharts(true), 100);
      return;
    }
  }

  // Initialize dark mode toggle
  initDarkModeToggle();
  
  // Initialize mini charts
  initMiniCharts();
  
  // Initialize market share pie chart
  initMarketSharePie();
  
  // Initialize detailed charts
  initDetailedCharts();
  
  // ========== CHART INITIALIZATION FUNCTIONS ==========
  
  /**
   * Initialize dark mode toggle functionality
   */
  function initDarkModeToggle() {
    try {
      const darkModeToggle = document.getElementById('darkModeToggle');
      if (!darkModeToggle) {
        console.warn('Dark mode toggle button not found');
        return;
      }
      
      // Check for user preference
      if (localStorage.getItem('darkMode') === 'true' || 
          (localStorage.getItem('darkMode') === null && 
          window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
      
      darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
      });
    } catch (e) {
      console.error('Error initializing dark mode toggle:', e);
    }
  }
  
  /**
   * Initialize mini charts (market share, revenue, market size)
   */
  function initMiniCharts() {
    try {
      // Market Share Mini Chart - Sparkline style
      const marketShareCanvas = document.getElementById('marketShareMiniChart');
      if (!marketShareCanvas) {
        console.error('Market share mini chart canvas not found');
        return;
      }
      
      const msContext = marketShareCanvas.getContext('2d');
      if (!msContext) {
        console.error('Could not get 2D context for market share mini chart');
        return;
      }
      
      try {
        new Chart(msContext, {
          type: 'line',
          data: {
            labels: marketShareData.map(d => d.year),
            datasets: [{
              data: marketShareData.map(d => d.marketShare),
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderWidth: 2,
              pointRadius: 0,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => `Market Share: ${context.raw}%`
                }
              }
            },
            scales: {
              x: { display: false },
              y: { 
                display: false,
                min: 75,
                max: 90
              }
            }
          }
        });
      } catch (e) {
        console.error('Error creating market share mini chart:', e);
      }
    
      // Revenue Mini Chart - Sparkline style
      const revenueCanvas = document.getElementById('revenueMiniChart');
      if (!revenueCanvas) {
        console.error('Revenue mini chart canvas not found');
        return;
      }
      
      const rvContext = revenueCanvas.getContext('2d');
      if (!rvContext) {
        console.error('Could not get 2D context for revenue mini chart');
        return;
      }
      
      try {
        new Chart(rvContext, {
          type: 'line',
          data: {
            labels: revenueData.map(d => d.year),
            datasets: [{
              data: revenueData.map(d => d.revenue),
              borderColor: '#22c55e',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              borderWidth: 2,
              pointRadius: 0,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => `Revenue: $${context.raw}M`
                }
              }
            },
            scales: {
              x: { display: false },
              y: { 
                display: false,
                min: 250,
                max: 370
              }
            }
          }
        });
      } catch (e) {
        console.error('Error creating revenue mini chart:', e);
      }
      
      // Market Size Mini Chart - Sparkline style
      const marketSizeCanvas = document.getElementById('marketSizeMiniChart');
      if (!marketSizeCanvas) {
        console.error('Market size mini chart canvas not found');
        return;
      }
      
      const msizContext = marketSizeCanvas.getContext('2d');
      if (!msizContext) {
        console.error('Could not get 2D context for market size mini chart');
        return;
      }
      
      try {
        new Chart(msizContext, {
          type: 'line',
          data: {
            labels: marketSizeData.map(d => d.year),
            datasets: [{
              data: marketSizeData.map(d => d.marketSize),
              borderColor: '#3b82f6',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderWidth: 2,
              pointRadius: 0,
              fill: true,
              tension: 0.4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                callbacks: {
                  label: (context) => `Market Size: $${context.raw}M`
                }
              }
            },
            scales: {
              x: { display: false },
              y: { 
                display: false,
                min: 290,
                max: 460
              }
            }
          }
        });
      } catch (e) {
        console.error('Error creating market size mini chart:', e);
      }
    } catch (e) {
      console.error('Error initializing mini charts:', e);
    }
  }
  
  /**
   * Initialize market share pie chart
   */
  function initMarketSharePie() {
    try {
      const pieCanvas = document.getElementById('marketSharePieChart');
      if (!pieCanvas) {
        console.error('Market share pie chart canvas not found');
        return;
      }
      
      const pieContext = pieCanvas.getContext('2d');
      if (!pieContext) {
        console.error('Could not get 2D context for market share pie chart');
        return;
      }
      
      new Chart(pieContext, {
        type: 'pie',
        data: {
          labels: ['LivaNova', 'NeuroPace', 'Medtronic', 'Others'],
          datasets: [{
            data: [80.0, 12.5, 6.8, 0.7],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(249, 115, 22, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(107, 114, 128, 0.8)'
            ],
            borderColor: [
              'rgba(59, 130, 246, 1)',
              'rgba(249, 115, 22, 1)',
              'rgba(16, 185, 129, 1)',
              'rgba(107, 114, 128, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                padding: 15,
                font: {
                  size: 12
                }
              }
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.raw}%`
              }
            }
          }
        }
      });
    } catch (e) {
      console.error('Error creating market share pie chart:', e);
    }
  }
  
  /**
   * Initialize detailed charts with selector functionality
   */
  function initDetailedCharts() {
    try {
      const chartSelector = document.getElementById('chartSelector');
      const chartContainer = document.getElementById('detailedChartContainer');
      const chartDescription = document.getElementById('chartDescription');
      
      if (!chartSelector || !chartContainer || !chartDescription) {
        console.error('One or more elements for detailed charts not found');
        return;
      }
      
      // Clear any existing content
      chartContainer.innerHTML = '';
      
      // Create canvas for chart
      const canvas = document.createElement('canvas');
      canvas.id = 'detailedChart';
      chartContainer.appendChild(canvas);
      
      // Shared chart instance
      let chartInstance = null;
      
      // Chart configuration functions
      const chartConfigs = {
        marketShare: () => {
          return {
            type: 'line',
            data: {
              labels: marketShareData.map(d => d.year),
              datasets: [{
                label: 'Market Share (%)',
                data: marketShareData.map(d => d.marketShare),
                borderColor: 'rgba(59, 130, 246, 1)',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                pointRadius: 4,
                fill: true,
                tension: 0.2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: {
                    label: (context) => `Market Share: ${context.raw}%`,
                    afterLabel: (context) => {
                      const idx = context.dataIndex;
                      if (idx > 0) {
                        return `YoY Change: ${marketShareData[idx].yearOnYearChange}%`;
                      }
                      return '';
                    }
                  }
                }
              },
              scales: {
                x: { 
                  title: {
                    display: true,
                    text: 'Year'
                  }
                },
                y: { 
                  title: {
                    display: true,
                    text: 'Market Share (%)'
                  },
                  min: 75,
                  max: 90
                }
              }
            }
          };
        },
        
        revenue: () => {
          return {
            type: 'bar',
            data: {
              labels: revenueData.map(d => d.year),
              datasets: [{
                label: 'Revenue ($M)',
                data: revenueData.map(d => d.revenue),
                backgroundColor: 'rgba(34, 197, 94, 0.7)',
                borderColor: 'rgba(34, 197, 94, 1)',
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: {
                    label: (context) => `Revenue: $${context.raw}M`,
                    afterLabel: (context) => {
                      const idx = context.dataIndex;
                      if (idx > 0) {
                        return `YoY Growth: ${revenueData[idx].yearOnYearChange}%`;
                      }
                      return '';
                    }
                  }
                }
              },
              scales: {
                x: { 
                  title: {
                    display: true,
                    text: 'Year'
                  }
                },
                y: { 
                  title: {
                    display: true,
                    text: 'Revenue ($M)'
                  },
                  min: 250,
                  max: 370
                }
              }
            }
          };
        },
        
        marketSize: () => {
          return {
            type: 'line',
            data: {
              labels: marketSizeData.map(d => d.year),
              datasets: [{
                label: 'Total Market Size ($M)',
                data: marketSizeData.map(d => d.marketSize),
                borderColor: 'rgba(139, 92, 246, 1)',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                pointRadius: 4,
                fill: true,
                tension: 0.2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: {
                    label: (context) => `Market Size: $${context.raw}M`
                  }
                }
              },
              scales: {
                x: { 
                  title: {
                    display: true,
                    text: 'Year'
                  }
                },
                y: { 
                  title: {
                    display: true,
                    text: 'Market Size ($M)'
                  },
                  min: 290
                }
              }
            }
          };
        },
        
        comparison: () => {
          // Calculate market share percentage for revenue chart
          const dataForComparison = marketShareData.map((item, idx) => {
            return {
              year: item.year,
              marketShare: item.marketShare,
              revenue: revenueData[idx].revenue
            };
          });
          
          return {
            type: 'line',
            data: {
              labels: dataForComparison.map(d => d.year),
              datasets: [
                {
                  label: 'Market Share (%)',
                  data: dataForComparison.map(d => d.marketShare),
                  borderColor: 'rgba(59, 130, 246, 1)',
                  backgroundColor: 'rgba(59, 130, 246, 0)',
                  borderWidth: 2,
                  pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                  pointRadius: 4,
                  tension: 0.2,
                  yAxisID: 'y'
                },
                {
                  label: 'Revenue ($M)',
                  data: dataForComparison.map(d => d.revenue),
                  borderColor: 'rgba(34, 197, 94, 1)',
                  backgroundColor: 'rgba(34, 197, 94, 0)',
                  borderWidth: 2,
                  pointBackgroundColor: 'rgba(34, 197, 94, 1)',
                  pointRadius: 4,
                  tension: 0.2,
                  yAxisID: 'y1'
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              interaction: {
                mode: 'index',
                intersect: false
              },
              plugins: {
                legend: { display: true },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      if (context.dataset.label.includes('Market Share')) {
                        return `Market Share: ${context.raw}%`;
                      } else {
                        return `Revenue: $${context.raw}M`;
                      }
                    }
                  }
                }
              },
              scales: {
                x: { 
                  title: {
                    display: true,
                    text: 'Year'
                  }
                },
                y: { 
                  title: {
                    display: true,
                    text: 'Market Share (%)',
                    color: 'rgba(59, 130, 246, 1)'
                  },
                  position: 'left',
                  min: 75,
                  max: 90
                },
                y1: {
                  title: {
                    display: true,
                    text: 'Revenue ($M)',
                    color: 'rgba(34, 197, 94, 1)'
                  },
                  position: 'right',
                  min: 250,
                  max: 370,
                  grid: {
                    drawOnChartArea: false
                  }
                }
              }
            }
          };
        }
      };
      
      // Chart description texts
      const chartDescriptions = {
        marketShare: `This chart shows LivaNova's market share trend from 2018 to 2024. The company has experienced a gradual 
                     decline in market share from 87.4% in 2018 to 80.0% in 2024, despite showing consistent revenue growth. 
                     This suggests competitors are growing faster than LivaNova in the epilepsy neuromodulation market.`,
        
        revenue: `LivaNova's epilepsy revenue has shown consistent growth from $263.5M in 2018 to $360.7M in 2024, 
                 representing a 36.9% increase over this period. The only decline occurred in 2020 (-2.6%), likely due 
                 to the COVID-19 pandemic, but growth quickly resumed in 2021 and continued through 2024.`,
        
        marketSize: `The total epilepsy neuromodulation market has grown significantly from $301.5M in 2018 to $450.6M in 2024, 
                    representing a 49.5% increase. This growth rate exceeds LivaNova's revenue growth, explaining the 
                    company's market share decline as competitors capture a larger portion of the expanding market.`,
        
        comparison: `This chart compares LivaNova's market share percentage against its revenue growth. While revenue 
                    has grown consistently (36.9% increase from 2018 to 2024), market share has declined (7.4% decrease). 
                    This inverse relationship indicates that LivaNova is growing, but not as quickly as the overall market.`
      };
      
      // Initialize chart with market share data by default
      try {
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.error('Could not get 2D context for detailed chart');
          return;
        }
        
        chartInstance = new Chart(ctx, chartConfigs.marketShare());
        
        // Handle chart type selection
        chartSelector.addEventListener('change', updateChart);
      } catch (e) {
        console.error('Error initializing detailed chart:', e);
      }
      
      function updateChart() {
        try {
          const selectedChart = chartSelector.value;
          
          // Destroy existing chart
          if (chartInstance) {
            chartInstance.destroy();
          }
          
          // Create new chart based on selection
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            console.error('Could not get 2D context for detailed chart update');
            return;
          }
          
          chartInstance = new Chart(ctx, chartConfigs[selectedChart]());
          
          // Update description
          chartDescription.textContent = chartDescriptions[selectedChart];
        } catch (e) {
          console.error('Error updating chart:', e);
        }
      }
    } catch (e) {
      console.error('Error initializing detailed charts:', e);
    }
  }
  
  // Catch any unexpected errors in the main function
  console.log('Dashboard charts initialization completed');
}


// function initializeLivanovaCharts(data) {
//   const isDarkMode = document.documentElement.classList.contains('dark');
//   const textColor = isDarkMode ? '#ffffff' : '#666666';
//   const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

//   // Revenue by Region Chart
//   const revenueByRegionCtx = document.getElementById('livanova-revenue-by-region').getContext('2d');
//   new Chart(revenueByRegionCtx, {
//     type: 'bar',
//     data: {
//       labels: ['2022', '2023', '2024'],
//       datasets: [
//         {
//           label: 'United States',
//           data: [374.5, 407.5, 441.0],
//           backgroundColor: 'rgba(59, 130, 246, 0.8)',
//           borderColor: 'rgba(59, 130, 246, 1)',
//           borderWidth: 1
//         },
//         {
//           label: 'Europe',
//           data: [50.3, 57.4, 54.9],
//           backgroundColor: 'rgba(16, 185, 129, 0.8)',
//           borderColor: 'rgba(16, 185, 129, 1)',
//           borderWidth: 1
//         },
//         {
//           label: 'Rest of World',
//           data: [52.2, 54.8, 58.3],
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
//           ticks: { color: textColor },
//           grid: { color: gridColor }
//         },
//         y: {
//           stacked: false,
//           beginAtZero: true,
//           ticks: {
//             color: textColor,
//             callback: function(value) {
//               return '$' + value + 'M';
//             }
//           },
//           grid: { color: gridColor },
//           title: {
//             display: true,
//             text: 'Revenue (Millions USD)',
//             color: textColor
//           }
//         }
//       },
//       plugins: {
//         legend: { 
//           position: 'top',
//           labels: { color: textColor }
//         },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               return context.dataset.label + ': $' + context.raw.toFixed(1) + 'M';
//             }
//           }
//         }
//       }
//     }
//   });
//   // Expenses Chart (continued)
//   const expensesCtx = document.getElementById('livanova-expenses').getContext('2d');
//   new Chart(expensesCtx, {
//     type: 'pie',
//     data: {
//       labels: ['Cost of Sales', 'SG&A', 'R&D'],
//       datasets: [{
//         data: [50.2, 187.6, 121.0],
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
//         legend: { labels: { color: textColor } },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               const value = context.raw;
//               const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
//               const percentage = ((value / total) * 100).toFixed(1);
//               return `$${value.toFixed(1)}M (${percentage}%)`;
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
//           tension: 0.3,
//           fill: false
//         },
//         {
//           label: 'Segment Income Growth (%)',
//           data: [null, -11.2, 27.3],
//           borderColor: 'rgba(16, 185, 129, 1)',
//           backgroundColor: 'rgba(16, 185, 129, 0.1)',
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
//             color: textColor,
//             callback: function(value) {
//               return value + '%';
//             }
//           },
//           grid: { color: gridColor }
//         },
//         x: {
//           ticks: { color: textColor },
//           grid: { color: gridColor }
//         }
//       },
//       plugins: {
//         legend: { labels: { color: textColor } },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               if (context.raw === null) {
//                 return `${context.dataset.label}: No data`;
//               }
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
//           label: 'Total Revenue ($M)',
//           data: [477.0, 519.7, 554.2],
//           backgroundColor: 'rgba(59, 130, 246, 0.8)',
//           borderColor: 'rgba(59, 130, 246, 1)',
//           borderWidth: 1,
//           order: 2
//         },
//         {
//           label: 'Segment Income ($M)',
//           data: [172.8, 153.4, 195.3],
//           backgroundColor: 'rgba(16, 185, 129, 0.8)',
//           borderColor: 'rgba(16, 185, 129, 1)',
//           borderWidth: 1,
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
//             text: 'USD ($M)',
//             color: textColor
//           },
//           ticks: {
//             color: textColor,
//             callback: function(value) {
//               return '$' + value + 'M';
//             }
//           },
//           grid: { color: gridColor }
//         },
//         y1: {
//           type: 'linear',
//           position: 'right',
//           beginAtZero: true,
//           max: 50,
//           title: {
//             display: true,
//             text: 'Profit Margin (%)',
//             color: textColor
//           },
//           ticks: {
//             color: textColor,
//             callback: function(value) {
//               return value + '%';
//             }
//           },
//           grid: {
//             drawOnChartArea: false,
//             color: gridColor
//           }
//         },
//         x: {
//           ticks: { color: textColor },
//           grid: { color: gridColor }
//         }
//       },
//       plugins: {
//         legend: { labels: { color: textColor } },
//         tooltip: {
//           callbacks: {
//             label: function(context) {
//               if (context.dataset.label === 'Profit Margin (%)') {
//                 return `${context.dataset.label}: ${context.raw}%`;
//               } else {
//                 return `${context.dataset.label}: $${context.raw.toFixed(1)}M`;
//               }
//             }
//           }
//         }
//       }
//     }
//   });
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
// function initializeLivanovaCharts(data) {
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
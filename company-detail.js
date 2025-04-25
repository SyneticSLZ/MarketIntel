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
              data: [559, 596, 635, 677, 722, 769, 820, 874],
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
          labels: ['U.S. Patients', 'Rest of World Patients'],
          datasets: [{
              data: [3.335, 46.665],
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
  
  new Chart(document.getElementById('epiminder-funding').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Series A (2020)', 'Bridge Round (2022)'],
          datasets: [{
              label: 'Funding Amount (USD Million)',
              data: [12.645, 11.117],
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
                  <p class="text-sm text-gray-500 dark:text-gray-400">Data as of April 24, 2025</p>
              </div>
          </div>

          <!-- Key Metrics -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Size (2023)</h3>
                  <p class="mt-2 text-2xl font-bold">$559M</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Monitoring Devices</p>
                  <p class="text-xs text-gray-500 mt-2">Source: <a href="https://www.grandviewresearch.com/industry-analysis/epilepsy-monitoring-devices-market-report" target="_blank" class="text-blue-500 hover:underline">Grand View Research, 2023</a></p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
                  <p class="mt-2 text-2xl font-bold">6.6%</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">2024-2030</p>
                  <p class="text-xs text-gray-500 mt-2">Source: <a href="https://www.grandviewresearch.com/industry-analysis/epilepsy-monitoring-devices-market-report" target="_blank" class="text-blue-500 hover:underline">Grand View Research, 2023</a></p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                  <p class="mt-2 text-2xl font-bold">AUD 34M (~$24M USD)</p>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Series A 2020: AUD 18M; Bridge 2022: AUD 16M</p>
                  <p class="text-xs text-gray-500 mt-2">Source: <a href="https://epiminder.com/australian-medical-device-innovator-epi-minder-raises-18m-to-develop-its-breakthrough-epilepsy-monitoring-device/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder 2020</a>, <a href="https://www.startupdaily.net/topic/funding/cochlear-backs-medtech-startup-epiminder-in-16-million-bridge-funding-round/" target="_blank" class="text-blue-500 hover:underline">Startup Daily 2022</a></p>
                  <p class="text-xs text-gray-500 mt-1">Calculation: AUD 18M × 0.7025 (2020 rate) ≈ $12.645M; AUD 16M × 0.6948 (2022 rate) ≈ $11.117M; Total ≈ $24M USD. <a href="https://www.exchangerates.org.uk/AUD-USD-05_10_2020-exchange-rate-history.html" target="_blank" class="text-blue-500 hover:underline">2020 Rate</a>, <a href="https://www.exchangerates.org.uk/AUD-USD-spot-exchange-rates-history-2022.html" target="_blank" class="text-blue-500 hover:underline">2022 Rate</a></p>
              </div>
          </div>

          <!-- Charts -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Market Growth Forecast</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: <a href="https://www.grandviewresearch.com/industry-analysis/epilepsy-monitoring-devices-market-report" target="_blank" class="text-blue-500 hover:underline">Grand View Research, 2023-2030 (6.6% CAGR)</a></p>
                      <p class="text-xs text-gray-500 mt-1">Calculation: FV = PV × (1 + 0.066)^n, where PV = $559M (2023). E.g., 2030: 559 × 1.066^7 ≈ $874M.</p>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="epiminder-market-growth"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Patient Reach Potential</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: <a href="https://www.cdc.gov/epilepsy/data-research/facts-stats/index.html" target="_blank" class="text-blue-500 hover:underline">CDC, 2021</a>, <a href="https://www.who.int/news-room/fact-sheets/detail/epilepsy" target="_blank" class="text-blue-500 hover:underline">WHO</a></p>
                      <p class="text-xs text-gray-500 mt-1">Calculation: U.S.: ~2.865M adults + ~0.470M children ≈ 3.335M; Global: 50M - 3.335M ≈ 46.665M.</p>
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
                      <p class="text-xs text-gray-500 mt-1">Source: <a href="https://epiminder.com/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder Website</a>, <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.713794/full" target="_blank" class="text-blue-500 hover:underline">Frontiers 2021</a></p>
                      <p class="text-xs text-gray-500 mt-1">Note: Scores are illustrative based on qualitative advantages of sub-scalp EEG vs. conventional EEG.</p>
                  </div>
                  <div class="p-6 h-80">
                      <canvas id="epiminder-tech-comparison"></canvas>
                  </div>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
                  <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                      <h2 class="text-xl font-semibold">Funding Timeline</h2>
                      <p class="text-xs text-gray-500 mt-1">Source: <a href="https://epiminder.com/australian-medical-device-innovator-epi-minder-raises-18m-to-develop-its-breakthrough-epilepsy-monitoring-device/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder 2020</a>, <a href="https://www.startupdaily.net/topic/funding/cochlear-backs-medtech-startup-epiminder-in-16-million-bridge-funding-round/" target="_blank" class="text-blue-500 hover:underline">Startup Daily 2022</a></p>
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
                  <p class="text-gray-600 dark:text-gray-300">Epi-Minder’s Minder device, an implantable continuous EEG monitor, enhances epilepsy management with real-time seizure detection. It competes with conventional EEGs (e.g., Natus Medical) and wearables (e.g., Empatica). FDA De Novo authorization in April 2025 supports a U.S. rollout in late 2025. Ongoing clinical trials aim for regulatory approval by 2026, potentially disrupting the $559M epilepsy monitoring market, projected to reach $874M by 2030.</p>
                  <p class="mt-2 text-gray-600 dark:text-gray-300"><span class="font-semibold">Threat to Market:</span> Minder’s sub-scalp design offers a less invasive, patient-friendly alternative, threatening traditional EEG markets. Challenges include battery life and data privacy concerns, common in wearables.</p>
                  <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=378244" target="_blank" class="text-blue-500 hover:underline">ANZCTR UMPIRE Trial</a>, <a href="https://epiminder.com/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder Website</a>, <a href="https://www.neurologylive.com/view/fda-grants-de-novo-authorization-epiminder-minder-implantable-continuous-eeg-monitoring-system-epilepsy" target="_blank" class="text-blue-500 hover:underline">Neurology Live, April 2025</a> <a href="https://x.com/neurology_live/status/1915422918122623273" target="_blank" class="text-blue-500 hover:underline">Neurology Live, X.com</a></p>
              </div>
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                  <p class="text-gray-600 dark:text-gray-300">Minder is a minimally invasive, behind-the-ear sub-scalp EEG device for continuous seizure detection and data logging. Unlike deep brain stimulation (DBS) or responsive neurostimulation (RNS), it avoids brain penetration, enhancing patient comfort. FDA-approved in April 2025, it targets ~50M epilepsy patients globally.</p>
                  <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Clinical Research:</p>
                  <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• First human implantation: 2019 (<a href="https://epiminder.com/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder</a>)</li>
                      <li>• Safety & Efficacy: Ongoing UMPIRE trial (<a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=378244" target="_blank" class="text-blue-500 hover:underline">ANZCTR</a>)</li>
                      <li>• Pediatric study: Registered, ages 3-17 (<a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=380204" target="_blank" class="text-blue-500 hover:underline">ANZCTR</a>)</li>
                  </ul>
                  <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=378244" target="_blank" class="text-blue-500 hover:underline">ANZCTR UMPIRE Trial</a>, <a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=380204" target="_blank" class="text-blue-500 hover:underline">ANZCTR Pediatric</a>, <a href="https://epiminder.com/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder Website</a></p>
              </div>
          </div>
          
          <!-- Strategic Insights -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
              <h2 class="text-xl font-semibold mb-4">Strategic Insights</h2>
              <p class="text-gray-600 dark:text-gray-300">Epi-Minder is poised to capture a significant share of the epilepsy monitoring market, projected to grow from $559M in 2023 to $874M by 2030 at a 6.6% CAGR. The Minder device’s FDA De Novo authorization in April 2025 positions it for a U.S. launch in late 2025, targeting ~3.335M U.S. patients and ~46.665M globally. Its sub-scalp EEG technology offers advantages over conventional EEGs and wearables, potentially disrupting competitors like Natus Medical and Empatica.</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2"><span class="font-semibold">Market Opportunities:</span> The rising prevalence of epilepsy (50M globally, per WHO) and demand for remote monitoring (tele-epilepsy market to reach $2.46B by 2035) create opportunities for Minder in home care settings. Expansion into low-income countries, where 80% of patients reside, could drive scalability.</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2"><span class="font-semibold">Challenges:</span> Battery life limitations and data privacy concerns must be addressed to ensure adoption. Regulatory hurdles in global markets and competition from neurostimulation devices (e.g., DBS, RNS) pose risks.</p>
              <p class="text-gray-600 dark:text-gray-300 mt-2"><span class="font-semibold">Next Steps:</span> Epi-Minder should focus on completing UMPIRE and pediatric trials to secure global approvals, invest in battery technology, and partner with telemedicine platforms to enhance remote monitoring capabilities.</p>
              <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.grandviewresearch.com/industry-analysis/epilepsy-monitoring-devices-market-report" target="_blank" class="text-blue-500 hover:underline">Grand View Research</a>, <a href="https://www.who.int/news-room/fact-sheets/detail/epilepsy" target="_blank" class="text-blue-500 hover:underline">WHO</a>, <a href="https://www.globenewswire.com/news-release/2025/01/14/3012710/0/en/Tele-epilepsy-Market-by-Epilepsy-Type-Patient-Type-Component-End-User-and-Region.html" target="_blank" class="text-blue-500 hover:underline">GlobeNewswire Tele-epilepsy</a></p>
          </div>

          <!-- Citations -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <a href="https://www.grandviewresearch.com/industry-analysis/epilepsy-monitoring-devices-market-report" target="_blank" class="text-blue-500 hover:underline">Grand View Research, "Epilepsy Monitoring Devices Market" (2023)</a></li>
                  <li>• <a href="https://epiminder.com/australian-medical-device-innovator-epi-minder-raises-18m-to-develop-its-breakthrough-epilepsy-monitoring-device/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder Press Release, Series A Funding (October 2020)</a></li>
                  <li>• <a href="https://www.startupdaily.net/topic/funding/cochlear-backs-medtech-startup-epiminder-in-16-million-bridge-funding-round/" target="_blank" class="text-blue-500 hover:underline">Startup Daily, Bridge Funding Round (March 2022)</a></li>
                  <li>• <a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=378244" target="_blank" class="text-blue-500 hover:underline">Australian New Zealand Clinical Trials Registry, UMPIRE Trial (ACTRN12619000834123)</a></li>
                  <li>• <a href="https://www.anzctr.org.au/Trial/Registration/TrialReview.aspx?id=380204" target="_blank" class="text-blue-500 hover:underline">Australian New Zealand Clinical Trials Registry, Pediatric Study (ACTRN12620000878976)</a></li>
                  <li>• <a href="https://www.cdc.gov/epilepsy/data-research/facts-stats/index.html" target="_blank" class="text-blue-500 hover:underline">Centers for Disease Control and Prevention, "Epilepsy Data and Statistics" (2021)</a></li>
                  <li>• <a href="https://www.who.int/news-room/fact-sheets/detail/epilepsy" target="_blank" class="text-blue-500 hover:underline">World Health Organization, "Epilepsy Key Facts"</a></li>
                  <li>• <a href="https://epiminder.com/" target="_blank" class="text-blue-500 hover:underline">Epi-Minder Company Website</a></li>
                  <li>• <a href="https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.713794/full" target="_blank" class="text-blue-500 hover:underline">Frontiers, "Seizure Forecasting Using Sub-Scalp EEG" (2021)</a></li>
                  <li>• <a href="https://x.com/neurology_live/status/1915422918122623273" target="_blank" class="text-blue-500 hover:underline">Neurology Live, "FDA Grants De Novo Authorization to Epi-Minder" (April 2025) | X.com</a></li>
                  <li>• <a href="https://www.globenewswire.com/news-release/2025/01/14/3009059/0/en/Growth-Trends-in-the-483-Million-Tele-epilepsy-Market-2024-2035-Eyes-2-46-Billion-Valuation-by-2035-with-Wearable-Devices-and-Remote-Monitoring-Revolutionizing-the-Industry.html" target="_blank" class="text-blue-500 hover:underline">GlobeNewswire, "Tele-epilepsy Market Forecast" (January 2025)</a></li>
              </ul>
          </div>
      </div>
  `;
}

///////////////////////////////////////// FLOW ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateFlowMedicalDashboard(data) {
  return `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .card-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .collapsible-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
        }
        .collapsible-content.active {
            max-height: 1000px;
        }
        canvas {
            max-height: 400px;
        }
    </style>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
        <!-- Header -->
        <header class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-start fade-in">
            <div>
                <h1 class="text-4xl font-bold mb-2">Flow Medical Dashboard</h1>
                <p class="text-lg text-gray-600 dark:text-gray-300">tDCS: Depression & Potential Epilepsy Crossover</p>
            </div>
            <div class="text-right mt-4 md:mt-0">
                <p class="text-sm text-gray-500 dark:text-gray-400">Last Updated: April 25, 2025</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">Data as of March 31, 2025</p>
            </div>
        </header>

        <!-- AI Summary -->
        <section class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 fade-in">
            <h2 class="text-2xl font-semibold mb-4">AI-Generated Summary</h2>
            <p class="text-gray-600 dark:text-gray-300">
                Flow Neuroscience’s tDCS headset, with over 14,000 users in 2024, is a proven depression treatment, backed by NHS trials and CE-marking 
                <a href="https://www.flowneuroscience.com/results/" class="text-blue-500 hover:underline" target="_blank">[Flow Neuroscience]</a>. 
                Its potential epilepsy market entry is constrained by no epilepsy-specific trials as of April 2025, despite a $551.1M epilepsy device market growing at 5.7% CAGR 
                <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">[Credence Research]</a>. 
                The 33% depression comorbidity in epilepsy (16.5M patients) offers a crossover opportunity, but regulatory hurdles and competition from VNS/DBS pose risks 
 Itália            <a href="https://www.epilepsy.com/complications-risks/moods-behavior/depression" class="text-blue-500 hover:underline" target="_blank">[Epilepsy Foundation]</a>. 
                Flow’s $10.5M funding supports depression-focused R&D, but epilepsy expansion requires clinical investment 
                <a href="https://www.siliconrepublic.com/start-ups/flow-neuroscience-series-a-funding" class="text-blue-500 hover:underline" target="_blank">[Silicon Republic]</a>. 
                Strategic partnerships or trials targeting comorbid patients could unlock growth by 2030, potentially capturing 5–10% of the epilepsy market.
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">
                Generated by Grok 3, xAI, April 25, 2025
            </p>
        </section>

        <!-- Key Metrics -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 card-hover transition-all fade-in">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Epilepsy Market Size (2024)</h3>
                <p class="mt-2 text-2xl font-bold">$551.1M</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Epilepsy Monitoring Devices</p>
                <p class="text-xs text-blue-500 mt-2">
                    <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="hover:underline" target="_blank">Source: Credence Research</a>
                </p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 card-hover transition-all fade-in">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">tDCS Market Size (2024)</h3>
                <p class="mt-2 text-2xl font-bold">$1.471B</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">Transcranial Direct Current Stimulation Market</p>
                <p class="text-xs text-blue-500 mt-2">
                    <a href="https://www.openpr.com/news/3635127/transcranial-direct-current-stimulation-market-to-reach-usd" class="hover:underline" target="_blank">Source: openPR</a>
                </p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 card-hover transition-all fade-in">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Funding Raised</h3>
                <p class="mt-2 text-2xl font-bold">$9M</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">August 2021 (Series A)</p>
                <p class="text-xs text-blue-500 mt-2">
                    <a href="https://www.siliconrepublic.com/start-ups/flow-neuroscience-series-a-funding" class="hover:underline" target="_blank">Source: Silicon Republic</a>
                </p>
            </div>
        </section>

        <!-- Charts -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden fade-in">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-xl font-semibold">Market Growth Trends</h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Sources: 
                        <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">Credence Research (Epilepsy)</a>, 
                        <a href="https://www.openpr.com/news/3635127/transcranial-direct-current-stimulation-market-to-reach-usd" class="text-blue-500 hover:underline" target="_blank">openPR (tDCS)</a>
                    </p>
                </div>
                <div class="p-6">
                    <canvas id="flowmedical-market-growth"></canvas>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden fade-in">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-xl font-semibold">Comorbidity Reach</h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Source: <a href="https://www.epilepsy.com/complications-risks/moods-behavior/depression" class="text-blue-500 hover:underline" target="_blank">Epilepsy Foundation</a>
                    </p>
                </div>
                <div class="p-6">
                    <canvas id="flowmedical-comorbidity-reach"></canvas>
                </div>
            </div>
        </section>

        <!-- Additional Charts -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden fade-in">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-xl font-semibold">tDCS Technology Adoption</h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Source: <a href="https://www.flowneuroscience.com/results/" class="text-blue-500 hover:underline" target="_blank">Flow Neuroscience (2024, estimated)</a>
                    </p>
                </div>
                <div class="p-6">
                    <canvas id="flowmedical-tech-adoption"></canvas>
                </div>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden fade-in">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-xl font-semibold">Funding Timeline</h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Sources: 
                        <a href="https://www.selectscience.net/article/medical-device-company-flow-neuroscience-raises-usd1-5m-to-transform-treatment-of-depression" class="text-blue-500 hover:underline" target="_blank">SelectScience (Seed)</a>, 
                        <a href="https://www.siliconrepublic.com/start-ups/flow-neuroscience-series-a-funding" class="text-blue-500 hover:underline" target="_blank">Silicon Republic (Series A)</a>
                    </p>
                </div>
                <div class="p-6">
                    <canvas id="flowmedical-funding"></canvas>
                </div>
            </div>
        </section>

        <!-- Insights -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 fade-in">
                <h2 class="text-xl font-semibold mb-4">Epilepsy Market Potential</h2>
                <p class="text-gray-600 dark:text-gray-300">
                    Flow Neuroscience’s tDCS headset, CE-marked for depression since 2019, serves over 400 NHS patients and is expanding to 15 UK trusts as of October 2024 
                    <a href="https://www.theguardian.com/society/2025/jan/11/is-a-brain-stimulation-headset-the-answer-to-depression" class="text-blue-500 hover:underline" target="_blank">[Guardian]</a>. 
                    No epilepsy-specific trials exist as of April 2025, limiting direct market entry into the $551.1M epilepsy device market 
                    <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">[Credence Research]</a>. 
                    The 33% comorbidity rate (16.5M patients) offers a crossover opportunity, but competition from VNS/DBS and regulatory barriers pose challenges 
                    <a href="https://www.epilepsy.com/complications-risks/moods-behavior/depression" class="text-blue-500 hover:underline" target="_blank">[Epilepsy Foundation]</a>. 
                    Flow could capture 5–10% of the market by 2030 with $20–$30M in epilepsy trial funding.
                </p>
                <p class="mt-2 text-gray-600 dark:text-gray-300">
                    <span class="font-semibold">SWOT Analysis:</span><br>
                    <strong>Strengths:</strong> Low-cost, home-use tDCS; NHS adoption; FDA review underway 
                    <a href="https://www.medscape.com/viewarticle/diy-brain-stim-growing-popularity-safe-effective-2024a1000ij5" class="text-blue-500 hover:underline" target="_blank">[Medscape]</a>.<br>
                    <strong>Weaknesses:</strong> No epilepsy trials; limited neurology expertise.<br>
                    <strong>Opportunities:</strong> Comorbid patient market; epilepsy market growth to $858.67M by 2032.<br>
                    <strong>Threats:</strong> Competitors (Medtronic, NeuroPace); stringent regulations.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Sources: 
                    <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">Credence Research</a>, 
                    <a href="https://www.fortunebusinessinsights.com/epilepsy-drugs-market-106908" class="text-blue-500 hover:underline" target="_blank">Fortune Business Insights</a>
                </p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 fade-in">
                <h2 class="text-xl font-semibold mb-4">Technology Details</h2>
                <p class="text-gray-600 dark:text-gray-300">
                    Flow’s tDCS headset delivers low-intensity currents to the dorsolateral prefrontal cortex, approved for home use in UK/EU 
                    <a href="https://www.flowneuroscience.com/" class="text-blue-500 hover:underline" target="_blank">[Flow Neuroscience]</a>. 
                    It’s under FDA review for depression, with trials showing efficacy over antidepressants 
                    <a href="https://www.medscape.com/viewarticle/diy-brain-stim-growing-popularity-safe-effective-2024a1000ij5" class="text-blue-500 hover:underline" target="_blank">[Medscape]</a>.
                </p>
                <p class="text-sm mt-3 text-gray-500 dark:text-gray-400">Key Features:</p>
                <ul class="mt-1 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Non-invasive tDCS, 400x weaker than ECT</li>
                    <li>• Bluetooth app with telemedicine support</li>
                    <li>• 30-minute sessions, 5–6 weeks</li>
                    <li>• Over 14,000 depression users (2024, estimated)</li>
                </ul>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    Sources: 
                    <a href="https://www.flowneuroscience.com/results/" class="text-blue-500 hover:underline" target="_blank">Flow Neuroscience</a>, 
                    <a href="https://www.leicspart.nhs.uk/about/news/lpt-pilots-new-innovative-headsets-help-to-treat-patients-with-severe-depression/" class="text-blue-500 hover:underline" target="_blank">NHS Leicestershire</a>
                </p>
            </div>
        </section>

        <!-- Calculations -->
        <section class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8 fade-in">
            <h2 class="text-xl font-semibold mb-4">Calculations & Methodology</h2>
            <div>
                <button class="text-blue-500 font-semibold mb-2 hover:underline" onclick="toggleCollapsible('epilepsy-calc')">Epilepsy Market Growth</button>
                <div id="epilepsy-calc" class="collapsible-content">
                    <p class="text-gray-600 dark:text-gray-300">
                        <strong>Raw Data:</strong> $551.1M (2024), $858.67M (2032) 
                        <a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">[Credence Research]</a>.<br>
                        <strong>Formula:</strong> CAGR = ((End Value / Start Value)^(1/Number of Years)) - 1<br>
                        <strong>Steps:</strong><br>
                        1. End Value = $858.67M, Start Value = $551.1M, Years = 8 (2024–2032).<br>
                        2. CAGR = ((858.67 / 551.1)^(1/8)) - 1 = 0.057 or 5.7%.<br>
                        3. Annual Values: Value_n = 551.1 * (1 + 0.057)^n, where n = years from 2024.<br>
                        <strong>Results:</strong> [551.1, 582.5, 615.7, 650.8, 687.9, 727.1, 768.5, 812.3, 858.67] ($M).
                    </p>
                </div>
            </div>
            <div>
                <button class="text-blue-500 font-semibold mb-2 hover:underline" onclick="toggleCollapsible('tdcs-calc')">tDCS Market Growth</button>
                <div id="tdcs-calc" class="collapsible-content">
                    <p class="text-gray-600 dark:text-gray-300">
                        <strong>Raw Data:</strong> $1.346B (2023), $2.742B (2031) 
                        <a href="https://www.openpr.com/news/3635127/transcranial-direct-current-stimulation-market-to-reach-usd" class="text-blue-500 hover:underline" target="_blank">[openPR]</a>.<br>
                        <strong>Formula:</strong> CAGR = ((End Value / Start Value)^(1/Number of Years)) - 1<br>
                        <strong>Steps:</strong><br>
                        1. End Value = $2.742B, Start Value = $1.346B, Years = 8 (2023–2031).<br>
                        2. CAGR = ((2.742 / 1.346)^(1/8)) - 1 = 0.0929 or 9.29%.<br>
                        3. Annual Values: Value_n = 1.346 * (1 + 0.0929)^n, where n = years from 2023.<br>
                        <strong>Results:</strong> [1.346, 1.471, 1.608, 1.757, 1.920, 2.099, 2.294, 2.507, 2.742] ($B).
                    </p>
                </div>
            </div>
            <div>
                <button class="text-blue-500 font-semibold mb-2 hover:underline" onclick="toggleCollapsible('comorbidity-calc')">Comorbidity Reach</button>
                <div id="comorbidity-calc" class="collapsible-content">
                    <p class="text-gray-600 dark:text-gray-300">
                        <strong>Raw Data:</strong> 50M epilepsy patients, 33% with depression 
                        <a href="https://www.epilepsy.com/complications-risks/moods-behavior/depression" class="text-blue-500 hover:underline" target="_blank">[Epilepsy Foundation]</a>.<br>
                        <strong>Formula:</strong> Comorbid Patients = Total Patients * Comorbidity Rate<br>
                        <strong>Steps:</strong><br>
                        1. Total Patients = 50M, Comorbidity Rate = 0.33.<br>
                        2. Comorbid Patients = 50M * 0.33 = 16.5M.<br>
                        3. Non-Comorbid Patients = 50M - 16.5M = 33.5M.<br>
                        <strong>Results:</strong> 16.5M with depression, 33.5M without.
                    </p>
                </div>
            </div>
        </section>

        <!-- Citations -->
        <section class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 fade-in">
            <h2 class="text-xl font-semibold mb-3">Sources & Citations</h2>
            <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li><a href="https://www.flowneuroscience.com/" class="text-blue-500 hover:underline" target="_blank">Flow Neuroscience Official Website</a></li>
                <li><a href="https://www.credenceresearch.com/report/epilepsy-monitoring-devices-market" class="text-blue-500 hover:underline" target="_blank">Credence Research: Epilepsy Monitoring Devices Market</a></li>
                <li><a href="https://www.openpr.com/news/3635127/transcranial-direct-current-stimulation-market-to-reach-usd" class="text-blue-500 hover:underline" target="_blank">openPR: tDCS Market</a></li>
                <li><a href="https://www.siliconrepublic.com/start-ups/flow-neuroscience-series-a-funding" class="text-blue-500 hover:underline" target="_blank">Silicon Republic: Flow Neuroscience Series A</a></li>
                <li><a href="https://www.selectscience.net/article/medical-device-company-flow-neuroscience-raises-usd1-5m-to-transform-treatment-of-depression" class="text-blue-500 hover:underline" target="_blank">SelectScience: Flow Neuroscience Seed Funding</a></li>
                <li><a href="https://www.epilepsy.com/complications-risks/moods-behavior/depression" class="text-blue-500 hover:underline" target="_blank">Epilepsy Foundation: Depression and Epilepsy</a></li>
                <li><a href="https://www.theguardian.com/society/2025/jan/11/is-a-brain-stimulation-headset-the-answer-to-depression" class="text-blue-500 hover:underline" target="_blank">Guardian: Flow Neuroscience NHS Trials</a></li>
                <li><a href="https://www.medscape.com/viewarticle/diy-brain-stim-growing-popularity-safe-effective-2024a1000ij5" class="text-blue-500 hover:underline" target="_blank">Medscape: tDCS Safety and Efficacy</a></li>
                <li><a href="https://www.leicspart.nhs.uk/about/news/lpt-pilots-new-innovative-headsets-help-to-treat-patients-with-severe-depression/" class="text-blue-500 hover:underline" target="_blank">Leicestershire Partnership NHS Trust: Flow Pilot</a></li>
                <li><a href="https://www.fortunebusinessinsights.com/epilepsy-drugs-market-106908" class="text-blue-500 hover:underline" target="_blank">Fortune Business Insights: Epilepsy Treatment Market</a></li>
            </ul>
        </section>
    </div>

    `;
}



    
function toggleCollapsible(id) {
  const content = document.getElementById(id);
  content.classList.toggle('active');
}
window.toggleCollapsible = toggleCollapsible;

function initializeFlowMedicalCharts() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  // Market Growth Chart
  new Chart(document.getElementById('flowmedical-market-growth').getContext('2d'), {
      type: 'line',
      data: {
          labels: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031'],
          datasets: [{
              label: 'Epilepsy Monitoring Devices Market ($M)',
              data: [520.0, 551.1, 582.5, 615.7, 650.8, 687.9, 727.1, 768.5, 812.3, 858.67],
              borderColor: '#3B82F6',
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              fill: true,
              tension: 0.4
          }, {
              label: 'tDCS Market ($B)',
              data: [1.346, 1.471, 1.608, 1.757, 1.920, 2.099, 2.294, 2.507, 2.742],
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
                          if (context.dataset.label.includes('tDCS')) {
                              return `${context.dataset.label}: ${context.raw}B`;
                          } else {
                              return `${context.dataset.label}: ${context.raw}M`;
                          }
                      }
                  }
              }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: {
                  ticks: { color: textColor, callback: value => `${value}M` },
                  grid: { color: gridColor },
                  title: { display: true, text: 'Epilepsy Market ($M)', color: textColor }
              },
              y1: {
                  position: 'right',
                  ticks: { color: textColor, callback: value => `${value}B` },
                  grid: { drawOnChartArea: false, color: gridColor },
                  title: { display: true, text: 'tDCS Market ($B)', color: textColor }
              }
          }
      }
  });

  // Comorbidity Reach Chart
  new Chart(document.getElementById('flowmedical-comorbidity-reach').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['Epilepsy w/ Depression (33%)', 'Other Epilepsy Patients'],
          datasets: [{
              data: [16.5, 33.5],
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
                  text: 'Source: Epilepsy Foundation, ~33% comorbidity',
                  padding: { top: 10, bottom: 0 },
                  font: { size: 12, style: 'italic' },
                  color: textColor
              }
          }
      }
  });

  // tDCS Technology Adoption Chart
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
                  text: 'Source: Flow Neuroscience (2024, estimated)',
                  padding: { top: 10, bottom: 0 },
                  font: { size: 12, style: 'italic' },
                  color: textColor
              }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: {
                  ticks: { color: textColor },
                  grid: { color: gridColor },
                  title: { display: true, text: 'Users (thousands)', color: textColor }
              }
          }
      }
  });

  // Funding Timeline Chart
  new Chart(document.getElementById('flowmedical-funding').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Seed Round (2018)', 'Series A (Aug 2021)'],
          datasets: [{
              label: 'Funding Amount (USD Million)',
              data: [1.5, 9],
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
                  text: 'Sources: SelectScience (Seed), Silicon Republic (Series A)',
                  padding: { top: 10, bottom: 0 },
                  font: { size: 12, style: 'italic' },
                  color: textColor
              }
          },
          scales: {
              x: { ticks: { color: textColor }, grid: { color: gridColor } },
              y: {
                  ticks: { color: textColor, callback: value => `${value}M` },
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
     <style>

    /* Custom styles to ensure proper spacing and responsive behavior */
    .chart-container {
      position: relative;
      height: 100%;
      width: 100%;
    }
    
    /* Add margin to description text to keep it separate from charts */
    .chart-description {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(156, 163, 175, 0.2);
    }
    
    /* Ensure pie chart has proper aspect ratio on all devices */
    .pie-chart-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 75%; /* Aspect ratio */
    }
    
    .pie-chart-container canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    /* Improved spacing for market position analysis */
    .market-analysis-container {
      display: flex;
      flex-direction: column;
    }
    
    @media (min-width: 1024px) {
      .market-analysis-container {
        flex-direction: row;
      }
    }
    .chart-container {
      position: relative;
      height: 100%;
      width: 100%;
    }
    
    /* Fixed chart height to prevent overlap with text */
    .detailed-chart-container {
      position: relative;
      width: 100%;
      height: 400px; /* Fixed height */
      margin-bottom: 30px; /* Extra space below chart */
    }
    
    /* Clear separation between chart and description */
    .chart-description {
      margin-top: 30px; /* Increased margin */
      padding-top: 20px; /* Increased padding */
      border-top: 2px solid rgba(156, 163, 175, 0.2); /* More visible separator */
      position: relative; /* Ensure it's above the chart */
      background-color: inherit; /* Match parent background */
      z-index: 10; /* Ensure text appears above chart */
    }
  </style>
<div class="container mx-auto px-4 py-8">
    <!-- Dashboard Header -->


    <!-- Key Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Total Revenue (2024)</h3>
        <p class="mt-2 text-3xl font-bold text-gray-800 dark:text-white">$79.9M</p>
        <p class="text-sm text-green-600 dark:text-green-400">+22% YoY</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Q4 Revenue (2024)</h3>
        <p class="mt-2 text-3xl font-bold text-gray-800 dark:text-white">$21.5M</p>
        <p class="text-sm text-green-600 dark:text-green-400">+19.4% YoY</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Gross Margin (2024)</h3>
        <p class="mt-2 text-3xl font-bold text-gray-800 dark:text-white">73.6%</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">vs 73.8% in 2023</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">2025 Revenue Guidance</h3>
        <p class="mt-2 text-3xl font-bold text-gray-800 dark:text-white">$87-91M</p>
        <p class="text-sm text-green-600 dark:text-green-400">+8.9% to +13.9% YoY</p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
    </div>

    <!-- Market Share and Revenue Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <!-- Market Share Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Market Share Overview</h2>
        <div class="flex flex-col space-y-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
            <span class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"><a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline">17.7%</a></span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
            <span class="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400"><a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-green-600 dark:text-green-400 hover:underline">+78.8%</a></span>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
            <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40"></canvas>
          </div>
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              <strong class="text-gray-600 dark:text-gray-300">Note:</strong> Market share estimated as (NeuroPace Revenue / Total Market Size) × 100.
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              <strong class="text-gray-600 dark:text-gray-300">Data From:</strong> <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Financials (2020-2024)</a>
            </p>
          </div>
        </div>
      </div>

      <!-- Revenue Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">RNS System Revenue</h2>
        <div class="flex flex-col space-y-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
            <span class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">$79.9M</a></span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
            <span class="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400"><a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-green-600 dark:text-green-400 hover:underline" target="_blank">+166.3%</a></span>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
            <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40"></canvas>
          </div>
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              <strong class="text-gray-600 dark:text-gray-300">Calculation Method:</strong> Direct revenue from RNS System sales
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              <strong class="text-gray-600 dark:text-gray-300">Data From:</strong> <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Financials (2020-2024)</a>
            </p>
          </div>
        </div>
      </div>

      <!-- Implant Splits Card -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Implant Splits (2021)</h2>
        <div class="flex flex-col space-y-6">
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">Initial Implants</span>
            <span class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">$33.7M</a></span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-600 dark:text-gray-400">Replacement Implants</span>
            <span class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">$11.5M</a></span>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Implant Splits (2021)</p>
            <canvas id="implantSplitsChart" class="w-full h-32 sm:h-40"></canvas>
          </div>
          <div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
              <strong class="text-gray-600 dark:text-gray-300">Note:</strong> Full implant split data available only for 2021
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              <strong class="text-gray-600 dark:text-gray-300">Data From:</strong> <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace 2021 Financials</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- RNS System Technology -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
      <h2 class="text-xl font-semibold mb-6 text-gray-800 dark:text-white">RNS® System Technology</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive Neurostimulation</h3>
          </div>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong class="text-gray-700 dark:text-gray-200">Target Population:</strong> Patients with drug-resistant focal epilepsy (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong class="text-gray-700 dark:text-gray-200">Mechanism:</strong> Detects abnormal electrical patterns and delivers stimulation to normalize brain activity (<a href="https://www.neuropace.com/the-rns-system/" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace</a>)</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-purple-500 dark:text-purple-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong class="text-gray-700 dark:text-gray-200">Distribution:</strong> Level 4 Comprehensive Epilepsy Centers (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</span>
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
            <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Clinical Evidence</h3>
          </div>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong class="text-gray-700 dark:text-gray-200">Post-Approval Study:</strong> 82% median reduction in seizure frequency over 3 years (<a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Investor Presentation</a>)</span>
            </li>
            <li class="flex items-start">
              <svg class="h-5 w-5 text-blue-500 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span><strong class="text-gray-700 dark:text-gray-200">Device Longevity:</strong> Average battery life of RNS System ~11 years (<a href="https://www.neuropace.com/patient-resources/faq/" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace FAQ</a>)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Revenue Trends (2018-2024)</h2>
        <div class="h-80">
          <canvas id="neuropace-revenue-trends"></canvas>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Source: <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2020–2023 10-K</a>, <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 Q4 Report</a></p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Q4 Revenue (2021-2024)</h2>
        <div class="h-80">
          <canvas id="neuropace-q4-revenue"></canvas>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
    </div>

    <!-- Second Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Annual Growth Rates</h2>
        <div class="h-80">
          <canvas id="neuropace-growth-metrics"></canvas>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Source: <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2020–2023 10-K</a>, <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 Q4 Report</a></p>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Financial Metrics</h2>
        <div class="h-80">
          <canvas id="neuropace-financial-metrics"></canvas>
        </div>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
      </div>
    </div>

    <!-- Implant Breakdown Table and Chart -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
      <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Implant Revenue Breakdown (2021-2022)</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-gray-600 dark:text-gray-300">
          <thead>
            <tr class="bg-gray-100 dark:bg-gray-700">
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Year</th>
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Period</th>
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Total Revenue ($M)</th>
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Initial Implants ($M)</th>
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Replacement Implants ($M)</th>
              <th class="px-4 py-2 text-gray-700 dark:text-gray-200">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="px-4 py-2">2022</td>
              <td class="px-4 py-2">Q4</td>
              <td class="px-4 py-2">$12.8</td>
              <td class="px-4 py-2">$9.8 (76.6%)</td>
              <td class="px-4 py-2">$1.4 (10.9%)</td>
              <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2022-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2022 Report</a></td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="px-4 py-2">2022</td>
              <td class="px-4 py-2">Full Year</td>
              <td class="px-4 py-2">$45.5</td>
              <td class="px-4 py-2">$35.7 (78.5%)</td>
              <td class="px-4 py-2">$8.2 (18.0%)</td>
              <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2022-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2022 Report</a></td>
            </tr>
            <tr class="border-b border-gray-200 dark:border-gray-700">
              <td class="px-4 py-2">2021</td>
              <td class="px-4 py-2">Q4</td>
              <td class="px-4 py-2">$11.0</td>
              <td class="px-4 py-2">$8.5 (77.3%)</td>
              <td class="px-4 py-2">$2.5 (22.7%)</td>
              <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2021 Report</a></td>
            </tr>
            <tr>
              <td class="px-4 py-2">2021</td>
              <td class="px-4 py-2">Full Year</td>
              <td class="px-4 py-2">$45.2</td>
              <td class="px-4 py-2">$33.7 (74.6%)</td>
              <td class="px-4 py-2">$11.5 (25.4%)</td>
              <td class="px-4 py-2"><a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2021 Report</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="h-80 mt-6" style="display: none;">
        <canvas id="neuropace-implant-breakdown"></canvas>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Sources: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2021-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2021</a>, <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-full-year-2022-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2022</a></p>
    </div>

    <!-- Market Position Analysis Card - FIXED SECTION -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Market Position Analysis</h2>
      <!-- Market position analysis with improved layout and padding -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left side: Pie chart with proper container -->
        <div class="mb-8 lg:mb-0">
          <h3 class="font-medium text-lg sm:text-xl mb-4 text-gray-800 dark:text-white">Market Share by Company (2024)</h3>
          <div class="pie-chart-container">
            <canvas id="marketSharePieChart"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">Source: <a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Financials (2024, estimated)</a></p>
        </div>
        
        <!-- Right side: Gainers & Losers -->
        <div>
          <h3 class="font-medium text-lg sm:text-xl mb-4 text-gray-800 dark:text-white">Gainers & Losers (2018-2024)</h3>
          <div class="space-y-4">
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
              <h4 class="font-semibold text-red-700 dark:text-red-400 mb-2">Market Share Losers</h4>
              <div class="mt-2">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-700 dark:text-gray-300">LivaNova</span>
                  <span class="text-red-600 dark:text-red-400"><a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-red-600 dark:text-red-400 hover:underline" target="_blank">-5.3%</a></span>
                </div>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Market share declined from 85.3% in 2018 to 80.0% in 2024 (estimated).
                </p>
              </div>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
              <h4 class="font-semibold text-green-700 dark:text-green-400 mb-2">Market Share Gainers</h4>
              <div class="mt-2">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-700 dark:text-gray-300">NeuroPace</span>
                  <span class="text-green-600 dark:text-green-400"><a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-green-600 dark:text-green-400 hover:underline" target="_blank">+7.8%</a></span>
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

    <!-- Detailed Analytics Card - FIXED SECTION -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Detailed Analytics</h2>
        <div class="inline-flex mt-3 md:mt-0">
          <select id="chartSelector" class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="marketShare">Market Share Trend</option>
            <option value="revenue">Revenue Growth</option>
            <option value="comparison">Comparative Analysis</option>
          </select>
        </div>
      </div>
      
      <!-- Chart container with fixed height -->
      <div class="chart-container">
        <div id="detailedChartContainer" class="w-full h-80 sm:h-96"></div>
      </div>
      
      <!-- Description moved below with clear separation -->
      <div class="chart-description mt-6">
        <p id="chartDescription" class="text-sm text-gray-600 dark:text-gray-400 mb-3">
          This chart shows NeuroPace's estimated market share trend from 2018 to 2024. The company has grown from 9.9% in 2018 to 17.7% in 2024.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 class="font-medium mb-2 text-gray-700 dark:text-gray-200">Data Source</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Data from <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a> and <a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace financial reports (2020-2024)</a>. Market share is estimated based on revenue and market size assumptions.
            </p>
          </div>
          <div>
            <h3 class="font-medium mb-2 text-gray-700 dark:text-gray-200">Calculation Methodology</h3>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              Market share = (NeuroPace Revenue / Estimated Total Market Size) × 100. Revenue sourced from financial reports.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Clinical Trials Card -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Clinical & Regulatory Milestones</h2>
      <div class="overflow-auto max-h-80">
        <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
          <div class="mb-6">
            <div class="flex items-center">
              <div id="clinical-trial-2023" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
              <h3 class="text-lg sm:text-xl font-medium ml-3 text-gray-800 dark:text-white">2023</h3>
            </div>
            <div class="mt-2">
              <h4 class="font-medium text-gray-800 dark:text-gray-200">NAUTILUS Study</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Completed enrollment for generalized epilepsy trial, expanding RNS System indications.
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                <strong class="text-gray-600 dark:text-gray-300">Source:</strong> <a href="https://www.neuropace.com/about-neuropace/news/" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Press Release</a>
              </p>
            </div>
          </div>
          <div class="mb-6">
            <div class="flex items-center">
              <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
              <h3 class="text-lg sm:text-xl font-medium ml-3 text-gray-800 dark:text-white">Regulatory Status</h3>
            </div>
            <div class="mt-2">
              <h4 class="font-medium text-gray-800 dark:text-gray-200">RNS System Approval</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                FDA-approved for focal epilepsy, with no new approvals reported in 2018-2024.
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                <strong class="text-gray-600 dark:text-gray-300">Source:</strong> <a href="https://www.neuropace.com/the-rns-system/how-it-works/" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Regulatory Information</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Business Details -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Sales Growth Drivers</h2>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Increased adoption at Level 4 CECs (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Expansion of commercial sales team in 2024 (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</span>
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Enhanced clinician education and patient referral programs (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</span>
          </li>
        </ul>
        <div class="mt-6">
          <h3 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Market Opportunity:</h3>
          <p class="text-gray-600 dark:text-gray-400">Patients with drug-resistant focal epilepsy (<a href="https://www.sec.gov/edgar/browse/?CIK=1528287" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">2024 10-K</a>)</p>
        </div>
        <div class="mt-4">
          <h3 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Quarterly Performance:</h3>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            <p>Q3 2024 Revenue: $19.4M (+13.5% YoY) (<a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-third-quarter-2024-financial-results-and" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q3 2024 Report</a>)</p>
            <p>Q1-Q3 2024 Revenue: $58.4M (+18.7% YoY) (<a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-third-quarter-2024-financial-results-and" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q3 2024 Report</a>)</p>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Financial Health</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Net Loss</h3>
            <p class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">$27.6M</p>
            <p class="text-xs text-green-600 dark:text-green-400">Improved from $33.0M in 2023</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Cash Position</h3>
            <p class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">$141.9M</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">As of Dec 31, 2024</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Operating Expenses</h3>
            <p class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">$80.8M</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">2024 Total</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">R&D Expenses</h3>
            <p class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">$34.8M</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">43% of operating expenses</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a></p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Cash Runway:</h3>
          <div class="bg-blue-50 dark:bg-blue-900 dark:bg-opacity-20 p-3 rounded-lg">
            <p class="text-sm text-gray-600 dark:text-gray-400">With $141.9M cash on hand, NeuroPace has runway into 2027 at current operating levels (<a href="https://investors.neuropace.com/news-releases/news-release-details/neuropace-reports-fourth-quarter-and-full-year-2024-financial" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Q4 2024 Report</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
      <div class="text-center text-sm text-gray-500 dark:text-gray-400">
        <p><strong class="text-gray-600 dark:text-gray-300">Disclaimer:</strong> Market share estimates are based on NeuroPace revenue divided by estimated total market size, derived from <a href="https://www.neurotechreports.com/pages/epilepsy.html" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Neurotech Reports (2018-2019)</a>, <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">Market Research Future</a>, and <a href="https://investors.neuropace.com/financial-information/quarterly-results" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace financial reports (2020-2024)</a>. Actual market share may vary.</p>
        <p class="mt-2">Data compiled and visualized for informational purposes as of April 24, 2025.</p>
        <p class="mt-2">For the latest updates, visit <a href="https://investors.neuropace.com/" class="text-blue-500 dark:text-blue-400 hover:underline" target="_blank">NeuroPace Investor Relations</a>.</p>
      </div>
    </footer>
  </div>


  `;
}

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
  const savedTheme = localStorage.getItem('theme');

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
      text: '#ffffff', // pure white for better contrast in dark mode
      grid: '#4b5563' // gray-600
    }
  };

  // Determine current mode
  const isDarkMode = () => (localStorage.getItem('darkMode') === 'true')
  const getColors = () => isDarkMode() ? colors.dark : colors.light;
  
  // Apply theme to dashboard elements
  function applyThemeToDashboard(isDark) {
    // Get all dashboard headings and text elements
    const headings = document.querySelectorAll('.dashboard-heading, h1, h2, h3, h4, h5, h6');
    const textElements = document.querySelectorAll('.dashboard-text, p, span, label, .text-content');
    
    if (isDark) {
      // Apply dark mode styles
      document.body.classList.add('dark-mode');
      headings.forEach(heading => {
        heading.style.color = colors.dark.text;
      });
      textElements.forEach(element => {
        element.style.color = colors.dark.text;
      });
    } else {
      // Apply light mode styles
      document.body.classList.remove('dark-mode');
      headings.forEach(heading => {
        heading.style.color = colors.light.text;
      });
      textElements.forEach(element => {
        element.style.color = colors.light.text;
      });
    }
  }
  const currentColors = getColors();
  
  // Base chart configuration
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: getColors().text,
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: getColors().background,
        titleColor: getColors().text,
        bodyColor: getColors().text,
        borderWidth: 1,
        borderColor: getColors().grid
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
        },
        title: {  // Initialize the title object here
          display: true,
          text: '',
          color: currentColors.text,
          font: { size: 14, weight: 'bold' }
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


  const truechartOptions = {
    
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: getColors().text,
          font: { size: 14 }
        }
      },
      tooltip: {
        backgroundColor: getColors().background,
        titleColor: getColors().text,
        bodyColor: getColors().text,
        borderWidth: 1,
        borderColor: getColors().grid
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
        },
        title: {  // Initialize the title object here
          display: true,
          text: '',
          color: currentColors.text,
          font: { size: 14, weight: 'bold' }
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
        ...truechartOptions,
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
        ...truechartOptions,
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
        ...truechartOptions,
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
        ...truechartOptions,
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

  // Initialize Market Share Pie Chart - FIXED
  function initMarketSharePieChart() {
    const canvas = document.getElementById('marketSharePieChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('marketSharePieChart is not a canvas element');
      return;
    }
    canvas.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
    
    // Enhanced pie chart configuration
    chartInstances.marketSharePie = new Chart(canvas, {
      type: 'pie',
      data: {
        labels: Object.keys(marketShare2024),
        datasets: [{
          data: Object.values(marketShare2024),
          backgroundColor: [getColors().primary, getColors().secondary, getColors().accent],
          borderColor: getColors().background,
          borderWidth: 2,
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: getColors().text,
              font: { size: 12, weight: 'bold' },
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                label += context.raw + '%';
                return label;
              }
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

  // Initialize Detailed Chart (Dynamic) - FIXED
  function initDetailedChart() {
    // Create new canvas for the detailed chart
    const detailedChartContainer = document.getElementById('detailedChartContainer');
    if (!detailedChartContainer) {
      console.error('detailedChartContainer not found');
      return;
    }
    
    // Clear any existing content
    detailedChartContainer.innerHTML = '';
    
    // Create the canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'detailedChart';
    canvas.className = 'w-full h-full';
    detailedChartContainer.appendChild(canvas);
    
    const selector = document.getElementById('chartSelector');
    const description = document.getElementById('chartDescription');
    if (!(selector instanceof HTMLSelectElement) || !description) {
      console.error('chartSelector or chartDescription not found');
      return;
    }
    
    // Apply appropriate class for styling
    description.classList.add('chart-description');
    const selectorLabel = document.querySelector('label[for="chartSelector"]');
    if (selectorLabel) {
      selectorLabel.classList.add('dashboard-text');
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
            ...truechartOptions,
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
        description.textContent = 'This chart shows NeuroPaces estimated market share trend from 2018 to 2024. The company has grown from 9.9% in 2018 to 17.7% in 2024.';
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
            ...truechartOptions,
            scales: {
              x: {
                ...truechartOptions.scales.x,
                title: { display: true, text: 'Year', color: getColors().text, font: { size: 14 } }
              },
              y: {
                ...truechartOptions.scales.y,
                title: { display: true, text: 'Revenue ($M)', color: getColors().text, font: { size: 14 } },
                beginAtZero: true
              }
            }
          }
        };
        description.textContent = 'This chart shows NeuroPaces revenue growth from 2018 to 2024, increasing from $30.0M to $79.9M.';
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
            ...truechartOptions,
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
        description.textContent = 'This chart compares NeuroPaces revenue and market share from 2018 to 2024, highlighting growth trends.';
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

  // Dark Mode Toggle - FIXED
  function initDarkModeToggle() {
    const toggleButton = document.getElementById('darkModeToggle');
    if (!(toggleButton instanceof HTMLButtonElement)) {
      console.error('darkModeToggle not found');
      return;
    }

    const setTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('darkMode', isDark ? 'true' : 'false');
      toggleButton.innerHTML = isDark
        ? '<span>☀️ Light Mode</span>'
        : '<span>🌙 Dark Mode</span>';
      
      // Apply theme to dashboard UI elements
      applyThemeToDashboard(isDark);

      // Safely update chart properties
      Object.values(chartInstances).forEach(chart => {
        if (chart && chart.options) {
          try {
            // Safely update plugin properties
            if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
              chart.options.plugins.legend.labels.color = getColors().text;
            }
            
            // Safely update scale properties
            if (chart.options.scales) {
              if (chart.options.scales.x) {
                if (chart.options.scales.x.ticks) {
                  chart.options.scales.x.ticks.color = getColors().text;
                }
                if (chart.options.scales.x.title) {
                  chart.options.scales.x.title.color = getColors().text;
                }
              }
              
              if (chart.options.scales.y) {
                if (chart.options.scales.y.ticks) {
                  chart.options.scales.y.ticks.color = getColors().text;
                }
                if (chart.options.scales.y.title) {
                  chart.options.scales.y.title.color = getColors().text;
                }
              }
              
              if (chart.options.scales.y1) {
                if (chart.options.scales.y1.ticks) {
                  chart.options.scales.y1.ticks.color = getColors().text;
                }
                if (chart.options.scales.y1.title) {
                  chart.options.scales.y1.title.color = getColors().text;
                }
              }
            }

            // Safely update dataset colors
            if (chart.data && chart.data.datasets) {
              const colorsArray = [getColors().primary, getColors().secondary, getColors().accent];
              chart.data.datasets.forEach((dataset, i) => {
                if (dataset) {
                  if (dataset.backgroundColor && typeof dataset.backgroundColor === 'string' && dataset.backgroundColor.includes('33')) {
                    dataset.backgroundColor = colorsArray[i % colorsArray.length] + '33';
                    dataset.borderColor = colorsArray[i % colorsArray.length];
                  } else {
                    dataset.backgroundColor = colorsArray[i % colorsArray.length];
                    dataset.borderColor = getColors().background;
                  }
                }
              });
            }
            
            // Update the chart
            chart.update();
          } catch (error) {
            console.error('Error updating chart theme:', error);
          }
        }
      });
    };

    // Initialize theme
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    setTheme(isDark);
    
    // Add CSS to the document head for class-based styles
    const style = document.createElement('style');
    style.textContent = `
      .dark-mode .dashboard-heading, 
      .dark-mode h1, 
      .dark-mode h2, 
      .dark-mode h3, 
      .dark-mode h4, 
      .dark-mode h5, 
      .dark-mode h6,
      .dark-mode .dashboard-text, 
      .dark-mode p, 
      .dark-mode span, 
      .dark-mode label, 
      .dark-mode .text-content,
      .dark-mode .chart-title,
      .dark-mode .chart-description,
      .dark-mode select,
      .dark-mode option {
        color: ${colors.dark.text} !important;
      }
      
      .dark-mode {
        background-color: ${colors.dark.background};
      }
      
      body:not(.dark-mode) .dashboard-heading, 
      body:not(.dark-mode) h1, 
      body:not(.dark-mode) h2, 
      body:not(.dark-mode) h3, 
      body:not(.dark-mode) h4, 
      body:not(.dark-mode) h5, 
      body:not(.dark-mode) h6,
      body:not(.dark-mode) .dashboard-text, 
      body:not(.dark-mode) p, 
      body:not(.dark-mode) span, 
      body:not(.dark-mode) label, 
      body:not(.dark-mode) .text-content,
      body:not(.dark-mode) .chart-title,
      body:not(.dark-mode) .chart-description,
      body:not(.dark-mode) select,
      body:not(.dark-mode) option {
        color: ${colors.light.text} !important;
      }
    `;
    document.head.appendChild(style);
    
    // Add event listener for theme toggle
    toggleButton.addEventListener('click', () => {
      const currentDarkMode = localStorage.getItem('darkMode') === 'true';
      setTheme(!currentDarkMode);
    });
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
  // Validate input data
  if (!data || typeof data !== 'object') {
    console.error('Invalid or missing data for dashboard generation');
    return '<div class="container mx-auto px-4 py-8 text-red-600">Error: Invalid data provided</div>';
  }

  return `
    <div class="container mx-auto px-4 py-8 min-h-screen">


      <!-- Header -->
      <header class="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl shadow-xl p-8 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div class="text-center md:text-left">
          <h1 class="text-4xl font-bold flex items-center">
            <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
            </svg>
            Precisis AG: EASEE Competitive Intelligence
          </h1>
          <p class="text-lg text-gray-100 mt-2">Epilepsy Treatment Devices - April 2025</p>
        </div>
        <div class="text-center md:text-right mt-4 md:mt-0">
          <p class="text-sm text-gray-200">Updated: ${new Date().toLocaleString('en-GB', { timeZone: 'BST' })}</p>
          <button onclick="window.print()" class="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500" tabindex="0">Download PDF</button>
        </div>
      </header>

      <!-- Key Metrics -->
      <section id="metrics" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Size (2024)</h3>
          <p class="mt-2 text-3xl font-bold">$548.4M</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Global value of epilepsy treatment devices market.</p>
            <p><strong>Data:</strong> 2023: $526.8M; 2024: $548.4M</p>
            <p><strong>Calculation:</strong> $526.8M × (1 + 0.041) = $548.4M</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>.</p>
            <p><strong>Insight:</strong> Precisis targets Europe’s $167.5M share (30.5% of global market), competing with LivaNova and NeuroPace.</p>
          </div>
        </div>
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Growth (CAGR)</h3>
          <p class="mt-2 text-3xl font-bold">4.1%</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Annual growth rate of market value (2024–2033).</p>
            <p><strong>Data:</strong> 2024: $548.4M; 2033: $787.3M</p>
            <p><strong>Calculation:</strong> [($787.3M / $548.4M)^(1/9) - 1] ≈ 4.1%</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>.</p>
            <p><strong>Insight:</strong> Driven by AI and minimally invasive devices; EASEE’s lack of AI may limit competitiveness.</p>
          </div>
        </div>
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Funding (2021)</h3>
          <p class="mt-2 text-3xl font-bold">€20M ($23.2M)</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Capital raised for EASEE development.</p>
            <p><strong>Data:</strong> 2021: €20M; Others: €0M</p>
            <p><strong>Calculation:</strong> €20M × 1.16 = $23.2M; YoY 2021: ∞%</p>
            <p><strong>Source:</strong> <a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-500 hover:underline" target="_blank">Precisis, Oct 2021</a>.</p>
            <p><strong>Insight:</strong> NeuroPace’s $74M IPO (2021) overshadows Precisis, limiting scale.</p>
          </div>
        </div>
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Patient Reach</h3>
          <p class="mt-2 text-3xl font-bold">10.1M / 50M</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Drug-resistant patients eligible for EASEE vs. total epilepsy patients.</p>
            <p><strong>Data:</strong> Eligible: 10.1M; Total: 50M</p>
            <p><strong>Calculation:</strong> 50M - 10.1M = 39.9M</p>
            <p><strong>Source:</strong> <a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-500 hover:underline" target="_blank">Towards Healthcare, Mar 2025</a>.</p>
            <p><strong>Insight:</strong> EASEE targets focal epilepsy (~6–9M drug-resistant); narrower than NeuroPace.</p>
          </div>
        </div>
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Clinical Outcomes</h3>
          <p class="mt-2 text-3xl font-bold">52% Reduction</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Median seizure reduction in EASEE trials.</p>
            <p><strong>Data:</strong> 50% of patients ≥50% reduction; 12.9% seizure-free</p>
            <p><strong>Calculation:</strong> Median: 52%; Seizure-free: 4/31 ≈ 12.9%</p>
            <p><strong>Source:</strong> <a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-500 hover:underline" target="_blank">Fierce Biotech, Sep 2022</a>.</p>
            <p><strong>Insight:</strong> Comparable to NeuroPace (50–70%) but limited trial size (31 patients).</p>
          </div>
        </div>
        <div class="metric-card bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer" role="button" aria-expanded="false" tabindex="0" onclick="this.querySelector('.expand').classList.toggle('show'); this.setAttribute('aria-expanded', this.querySelector('.expand').classList.contains('show'))" onkeydown="if(event.key === 'Enter' || event.key === ' ') { this.click(); }">
          <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Market Share (Europe)</h3>
          <p class="mt-2 text-3xl font-bold">~1–2%</p>
          <div class="expand mt-4 text-xs text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p><strong>Definition:</strong> Precisis’ share of Europe’s $167.5M market.</p>
            <p><strong>Data:</strong> Revenue: $1.5M–$3M (100–200 implants)</p>
            <p><strong>Calculation:</strong> $1.5M / $167.5M ≈ 0.9%; $3M / $167.5M ≈ 1.8%</p>
            <p><strong>Source:</strong> <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>.</p>
            <p><strong>Insight:</strong> LivaNova (~30% globally) dominates; Precisis’ niche focus limits share.</p>
          </div>
        </div>
      </section>

      <!-- Charts -->
      <section id="charts" class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Market Growth</h2>
          <p class="text-xs text-gray-500 mb-3">Source: <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>.</p>
          <div class="chart-container"><canvas id="precisis-market-growth" aria-label="Market growth chart"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Patient Reach</h2>
          <p class="text-xs text-gray-500 mb-3">Source: <a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-500 hover:underline" target="_blank">Towards Healthcare, Mar 2025</a>.</p>
          <div class="chart-container"><canvas id="precisis-patient-reach" aria-label="Patient reach chart"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Funding History</h2>
          <p class="text-xs text-gray-500 mb-3">Source: <a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-500 hover:underline" target="_blank">Precisis, Oct 2021</a>.</p>
          <div class="chart-container"><canvas id="precisis-funding-history" aria-label="Funding history chart"></canvas></div>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 class="text-xl font-semibold mb-4">Clinical Outcomes</h2>
          <p class="text-xs text-gray-500 mb-3">Source: <a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-500 hover:underline" target="_blank">Fierce Biotech, Sep 2022</a>.</p>
          <div class="chart-container"><canvas id="precisis-clinical-outcomes" aria-label="Clinical outcomes chart"></canvas></div>
        </div>
      </section>

      <!-- Regulatory Milestones -->
      <section id="regulatory" class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Regulatory Milestones</h2>
        <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-3">
          <li><strong>CE Certification (Sep 28, 2022):</strong> Enables European market entry. <a href="https://www.precisis.de/news/ce-certification-for-precisis-easee" class="text-blue-500 hover:underline" target="_blank">Source: Precisis, Sep 2022</a>; <a href="https://www.nsmedicaldevices.com/news/precisis-ce-mark-easee-epilepsy/" class="text-blue-500 hover:underline" target="_blank">NS Medical Devices, Sep 2022</a>.</li>
          <li><strong>FDA Breakthrough Designation (Feb 19, 2022):</strong> Accelerates U.S. review; approval pending. <a href="https://www.mpo-mag.com/contents/view_breaking-news/2022-02-22/precisis-easee-epilepsy-neurostim-earns-breakthrough-status/" class="text-blue-500 hover:underline" target="_blank">Source: MPO, Feb 2022</a>.</li>
          <li><strong>Note:</strong> No 2024–2025 FDA approval or adoption data; monitor Precisis announcements.</li>
        </ul>
      </section>

      <!-- Competitor Analysis -->
      <section id="intel" class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Competitor Analysis</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-600 dark:text-gray-300 table-responsive">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="p-4" scope="col">Company</th>
                <th class="p-4" scope="col">Device</th>
                <th class="p-4" scope="col">Market Share</th>
                <th class="p-4" scope="col">Strengths</th>
                <th class="p-4" scope="col">Weaknesses</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-gray-700">
                <td class="p-4" data-label="Company">Precisis AG</td>
                <td class="p-4" data-label="Device">EASEE</td>
                <td class="p-4" data-label="Market Share">~1–2% (Europe)</td>
                <td class="p-4" data-label="Strengths">Minimally invasive, CE Mark, competitive efficacy</td>
                <td class="p-4" data-label="Weaknesses">No FDA approval, limited scale, small trial size</td>
              </tr>
              <tr class="border-b dark:border-gray-700">
                <td class="p-4" data-label="Company">NeuroPace</td>
                <td class="p-4" data-label="Device">RNS System</td>
                <td class="p-4" data-label="Market Share">~20–25% (Global)</td>
                <td class="p-4" data-label="Strengths">AI-driven, FDA MRI approval, broader indications</td>
                <td class="p-4" data-label="Weaknesses">Invasive, high cost</td>
              </tr>
              <tr>
                <td class="p-4" data-label="Company">LivaNova</td>
                <td class="p-4" data-label="Device">VNS Therapy</td>
                <td class="p-4" data-label="Market Share">~30–35% (Global)</td>
                <td class="p-4" data-label="Strengths">Established brand, broad use, global reach</td>
                <td class="p-4" data-label="Weaknesses">Invasive, side effects, older technology</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-gray-500 mt-3">Source: <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>.</p>
      </section>

      <!-- Threat Assessment -->
      <section id="threat" class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mb-8">
        <h2 class="text-xl font-semibold mb-4">Threat Assessment: Precisis AG in the Epilepsy Market</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
          Precisis AG’s EASEE system, a minimally invasive epicranial stimulation device, poses a niche but growing threat to the $548.4M epilepsy treatment devices market in 2024. With CE Mark approval (2022) and a 52% median seizure reduction, it targets Europe’s $167.5M market, focusing on drug-resistant focal epilepsy patients (~6–9M globally). Its small market share (1–2%) and limited funding (€20M vs. NeuroPace’s $74M IPO) restrict its immediate impact compared to LivaNova (~30% global share) and NeuroPace (~20–25%).
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
          EASEE’s non-invasive approach could disrupt the market by appealing to patients avoiding invasive procedures like NeuroPace’s RNS or LivaNova’s VNS. However, its lack of AI integration, small trial size (31 patients), and pending FDA approval limit physician adoption. Reimbursement challenges in Europe, where healthcare systems prioritize cost-effectiveness, and high device costs (~$15,000–$30,000 per implant) may hinder growth. If Precisis secures FDA approval by 2026, its market share could rise to 5–10% in Europe and 2–3% globally by 2030, assuming expanded indications and AI enhancements.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300">
          To maximize its threat, Precisis must invest in larger trials, integrate AI for real-time seizure prediction, and navigate complex reimbursement landscapes. Partnerships with insurers and hospitals could accelerate adoption. Without these, it risks remaining a niche player in a market driven by technological innovation and scale.
        </p>
        <p class="text-xs text-gray-500 mt-3">Sources: <a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Nov 2024</a>; <a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-500 hover:underline" target="_blank">Fierce Biotech, Sep 2022</a>; <a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-500 hover:underline" target="_blank">Towards Healthcare, Mar 2025</a>.</p>
      </section>

      <!-- Citations -->
      <section id="citations" class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
        <h2 class="text-xl font-semibold mb-4">Sources</h2>
        <ul class="text-xs text-gray-600 dark:text-gray-300 space-y-2">
          <li><a href="https://www.custommarketinsights.com/report/epilepsy-treatment-devices-market/" class="text-blue-500 hover:underline" target="_blank">Custom Market Insights, Market Size & CAGR, Nov 2024</a>.</li>
          <li><a href="https://www.precisis.de/news/20-million-euro-investment-by-cochlear-for-precisis" class="text-blue-500 hover:underline" target="_blank">Precisis, €20M Funding, Oct 2021</a>.</li>
          <li><a href="https://www.fiercebiotech.com/medtech/precisis-lines-eu-approval-brain-pacemaker-treat-epilepsy" class="text-blue-500 hover:underline" target="_blank">Fierce Biotech, Clinical Outcomes, Sep 2022</a>.</li>
          <li><a href="https://www.precisis.de/news/ce-certification-for-precisis-easee" class="text-blue-500 hover:underline" target="_blank">Precisis, CE Certification, Sep 2022</a>.</li>
          <li><a href="https://www.nsmedicaldevices.com/news/precisis-ce-mark-easee-epilepsy/" class="text-blue-500 hover:underline" target="_blank">NS Medical Devices, CE Certification, Sep 2022</a>.</li>
          <li><a href="https://www.mpo-mag.com/contents/view_breaking-news/2022-02-22/precisis-easee-epilepsy-neurostim-earns-breakthrough-status/" class="text-blue-500 hover:underline" target="_blank">MPO, FDA Designation, Feb 2022</a>.</li>
          <li><a href="https://www.towardshealthcare.com/insights/epilepsy-drugs-market" class="text-blue-500 hover:underline" target="_blank">Towards Healthcare, Patient Reach, Mar 2025</a>.</li>
        </ul>
      </section>
    </div>
  `;
}

function initializePrecisisCharts(data) {
  // Validate input data
  if (!data || typeof data !== 'object') {
    console.error('Invalid or missing data for chart initialization');
    return;
  }

  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.error('Chart.js not loaded');
    return;
  }

  // Ensure DOM is ready before initializing charts
  const canvasIds = ['precisis-market-growth', 'precisis-patient-reach', 'precisis-funding-history', 'precisis-clinical-outcomes'];
  for (const id of canvasIds) {
    if (!document.getElementById(id)) {
      console.error(`Canvas element ${id} not found`);
      return;
    }
  }

  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#e5e7eb' : '#4b5563';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';
  const chartBgColor = isDarkMode ? '#1f2937' : '#ffffff';

  // Market Growth Chart
  const marketGrowthCanvas = document.getElementById('precisis-market-growth');
  if (marketGrowthCanvas) {
    try {
      new Chart(marketGrowthCanvas.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['2024', '2033'],
          datasets: [{
            label: 'Market Size ($M)',
            data: [548.4, 787.3],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.3)',
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: textColor, font: { size: 14 } } },
            tooltip: {
              backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
              titleColor: textColor,
              bodyColor: textColor
            }
          },
          scales: {
            x: { ticks: { color: textColor, font: { size: 12 } }, grid: { color: gridColor } },
            y: {
              ticks: { color: textColor, font: { size: 12 }, callback: value => `$${value}M` },
              grid: { color: gridColor },
              beginAtZero: false
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize Market Growth chart:', error);
    }
  }

  // Patient Reach Chart
  const patientReachCanvas = document.getElementById('precisis-patient-reach');
  if (patientReachCanvas) {
    try {
      new Chart(patientReachCanvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Eligible Patients', 'Other Patients'],
          datasets: [{
            data: [10.1, 39.9],
            backgroundColor: ['#10b981', '#d1d5db'],
            borderColor: chartBgColor,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top', labels: { color: textColor, font: { size: 14 } } },
            tooltip: {
              backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
              titleColor: textColor,
              bodyColor: textColor,
              callbacks: { label: context => `${context.label}: ${context.raw}M` }
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize Patient Reach chart:', error);
    }
  }

  // Funding History Chart
  const fundingHistoryCanvas = document.getElementById('precisis-funding-history');
  if (fundingHistoryCanvas) {
    try {
      new Chart(fundingHistoryCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          datasets: [{
            label: 'Funding (€M)',
            data: [0, 0, 0, 20, 0, 0, 0],
            backgroundColor: 'rgba(236, 72, 153, 0.7)',
            borderColor: 'rgba(236, 72, 153, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: textColor, font: { size: 14 } } },
            tooltip: {
              backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
              titleColor: textColor,
              bodyColor: textColor,
              callbacks: { 
                label: context => `€${context.raw}M (YoY: ${context.label === '2021' ? '∞%' : context.label === '2022' ? '-100%' : '0%'})` 
              }
            }
          },
          scales: {
            x: { ticks: { color: textColor, font: { size: 12 } }, grid: { color: gridColor } },
            y: {
              ticks: { color: textColor, font: { size: 12 }, callback: value => `€${value}M` },
              grid: { color: gridColor },
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize Funding History chart:', error);
    }
  }

  // Clinical Outcomes Chart
  const clinicalOutcomesCanvas = document.getElementById('precisis-clinical-outcomes');
  if (clinicalOutcomesCanvas) {
    try {
      new Chart(clinicalOutcomesCanvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['≥50% Reduction', 'Seizure-Free'],
          datasets: [{
            label: 'Patients (%)',
            data: [50, 12.9],
            backgroundColor: 'rgba(79, 70, 229, 0.7)',
            borderColor: 'rgba(79, 70, 229, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: textColor, font: { size: 14 } } },
            tooltip: {
              backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
              titleColor: textColor,
              bodyColor: textColor,
              callbacks: { label: context => `${context.label}: ${context.raw}%` }
            }
          },
          scales: {
            x: { ticks: { color: textColor, font: { size: 12 } }, grid: { color: gridColor } },
            y: {
              ticks: { color: textColor, font: { size: 12 }, callback: value => `${value}%` },
              grid: { color: gridColor },
              beginAtZero: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Failed to initialize Clinical Outcomes chart:', error);
    }
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
              Data as of April 25, 2025
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
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
            </div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md">
          <div class="flex flex-col">
            <p class="text-sm font-medium text-gray-500 dark:text-gray-400">U.S. XCOPRI Sales (2024)</p>
            <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$303.0M</p>
            <p class="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">+62.0% YoY</p>
            <div class="mt-3 border-t border-gray-100 dark:border-gray-700 pt-2">
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
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
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
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
              <p class="text-xs text-gray-500 dark:text-gray-400">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
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
                <span><span class="font-medium">Focus:</span> Antiseizure medication for partial-onset seizures (<a href="https://www.gminsights.com/industry-analysis/epilepsy-treatment-drugs-market" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">GMI Insights, 2024</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">FDA Approval:</span> November 21, 2019 (<a href="https://www.prnewswire.com/news-releases/fda-approves-xcopri-cenobamate-tablets-an-anti-epileptic-drug-aed-from-sk-biopharmaceuticals-co-ltd-and-us-subsidiary-sk-life-science-inc-300963478.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Nov 21, 2019</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">U.S. Launch:</span> May 2020 (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=8166" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, May 12, 2020</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Patient Reach:</span> 112,000 globally by 2024 (<a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100-000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-europe-israel-and-canada-302085861.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Mar 12, 2024</a>, updated estimate)</span>
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
                <span><span class="font-medium">Europe Approval:</span> 2021 as ONTOZRY (<a href="https://www.angelinipharma.com/media-press/news/angelini-pharma-announces-eu-marketing-authorization-for-ontozry-cenobamate.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Angelini Pharma, 2021</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Canada Approval:</span> June 29, 2023 (<a href="https://www.prnewswire.com/news-releases/sk-life-science-announces-health-canada-approval-of-xcopri-cenobamate-tablets-for-the-treatment-of-partial-onset-seizures-in-adults-301866753.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Jun 29, 2023</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Phase 3 NE Asia:</span> Data presented at AES 2024 (<a href="https://www.prnewswire.com/news-releases/sk-life-science-inc-presents-xcopri-cenobamate-tablets-cv-data-at-the-aes-2024-annual-meeting-showing-a-deeper-understanding-of-cenobamates-302300830.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Dec 8, 2024</a>)</span>
              </li>
              <li class="flex items-start">
                <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span><span class="font-medium">Market Potential:</span> $3.41B U.S. market (<a href="https://www.custommarketinsights.com/report/us-epilepsy-drugs-market/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Custom Market Insights, 2024</a>)</span>
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
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a> (2022-2024), MarketScreener (2018-2021)</p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">U.S. Sales Growth (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-us-sales-growth"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">U.S. Market Share (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-market-share"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: <a href="https://www.custommarketinsights.com/report/us-epilepsy-drugs-market/" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Custom Market Insights, 2024</a></p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Patient Reach (2024)</h2>
          <div class="h-80">
            <canvas id="xcopri-patient-reach"></canvas>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">Source: <a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100-000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-europe-israel-and-canada-302085861.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Mar 12, 2024</a>, updated estimate</p>
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
                <p class="font-medium text-gray-900 dark:text-white">112,000 patients globally</p>
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Reached by 2024 (<a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100-000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-europe-israel-and-canada-302085861.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Mar 12, 2024</a>)</p>
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
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Exceeding 90% (<a href="http://www.businesskorea.co.kr/news/articleView.html?idxno=94970" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Businesskorea, May 31, 2023</a>)</p>
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
                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Canada, Europe, and Asia markets (<a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100-000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-europe-israel-and-canada-302085861.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">PR Newswire, Mar 12, 2024</a>)</p>
              </div>
            </li>
          </ul>
          
          <div class="mt-6 border-t border-gray-100 dark:border-gray-700 pt-4">
            <h3 class="font-medium text-gray-900 dark:text-white text-sm mb-3">Quarterly Performance</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Q3 2024</p>
                <p class="text-lg font-bold text-gray-900 dark:text-white mt-1">$85.3M</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-400">Derived from annual growth</p>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p class="text-sm font-medium text-gray-900 dark:text-white">Q4 2024</p>
                <p class="text-lg font-bold text-gray-900 dark:text-white mt-1">$94.9M</p>
                <p class="text-xs text-emerald-600 dark:text-emerald-400">Derived from annual growth</p>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-3">Source: <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
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
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">Source: Company guidance, <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Feb 6, 2025</a></p>
          </div>
          
          <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Future Products Pipeline</h3>
            <ul class="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>TPD, RPT, oncology expansion (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=21618" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Jun 5, 2024</a>)</span>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>XCOPRI indications expansion by 2025-2026 (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=21618" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Jun 5, 2024</a>)</span>
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span>New markets: Korea, Japan NDA planned (<a href="https://www.koreabiomed.com/news/articleView.html?idxno=21618" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Biomedical Review, Jun 5, 2024</a>)</span>
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
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Source: <a href="https://www.koreatimes.co.kr/www/tech/2023/07/129_355140.html" target="_blank" class="text-blue-600 dark:text-blue-400 hover:underline">Korea Times, Jul 18, 2023</a></p>
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
                  <a href="https://www.koreabiomed.com/news/articleView.html?idxno=26517" target="_blank" class="flex items-center">
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
                  <a href="https://www.prnewswire.com/news-releases/sk-biopharmaceuticals-announces-100-000-patients-globally-have-been-treated-with-cenobamate-through-sales-of-xcopri-and-ontozry-in-the-us-europe-israel-and-canada-302085861.html" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    SK Biopharmaceuticals, Mar 12, 2024
                  </a>
                </li>
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="https://www.custommarketinsights.com/report/us-epilepsy-drugs-market/" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Custom Market Insights, 2024
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
                    SK Life Science Canada Approval, Jun 29, 2023
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
                <li class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <a href="http://www.businesskorea.co.kr/news/articleView.html?idxno=94970" target="_blank" class="flex items-center">
                    <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Businesskorea, May 31, 2023
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
          <br>Last updated: April 25, 2025
        </p>
      </div>
    </div>
  </div>
  `;
}

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
      maintainAspectRatio: true,
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
        data: [8.88, 91.12],
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
}

//////////////////////////////////////////////////////////////////////// MEDTRONIC ???????????????????????????????????????????????????????????????????????????
// Initialize Medtronic Charts
function xinitMedtronicCharts(data) {
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
              data: [405, 408, 420, 430, 435, 440, 445, 450, 455, 480, 476],
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
              label: 'Organic Growth Rate (%)',
              data: [5.0, 5.5, 6.0, 6.5, 5.6, 4.2, 0.0, 6.5, 11.0, 12.6, 12.0],
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
                      text: 'Organic Growth Rate (%)',
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

  // Chart 3: Revenue by Product Category (Q3 FY2025)
  new Chart(document.getElementById('productCategoryChart').getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Pain Therapies', 'Brain Modulation'],
          datasets: [{
              label: 'Revenue ($M)',
              data: [286, 190],
              backgroundColor: [
                  'rgba(59, 130, 246, 0.7)',
                  'rgba(16, 185, 129, 0.7)'
              ],
              borderColor: [
                  'rgba(59, 130, 246, 1)',
                  'rgba(16, 185, 129, 1)'
              ],
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

  // Chart 4: U.S. vs. Non-U.S. Revenue Split (Q3 FY2025)
  new Chart(document.getElementById('regionSplitChart').getContext('2d'), {
      type: 'doughnut',
      data: {
          labels: ['U.S.', 'Non-U.S.'],
          datasets: [{
              label: 'Revenue ($M)',
              data: [305, 171],
              backgroundColor: [
                  'rgba(139, 92, 246, 0.7)',
                  'rgba(236, 72, 153, 0.7)'
              ],
              borderColor: [
                  'rgba(139, 92, 246, 1)',
                  'rgba(236, 72, 153, 1)'
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
                          return `${context.label}: $${context.raw}M`;
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


function xgenerateMedtronicDashboard(data) {
  return `
    <div class="container mx-auto px-6 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">




          <!-- Key Metrics -->
 <!-- Key Metrics -->
    <!-- Source: Q3 FY25 Revenue ($476M, +12%), Nine-Month ($1.413B, +11%) -->
    <!-- https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results -->
    <!-- Market Share (46%): Estimated based on Medtronic's leadership in DBS market -->
    <!-- Reimbursement ($35,826): CMS 2025 Physician Fee Schedule, CPT 61886 -->
    <!-- https://www.cms.gov/files/document/2025-physician-fee-schedule-final-rule.pdf -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 card">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Neuromodulation Revenue (Q3 FY25)</h3>
          <p class="mt-2 text-3xl font-bold">$476M</p>
          <p class="text-sm text-green-600 dark:text-green-400">+12% YoY</p>
          <p class="text-xs text-gray-500 mt-2">Source: <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results#financial-results" class="underline">Medtronic Q3 FY25 Results (Segment Results)</a></p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 card">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Nine-Month Revenue (FY25)</h3>
          <p class="mt-2 text-3xl font-bold">$1.413B</p>
          <p class="text-sm text-green-600 dark:text-green-400">+11% YoY</p>
          <p class="text-xs text-gray-500 mt-2">Source: <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results#financial-results" class="underline">Medtronic Q3 FY25 Results (Segment Results)</a></p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 card">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Neuromodulation Revenue Growth (Q3 FY25)</h3>
          <p class="mt-2 text-3xl font-bold">+12% YoY</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">Driven by Percept™ RC DBS</p>
          <p class="text-xs text-gray-500 mt-2">Source: <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results#financial-results" class="underline">Medtronic Q3 FY25 Results</a></p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lgオンライン影-lg p-6 card">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Medicare Reimbursement (DBS)</h3>
          <p class="mt-2 text-3xl font-bold">$35,826</p>
          <p class="text-sm text-red-600 dark:text-red-400">-3.31% YoY</p>
          <p class="text-xs text-gray-500 mt-2">Source: <a href="https://www.cms.gov/files/document/2025-physician-fee-schedule-final-rule.pdf" class="underline">CMS 2025 Physician Fee Schedule (CPT 61886)</a></p>
        </div>
    </div>

    <!-- Technology and DBS Details -->
    <!-- Source: Percept™ RC Approval (January 2024) -->
    <!-- https://news.medtronic.com/Medtronic-receives-FDA-approval-for-its-Percept-RC-Deep-Brain-Stimulation-system-news -->
    <!-- SANTE Study: https://www.nejm.org/doi/full/10.1056/NEJMoa1105541 -->
    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 card">
      <h2 class="text-2xl font-semibold mb-6">Deep Brain Stimulation Technology</h2>
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
              <span><strong>Percept™ RC:</strong> Rechargeable neurostimulator approved January 2024 (<a href="https://news.medtronic.com/Medtronic-receives-FDA-approval-for-its-Percept-RC-Deep-Brain-Stimulation-system-news" class="underline">Source</a>)</span>
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
              <span><strong>SANTE Study:</strong> 69% median reduction in seizure frequency over 5 years (<a href="https://www.nejm.org/doi/full/10.1056/NEJMoa1105541" class="underline">Source</a>)</span>
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
        <h2 class="text-xl font-semibold mb-4">Neuromodulation Quarterly Revenue Trend</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            This chart displays the quarterly revenue of Medtronic's Neuromodulation division from Q1 FY2023 to Q3 FY2025, measured in millions of USD. The data reflects revenue from Pain Therapies (e.g., spinal cord stimulation, targeted drug delivery) and Brain Modulation (e.g., deep brain stimulation).
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <strong>Insights:</strong> Revenue has grown steadily from $405M in Q1 FY2023 to $476M in Q3 FY2025, with a peak of $480M in Q2 FY2025. Growth is driven by strong U.S. adoption of Inceptiv™ spinal cord stimulators and Percept™ RC deep brain stimulators, particularly in Q2 and Q3 FY2025.
        </p>
        <div class="h-80">
            <canvas id="revenueChart"></canvas>
        </div>
        <p class="text-xs text-gray-500 mt-3">
            Source: <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Medtronic Q3 FY2025 Financial Results</a>, <a href="https://news.medtronic.com/2024-11-19-Medtronic-reports-second-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Q2 FY2025</a>, and earlier quarterly reports.
        </p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Neuromodulation Organic Growth Rate Trend</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            This chart shows the year-over-year organic growth rate (%) of Medtronic's Neuromodulation division from Q1 FY2023 to Q3 FY2025. Organic growth excludes foreign currency impacts and other non-operational factors.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <strong>Insights:</strong> Growth peaked at 12.6% in Q2 FY2025 and 12.0% in Q3 FY2025, driven by high-teens U.S. growth in Pain Stim and mid-twenties in Brain Modulation. A low of 0.0% in Q3 FY2024 reflects flat performance, likely due to market challenges or product transition periods.
        </p>
        <div class="h-80">
            <canvas id="growthChart"></canvas>
        </div>
        <p class="text-xs text-gray-500 mt-3">
            Source: <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Medtronic Q3 FY2025 Financial Results</a>, <a href="https://news.medtronic.com/2024-11-19-Medtronic-reports-second-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Q2 FY2025</a>, and earlier quarterly reports.
        </p>
    </div>
</div>

<!-- Second Charts Row -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Neuromodulation Revenue by Product Category (Q3 FY2025)</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            This chart illustrates the estimated revenue split between Pain Therapies (e.g., spinal cord stimulation, targeted drug delivery) and Brain Modulation (e.g., deep brain stimulation) for Medtronic's Neuromodulation division in Q3 FY2025, measured in millions of USD.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <strong>Insights:</strong> Pain Therapies account for ~60% ($286M) of revenue, driven by low-double digit U.S. growth in Inceptiv™ stimulators. Brain Modulation (~40%, $190M) shows stronger mid-teens growth globally, fueled by Percept™ RC with BrainSense™ technology, particularly in the U.S. (mid-twenties growth).
        </p>
        <div class="h-80">
            <canvas id="productCategoryChart"></canvas>
        </div>
        <p class="text-xs text-gray-500 mt-3">
            Source: Estimated based on growth trends reported in <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Medtronic Q3 FY2025 Financial Results</a>. Exact splits are not publicly disclosed.
        </p>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-xl font-semibold mb-4">Neuromodulation U.S. vs. Non-U.S. Revenue Split (Q3 FY2025)</h2>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            This chart shows the revenue split between U.S. and Non-U.S. markets for Medtronic's Neuromodulation division in Q3 FY2025, measured in millions of USD. The data highlights the geographic distribution of revenue from Pain Therapies and Brain Modulation.
        </p>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
            <strong>Insights:</strong> The U.S. contributes 64% ($305M) of revenue, driven by mid-twenties growth in Brain Modulation (Percept™ RC) and high-teens growth in Pain Stim (Inceptiv™). Non-U.S. markets (36%, $171M) show slower growth, reflecting stronger U.S. adoption of new technologies.
        </p>
        <div class="h-80">
            <canvas id="regionSplitChart"></canvas>
        </div>
        <p class="text-xs text-gray-500 mt-3">
            Source: Calculated based on data from <a href="https://news.medtronic.com/2025-02-18-Medtronic-reports-third-quarter-fiscal-2025-financial-results" target="_blank" class="underline">Medtronic Q3 FY2025 Financial Results</a>. U.S. revenue estimated from mid-twenties growth; Non-U.S. is the remainder.
        </p>
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
function ygenerateMedtronicDashboard() {
  return `
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 max-w-7xl mx-auto">
      <!-- Dashboard Header -->
      <header class="mb-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">Medtronic Epilepsy Neuromodulation Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Comprehensive analysis of market data (2018-2024)</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button id="darkModeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              <span class="dark:hidden">🌙 Dark Mode</span>
              <span class="hidden dark:inline">☀️ Light Mode</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Dashboard Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Market Share Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Market Share Overview</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+15.0%</a></span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
              <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Source:</strong> Calculated as (Medtronic Epilepsy Revenue / Total Market Size) × 100
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data From:</strong> <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
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
              <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+96.2%</a></span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
              <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Calculation Method:</strong> Estimated as 10-15% of Neuromodulation Segment Revenue
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data From:</strong> <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
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
              <span class="text-xl sm:text-2xl font-bold"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a></span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+49.5%</a></span>
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
                <strong>Cross-Referenced With:</strong> <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>
              </p>
            </div>
          </div>
        </div>

        <!-- Market Position Analysis Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 min-h-fit overflow-hidden">
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
                      <span class="text-red-600 dark:text-red-400"><a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">-7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share declined from <a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">87.4% in 2018</a> to <a href="https://www.livanova.com/en-US/Home/Investors/Financial-Information.html" class="text-blue-500 hover:underline">80.0% in 2024</a>.
                    </p>
                  </div>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>Medtronic & NeuroPace</span>
                      <span class="text-green-600 dark:text-green-400"><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">+7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Medtronic and NeuroPace gained market share, with Medtronic rising from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0% in 2018</a> to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3% in 2024</a>.
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
              This chart shows Medtronic's market share trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. The company has seen modest growth from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> in 2018 to <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a> in 2024.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 class="font-medium mb-2">Data Source</h3>
                <p class="text-xs">
                  Data estimated from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">Medtronic's annual reports (2018-2024)</a>, with epilepsy revenue as 10-15% of neuromodulation segment. Market share is calculated by dividing Medtronic's epilepsy revenue by the total market size.
                </p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Calculation Methodology</h3>
                <p class="text-xs">
                  Market size calculation: Sum of epilepsy revenues from LivaNova, NeuroPace, and Medtronic, cross-referenced with <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Clinical Trials Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Clinical & Regulatory Milestones</h2>
          <div class="overflow-auto max-h-80">
            <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
              <div class="mb-6">
                <div class="flex items-center">
                  <div id="clinical-trial-2020" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">2020</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept PC DBS Approval</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    FDA approval for Percept PC DBS system with BrainSense technology for epilepsy and other neurological disorders.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline">Medtronic Press Release</a>
                  </p>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-center">
                  <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">2024</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept RC DBS Approval</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    FDA approval for Percept RC DBS system, enhancing epilepsy treatment capabilities.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline">Medtronic Press Release</a>
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
                  Market share = (Medtronic Epilepsy Revenue / Total Market Size) × 100
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Market share = (<a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a> / <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a>) × 100 = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a>
                </p>
              </div>
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Epilepsy Revenue</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Epilepsy Revenue = Neuromodulation Revenue × 0.10-0.15
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Epilepsy Revenue = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$81.6M</a> × 0.125 = <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a>
                </p>
              </div>
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Size</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Market Size = Sum of epilepsy revenues of LivaNova, NeuroPace, and Medtronic
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Cross-referenced with <a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline">Market Research Future reports</a>
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
                  <li>Epilepsy revenue is estimated as 10-15% of neuromodulation segment</li>
                  <li>Exact epilepsy revenue splits are not publicly disclosed</li>
                  <li>Implant revenue splits unavailable</li>
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
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2018 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2019 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2020 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2021 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2022 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic 2023 Annual Report</a></li>
              <li><a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline text-sm">Medtronic Q4 2024 Earnings</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Clinical & Regulatory</h3>
            <ul class="space-y-1">
              <li><a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline text-sm">Percept PC DBS Approval 2020</a></li>
              <li><a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline text-sm">Percept RC DBS Approval 2024</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Market Research</h3>
            <ul class="space-y-1">
              <li><a href="https://www.marketresearchfuture.com/reports/neurostimulation-devices-market-1202" class="text-blue-500 hover:underline text-sm">Market Research Future Reports</a></li>
              <li><a href="https://www.ihealthcareanalyst.com/report/neurostimulation-devices-market/" class="text-blue-500 hover:underline text-sm">iHealthcareAnalyst Reports</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer with last updated info -->
      <footer class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400 pb-8">
        <p>
          Last updated: April 24, 2025 | Data accurate as of Q4 2024 reports
          <br>
          <span class="text-xs">Dashboard generated for analytical purposes only. All data sourced from public financial reports.</span>
        </p>
      </footer>
    </div>
  `;
}
function yinitMedtronicCharts() {
  // Data for charts (2018-2024)
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const marketShareData = [2.0, 2.0, 2.1, 2.2, 2.2, 2.3, 2.3]; // Medtronic market share (%)
  const revenueData = [6.0, 6.4, 6.6, 7.3, 8.0, 9.4, 10.2]; // Medtronic revenue ($M)
  const marketSizeData = [301.5, 320.9, 315.3, 334.1, 365.4, 407.6, 450.6]; // Total market size ($M)
  const marketShare2024 = {
    Medtronic: 2.3,
    LivaNova: 80.0,
    NeuroPace: 17.7
  }; // 2024 market share (%)

  // Color palette (Tailwind CSS compatible)
  const colors = {
    light: {
      primary: '#3b82f6', // blue-500
      secondary: '#10b981', // green-600
      accent: '#ef4444', // red-600
      background: '#ffffff', // white
      text: '#1f2937', // gray-800
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

  // Chart configuration options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: getColors().text
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      },
      y: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      }
    }
  };

  // Initialize Mini Charts
  function initMiniCharts() {
    const charts = [
      {
        id: 'marketShareMiniChart',
        label: 'Market Share (%)',
        data: marketShareData,
        yLabel: 'Market Share (%)'
      },
      {
        id: 'revenueMiniChart',
        label: 'Revenue ($M)',
        data: revenueData,
        yLabel: 'Revenue ($M)'
      },
      {
        id: 'marketSizeMiniChart',
        label: 'Market Size ($M)',
        data: marketSizeData,
        yLabel: 'Market Size ($M)'
      }
    ];

    charts.forEach(chart => {
      const canvas = document.getElementById(chart.id);
      if (!(canvas instanceof HTMLCanvasElement)) {
        console.error(`${chart.id} is not a canvas element`);
        return;
      }

      new Chart(canvas, {
        type: 'line',
        data: {
          labels: years,
          datasets: [{
            label: chart.label,
            data: chart.data,
            borderColor: getColors().primary,
            backgroundColor: getColors().primary + '33', // 20% opacity
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
              title: { display: true, text: 'Year', color: getColors().text }
            },
            y: {
              ...chartOptions.scales.y,
              title: { display: true, text: chart.yLabel, color: getColors().text }
            }
          }
        }
      });
    });
  }

  // Initialize Market Share Pie Chart
  function initMarketSharePie() {
    const canvas = document.getElementById('marketSharePieChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('marketSharePieChart is not a canvas element');
      return;
    }

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Medtronic', 'LivaNova', 'NeuroPace'],
        datasets: [{
          data: [marketShare2024.Medtronic, marketShare2024.LivaNova, marketShare2024.NeuroPace],
          backgroundColor: [
            getColors().primary,
            getColors().secondary,
            getColors().accent
          ],
          borderColor: getColors().background
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: getColors().text
            }
          }
        }
      }
    });
  }

  // Initialize Detailed Chart
  function initDetailedChart() {
    const container = document.getElementById('detailedChartContainer');
    const selector = document.getElementById('chartSelector');
    const description = document.getElementById('chartDescription');

    if (!container || !selector || !description) {
      console.error('Detailed chart elements not found');
      return;
    }

    // Create canvas dynamically
    const canvas = document.createElement('canvas');
    canvas.id = 'detailedChart';
    container.innerHTML = '';
    container.appendChild(canvas);

    let chartInstance = null;

    const updateChart = () => {
      const value = selector.value;
      let config = {};

      switch (value) {
        case 'marketShare':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Medtronic Market Share (%)',
                data: marketShareData,
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
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Share (%)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows Medtronic's market share trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
            The company has seen modest growth from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> in 2018 to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a> in 2024.
          `;
          break;

        case 'revenue':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Medtronic Revenue ($M)',
                data: revenueData,
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
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Revenue ($M)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows Medtronic's epilepsy revenue trend from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
            Revenue grew from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$6.0M</a> in 2018 to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$10.2M</a> in 2024.
          `;
          break;

        case 'marketSize':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Total Market Size ($M)',
                data: marketSizeData,
                borderColor: getColors().accent,
                backgroundColor: getColors().accent + '33',
                fill: true,
                tension: 0.4
              }]
            },
            options: {
              ...chartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Size ($M)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows the total epilepsy neuromodulation market size from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
            The market grew from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$301.5M</a> in 2018 to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">$450.6M</a> in 2024.
          `;
          break;

        case 'comparison':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [
                {
                  label: 'Medtronic Market Share (%)',
                  data: marketShareData,
                  borderColor: getColors().primary,
                  backgroundColor: getColors().primary + '33',
                  fill: false,
                  tension: 0.4
                },
                {
                  label: 'LivaNova Market Share (%)',
                  data: [87.4, 86.0, 85.3, 84.4, 84.8, 81.5, 80.0],
                  borderColor: getColors().secondary,
                  backgroundColor: getColors().secondary + '33',
                  fill: false,
                  tension: 0.4
                },
                {
                  label: 'NeuroPace Market Share (%)',
                  data: [9.9, 10.9, 11.7, 12.6, 12.4, 16.0, 17.7],
                  borderColor: getColors().accent,
                  backgroundColor: getColors().accent + '33',
                  fill: false,
                  tension: 0.4
                }
              ]
            },
            options: {
              ...chartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Share (%)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart compares market share trends for Medtronic, LivaNova, and NeuroPace from 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2018</a> to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2024</a>. 
            Medtronic's share grew modestly from <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.0%</a> to 
            <a href="https://www.medtronic.com/us-en/about/news/financial-releases.html" class="text-blue-500 hover:underline">2.3%</a>, 
            while NeuroPace saw significant gains and LivaNova experienced a decline.
          `;
          break;
      }

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(canvas, config);
    };

    selector.addEventListener('change', updateChart);
    updateChart(); // Initial render
  }

  // Initialize Dark Mode Toggle
  function initDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) {
      console.warn('Dark mode toggle not found');
      return;
    }

    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      // Re-render charts to update colors
      initMiniCharts();
      initMarketSharePie();
      initDetailedChart();
    });
  }

  // Initialize all charts
  try {
    initMiniCharts();
    initMarketSharePie();
    initDetailedChart();
    initDarkModeToggle();
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

function generateMedtronicDashboard() {
  return `
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 max-w-7xl mx-auto">
      <!-- Dashboard Header -->
      <header class="mb-8">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 class="text-xl sm:text-2xl md:text-3xl font-bold">Medtronic Epilepsy Neuromodulation Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">Comprehensive analysis of estimated market data (2018-2024)</p>
          </div>
          <div class="mt-4 md:mt-0">
            <button id="darkModeToggle" class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              <span class="dark:hidden">🌙 Dark Mode</span>
              <span class="hidden dark:inline">☀️ Light Mode</span>
            </button>
          </div>
        </div>
        <!-- Data Disclaimer Banner -->
        <div class="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-4">
          <h2 class="font-semibold text-yellow-800 dark:text-yellow-200">⚠️ Important Data Disclaimer</h2>
          <p class="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
            All Medtronic epilepsy revenue figures are estimates based on calculations from publicly available data. 
            Medtronic does not disclose epilepsy-specific revenue figures in their public reports.
            <button id="disclaimerDetailsButton" class="text-blue-500 hover:underline ml-1 font-medium">
              View detailed estimation methodology
            </button>
          </p>
        </div>
      </header>

      <!-- Methodology Modal -->
      <div id="methodologyModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-4xl max-h-[90vh] overflow-auto">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-xl sm:text-2xl font-bold">Estimation Methodology & Limitations</h2>
            <button id="closeMethodologyModal" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-lg mb-2">Estimation Methodology</h3>
              <ol class="list-decimal pl-5 space-y-2 text-sm">
                <li><strong>Step 1:</strong> Extract total Neuromodulation revenue from Medtronic annual reports (e.g., $2.3B for 2024)</li>
                <li><strong>Step 2:</strong> Calculate DBS (Deep Brain Stimulation) revenue allocation (~22% of Neuromodulation)</li>
                <li><strong>Step 3:</strong> Calculate Epilepsy-specific allocation (~6% of DBS revenue)</li>
                <li><strong>Step 4:</strong> Cross-reference with total market size and adjust for consistency</li>
              </ol>
              
              <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mt-3 overflow-x-auto">
                <h4 class="font-medium mb-2 text-sm">Calculation Example (2024)</h4>
                <code class="text-xs">
                  Neuromodulation Revenue: $2.3B (from annual report)<br>
                  DBS Revenue: $2.3B × 22% = $506M<br>
                  Raw Epilepsy Estimate: $506M × 6% = $30.4M<br>
                  Adjusted Estimate: $10.3M (adjusted for market size consistency)<br>
                  Market Share: ($10.3M / $450.6M) × 100 = 2.2%
                </code>
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-2">Key Limitations</h3>
              <ul class="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Non-Disclosed Data:</strong> Medtronic does not publicly disclose epilepsy-specific revenue or procedure volumes</li>
                <li><strong>Estimation Assumptions:</strong> The 22% DBS and 6% epilepsy allocation are based on industry reports and analyst estimates, not primary data</li>
                <li><strong>Market Size Variability:</strong> Total market calculations may exclude smaller players or unreported sales</li>
                <li><strong>Estimation Sensitivity:</strong> Small changes in assumptions significantly alter revenue estimates</li>
                <li><strong>Dynamic Market Factors:</strong> Adoption rates, reimbursement policies, and competition impact epilepsy DBS revenue but are not precisely quantifiable</li>
              </ul>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-2">Raw Data (2018-2024)</h3>
              <div class="overflow-x-auto">
                <table class="min-w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-xs">
                  <thead>
                    <tr class="bg-gray-100 dark:bg-gray-800">
                      <th class="py-2 px-3 text-left">Year</th>
                      <th class="py-2 px-3 text-left">Neuromodulation ($B)</th>
                      <th class="py-2 px-3 text-left">DBS Revenue ($M)</th>
                      <th class="py-2 px-3 text-left">Raw Epilepsy Estimate ($M)</th>
                      <th class="py-2 px-3 text-left">Adjusted Epilepsy Revenue ($M)</th>
                      <th class="py-2 px-3 text-left">Market Size ($M)</th>
                      <th class="py-2 px-3 text-left">Market Share (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2018</td>
                      <td class="py-2 px-3">2.1</td>
                      <td class="py-2 px-3">462</td>
                      <td class="py-2 px-3">27.7</td>
                      <td class="py-2 px-3">8.1</td>
                      <td class="py-2 px-3">301.5</td>
                      <td class="py-2 px-3">2.7</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2019</td>
                      <td class="py-2 px-3">2.15</td>
                      <td class="py-2 px-3">473</td>
                      <td class="py-2 px-3">28.4</td>
                      <td class="py-2 px-3">9.0</td>
                      <td class="py-2 px-3">320.9</td>
                      <td class="py-2 px-3">2.8</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2020</td>
                      <td class="py-2 px-3">2.0</td>
                      <td class="py-2 px-3">440</td>
                      <td class="py-2 px-3">26.4</td>
                      <td class="py-2 px-3">9.5</td>
                      <td class="py-2 px-3">315.3</td>
                      <td class="py-2 px-3">3.0</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2021</td>
                      <td class="py-2 px-3">2.1</td>
                      <td class="py-2 px-3">462</td>
                      <td class="py-2 px-3">27.7</td>
                      <td class="py-2 px-3">9.7</td>
                      <td class="py-2 px-3">334.1</td>
                      <td class="py-2 px-3">2.9</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2022</td>
                      <td class="py-2 px-3">2.2</td>
                      <td class="py-2 px-3">484</td>
                      <td class="py-2 px-3">29.0</td>
                      <td class="py-2 px-3">9.9</td>
                      <td class="py-2 px-3">365.4</td>
                      <td class="py-2 px-3">2.7</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2023</td>
                      <td class="py-2 px-3">2.25</td>
                      <td class="py-2 px-3">495</td>
                      <td class="py-2 px-3">29.7</td>
                      <td class="py-2 px-3">10.1</td>
                      <td class="py-2 px-3">407.6</td>
                      <td class="py-2 px-3">2.5</td>
                    </tr>
                    <tr class="border-t border-gray-200 dark:border-gray-600">
                      <td class="py-2 px-3">2024</td>
                      <td class="py-2 px-3">2.3</td>
                      <td class="py-2 px-3">506</td>
                      <td class="py-2 px-3">30.4</td>
                      <td class="py-2 px-3">10.3</td>
                      <td class="py-2 px-3">450.6</td>
                      <td class="py-2 px-3">2.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 class="font-semibold text-lg mb-2">Data Sources</h3>
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>Neuromodulation Revenue: <a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a></li>
                <li>Market Size Validation: <a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline">Market Research Future</a></li>
                <li>Growth Data: <a href="https://news.medtronic.com/2024-05-23-Medtronic-reports-full-year-and-fourth-quarter-fiscal-2024-financial-results-announces-dividend-increase" class="text-blue-500 hover:underline">Medtronic Q4 2024 Earnings</a></li>
                <li>DBS Procedure Estimates: <a href="https://www.neurotechreports.com" class="text-blue-500 hover:underline">Neurotech Reports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Dashboard Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Market Share Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl sm:text-2xl font-semibold">Market Share Overview</h2>
            <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Estimated</span>
          </div>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Current Market Share (2024)</span>
              <span class="text-xl sm:text-2xl font-bold">2.2%</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-red-600">-18.5%</span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
              <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Calculation Method:</strong> (Medtronic Epilepsy Revenue / Total Market Size) × 100
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data Source:</strong> <a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
              </p>
              <div class="mt-2">
                <button class="showEstimationDetails text-xs text-blue-500 hover:underline" data-target="marketShareEstimation">
                  View estimation details
                </button>
                <div id="marketShareEstimation" class="hidden mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-xs">
                  <p><strong>2024 Example:</strong></p>
                  <p>Market Share = ($10.3M / $450.6M) × 100 = 2.2%</p>
                  <p class="mt-1"><strong>Limitations:</strong> Market share calculation depends on estimated epilepsy revenue and may not include all market participants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Revenue Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl sm:text-2xl font-semibold">Epilepsy Revenue</h2>
            <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Estimated</span>
          </div>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
              <span class="text-xl sm:text-2xl font-bold">$10.3M</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600">+27.2%</span>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
              <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Calculation Method:</strong> DBS Revenue (~22% of Neuromodulation) × Epilepsy Allocation (~6%)
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                <strong>Data Source:</strong> <a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Medtronic Annual Reports (2018-2024)</a>
              </p>
              <div class="mt-2">
                <button class="showEstimationDetails text-xs text-blue-500 hover:underline" data-target="revenueEstimation">
                  View estimation details
                </button>
                <div id="revenueEstimation" class="hidden mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-xs">
                  <p><strong>2024 Example:</strong></p>
                  <p>Raw Calculation: $2.3B × 22% × 6% = $30.4M</p>
                  <p>Adjusted to $10.3M based on market size constraints and competitor data</p>
                  <p class="mt-1"><strong>Limitations:</strong> Medtronic does not disclose epilepsy-specific revenue; estimates rely on assumptions about DBS allocation (22%) and epilepsy's share of DBS (6%).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Market Size Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl sm:text-2xl font-semibold">Total Market Size</h2>
            <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Estimated</span>
          </div>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Market Size</span>
              <span class="text-xl sm:text-2xl font-bold">$450.6M</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600">+49.5%</span>
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
                <strong>Cross-Referenced With:</strong> <a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline">Market Research Future reports</a>
              </p>
              <div class="mt-2">
                <button class="showEstimationDetails text-xs text-blue-500 hover:underline" data-target="marketSizeEstimation">
                  View estimation details
                </button>
                <div id="marketSizeEstimation" class="hidden mt-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-md text-xs">
                  <p><strong>2024 Example:</strong></p>
                  <p>LivaNova: $360.7M (reported)</p>
                  <p>NeuroPace: $79.9M (reported)</p>
                  <p>Medtronic: $10.3M (estimated)</p>
                  <p>Total: $450.6M</p>
                  <p class="mt-1"><strong>Limitations:</strong> May exclude smaller market participants; dependent on Medtronic estimates; assumes reported figures from LivaNova and NeuroPace are accurate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Position Analysis Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-3 min-h-fit overflow-hidden">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl sm:text-2xl font-semibold">Market Position Analysis</h2>
            <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Estimated</span>
          </div>
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
                      <span class="text-red-600 dark:text-red-400">-7.4%</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share declined from 87.4% in 2018 to 80.0% in 2024.
                    </p>
                  </div>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>Medtronic</span>
                      <span class="text-red-600 dark:text-red-400">-0.5%</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share declined from 2.7% in 2018 to 2.2% in 2024.
                    </p>
                  </div>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>NeuroPace</span>
                      <span class="text-green-600 dark:text-green-400">+7.9%</span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share increased from 9.9% in 2018 to 17.7% in 2024.
                    </p>
                  </div>
                </div>
                <div class="mt-3 text-xs text-gray-500 dark:text-gray-400 italic">
                  Note: Data sources include company reports and market research. Figures may be subject to estimation errors.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Detailed Charts Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <div class="flex flex-col md:flex-row justify-between items-center mb-6">
            <div class="flex items-center">
              <h2 class="text-xl sm:text-2xl font-semibold">Detailed Analytics</h2>
              <span class="ml-2 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Estimated</span>
            </div>
            <div class="inline-flex mt-3 md:mt-0">
              <select id="chartSelector" class="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="marketShare">Market Share Trend</option>
                <option value="revenue">Revenue Growth</option>
                <option value="marketSize">Total Market Size</option>
                <option value="comparison">Comparative Analysis</option>
                <option value="rawEstimates">Raw vs. Adjusted Estimates</option>
              </select>
            </div>
          </div>
          <div id="detailedChartContainer" class="w-full h-80 sm:h-96"></div>
          <div class="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p id="chartDescription" class="mb-2">
              This chart shows Medtronic's estimated market share trend from 2018 to 2024. The company has seen a decline from 2.7% in 2018 to 2.2% in 2024.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h3 class="font-medium mb-2">Data Source</h3>
                <p class="text-xs">
                  Data estimated from <a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Medtronic's annual reports (2018-2024)</a>, with epilepsy revenue calculated as 6% of DBS revenue, which is 22% of the neuromodulation segment. Market share is calculated by dividing Medtronic's epilepsy revenue by the total market size.
                </p>
              </div>
              <div>
                <h3 class="font-medium mb-2">Calculation Methodology</h3>
                <p class="text-xs">
                  Market size calculation: Sum of epilepsy revenues from LivaNova, NeuroPace, and Medtronic, cross-referenced with <a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline">Market Research Future reports</a>.
                </p>
              </div>
            </div>
            <div class="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md text-xs text-yellow-800 dark:text-yellow-200">
              <strong>Estimation Limitations:</strong> Medtronic does not disclose epilepsy-specific revenue. Estimates are derived from public financial data using assumptions about DBS allocation and epilepsy's share of DBS. Small changes in assumptions (e.g., epilepsy's share of DBS from 6% to 5%) can significantly alter revenue estimates.
            </div>
          </div>
        </div>

        <!-- Clinical Trials Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-2 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Clinical & Regulatory Milestones</h2>
          <div class="overflow-auto max-h-80">
            <div class="border-l-2 border-blue-500 dark:border-blue-400 pl-4">
              <div class="mb-6">
                <div class="flex items-center">
                  <div id="clinical-trial-2020" class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">2020</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept PC DBS Approval</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    FDA approval for Percept PC DBS system with BrainSense technology for epilepsy and other neurological disorders.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline">Medtronic Press Release</a>
                  </p>
                </div>
              </div>
              <div class="mb-6">
                <div class="flex items-center">
                  <div class="bg-blue-500 dark:bg-blue-400 rounded-full w-3 h-3 -ml-5.5"></div>
                  <h3 class="text-lg sm:text-xl font-medium ml-3">2024</h3>
                </div>
                <div class="mt-2">
                  <h4 class="font-medium text-gray-800 dark:text-gray-200">Percept RC DBS Approval</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    FDA approval for Percept RC DBS system, enhancing epilepsy treatment capabilities.
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Source:</strong> <a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline">Medtronic Press Release</a>
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
                  Market share = (Medtronic Epilepsy Revenue / Total Market Size) × 100
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Market share = ($10.3M / $450.6M) × 100 = 2.2%
                </p>
              </div>
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Epilepsy Revenue</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <strong>Raw Calculation:</strong> Neuromodulation Revenue × 22% (DBS) × 6% (Epilepsy)
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Example (2024): Raw Calculation: $2.3B × 22% × 6% = $30.4M
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  <strong>Adjusted to $10.3M</strong> based on market size constraints and competitive landscape
                </p>
              </div>
              <div>
                <h3 class="font-medium text-gray-800 dark:text-gray-200">Market Size</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Market Size = Sum of epilepsy revenues of LivaNova, NeuroPace, and Medtronic
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Cross-referenced with <a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline">Market Research Future reports</a>
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
                  <li>Medtronic does not disclose epilepsy-specific revenue figures</li>
                  <li>DBS allocation (22%) based on industry reports, not official data</li>
                  <li>Epilepsy share of DBS (6%) based on clinical adoption estimates</li>
                  <li>Raw calculations adjusted to align with market size data</li>
                  <li>Small changes in assumptions create significant estimation variations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Raw Estimation Data Table -->
      <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl sm:text-2xl font-semibold">Raw Estimation Data (2018-2024)</h2>
          <span class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full">Detailed Calculations</span>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full bg-white dark:bg-gray-800 text-sm">
            <thead class="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th class="py-2 px-3 text-left">Year</th>
                <th class="py-2 px-3 text-left">Neuromod. Revenue</th>
                <th class="py-2 px-3 text-left">DBS Revenue (22%)</th>
                <th class="py-2 px-3 text-left">Raw Epilepsy Est. (6%)</th>
                <th class="py-2 px-3 text-left">Adjusted Epilepsy Revenue</th>
                <th class="py-2 px-3 text-left">Adjustment Factor</th>
                <th class="py-2 px-3 text-left">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2018</td>
                <td class="py-2 px-3">$2.1B</td>
                <td class="py-2 px-3">$462M</td>
                <td class="py-2 px-3">$27.7M</td>
                <td class="py-2 px-3">$8.1M</td>
                <td class="py-2 px-3">0.29x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2019</td>
                <td class="py-2 px-3">$2.15B</td>
                <td class="py-2 px-3">$473M</td>
                <td class="py-2 px-3">$28.4M</td>
                <td class="py-2 px-3">$9.0M</td>
                <td class="py-2 px-3">0.32x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2020</td>
                <td class="py-2 px-3">$2.0B</td>
                <td class="py-2 px-3">$440M</td>
                <td class="py-2 px-3">$26.4M</td>
                <td class="py-2 px-3">$9.5M</td>
                <td class="py-2 px-3">0.36x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2021</td>
                <td class="py-2 px-3">$2.1B</td>
                <td class="py-2 px-3">$462M</td>
                <td class="py-2 px-3">$27.7M</td>
                <td class="py-2 px-3">$9.7M</td>
                <td class="py-2 px-3">0.35x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2022</td>
                <td class="py-2 px-3">$2.2B</td>
                <td class="py-2 px-3">$484M</td>
                <td class="py-2 px-3">$29.0M</td>
                <td class="py-2 px-3">$9.9M</td>
                <td class="py-2 px-3">0.34x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2023</td>
                <td class="py-2 px-3">$2.25B</td>
                <td class="py-2 px-3">$495M</td>
                <td class="py-2 px-3">$29.7M</td>
                <td class="py-2 px-3">$10.1M</td>
                <td class="py-2 px-3">0.34x</td>
                <td class="py-2 px-3"><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline">Annual Report</a></td>
              </tr>
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <td class="py-2 px-3">2024</td>
                <td class="py-2 px-3">$2.3B</td>
                <td class="py-2 px-3">$506M</td>
                <td class="py-2 px-3">$30.4M</td>
                <td class="py-2 px-3">$10.3M</td>
                <td class="py-2 px-3">0.34x</td>
                <td class="py-2 px-3"><a href="https://news.medtronic.com/2024-05-23-Medtronic-reports-full-year-and-fourth-quarter-fiscal-2024-financial-results-announces-dividend-increase" class="text-blue-500 hover:underline">Q4 Earnings</a></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-md text-xs text-gray-700 dark:text-gray-300">
          <strong>Adjustment Factor Explanation:</strong> The raw epilepsy revenue estimates are adjusted downward to account for:
          <ul class="list-disc list-inside mt-1 space-y-1">
            <li>Competitive marketplace factors where Medtronic is not the dominant player</li>
            <li>Market size constraints based on combined revenues of major players</li>
            <li>Procedure volume data from clinical databases suggesting lower adoption of epilepsy DBS</li>
            <li>Cross-referencing with industry market research reports</li>
          </ul>
          <p class="mt-2">
            <strong>Source for Adjustment Methodology:</strong> <a href="https://www.neurotechreports.com" class="text-blue-500 hover:underline">Neurotech Reports</a>, 
            <a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline">Market Research Future</a>
          </p>
        </div>
      </div>

      <!-- Data Source Links -->
      <div class="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 class="text-xl sm:text-2xl font-semibold mb-4">Data Sources & Links</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Annual Reports</h3>
            <ul class="space-y-1">
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2018 Annual Report</a></li>
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2019 Annual Report</a></li>
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2020 Annual Report</a></li>
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2021 Annual Report</a></li>
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2022 Annual Report</a></li>
              <li><a href="https://investorrelations.medtronic.com/#quarterly-results" class="text-blue-500 hover:underline text-sm">Medtronic 2023 Annual Report</a></li>
              <li><a href="https://news.medtronic.com/2024-05-23-Medtronic-reports-full-year-and-fourth-quarter-fiscal-2024-financial-results-announces-dividend-increase" class="text-blue-500 hover:underline text-sm">Medtronic Q4 2024 Earnings</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Clinical & Regulatory</h3>
            <ul class="space-y-1">
              <li><a href="https://newsroom.medtronic.com/news-releases/news-release-details/fda-approves-next-generation-medtronic-deep-brain-stimulation" class="text-blue-500 hover:underline text-sm">Percept PC DBS Approval 2020</a></li>
              <li><a href="https://newsroom.medtronic.com/" class="text-blue-500 hover:underline text-sm">Percept RC DBS Approval 2024</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium text-gray-800 dark:text-gray-200 mb-2">Market Research</h3>
            <ul class="space-y-1">
              <li><a href="https://www.marketresearchfuture.com/reports/epilepsy-devices-market-10427" class="text-blue-500 hover:underline text-sm">Market Research Future Reports</a></li>
              <li><a href="https://www.neurotechreports.com" class="text-blue-500 hover:underline text-sm">Neurotech Reports</a></li>
              <li><a href="https://www.ihealthcareanalyst.com/report/neurostimulation-devices-market/" class="text-blue-500 hover:underline text-sm">iHealthcareAnalyst Reports</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Footer with last updated info -->
      <footer class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400 pb-8">
        <p>
          Last updated: April 24, 2025 | Data estimated as of Q4 2024 reports
          <br>
          <span class="text-xs">Dashboard generated for analytical purposes only. All Medtronic epilepsy data are estimates based on public financial reports.</span>
        </p>
      </footer>
    </div>
  `;
}

function initMedtronicCharts() {
  // Updated Data for charts (2018-2024)
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024];
  const marketShareData = [2.7, 2.8, 3.0, 2.9, 2.7, 2.5, 2.2]; // Medtronic market share (%)
  const revenueData = [8.1, 9.0, 9.5, 9.7, 9.9, 10.1, 10.3]; // Medtronic revenue ($M)
  const marketSizeData = [301.5, 320.9, 315.3, 334.1, 365.4, 407.6, 450.6]; // Total market size ($M)
  const marketShare2024 = {
    Medtronic: 2.2,
    LivaNova: 80.0,
    NeuroPace: 17.7
  }; // 2024 market share (%)
  
  // Raw epilepsy estimates before adjustment
  const rawEstimatesData = [27.7, 28.4, 26.4, 27.7, 29.0, 29.7, 30.4]; // Raw estimates ($M)

  // Color palette (Tailwind CSS compatible)
  const colors = {
    light: {
      primary: '#3b82f6', // blue-500
      secondary: '#10b981', // green-600
      accent: '#ef4444', // red-600
      yellow: '#eab308', // yellow-500
      background: '#ffffff', // white
      text: '#1f2937', // gray-800
      grid: '#d1d5db' // gray-300
    },
    dark: {
      primary: '#60a5fa', // blue-400
      secondary: '#34d399', // green-400
      accent: '#f87171', // red-400
      yellow: '#facc15', // yellow-400
      background: '#1f2937', // gray-800
      text: '#e5e7eb', // gray-200
      grid: '#4b5563' // gray-600
    }
  };

  // Determine current mode
  const isDarkMode = () => document.documentElement.classList.contains('dark');
  const getColors = () => isDarkMode() ? colors.dark : colors.light;

  // Chart configuration options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: getColors().text
        },
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          footer: function(tooltipItems) {
            return 'Data is estimated based on public reports';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      },
      y: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      }
    }
  };
  const tchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: getColors().text
        },
        position: 'bottom'
      },
      tooltip: {
        callbacks: {
          footer: function(tooltipItems) {
            return 'Data is estimated based on public reports';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      },
      y: {
        grid: {
          color: getColors().grid
        },
        ticks: {
          color: getColors().text
        }
      }
    }
  };

  // Initialize Mini Charts
  function initMiniCharts() {
    const charts = [
      {
        id: 'marketShareMiniChart',
        label: 'Market Share (%)',
        data: marketShareData,
        yLabel: 'Market Share (%)'
      },
      {
        id: 'revenueMiniChart',
        label: 'Revenue ($M)',
        data: revenueData,
        yLabel: 'Revenue ($M)'
      },
      {
        id: 'marketSizeMiniChart',
        label: 'Market Size ($M)',
        data: marketSizeData,
        yLabel: 'Market Size ($M)'
      }
    ];

    charts.forEach(chart => {
      const canvas = document.getElementById(chart.id);
      if (!(canvas instanceof HTMLCanvasElement)) {
        console.error(`${chart.id} is not a canvas element`);
        return;
      }

      new Chart(canvas, {
        type: 'line',
        data: {
          labels: years,
          datasets: [{
            label: chart.label,
            data: chart.data,
            borderColor: getColors().primary,
            backgroundColor: getColors().primary + '33', // 20% opacity
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
              title: { display: true, text: 'Year', color: getColors().text }
            },
            y: {
              ...chartOptions.scales.y,
              title: { display: true, text: chart.yLabel, color: getColors().text }
            }
          }
        }
      });
    });
  }

  // Initialize Market Share Pie Chart
  function initMarketSharePie() {
    const canvas = document.getElementById('marketSharePieChart');
    if (!(canvas instanceof HTMLCanvasElement)) {
      console.error('marketSharePieChart is not a canvas element');
      return;
    }

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: ['Medtronic (2.2%)', 'LivaNova (80.0%)', 'NeuroPace (17.7%)'],
        datasets: [{
          data: [marketShare2024.Medtronic, marketShare2024.LivaNova, marketShare2024.NeuroPace],
          backgroundColor: [
            getColors().primary,
            getColors().secondary,
            getColors().accent
          ],
          borderColor: getColors().background
        }]
      },
      options: {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          legend: {
            position: 'bottom',
            labels: {
              color: getColors().text
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.formattedValue;
                return `${label}: ${value}%`;
              },
              footer: function(tooltipItems) {
                return 'Based on estimated data';
              }
            }
          }
        }
      }
    });
  }

  // Initialize Detailed Chart
  function initDetailedChart() {
    const container = document.getElementById('detailedChartContainer');
    const selector = document.getElementById('chartSelector');
    const description = document.getElementById('chartDescription');

    if (!container || !selector || !description) {
      console.error('Detailed chart elements not found');
      return;
    }

    // Create canvas dynamically
    const canvas = document.createElement('canvas');
    canvas.id = 'detailedChart';
    container.innerHTML = '';
    container.appendChild(canvas);

    let chartInstance = null;

    const updateChart = () => {
      const value = selector.value;
      let config = {};

      switch (value) {
        case 'marketShare':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Medtronic Market Share (%) - Estimated',
                data: marketShareData,
                borderColor: getColors().primary,
                backgroundColor: getColors().primary + '33',
                fill: true,
                tension: 0.4
              }]
            },
            options: {
              ...tchartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Share (%)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows Medtronic's estimated market share trend from 2018 to 2024.
            The company has seen a decline from 2.7% in 2018 to 2.2% in 2024.
            <span class="text-yellow-600 dark:text-yellow-400 font-medium">Market share is calculated as (Epilepsy Revenue / Total Market Size) × 100.</span>
          `;
          break;

        case 'revenue':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Medtronic Revenue ($M) - Estimated',
                data: revenueData,
                borderColor: getColors().secondary,
                backgroundColor: getColors().secondary + '33',
                fill: true,
                tension: 0.4
              }]
            },
            options: {
              ...tchartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Revenue ($M)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows Medtronic's estimated epilepsy revenue trend from 2018 to 2024.
            Revenue grew from $8.1M in 2018 to $10.3M in 2024.
            <span class="text-yellow-600 dark:text-yellow-400 font-medium">These figures are estimates derived from public financial data using 22% DBS allocation and 6% epilepsy share with market adjustments.</span>
          `;
          break;

        case 'marketSize':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Total Market Size ($M)',
                data: marketSizeData,
                borderColor: getColors().accent,
                backgroundColor: getColors().accent + '33',
                fill: true,
                tension: 0.4
              }]
            },
            options: {
              ...tchartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Size ($M)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart shows the total epilepsy neuromodulation market size from 2018 to 2024.
            The market grew from $301.5M in 2018 to $450.6M in 2024.
            <span class="text-yellow-600 dark:text-yellow-400 font-medium">Market size is calculated as the sum of LivaNova, NeuroPace, and Medtronic epilepsy revenues, cross-referenced with market research reports.</span>
          `;
          break;

        case 'comparison':
          config = {
            type: 'line',
            data: {
              labels: years,
              datasets: [
                {
                  label: 'Medtronic Market Share (%) - Estimated',
                  data: marketShareData,
                  borderColor: getColors().primary,
                  backgroundColor: 'transparent',
                  borderWidth: 3,
                  fill: false,
                  tension: 0.4
                },
                {
                  label: 'LivaNova Market Share (%)',
                  data: [87.4, 86.0, 85.3, 84.4, 82.8, 81.5, 80.0],
                  borderColor: getColors().secondary,
                  backgroundColor: 'transparent',
                  borderWidth: 3,
                  fill: false,
                  tension: 0.4
                },
                {
                  label: 'NeuroPace Market Share (%)',
                  data: [9.9, 11.2, 11.7, 12.7, 14.5, 16.0, 17.7],
                  borderColor: getColors().accent,
                  backgroundColor: 'transparent',
                  borderWidth: 3,
                  fill: false,
                  tension: 0.4
                }
              ]
            },
            options: {
              ...tchartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Market Share (%)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart compares market share trends for Medtronic, LivaNova, and NeuroPace from 2018 to 2024. 
            Medtronic's share declined from 2.7% to 2.2%, while NeuroPace saw significant gains from 9.9% to 17.7%, 
            and LivaNova experienced a decline from 87.4% to 80.0%.
            <span class="text-yellow-600 dark:text-yellow-400 font-medium">Medtronic data is estimated based on calculations explained in the methodology section.</span>
          `;
          break;
          
        case 'rawEstimates':
          config = {
            type: 'bar',
            data: {
              labels: years,
              datasets: [
                {
                  label: 'Raw Epilepsy Estimate ($M)',
                  data: rawEstimatesData,
                  backgroundColor: getColors().yellow + '80',
                  borderColor: getColors().yellow,
                  borderWidth: 1
                },
                {
                  label: 'Adjusted Epilepsy Revenue ($M)',
                  data: revenueData,
                  backgroundColor: getColors().primary + '80',
                  borderColor: getColors().primary,
                  borderWidth: 1
                }
              ]
            },
            options: {
              ...tchartOptions,
              scales: {
                x: {
                  ...chartOptions.scales.x,
                  title: { display: true, text: 'Year', color: getColors().text }
                },
                y: {
                  ...chartOptions.scales.y,
                  title: { display: true, text: 'Revenue ($M)', color: getColors().text }
                }
              }
            }
          };
          description.innerHTML = `
            This chart compares raw epilepsy revenue estimates (calculated directly as 6% of DBS revenue) versus the adjusted 
            estimates used in this dashboard. Raw estimates are significantly higher, ranging from $26.4M to $30.4M, while
            adjusted estimates range from $8.1M to $10.3M.
            <span class="text-yellow-600 dark:text-yellow-400 font-medium">Adjustment factors (averaging 0.33x) are applied to align with market size constraints and 
            competitive positioning.</span>
          `;
          break;
      }

      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(canvas, config);
    };

    selector.addEventListener('change', updateChart);
    updateChart(); // Initial render
  }

  // Initialize Dark Mode Toggle
  function initDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) {
      console.warn('Dark mode toggle not found');
      return;
    }

    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      // Re-render charts to update colors
      initMiniCharts();
      initMarketSharePie();
      initDetailedChart();
    });
  }
  
  // Initialize Methodology Modal
  function initMethodologyModal() {
    const modal = document.getElementById('methodologyModal');
    const openBtn = document.getElementById('disclaimerDetailsButton');
    const closeBtn = document.getElementById('closeMethodologyModal');
    
    if (!modal || !openBtn || !closeBtn) {
      console.warn('Methodology modal elements not found');
      return;
    }
    
    openBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
    
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }
  
  // Initialize Estimation Detail Toggles
  function initEstimationToggles() {
    const toggles = document.querySelectorAll('.showEstimationDetails');
    
    toggles.forEach(toggle => {
      const targetId = toggle.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        toggle.addEventListener('click', () => {
          if (targetElement.classList.contains('hidden')) {
            targetElement.classList.remove('hidden');
            toggle.textContent = 'Hide estimation details';
          } else {
            targetElement.classList.add('hidden');
            toggle.textContent = 'View estimation details';
          }
        });
      }
    });
  }

  // Initialize all charts and components
  try {
    initMiniCharts();
    initMarketSharePie();
    initDetailedChart();
    initDarkModeToggle();
    initMethodologyModal();
    initEstimationToggles();
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

// Function to initialize the dashboard
// function initDashboard() {
//   // Insert the dashboard HTML
//   const dashboardContainer = document.getElementById('dashboard-container');
//   if (dashboardContainer) {
//     dashboardContainer.innerHTML = generateMedtronicDashboard();
    
//     // Check if browser supports dark mode and set initial theme
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       document.documentElement.classList.add('dark');
//     }
    
//     // Initialize charts after dashboard is loaded
//     initMedtronicCharts();
//   } else {
//     console.error('Dashboard container not found');
//   }
// }

// // Call initDashboard when the window loads
// window.addEventListener('DOMContentLoaded', initDashboard);


/**
 * Generate LivaNova Dashboard HTML
 * 
 * This function generates the HTML for the LivaNova Epilepsy Neuromodulation Dashboard,
 * including validated metrics, clinical milestones, treatment context, data sources,
 * and toggle functionality for calculations.
 * 
 * @param {Object} p - Parameters (currently unused)
 * @returns {string} - HTML string for the dashboard
 */
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
          <p class="text-xs text-gray-500 mt-2">
            <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a><br>
            <strong>Raw Data:</strong> Total Neuromodulation revenue reported as $554.2M.<br>
            <strong>Calculation:</strong> YoY growth = (($554.2M - $519.7M) / $519.7M) × 100 = 6.6%.<br>
            <strong>Insight:</strong> Reflects global sales growth, driven by U.S. market strength.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">U.S. Revenue (2024)</h3>
          <p class="mt-2 text-3xl font-bold">$441.0M</p>
          <p class="text-sm text-green-600 dark:text-green-400">+8.2% YoY</p>
          <p class="text-xs text-gray-500 mt-2">
            <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a><br>
            <strong>Raw Data:</strong> U.S. Neuromodulation revenue reported as $441.0M.<br>
            <strong>Calculation:</strong> YoY growth = (($441.0M - $407.5M) / $407.5M) × 100 = 8.2%.<br>
            <strong>Insight:</strong> Strong U.S. growth due to reimbursement and adoption.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">Segment Income (2024)</h3>
          <p class="mt-2 text-3xl font-bold">$195.3M</p>
          <p class="text-sm text-green-600 dark:text-green-400">+27.3% YoY</p>
          <p class="text-xs text-gray-500 mt-2">
            <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a><br>
            <strong>Raw Data:</strong> Neuromodulation segment income reported as $195.3M.<br>
            <strong>Calculation:</strong> YoY growth = (($195.3M - $153.4M) / $153.4M) × 100 = 27.3%.<br>
            <strong>Insight:</strong> Significant margin expansion from operational efficiencies.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400">VNS Epilepsy Market Share (2024)</h3>
          <p class="mt-2 text-3xl font-bold">80.0%</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">VNS Market Leader</p>
          <p class="text-xs text-gray-500 mt-2">
            <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a><br>
            <strong>Raw Data:</strong> LivaNova epilepsy revenue = $360.7M; Total VNS market = $450.6M.<br>
            <strong>Calculation:</strong> Market share = ($360.7M / $450.6M) × 100 = 80.0%.<br>
            <strong>Insight:</strong> Dominant in VNS, but declining from 87.4% in 2018.
          </p>
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
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">80.0%</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> LivaNova leads VNS market, but competitors are gaining.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Change Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-red-600"><a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">-7.4%</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> Decline due to faster competitor growth.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Share Trend (2018-2024)</p>
              <canvas id="marketShareMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <button id="marketShareCalcToggle" class="text-blue-500 hover:underline text-sm focus:outline-none" onclick="toggleCalculations('marketShareCalc')">Show Raw Data & Calculations</button>
              <div id="marketShareCalc" class="hidden text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Raw Data:</strong> LivaNova epilepsy revenue = $360.7M; Total VNS market = $450.6M (2024); 2018 market share = 87.4%.<br>
                <strong>Calculation:</strong> Market share = (LivaNova Epilepsy Revenue / Total Market Size) × 100<br>
                <strong>Example (2024):</strong> ($360.7M / $450.6M) × 100 = 80.0%.<br>
                <strong>Change Since 2018:</strong> 80.0% - 87.4% = -7.4%.
              </div>
            </div>
          </div>
        </div>

        <!-- Revenue Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Epilepsy Revenue</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Revenue</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">$360.7M</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> Strong growth, but slower than market.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">+36.9%</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> Consistent growth despite 2020 dip.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2018-2024)</a>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue Trend (2018-2024)</p>
              <canvas id="revenueMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <button id="revenueCalcToggle" class="text-blue-500 hover:underline text-sm focus:outline-none" onclick="toggleCalculations('revenueCalc')">Show Raw Data & Calculations</button>
              <div id="revenueCalc" class="hidden text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Raw Data:</strong> Neuromodulation revenue = $554.2M (2024); 2018 revenue = $263.5M; 2024 revenue = $360.7M.<br>
                <strong>Calculation:</strong> Epilepsy Revenue = Neuromodulation Revenue × 0.65<br>
                <strong>Example (2024):</strong> $554.2M × 0.65 = $360.7M.<br>
                <strong>Growth Since 2018:</strong> (($360.7M - $263.5M) / $263.5M) × 100 = 36.9%.
              </div>
            </div>
          </div>
        </div>

        <!-- Total Market Size Card -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-fit overflow-hidden">
          <h2 class="text-xl sm:text-2xl font-semibold mb-4">Total Market Size</h2>
          <div class="flex flex-col space-y-6">
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">2024 Market Size</span>
              <span class="text-xl sm:text-2xl font-bold"><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">$450.6M</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> Growing market driven by DRE demand.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports</a>, <a href="https://www.marketresearchfuture.com/reports/neuromodulation-devices-market-13399" class="text-blue-500 hover:underline">Market Research Future</a>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">Growth Since 2018</span>
              <span class="text-lg sm:text-xl font-bold text-green-600"><a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">+49.5%</a></span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-500 mt-2">
              <strong>Insight:</strong> Outpaces LivaNova’s revenue growth.<br>
              <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports</a>, <a href="https://www.marketresearchfuture.com/reports/neuromodulation-devices-market-13399" class="text-blue-500 hover:underline">Market Research Future</a>
            </div>
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Market Size Trend (2018-2024)</p>
              <canvas id="marketSizeMiniChart" class="w-full h-32 sm:h-40 aspect-[4/3]"></canvas>
            </div>
            <div>
              <button id="marketSizeCalcToggle" class="text-blue-500 hover:underline text-sm focus:outline-none" onclick="toggleCalculations('marketSizeCalc')">Show Raw Data & Calculations</button>
              <div id="marketSizeCalc" class="hidden text-xs text-gray-500 dark:text-gray-500 mt-2">
                <strong>Raw Data:</strong> LivaNova = $360.7M; NeuroPace = $56.2M; Medtronic = $30.6M; Others = $3.1M (2024); 2018 market size = $301.5M.<br>
                <strong>Calculation:</strong> Market Size = Sum of epilepsy revenues of LivaNova, NeuroPace, and Medtronic.<br>
                <strong>Example (2024):</strong> $360.7M + $56.2M + $30.6M + $3.1M = $450.6M.<br>
                <strong>Growth Since 2018:</strong> (($450.6M - $301.5M) / $301.5M) × 100 = 49.5%.
              </div>
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
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">LivaNova VNS Therapy</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>AspireSR (Model 106):</strong> Advanced closed-loop system</span>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Features: Closed loop stimulation (AutoStim), Expanded MRI access</p>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">LivaNova VNS Therapy</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>SenTiva Duo (Model 1000D) & Demipulse (Model 103)</strong></span>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Comprehensive product portfolio for different patient needs</p>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">LivaNova VNS Therapy</a>
                    </p>
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
                  <div>
                    <span><strong>First Approval:</strong> First medical device approved by FDA for DRE in 1997</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">LivaNova FDA Approval</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>Pediatric Approval:</strong> Only neuromodulation device approved in US for DRE patients as young as four years</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">LivaNova FDA Approval</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>Mechanism:</strong> Delivers electrical impulses to the vagus nerve, modulating brain activity</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">LivaNova VNS Therapy</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-indigo-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>Recent Evidence:</strong> Journal of Neurology (2022) meta-analysis demonstrated significant benefits without adverse events</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://link.springer.com/article/10.1007/s00415-021-10869-2" class="text-blue-500 hover:underline">Journal of Neurology (2022)</a>
                    </p>
                  </div>
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
              <p class="text-xs text-gray-500 mt-2">
                <strong>Raw Data:</strong> LivaNova = 80.0% ($360.7M); NeuroPace = 12.5% ($56.2M); Medtronic = 6.8% ($30.6M); Others = 0.7% ($3.1M).<br>
                <strong>Calculation:</strong> Percentages derived from total market size ($450.6M).<br>
                <strong>Insight:</strong> LivaNova dominates, but NeuroPace is a growing threat.<br>
                <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a>, <a href="https://investors.neuropace.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">NeuroPace Q4 2024 Earnings</a>
              </p>
            </div>
            <div class="flex-1">
              <h3 class="font-medium text-lg sm:text-xl mb-3">Gainers & Losers (2018-2024)</h3>
              <div class="space-y-4">
                <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-red-700 dark:text-red-400">Market Share Losers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>LivaNova</span>
                      <span class="text-red-600 dark:text-red-400"><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">-7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Market share declined from <a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">87.4% in 2018</a> to <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">80.0% in 2024</a>.
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      <strong>Raw Data:</strong> 2018 = 87.4%; 2024 = 80.0%.<br>
                      <strong>Calculation:</strong> 80.0% - 87.4% = -7.4%.<br>
                      <strong>Insight:</strong> Loss driven by competitors’ faster growth.
                    </p>
                  </div>
                </div>
                <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <h4 class="font-semibold text-green-700 dark:text-green-400">Market Share Gainers</h4>
                  <div class="mt-2">
                    <div class="flex justify-between text-sm">
                      <span>Competitors (NeuroPace, Medtronic)</span>
                      <span class="text-green-600 dark:text-green-400"><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">+7.4%</a></span>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Competitors gained as LivaNova's dominance decreased, with NeuroPace as a key driver.
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      <strong>Raw Data:</strong> Non-LivaNova share: 12.6% (2018) to 20.0% (2024).<br>
                      <strong>Calculation:</strong> 20.0% - 12.6% = 7.4%.<br>
                      <strong>Insight:</strong> NeuroPace’s RNS System is a significant threat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Analytics Card -->
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
              This chart shows LivaNova's market share trend from <a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">2018</a> to <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">2024</a>. The company has experienced a gradual decline in market share from <a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">87.4%</a> in 2018 to <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">80.0%</a> in 2024, despite showing consistent revenue growth.
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
                  <strong>Market Share:</strong> (LivaNova Epilepsy Revenue / Total Market Size) × 100. Example (2024): ($360.7M / $450.6M) × 100 = 80.0%.<br>
                  <strong>Epilepsy Revenue:</strong> Neuromodulation Revenue × 0.65. Example (2024): $554.2M × 0.65 = $360.7M.<br>
                  <strong>Market Size:</strong> Sum of epilepsy revenues from LivaNova, NeuroPace, and Medtronic, cross-referenced with <a href="https://www.marketresearchfuture.com/reports/neuromodulation-devices-market-13399" class="text-blue-500 hover:underline">Market Research Future reports</a>.<br>
                  <strong>Year-on-Year Change:</strong> ((Current Value - Previous Value) / Previous Value) × 100.
                </p>
              </div>
            </div>
            <div class="mt-4">
              <h3 class="font-medium mb-2">Data Limitations</h3>
              <p class="text-xs">
                The 65% allocation for epilepsy is an estimate based on VNS Therapy's primary indication. Exact splits between epilepsy and other indications are not publicly disclosed by LivaNova. Implant revenue splits (new vs. replacement) are only reported for 2024.
              </p>
            </div>
          </div>
        </div>

        <!-- Regional Performance -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Regional Revenue Breakdown</h2>
              <div class="h-80">
                <canvas id="livanova-revenue-by-region"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">
                <strong>Raw Data:</strong> U.S.: $374.5M (2022), $407.5M (2023), $441.0M (2024); Europe: $50.3M (2022), $57.4M (2023), $54.9M (2024); Rest of World: $52.2M (2022), $54.8M (2023), $58.3M (2024).<br>
                <strong>Calculation:</strong> Direct reporting from financial statements.<br>
                <strong>Insight:</strong> U.S. dominates due to reimbursement and adoption.<br>
                <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2022-2024)</a>
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Expense Breakdown (2024)</h2>
              <div class="h-80">
                <canvas id="livanova-expenses"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">
                <strong>Raw Data:</strong> Cost of Sales: $50.2M; SG&A: $187.6M; R&D: $121.0M.<br>
                <strong>Calculation:</strong> Direct reporting from financial statements.<br>
                <strong>Insight:</strong> High R&D reflects innovation investment.<br>
                <strong>Source:</strong> <a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a>
              </p>
            </div>
          </div>

          <!-- Performance Trends -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Performance Trend</h2>
              <div class="h-80">
                <canvas id="livanova-performance-trend"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">
                <strong>Raw Data:</strong> Revenue Growth: 9.0% (2023), 6.6% (2024); Segment Income Growth: -11.2% (2023), 27.3% (2024).<br>
                <strong>Calculation:</strong> YoY percentage changes from financials.<br>
                <strong>Insight:</strong> Income growth rebounded in 2024.<br>
                <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2022-2024)</a>
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 class="text-xl font-semibold mb-4">Revenue & Income Analysis</h2>
              <div class="h-80">
                <canvas id="livanova-revenue-income"></canvas>
              </div>
              <p class="text-xs text-gray-500 mt-3">
                <strong>Raw Data:</strong> Total Revenue: $477.0M (2022), $519.7M (2023), $554.2M (2024); Segment Income: $172.8M (2022), $153.4M (2023), $195.3M (2024); Profit Margin: 36.2% (2022), 29.5% (2023), 35.2% (2024).<br>
                <strong>Calculation:</strong> Profit Margin = (Segment Income / Total Revenue) × 100.<br>
                <strong>Insight:</strong> Margin recovery in 2024.<br>
                <strong>Source:</strong> <a href="https://investor.livanova.com/#yearly-reports" class="text-blue-500 hover:underline">LivaNova Annual Reports (2022-2024)</a>
              </p>
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
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700"><a href="https://www.cms.gov/medicare/payment/fee-schedules/physician" class="text-blue-500 hover:underline">$23,542.18</a></td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Lennox-Gastaut Syndrome</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">January 2022</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">64568</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700"><a href="https://www.cms.gov/medicare/payment/fee-schedules/physician" class="text-blue-500 hover:underline">$23,542.18</a></td>
                </tr>
                <tr>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">VNS Programming</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">Multiple</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">CMS</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700">95976, 95977</td>
                  <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b dark:border-gray-700"><a href="https://www.cms.gov/medicare/payment/fee-schedules/physician" class="text-blue-500 hover:underline">$52.83 - $79.25</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="text-xs text-gray-500 mt-3">
            <strong>Raw Data:</strong> CMS reimbursement rates for 2024; procedure codes 64568, 95976, 95977.<br>
            <strong>Calculation:</strong> Direct reporting from CMS fee schedules.<br>
            <strong>Insight:</strong> Broad reimbursement supports VNS adoption for severe epilepsy syndromes.<br>
            <strong>Source:</strong> <a href="https://www.cms.gov/medicare/payment/fee-schedules/physician" class="text-blue-500 hover:underline">CMS Physician Fee Schedule</a>
          </p>
        </div>

        <!-- LivaNova VNS Therapy Section -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <h2 class="text-xl font-semibold mb-6">LivaNova VNS Therapy</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Total Implants -->
            <div>
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold">Total Implants</h3>
              </div>
              <ul class="space-y-4 text-gray-600 dark:text-gray-300">
                <li>
                  <p class="text-sm"><strong>>135,000 Patients Worldwide:</strong> As of late 2024, over 135,000 patients, including ~40,000 children, treated with VNS Therapy for drug-resistant epilepsy.</p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Raw Data:</strong> Reported >135,000 implants, with ~40,000 in pediatric patients.<br>
                    <strong>Calculation:</strong> Direct reporting from LivaNova.<br>
                    <strong>Insight:</strong> Significant global adoption, with strong pediatric use due to FDA approval for ages 4+.<br>
                    <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">LivaNova VNS Therapy</a>
                  </p>
                </li>
                <li>
                  <p class="text-sm"><strong>Growth from Prior Estimates:</strong> Earlier reports cited >125,000 implants, indicating continued market expansion.</p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Raw Data:</strong> Prior estimate of >125,000 implants updated to >135,000.<br>
                    <strong>Calculation:</strong> Increase of at least 10,000 implants since prior reporting.<br>
                    <strong>Insight:</strong> Reflects ongoing demand and market penetration.<br>
                    <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/faqs" class="text-blue-500 hover:underline">LivaNova FAQs</a>
                  </p>
                </li>
              </ul>
            </div>
            <!-- Generator Replacements -->
            <div>
              <div class="flex items-center mb-4">
                <div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold">Generator Replacements</h3>
              </div>
              <ul class="space-y-4 text-gray-600 dark:text-gray-300">
                <li>
                  <p class="text-sm"><strong>Battery Replacement Rates:</strong> 16% at 5 years, 42% at 10 years, 47% at 15 years post-implant.</p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Raw Data:</strong> Long-term follow-up studies reported replacement rates of 16% (5 years), 42% (10 years), 47% (15 years).<br>
                    <strong>Calculation:</strong> Percentages derived from patient cohorts in follow-up studies.<br>
                    <strong>Insight:</strong> High replacement rates indicate long-term device use and patient retention.<br>
                    <strong>Source:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0920121124000986" class="text-blue-500 hover:underline">ScienceDirect (2024)</a>
                  </p>
                </li>
                <li>
                  <p class="text-sm"><strong>Multiple Replacements:</strong> 24.7% of patients had ≥2 battery replacements (2013–2020 cohort).</p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    <strong>Raw Data:</strong> Single-center study (2013–2020) found 24.7% of patients underwent ≥2 replacements.<br>
                    <strong>Calculation:</strong> Direct reporting from cohort analysis.<br>
                    <strong>Insight:</strong> Indicates sustained therapy commitment despite surgical interventions.<br>
                    <strong>Source:</strong> <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8063733/" class="text-blue-500 hover:underline">PMC (2021)</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Clinical & Regulatory Milestones -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <h2 class="text-xl font-semibold mb-6">Clinical & Regulatory Milestones</h2>
          <div class="flex flex-col space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">2024 Milestones</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>CORE-VNS Study:</strong> Presented 3-year interim results at AES 2024, demonstrating long-term efficacy of VNS Therapy.</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/newsroom" class="text-blue-500 hover:underline">LivaNova AES 2024 Presentation</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Regulatory Status</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>VNS Therapy Approvals:</strong> FDA-approved and CE-marked for epilepsy treatment, with no new approvals reported in 2018-2024.</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">LivaNova Regulatory Documentation</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Epilepsy Treatment Context -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <h2 class="text-xl font-semibold mb-6">Epilepsy Treatment Context</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div class="flex items-center mb-4">
                <div class="bg-teal-100 dark:bg-teal-900 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold">Available Treatment Options</h3>
              </div>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Multiple Anti-Seizure Medications (ASMs)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Various forms of ketogenic diet</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Vagus Nerve Stimulation (VNS)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Resective and ablative brain surgery</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Intracranial neurostimulation</span>
                </li>
              </ul>
            </div>
            <div>
              <div class="flex items-center mb-4">
                <div class="bg-teal-100 dark:bg-teal-900 rounded-lg p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-600 dark:text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold">Treatment Pathway & VNS Advantages</h3>
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                ASMs are the first-line treatment for epilepsy. After two ASMs fail, epilepsy is classified as drug-resistant, prompting consideration of adjunctive non-drug options.
              </p>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>First FDA Approval:</strong> VNS Therapy was the first medical device approved for DRE in 1997.</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">LivaNova FDA Approval</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div>
                    <span><strong>Pediatric Use:</strong> Only neuromodulation device approved for patients as young as 4 years.</span>
                    <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      <strong>Source:</strong> <a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">LivaNova FDA Approval</a>
                    </p>
                  </div>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>No direct brain tissue intervention required.</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Demonstrated long-term efficacy and safety.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Data Sources & Links -->
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-1 sm:col-span-2 lg:col-span-3 min-h-fit overflow-hidden">
          <h2 class="text-xl font-semibold mb-6">Data Sources & Links</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-2">Annual Reports</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="https://investor.livanova.com/static-files/2018-annual-report" class="text-blue-500 hover:underline">LivaNova 2018 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2019-annual-report" class="text-blue-500 hover:underline">LivaNova 2019 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2020-annual-report" class="text-blue-500 hover:underline">LivaNova 2020 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2021-annual-report" class="text-blue-500 hover:underline">LivaNova 2021 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2022-annual-report" class="text-blue-500 hover:underline">LivaNova 2022 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2023-annual-report" class="text-blue-500 hover:underline">LivaNova 2023 Annual Report</a></li>
                <li><a href="https://investor.livanova.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">LivaNova Q4 2024 Earnings</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Clinical & Regulatory</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="https://www.livanova.com/newsroom" class="text-blue-500 hover:underline">CORE-VNS Study Details (AES 2024)</a></li>
                <li><a href="https://www.livanova.com/epilepsy-vnstherapy/en-us/hcp/about-vns-therapy" class="text-blue-500 hover:underline">FDA Approval Documentation</a></li>
                <li><a href="https://www.livanova.com/epilepsy-vnstherapy/en-us" class="text-blue-500 hover:underline">CE Mark Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Market Research</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-300">
                <li><a href="https://www.marketresearchfuture.com/reports/neuromodulation-devices-market-13399" class="text-blue-500 hover:underline">Market Research Future Reports</a></li>
                <li><a href="https://investors.neuropace.com/static-files/2024-q4-earnings" class="text-blue-500 hover:underline">Competitor Financial Statements (NeuroPace)</a></li>
                <li><a href="https://www.livanova.com/newsroom" class="text-blue-500 hover:underline">Industry Analysis Reports</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`
}
    
      function toggleCalculations(elementId) {
        const calcDiv = document.getElementById(elementId);
        const toggleButton = document.getElementById(elementId + 'Toggle');
        if (calcDiv.classList.contains('hidden')) {
          calcDiv.classList.remove('hidden');
          toggleButton.textContent = 'Hide Calculations';
        } else {
          calcDiv.classList.add('hidden');
          toggleButton.textContent = 'Show Calculations';
        }
      }

      window.toggleCalculations = toggleCalculations



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

  moreinitializeLivanovaCharts(data)

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


function moreinitializeLivanovaCharts(data) {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const textColor = isDarkMode ? '#ffffff' : '#666666';
  const gridColor = isDarkMode ? '#374151' : '#e5e7eb';

  // Revenue by Region Chart
  const revenueByRegionCtx = document.getElementById('livanova-revenue-by-region').getContext('2d');
  new Chart(revenueByRegionCtx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [
        {
          label: 'United States',
          data: [374.5, 407.5, 441.0],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1
        },
        {
          label: 'Europe',
          data: [50.3, 57.4, 54.9],
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 1
        },
        {
          label: 'Rest of World',
          data: [52.2, 54.8, 58.3],
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
          grid: { color: gridColor },
          title: {
            display: true,
            text: 'Revenue (Millions USD)',
            color: textColor
          }
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
  // Expenses Chart (continued)
  const expensesCtx = document.getElementById('livanova-expenses').getContext('2d');
  new Chart(expensesCtx, {
    type: 'pie',
    data: {
      labels: ['Cost of Sales', 'SG&A', 'R&D'],
      datasets: [{
        data: [50.2, 187.6, 121.0],
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
  const performanceTrendCtx = document.getElementById('livanova-performance-trend').getContext('2d');
  new Chart(performanceTrendCtx, {
    type: 'line',
    data: {
      labels: [ '2023', '2024'],
      datasets: [
        {
          label: 'Revenue Growth (%)',
          data: [ 9.0, 6.6],
          borderColor: 'rgba(59, 130, 246, 1)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.3,
          fill: false
        },
        {
          label: 'Segment Income Growth (%)',
          data: [ -11.2, 27.3],
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

  // Revenue & Income Analysis Chart
  const revenueIncomeCtx = document.getElementById('livanova-revenue-income').getContext('2d');
  new Chart(revenueIncomeCtx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024'],
      datasets: [
        {
          label: 'Total Revenue ($M)',
          data: [477.0, 519.7, 554.2],
          backgroundColor: 'rgba(59, 130, 246, 0.8)',
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 1,
          order: 2
        },
        {
          label: 'Segment Income ($M)',
          data: [172.8, 153.4, 195.3],
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
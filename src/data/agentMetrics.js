/**
 * Mirrors clients/bed-bath-beyond/contacts/agent_metrics.json (qiq-dataset-builder output).
 * Numeric fields are direct field lookups except: firstQa (algebraically derived from
 * qaScore/continuationQa/volume splits, never invented) and qaSeries (an illustrative
 * interpolation ending exactly on the real qaScore value, the same documented method
 * used for exec-level weekly trends in executiveConstants.js — the dataset builder run
 * for this client did not emit a qaSeries field directly).
 * Coaching card copy is authored by qiq-content-writer from each agent's own
 * coachingGaps evidence (topic, severity, n, of, sharePct, categories) — never a team
 * average presented as personal. This demo uses illustrative, synthetic data —
 * Bed Bath & Beyond has not shared operational data with QiQ (see story-spec.json).
 */

export const WK_LABELS = [
  "W1",
  "W2",
  "W3",
  "W4",
  "W5"
]

export const COACHING_WEEK_INDEX = 1

export const AGENT_METRICS = {
  "ayanda-mokoena": {
    name: "Ayanda Mokoena",
    slug: "ayanda-mokoena",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 145,
    firstContacts: 93,
    continuationContacts: 52,
    ahtSeconds: 326,
    ahtSeries: [
      366,
      301,
      322,
      344,
      292
    ],
    fcrPct: 89.7,
    fcrSeries: [
      84.0,
      89.3,
      90.9,
      94.4,
      87.0
    ],
    csat: 3.4,
    csatSeries: [
      3.56,
      3.18,
      3.42,
      3.47,
      3.35
    ],
    firstCsat: 4.23,
    continuationCsat: 1.92,
    qaScore: 87.4,
    qaSeries: [
      88.2,
      88.3,
      87.8,
      87.5,
      87.4
    ],
    processAdherencePct: 97.2,
    resolutionRatePct: 89.7,
    firstQa: 86.7,
    continuationQa: 88.7,
    criticalFailures: 26,
    criticalFailureSeries: [
      4,
      5,
      5,
      5,
      7
    ],
    empathy: 3.4,
    behaviourFirst: {
      clarity: 4.26,
      ownership: 4.13,
      listening: 4.24,
      professionalism: 4.3,
      empathy: 4.21,
      managing_frustration: 3.99
    },
    behaviourContinuation: {
      clarity: 3.51,
      ownership: 2.15,
      listening: 2.99,
      professionalism: 4.14,
      empathy: 1.96,
      managing_frustration: 2.2
    },
    coachingPack: {
      packId: "pack-bbb-ayanda-mokoena",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 145 contacts, starting with 47 follow-up contacts on Warranty & RMA Exceptions.",
      packReason: "Built from your own contacts this period, 96 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 187,
      packWordCount: 467,
      cards: [
        {
          cardId: "CARD-AYANDA-MOKOENA-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Warranty & RMA Exceptions",
          personalNote: "47 of your 52 contacts this period (90.4%) mostly on Warranty & RMA Exceptions and Order Tracking & Delivery.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 135,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "47 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-AYANDA-MOKOENA-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Warranty & RMA Exceptions",
          personalNote: "24 of your 145 contacts this period (16.6%) mostly on Warranty & RMA Exceptions and General Shopping / Pre-Sale.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 128,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "24 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-AYANDA-MOKOENA-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "20 of your 145 contacts this period (13.8%) mostly on Warranty & RMA Exceptions.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 116,
          estimatedDurationSeconds: 46,
          _severity: "high",
          _metric: "20 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-AYANDA-MOKOENA-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Warranty & RMA Exceptions",
          personalNote: "5 of your 145 contacts this period (3.4%) mostly on Warranty & RMA Exceptions and Returns & Refunds.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 88,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "5 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "ayanda-sithole": {
    name: "Ayanda Sithole",
    slug: "ayanda-sithole",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 112,
    firstContacts: 82,
    continuationContacts: 30,
    ahtSeconds: 344,
    ahtSeries: [
      345,
      365,
      338,
      348,
      320
    ],
    fcrPct: 88.4,
    fcrSeries: [
      80.0,
      86.4,
      87.5,
      100.0,
      88.2
    ],
    csat: 3.44,
    csatSeries: [
      2.9,
      3.36,
      3.78,
      3.71,
      3.18
    ],
    firstCsat: 4.05,
    continuationCsat: 1.77,
    qaScore: 85.4,
    qaSeries: [
      86.7,
      86.2,
      86.1,
      85.6,
      85.4
    ],
    processAdherencePct: 98.2,
    resolutionRatePct: 88.4,
    firstQa: 86.2,
    continuationQa: 83.1,
    criticalFailures: 12,
    criticalFailureSeries: [
      4,
      1,
      4,
      1,
      2
    ],
    empathy: 3.69,
    behaviourFirst: {
      clarity: 4.27,
      ownership: 4.1,
      listening: 4.14,
      professionalism: 4.36,
      empathy: 4.31,
      managing_frustration: 3.95
    },
    behaviourContinuation: {
      clarity: 3.41,
      ownership: 2.16,
      listening: 3.27,
      professionalism: 4.07,
      empathy: 2.0,
      managing_frustration: 2.13
    },
    coachingPack: {
      packId: "pack-bbb-ayanda-sithole",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 112 contacts, starting with 28 follow-up contacts on Returns & Refunds.",
      packReason: "Built from your own contacts this period, 37 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 186,
      packWordCount: 464,
      cards: [
        {
          cardId: "CARD-AYANDA-SITHOLE-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Returns & Refunds",
          personalNote: "28 of your 30 contacts this period (93.3%) mostly on Returns & Refunds and Damaged / Defective Items.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "28 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-AYANDA-SITHOLE-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Returns & Refunds",
          personalNote: "5 of your 112 contacts this period (4.5%) mostly on Returns & Refunds and Escalations / Other.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 126,
          estimatedDurationSeconds: 50,
          _severity: "high",
          _metric: "5 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-AYANDA-SITHOLE-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "3 of your 112 contacts this period (2.7%) mostly on Warranty & RMA Exceptions and Escalations / Other.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 120,
          estimatedDurationSeconds: 48,
          _severity: "high",
          _metric: "3 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-AYANDA-SITHOLE-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Damaged / Defective Items",
          personalNote: "1 of your 112 contacts this period (0.9%) mostly on Damaged / Defective Items.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 84,
          estimatedDurationSeconds: 34,
          _severity: "medium",
          _metric: "1 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "bongani-molefe": {
    name: "Bongani Molefe",
    slug: "bongani-molefe",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 122,
    firstContacts: 90,
    continuationContacts: 32,
    ahtSeconds: 344,
    ahtSeries: [
      351,
      368,
      325,
      311,
      366
    ],
    fcrPct: 90.2,
    fcrSeries: [
      84.6,
      93.5,
      94.4,
      86.2,
      94.4
    ],
    csat: 3.57,
    csatSeries: [
      3.77,
      3.61,
      3.5,
      3.31,
      3.72
    ],
    firstCsat: 4.13,
    continuationCsat: 2.0,
    qaScore: 87.4,
    qaSeries: [
      88.7,
      88.5,
      88.0,
      87.5,
      87.4
    ],
    processAdherencePct: 95.1,
    resolutionRatePct: 90.2,
    firstQa: 88.1,
    continuationQa: 85.4,
    criticalFailures: 16,
    criticalFailureSeries: [
      3,
      2,
      5,
      4,
      2
    ],
    empathy: 3.62,
    behaviourFirst: {
      clarity: 4.2,
      ownership: 4.03,
      listening: 4.05,
      professionalism: 4.41,
      empathy: 4.23,
      managing_frustration: 3.99
    },
    behaviourContinuation: {
      clarity: 3.72,
      ownership: 2.18,
      listening: 3.03,
      professionalism: 4.19,
      empathy: 1.9,
      managing_frustration: 2.36
    },
    coachingPack: {
      packId: "pack-bbb-bongani-molefe",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 122 contacts, starting with 30 follow-up contacts on Returns & Refunds.",
      packReason: "Built from your own contacts this period, 46 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 185,
      packWordCount: 462,
      cards: [
        {
          cardId: "CARD-BONGANI-MOLEFE-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Returns & Refunds",
          personalNote: "30 of your 32 contacts this period (93.8%) mostly on Returns & Refunds and Escalations / Other.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 133,
          estimatedDurationSeconds: 53,
          _severity: "high",
          _metric: "30 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-BONGANI-MOLEFE-2",
          priorityRank: 2,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Escalations / Other",
          personalNote: "6 of your 122 contacts this period (4.9%) mostly on Escalations / Other.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 115,
          estimatedDurationSeconds: 46,
          _severity: "high",
          _metric: "6 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-BONGANI-MOLEFE-3",
          priorityRank: 3,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Escalations / Other",
          personalNote: "6 of your 122 contacts this period (4.9%) mostly on Escalations / Other and Account & Multi-Brand Policy.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "6 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-BONGANI-MOLEFE-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Returns & Refunds",
          personalNote: "4 of your 122 contacts this period (3.3%) mostly on Returns & Refunds and Escalations / Other.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 87,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "4 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "bongani-ndlovu": {
    name: "Bongani Ndlovu",
    slug: "bongani-ndlovu",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 106,
    firstContacts: 68,
    continuationContacts: 38,
    ahtSeconds: 319,
    ahtSeries: [
      333,
      290,
      310,
      343,
      334
    ],
    fcrPct: 84.9,
    fcrSeries: [
      90.0,
      78.6,
      84.2,
      85.7,
      86.7
    ],
    csat: 3.36,
    csatSeries: [
      3.53,
      3.0,
      3.47,
      3.71,
      3.2
    ],
    firstCsat: 4.16,
    continuationCsat: 1.92,
    qaScore: 88.8,
    qaSeries: [
      87.1,
      88.0,
      88.4,
      88.2,
      88.8
    ],
    processAdherencePct: 98.1,
    resolutionRatePct: 84.9,
    firstQa: 90.7,
    continuationQa: 85.4,
    criticalFailures: 14,
    criticalFailureSeries: [
      5,
      6,
      2,
      1,
      0
    ],
    empathy: 3.34,
    behaviourFirst: {
      clarity: 4.16,
      ownership: 3.89,
      listening: 4.09,
      professionalism: 4.46,
      empathy: 4.05,
      managing_frustration: 4.0
    },
    behaviourContinuation: {
      clarity: 3.76,
      ownership: 2.25,
      listening: 2.93,
      professionalism: 4.12,
      empathy: 2.06,
      managing_frustration: 2.32
    },
    coachingPack: {
      packId: "pack-bbb-bongani-ndlovu",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 106 contacts, starting with 35 follow-up contacts on Order Tracking & Delivery.",
      packReason: "Built from your own contacts this period, 45 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 188,
      packWordCount: 469,
      cards: [
        {
          cardId: "CARD-BONGANI-NDLOVU-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Order Tracking & Delivery",
          personalNote: "35 of your 38 contacts this period (92.1%) mostly on Order Tracking & Delivery and Returns & Refunds.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "35 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-BONGANI-NDLOVU-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Returns & Refunds",
          personalNote: "4 of your 106 contacts this period (3.8%) mostly on Returns & Refunds and Billing & Coupon Errors.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "4 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-BONGANI-NDLOVU-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "3 of your 106 contacts this period (2.8%) mostly on Warranty & RMA Exceptions and Escalations / Other.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 120,
          estimatedDurationSeconds: 48,
          _severity: "high",
          _metric: "3 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-BONGANI-NDLOVU-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Order Tracking & Delivery",
          personalNote: "3 of your 106 contacts this period (2.8%) mostly on Order Tracking & Delivery and Returns & Refunds.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 88,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "3 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "nomsa-jacobs": {
    name: "Nomsa Jacobs",
    slug: "nomsa-jacobs",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 110,
    firstContacts: 74,
    continuationContacts: 36,
    ahtSeconds: 326,
    ahtSeries: [
      296,
      335,
      309,
      353,
      334
    ],
    fcrPct: 86.4,
    fcrSeries: [
      95.2,
      72.7,
      81.0,
      91.3,
      91.3
    ],
    csat: 3.4,
    csatSeries: [
      3.29,
      3.41,
      3.33,
      3.52,
      3.43
    ],
    firstCsat: 4.11,
    continuationCsat: 1.94,
    qaScore: 88.9,
    qaSeries: [
      88.7,
      88.3,
      88.4,
      89.0,
      88.9
    ],
    processAdherencePct: 97.3,
    resolutionRatePct: 86.4,
    firstQa: 89.5,
    continuationQa: 87.6,
    criticalFailures: 12,
    criticalFailureSeries: [
      3,
      2,
      1,
      2,
      4
    ],
    empathy: 3.52,
    behaviourFirst: {
      clarity: 4.16,
      ownership: 4.0,
      listening: 4.13,
      professionalism: 4.48,
      empathy: 4.26,
      managing_frustration: 3.87
    },
    behaviourContinuation: {
      clarity: 3.78,
      ownership: 2.25,
      listening: 2.92,
      professionalism: 4.2,
      empathy: 2.01,
      managing_frustration: 2.3
    },
    coachingPack: {
      packId: "pack-bbb-nomsa-jacobs",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 110 contacts, starting with 30 follow-up contacts on Order Tracking & Delivery.",
      packReason: "Built from your own contacts this period, 43 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 187,
      packWordCount: 468,
      cards: [
        {
          cardId: "CARD-NOMSA-JACOBS-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Order Tracking & Delivery",
          personalNote: "30 of your 36 contacts this period (83.3%) mostly on Order Tracking & Delivery and General Shopping / Pre-Sale.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 135,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "30 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-NOMSA-JACOBS-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 General Shopping / Pre-Sale",
          personalNote: "8 of your 110 contacts this period (7.3%) mostly on General Shopping / Pre-Sale and Damaged / Defective Items.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 128,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "8 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-NOMSA-JACOBS-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "1 of your 110 contacts this period (0.9%) mostly on Warranty & RMA Exceptions.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 116,
          estimatedDurationSeconds: 46,
          _severity: "medium",
          _metric: "1 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-NOMSA-JACOBS-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Order Tracking & Delivery",
          personalNote: "4 of your 110 contacts this period (3.6%) mostly on Order Tracking & Delivery and General Shopping / Pre-Sale.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 89,
          estimatedDurationSeconds: 36,
          _severity: "medium",
          _metric: "4 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "nomsa-ndlovu": {
    name: "Nomsa Ndlovu",
    slug: "nomsa-ndlovu",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 117,
    firstContacts: 85,
    continuationContacts: 32,
    ahtSeconds: 341,
    ahtSeries: [
      345,
      336,
      366,
      332,
      322
    ],
    fcrPct: 89.7,
    fcrSeries: [
      83.3,
      100.0,
      88.5,
      90.5,
      85.0
    ],
    csat: 3.46,
    csatSeries: [
      3.33,
      3.38,
      3.81,
      3.57,
      3.15
    ],
    firstCsat: 4.07,
    continuationCsat: 1.84,
    qaScore: 86.9,
    qaSeries: [
      87.6,
      87.0,
      87.4,
      87.1,
      86.9
    ],
    processAdherencePct: 95.7,
    resolutionRatePct: 89.7,
    firstQa: 88.1,
    continuationQa: 83.8,
    criticalFailures: 13,
    criticalFailureSeries: [
      1,
      4,
      2,
      2,
      4
    ],
    empathy: 3.59,
    behaviourFirst: {
      clarity: 4.13,
      ownership: 4.1,
      listening: 4.13,
      professionalism: 4.35,
      empathy: 4.22,
      managing_frustration: 4.05
    },
    behaviourContinuation: {
      clarity: 3.45,
      ownership: 2.1,
      listening: 3.03,
      professionalism: 3.97,
      empathy: 1.9,
      managing_frustration: 2.28
    },
    coachingPack: {
      packId: "pack-bbb-nomsa-ndlovu",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 117 contacts, starting with 29 follow-up contacts on Order Tracking & Delivery.",
      packReason: "Built from your own contacts this period, 43 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 186,
      packWordCount: 466,
      cards: [
        {
          cardId: "CARD-NOMSA-NDLOVU-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Order Tracking & Delivery",
          personalNote: "29 of your 32 contacts this period (90.6%) mostly on Order Tracking & Delivery and Returns & Refunds.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "29 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-NOMSA-NDLOVU-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Warranty & RMA Exceptions",
          personalNote: "7 of your 117 contacts this period (6.0%) mostly on Warranty & RMA Exceptions and Returns & Refunds.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "7 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-NOMSA-NDLOVU-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "3 of your 117 contacts this period (2.6%) mostly on Warranty & RMA Exceptions.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 116,
          estimatedDurationSeconds: 46,
          _severity: "high",
          _metric: "3 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-NOMSA-NDLOVU-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Damaged / Defective Items",
          personalNote: "4 of your 117 contacts this period (3.4%) mostly on Damaged / Defective Items and Order Tracking & Delivery.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 89,
          estimatedDurationSeconds: 36,
          _severity: "medium",
          _metric: "4 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "palesa-zulu": {
    name: "Palesa Zulu",
    slug: "palesa-zulu",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 122,
    firstContacts: 96,
    continuationContacts: 26,
    ahtSeconds: 351,
    ahtSeries: [
      342,
      369,
      331,
      403,
      323
    ],
    fcrPct: 85.2,
    fcrSeries: [
      90.0,
      86.2,
      87.9,
      94.4,
      68.2
    ],
    csat: 3.64,
    csatSeries: [
      3.6,
      3.86,
      3.42,
      4.11,
      3.32
    ],
    firstCsat: 4.09,
    continuationCsat: 1.96,
    qaScore: 88.3,
    qaSeries: [
      87.0,
      87.3,
      87.8,
      88.1,
      88.3
    ],
    processAdherencePct: 96.7,
    resolutionRatePct: 85.2,
    firstQa: 89.3,
    continuationQa: 84.5,
    criticalFailures: 9,
    criticalFailureSeries: [
      2,
      1,
      2,
      0,
      4
    ],
    empathy: 3.81,
    behaviourFirst: {
      clarity: 4.2,
      ownership: 3.96,
      listening: 4.14,
      professionalism: 4.4,
      empathy: 4.3,
      managing_frustration: 3.98
    },
    behaviourContinuation: {
      clarity: 3.78,
      ownership: 2.27,
      listening: 3.09,
      professionalism: 4.21,
      empathy: 2.01,
      managing_frustration: 2.18
    },
    coachingPack: {
      packId: "pack-bbb-palesa-zulu",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 122 contacts, starting with 24 follow-up contacts on Returns & Refunds.",
      packReason: "Built from your own contacts this period, 35 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 188,
      packWordCount: 471,
      cards: [
        {
          cardId: "CARD-PALESA-ZULU-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Returns & Refunds",
          personalNote: "24 of your 26 contacts this period (92.3%) mostly on Returns & Refunds and Account & Multi-Brand Policy.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "24 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-PALESA-ZULU-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 General Shopping / Pre-Sale",
          personalNote: "6 of your 122 contacts this period (4.9%) mostly on General Shopping / Pre-Sale and Warranty & RMA Exceptions.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 128,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "6 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-PALESA-ZULU-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "3 of your 122 contacts this period (2.5%) mostly on Warranty & RMA Exceptions and Escalations / Other.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 120,
          estimatedDurationSeconds: 48,
          _severity: "high",
          _metric: "3 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-PALESA-ZULU-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Account & Multi-Brand Policy",
          personalNote: "2 of your 122 contacts this period (1.6%) mostly on Account & Multi-Brand Policy and Damaged / Defective Items.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 89,
          estimatedDurationSeconds: 36,
          _severity: "medium",
          _metric: "2 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "sipho-molefe": {
    name: "Sipho Molefe",
    slug: "sipho-molefe",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 101,
    firstContacts: 62,
    continuationContacts: 39,
    ahtSeconds: 316,
    ahtSeries: [
      321,
      285,
      306,
      334,
      330
    ],
    fcrPct: 85.1,
    fcrSeries: [
      86.4,
      94.1,
      87.0,
      77.3,
      82.4
    ],
    csat: 3.37,
    csatSeries: [
      3.32,
      3.18,
      3.17,
      3.5,
      3.71
    ],
    firstCsat: 4.27,
    continuationCsat: 1.92,
    qaScore: 87.0,
    qaSeries: [
      87.7,
      87.5,
      87.7,
      87.0,
      87.0
    ],
    processAdherencePct: 97.0,
    resolutionRatePct: 85.1,
    firstQa: 88.3,
    continuationQa: 84.9,
    criticalFailures: 19,
    criticalFailureSeries: [
      4,
      5,
      3,
      5,
      2
    ],
    empathy: 3.35,
    behaviourFirst: {
      clarity: 4.17,
      ownership: 4.06,
      listening: 4.07,
      professionalism: 4.37,
      empathy: 4.21,
      managing_frustration: 4.0
    },
    behaviourContinuation: {
      clarity: 3.76,
      ownership: 2.24,
      listening: 2.93,
      professionalism: 4.15,
      empathy: 1.98,
      managing_frustration: 2.28
    },
    coachingPack: {
      packId: "pack-bbb-sipho-molefe",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 101 contacts, starting with 37 follow-up contacts on Returns & Refunds.",
      packReason: "Built from your own contacts this period, 59 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 188,
      packWordCount: 469,
      cards: [
        {
          cardId: "CARD-SIPHO-MOLEFE-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Returns & Refunds",
          personalNote: "37 of your 39 contacts this period (94.9%) mostly on Returns & Refunds and Order Tracking & Delivery.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "37 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-SIPHO-MOLEFE-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Warranty & RMA Exceptions",
          personalNote: "10 of your 101 contacts this period (9.9%) mostly on Warranty & RMA Exceptions and Returns & Refunds.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "10 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-SIPHO-MOLEFE-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "4 of your 101 contacts this period (4.0%) mostly on Warranty & RMA Exceptions and Escalations / Other.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 120,
          estimatedDurationSeconds: 48,
          _severity: "high",
          _metric: "4 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-SIPHO-MOLEFE-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Returns & Refunds",
          personalNote: "8 of your 101 contacts this period (7.9%) mostly on Returns & Refunds and Order Tracking & Delivery.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 88,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "8 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "vusi-pretorius": {
    name: "Vusi Pretorius",
    slug: "vusi-pretorius",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 130,
    firstContacts: 99,
    continuationContacts: 31,
    ahtSeconds: 344,
    ahtSeries: [
      357,
      352,
      344,
      363,
      307
    ],
    fcrPct: 86.9,
    fcrSeries: [
      88.5,
      88.2,
      95.5,
      76.2,
      85.2
    ],
    csat: 3.62,
    csatSeries: [
      3.77,
      3.85,
      3.68,
      3.33,
      3.33
    ],
    firstCsat: 4.12,
    continuationCsat: 2.0,
    qaScore: 88.4,
    qaSeries: [
      89.8,
      89.6,
      89.3,
      88.9,
      88.4
    ],
    processAdherencePct: 95.4,
    resolutionRatePct: 86.9,
    firstQa: 88.8,
    continuationQa: 87.2,
    criticalFailures: 14,
    criticalFailureSeries: [
      4,
      5,
      1,
      2,
      2
    ],
    empathy: 3.71,
    behaviourFirst: {
      clarity: 4.3,
      ownership: 4.03,
      listening: 4.14,
      professionalism: 4.33,
      empathy: 4.24,
      managing_frustration: 4.14
    },
    behaviourContinuation: {
      clarity: 3.57,
      ownership: 2.15,
      listening: 2.94,
      professionalism: 3.95,
      empathy: 2.01,
      managing_frustration: 2.28
    },
    coachingPack: {
      packId: "pack-bbb-vusi-pretorius",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 130 contacts, starting with 27 follow-up contacts on Returns & Refunds.",
      packReason: "Built from your own contacts this period, 54 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 187,
      packWordCount: 468,
      cards: [
        {
          cardId: "CARD-VUSI-PRETORIUS-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Returns & Refunds",
          personalNote: "27 of your 31 contacts this period (87.1%) mostly on Returns & Refunds and Escalations / Other.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 133,
          estimatedDurationSeconds: 53,
          _severity: "high",
          _metric: "27 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-VUSI-PRETORIUS-2",
          priorityRank: 2,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Escalations / Other",
          personalNote: "9 of your 130 contacts this period (6.9%) mostly on Escalations / Other and Warranty & RMA Exceptions.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 120,
          estimatedDurationSeconds: 48,
          _severity: "high",
          _metric: "9 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-VUSI-PRETORIUS-3",
          priorityRank: 3,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Escalations / Other",
          personalNote: "9 of your 130 contacts this period (6.9%) mostly on Escalations / Other and Warranty & RMA Exceptions.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "9 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-VUSI-PRETORIUS-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Escalations / Other",
          personalNote: "9 of your 130 contacts this period (6.9%) mostly on Escalations / Other and Account & Multi-Brand Policy.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 88,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "9 contacts flagged for count the chasing"
        }
      ]
    }
  },
  "zanele-nkosi": {
    name: "Zanele Nkosi",
    slug: "zanele-nkosi",
    role: "Customer Support Agent",
    team: "Jordan Ellis",
    volume: 140,
    firstContacts: 105,
    continuationContacts: 35,
    ahtSeconds: 340,
    ahtSeries: [
      336,
      348,
      350,
      306,
      364
    ],
    fcrPct: 88.6,
    fcrSeries: [
      90.3,
      85.7,
      96.7,
      83.3,
      85.7
    ],
    csat: 3.59,
    csatSeries: [
      3.35,
      3.67,
      3.77,
      3.47,
      3.71
    ],
    firstCsat: 4.1,
    continuationCsat: 2.03,
    qaScore: 89.4,
    qaSeries: [
      88.3,
      88.8,
      88.7,
      89.3,
      89.4
    ],
    processAdherencePct: 93.6,
    resolutionRatePct: 88.6,
    firstQa: 89.0,
    continuationQa: 90.7,
    criticalFailures: 22,
    criticalFailureSeries: [
      5,
      3,
      4,
      7,
      3
    ],
    empathy: 3.69,
    behaviourFirst: {
      clarity: 4.08,
      ownership: 4.05,
      listening: 4.12,
      professionalism: 4.38,
      empathy: 4.26,
      managing_frustration: 3.93
    },
    behaviourContinuation: {
      clarity: 3.74,
      ownership: 2.12,
      listening: 2.95,
      professionalism: 4.15,
      empathy: 1.99,
      managing_frustration: 2.23
    },
    coachingPack: {
      packId: "pack-bbb-zanele-nkosi",
      cycleType: "weekly_insight",
      packSummary: "Four things from your last 140 contacts, starting with 34 follow-up contacts on Warranty & RMA Exceptions.",
      packReason: "Built from your own contacts this period, 64 across these 4 patterns, where a small change in how you opened, routed, or closed would have made the contact easier for the customer.",
      cardCount: 4,
      estimatedPackDurationSeconds: 186,
      packWordCount: 465,
      cards: [
        {
          cardId: "CARD-ZANELE-NKOSI-1",
          priorityRank: 1,
          topicKey: "open_with_incident",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "scenario_example",
          cardShape: "situation_led",
          title: "Start Where They Left Off \u00b7 Warranty & RMA Exceptions",
          personalNote: "34 of your 35 contacts this period (97.1%) mostly on Warranty & RMA Exceptions and Returns & Refunds.",
          coachingFocus: "When a customer is following up on an open return, warranty claim, or tracking issue, say what you can already see before asking them anything new.",
          practicalGuidance: "Sounds like: \"I can see you're following up on the return from last week, let's pick up right where that left off.\" It tells the customer the history came with them, so they're not re-explaining the issue.",
          miniChallenge: "On your next three follow-up contacts, open with what you can already see before your first question.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "One line at the start does most of the work here. The rest of the contact gets easier.",
          wordCount: 134,
          estimatedDurationSeconds: 54,
          _severity: "high",
          _metric: "34 contacts flagged for start where they left off"
        },
        {
          cardId: "CARD-ZANELE-NKOSI-2",
          priorityRank: 2,
          topicKey: "route_forward",
          affectedKpis: [
            "repeat_contact_rate",
            "fcr"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "standard",
          title: "Name Who Has It and When \u00b7 Warranty & RMA Exceptions",
          personalNote: "15 of your 140 contacts this period (10.7%) mostly on Warranty & RMA Exceptions and Returns & Refunds.",
          coachingFocus: "When a case has to move to another team, tell the customer exactly who has it and by when, not just that it's being handled.",
          practicalGuidance: "Sounds like: \"I'm sending this to our warranty exceptions team, and you'll hear back by Thursday at the latest.\" A name and a date is what actually stops the callback.",
          miniChallenge: "On your next escalated or handed-off contact, name the specific team and a specific day before ending the contact.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "A concrete handoff is the difference between a customer who waits and one who calls back tomorrow.",
          wordCount: 127,
          estimatedDurationSeconds: 51,
          _severity: "high",
          _metric: "15 contacts flagged for name who has it and when"
        },
        {
          cardId: "CARD-ZANELE-NKOSI-3",
          priorityRank: 3,
          topicKey: "match_register",
          affectedKpis: [
            "csat"
          ],
          contentType: "scenario_example",
          cardShape: "standard",
          title: "Let the Situation Set the Tone \u00b7 Warranty & RMA Exceptions",
          personalNote: "13 of your 140 contacts this period (9.3%) mostly on Warranty & RMA Exceptions.",
          coachingFocus: "On higher-friction categories like warranty exceptions and policy confusion, match the customer's frustration level instead of defaulting to a scripted, upbeat tone.",
          practicalGuidance: "Sounds like: \"That's frustrating, especially after already dealing with this once, let me actually get to the bottom of it.\" Naming the frustration first buys you room to work the issue.",
          miniChallenge: "Before your next warranty or policy-exception contact, let the customer's tone set your opening line instead of a standard greeting.",
          positiveOpening: "Professionalism holds steady across your first contacts, customers experience you as courteous and composed from the opening line.",
          encouragingClose: "Matching the moment costs nothing and buys you the customer's patience.",
          wordCount: 116,
          estimatedDurationSeconds: 46,
          _severity: "high",
          _metric: "13 contacts flagged for let the situation set the tone"
        },
        {
          cardId: "CARD-ZANELE-NKOSI-4",
          priorityRank: 4,
          topicKey: "acknowledge_effort",
          affectedKpis: [
            "csat",
            "repeat_contact_rate"
          ],
          contentType: "trigger_action_reminder",
          cardShape: "short",
          title: "Count the Chasing \u00b7 Returns & Refunds",
          personalNote: "2 of your 140 contacts this period (1.4%) mostly on Returns & Refunds and General Shopping / Pre-Sale.",
          coachingFocus: "When a customer is on their third-or-later contact about the same issue, acknowledge how many times they've had to follow up before moving into the resolution.",
          practicalGuidance: "Sounds like: \"I know this is the third time you've had to call about this return, that shouldn't have happened, and I want to close it out today.\"",
          miniChallenge: "On your next repeat-contact case, explicitly acknowledge how many times the customer has already reached out.",
          wordCount: 88,
          estimatedDurationSeconds: 35,
          _severity: "medium",
          _metric: "2 contacts flagged for count the chasing"
        }
      ]
    }
  }
}

export const TEAM_AGGREGATES = {
  totalContacts: 1205,
  qaScore: 87.83,
  csat: 3.49,
  firstCsat: 4.13,
  continuationCsat: 1.93,
  ahtSeconds: 336,
  fcrPct: 87.6,
  criticalFailuresTotal: 157,
  agentsWithCriticalFailures: 10
}

export const AGENT_METRIC_ORDER = [
  "ayanda-mokoena",
  "ayanda-sithole",
  "bongani-molefe",
  "bongani-ndlovu",
  "nomsa-jacobs",
  "nomsa-ndlovu",
  "palesa-zulu",
  "sipho-molefe",
  "vusi-pretorius",
  "zanele-nkosi"
]

export const FLAGGED_AGENT_SLUGS = [
  "ayanda-mokoena",
  "zanele-nkosi",
  "sipho-molefe",
  "bongani-molefe"
]

export const CARD_SHAPE_LABELS = {
  standard: "Standard",
  situation_led: "Situation-led",
  short: "Short",
  technique_first: "Technique-first"
}

export const CONTENT_TYPE_LABELS = {
  knowledge_check: "Knowledge check",
  scenario_example: "Scenario",
  trigger_action_reminder: "Trigger and action"
}

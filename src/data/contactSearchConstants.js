import { AGENT_SLUGS } from './agents'

export { AGENT_SLUGS }

export const Q_NAMES = {
  q1: 'Resolution',
  q2: 'Diagnosis',
  q3: 'Efficiency',
  q4: 'Verification',
  q5: 'Escalation',
  q6: 'Expectation Setting',
  q7: 'Communication',
  q8: 'Callback',
  q9: 'Closing the Loop',
  q10: 'Customer Appreciation',
  q11: 'Case Notes',
  q12: 'Internal Process',
  q13: 'Business Policy',
  q14: 'Compliance',
}

export const PASS_FAIL_QS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q11']

export const DEFAULT_FILTERS = {
  agent: 'all',
  source: 'all',
  queue: 'all',
  week: 'all',
  resolution: 'all',
  dateFrom: '2026-08-01',
  dateTo: '2026-09-04',
  scoreFilter: 'all',
  criticalOnly: false,
}

export const WEEK_BOUNDARIES = [
  { start: '2026-08-01', end: '2026-08-07' },
  { start: '2026-08-08', end: '2026-08-14' },
  { start: '2026-08-15', end: '2026-08-21' },
  { start: '2026-08-22', end: '2026-08-28' },
  { start: '2026-08-29', end: '2026-09-04' },
]

/**
 * Hero and flagship contact IDs, verified against the generated contact index
 * (public/data/bbb_contact_index.json). These are the two multi-contact
 * incidents the dataset actually carries an `incident_id` for - the return
 * fee sticker shock incident (Ayanda Mokoena, three contacts, CSAT 5 -> 2 -> 1
 * while QA holds 93 -> 88) and the warranty denial incident (Ayanda Sithole,
 * two contacts, CSAT 5 -> 1 while QA holds 95 -> 91). Both are the contacts
 * the Executive hero narrative refers to by name.
 */
export const HERO_IDS = ['bbb-001201', 'bbb-001202', 'bbb-001203']

export const FLAGSHIP_IDS = ['bbb-001204', 'bbb-001205']

export const SORTABLE_FIELDS = [
  'contact_id',
  'agent_name',
  'call_date',
  'call_category',
  'qa_score',
  'contact_sequence',
]

/**
 * Critical-failure quick links on Contact Search. Every id, agent name, and
 * category below was checked against the generated contact index - each one
 * resolves to a real contact whose agent and category match its label.
 */
export const CF_QUICK_LINKS = [
  { callId: 'bbb-001202', agent: 'Ayanda Mokoena', label: 'Return fee disclosed only after the customer pushed back' },
  { callId: 'bbb-001205', agent: 'Ayanda Sithole', label: 'Warranty claim denied, no replacement SKU available' },
  { callId: 'bbb-000854', agent: 'Bongani Molefe', label: 'Auto-fail · Returns & Refunds' },
  { callId: 'bbb-000867', agent: 'Sipho Molefe', label: 'Auto-fail · Order Tracking & Delivery' },
]

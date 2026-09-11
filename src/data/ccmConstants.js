/** This demo uses illustrative, synthetic data - Bed Bath & Beyond has not shared operational data with QiQ. */
import { MICRO_COACHING_CARDS } from './agents'
import { CRITICAL_FAILURES, FIRST_VS_CONTINUATION, CONTINUATION_CSAT_RECOVERY, TREND as TREND_EXEC, WK_LABELS } from './executiveConstants'
import { formatAht } from '../utils/format'

export { WK_LABELS }
export const COACHING_WEEK_INDEX = 1

export const BEHAVIOUR_PILLAR = {
  clarity_of_communication: { first: 4.3, continuation: 3.7, label: 'Clarity of communication' },
  ownership_of_the_issue: { first: 4.1, continuation: 2.2, label: 'Ownership of the issue' },
  listening_and_responsiveness: { first: 4.2, continuation: 3.0, label: 'Listening and responsiveness' },
  professionalism_and_courtesy: { first: 4.5, continuation: 4.2, label: 'Professionalism and courtesy' },
  empathy_and_acknowledgement: { first: 4.3, continuation: 2.0, label: 'Empathy and acknowledgement' },
  managing_frustration: { first: 4.0, continuation: 2.3, label: 'Managing frustration' },
}

export const COACHING_EFFECT_CONTINUATION_CSAT = CONTINUATION_CSAT_RECOVERY.weekly
export const COACHING_EFFECT_CRITICAL_FAILURES = CRITICAL_FAILURES.weekly

export const MICRO_COACHING_ADOPTION = [
  { id: 'cc1', title: MICRO_COACHING_CARDS[0].title, deployed: 10, takenUp: 8, inProgress: 1, notTouched: 1 },
  { id: 'cc2', title: MICRO_COACHING_CARDS[1].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
  { id: 'cc3', title: MICRO_COACHING_CARDS[2].title, deployed: 10, takenUp: 6, inProgress: 3, notTouched: 1 },
  { id: 'cc4', title: MICRO_COACHING_CARDS[3].title, deployed: 10, takenUp: 5, inProgress: 4, notTouched: 1 },
]

export const CCM_HERO = {
  headline: 'Continuation-cohort CSAT is recovering. Auto-fail QA outcomes have started to follow it down, unevenly.',
  body: 'Per-contact QA sat at 87.8% team-wide and barely moved. Underneath it, 157 contacts auto-failed this period, most of them follow-ups on returns or warranty cases that were already open. Coaching the whole team from week 2 moved continuation-cohort CSAT from 2.1 to 3.5. Auto-fail volume improved unevenly, 35 in week 1 down to 30 by week 5, which is the honest signal that this is a real early result, not a solved problem.',
  firstVsContinuation: FIRST_VS_CONTINUATION,
  paragraphs: [
    {
      lead: 'What we found.',
      text: 'Team QA sat at 87.8% across the 1,205-contact working extract and barely moved across the five weeks. Underneath that average, 157 contacts auto-failed. Most were follow-ups on returns or warranty cases that were already open, and most passed on process, resolution and compliance. They failed on whether anyone acknowledged what the customer had already been through, or disclosed the fee before being asked.',
    },
    {
      lead: 'Why the scorecard missed it.',
      text: 'Split first contacts from continuation contacts and the two populations behave nothing alike. First contacts score 4.1 CSAT against 91.0% QA. Continuation contacts score 1.9 CSAT against 87.5% QA. A 3.5-point QA gap is hiding a 2.2-point CSAT collapse. Per-contact scoring reads each follow-up in isolation, so it never sees that the customer is on their second or third attempt.',
    },
    {
      lead: 'What we changed.',
      text: 'Quality mining named the specific agents and the specific contacts in week 1. Micro Coaching cards were generated from those contacts, not from a generic library, and deployed from week 2. All ten agents carried at least one auto-fail, so this was treated as a team-wide pattern rather than two individuals. Continuation-cohort CSAT moved 2.1, 2.4, 2.8, 3.2, 3.5 across the period.',
    },
    {
      lead: 'What has not moved yet.',
      text: 'Blended CSAT is 3.5 against a 4.3 target and repeat contact rate is still 27.0% against a 15% target. Weekly auto-fails went 35, 34, 29, 29, 30 - a real but uneven improvement, and week 5 is not the low point of the period. That is the honest read four weeks into a behavioural fix on a 24,000-contact population. Continuation CSAT is the leading indicator and it has moved every week; auto-fail volume and repeat contact rate are the lagging pair to judge next quarter. Hold-queue disconnects sit outside this coaching loop entirely - that is a platform fix, not a behavioural one.',
    },
  ],
}

export const COACHING_HEALTH_STATS = [
  { label: 'Micro Coaching cards deployed', value: '4', valueClass: '', sub: 'Per agent, from their own contacts' },
  { label: 'Agents taking up', value: '10/10', valueClass: 'val-amber', sub: 'Team-wide since week 2' },
  { label: 'Auto-fails W5', value: '30', valueClass: 'val-amber', sub: 'Down from 35 peak in week 1' },
  { label: 'Continuation QA', value: '87.5%', valueClass: 'val-amber', sub: 'Near-flat all period, CSAT recovering 2.1 → 3.5' },
]

export const HERO_CHIPS = [
  { text: 'Continuation CSAT 2.1 → 3.5 since coaching', className: 'chip-green', dotColor: '#4ade80' },
  { text: 'Empathy 4.3 → 2.0 on continuation', className: 'chip-red', dotColor: '#fca5a5' },
  { text: 'QA still 87.5% on continuation, auto-fails easing unevenly', className: 'chip-amber', dotColor: '#fbbf24' },
]

export const HERO_STATS = [
  { value: '35 → 30', label: 'Auto-fails across the coaching period, improving but uneven' },
  { value: '87.5%', label: 'Continuation QA, near-flat all period' },
  { value: '1.9', label: 'CSAT vs 4.1 first contact' },
  { value: 'Week 2', label: 'Micro Coaching deployment start' },
  { value: '157', label: 'Auto-fail contacts found by quality mining, full period' },
]

export const QUALITY_SUMMARY = [
  { value: 'Ayanda Mokoena: 87.4% QA · 26 auto-fails', label: 'Highest auto-fail count on the team' },
  { value: 'Zanele Nkosi: 89.4% QA · 22 auto-fails', label: 'Same pattern, same coaching cards' },
  { value: 'Behaviour empathy 2.0', label: 'Biggest pillar gap on continuation' },
  { value: 'Micro Coaching uptake 10/10', label: 'Whole team on incident-first opens since week 2' },
]

export const TREND = {
  aht: TREND_EXEC.aht,
  fcr: TREND_EXEC.fcr,
  csat: COACHING_EFFECT_CONTINUATION_CSAT,
  nps: [6, 7, 8, 9, 9],
  er: TREND_EXEC.esc,
}

export const T1_RESOLUTION = [78, 79, 80, 81, 82]
export const CF_WEEKLY = COACHING_EFFECT_CRITICAL_FAILURES
export const CF_BAR_COLORS = ['#c0392b', '#c0392b', '#d97706', '#d97706', '#d97706']

export const COACHING_LEDGER_ROWS = [
  { agent: 'Ayanda Mokoena', issue: '26 auto-fails with QA 87.4%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Zanele Nkosi', issue: '22 auto-fails with QA 89.4%', topic: 'Name Who Has It and When', deployed: 'Week 2 - Micro Coaching card 2', outcome: 'Continuation CSAT trending up', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Sipho Molefe', issue: '19 auto-fails with QA 87.0%', topic: 'Count the Chasing', deployed: 'Week 2 - Micro Coaching card 4', outcome: 'Improving named owners on close', badges: [{ text: 'Action Needed', className: 'badge badge-red' }, { text: 'TL action required', className: 'badge badge-tl' }], statusCell: true },
  { agent: 'Bongani Molefe', issue: '16 auto-fails with QA 87.4%', topic: 'Start Where They Left Off', deployed: 'Week 2 - Micro Coaching card 1', outcome: 'Uptake started on messaging', badges: [{ text: 'Watch', className: 'badge badge-amber' }] },
  { agent: 'Bongani Ndlovu', issue: '14 auto-fails, first-contact strong', topic: 'Micro Coaching suite', deployed: 'Week 2', outcome: 'CSAT trending up', badges: [{ text: 'Improving', className: 'badge badge-green' }] },
  { agent: 'Palesa Zulu', issue: 'Lowest auto-fail count on the team', topic: 'Peer coaching source', deployed: 'Week 2', outcome: 'Modelling incident-first opens', badges: [{ text: 'Benchmark', className: 'badge badge-trophy' }] },
]

export const COACHING_LEDGER_SUMMARY = [
  { text: '6 agents in ledger', className: 'summary-chip' },
  { text: '3 action needed', className: 'summary-chip summary-chip-amber' },
  { text: '1 watch', className: 'summary-chip summary-chip-amber' },
  { text: '1 improving', className: 'summary-chip summary-chip-green' },
  { text: '1 benchmark', className: 'summary-chip summary-chip-trophy' },
]

export const PATTERN_CARDS = [
  {
    variant: 'red',
    title: 'Continuation failure invisible to per-contact QA',
    level: 'System level',
    body: 'CSAT 1.9 vs first-contact 4.1 while QA stays near 87-88%. Scorecards judge contacts in isolation. The return-fee trail is the instrument that sees the damage.',
    tags: [
      { text: 'CSAT -2.2', className: 'tag tag-red' },
      { text: 'QA flat', className: 'tag tag-amber' },
      { text: 'Beh -2.3', className: 'tag tag-red' },
    ],
  },
  {
    variant: 'amber',
    title: 'Tracking contacts closed without a route forward',
    level: 'System level',
    body: '22% of Order Tracking & Delivery contacts close with no resolution path. Internal volume leads external review-site mentions by 8 days at correlation 0.74.',
    tags: [
      { text: 'ER elevated', className: 'tag tag-amber' },
      { text: '0.74 corr', className: 'tag tag-amber' },
      { text: '8-day lag', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'amber',
    title: 'Micro Coaching moves CSAT, auto-fails improve unevenly',
    level: 'Team level - early result',
    body: 'After week-2 deployment, continuation-cohort CSAT rises every week, 2.1 to 3.5. Auto-fail QA outcomes have started to ease but not on a clean line, 35 → 29 → 30, which is the honest state of this intervention at week 5.',
    tags: [
      { text: 'CSAT +1.4', className: 'tag tag-green' },
      { text: '10/10 uptake', className: 'tag tag-amber' },
    ],
  },
  {
    variant: 'red',
    title: 'Hold-queue disconnects are a platform gap, not a behavioural one',
    level: 'System level - not coachable',
    body: 'Disconnect rate ran near 66% of interactions in one sampled week, suppressing survey capture and understating true NPS. Will not respond to Micro Coaching.',
    tags: [
      { text: '66% disconnect rate', className: 'tag tag-amber' },
      { text: 'Not coachable', className: 'tag tag-red' },
    ],
  },
]

export const BEST_PRACTICE_CARDS = [
  {
    title: 'Open with the return or warranty history before the request',
    evidence: 'Evidence: continuation CSAT recovers when agents read history first · QA stays high either way',
    agents: 'Agents: Palesa Zulu modelling · Ayanda Mokoena and Zanele Nkosi coaching focus',
    rec: 'Recommendation: Make history-first open the default on contact_sequence > 1.',
  },
  {
    title: 'Say the fee before the customer has to ask',
    evidence: 'Evidence: return-fee complaints spike when the fee surfaces only after the customer pushes back',
    agents: 'Agents: Sipho Molefe coaching in progress',
    rec: 'Recommendation: Require fee disclosure as a scripted first step on every return-initiation contact.',
  },
]

export function getMetricsDrawerSections() {
  return [
    {
      id: 'kpi-csat-drawer',
      label: 'CSAT',
      value: '3.5',
      valueClass: 'val-amber',
      sub: 'Target: 4.3',
      change: '-18.6% vs target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.csat,
      format: 'csat',
      color: '#1a7a4a',
      note: 'Blended CSAT across all contacts. Micro Coaching is recovering the continuation cohort that pulls the blended figure down; the blended figure itself has not turned yet.',
    },
    {
      id: 'kpi-cf-drawer',
      label: 'Auto-Fail Contacts',
      value: '30',
      valueClass: 'val-amber',
      sub: 'Peak: 35 in week 1',
      change: 'Easing unevenly since coaching deployed',
      changeClass: 'chg-amber',
      series: CRITICAL_FAILURES.weekly,
      format: 'whole',
      color: '#d97706',
      note: 'Leading indicator of coaching impact, alongside continuation CSAT. Has fallen, but not on a clean line.',
    },
    {
      id: 'kpi-rcr-drawer',
      label: 'Repeat Contact Rate',
      value: '27.0%',
      valueClass: 'val-red',
      sub: 'Target: 15%',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.rcr,
      format: 'pct',
      color: '#d97706',
      note: 'Population-wide KPI. Takes longer to turn than continuation CSAT after a cohort-level coaching fix.',
    },
    {
      id: 'kpi-esc-drawer',
      label: 'Escalation Rate',
      value: '9.4%',
      valueClass: 'val-amber',
      sub: 'Target: 6.0%',
      change: 'Warranty exceptions and multi-brand policy drag',
      changeClass: 'chg-amber',
      series: TREND_EXEC.esc,
      format: 'pct',
      color: '#c0392b',
      note: 'Warranty & RMA Exceptions and multi-brand policy escalations without a route forward keep escalation elevated.',
    },
    {
      id: 'kpi-aht-drawer',
      label: 'Average Handle Time',
      value: formatAht(430),
      valueClass: 'val-amber',
      sub: `Target: ${formatAht(400)}`,
      change: 'Voice + messaging blended',
      changeClass: 'chg-amber',
      series: TREND_EXEC.aht,
      format: 'aht',
      color: '#2a5db0',
      note: 'First-contact AHT is long. Continuation AHT collapses as agents rush the contact.',
    },
    {
      id: 'kpi-fcr-drawer',
      label: 'First Contact Resolution',
      value: '67.0%',
      valueClass: 'val-red',
      sub: 'Target: 82%',
      change: 'Trending down across the period',
      changeClass: 'chg-red',
      series: TREND_EXEC.fcr,
      format: 'pct',
      color: '#1a7a4a',
      note: 'Blended FCR. Order resolution is not the same as underlying complaint resolution.',
    },
    {
      id: 'kpi-transfer-drawer',
      label: 'Transfer Rate',
      value: '13.1%',
      valueClass: 'val-amber',
      sub: 'Target: 10.0%',
      change: 'Above target',
      changeClass: 'chg-amber',
      series: TREND_EXEC.transfer,
      format: 'pct',
      color: '#d97706',
      note: 'Transfers remain above target across the blended population.',
    },
    {
      id: 'kpi-nps-drawer',
      label: 'NPS',
      value: '11',
      valueClass: 'val-red',
      sub: 'Target: 30',
      change: 'Blended, all contacts',
      changeClass: 'chg-red',
      series: TREND_EXEC.nps,
      format: 'whole',
      color: '#2a5db0',
      note: 'NPS tracks the same recovery lag as other population-wide experience metrics, and is further understated by hold-queue disconnects that never make it into a survey.',
    },
  ]
}

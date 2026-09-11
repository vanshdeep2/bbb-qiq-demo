/**
 * Sourced from clients/bed-bath-beyond/story-spec.json. Population, KPI, driver, and
 * financial figures are direct field lookups from the spec or the
 * qiq-dataset-builder output (agent_metrics.json / contact_extract.json) -
 * nothing here is a second, independently-authored number. Weekly trend
 * shapes for aht/fcr/escalation/transfer/nps are illustrative interpolations
 * that end exactly on the current blended KPI value from story-spec.json;
 * csat and repeat-contact-rate weekly shapes are copied directly from
 * story-spec.kpis.fiveWeekTrend. CRITICAL_FAILURES.weekly is a real sum of
 * agentMetrics.js's criticalFailureSeries across all 10 agents, not modelled.
 * This demo uses illustrative, synthetic data - Bed Bath & Beyond has not
 * shared operational data with QiQ.
 */

export const LIVE_LABEL = 'Live · 5-week window'
export const CALLS_PILL = '24,000 contacts analysed'
export const EXTRACT_NOTE =
  'Contact Search carries a 1,205-record working extract of the 24,000-contact population.'

export const PERIOD_LABEL = '1 Aug - 4 Sep 2026'
export const WK_LABELS = ['1-7 Aug', '8-14 Aug', '15-21 Aug', '22-28 Aug', '29 Aug-4 Sep']
export const WK5 = WK_LABELS

export const POPULATION = {
  weeklyTotal: 4800,
  weeks: 5,
  estimatedPopulation: 24000,
  extractSize: 1205,
  voiceShare: 65.0,
  messagingShare: 35.0,
  firstContacts: 3410,
  continuationContacts: 1390,
  continuationShare: 29.0,
}

export const KPIS = {
  aht: { voice: 495, messaging: 340, blended: 430, target: 400 },
  fcr: { voice: 64.0, messaging: 71.0, blended: 67.0, target: 82.0 },
  escalation: { voice: 11.5, messaging: 6.8, blended: 9.4, target: 6.0 },
  csat: { voice: 3.4, messaging: 3.7, blended: 3.5, target: 4.3 },
  nps: { voice: 8, messaging: 14, blended: 11, target: 30 },
  rcr: { voice: 24.8, messaging: 29.6, blended: 27.0, target: 15.0 },
  transfer: { voice: 16.2, messaging: 9.4, blended: 13.1, target: 10.0 },
}

/** Aliases for healthScore.js (component contract). */
export const ACTUAL_AHT = KPIS.aht.blended
export const FCR = KPIS.fcr.blended
export const ESC_RATE = KPIS.escalation.blended
export const TR_RATE = KPIS.transfer.blended
export const RCR_RATE = KPIS.rcr.blended
export const ER_TARGET = KPIS.escalation.target
export const TR_TARGET = KPIS.transfer.target
export const RCR_TARGET = KPIS.rcr.target
export const CSAT = KPIS.csat.blended

export const DEFAULTS = {
  targetAht: KPIS.aht.target,
  costPerMin: 0.35,
  escMultiplier: 1.5,
  weeklyCalls: POPULATION.weeklyTotal,
}

/**
 * Blended CSAT slides gently downward across the period, copied directly
 * from story-spec.kpis.fiveWeekTrend.csat. Do not draw a recovery curve
 * here: population-level CSAT has not turned yet. The metric that does
 * respond to coaching so far is the continuation-cohort CSAT curve (see
 * COACHING_EFFECT_CSAT in ccmConstants, sourced from
 * story-spec.coaching.effectSeriesCsat).
 */
export const FIVE_WEEK_TREND = {
  weeks: WK_LABELS,
  csat: [3.7, 3.6, 3.6, 3.5, 3.4],
  rcr: [24.0, 25.1, 26.0, 26.6, 27.0],
  // Illustrative interpolation ending on KPIS.escalation.blended (9.4) - not a
  // separately sourced weekly figure, story-spec only carries the current value.
  escalation: [8.2, 8.6, 8.9, 9.1, 9.4],
}

/**
 * aht, fcr, transfer and nps below are illustrative interpolations that end
 * exactly on the current blended KPI value from story-spec.json, so week 5
 * always reconciles. They are not separately sourced weekly figures.
 */
export const TREND = {
  csat: FIVE_WEEK_TREND.csat,
  rcr: FIVE_WEEK_TREND.rcr,
  esc: FIVE_WEEK_TREND.escalation,
  aht: [405, 412, 418, 424, 430],
  fcr: [72.0, 70.5, 69.0, 68.0, 67.0],
  transfer: [11.0, 11.6, 12.2, 12.7, 13.1],
  nps: [18, 16, 14, 12, 11],
}

/**
 * The Micro Coaching intervention story. Deployed from week 2
 * (story-spec.coaching.appliedFromWeek), the same field every module reads.
 */
export const COACHING_WEEK_INDEX = 1 // week 2, 0-indexed

/**
 * Team-wide critical/auto-fail QA outcomes, summed by week across all ten
 * agents in agentMetrics.js (criticalFailureSeries) - a real sum, not
 * modelled. Unlike a clean post-coaching decline, week 1 is actually the
 * worst week here (35), easing to 30 by week 5 - a mild, uneven improvement,
 * reported as-is rather than smoothed into a cleaner success curve.
 */
export const CRITICAL_FAILURES = {
  weekly: [35, 34, 29, 29, 30],
  totalThisPeriod: 157,
  currentWeek: 30,
  peakWeek: 35,
  category:
    'Auto-fail outcomes concentrated on returns follow-ups opened as new contacts, warranty-exception continuation contacts closed without acknowledging the prior claim, and multi-brand policy contacts routed with no named next step',
}

/**
 * Continuation-cohort CSAT since coaching started, copied directly from
 * story-spec.coaching.effectSeriesCsat - not computed here.
 */
export const CONTINUATION_CSAT_RECOVERY = {
  weekly: [2.1, 2.4, 2.8, 3.2, 3.5],
  startValue: 2.1,
  currentValue: 3.5,
}

/** story-spec.firstVsContinuation.qaScorecardPct.continuation, direct field lookup, no computation. */
export const CONTINUATION_QA_WEEKLY = [87.5, 87.5, 87.5, 87.5, 87.5]

/**
 * Real figures from story-spec.storylines[0] and [2].stats: Returns & Refunds
 * is 24% of weekly volume, the single largest driver. affectedCount applies
 * the order-tracking cohort's repeat-contact rate (storylines[2].stats, 38%)
 * to this driver's volume - illustrative, not separately sourced, the same
 * cross-storyline convention used on prior builds.
 */
export const EMPATHY_GAP_STAT = {
  category: 'Returns & Refunds',
  categoryVolume: 1152,
  affectedCount: 438,
  affectedSharePct: 38.0,
}

/** story-spec.firstVsContinuation, direct field lookup, no computation. */
export const FIRST_VS_CONTINUATION = {
  csat: { first: 4.1, continuation: 1.9 },
  ahtSeconds: { first: 410, continuation: 165 },
  behaviourScore: { first: 4.2, continuation: 2.6 },
  qaScorecardPct: { first: 91.0, continuation: 87.5 },
  processAdherencePct: { first: 96, continuation: 93 },
  resolutionRatePct: { first: 89, continuation: 82 },
}

/**
 * Population-level QA-outcome-by-CSAT-band matrix. Rows are the reference
 * build's distribution scaled proportionally to Bed Bath & Beyond's weekly
 * population (4,800 vs the reference's 23,000, a ~0.2087 ratio), preserving
 * the same shape and the same headline-cell share (13.7%) - not a directly
 * sourced field, flagged as an inference. All 12 cells sum exactly to 4,800.
 */
export const QUALITY_OUTCOME_MATRIX = {
  overallQaAveragePct: 87.83,
  rows: [
    { label: 'Followed + Resolved', high: 2237, med: 684, low: 659 },
    { label: 'Followed + Not Resolved', high: 133, med: 286, low: 398 },
    { label: 'Not Followed + Resolved', high: 107, med: 82, low: 56 },
    { label: 'Not Followed + Not Resolved', high: 15, med: 36, low: 107 },
  ],
  headlineCell: {
    label: 'Followed + Resolved + Low CSAT',
    contacts: 659,
    shareOfTotalPct: 13.7,
    continuationShareOfCellPct: 62,
    qaAveragePct: 87.5,
  },
}

export const FINANCIAL_ESTIMATES = {
  demandSideLtv: 268,
  cohortHitWeekly: 340,
  churnUpliftPct: 11,
  // Computed at render/build time from the inputs above (340 x $268 x 11% x 5 weeks),
  // never hardcoded as a second number. cohortHitWeekly is distinct customers
  // per week hit by a continuation failure, direct field from story-spec.financial.
}

export const OVERALL_QA_PCT = 87.83

export const PERIOD_WEEKS = 5
export const REPEAT_CONTACTS = 1390
export const UNNECESSARY_ESCALATIONS = Math.round(POPULATION.weeklyTotal * (ESC_RATE / 100))

/**
 * Weekly taxonomy from story-spec.json drivers. subDrivers is only present
 * for Warranty & RMA Exceptions because that is the only driver story-spec.json
 * breaks down to a second level; the other seven rows are left without a
 * subDrivers array rather than inventing one.
 */
export const DRIVER_ROWS = [
  { name: 'Returns & Refunds', volume: 1152, share: 24.0, fcr: 61, aht: 505, esc: 12 },
  { name: 'Order Tracking & Delivery', volume: 912, share: 19.0, fcr: 66, aht: 420, esc: 8 },
  { name: 'General Shopping / Pre-Sale', volume: 672, share: 14.0, fcr: 88, aht: 240, esc: 2 },
  { name: 'Damaged / Defective Items', volume: 624, share: 13.0, fcr: 68, aht: 460, esc: 9 },
  {
    name: 'Warranty & RMA Exceptions', volume: 480, share: 10.0, fcr: 58, aht: 610, esc: 15,
    subDrivers: [
      { name: 'Claim denied - discontinued/no replacement SKU', volume: 96, share: 20.0, signal: 'Primary driver' },
      { name: 'Claim approved, replacement backordered', volume: 210, share: 43.75, signal: 'Secondary driver' },
      { name: 'Warranty terms disputed by customer', volume: 174, share: 36.25, signal: 'Secondary driver' },
    ],
  },
  { name: 'Account & Multi-Brand Policy', volume: 432, share: 9.0, fcr: 60, aht: 480, esc: 14 },
  { name: 'Billing & Coupon Errors', volume: 336, share: 7.0, fcr: 80, aht: 300, esc: 5 },
  { name: 'Escalations / Other', volume: 192, share: 4.0, fcr: 40, aht: 700, esc: 30 },
]

export const CROSS_KPI_PATTERNS = [
  {
    label: 'Cross-KPI Pattern 1',
    headline: 'Return fee sticker shock: an undisclosed fee, not the return window itself, is what erodes trust',
    body: 'First-contact CSAT 4.1 vs continuation 1.9 while QA barely moves, 91.0% to 87.5%. Per-contact scorecards cannot see the follow-up is the same customer, angry about the same fee.',
    rootCause:
      'Quality mining flagged a communication gap rather than a policy one: agents handling a return where an unadvertised shipping or restocking fee applies were procedurally correct, quoting the fee accurately, but rarely surfaced it before the customer asked. The flagship incident shows the pattern directly - a first voice contact scoring CSAT 5 and QA 93%, then a messaging follow-up from the same customer scoring CSAT 2, then a second voice contact scoring CSAT 1, while QA still held at 88-93% throughout. Micro Coaching, saying the fee before the customer has to ask, deployed from week 2. Auto-fail outcomes have eased from 35 in week 1 to 30 by week 5, an uneven but real improvement, while CSAT on the coached cohort has moved every week, 2.1 to 3.5.',
    trend: {
      title: 'Continuation-cohort CSAT · 5-week',
      weeks: WK_LABELS,
      data: [2.1, 2.4, 2.8, 3.2, 3.5],
      color: '#2a5db0',
      coachingWeekIndex: 1,
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Largest driver', b: 'Returns & Refunds · 24% of weekly volume, 1,152 contacts' },
        { a: 'Coaching deployed', b: 'Week 2, say-the-fee-first card to all ten agents' },
        { a: 'Auto-fail outcomes', b: '35 → 34 → 29 → 29 → 30 across the period, real improvement, still above zero' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 2',
    headline: 'Warranty denials: a discontinued SKU turns a valid claim into a dead end',
    body: 'Only 2% of contacts, but a warranty claim denied for lack of a replacement SKU collapses CSAT to an average of 1, with only store credit on offer - disproportionate damage relative to volume.',
    rootCause:
      'The flagship warranty incident opens reasonably well: the first voice contact confirming the claim scores CSAT 5 and QA 95%. The second contact, a messaging follow-up once the customer learns no replacement exists, scores CSAT 1 with QA still at 91%. This is an explain-the-decision gap, not a process failure - the review itself may be procedurally correct, but a warranty claim that ends in "no replacement, here is store credit" reads as a broken promise, not a policy application. At roughly 2% of contacts, a QA sample sized for the average will never carry enough volume from this tail to see it reliably.',
    trend: {
      title: 'Warranty denial CSAT · contact sequence',
      weeks: ['Contact 1', 'Contact 2'],
      data: [5, 1],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Contact', 'Detail'],
      rows: [
        { a: 'Contact 1 · claim opened', b: 'CSAT 5 · QA 95% · voice' },
        { a: 'Contact 2 · no replacement found', b: 'CSAT 1 · QA 91% · messaging' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 3',
    headline: 'Order tracking: internal complaints lead public reviews by 8 days',
    body: 'Internal volume spikes first (correlation 0.74). External review-site mentions of missing tracking updates and early "delivered" statuses follow about a week and a half later.',
    rootCause:
      'Order Tracking & Delivery is 19% of weekly volume. 22% of these contacts close with no resolution path offered, and repeat contact rate on this cohort is 38% against a 27.0% overall average - customers writing back because the package still has not arrived. The same theme is corroborated externally: it is a recurring theme across the 30 reviews read in this pass (moderate confidence, not yet strong), and it shows up consistently across three of the four review platforms swept.',
    trend: {
      title: 'External tracking-complaint mentions · this week vs prior',
      weeks: ['Prior week', 'This week'],
      data: [19, 41],
      color: '#c0392b',
    },
    driversTable: {
      columns: ['Signal', 'Detail'],
      rows: [
        { a: 'Internal', b: '22% closed with no resolution path · 38% repeat contact rate on this cohort' },
        { a: 'External mentions', b: '41 this week, up from 19 the week prior' },
        { a: 'Correlation and lag', b: '0.74 correlation · external mentions lag the internal spike by 8 days · moderate-confidence external theme' },
      ],
    },
  },
  {
    label: 'Cross-KPI Pattern 4',
    headline: 'Hold-queue disconnects: a telephony reliability gap, not a behavioural one',
    body: 'Roughly 6% of contacts pass through a hold queue that disconnected the customer entirely in one sampled week at nearly 66% of interactions - flagged internally by Bed Bath & Beyond\'s own ops team, and it is not something Micro Coaching can fix.',
    rootCause:
      'This is a platform constraint, not a coaching problem: the hold-queue disconnect rate ran near 66% of interactions in one internal QA sample week (153 disconnects), easing to 66 the following week but still far above a tolerable baseline. Agents cannot control whether the call drops while a customer is on hold, and a disconnected customer who calls back is recorded as a fresh contact, quietly suppressing survey participation and understating true NPS in the process. It will not respond to Micro Coaching - this is the storyline that keeps the rest of the demo honest, and it stays open here, not folded into a coaching win.',
    trend: {
      title: 'Hold-queue system disconnects · two sampled weeks',
      weeks: ['Week A', 'Week B'],
      data: [153, 66],
      color: '#d97706',
    },
    driversTable: {
      columns: ['Item', 'Detail'],
      rows: [
        { a: 'Root cause', b: 'Hold-queue telephony reliability, confirmed in Bed Bath & Beyond\'s own internal QA decks, not a public review theme' },
        { a: 'Disconnect rate', b: 'Near 66% of interactions in one sampled week' },
        { a: 'Owner', b: 'Telephony / platform infrastructure, not agent behaviour - not a coaching fix' },
      ],
    },
  },
]

export const HERO_CHIPS = [
  {
    text: 'CSAT 1.9 on follow-up vs 4.1 first contact',
    className: 'chip-red',
    dotColor: '#fca5a5',
  },
  {
    text: 'QA still 87.5% on follow-up contacts',
    className: 'chip-amber',
    dotColor: '#fbbf24',
  },
  {
    text: 'Team QA averages 87.8% - looks healthy',
    className: 'chip-green',
    dotColor: '#4ade80',
  },
]

/**
 * Briefing header + hero narrative. Headline and paragraphs carry the
 * hero narrative approved by Vansh at the story-architect review stage
 * (clients/bed-bath-beyond/story-spec.md) - qiq-content-writer's job is
 * placement, not rewriting a narrative that stage already got right.
 * This demo uses illustrative, synthetic data.
 */
export const BRIEFING_TITLE = 'Bed Bath & Beyond Intelligence Briefing'

export const HERO_CONTENT = {
  subtitleSuffix: 'Quality scoring said this period was fine. It was not, and this is where the two views separate.',
  eyebrow: 'QiQ Weekly Intelligence · Week 5 of 5',
  headline: 'A return fee customers don\'t see coming is the single largest reason they call back - and it\'s landing during a rebuild the company can\'t afford to stumble.',
  paragraphs: [
    "Returns and refunds are Bed Bath & Beyond's single largest contact driver at 24% of weekly volume, and the breakdown point is consistent: a customer initiates a return expecting the frictionless policy the brand is known for, then finds out mid-conversation that return shipping isn't free or that a restocking fee applies. CSAT on these contacts collapses from 4.1 on the first attempt to 1.9 once the customer has to call back a second time, and the pattern repeats hardest in the two categories the company's own agents are already tracking as their weakest, tracking and returns. The timing compounds the risk: this is happening while Bed Bath & Beyond is mid-consolidation, folding Overstock, Kirkland's, buybuy BABY and soon The Container Store into one support operation, and eight months after reverting the corporate name back to Bed Bath & Beyond specifically to trade on restored trust.",
    "Three other patterns round out where the exposure sits. A narrow slice of warranty claims, about 2% of volume, denies customers with no replacement path and drives CSAT to 1, the kind of low-frequency/high-damage tail a volume-only view misses entirely. Order tracking complaints inside the contact centre are now leading public review mentions of the same issue by roughly 8 days, a correlation window that, tracked continuously, turns into an early-warning signal instead of a lagging one. And a system-level finding from Bed Bath & Beyond's own QA decks, hold-queue disconnects running near 66% of interactions in one sampled week, is actively suppressing survey capture and understating true NPS; no amount of agent coaching fixes a telephony problem, and that's deliberately included so the other three findings don't read as a coaching sales pitch. Applying Micro Coaching from week 2, focused on naming the fee before the customer has to ask, moved continuation-contact CSAT from 2.1 to 3.5 over four weeks.",
  ],
  wow:
    'Continuation-cohort CSAT 2.1 → 3.5 since coaching · continuation QA held near-flat at 87.5% throughout · hold-queue disconnects remain a platform issue, not resolved by coaching',
  readingNote:
    'Micro Coaching deployed in week 2, marked on every chart below. Continuation-cohort CSAT responds directly to coaching and has climbed every week since. Auto-fail contacts have eased more unevenly, 35 in week 1 down to 30 by week 5. The rest are blended, population-wide KPIs across all 4,800 weekly contacts; they are flat or still deteriorating, which is what four weeks of coaching on a specific agent cohort should look like at this stage. Judge the intervention on continuation CSAT now, and on auto-fails and repeat contact rate next quarter.',
}

export const KPI_TILE_META = {
  csat: { label: 'CSAT', colour: 'amber' },
  criticalFailures: {
    label: 'Auto-fail contacts',
    target: 'Peak: 35 in week 1',
    changeText: 'W1 35 → W5 30. Real but uneven improvement',
    varianceDirection: 'down',
    colour: 'amber',
    drillLabel: 'View auto-fail contacts →',
  },
  rcr: { label: 'Repeat contact rate', changeText: 'Blended, all contacts', colour: 'red' },
  escalation: {
    label: 'Escalation rate',
    changeText: 'Warranty exceptions and multi-brand policy drag',
    colour: 'amber',
  },
  aht: { label: 'AHT', changeText: 'Voice + messaging blended', colour: 'green' },
  fcr: {
    label: 'First contact resolution',
    changeText: 'Resolved on first attempt, no repeat · returns processing drag',
    colour: 'red',
  },
  transfer: { label: 'Transfer rate', changeText: 'Above target', colour: 'amber' },
  nps: { label: 'NPS', changeText: 'Blended, all contacts', colour: 'amber' },
}

export const METRIC_ROOT_CAUSE = {
  csat: {
    rootCause:
      'Blended CSAT is being pulled down by follow-up contacts on Returns & Refunds and Warranty & RMA Exceptions. Customers reaching a second contact on the same open return rate the experience 1.9 on average, against 4.1 on the first contact, because the agent has no visibility into what already happened.',
    drivers: [
      { a: 'Returns & Refunds', b: 'Continuation contacts scoring 1.9 CSAT vs 4.1 on first contact' },
      { a: 'Order Tracking & Delivery', b: '22% of contacts closed with no resolution path for the customer' },
      { a: 'Micro Coaching', b: 'Continuation-cohort CSAT 2.1 → 3.5 since week 2 · auto-fails easing unevenly' },
    ],
  },
  rcr: {
    rootCause:
      'Contacts that pass every scorecard question and still leave the customer unresolved come back within the week. The repeat is concentrated in Returns & Refunds and Order Tracking & Delivery, where the first contact acknowledges the issue but not the underlying fee or delay.',
    drivers: [
      { a: 'Returns & Refunds', b: 'Largest single driver at 24% of weekly volume' },
      { a: 'Order Tracking & Delivery', b: '38% repeat contact rate on this cohort vs 27.0% overall' },
      { a: 'Warranty & RMA Exceptions', b: 'Smaller volume, highest escalation rate at 15%' },
    ],
  },
  escalation: {
    rootCause:
      'Escalations concentrate on Escalations/Other (30%, largely repeat-contact overflow), Warranty & RMA Exceptions (15%) and Account & Multi-Brand Policy (14%), where customers push past first-line replies once a denial or a cross-brand policy conflict has already surfaced.',
    drivers: [
      { a: 'Warranty & RMA Exceptions', b: '15% escalation rate, driven by discontinued-SKU denials' },
      { a: 'Account & Multi-Brand Policy', b: '14% escalation rate, driven by cross-banner policy confusion' },
      { a: 'Returns & Refunds', b: '12% escalation rate, a fee-disclosure gap not a behavioural one' },
    ],
  },
  aht: {
    rootCause:
      'Handle time runs longest where agents have to review a prior claim or return history manually, rather than resolve a clean, self-contained request. Warranty and returns/refunds contacts carry the heaviest load.',
    drivers: [
      { a: 'Warranty & RMA Exceptions', b: 'Highest AHT driver, avg 610s' },
      { a: 'Returns & Refunds', b: 'avg 505s' },
      { a: 'Damaged / Defective Items', b: 'avg 460s' },
    ],
  },
  fcr: {
    rootCause:
      'FCR drops hardest in categories where the agent needs a warehouse confirmation, a warranty exception review, or a cross-brand policy lookup before they can close the loop with the customer on the first attempt.',
    drivers: [
      { a: 'Escalations / Other', b: '40% FCR, depends on prior contact history review' },
      { a: 'Warranty & RMA Exceptions', b: '58% FCR, depends on replacement SKU availability' },
      { a: 'Account & Multi-Brand Policy', b: '60% FCR, depends on which banner the order originated from' },
    ],
  },
  transfer: {
    rootCause:
      'Transfers cluster where the first agent cannot action the request themselves - warranty exception review, returns processing, and multi-brand policy decisions all sit with specialist teams rather than the frontline.',
    drivers: [
      { a: 'Warranty & RMA Exceptions', b: 'Routed to warranty exceptions review team' },
      { a: 'Returns & Refunds', b: 'Routed to returns processing team' },
      { a: 'Account & Multi-Brand Policy', b: 'Routed to cross-banner policy review' },
    ],
  },
  nps: {
    rootCause:
      'Detractors concentrate around the same patterns driving CSAT down: follow-up contacts handled with no return-history acknowledgement, warranty claims denied with no replacement path, and hold-queue disconnects that never make it into a survey at all.',
    drivers: [
      { a: 'Continuation contacts', b: 'Lowest-scoring group at 1.9 CSAT, direct target of Micro Coaching' },
      { a: 'Warranty & RMA Exceptions', b: 'Denied claims average CSAT 1, a recurring detractor theme' },
      { a: 'Hold-queue disconnects', b: 'Suppresses survey capture entirely, not addressed by coaching, understates true NPS' },
    ],
  },
}

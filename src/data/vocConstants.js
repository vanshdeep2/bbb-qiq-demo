/**
 * Cross-VOC page constants from story-spec.json + research.json. Bed Bath &
 * Beyond is one-sided (multi-brand retail) - "customer" for the demand side,
 * "order" for the transaction, no supply-side content anywhere. This demo
 * uses illustrative, synthetic data - Bed Bath & Beyond has not shared
 * operational data with QiQ. Storyline 4 (hold-queue disconnects) is
 * coachable: false in story-spec.json - nothing below implies Micro Coaching
 * resolved or will resolve it. It stays an open platform gap.
 */

export const EXTERNAL_VOC = {
  platform: 'Trustpilot',
  rating: 3.6,
  ratingScale: 5,
  label: 'Average',
  reviewCount: 4797,
  source: 'https://www.trustpilot.com/review/www.bedbathandbeyond.com',
}

export const INTERNAL_VOC_STRIP = [
  {
    id: 'return-fee',
    title: 'Returns & Refunds',
    theme: 'A customer initiates a return expecting a free, familiar policy, then learns mid-conversation that return shipping or a restocking fee applies',
    volumeNote: 'Returns & Refunds is 24% of weekly contacts, the largest single driver',
    workaround: 'Customers screenshotting the order confirmation page to prove no fee was disclosed at checkout, because they no longer trust the refund total will match what they expect.',
    evidence: 'An undisclosed-fee return produces a first contact scoring CSAT 5 and QA 93%, then follow-up contacts from the same customer scoring CSAT 1-2 while QA still holds at 88-90%. The scorecard cannot see the second contact is the same fee dispute.',
    action: 'Micro Coaching, say the fee before they ask, deployed to the whole team from week 2. Continuation-cohort CSAT has moved every week since, 2.1 to 3.5. Auto-fail QA outcomes have improved but not cleanly, still uneven at week 5 - a real early result, not a closed case.',
  },
  {
    id: 'warranty',
    title: 'Warranty & RMA Exceptions',
    theme: 'A warranty claim that is procedurally valid ends in a denial the moment the original SKU is discontinued, with only store credit on offer',
    volumeNote: 'Warranty & RMA Exceptions are 10% of contacts (2% specifically the discontinued-SKU denial); a denial averages CSAT 1',
    workaround: 'Customers asking to speak to a supervisor immediately once "discontinued" is mentioned, rather than accepting the standard claim outcome.',
    evidence: 'The flagship warranty incident opens at CSAT 5 and QA 95%, then drops to CSAT 1 once the customer learns no replacement SKU exists. Escalation rate on this driver is 15%, the highest of any coachable category.',
    action: 'Micro Coaching, explain the decision rather than just deliver it, targets this pattern directly and deployed team-wide from week 2 alongside the other cards.',
  },
  {
    id: 'tracking',
    title: 'Order Tracking & Delivery',
    theme: 'Tracking pages showing "delivered" before the package arrives, or going silent for days, leaving the customer to chase the status themselves',
    volumeNote: 'Order Tracking & Delivery is 19% of contacts; 22% close with no resolution path',
    workaround: 'Customers screenshotting the carrier tracking page and re-sending it to support as their own evidence, since they no longer trust the internal system is watching the same shipment.',
    evidence: '912 tracking contacts weekly, with a 38% repeat contact rate on this cohort against 27.0% overall. Internal contact volume on this theme leads external review-site mentions of the same gaps by 8 days at 0.74 correlation.',
    action: 'A tracking early-warning next-best-action - surfacing this week\'s internal spike to the logistics team before it reaches public reviews - is queued for deployment (see Actions below). This is a data-visibility and process gap, not addressed by Micro Coaching.',
  },
  {
    id: 'disconnects',
    title: 'Hold-Queue System Disconnects',
    theme: 'The hold queue itself drops the call before an agent ever answers, and the customer\'s callback is logged as a brand-new contact with no memory of the first attempt',
    volumeNote: 'Disconnect rate ran near 66% of interactions in one internal sampled week; roughly 6% of weekly contacts pass through the affected queue',
    workaround: 'Customers calling back immediately and demanding to be transferred straight to a supervisor, assuming (often correctly) that the first attempt is gone from the record.',
    evidence: '153 system disconnects in one sampled week, easing to 66 the next but still elevated, flagged internally by Bed Bath & Beyond\'s own ops team as suppressing survey participation and understating true NPS.',
    action: 'This is a telephony/platform reliability gap, not a behavioural one, so it will not respond to Micro Coaching. A named infrastructure fix is queued for review; it remains open until that ships.',
  },
  {
    id: 'intent',
    title: 'Customers Escalating Past the First Line',
    theme: 'Customers pushing past a first-line reply once a fee, a denial, or an unresolved tracking gap has already surfaced once',
    volumeNote: 'Escalation rate 9.4% blended vs 6.0% target',
    workaround: 'Customers calling back and immediately asking for a supervisor rather than repeating the issue to a frontline agent again.',
    evidence: 'Escalation rate is highest on Escalations / Other (30%, largely repeat-contact overflow), Warranty & RMA Exceptions (15%) and Account & Multi-Brand Policy (14%), the drivers where a customer is most exposed to a denial or a cross-banner policy conflict they were not prepared for.',
    action: 'Tracked alongside the tracking and disconnect fixes above. As explain-the-decision coaching becomes standard, escalations driven by an unexplained denial are expected to ease; the disconnect-driven share will not move until the platform fix ships.',
  },
]

export const EXTERNAL_VOC_STRIP = [
  {
    id: 'brand',
    title: 'Trustpilot Brand Standing',
    summary: 'Bed Bath & Beyond holds a 3.6/5 ("Average") rating on Trustpilot (4,797 reviews), ahead of Wayfair on the same platform but well behind what ConsumerAffairs and PissedConsumer report.',
    evidence: '3.6/5 (4,797 reviews) on Trustpilot compares favourably to Wayfair at roughly 1.4/5 (5,915 reviews, "Bad") on the same platform. The gap that matters is the spread across platforms: ConsumerAffairs rates Bed Bath & Beyond 1.0/5 (1,199 reviews, 97% one-star) and PissedConsumer 1.8/5 (710 reviews) - Trustpilot skews toward solicited reviews, the complaint-driven platforms skew the other way.',
    action: 'No single fix - this is the reason the driver-specific gaps (returns, warranty, tracking, disconnects) get pulled into dedicated review rather than judged against one platform\'s average alone.',
  },
  {
    id: 'returns-theme',
    title: 'Return Shipping & Restocking Fees',
    summary: 'One of the most recurring themes across all four platforms swept: a return fee the customer did not expect, deducted from the refund.',
    evidence: '"Return shipping was not free & was deducted from my credit" (Trustpilot, directly read); "I had to pay $55 for a return label...only got $440 of their $495 purchase" (ComplaintsBoard, directly read). Recurring across all 4 platforms, strong confidence.',
    action: 'Directly corroborates the internal Returns & Refunds signal, the largest driver in the taxonomy at 24% of weekly volume.',
  },
  {
    id: 'service-theme',
    title: 'Customer Service Wait Times & Inconsistency',
    summary: 'Long hold times and inconsistent answers between phone reps and the website, recurring across all four platforms swept.',
    evidence: '"Customer service is an 80 minute wait...called 10 times over past 1.5 months." (ComplaintsBoard, directly read). Strong confidence.',
    action: 'Partly corroborates the internal hold-queue disconnect finding - long waits and dropped calls compound the same underlying telephony strain.',
  },
  {
    id: 'tracking-theme',
    title: 'Order Tracking Visibility Gaps',
    summary: 'Tracking pages marked "delivered" before arrival, or going silent for days, a recurring theme across three of the four platforms swept.',
    evidence: '"Tracking said it would be delivered January 14th, stayed home from work with no deliver." (ComplaintsBoard, directly read). Moderate confidence - the thinnest-evidenced of the four storylines in this build.',
    action: 'Directly corroborates the internal Order Tracking & Delivery signal, which leads this external theme by 8 days at 0.74 correlation.',
  },
  {
    id: 'multi-brand-theme',
    title: 'Multi-Brand Policy Inconsistency',
    summary: 'Customers reporting that policy differs between a phone rep and the website, tied to the active Overstock / Kirkland\'s / buybuy BABY / Container Store consolidation.',
    evidence: '"Confusing return policies that differ between phone reps and online systems" (PissedConsumer / ConsumerAffairs paraphrase). Moderate confidence, surfaced on 2 of 4 platforms.',
    action: 'Not built into its own storyline given moderate-only external confidence; folds into the hero narrative\'s "why now" framing (BBB is mid-consolidation) rather than a dedicated fix.',
  },
]

export const COMBINED_VOC_ISSUES = {
  title: "Issues found in both signals, and what we're doing about them",
  items: [
    {
      id: 'tracking',
      title: 'Order Tracking & Delivery',
      summary: 'Internal spike leads external mentions by 8 days at 0.74 correlation.',
      internal: '912 Order Tracking & Delivery contacts this week, 22% closed with no resolution path, ownership behaviour scoring 2.4 on continuation. Root cause is tracking pages that read "delivered" before arrival or go silent for days.',
      external: 'External mentions of tracking issues rose from 19 to 41 in the same week, 8 days after the internal spike began, and recur across three of the four platforms swept, at moderate confidence.',
      action: 'A tracking early-warning next-best-action is queued for deployment (see Actions). This is a data-visibility and process gap - Micro Coaching addresses the continuation-contact tone on these contacts, not the underlying tracking data gap itself.',
      status: 'Process fix queued · not addressed by coaching',
    },
    {
      id: 'returns',
      title: 'Return fee follow-ups',
      summary: 'Lowest-scoring group internally; the same friction shows up externally as one of the largest complaint themes across every platform swept.',
      internal: 'Continuation-cohort CSAT sat at 2.1 in week 1 against 4.1 on first contact, while QA held at 88-93% throughout, the gap per-contact scoring cannot see. 24% of weekly contacts are Returns & Refunds, the largest driver in the taxonomy.',
      external: 'Customers describe unexpected return fees and delayed refunds across all 4 platforms swept, read publicly as slow, inconsistent support rather than a specific fee-disclosure gap.',
      action: 'Micro Coaching (say the fee before they ask) deployed team-wide from week 2. Continuation CSAT moving 2.1 → 3.5. Auto-fail QA outcomes have improved but remain uneven - 35 → 29 → 30 across the period - so this is a partial result, not a cleared one.',
      status: 'CSAT recovering · auto-fails easing unevenly · live team-wide since week 2',
    },
    {
      id: 'disconnects',
      title: 'Hold-Queue System Disconnects',
      summary: 'An internal-only finding, from Bed Bath & Beyond\'s own QA decks, not a public review theme - explicitly not addressed by coaching.',
      internal: 'Disconnect rate ran near 66% of interactions in one sampled week (153 disconnects), easing to 66 the next but still elevated. No coaching-side workaround exists; the customer\'s callback is logged as a fresh contact with no memory of the dropped call.',
      external: 'Not directly visible in public reviews - customer service wait-time complaints (recurring across all 4 platforms) plausibly compound from the same underlying telephony strain, but this specific disconnect-rate finding is internal-only.',
      action: 'This is the storyline that keeps the rest of the demo honest: it will not respond to Micro Coaching. A named infrastructure fix is queued for review and stays open until it ships.',
      status: 'Open · platform fix required · not a coaching item',
    },
  ],
}

export const SIGNAL_RECONCILIATION = [
  {
    title: 'Order Tracking & Delivery',
    internal: 'Internal spike: 912 contacts this week, 22% closed with no resolution path, ownership behaviour 2.4.',
    external: 'External mentions of tracking issues rose from 19 to 41 in the same week.',
    meaning: 'Internal leads external by 8 days at correlation 0.74. The instruments agree; timing differs, and external confidence is moderate, not strong.',
  },
  {
    title: 'Warranty & RMA Exceptions',
    internal: 'Internal volume is low at roughly 2% of contacts for the discontinued-SKU denial slice.',
    external: 'External severity is disproportionate: a denied claim averages CSAT 1 and corroborates the returns_refund_friction and damaged_or_defective_products themes seen across platforms.',
    meaning: 'A QA sample sized for the average never reaches this tail. Low volume is not low risk.',
  },
  {
    title: 'Hold-queue disconnects',
    internal: 'Internal volume is real and specific: disconnect rate near 66% of interactions in one sampled week, from Bed Bath & Beyond\'s own QA decks.',
    external: 'Not independently corroborated in public reviews as a named "disconnect" theme, though the customer_service_wait_times_and_consistency theme (strong confidence, all 4 platforms) plausibly shares the same root cause.',
    meaning: 'This is the one signal sourced entirely from client-internal evidence - and the one that will not move with coaching.',
  },
]

export const RISK_REGISTER = [
  {
    risk: 'Continuation failure on return-fee follow-ups',
    evidence: 'First-contact CSAT 4.1 vs continuation 1.9; QA still 87.5% on continuation',
    confidence: '90%',
    owner: 'CCM + Team Leads',
  },
  {
    risk: 'Tracking contacts closed without a route forward',
    evidence: '22% of Order Tracking & Delivery contacts closed with no resolution path; external lag 8 days, moderate confidence',
    confidence: '78%',
    owner: 'Logistics / tracking data engineering',
  },
  {
    risk: 'Warranty denial tail invisible to QA sampling',
    evidence: '2% contact share vs CSAT collapsing to 1 on denial, no replacement path',
    confidence: '84%',
    owner: 'Warranty exceptions review + Quality',
  },
  {
    risk: 'Hold-queue disconnects have no coaching path',
    evidence: 'Near 66% disconnect rate in one sampled week, suppresses survey capture, understates true NPS - not addressable by coaching',
    confidence: '88%',
    owner: 'Telephony / platform infrastructure owners',
  },
]

export const ACTION_AGENDA = [
  {
    rank: 1,
    title: 'Tracking early-warning next-best-action',
    detail: 'Surface this week\'s internal tracking-complaint spike to the logistics team before it reaches public reviews.',
    estimateLabel: 'Estimate',
  },
  {
    rank: 2,
    title: 'Keep the four Micro Coaching cards mandatory team-wide',
    detail: 'Start where they left off, name who has it and when, match the register, count the chasing.',
    estimateLabel: null,
  },
  {
    rank: 3,
    title: 'Route-forward standard on returns and warranty exceptions',
    detail: 'No close without a named owner and a timeframe when a dependency blocks full resolution.',
    estimateLabel: null,
  },
  {
    rank: 4,
    title: 'Named hold-queue infrastructure fix',
    detail: 'Platform fix for the hold-queue disconnect pattern - explicitly not a coaching fix.',
    estimateLabel: null,
  },
]

export const STORYLINE_3 = {
  correlation: 0.74,
  lagDays: 8,
  internalContacts: 912,
}

/**
 * Storyline 4 is coachable: false in story-spec.json. No coaching-outcome
 * language appears here or anywhere else this storyline is referenced.
 * Field names are kept consistent with the reference build's shape;
 * avgDaysAddedToResolution and policyEscalationSharePct are adapted here to
 * their closest honest analog for a telephony (not policy) gap - see comments.
 */
export const STORYLINE_4 = {
  contactsWeekly: 288,
  avoidableContactsWeekly: 110, // average of the two sampled weeks' disconnect counts (153, 66)
  avgDaysAddedToResolution: null, // not applicable - this is a dropped-call gap, not an added-delay gap
  policyEscalationSharePct: 66, // disconnect rate in the worst sampled week, not a policy-escalation share
  coachable: false,
}

export const ACTION_DETAILS = {
  'decide-scale-coaching': {
    tone: 'red',
    type: 'System',
    chip: 'CSAT 2.1 → 3.5',
    category: 'Decide now',
    title: 'Keep Micro Coaching mandatory for every agent on continuation contacts',
    summary:
      'All ten agents carried auto-fails on the same pattern, so the say-the-fee-first coaching pack was rolled out team-wide from week 2, not held to the two or three agents who surfaced it first. The decision now is to keep it a standing requirement, not a one-off pilot.',
    rationale:
      'Ayanda Mokoena and Zanele Nkosi carried the most auto-fails on the team (26 and 22), with Sipho Molefe and Bongani Molefe close behind (19 and 16). All four scored close to the team QA average of 87.8% while CSAT sat well below it on the same contacts. The underlying pattern, not disclosing the return fee until the customer pushed back, showed up across the whole team, so the fix was built team-wide from the start.',
    owner: 'CCM + Team Leads',
    timeline: 'Live team-wide since week 2, this decision is whether it stays a permanent standard',
    impact: 'Continuation-cohort CSAT already 2.1 → 3.5 across the team. Keeping it mandatory is what holds that line as the multi-brand consolidation continues; auto-fail volume has improved but not on the same clean curve, which is the reason to keep it running rather than declare it done.',
    kpis: ['CSAT', 'Auto-fail contacts', 'Continuation contacts'],
  },
  'decide-disconnect-fix': {
    tone: 'amber',
    type: 'Process',
    chip: '66% disconnect rate',
    category: 'Decide now',
    title: 'Approve an infrastructure fix for hold-queue disconnects',
    summary:
      'Set an infrastructure standard: investigate and remediate the hold-queue telephony path that is dropping customers before an agent answers, rather than treating it as background noise.',
    rationale:
      'Disconnect rate ran near 66% of interactions in one internal sampled week, confirmed directly in Bed Bath & Beyond\'s own QA decks, and is suppressing survey participation, which understates true NPS. No coaching intervention touches this - it is a telephony reliability problem.',
    owner: 'Telephony / platform infrastructure owners',
    timeline: 'Infrastructure decision proposed for review from week 6, alongside the tracking next-best-action',
    impact: 'Expected to reduce the disconnect-driven repeat-contact volume and recover survey participation that is currently going uncounted, improving the accuracy of reported NPS.',
    kpis: ['Escalation rate', 'Repeat contact rate', 'External VOC'],
  },
  'ready-tracking-nba': {
    tone: 'amber',
    chip: '912 contacts/wk',
    category: 'Ready to execute',
    title: 'Tracking early-warning next-best-action',
    summary:
      'Deploy an automated weekly surface of the internal tracking-complaint spike to the logistics team, ahead of the same complaints reaching public reviews.',
    rationale:
      '912 Order Tracking & Delivery contacts weekly, with 22% closing with no resolution path. This adds delay before the underlying carrier or data gap is investigated and drives the 38% repeat contact rate on this cohort.',
    owner: 'Logistics / tracking data engineering',
    timeline: 'Ready to scope, awaiting go-ahead',
    impact: 'Modelled to reduce avoidable repeat-contact volume on this driver and shorten the 8-day lag before the same gap surfaces externally.',
    kpis: ['AHT', 'Repeat contact rate', 'External VOC'],
  },
  'ready-coaching-scale': {
    tone: 'amber',
    chip: 'High',
    category: 'Ready to execute',
    title: 'Extend the explain-the-decision standard to warranty denials',
    summary:
      'The same root cause, a decision delivered without explanation, shows up on Warranty & RMA Exceptions. The explain-the-decision card already in the pack is the next application, paired with a route-forward requirement on denied claims.',
    rationale:
      'Continuation-contact coaching is live team-wide and moving CSAT. Warranty & RMA Exceptions carries its own version of the same gap at the highest escalation rate among coachable drivers (15%), and denied claims average CSAT 1, the sharpest concentration of the pattern after Returns & Refunds.',
    owner: 'CCM + Team Leads',
    timeline: 'Card content follows the same production format already validated on the current pack; ready to build once prioritised',
    impact: 'High expected impact on warranty-denial CSAT and the 15% escalation rate on that driver, the measure the current pack does not fully touch.',
    kpis: ['CSAT', 'Escalation rate'],
  },
  'ready-disconnect-owner': {
    tone: 'amber',
    chip: '110 avg disconnects/wk',
    category: 'Ready to execute',
    title: 'Named process owner for hold-queue disconnects',
    summary:
      'Hold-queue disconnects have no single named owner today. Assign a named infrastructure owner and a monitoring SLA for the telephony path behind this. This is explicitly not a coaching fix - storyline 4 is coachable: false.',
    rationale:
      'Disconnect rate near 66% in the worst sampled week is suppressing survey capture and understating true NPS. The pattern is confirmed directly in Bed Bath & Beyond\'s own internal QA decks, independent of any public review signal.',
    owner: 'Telephony / platform infrastructure owners',
    timeline: 'Can start immediately, no coaching dependency, but requires an infrastructure investigation',
    impact: 'Directly addresses the disconnect-driven repeat-contact volume; will not move CSAT on this category through coaching, only through the platform fix.',
    kpis: ['NPS', 'Repeat contact rate', 'External VOC'],
  },
  'watch-auto-fails': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Auto-fail contacts and continuation CSAT trend',
    summary: 'Confirm auto-fail volume keeps easing and continuation CSAT keeps climbing now that coaching is standard across the whole team.',
    rationale:
      'CSAT has been recovering since week 2; auto-fail volume has improved but unevenly, 35 → 34 → 29 → 29 → 30 across the period. The real test is whether auto-fails keep trending down as coaching moves from a new habit to routine practice.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly',
    impact: 'A continued auto-fail decline here is the leading confirmation that the coaching fix is holding at team-wide scale, not just moving the metric that responds fastest.',
    kpis: ['Auto-fail contacts', 'CSAT'],
  },
  'watch-csat': {
    tone: 'amber',
    category: 'Watch next week',
    title: 'Blended CSAT vs target',
    summary: 'Population-wide CSAT is still below target while the continuation cohort recovers. Expect this gap to close gradually as the fix compounds week over week.',
    rationale:
      'Blended CSAT averages across all 4,800 weekly contacts. Continuation contacts, the ones coaching directly targets, are only 29% of that volume. It is expected to lag the continuation-contact recovery by design - this is the population-level metric that should move as more weeks of coaching accumulate.',
    owner: 'CCM + Team Leads',
    timeline: 'Reviewed weekly, expected to start closing gradually',
    impact: 'Primary population-level success measure for the coaching effort once enough weeks have accumulated.',
    kpis: ['CSAT'],
  },
  'watch-disconnects': {
    tone: 'red',
    category: 'Watch next week',
    title: 'Hold-queue disconnect rate, unresolved by coaching',
    summary: 'Disconnect rate near 66% of interactions in one sampled week stays open until the infrastructure fix ships. This is the storyline that keeps the rest of the demo honest.',
    rationale:
      'No coaching intervention touches this driver. Disconnect volume is expected to hold flat until a named infrastructure owner investigates and remediates the telephony path.',
    owner: 'Telephony / platform infrastructure owners',
    timeline: 'Understated NPS compounds weekly until the platform fix above is agreed and shipped',
    impact: 'Directly avoidable only by the infrastructure fix, not by any coaching or QA intervention.',
    kpis: ['NPS', 'Repeat contact rate'],
  },
}

export const ACTION_BOARD_COLUMNS = ['Decide now', 'Ready to execute', 'Watch next week']

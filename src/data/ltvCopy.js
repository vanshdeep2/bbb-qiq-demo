/**
 * Bed Bath & Beyond is a one-sided (multi-brand retail) client - no supply-side
 * rows exist anywhere in this file. Customer LTV is grounded in
 * story-spec.json's financial model: $268 LTV (sourced directly from Bed
 * Bath & Beyond's own Q1 2026 earnings release, "LTM revenue per active
 * customer" - not an invented figure), 340 customers per week newly showing
 * the continuation-failure pattern, and an 11% churn uplift on that cohort.
 * Totals are computed at render/build time from story-spec.financial, never
 * hardcoded as a second number.
 */

export const LTV_DEFAULT_ASSUMPTION_TEXT =
  'Customer LTV of $268 is Bed Bath & Beyond\'s own reported LTM revenue per active customer from its Q1 2026 earnings release, used directly from story-spec.json\'s financial model rather than an invented figure. Continuation-failure risk uses 340 customers per week newly showing the returns/refund or warranty-denial follow-up pattern, with an 11% churn uplift on that cohort. Micro Coaching value protected is modelled on the same 340-customer cohort at a 50% protection rate over the four coaching weeks (weeks 2-5). The 50% is a deliberately conservative modelling assumption, not a Bed Bath & Beyond-sourced figure - it reflects that the auto-fail trend in this period has improved but not cleanly, so only half the at-risk cohort is credited as protected. All totals are computed live from these assumptions. Change a number and Recalculate to see them move. All figures are estimates, and this demo is illustrative - Bed Bath & Beyond has not shared operational data with QiQ.'

export const RISK_LINES = [
  {
    key: 'periodDemandRiskPrimary',
    title: 'Return fee sticker shock',
    label: '340 customers/week · 11% churn uplift · customer LTV $268 · 5 weeks',
    description:
      'Customers hit by an undisclosed return fee this week carry elevated churn risk. Per-contact QA still passes while CSAT collapses after the first contact. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Return fee sticker shock',
    dotColor: '#c0392b',
  },
  {
    key: 'periodDemandRiskSecondary',
    title: 'Warranty denial tail',
    label: 'Low volume (2% of contacts) · disproportionate severity · 5 weeks',
    description:
      'Warranty & RMA Exceptions is a small share of contacts, but a claim denied for lack of a replacement SKU routes to CSAT 1 on average with only store credit on offer. A QA sample sized for the average never reaches this tail. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Warranty denial tail',
    dotColor: '#d9534f',
  },
  {
    key: 'periodDemandRiskTertiary',
    title: 'Order tracking visibility gaps',
    label: '912 contacts weekly · 22% closed with no route · 5 weeks',
    description:
      'Order Tracking & Delivery contacts closed without a resolution path drive customer distrust and, per the external-review correlation, later public review-site mentions of the same gaps. Figure shown for the current 5-week reporting window.',
    legendLabel: 'Order tracking visibility gaps',
    dotColor: '#e8806f',
  },
]

/** Combined at-risk lines for the single risk card / drawer. Customer-side only - Bed Bath & Beyond is one-sided. */
export const AT_RISK_LINES = RISK_LINES.map((line) => ({ ...line, valueClass: line.valueClass ?? 'val-red' }))

/** Colour key for the at-risk donut. Single side - Bed Bath & Beyond has no supply-side equivalent. */
export const AT_RISK_SIDE_LEGEND = [{ label: 'Customer LTV', color: '#c0392b' }]

/**
 * Micro Coaching USD slices that sum to periodProtected (same relative weights
 * as the at-risk donut). Estimate of value protected by the continuation-
 * cohort CSAT recovery so far (2.1 → 3.5 since week 2); this is a partial,
 * early result, not a cleared risk - the auto-fail count has improved but
 * not on a clean line (see executiveConstants.CRITICAL_FAILURES).
 */
export const COACHING_VALUE_LINES = [
  {
    key: 'periodDemandProtectedPrimary',
    title: 'Return fee sticker shock',
    label: 'Share of 5-week value protected from return-fee-driven churn',
    description:
      'Largest share of Micro Coaching value protected in the current 5-week window. Mirrors the return-fee weight used on the at-risk donut. Estimate, partial result - auto-fail volume has not fallen to zero.',
    legendLabel: 'Return fee sticker shock',
    dotColor: '#1a7a4a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedSecondary',
    title: 'Warranty denial tail',
    label: '12% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on warranty-denial-related continuation risk after coaching in the current 5-week window. Estimate, presentation split of the period total.',
    legendLabel: 'Warranty denial tail',
    dotColor: '#228b5a',
    format: 'usd',
  },
  {
    key: 'periodDemandProtectedTertiary',
    title: 'Order tracking visibility gaps',
    label: '10% of base protected value (same weight as at-risk) · 5 weeks',
    description:
      'Value protected on tracking-related continuation risk after coaching in the current 5-week window. Estimate, presentation split of the period total. The underlying carrier/tracking data gap remains a systems issue - coaching addresses the continuation-contact tone, not the tracking data itself.',
    legendLabel: 'Order tracking visibility gaps',
    dotColor: '#4ade80',
    format: 'usd',
  },
]

export const LTV_SECTION_TITLE = 'Customer LTV Impact Analysis · 5-Week Period'
export const AT_RISK_TITLE = 'Customer LTV at risk'
export const AT_RISK_RISK_SUBTITLE =
  'Modelled exposure in the current 5-week window from continuation failure on customer relationships. Bed Bath & Beyond is a one-sided (multi-brand retail) book - there is no supply-side population, so no supply-side exposure is modelled or shown. Estimate.'

/**
 * Assumption inputs behind every figure on the LTV cards. Editable at runtime
 * through "View / edit assumptions" on Executive.
 *
 * demandSideLtv / cohortHitWeekly / churnUpliftPct come directly from
 * story-spec.json's `financial` block (268 / 340 / 11). demandSideLtv is
 * Bed Bath & Beyond's own reported LTM revenue per active customer, not a
 * modelled figure.
 *
 * coachingCohortWeekly is set to the same 340-customer cohort the risk model
 * uses - deliberately not a wider invented population. coachingProtectionPct
 * is 50%, the same conservative modelling choice used on prior reference
 * builds: Bed Bath & Beyond's auto-fail trend has improved (35 -> 29 -> 30)
 * but not cleanly, so crediting a higher protection rate would overstate the
 * result. It is a modelling assumption, NOT a Bed Bath & Beyond-sourced
 * figure, and the in-app assumption text says so.
 *
 * NOTE: no supplySideLtv / supplyAbandoningWeekly keys - this is a one-sided
 * client and the model omits the supply term entirely.
 */
export const LTV_ASSUMPTION_DEFAULTS = {
  demandSideLtv: 268,
  cohortHitWeekly: 340,
  churnUpliftPct: 11,
  coachingCohortWeekly: 340,
  coachingProtectionPct: 50,
}

/** Field list for the assumptions modal. Demand-side only. */
export const LTV_ASSUMPTION_FIELDS = [
  { id: 'demandSideLtv', label: 'Customer LTV ($)', step: 10 },
  { id: 'cohortHitWeekly', label: 'Customers hit by continuation failure / week', step: 1 },
  { id: 'churnUpliftPct', label: 'Churn uplift on cohort (%)', step: 0.5 },
  { id: 'coachingCohortWeekly', label: 'Customers reached by coaching / week', step: 1 },
  { id: 'coachingProtectionPct', label: 'Micro Coaching protection rate (%)', step: 1 },
]

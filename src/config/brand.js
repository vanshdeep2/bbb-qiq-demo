/**
 * The vocabulary layer. Every string in template code that names a side of
 * the client's business, a transaction, or the brand itself reads from here.
 *
 * Currently wired to: Bed Bath & Beyond (one-sided / multi-brand home goods retail).
 */

export const BRAND = {
  name: 'Bed Bath & Beyond',
  logoPath: '/bbb-logo.png',
  logoAlt: 'Bed Bath & Beyond',
}

export const MARKETPLACE_TYPE = 'one-sided' // 'two-sided' | 'one-sided'

export const IS_TWO_SIDED = MARKETPLACE_TYPE === 'two-sided'

export const NOUNS = {
  demandSide: 'customer',
  demandSidePlural: 'customers',
  supplySide: null,
  supplySidePlural: null,
  transaction: 'order',
  transactionPlural: 'orders',
  currency: 'USD',
  currencySymbol: '$',
  locale: 'en-US',
}

export const CONTACT_INDEX_PATH = '/data/bbb_contact_index.json'

export const NOUNS_CAP = {
  demandSide: cap(NOUNS.demandSide),
  demandSidePlural: cap(NOUNS.demandSidePlural),
  supplySide: cap(NOUNS.supplySide),
  supplySidePlural: cap(NOUNS.supplySidePlural),
  transaction: cap(NOUNS.transaction),
}

function cap(s) {
  if (!s) return ''
  return s.replace(/\b\w/g, (c) => c.toUpperCase())
}

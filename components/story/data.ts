export type Datum = { label: string; value: number }
export type BlockRow = { block: string; tickets: number }

export const hero = {
  tickets: '131,197',
  ticketsNote: 'July to September 2026',
  fines: '$9,577,381',
  finesNote: 'Every ticket is $73',
  peakDay: 'Thursday',
  peakDayNote: '31,594 tickets',
  peakHour: '8 AM',
  peakHourNote: '38,652 tickets',
}

export const koreatown = {
  caption: 'Koreatown here means roughly Western to Vermont, Olympic to 3rd Street.',
  tickets: '1,862',
  fines: '$135,926',
  share: '1.42%',
  callout: '99%',
  weekday: [
    { label: 'Mon', value: 0 },
    { label: 'Tue', value: 9 },
    { label: 'Wed', value: 848 },
    { label: 'Thu', value: 1003 },
    { label: 'Fri', value: 2 },
    { label: 'Sat', value: 0 },
    { label: 'Sun', value: 0 },
  ] satisfies Datum[],
  hour: [
    { label: '8 AM', value: 736 },
    { label: '9 AM', value: 244 },
    { label: '10 AM', value: 615 },
    { label: '11 AM', value: 196 },
    { label: '12 PM', value: 71 },
  ] satisfies Datum[],
  blocks: [
    { block: '900 Oxford Ave S', tickets: 19 },
    { block: '600 Serrano Ave S', tickets: 19 },
    { block: '3100 7th St W', tickets: 17 },
    { block: '444 Kingsley Dr S', tickets: 14 },
    { block: '3600 7th St W', tickets: 10 },
  ] satisfies BlockRow[],
}

export const citywide = {
  weekday: [
    { label: 'Mon', value: 24117 },
    { label: 'Tue', value: 24510 },
    { label: 'Wed', value: 29957 },
    { label: 'Thu', value: 31594 },
    { label: 'Fri', value: 20855 },
    { label: 'Sat', value: 12 },
    { label: 'Sun', value: 152 },
  ] satisfies Datum[],
  hour: [
    { label: '1 AM', value: 1 },
    { label: '2 AM', value: 624 },
    { label: '3 AM', value: 391 },
    { label: '4 AM', value: 361 },
    { label: '5 AM', value: 344 },
    { label: '6 AM', value: 247 },
    { label: '7 AM', value: 986 },
    { label: '8 AM', value: 38652 },
    { label: '9 AM', value: 17076 },
    { label: '10 AM', value: 30887 },
    { label: '11 AM', value: 8268 },
    { label: '12 PM', value: 25809 },
    { label: '1 PM', value: 7028 },
    { label: '2 PM', value: 519 },
    { label: '3 PM', value: 2 },
    { label: '4 PM', value: 0 },
    { label: '5 PM', value: 1 },
    { label: '6 PM', value: 0 },
    { label: '7 PM', value: 0 },
    { label: '8 PM', value: 1 },
  ] satisfies Datum[],
  region: [
    { label: 'Southern', value: 40662 },
    { label: 'Western', value: 29393 },
    { label: 'Hollywood', value: 24105 },
    { label: 'Valley', value: 20743 },
    { label: 'Central', value: 16294 },
  ] satisfies Datum[],
  month: [
    { label: 'July', value: 46416 },
    { label: 'August', value: 45683 },
    { label: 'September', value: 39098 },
  ] satisfies Datum[],
}

export const topBlocks = [
  { block: '400 Main St S', tickets: 112 },
  { block: '801 Main St S', tickets: 109 },
  { block: '501 Spring St S', tickets: 97 },
  { block: '400 Spring St S', tickets: 94 },
  { block: '500 Main St S', tickets: 94 },
  { block: '500 Spring St S', tickets: 78 },
  { block: '701 Main St S', tickets: 68 },
  { block: '600 Main St S', tickets: 66 },
  { block: '201 4th St W', tickets: 57 },
  { block: '13100 Fountain Park Dr', tickets: 50 },
] satisfies BlockRow[]

export const method = {
  koreatownBounds:
    'Koreatown was defined by coordinates: latitude 34.0525 to 34.0690 North, longitude 118.2915 to 118.3095 West.',
  summary:
    'I pulled 131,197 street sweeping citations (violation code 80.69BS) from the City of Los Angeles Open Data Parking Citations dataset. I cleaned issue times stored as text and standardized street suffixes and region names in ChatGPT. Then I checked quality and tied every chart back to the city\u2019s own totals before publishing.',
  checks: [
    { value: '0', label: 'duplicate tickets' },
    { value: '164', label: 'weekend tickets flagged for review, not treated as errors' },
    { value: '1,968', label: 'tickets before 7 AM flagged for review, not treated as errors' },
  ],
}

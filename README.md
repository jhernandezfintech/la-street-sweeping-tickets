# When LA Writes Street Sweeping Tickets

**Live site:** https://la-street-sweeping-tickets.vercel.app

A data story on 131,197 City of Los Angeles street sweeping tickets from July to September 2026, built by a Koreatown resident who plans his week around sweeping day.

## Key findings

* **131,197 tickets and $9,577,381 in fines**, every ticket $73
* **Thursday at 8 AM** is the peak; 8 AM, 10 AM and noon together account for 73% of tickets
* **Downtown is the hot spot:** 8 of the 10 most ticketed blocks are on Main Street and Spring Street
* **Koreatown:** 1,862 tickets, and 99% of them landed on a Wednesday or Thursday

## How it was built

1. Pulled street sweeping citations (violation code 80.69BS) from the City of Los Angeles Open Data Parking Citations dataset
2. Cleaned the data in ChatGPT: converted times stored as text, standardized street names and enforcement regions, and flagged 1,968 tickets before 7 AM and 164 weekend tickets for review
3. Tied every chart back to the city's own totals before publishing
4. Built this site with v0: Next.js, Tailwind CSS and Recharts, with hover tooltips on every chart

## Data source

City of Los Angeles Open Data, Parking Citations (data.lacity.org). Figures are citation counts and listed fines, not fines paid.

Built by Julio Hernandez with ChatGPT and v0.

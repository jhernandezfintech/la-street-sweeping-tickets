import { ColumnChart, RowChart } from './charts'
import { citywide, hero, koreatown, method, topBlocks } from './data'
import { BlockTable, Card, ChartCard, Section, StatCard } from './primitives'

export function Hero() {
  return (
    <header className="mx-auto w-full max-w-5xl px-5 pt-16 pb-8 sm:px-8 sm:pt-28 sm:pb-12">
      <p className="text-sm font-semibold tracking-wide text-teal uppercase">A data story</p>
      <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl">
        When LA Writes Street Sweeping Tickets
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink/70 sm:text-xl">
        City of Los Angeles open data, July to September 2026. A Koreatown resident looks at the
        numbers.
      </p>
      <p className="mt-6 text-sm font-medium text-ink">By Julio Hernandez</p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total tickets" value={hero.tickets} />
        <StatCard label="Fines issued" value={hero.fines} note={hero.finesNote} />
        <StatCard label="Peak day" value={hero.peakDay} />
        <StatCard label="Peak hour" value={hero.peakHour} />
      </div>
    </header>
  )
}

export function KoreatownSpotlight() {
  return (
    <Section
      id="koreatown"
      eyebrow="Koreatown spotlight"
      title="Close to home, one narrow window"
      intro={koreatown.caption}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Koreatown tickets" value={koreatown.tickets} />
        <StatCard label="Koreatown fines" value={koreatown.fines} />
        <StatCard label="Share of all city tickets" value={koreatown.share} />
      </div>

      <div className="mt-4 rounded-3xl bg-ink p-8 text-white sm:p-12">
        <p className="text-7xl font-semibold tracking-tight text-[#2BC4AC] sm:text-8xl">
          {koreatown.callout}
        </p>
        <p className="mt-4 max-w-2xl text-xl leading-snug text-balance text-white/90 sm:text-2xl">
          of Koreatown tickets landed on a Wednesday or Thursday.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Koreatown by weekday" description="Tickets per day of the week">
          <ColumnChart
            data={koreatown.weekday}
            max={1200}
            ticks={[0, 400, 800, 1200]}
            label="Column chart of Koreatown tickets by weekday"
            showValues
          />
        </ChartCard>
        <ChartCard title="Koreatown by hour" description="Tickets per hour of the day">
          <ColumnChart
            data={koreatown.hour}
            max={800}
            ticks={[0, 200, 400, 600, 800]}
            label="Column chart of Koreatown tickets by hour"
            showValues
          />
        </ChartCard>
      </div>

      <div className="mt-10">
        <h3 className="mb-4 text-lg font-semibold tracking-tight text-ink">
          Top 5 Koreatown blocks
        </h3>
        <BlockTable caption="Top 5 Koreatown blocks by tickets" rows={koreatown.blocks} />
      </div>
    </Section>
  )
}

export function CitywidePatterns() {
  return (
    <Section
      id="citywide"
      eyebrow="Citywide patterns"
      title="The week, the clock, and the map"
      intro="Hover over any bar to see the exact count."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Tickets by weekday">
          <ColumnChart
            data={citywide.weekday}
            max={40000}
            ticks={[0, 10000, 20000, 30000, 40000]}
            label="Column chart of citywide tickets by weekday"
          />
        </ChartCard>
        <ChartCard title="Tickets by month">
          <ColumnChart
            data={citywide.month}
            max={50000}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            label="Column chart of citywide tickets by month"
            showValues
          />
        </ChartCard>
        <ChartCard title="Tickets by hour" className="lg:col-span-2">
          <ColumnChart
            data={citywide.hour}
            max={40000}
            ticks={[0, 10000, 20000, 30000, 40000]}
            label="Column chart of citywide tickets by hour"
            height={340}
          />
        </ChartCard>
        <ChartCard title="Tickets by enforcement region" className="lg:col-span-2">
          <RowChart
            data={citywide.region}
            max={50000}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            label="Horizontal bar chart of citywide tickets by enforcement region"
            height={320}
          />
        </ChartCard>
      </div>
    </Section>
  )
}

export function WhereSection() {
  return (
    <Section
      id="where"
      eyebrow="Where"
      title="The 10 most ticketed blocks in the city"
    >
      <BlockTable caption="Top 10 most ticketed blocks citywide" rows={topBlocks} />
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70">
        8 of the 10 most ticketed blocks are on Main Street and Spring Street in Downtown LA.
      </p>
    </Section>
  )
}

const insights = [
  {
    stat: '31,594',
    title: 'Thursday is the peak day',
    body: 'Thursday is the peak day with 31,594 tickets, 24.1% of the total.',
  },
  {
    stat: '38,652',
    title: '8 AM is the busiest hour',
    body: '8 AM is the busiest hour with 38,652 tickets. 8 AM, 10 AM and noon together account for 73% of tickets, right as sweeping windows open.',
  },
  {
    stat: 'Downtown',
    title: 'The hot spot is not Koreatown',
    body: 'Downtown, not Koreatown, is the hot spot, while Koreatown enforcement lands almost entirely on Wednesday and Thursday mornings.',
  },
]

export function Insights() {
  return (
    <Section id="insights" eyebrow="What it means" title="Three things the numbers say">
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {insights.map((item) => (
          <li key={item.title} className="flex">
            <Card className="flex w-full flex-col">
              <p className="text-3xl font-semibold tracking-tight text-teal">{item.stat}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{item.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function HowIBuiltIt() {
  return (
    <Section id="method" eyebrow="Method" title="How I built it">
      <Card>
        <p className="max-w-3xl text-lg leading-relaxed text-ink/80">{method.summary}</p>
        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {method.checks.map((check) => (
            <div key={check.label} className="rounded-2xl bg-[#F1F2EE] p-5">
              <dt className="order-2 mt-2 text-sm leading-snug text-ink/70">{check.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight text-ink tabular-nums">
                {check.value}
              </dd>
            </div>
          ))}
        </dl>
      </Card>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 pt-8 pb-16 sm:px-8">
      <div className="border-t border-ink/10 pt-8 text-sm leading-relaxed text-ink/70">
        <p className="font-medium text-ink">Built by Julio Hernandez with ChatGPT and v0.</p>
        <p className="mt-2">
          Source: City of Los Angeles Open Data, Parking Citations (data.lacity.org). Citation
          counts and listed fines, not fines paid.
        </p>
      </div>
    </footer>
  )
}

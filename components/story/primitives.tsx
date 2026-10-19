import type { ReactNode } from 'react'
import type { BlockRow } from './data'

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24"
    >
      <p className="text-sm font-semibold tracking-wide text-teal uppercase">{eyebrow}</p>
      <h2
        id={`${id}-title`}
        className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pretty text-ink/70">{intro}</p>
      )}
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-3xl border border-ink/10 bg-white p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  )
}

export function StatCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note?: string
}) {
  return (
    <Card className="flex flex-col justify-between gap-6 !p-6">
      <p className="text-sm font-medium text-ink/60">{label}</p>
      <div>
        <p className="text-3xl font-semibold tracking-tight text-ink tabular-nums">
          {value}
        </p>
        {note && <p className="mt-2 text-sm text-ink/60">{note}</p>}
      </div>
    </Card>
  )
}

export function ChartCard({
  title,
  description,
  children,
  className = '',
}: {
  title: string
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <Card className={className}>
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      {description && <p className="mt-1 text-sm text-ink/60">{description}</p>}
      <div className="mt-6">{children}</div>
    </Card>
  )
}

export function BlockTable({
  caption,
  rows,
  className = '',
}: {
  caption: string
  rows: BlockRow[]
  className?: string
}) {
  return (
    <Card className={`!p-0 overflow-hidden ${className}`}>
      <table className="w-full text-left text-base">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-ink/10 text-sm text-ink/60">
            <th scope="col" className="w-16 px-6 py-4 font-medium sm:px-8">
              Rank
            </th>
            <th scope="col" className="px-2 py-4 font-medium">
              Block
            </th>
            <th scope="col" className="px-6 py-4 text-right font-medium sm:px-8">
              Tickets
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.block} className="border-b border-ink/5 last:border-0">
              <td className="px-6 py-3.5 text-sm text-ink/50 tabular-nums sm:px-8">{i + 1}</td>
              <td className="px-2 py-3.5 font-medium text-ink">{row.block}</td>
              <td className="px-6 py-3.5 text-right font-semibold text-ink tabular-nums sm:px-8">
                {row.tickets.toLocaleString('en-US')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

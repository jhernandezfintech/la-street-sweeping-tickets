'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Datum } from './data'

const TEAL = '#0E8A78'
const INK = '#14202B'
const GRID = 'rgba(20, 32, 43, 0.1)'
const TICK = { fill: 'rgba(20, 32, 43, 0.7)', fontSize: 12 }

const formatCount = (n: number) => n.toLocaleString('en-US')

const formatTick = (n: number) => (n >= 1000 ? `${n / 1000}K` : String(n))

type TooltipProps = {
  active?: boolean
  payload?: ReadonlyArray<{ value?: number | string }>
  label?: string | number
  unit: string
}

function ChartTooltip({ active, payload, label, unit }: TooltipProps) {
  if (!active || !payload?.length) return null
  const value = Number(payload[0].value ?? 0)
  return (
    <div className="rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 shadow-lg">
      <p className="text-xs font-medium text-ink/60">{label}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink">
        {formatCount(value)} <span className="font-normal text-ink/60">{unit}</span>
      </p>
    </div>
  )
}

type ColumnChartProps = {
  data: Datum[]
  max: number
  ticks: number[]
  label: string
  height?: number
  showValues?: boolean
}

export function ColumnChart({
  data,
  max,
  ticks,
  label,
  height = 300,
  showValues = false,
}: ColumnChartProps) {
  return (
    <div role="img" aria-label={label} style={{ height }} className="w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
        initialDimension={{ width: 560, height }}
      >
        <BarChart
          data={data}
          margin={{ top: showValues ? 24 : 8, right: 8, bottom: 0, left: 0 }}
        >
          <CartesianGrid vertical={false} stroke={GRID} />
          <XAxis
            dataKey="label"
            tick={TICK}
            tickLine={false}
            axisLine={{ stroke: GRID }}
            tickMargin={8}
          />
          <YAxis
            domain={[0, max]}
            ticks={ticks}
            tickFormatter={formatTick}
            tick={TICK}
            tickLine={false}
            axisLine={false}
            width={44}
          />
          <Tooltip
            cursor={{ fill: 'rgba(14, 138, 120, 0.08)' }}
            content={<ChartTooltip unit="tickets" />}
          />
          <Bar
            dataKey="value"
            fill={TEAL}
            radius={[6, 6, 0, 0]}
            maxBarSize={56}
            activeBar={{ fill: TEAL, fillOpacity: 0.78 }}
            isAnimationActive={false}
          >
            {showValues && (
              <LabelList
                dataKey="value"
                position="top"
                formatter={(v: unknown) => formatCount(Number(v))}
                style={{ fill: INK, fontSize: 12, fontWeight: 600 }}
              />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

type RowChartProps = {
  data: Datum[]
  max: number
  ticks: number[]
  label: string
  height?: number
}

export function RowChart({ data, max, ticks, label, height = 300 }: RowChartProps) {
  return (
    <div role="img" aria-label={label} style={{ height }} className="w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
        initialDimension={{ width: 560, height }}
      >
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 64, bottom: 0, left: 0 }}
        >
          <CartesianGrid horizontal={false} stroke={GRID} />
          <XAxis
            type="number"
            domain={[0, max]}
            ticks={ticks}
            tickFormatter={formatTick}
            tick={TICK}
            tickLine={false}
            axisLine={{ stroke: GRID }}
            tickMargin={8}
          />
          <YAxis
            type="category"
            dataKey="label"
            tick={{ ...TICK, fill: INK, fontWeight: 500 }}
            tickLine={false}
            axisLine={false}
            width={84}
          />
          <Tooltip
            cursor={{ fill: 'rgba(14, 138, 120, 0.08)' }}
            content={<ChartTooltip unit="tickets" />}
          />
          <Bar
            dataKey="value"
            fill={TEAL}
            radius={[0, 6, 6, 0]}
            barSize={30}
            activeBar={{ fill: TEAL, fillOpacity: 0.78 }}
            isAnimationActive={false}
          >
            <LabelList
              dataKey="value"
              position="right"
              formatter={(v: unknown) => formatCount(Number(v))}
              style={{ fill: INK, fontSize: 12, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

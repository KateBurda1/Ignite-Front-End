import { DashboardLayout } from "@/components/dashboard-layout"
import { cn } from "@/lib/utils"
import { ArrowDownRight, ArrowUpRight, Download, MoreHorizontal, Sparkles } from "lucide-react"

const productivityBands = [100, 80, 60, 40, 20]

const cargoContents = [
  { icon: "↗", label: "AMD", share: 61, weight: "782.2 Kg", change: "+4.1%" },
  { icon: "📦", label: "Hewlett-Packard", share: 19, weight: "12,987 Kg", change: "-1.6%" },
  { icon: "🍎", label: "Apple", share: 12, weight: "8,902 Kg", change: "+0.9%" },
]

const delphiData = [
  { month: "Jan", value: 42 },
  { month: "Feb", value: 54 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 64 },
  { month: "May", value: 88 },
  { month: "Jun", value: 92 },
  { month: "Jul", value: 76 },
  { month: "Aug", value: 98 },
  { month: "Sep", value: 70 },
  { month: "Oct", value: 83 },
  { month: "Nov", value: 91 },
  { month: "Dec", value: 100 },
]

const revenueRows = [
  {
    category: "Product Sales",
    status: "Stable",
    q1: "$245K",
    q2: "$298K",
    q3: "$312K",
    q4: "$356K",
    total: "$1,211K",
    growth: "+12.3%",
  },
  {
    category: "Service Revenue",
    status: "Growth",
    q1: "$156K",
    q2: "$189K",
    q3: "$201K",
    q4: "$234K",
    total: "$780K",
    growth: "+15.8%",
  },
  {
    category: "Subscriptions",
    status: "Stable",
    q1: "$89K",
    q2: "$92K",
    q3: "$95K",
    q4: "$98K",
    total: "$374K",
    growth: "+3.2%",
  },
  {
    category: "Licensing",
    status: "Watch",
    q1: "$67K",
    q2: "$71K",
    q3: "$69K",
    q4: "$73K",
    total: "$280K",
    growth: "+2.9%",
  },
  {
    category: "Consulting",
    status: "Growth",
    q1: "$123K",
    q2: "$145K",
    q3: "$167K",
    q4: "$189K",
    total: "$624K",
    growth: "+17.6%",
  },
  {
    category: "Partnerships",
    status: "Decline",
    q1: "$34K",
    q2: "$29K",
    q3: "$31K",
    q4: "$27K",
    total: "$121K",
    growth: "-6.2%",
  },
]

const eventActivity = [
  { month: "Jan", value: 12 },
  { month: "Feb", value: 18 },
  { month: "Mar", value: 26 },
  { month: "Apr", value: 34 },
  { month: "May", value: 30 },
  { month: "Jun", value: 38 },
]

const mvIndicators = [
  { label: "Customer Satisfaction", value: 96 },
  { label: "Net Promoter Score", value: 78 },
  { label: "Product Quality", value: 88 },
  { label: "Service Response", value: 81 },
  { label: "Brand Awareness", value: 69 },
  { label: "Market Share", value: 74 },
]

const marketRows = [
  { segment: "Technology", q1: "23%", q2: "26%", q3: "28%", q4: "31%", yoy: "↑ +8%" },
  { segment: "Healthcare", q1: "18%", q2: "19%", q3: "21%", q4: "22%", yoy: "↑ +4%" },
  { segment: "Finance", q1: "31%", q2: "29%", q3: "27%", q4: "26%", yoy: "↓ -5%" },
  { segment: "Retail", q1: "15%", q2: "17%", q3: "18%", q4: "19%", yoy: "↑ +4%" },
  { segment: "Manufacturing", q1: "22%", q2: "21%", q3: "20%", q4: "18%", yoy: "↓ -4%" },
  { segment: "Education", q1: "12%", q2: "14%", q3: "15%", q4: "17%", yoy: "↑ +5%" },
]

const marketingBreakdown = [
  { label: "Digital Marketing", percent: 35, color: "#7C3AED" },
  { label: "Content Creation", percent: 25, color: "#06B6D4" },
  { label: "Social Media", percent: 20, color: "#F97316" },
  { label: "Email Campaigns", percent: 15, color: "#A855F7" },
  { label: "Events", percent: 5, color: "#22D3EE" },
]

const performanceStats = [
  { label: "Revenue", value: "$967K", change: "+12.5%" },
  { label: "Customers", value: "3,916", change: "+8.2%" },
  { label: "Growth", value: "25.54%", change: "+3.1%" },
  { label: "Target", value: "12,233", change: "+18.9%" },
]

const performanceTrend = [6400, 7200, 7600, 7100, 8300, 9100, 9700, 10300, 9800, 11200, 11800, 12200]

const roasTrend = [
  { month: "Jan", value: 3.1 },
  { month: "Feb", value: 3.4 },
  { month: "Mar", value: 3.7 },
  { month: "Apr", value: 3.9 },
  { month: "May", value: 4.2 },
  { month: "Jun", value: 4.6 },
  { month: "Jul", value: 4.8 },
]

const glassCard =
  "rounded-3xl border border-white/8 bg-white/[0.03] p-6 text-white shadow-[0_40px_120px_rgba(6,0,35,0.45)] backdrop-blur-3xl"

export default function DashboardPage() {
  const maxDelphi = Math.max(...delphiData.map((item) => item.value))
  const maxPerformance = Math.max(...performanceTrend)
  const maxRoas = 5
  const maxEventValue = Math.max(...eventActivity.map((item) => item.value))

  return (
    <DashboardLayout title="Executive Dashboard">
      <div className="relative space-y-8 text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(6,182,212,0.2),_transparent_60%)]" />

        <section className="grid gap-6 xl:grid-cols-12">
          <div className={cn(glassCard, "xl:col-span-3 bg-gradient-to-b from-[#27144A] via-[#1B1230] to-[#120B1F]")}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Productivity</p>
                <h2 className="mt-2 text-5xl font-semibold">82%</h2>
                <p className="mt-2 text-sm text-white/60">
                  Efficiency is above average based on <span className="text-white">56 parameters</span>
                </p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70">
                <Sparkles className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-8 space-y-3">
              {productivityBands.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <span className="w-10 text-xs uppercase tracking-widest text-white/50">{value}%</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#EC4899]"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-5 bg-gradient-to-b from-[#101934] to-[#080C1E]")}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Total weight</p>
                <h3 className="mt-1 text-2xl font-semibold">Ignition indicators</h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white"
              >
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            <span className="mt-6 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-[0.3em] text-emerald-300">
              IN TRANSFER
            </span>
            <div className="mt-8 flex flex-wrap items-center gap-8">
              <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `conic-gradient(#7C3AED ${(28429 / 46000) * 360}deg, rgba(255,255,255,0.08) 0)`,
                  }}
                />
                <div className="absolute inset-3 rounded-full bg-[#060A18]" />
                <div className="absolute text-center">
                  <div className="text-4xl font-semibold">28,429</div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">KG</p>
                  <p className="text-xs text-white/50">from 46,000 kg</p>
                </div>
              </div>
              <div className="space-y-4 text-sm text-white/70">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Active corridors</p>
                  <p className="mt-1 text-2xl font-semibold text-white">12 secured routes</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Transit health</p>
                  <p className="mt-1 flex items-center gap-2 text-lg text-white">
                    96% on schedule
                    <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">Exceptions</p>
                  <p className="mt-1 flex items-center gap-2 text-lg text-white">
                    4 delays
                    <ArrowDownRight className="h-4 w-4 text-rose-400" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-4 bg-gradient-to-b from-[#131E34] to-[#0B1220]")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Cargo contents</p>
                <h3 className="mt-1 text-2xl font-semibold">Task list</h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70"
              >
                VIEW
              </button>
            </div>
            <div className="mt-8 space-y-6">
              {cargoContents.map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-base font-medium">{item.label}</p>
                      <p className="text-sm text-white/60">{item.change}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{item.share}%</p>
                    <p className="text-sm text-white/60">{item.weight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-12">
          <div className={cn(glassCard, "xl:col-span-4")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Year</p>
                <h3 className="text-2xl font-semibold">Delphi</h3>
              </div>
              <button className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                2024
              </button>
            </div>
            <div className="mt-6 h-64 border-t border-white/5 pt-6">
              <div className="flex h-full items-end justify-between gap-3">
                {delphiData.map((item) => (
                  <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex h-full w-full items-end rounded-3xl bg-white/5">
                      <div
                        className="w-full rounded-3xl bg-gradient-to-t from-[#22D3EE] via-[#3B82F6] to-[#8B5CF6]"
                        style={{ height: `${(item.value / maxDelphi) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-white/60">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-8 overflow-hidden")}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Revenue forecast</p>
                <h3 className="text-2xl font-semibold">Operating view</h3>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-white/80">
                <Download className="h-4 w-4" />
                Export data
              </button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="text-white/60">
                    <th className="py-3 pr-4 font-medium">Category</th>
                    <th className="py-3 pr-4 font-medium">Q1</th>
                    <th className="py-3 pr-4 font-medium">Q2</th>
                    <th className="py-3 pr-4 font-medium">Q3</th>
                    <th className="py-3 pr-4 font-medium">Q4</th>
                    <th className="py-3 pr-4 font-medium">Total</th>
                    <th className="py-3 font-medium">Growth %</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {revenueRows.map((row) => (
                    <tr key={row.category} className="text-sm">
                      <td className="py-4 pr-4">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{row.category}</span>
                          <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/60">
                            {row.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 pr-4">{row.q1}</td>
                      <td className="py-4 pr-4">{row.q2}</td>
                      <td className="py-4 pr-4">{row.q3}</td>
                      <td className="py-4 pr-4">{row.q4}</td>
                      <td className="py-4 pr-4 font-semibold">{row.total}</td>
                      <td className="py-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                            row.growth.startsWith("-")
                              ? "bg-rose-500/10 text-rose-200"
                              : "bg-emerald-500/10 text-emerald-200"
                          )}
                        >
                          {row.growth.startsWith("-") ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                          {row.growth}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="text-base font-semibold">
                    <td className="py-4">Total</td>
                    <td className="py-4">$714K</td>
                    <td className="py-4">$824K</td>
                    <td className="py-4">$875K</td>
                    <td className="py-4">$977K</td>
                    <td className="py-4">$3,390K</td>
                    <td className="py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-200">
                        <ArrowUpRight className="h-3 w-3" />
                        +11.4%
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-12">
          <div className={cn(glassCard, "xl:col-span-4")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Event</p>
                <h3 className="text-2xl font-semibold">Event overview</h3>
              </div>
              <span className="text-sm uppercase tracking-[0.3em] text-emerald-300">Active</span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Total Events</p>
                <p className="mt-2 text-3xl font-semibold">149</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Attendance</p>
                <p className="mt-2 text-3xl font-semibold">3,247</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Avg Rating</p>
                <p className="mt-2 text-3xl font-semibold">4.8</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex h-32 items-end justify-between gap-3">
                {eventActivity.map((item) => (
                  <div key={item.month} className="flex flex-1 flex-col items-center gap-2">
                    <div className="w-full rounded-2xl bg-white/5">
                      <div
                        className="rounded-2xl bg-gradient-to-t from-[#06B6D4] to-[#3B82F6]"
                        style={{ height: `${(item.value / maxEventValue) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-white/50">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-4")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">MV Indicators</p>
                <h3 className="text-2xl font-semibold">Customer voice</h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                6 KPIs
              </span>
            </div>
            <div className="mt-8 space-y-4">
              {mvIndicators.map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-sm">
                    <p className="text-white/70">{row.label}</p>
                    <p className="font-semibold">{row.value}%</p>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#34D399] to-[#10B981]"
                      style={{ width: `${row.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-4 overflow-hidden")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Market indicators</p>
                <h3 className="text-2xl font-semibold">Segment view</h3>
              </div>
              <button className="text-xs uppercase tracking-[0.3em] text-white/60">Refocus</button>
            </div>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-white/50">
                  <tr>
                    <th className="py-2 pr-4 font-medium">Segment</th>
                    <th className="py-2 pr-4 font-medium">Q1</th>
                    <th className="py-2 pr-4 font-medium">Q2</th>
                    <th className="py-2 pr-4 font-medium">Q3</th>
                    <th className="py-2 pr-4 font-medium">Q4</th>
                    <th className="py-2 font-medium">YoY</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {marketRows.map((row) => (
                    <tr key={row.segment}>
                      <td className="py-3 pr-4">{row.segment}</td>
                      <td className="py-3 pr-4">{row.q1}</td>
                      <td className="py-3 pr-4">{row.q2}</td>
                      <td className="py-3 pr-4">{row.q3}</td>
                      <td className="py-3 pr-4">{row.q4}</td>
                      <td className="py-3">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                            row.yoy.includes("↓")
                              ? "bg-rose-500/10 text-rose-200"
                              : "bg-emerald-500/10 text-emerald-200"
                          )}
                        >
                          {row.yoy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="grid gap-6 xl:grid-cols-12">
          <div className={cn(glassCard, "xl:col-span-4")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Marketing initiatives</p>
                <h3 className="text-2xl font-semibold">Budget mix</h3>
              </div>
              <button className="text-xs uppercase tracking-[0.3em] text-white/60">Adjust</button>
            </div>
            <div className="mt-8 flex flex-col gap-8 md:flex-row">
              <div className="relative mx-auto flex h-48 w-48 items-center justify-center">
                <svg viewBox="0 0 200 200" className="h-48 w-48 -rotate-90">
                  <circle cx="100" cy="100" r="80" stroke="rgba(255,255,255,0.08)" strokeWidth="24" fill="none" />
                  {(() => {
                    const circumference = 2 * Math.PI * 80
                    let cumulative = 0
                    return marketingBreakdown.map((slice) => {
                      const dash = (slice.percent / 100) * circumference
                      const circle = (
                        <circle
                          key={slice.label}
                          cx="100"
                          cy="100"
                          r="80"
                          stroke={slice.color}
                          strokeWidth="24"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${dash} ${circumference}`}
                          strokeDashoffset={-cumulative}
                        />
                      )
                      cumulative += dash
                      return circle
                    })
                  })()}
                </svg>
                <div className="absolute text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Focus</p>
                  <p className="text-3xl font-semibold">Digital</p>
                  <p className="text-sm text-white/50">35% allocation</p>
                </div>
              </div>
              <div className="space-y-4">
                {marketingBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm">
                      <p>{item.label}</p>
                      <p className="font-semibold">{item.percent}%</p>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-5")}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Performance metrics</p>
                <h3 className="text-2xl font-semibold">Executive summary</h3>
              </div>
              <button className="text-xs uppercase tracking-[0.3em] text-white/60">Last 12 months</button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {performanceStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{stat.label}</span>
                    <span>{stat.change}</span>
                  </div>
                  <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="h-48">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                  <polygon
                    points={`0,100 ${performanceTrend
                      .map((value, index) => {
                        const x = (index / (performanceTrend.length - 1)) * 100
                        const y = 100 - (value / maxPerformance) * 100
                        return `${x},${y}`
                      })
                      .join(" ")} 100,100`}
                    fill="url(#gradientArea)"
                  />
                  <polyline
                    points={performanceTrend
                      .map((value, index) => {
                        const x = (index / (performanceTrend.length - 1)) * 100
                        const y = 100 - (value / maxPerformance) * 100
                        return `${x},${y}`
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="1.5"
                  />
                  <defs>
                    <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(124,58,237,0.4)" />
                      <stop offset="100%" stopColor="rgba(124,58,237,0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className={cn(glassCard, "xl:col-span-3")}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">ROAS for MV</p>
                <h3 className="text-2xl font-semibold">Return on ad spend</h3>
                <p className="mt-2 text-sm text-white/60">Average 3.9x</p>
              </div>
            </div>
            <div className="mt-6 flex h-48 items-end gap-3">
              {roasTrend.map((point) => (
                <div key={point.month} className="flex-1">
                  <div className="flex h-40 items-end rounded-2xl bg-white/5">
                    <div
                      className="w-full rounded-2xl bg-gradient-to-t from-[#F97316] to-[#FDE68A]"
                      style={{ height: `${(point.value / maxRoas) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-center text-xs text-white/60">{point.month}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl border border-white/5 p-4">
                <p className="text-white/50">Best</p>
                <p className="mt-2 text-2xl font-semibold">4.5x</p>
              </div>
              <div className="rounded-2xl border border-white/5 p-4">
                <p className="text-white/50">Target</p>
                <p className="mt-2 text-2xl font-semibold">5.0x</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-4 text-xs uppercase tracking-[0.3em] text-white/40">
          <span>Ignite executive dashboard — updated hourly</span>
          <span className="inline-flex items-center gap-2">
            status
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              On track
            </span>
          </span>
        </footer>
      </div>
    </DashboardLayout>
  )
}


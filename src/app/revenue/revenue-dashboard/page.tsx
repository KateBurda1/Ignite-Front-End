"use client"

import * as React from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Info, X, Save, ArrowUpRight, ArrowDownRight, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const glassCard =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-2xl backdrop-blur-3xl"

export default function RevenueDashboardPage() {
  const [saleCycle, setSaleCycle] = React.useState<string>("")
  const [focusSaleCycle, setFocusSaleCycle] = React.useState<string>("")
  const [saleCycleComment, setSaleCycleComment] = React.useState<string>("")
  const [executiveComment, setExecutiveComment] = React.useState<string>("")

  // Mock data - replace with actual data later
  const tableData = [
    { segment: "Segment 1", roomsSold: 120, price: 245, compRoomsSold: 110, compPrice: 230, champion: "John Doe" },
    { segment: "Segment 2", roomsSold: 85, price: 310, compRoomsSold: 90, compPrice: 300, champion: "Jane Smith" },
    { segment: "Segment 3", roomsSold: 200, price: 180, compRoomsSold: 180, compPrice: 175, champion: "Mike Johnson" },
  ]

  return (
    <DashboardLayout title="Revenue">
      <div className="relative space-y-6 text-white">
        {/* Background Effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(6,182,212,0.1),_transparent_60%)]" />

        {/* Header & Controls Section */}
        <div className={cn(glassCard, "bg-gradient-to-r from-[#1a1f35]/80 to-[#101426]/80")}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Revenue Management</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">Revenue Dashboard</h2>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Info className="mr-2 h-4 w-4" />
                Help
              </Button>
              <Button variant="outline" size="sm" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          <Separator className="my-6 bg-white/10" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">Sale Cycle</label>
              <Select value={saleCycle} onValueChange={setSaleCycle}>
                <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-offset-0">
                  <SelectValue placeholder="Select Sale Cycle" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-[#1a1f35] text-white">
                  <SelectItem value="2021">2021 (365 Days)</SelectItem>
                  <SelectItem value="2022">2022 (365 Days)</SelectItem>
                  <SelectItem value="2023">2023 (365 Days)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">Focus Sales Cycle</label>
              <Select value={focusSaleCycle} onValueChange={setFocusSaleCycle}>
                <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-offset-0">
                  <SelectValue placeholder="Select Focus Cycle" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-[#1a1f35] text-white">
                  <SelectItem value="2021">2021 (365 Days)</SelectItem>
                  <SelectItem value="2022">2022 (365 Days)</SelectItem>
                  <SelectItem value="2023">2023 (365 Days)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 xl:grid-cols-12">
          {/* Left: Data Table Section */}
          <div className={cn(glassCard, "xl:col-span-8 overflow-hidden")}>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Performance Data</p>
                <h3 className="text-xl font-semibold">Segmentation Analysis</h3>
              </div>
              <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest text-white/60 hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
            
            <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/5">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-white/60 bg-white/5">
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Segmentation</th>
                    <th className="px-6 py-4 text-right font-medium uppercase tracking-wider text-xs">Rooms Sold</th>
                    <th className="px-6 py-4 text-right font-medium uppercase tracking-wider text-xs">Price $</th>
                    <th className="px-6 py-4 text-right font-medium uppercase tracking-wider text-xs">Comp Rooms</th>
                    <th className="px-6 py-4 text-right font-medium uppercase tracking-wider text-xs">Comp Price</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Champion</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {tableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.segment}</td>
                      <td className="px-6 py-4 text-right">{row.roomsSold}</td>
                      <td className="px-6 py-4 text-right">${row.price}</td>
                      <td className="px-6 py-4 text-right text-white/60">{row.compRoomsSold}</td>
                      <td className="px-6 py-4 text-right text-white/60">${row.compPrice}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/80">
                          {row.champion}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white/5 font-semibold">
                    <td className="px-6 py-4">Total</td>
                    <td className="px-6 py-4 text-right">{tableData.reduce((acc, row) => acc + row.roomsSold, 0)}</td>
                    <td className="px-6 py-4 text-right">-</td>
                    <td className="px-6 py-4 text-right">{tableData.reduce((acc, row) => acc + row.compRoomsSold, 0)}</td>
                    <td className="px-6 py-4 text-right">-</td>
                    <td className="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Metrics Cards */}
          <div className="space-y-6 xl:col-span-4">
            {/* Rooms Sold Card */}
            <div className={cn(glassCard, "bg-gradient-to-br from-[#131E34] to-[#0B1220]")}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Rooms Sold</h3>
                <span className="text-xs uppercase tracking-widest text-emerald-400">Growth</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-xs text-white/50 uppercase">Mix %</p>
                  <p className="text-2xl font-semibold mt-1">42%</p>
                </div>
                <div className="rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                  <p className="text-xs text-emerald-300 uppercase">Change</p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUpRight className="h-4 w-4 text-emerald-400" />
                    <p className="text-2xl font-semibold text-emerald-400">+12%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Card */}
            <div className={cn(glassCard, "bg-gradient-to-br from-[#27144A] to-[#120B1F]")}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Price Performance</h3>
                <span className="text-xs uppercase tracking-widest text-dashboard-purple">Stable</span>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-white/50 uppercase">YoY Change</p>
                    <p className="text-3xl font-semibold mt-1">+5.2%</p>
                  </div>
                  <div className="h-10 w-20">
                     {/* Mini sparkline placeholder */}
                     <div className="h-full w-full bg-gradient-to-t from-purple-500/50 to-transparent rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className={cn(glassCard, "bg-gradient-to-br from-[#101934] to-[#080C1E]")}>
               <div className="mb-4">
                <h3 className="text-lg font-semibold">Revenue</h3>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-sm text-white/60">Mix of Revenue</span>
                    <span className="font-semibold">68%</span>
                 </div>
                 <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-sm text-white/60">Cost of Acq.</span>
                    <span className="font-semibold">$12,450</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-sm text-white/60">Gross Margin</span>
                    <span className="font-semibold text-emerald-400">24%</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className={cn(glassCard)}>
            <div className="mb-4">
               <p className="text-sm uppercase tracking-[0.3em] text-white/60">Analysis</p>
               <h3 className="text-lg font-semibold">Sale Cycle Comment</h3>
            </div>
            <Textarea
              placeholder="Enter analysis for this sale cycle..."
              value={saleCycleComment}
              onChange={(e) => setSaleCycleComment(e.target.value)}
              className="min-h-[120px] resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-white/20"
            />
          </div>
          <div className={cn(glassCard)}>
            <div className="mb-4">
               <p className="text-sm uppercase tracking-[0.3em] text-white/60">Strategy</p>
               <h3 className="text-lg font-semibold">Executive Comment</h3>
            </div>
            <Textarea
              placeholder="Enter strategic overview..."
              value={executiveComment}
              onChange={(e) => setExecutiveComment(e.target.value)}
              className="min-h-[120px] resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-white/20"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

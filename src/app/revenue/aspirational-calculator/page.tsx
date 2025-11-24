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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Info, Save, Calculator, Target, TrendingUp, DollarSign, Percent } from "lucide-react"
import { cn } from "@/lib/utils"

const glassCard =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-2xl backdrop-blur-3xl"

export default function AspirationalCalculatorPage() {
  const [saleCycle, setSaleCycle] = React.useState<string>("2021")
  const [synopsis, setSynopsis] = React.useState<string>("")

  // Roomnights data
  const [roomnights, setRoomnights] = React.useState<string>("")
  const [marketOccupancy, setMarketOccupancy] = React.useState<string>("")
  const [occupancyPercent, setOccupancyPercent] = React.useState<string>("")
  const [marketOccupancyPercent, setMarketOccupancyPercent] = React.useState<string>("")
  const [volumePriceIndexGoal, setVolumePriceIndexGoal] = React.useState<string>("")
  const [marketShareIndexGoal, setMarketShareIndexGoal] = React.useState<string>("")

  // Hotel ADR data
  const [hotelADR, setHotelADR] = React.useState<string>("")
  const [marketADR, setMarketADR] = React.useState<string>("")
  const [adrVolumePriceIndexGoal, setAdrVolumePriceIndexGoal] = React.useState<string>("")
  const [adrMarketShareIndexGoal, setAdrMarketShareIndexGoal] = React.useState<string>("")

  // RevPAR data
  const [revpar, setRevpar] = React.useState<string>("")
  const [marketRevpar, setMarketRevpar] = React.useState<string>("")

  // Current Revenue data
  const currentRevenue = {
    roomsSold: 615,
    adr: 240,
    revenue: 147672,
    revenueCycleTotal: 53900280,
  }

  return (
    <DashboardLayout title="Aspirational">
      <div className="relative space-y-6 text-white">
        {/* Background Effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(6,182,212,0.1),_transparent_60%)]" />

        {/* Header Section */}
        <div className={cn(glassCard, "bg-gradient-to-r from-[#1a1f35]/80 to-[#101426]/80")}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Revenue Management</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">Aspirational Calculator</h2>
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

          <div className="w-full md:w-1/3">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">Sales Cycle</label>
              <Select value={saleCycle} onValueChange={setSaleCycle}>
                <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-offset-0 h-10">
                  <SelectValue />
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
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-5">
          {/* Left Column - Inputs */}
          <div className="space-y-6 xl:col-span-1">
            
            {/* Roomnights Table */}
            <div className={cn(glassCard, "p-5")}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-4 w-4 text-emerald-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Roomnights</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Roomnights</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={roomnights}
                      onChange={(e) => setRoomnights(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">#</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market Occupancy</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketOccupancy}
                      onChange={(e) => setMarketOccupancy(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">#</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Occupancy %</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={occupancyPercent}
                      onChange={(e) => setOccupancyPercent(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market Occ %</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketOccupancyPercent}
                      onChange={(e) => setMarketOccupancyPercent(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Index</label>
                  <Input type="number" disabled className="h-8 bg-white/5 border-white/5 text-white/50 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Vol & Price Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={volumePriceIndexGoal}
                      onChange={(e) => setVolumePriceIndexGoal(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market Share Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketShareIndexGoal}
                      onChange={(e) => setMarketShareIndexGoal(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel ADR Table */}
            <div className={cn(glassCard, "p-5")}>
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-4 w-4 text-dashboard-purple" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">Hotel ADR</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Hotel ADR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={hotelADR}
                      onChange={(e) => setHotelADR(e.target.value)}
                      className="pl-6 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">$</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market ADR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketADR}
                      onChange={(e) => setMarketADR(e.target.value)}
                      className="pl-6 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">$</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Index</label>
                  <Input type="number" disabled className="h-8 bg-white/5 border-white/5 text-white/50 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Vol & Price Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={adrVolumePriceIndexGoal}
                      onChange={(e) => setAdrVolumePriceIndexGoal(e.target.value)}
                      className="pl-6 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">$</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market Share Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={adrMarketShareIndexGoal}
                      onChange={(e) => setAdrMarketShareIndexGoal(e.target.value)}
                      className="pr-8 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white/40">%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RevPAR Table */}
            <div className={cn(glassCard, "p-5")}>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-blue-400" />
                <h3 className="text-sm font-semibold uppercase tracking-wider">RevPAR</h3>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">RevPAR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={revpar}
                      onChange={(e) => setRevpar(e.target.value)}
                      className="pl-6 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">$</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market RevPAR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketRevpar}
                      onChange={(e) => setMarketRevpar(e.target.value)}
                      className="pl-6 h-8 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-sm"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white/40">$</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Index</label>
                  <Input type="number" disabled className="h-8 bg-white/5 border-white/5 text-white/50 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-white/50">Market Share Goal</label>
                  <Input type="number" disabled className="h-8 bg-white/5 border-white/5 text-white/50 text-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6 xl:col-span-4">
            {/* Current Revenue Card */}
            <div className={cn(glassCard, "bg-gradient-to-br from-[#101934] to-[#080C1E]")}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Current Revenue Performance</h3>
                <span className="text-xs uppercase tracking-widest text-emerald-400">Live Data</span>
              </div>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Rooms Sold</p>
                  <p className="text-3xl font-semibold">{currentRevenue.roomsSold}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">ADR</p>
                  <p className="text-3xl font-semibold">${currentRevenue.adr}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Revenue</p>
                  <p className="text-3xl font-semibold text-emerald-400">
                    ${currentRevenue.revenue.toLocaleString()}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Cycle Total</p>
                  <p className="text-3xl font-semibold text-dashboard-purple">
                    ${currentRevenue.revenueCycleTotal.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Panels */}
            <div className="space-y-4">
              <Accordion type="multiple" defaultValue={["roomnights", "market-share"]} className="w-full space-y-4">
                {/* Roomnights and Rate Panel */}
                <AccordionItem value="roomnights" className="border-none">
                  <div className={cn(glassCard, "p-0 overflow-hidden")}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-white/5 hover:no-underline">
                      <div className="flex items-center gap-2">
                         <Calculator className="h-5 w-5 text-dashboard-purple" />
                         <span className="text-lg font-semibold">Roomnights and Rate Analysis</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="space-y-6">
                        <div className="rounded-xl bg-dashboard-purple/10 p-4 border border-dashboard-purple/20">
                          <p className="text-sm text-dashboard-purple/80">
                            To reach your goal we will need{" "}
                            <span className="font-bold text-white">633</span> in volume
                            in price rate of{" "}
                            <span className="font-bold text-white">$248.00</span> or more
                          </p>
                        </div>

                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">Occupancy</p>
                            <p className="text-2xl font-semibold">90.5%</p>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">ADR</p>
                            <p className="text-2xl font-semibold">$248.00</p>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">RevPAR</p>
                            <p className="text-2xl font-semibold">$224.44</p>
                          </div>
                        </div>

                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">Occ. Index</p>
                            <div className="flex items-center justify-center gap-2">
                                <p className="text-2xl font-semibold text-emerald-400">103%</p>
                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                            </div>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">ADR Index</p>
                             <div className="flex items-center justify-center gap-2">
                                <p className="text-2xl font-semibold text-emerald-400">103%</p>
                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                            </div>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">RevPAR Index</p>
                             <div className="flex items-center justify-center gap-2">
                                <p className="text-2xl font-semibold text-emerald-400">107%</p>
                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                            </div>
                          </div>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/5">
                          <table className="w-full text-left text-sm">
                            <thead>
                              <tr className="border-b border-white/5 text-white/60 bg-white/5">
                                <th className="px-6 py-3 font-medium uppercase tracking-wider text-xs">Metric</th>
                                <th className="px-6 py-3 text-right font-medium uppercase tracking-wider text-xs">
                                  Future Revenue
                                </th>
                                <th className="px-6 py-3 text-right font-medium uppercase tracking-wider text-xs">Delta</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white">
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Rooms Sold</td>
                                <td className="px-6 py-3 text-right">633</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+18</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">ADR</td>
                                <td className="px-6 py-3 text-right">$248.00</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$8</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Revenue</td>
                                <td className="px-6 py-3 text-right">$157,058</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$9,386</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Revenue Cycle Total</td>
                                <td className="px-6 py-3 text-right">$57,326,316</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$3,426,036</td>
                              </tr>
                              <tr className="bg-white/5">
                                <td className="px-6 py-3 font-medium text-white/70">Multiplier</td>
                                <td className="px-6 py-3 text-right font-semibold">106%</td>
                                <td className="px-6 py-3 text-right"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>

                {/* Market Share Panel */}
                <AccordionItem value="market-share" className="border-none">
                  <div className={cn(glassCard, "p-0 overflow-hidden")}>
                    <AccordionTrigger className="px-6 py-4 hover:bg-white/5 hover:no-underline">
                      <div className="flex items-center gap-2">
                         <Percent className="h-5 w-5 text-blue-400" />
                         <span className="text-lg font-semibold">Market Share Analysis</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 pt-2">
                      <div className="space-y-6">
                        <div className="rounded-xl bg-blue-500/10 p-4 border border-blue-500/20">
                          <p className="text-sm text-blue-200/80">
                            To reach your goal we will need{" "}
                            <span className="font-bold text-white">620</span> in volume
                            in price rate of{" "}
                            <span className="font-bold text-white">$273.60</span> or more
                          </p>
                        </div>

                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">Occupancy</p>
                            <p className="text-2xl font-semibold">88.58%</p>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">ADR</p>
                            <p className="text-2xl font-semibold">$273.60</p>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5 text-center">
                            <p className="text-xs uppercase text-white/50 mb-1">RevPAR</p>
                            <p className="text-2xl font-semibold">$242.35</p>
                          </div>
                        </div>

                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                            <p className="text-xs uppercase text-white/50 mb-2">Roomnights to Goal</p>
                            <p className="text-2xl font-semibold">5</p>
                          </div>
                          <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                            <p className="text-xs uppercase text-white/50 mb-2">Total Timeframe Roomnights</p>
                            <p className="text-2xl font-semibold">1,825</p>
                          </div>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/5">
                          <table className="w-full text-left text-sm">
                            <thead>
                              <tr className="border-b border-white/5 text-white/60 bg-white/5">
                                <th className="px-6 py-3 font-medium uppercase tracking-wider text-xs">Metric</th>
                                <th className="px-6 py-3 text-right font-medium uppercase tracking-wider text-xs">
                                  Future Revenue
                                </th>
                                <th className="px-6 py-3 text-right font-medium uppercase tracking-wider text-xs">Delta</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-white">
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Rooms Sold</td>
                                <td className="px-6 py-3 text-right">620</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+5</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">ADR</td>
                                <td className="px-6 py-3 text-right">$273.60</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$33.6</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Revenue</td>
                                <td className="px-6 py-3 text-right">$169,648</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$21,976</td>
                              </tr>
                              <tr className="hover:bg-white/5 transition-colors">
                                <td className="px-6 py-3 font-medium">Revenue Cycle Total</td>
                                <td className="px-6 py-3 text-right">$61,921,672</td>
                                <td className="px-6 py-3 text-right text-emerald-400 font-medium">+$8,021,392</td>
                              </tr>
                              <tr className="bg-white/5">
                                <td className="px-6 py-3 font-medium text-white/70">Multiplier</td>
                                <td className="px-6 py-3 text-right font-semibold">115%</td>
                                <td className="px-6 py-3 text-right"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Synopsis Section */}
            <div className={cn(glassCard)}>
              <div className="mb-4">
                 <p className="text-sm uppercase tracking-[0.3em] text-white/60">Strategy</p>
                 <h3 className="text-lg font-semibold">Aspirational Synopsis</h3>
              </div>
              <Textarea
                placeholder="Enter aspirational synopsis..."
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                className="min-h-[120px] resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-white/20"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

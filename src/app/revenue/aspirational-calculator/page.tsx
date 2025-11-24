"use client"

import * as React from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Info, Save } from "lucide-react"

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
      <div className="mt-4 space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">ASPIRATIONAL CALCULATOR</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" title="Help" type="button">
                <Info className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" title="Save Aspirational" type="button">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-5">
          {/* Left Column - 20% */}
          <div className="space-y-4 xl:col-span-1">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sales Cycle</label>
              <Select value={saleCycle} onValueChange={setSaleCycle}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2021">2021 (365 Days)</SelectItem>
                  <SelectItem value="2022">2022 (365 Days)</SelectItem>
                  <SelectItem value="2023">2023 (365 Days)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Roomnights Table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-sm">Roomnights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Roomnights</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={roomnights}
                      onChange={(e) => setRoomnights(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      #
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market Occupancy</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketOccupancy}
                      onChange={(e) => setMarketOccupancy(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      #
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Occupancy %</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={occupancyPercent}
                      onChange={(e) => setOccupancyPercent(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market Occupancy %</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketOccupancyPercent}
                      onChange={(e) => setMarketOccupancyPercent(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Index</label>
                  <Input type="number" disabled className="bg-muted" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">
                    Volume & Price Index Goal
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={volumePriceIndexGoal}
                      onChange={(e) => setVolumePriceIndexGoal(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market Share Index Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketShareIndexGoal}
                      onChange={(e) => setMarketShareIndexGoal(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hotel ADR Table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-sm">Hotel ADR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Hotel ADR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={hotelADR}
                      onChange={(e) => setHotelADR(e.target.value)}
                      className="pl-6"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market ADR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketADR}
                      onChange={(e) => setMarketADR(e.target.value)}
                      className="pl-6"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Index</label>
                  <Input type="number" disabled className="bg-muted" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">
                    Volume & Price Index Goal
                  </label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={adrVolumePriceIndexGoal}
                      onChange={(e) => setAdrVolumePriceIndexGoal(e.target.value)}
                      className="pl-6"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market Share Index Goal</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={adrMarketShareIndexGoal}
                      onChange={(e) => setAdrMarketShareIndexGoal(e.target.value)}
                      className="pr-8"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      %
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RevPAR Table */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-center text-sm">RevPAR</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">RevPAR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={revpar}
                      onChange={(e) => setRevpar(e.target.value)}
                      className="pl-6"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market RevPAR</label>
                  <div className="relative">
                    <Input
                      type="number"
                      value={marketRevpar}
                      onChange={(e) => setMarketRevpar(e.target.value)}
                      className="pl-6"
                    />
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                      $
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Index</label>
                  <Input type="number" disabled className="bg-muted" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Market Share Index Goal</label>
                  <Input type="number" disabled className="bg-muted" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - 80% */}
          <div className="space-y-4 xl:col-span-4">
            {/* Current Revenue Card */}
            <Card>
              <CardHeader>
                <CardTitle>Current Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Rooms Sold</p>
                    <p className="text-lg font-semibold">{currentRevenue.roomsSold}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ADR</p>
                    <p className="text-lg font-semibold">${currentRevenue.adr}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-lg font-semibold">
                      ${currentRevenue.revenue.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue Cycle Total</p>
                    <p className="text-lg font-semibold">
                      ${currentRevenue.revenueCycleTotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accordion Panels */}
            <Accordion type="multiple" defaultValue={["roomnights", "market-share"]}>
              {/* Roomnights and Rate Panel */}
              <AccordionItem value="roomnights">
                <AccordionTrigger>Roomnights and Rate</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      To reach your goal we will need{" "}
                      <span className="font-semibold text-dashboard-purple">633</span> in volume
                      in price rate of{" "}
                      <span className="font-semibold text-dashboard-purple">$248.00</span> or more
                    </p>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">Occupancy</p>
                          <p className="text-2xl font-semibold">90.5%</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">ADR</p>
                          <p className="text-2xl font-semibold">$248.00</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">RevPAR</p>
                          <p className="text-2xl font-semibold">$224.44</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">Occupancy Index</p>
                          <p className="text-2xl font-semibold">103%</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">ADR Index</p>
                          <p className="text-2xl font-semibold">103%</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">RevPAR Index</p>
                          <p className="text-2xl font-semibold">107%</p>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="px-4 py-3 text-left text-sm font-medium"></th>
                                <th className="px-4 py-3 text-right text-sm font-medium">
                                  Future Revenue
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-medium">Delta</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Rooms Sold</td>
                                <td className="px-4 py-3 text-right text-sm">633</td>
                                <td className="px-4 py-3 text-right text-sm">18</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">ADR</td>
                                <td className="px-4 py-3 text-right text-sm">$248.00</td>
                                <td className="px-4 py-3 text-right text-sm">$8</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Revenue</td>
                                <td className="px-4 py-3 text-right text-sm">$157,058</td>
                                <td className="px-4 py-3 text-right text-sm">$9,386</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Revenue Cycle Total</td>
                                <td className="px-4 py-3 text-right text-sm">$57,326,316</td>
                                <td className="px-4 py-3 text-right text-sm">$3,426,036</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-sm">Multiplier</td>
                                <td className="px-4 py-3 text-right text-sm">106%</td>
                                <td className="px-4 py-3 text-right text-sm"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Market Share Panel */}
              <AccordionItem value="market-share">
                <AccordionTrigger>Market Share</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p className="text-sm">
                      To reach your goal we will need{" "}
                      <span className="font-semibold text-dashboard-purple">620</span> in volume
                      in price rate of{" "}
                      <span className="font-semibold text-dashboard-purple">$273.60</span> or more
                    </p>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">Occupancy</p>
                          <p className="text-2xl font-semibold">88.58%</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">ADR</p>
                          <p className="text-2xl font-semibold">$273.60</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">RevPAR</p>
                          <p className="text-2xl font-semibold">$242.35</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">
                            Roomnights to Achieve Goal Index
                          </p>
                          <p className="text-2xl font-semibold">5</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground">
                            Roomnights within Timeframe to Achieve Goal
                          </p>
                          <p className="text-2xl font-semibold">1,825</p>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardContent className="p-0">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="px-4 py-3 text-left text-sm font-medium"></th>
                                <th className="px-4 py-3 text-right text-sm font-medium">
                                  Future Revenue
                                </th>
                                <th className="px-4 py-3 text-right text-sm font-medium">Delta</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Rooms Sold</td>
                                <td className="px-4 py-3 text-right text-sm">620</td>
                                <td className="px-4 py-3 text-right text-sm">5</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">ADR</td>
                                <td className="px-4 py-3 text-right text-sm">$273.60</td>
                                <td className="px-4 py-3 text-right text-sm">$33.6</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Revenue</td>
                                <td className="px-4 py-3 text-right text-sm">$169,648</td>
                                <td className="px-4 py-3 text-right text-sm">$21,976</td>
                              </tr>
                              <tr className="border-b">
                                <td className="px-4 py-3 text-sm">Revenue Cycle Total</td>
                                <td className="px-4 py-3 text-right text-sm">$61,921,672</td>
                                <td className="px-4 py-3 text-right text-sm">$8,021,392</td>
                              </tr>
                              <tr>
                                <td className="px-4 py-3 text-sm">Multiplier</td>
                                <td className="px-4 py-3 text-right text-sm">115%</td>
                                <td className="px-4 py-3 text-right text-sm"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Synopsis Section */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Aspirational Synopsis</label>
              <Textarea
                placeholder="Enter aspirational synopsis..."
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}


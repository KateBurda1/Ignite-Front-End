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
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Info, X, Save } from "lucide-react"

export default function RevenueDashboardPage() {
  const [saleCycle, setSaleCycle] = React.useState<string>("")
  const [focusSaleCycle, setFocusSaleCycle] = React.useState<string>("")
  const [saleCycleComment, setSaleCycleComment] = React.useState<string>("")
  const [executiveComment, setExecutiveComment] = React.useState<string>("")

  // Mock data - replace with actual data later
  const tableData = [
    { segment: "Segment 1", roomsSold: 0, price: 0, compRoomsSold: 0, compPrice: 0, champion: "" },
    // Add more rows as needed
  ]

  return (
    <DashboardLayout title="Revenue">
      <div className="mt-4 space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">REVENUE DASHBOARD</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" title="Help" type="button">
                <Info className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" title="Close" type="button">
                <X className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" title="Save" type="button">
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator />
        </div>

        {/* Filter Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Sale Cycle</label>
            <Select value={saleCycle} onValueChange={setSaleCycle}>
              <SelectTrigger>
                <SelectValue placeholder="Select Sale Cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021 (365 Days)</SelectItem>
                <SelectItem value="2022">2022 (365 Days)</SelectItem>
                <SelectItem value="2023">2023 (365 Days)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Focus Sales Cycle</label>
            <Select value={focusSaleCycle} onValueChange={setFocusSaleCycle}>
              <SelectTrigger>
                <SelectValue placeholder="Select Focus Sales Cycle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021 (365 Days)</SelectItem>
                <SelectItem value="2022">2022 (365 Days)</SelectItem>
                <SelectItem value="2023">2023 (365 Days)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          {/* Left: Data Table Section */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-medium">Sale Cycle</p>
              </div>
              <div>
                <p className="font-medium">Comparative Sale Cycle</p>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-card z-10">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left text-sm font-medium">Segmentation</th>
                        <th className="px-4 py-3 text-right text-sm font-medium">Rooms Sold</th>
                        <th className="px-4 py-3 text-right text-sm font-medium">Price $</th>
                        <th className="px-4 py-3 text-right text-sm font-medium">Rooms Sold</th>
                        <th className="px-4 py-3 text-right text-sm font-medium">Price $</th>
                        <th className="px-4 py-3 text-left text-sm font-medium">Segment Champion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="px-4 py-3 text-sm">{row.segment}</td>
                          <td className="px-4 py-3 text-right text-sm">{row.roomsSold}</td>
                          <td className="px-4 py-3 text-right text-sm">${row.price}</td>
                          <td className="px-4 py-3 text-right text-sm">{row.compRoomsSold}</td>
                          <td className="px-4 py-3 text-right text-sm">${row.compPrice}</td>
                          <td className="px-4 py-3 text-sm">{row.champion}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t font-medium">
                        <td className="px-4 py-3 text-sm">Total</td>
                        <td className="px-4 py-3 text-right text-sm">0</td>
                        <td className="px-4 py-3 text-right text-sm">$0</td>
                        <td className="px-4 py-3 text-right text-sm">0</td>
                        <td className="px-4 py-3 text-right text-sm">$0</td>
                        <td className="px-4 py-3 text-sm"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Additional Tables for Rooms Sold, Price, Revenue */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Rooms Sold</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-2 py-2 text-right">% Mix Rooms Sold</th>
                          <th className="px-2 py-2 text-right">% Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-right">0%</td>
                          <td className="px-2 py-2 text-right">0%</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="border-t">
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-2 py-2 text-right">% Change YOY</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-right">0%</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="border-t">
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="px-2 py-2 text-right">% Mix of Revenue</th>
                          <th className="px-2 py-2 text-right">Cost of Acquisition $</th>
                          <th className="px-2 py-2 text-right">Revenue Gross Profit Margin</th>
                          <th className="px-2 py-2 text-right">Revenue $</th>
                          <th className="px-2 py-2 text-right">Revenue % Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-right">0%</td>
                          <td className="px-2 py-2 text-right">$0</td>
                          <td className="px-2 py-2 text-right">0%</td>
                          <td className="px-2 py-2 text-right">$0</td>
                          <td className="px-2 py-2 text-right">0%</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr className="border-t">
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                          <td className="px-2 py-2 text-right font-medium">$0</td>
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                          <td className="px-2 py-2 text-right font-medium">$0</td>
                          <td className="px-2 py-2 text-right font-medium">0%</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Revenue Analysis Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-lg">Revenue Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex h-64 items-center justify-center text-muted-foreground">
                  <p>Chart placeholder - Revenue Analysis visualization</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Synopsis Section */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Sale Cycle Comment</label>
            <Textarea
              placeholder="Enter sale cycle comment..."
              value={saleCycleComment}
              onChange={(e) => setSaleCycleComment(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Executive Comment</label>
            <Textarea
              placeholder="Enter executive comment..."
              value={executiveComment}
              onChange={(e) => setExecutiveComment(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}


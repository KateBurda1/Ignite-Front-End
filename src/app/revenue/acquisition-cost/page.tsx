"use client"

import * as React from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
import { Info, X, Save, Plus, ChevronDown, ChevronRight } from "lucide-react"

interface RowData {
  id: string
  label: string
  callGating: string
  brandExpense: string
  reservationFee: string
  loyalty: string
  commission: string
  total: string
  children?: RowData[]
  isExpanded?: boolean
}

const initialData: RowData[] = [
  {
    id: "transient",
    label: "A- Transient",
    callGating: "0",
    brandExpense: "0",
    reservationFee: "0",
    loyalty: "0",
    commission: "0",
    total: "0",
    children: [
      {
        id: "bar",
        label: "BAR",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "transient-discount",
        label: "Transient Discount",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "transient-imm",
        label: "Transient IMM",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "transient-package",
        label: "Transient Package",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
    ],
  },
  {
    id: "corporate",
    label: "B- Corporate",
    callGating: "0",
    brandExpense: "0",
    reservationFee: "0",
    loyalty: "0",
    commission: "0",
    total: "0",
    children: [
      {
        id: "consortia",
        label: "Consortia",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "corporate-accounts",
        label: "Corporate Accounts",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
    ],
  },
  {
    id: "group",
    label: "C- Group",
    callGating: "0",
    brandExpense: "0",
    reservationFee: "0",
    loyalty: "0",
    commission: "0",
    total: "0",
    children: [
      {
        id: "convention-domestic",
        label: "Convention Association -Domestic",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "convention-global",
        label: "Convention Association -Global",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "corporate-meetings",
        label: "Corporate Meetings -Domestic",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "incentive-meeting",
        label: "Incentive Meeting -Domestic",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "smerfe",
        label: "SMERFE",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "tour-ad-hoc",
        label: "Tour Ad Hoc",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "tour-group-series",
        label: "Tour Group Series",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "wholesale-key",
        label: "Wholesale / FIT- Key Account",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "wholesale-other",
        label: "Wholesale / FIT Other",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
    ],
  },
  {
    id: "enterprise",
    label: "E- Enterprise",
    callGating: "0",
    brandExpense: "0",
    reservationFee: "0",
    loyalty: "0",
    commission: "0",
    total: "0",
    children: [
      {
        id: "enterprise-empty",
        label: "",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
      {
        id: "enterprise",
        label: "Enterprise",
        callGating: "",
        brandExpense: "",
        reservationFee: "",
        loyalty: "",
        commission: "",
        total: "0",
      },
    ],
  },
]

export default function AcquisitionCostPage() {
  const [data, setData] = React.useState<RowData[]>(initialData)
  const [reservationTypes, setReservationTypes] = React.useState<string>("E- Enterprise, A- Transient, C- Group, B- Corporate")
  const [comment, setComment] = React.useState<string>(
    "We need to decrease cost of our Reservation fee."
  )

  const toggleRow = (id: string) => {
    setData((prev) =>
      prev.map((row) => {
        if (row.id === id) {
          return { ...row, isExpanded: !row.isExpanded }
        }
        return row
      })
    )
  }

  const updateCell = (
    rowId: string,
    field: keyof RowData,
    value: string
  ) => {
    setData((prev) =>
      prev.map((row) => {
        if (row.id === rowId) {
          return { ...row, [field]: value }
        }
        if (row.children) {
          return {
            ...row,
            children: row.children.map((child) =>
              child.id === rowId ? { ...child, [field]: value } : child
            ),
          }
        }
        return row
      })
    )
  }

  const calculateTotal = (row: RowData): string => {
    const values = [
      parseFloat(row.callGating) || 0,
      parseFloat(row.brandExpense) || 0,
      parseFloat(row.reservationFee) || 0,
      parseFloat(row.loyalty) || 0,
      parseFloat(row.commission) || 0,
    ]
    return values.reduce((sum, val) => sum + val, 0).toFixed(2)
  }

  return (
    <DashboardLayout title="Acquisition">
      <div className="mt-4 space-y-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">ACQUISITION COST</h2>
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
        <div className="w-full sm:w-1/2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Reservation Type</label>
            <Select
              value={reservationTypes}
              onValueChange={setReservationTypes}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Reservation Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="E- Enterprise, A- Transient, C- Group, B- Corporate">
                  E- Enterprise, A- Transient, C- Group, B- Corporate
                </SelectItem>
                <SelectItem value="E- Enterprise">E- Enterprise</SelectItem>
                <SelectItem value="A- Transient">A- Transient</SelectItem>
                <SelectItem value="C- Group">C- Group</SelectItem>
                <SelectItem value="B- Corporate">B- Corporate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Table Section */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <thead className="sticky top-0 bg-card z-10">
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left text-sm font-medium">
                      <Button variant="ghost" size="icon" className="h-6 w-6" type="button">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Call Gating</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Brand Expense</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Reservation Fee</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Loyalty</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Commission</th>
                    <th className="px-4 py-3 text-left text-sm font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row) => (
                    <React.Fragment key={row.id}>
                      <tr className="border-b">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {row.children && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => toggleRow(row.id)}
                              >
                                {row.isExpanded ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                            <span className="text-sm font-medium">{row.label}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.callGating}
                              onChange={(e) =>
                                updateCell(row.id, "callGating", e.target.value)
                              }
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.brandExpense}
                              onChange={(e) =>
                                updateCell(row.id, "brandExpense", e.target.value)
                              }
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.reservationFee}
                              onChange={(e) =>
                                updateCell(row.id, "reservationFee", e.target.value)
                              }
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.loyalty}
                              onChange={(e) =>
                                updateCell(row.id, "loyalty", e.target.value)
                              }
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.commission}
                              onChange={(e) =>
                                updateCell(row.id, "commission", e.target.value)
                              }
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                              $
                            </span>
                            <Input
                              type="number"
                              value={calculateTotal(row)}
                              className="pl-6"
                              readOnly
                            />
                          </div>
                        </td>
                      </tr>
                      {row.isExpanded &&
                        row.children?.map((child) => (
                          <tr key={child.id} className="border-b bg-muted/20">
                            <td className="px-4 py-3 pl-12">
                              <span className="text-sm">{child.label}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.callGating}
                                  onChange={(e) =>
                                    updateCell(child.id, "callGating", e.target.value)
                                  }
                                  className="pl-6"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.brandExpense}
                                  onChange={(e) =>
                                    updateCell(child.id, "brandExpense", e.target.value)
                                  }
                                  className="pl-6"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.reservationFee}
                                  onChange={(e) =>
                                    updateCell(child.id, "reservationFee", e.target.value)
                                  }
                                  className="pl-6"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <Input
                                  type="number"
                                  value={child.loyalty}
                                  onChange={(e) =>
                                    updateCell(child.id, "loyalty", e.target.value)
                                  }
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <Input
                                  type="number"
                                  value={child.commission}
                                  onChange={(e) =>
                                    updateCell(child.id, "commission", e.target.value)
                                  }
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={calculateTotal(child)}
                                  className="pl-6"
                                  readOnly
                                />
                              </div>
                            </td>
                          </tr>
                        ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Synopsis Section */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Acquisition Cost</label>
          <Textarea
            placeholder="Enter acquisition cost comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
      </div>
    </DashboardLayout>
  )
}


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
import { Info, X, Save, Plus, ChevronDown, ChevronRight, DollarSign, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

const glassCard =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-white shadow-2xl backdrop-blur-3xl"

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
      <div className="relative space-y-6 text-white">
        {/* Background Effect */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(6,182,212,0.1),_transparent_60%)]" />

        {/* Header Section */}
        <div className={cn(glassCard, "bg-gradient-to-r from-[#1a1f35]/80 to-[#101426]/80")}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Revenue Management</p>
              <h2 className="mt-1 text-3xl font-semibold tracking-tight">Acquisition Cost</h2>
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

          <div className="w-full md:w-1/2">
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wider text-white/60">Reservation Type</label>
              <Select
                value={reservationTypes}
                onValueChange={setReservationTypes}
              >
                <SelectTrigger className="border-white/10 bg-white/5 text-white focus:ring-offset-0 h-10">
                  <SelectValue placeholder="Select Reservation Types" />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-[#1a1f35] text-white">
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
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 grid-cols-1">
          {/* Table Section */}
          <div className={cn(glassCard, "overflow-hidden")}>
             <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Cost Breakdown</p>
                <h3 className="text-xl font-semibold">Expense Analysis</h3>
              </div>
              <div className="rounded-full bg-white/5 p-2 border border-white/10">
                <Wallet className="h-5 w-5 text-white/70" />
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/5 bg-white/5">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5 text-white/60">
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs w-[250px]">
                      <Button variant="ghost" size="icon" className="h-6 w-6 text-white/60 hover:text-white hover:bg-white/10" type="button">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Call Gating</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Brand Expense</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Reservation Fee</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Loyalty</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Commission</th>
                    <th className="px-6 py-4 font-medium uppercase tracking-wider text-xs">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white">
                  {data.map((row) => (
                    <React.Fragment key={row.id}>
                      <tr className="bg-white/[0.02] hover:bg-white/5 transition-colors">
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-2">
                            {row.children && (
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-white/60 hover:text-white hover:bg-white/10"
                                onClick={() => toggleRow(row.id)}
                              >
                                {row.isExpanded ? (
                                  <ChevronDown className="h-4 w-4" />
                                ) : (
                                  <ChevronRight className="h-4 w-4" />
                                )}
                              </Button>
                            )}
                            <span className="text-sm font-medium text-emerald-400">{row.label}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.callGating}
                              onChange={(e) =>
                                updateCell(row.id, "callGating", e.target.value)
                              }
                              className="pl-7 h-9 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-right"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.brandExpense}
                              onChange={(e) =>
                                updateCell(row.id, "brandExpense", e.target.value)
                              }
                              className="pl-7 h-9 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-right"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.reservationFee}
                              onChange={(e) =>
                                updateCell(row.id, "reservationFee", e.target.value)
                              }
                              className="pl-7 h-9 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-right"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.loyalty}
                              onChange={(e) =>
                                updateCell(row.id, "loyalty", e.target.value)
                              }
                              className="pl-7 h-9 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-right"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={row.commission}
                              onChange={(e) =>
                                updateCell(row.id, "commission", e.target.value)
                              }
                              className="pl-7 h-9 bg-black/20 border-white/10 text-white focus-visible:ring-white/20 text-right"
                              readOnly
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                              $
                            </span>
                            <Input
                              type="number"
                              value={calculateTotal(row)}
                              className="pl-7 h-9 bg-emerald-500/10 border-emerald-500/20 text-emerald-300 font-medium text-right"
                              readOnly
                            />
                          </div>
                        </td>
                      </tr>
                      {row.isExpanded &&
                        row.children?.map((child) => (
                          <tr key={child.id} className="bg-black/20 hover:bg-black/30 transition-colors border-b border-white/5">
                            <td className="px-6 py-3 pl-14">
                              <span className="text-sm text-white/70">{child.label}</span>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.callGating}
                                  onChange={(e) =>
                                    updateCell(child.id, "callGating", e.target.value)
                                  }
                                  className="pl-7 h-8 bg-transparent border-white/5 text-white focus-visible:ring-white/10 focus-visible:bg-white/5 text-right text-sm"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.brandExpense}
                                  onChange={(e) =>
                                    updateCell(child.id, "brandExpense", e.target.value)
                                  }
                                  className="pl-7 h-8 bg-transparent border-white/5 text-white focus-visible:ring-white/10 focus-visible:bg-white/5 text-right text-sm"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.reservationFee}
                                  onChange={(e) =>
                                    updateCell(child.id, "reservationFee", e.target.value)
                                  }
                                  className="pl-7 h-8 bg-transparent border-white/5 text-white focus-visible:ring-white/10 focus-visible:bg-white/5 text-right text-sm"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.loyalty}
                                  onChange={(e) =>
                                    updateCell(child.id, "loyalty", e.target.value)
                                  }
                                  className="pl-7 h-8 bg-transparent border-white/5 text-white focus-visible:ring-white/10 focus-visible:bg-white/5 text-right text-sm"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={child.commission}
                                  onChange={(e) =>
                                    updateCell(child.id, "commission", e.target.value)
                                  }
                                  className="pl-7 h-8 bg-transparent border-white/5 text-white focus-visible:ring-white/10 focus-visible:bg-white/5 text-right text-sm"
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-white/40">
                                  $
                                </span>
                                <Input
                                  type="number"
                                  value={calculateTotal(child)}
                                  className="pl-7 h-8 bg-transparent border-transparent text-white/60 font-medium text-right text-sm"
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
          </div>

          {/* Synopsis Section */}
          <div className={cn(glassCard)}>
            <div className="mb-4">
               <p className="text-sm uppercase tracking-[0.3em] text-white/60">Strategy</p>
               <h3 className="text-lg font-semibold">Cost Reduction Strategy</h3>
            </div>
            <Textarea
              placeholder="Enter acquisition cost strategy..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-[120px] resize-none border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-white/20"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

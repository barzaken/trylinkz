"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "Redirect mix by device"

const chartData = [
  { date: "2024-06-01", native: 420, inApp: 180 },
  { date: "2024-06-02", native: 510, inApp: 210 },
  { date: "2024-06-03", native: 460, inApp: 190 },
  { date: "2024-06-04", native: 530, inApp: 230 },
  { date: "2024-06-05", native: 610, inApp: 260 },
  { date: "2024-06-06", native: 480, inApp: 200 },
  { date: "2024-06-07", native: 540, inApp: 220 },
  { date: "2024-06-08", native: 620, inApp: 260 },
  { date: "2024-06-09", native: 680, inApp: 280 },
  { date: "2024-06-10", native: 590, inApp: 250 },
  { date: "2024-06-11", native: 560, inApp: 230 },
  { date: "2024-06-12", native: 640, inApp: 270 },
  { date: "2024-06-13", native: 700, inApp: 310 },
  { date: "2024-06-14", native: 730, inApp: 320 },
  { date: "2024-06-15", native: 690, inApp: 300 },
  { date: "2024-06-16", native: 710, inApp: 305 },
  { date: "2024-06-17", native: 760, inApp: 330 },
  { date: "2024-06-18", native: 720, inApp: 310 },
  { date: "2024-06-19", native: 780, inApp: 340 },
  { date: "2024-06-20", native: 820, inApp: 360 },
  { date: "2024-06-21", native: 790, inApp: 350 },
  { date: "2024-06-22", native: 850, inApp: 370 },
  { date: "2024-06-23", native: 900, inApp: 390 },
  { date: "2024-06-24", native: 870, inApp: 360 },
  { date: "2024-06-25", native: 910, inApp: 380 },
  { date: "2024-06-26", native: 950, inApp: 400 },
  { date: "2024-06-27", native: 980, inApp: 420 },
  { date: "2024-06-28", native: 940, inApp: 390 },
  { date: "2024-06-29", native: 990, inApp: 430 },
  { date: "2024-06-30", native: 1020, inApp: 440 },
]

const chartConfig = {
  visitors: {
    label: "Redirects",
  },
  native: {
    label: "Native browser",
    color: "var(--primary)",
  },
  inApp: {
    label: "In-app",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>הפניות לפי סוג דפדפן</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            ניתוח 90/30/7 יום אחרונים
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem style={{ direction: "rtl" }} value="90d">3 חודשים</ToggleGroupItem>
            <ToggleGroupItem value="30d">החודש האחרון</ToggleGroupItem>
            <ToggleGroupItem value="7d">השבוע האחרון</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last  months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last  days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillNative" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-native)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-native)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillInApp" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-inApp)"
                  stopOpacity={0.85}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-inApp)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="inApp"
              type="natural"
              fill="url(#fillInApp)"
              stroke="var(--color-inApp)"
              stackId="a"
            />
            <Area
              dataKey="native"
              type="natural"
              fill="url(#fillNative)"
              stroke="var(--color-native)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

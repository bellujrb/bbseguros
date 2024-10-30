"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "Junior", demandas: 186 },
  { month: "Pleno", demandas: 305 },
  { month: "Sênior", demandas: 137 },
  { month: "Expert", demandas: 57 },
]

const chartConfig = {
  demandas: {
    label: "Demandas",
    color: "#5654EF",
  },
} satisfies ChartConfig

export function GraficoDemandasSenioridade() {
  return (
    <Card className="border-none drop-shadow-md">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>Demandas por Senioridade</CardTitle>
        <CardDescription>Agosto - 2024</CardDescription>
      </CardHeader>
      <CardContent className="mt-11">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="demandas" fill="var(--color-demandas)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm mt-6">
        <div className="flex gap-2 font-medium leading-none">
        </div>
      </CardFooter>
    </Card>
  )
}

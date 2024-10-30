"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { segmento: "ti", consultores: 2067, fill: "#4f46e5" },
  { segmento: "vendas", consultores: 3562, fill: "#6868F0" },
  { segmento: "rh", consultores: 1530, fill: "#1e1b4b" },
  { segmento: "suporte", consultores: 1892, fill: "#CECDEE" },
]

const chartConfig = {
  consultores: {
    label: "Consultores",
  },
  ti: {
    label: "T.I",
    color: "hsl(var(--chart-1))",
  },
  vendas: {
    label: "Vendas",
    color: "#6868F0",
  },
  rh: {
    label: "RH",
    color: "#1e1b4b",
  },
  suporte: {
    label: "Suporte",
    color: "#CECDEE",
  }
} satisfies ChartConfig

export function GraficoConsultoresSegmentoOverview() {
  const totalconsultores = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.consultores, 0)
  }, [])

  return (
    <Card className="flex flex-col overflow-hidden border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle>Consultores por Segmento</CardTitle>
        <CardDescription>Agosto - 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[320px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="consultores"
              nameKey="segmento"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalconsultores.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Consultores
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="segmento" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Pirâmide venda por segmento cresceu 4.2%  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Porcentagem baseada nos últimos 3 meses
        </div>
      </CardFooter>
    </Card>
  )
}

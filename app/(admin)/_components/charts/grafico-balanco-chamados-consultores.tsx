"use client"

import React, { memo } from "react"
import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts"

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
  { month: "T.I", chamados: 186, consultores: 150 },
  { month: "Vendas", chamados: 305, consultores: 200 },
  { month: "Suporte", chamados: 237, consultores: 120 },
  { month: "Outros", chamados: 73, consultores: 190 },
  { month: "Infra", chamados: 209, consultores: 130 },
  { month: "R.H", chamados: 214, consultores: 140 },
]

const chartConfig = {
  chamados: {
    label: "Chamados",
    color: "#CECDEE",
  },
  consultores: {
    label: "Consultores",
    color: "#5F5DF1",
  },
} satisfies ChartConfig

export const GraficoBalancoChamadosConsultoresSegmento = memo(() => {
  return (
    <Card className="border-none drop-shadow-md h-full w-full">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-center text-base lg:text-lg">
          Balanço Chamados x Consultores por Segmento
        </CardTitle>
        <CardDescription>
          Agosto - 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full h-full max-h-[400px]">
          <ResponsiveContainer>
            <RadarChart data={chartData}>
              <PolarAngleAxis dataKey="month" />
              <PolarGrid />
              <Radar
                dataKey="chamados"
                fill="var(--color-chamados)"
                fillOpacity={0.6}
              />
              <Radar dataKey="consultores" fill="var(--color-consultores)" />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Distribuição 11.2% mais assertiva <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Porcentagem baseada nos últimos 3 meses
        </div>
      </CardFooter>
    </Card>
  )
})

GraficoBalancoChamadosConsultoresSegmento.displayName = "GraficoBalancoChamadosConsultoresSegmento"

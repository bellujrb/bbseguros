"use client";

import * as React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Jan", DemandaFerias: 50000, DemandaGeral: 100000 },
  { name: "Fev", DemandaFerias: 70000, DemandaGeral: 150000 },
  { name: "Mar", DemandaFerias: 60000, DemandaGeral: 120000 },
  { name: "Abr", DemandaFerias: 80000, DemandaGeral: 170000 },
  { name: "Mai", DemandaFerias: 75000, DemandaGeral: 180000 },
  { name: "Jun", DemandaFerias: 90000, DemandaGeral: 200000 },
  { name: "Jul", DemandaFerias: 85000, DemandaGeral: 220000 },
  { name: "Ago", DemandaFerias: 95000, DemandaGeral: 210000 },
  { name: "Set", DemandaFerias: 100000, DemandaGeral: 230000 },
  { name: "Out", DemandaFerias: 105000, DemandaGeral: 240000 },
  { name: "Nov", DemandaFerias: 110000, DemandaGeral: 250000 },
  { name: "Dez", DemandaFerias: 120000, DemandaGeral: 260000 },
];

const chartConfig = {
  DemandaFerias: {
    label: "Ausencia",
    color: "#260c09 ",
  },
  DemandaGeral: {
    label: "Demanda Geral",
    color: "#fbe300",
  },
} satisfies ChartConfig;

const tickFormatter = (value: string) => value;
const labelFormatter = (value: string) => value;

export function GraficoComparativoDemanda() {
  return (
    <Card className="border-none drop-shadow-md h-full w-full bg-white">
      <CardHeader className="flex flex-col items-center gap-2 space-y-0 border-b py-5">
        <div className="grid gap-1 text-center">
          <CardTitle>Comparativo de Ausencias x Demanda</CardTitle>
          <CardDescription>
            Ausências e Feriados vs Demanda Sazonal
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ChartContainer config={chartConfig} className="w-full h-full max-h-[290px] aspect-square">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={tickFormatter}
              />
              <YAxis />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent labelFormatter={labelFormatter} indicator="line" />}
              />
              <Legend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="DemandaFerias" stroke={chartConfig.DemandaFerias.color} />
              <Line type="monotone" dataKey="DemandaGeral" stroke={chartConfig.DemandaGeral.color} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

GraficoComparativoDemanda.displayName = "GraficoComparativoDemanda";

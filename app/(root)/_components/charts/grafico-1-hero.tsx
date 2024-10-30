"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", nascidos: 120, perdidos: 100 },
  { month: "Fev", nascidos: 140, perdidos: 110 },
  { month: "Mar", nascidos: 160, perdidos: 130 },
  { month: "Abril", nascidos: 180, perdidos: 150 },
  { month: "Maio", nascidos: 200, perdidos: 170 },
  { month: "Junho", nascidos: 220, perdidos: 190 },
];

const chartConfig = {
  nascidos: {
    label: "Leitões Nascidos",
    color: "#FFB347", 
  },
  perdidos: {
    label: "Leitões perdidos",
    color: "#4CAF50", 
  },
} satisfies ChartConfig;

export function Grafico1Hero() {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="-mb-28">
        <CardHeader className="font-bold text-xl text-center">Nascidos vs perdidos</CardHeader>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="nascidos" fill="#FFB347" radius={4} />
            <Bar dataKey="perdidos" fill="#4CAF50" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

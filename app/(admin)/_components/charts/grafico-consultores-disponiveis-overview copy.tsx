"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  diarreia: {
    label: "Mortes por Diarreia",
    color: "#260c09",
  },
  sobreviventes: {
    label: "Sobreviventes",
    color: "#5F5DF1",
  },
} satisfies ChartConfig;

interface GraficoMortesLeitaoDiarreiaOverviewProps {
  sobreviventes: string;
  diarreia: string;
}

export function GraficoMortesLeitaoDiarreiaOverview({
  sobreviventes,
}: GraficoMortesLeitaoDiarreiaOverviewProps) {
  const chartData = [
    { month: "janeiro", diarreia: 20, sobreviventes: Number(sobreviventes) },
  ];

  const totalLeitoes = chartData[0].diarreia + chartData[0].sobreviventes;

  return (
    <Card className="flex flex-col border-none drop-shadow-md">
      <CardHeader className="items-center pb-0">
        <CardTitle>Mortes de Leitão por Diarreia</CardTitle>
        <CardDescription>Agosto - 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px] mt-16"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalLeitoes.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          Leitões
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="diarreia"
              stackId="a"
              cornerRadius={5}
              fill="#260c09"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="sobreviventes"
              fill="#bc9b89"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Aumento de 7.3% nos sobreviventes{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Porcentagem baseada nos últimos 3 meses
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  );
}

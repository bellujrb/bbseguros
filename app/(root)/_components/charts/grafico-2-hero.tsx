"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Dados adaptados para representar leitões nascidos, desmamados, etc.
const chartData = [
  { segmento: "Leitões Nascidos", leitões: 500, fill: "#5F5DF1" }, // Leitões nascidos saudáveis
  { segmento: "Leitões Desmamados", leitões: 350, fill: "#260c09 " }, // Leitões desmamados
  { segmento: "Com Problemas de Saúde", leitões: 50, fill: "#3b82f6" }, // Leitões com problemas de saúde
  { segmento: "Perdidos por Esmagamento", leitões: 30, fill: "#CECDEE" }, // Leitões perdidos por esmagamento
];

// Configuração mantida com pequenas alterações de rótulos
const chartConfig = {
  leitões: {
    label: "Leitões",
  },
  nascidos: {
    label: "Leitões Nascidos",
    color: "#5F5DF1",
  },
  desmamados: {
    label: "Leitões Desmamados",
    color: "#260c09 ",
  },
  problemas: {
    label: "Com Problemas de Saúde",
    color: "#3b82f6",
  },
  perdidos: {
    label: "Perdidos por Esmagamento",
    color: "#CECDEE",
  },
} satisfies ChartConfig;

export function Grafico2Hero() {
  // Calcula o total de leitões para exibir no centro do gráfico
  const totalLeitões = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.leitões, 0);
  }, []);

  return (
    <Card className="flex flex-col overflow-hidden border-none shadow-none">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Proporção de Leitões</CardTitle>
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
              dataKey="leitões"
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
                          {totalLeitões.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Leitões
                        </tspan>
                      </text>
                    );
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
    </Card>
  );
}

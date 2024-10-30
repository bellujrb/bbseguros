import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChartTooltip, ChartTooltipContent, ChartContainer, ChartConfig } from "@/components/ui/chart";

// Dados fictícios de saúde geral
const dataSaudeGeral = [
    { categoria: "Excelente", percentual: 45, quantidade: 90 },
    { categoria: "Bom", percentual: 35, quantidade: 70 },
    { categoria: "Regular", percentual: 15, quantidade: 30 },
    { categoria: "Ruim", percentual: 5, quantidade: 10 },
];

const chartConfig = {
    Excelente: {
        label: "Excelente",
        color: "#4CAF50",
    },
    Bom: {
        label: "Bom",
        color: "#FFC107",
    },
    Regular: {
        label: "Regular",
        color: "#FF9800",
    },
    Ruim: {
        label: "Ruim",
        color: "#F44336",
    },
} satisfies ChartConfig;

export function GraficoEstadoSaudeGeral({ nome, subtitle }: { nome: string; subtitle: string }) {
    const [selectedFilter, setSelectedFilter] = useState("estadoSaude");

    const data = dataSaudeGeral;

    return (
        <Card className="border-none drop-shadow-md flex flex-col items-center w-full">
            <CardHeader className="flex flex-col items-center">
                <CardTitle className={"text-center"}>{nome}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>

            {/* Seletor de visualização (caso você deseje expandir filtros no futuro) */}
            <div className="flex items-center gap-2 mb-4 px-6 w-full justify-center">
                <Tabs defaultValue={"estadoSaude"}>
                    <TabsList aria-label="Select filter">
                        <TabsTrigger
                            value="estadoSaude"
                            onClick={() => setSelectedFilter("estadoSaude")}
                        >
                            Estado de Saúde Geral
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            <CardContent className="mt-6 w-full">
                <ResponsiveContainer width="100%" height={200}>
                    <ChartContainer config={chartConfig}>
                        <BarChart layout="vertical" data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" domain={[0, 100]} />
                            <YAxis type="category" dataKey="categoria" />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />
                            <Bar dataKey="percentual" fill="#bc9b89" barSize={30} radius={[0, 5, 5, 0]} />
                        </BarChart>
                    </ChartContainer>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

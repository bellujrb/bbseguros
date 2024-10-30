"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const COLORS = ['#bc9b89', '#e0e0e0'] 

type GraficoDesvioEscopoProps = {
  nome: string
  subtitle: string
  valor: number
  labelFinal: string
}

export function GraficoDesvioEscopo({ nome, subtitle, valor, labelFinal }: GraficoDesvioEscopoProps) {
  const chartData = [
    { name: 'Alcançado', value: valor },
    { name: 'Desvio', value: 100 - valor },
  ]

  return (
    <Card className="border-none drop-shadow-md flex flex-col items-center">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>{nome}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex justify-center relative">
        <ResponsiveContainer width={220} height={220}>
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={80}
              outerRadius={90}
              paddingAngle={5}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
          style={{ transform: 'translateY(-5%)' }}
        >
          <span className="text-4xl font-bold">{valor}%</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm mt-4">
        <div className="text-center font-medium">{labelFinal}</div>
      </CardFooter>
    </Card>
  )
}

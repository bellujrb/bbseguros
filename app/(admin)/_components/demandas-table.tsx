"use client";
import * as XLSX from "xlsx";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";

import { AnimatedListWidget } from "@/app/(root)/_components/animated-list-widget";

let notifications = [
  {
    name: "Alerta de esmagamento iminente",
    description: "Sistema de Prevenção de Esmagamento",
    time: "15m atrás",
    icon: " ",
    color: "#FF3D71",
  },
  {
    name: "Leitão em risco de desidratação",
    description: "Monitoramento de Saúde",
    time: "10m atrás",
    icon: "💧",
    color: "#00C9A7",
  },
  {
    name: "Relatório de desempenho gerado",
    description: "Painel de Desempenho da Granja",
    time: "5m atrás",
    icon: "📈",
    color: "#FFB800",
  },
  {
    name: "Alerta de leitão fraco detectado",
    description: "Monitoramento de Leitões Fracos",
    time: "2m atrás",
    icon: "🛑",
    color: "#DC3545",
  },
  {
    name: "Leitão não amamentou nas últimas horas",
    description: "Sistema de Monitoramento de Amamentação",
    time: "30m atrás",
    icon: "🍼",
    color: "#1E86FF",
  },
  {
    name: "Matriz com comportamento anormal detectado",
    description: "Monitoramento da Matriz",
    time: "1h atrás",
    icon: "🐖",
    color: "#FFC107",
  },
  {
    name: "Alerta: Leitão com possíveis lesões",
    description: "Monitoramento de Lesões",
    time: "20m atrás",
    icon: "💡",
    color: "#22c55e",
  },
  {
    name: "Novo alerta de saúde em leitão",
    description: "Painel de Saúde dos Leitões",
    time: "45m atrás",
    icon: "🔴",
    color: "#38bdf8",
  },
  {
    name: "Alerta de esmagamento resolvido",
    description: "Prevenção de Esmagamento",
    time: "2h atrás",
    icon: "✅",
    color: "#4CAF50",
  },
  {
    name: "Feedback sobre relatório de amamentação",
    description: "Sistema de Monitoramento de Amamentação",
    time: "15m atrás",
    icon: "💬",
    color: "#17A2B8",
  },
];

function generateFilename() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `Alertas_${year}-${month}-${day}_${hours}-${minutes}.xlsx`;
}

function exportNotificationsToXlsx() {
  const ws = XLSX.utils.json_to_sheet(notifications);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Alertas");

  const filename = generateFilename();
  XLSX.writeFile(wb, filename);
}

export function DemandasTable() {
  const [alertFilter, setAlertFilter] = useState<string | null>("Todos"); 
  const [openPopover, setOpenPopover] = useState(false); 

  const alertOptions = ["Todos", "Esmagamento", "Diarreia", "Falta de Amamentação", "Outros"];

  const handleExport = () => {
    exportNotificationsToXlsx();
  };

  return (
    <div className="w-full">
      {/* Filtros de alerta */}
      <div className="flex items-center mb-4">
        {/* Popover para filtrar por tipo de alerta (visual apenas) */}
        <p className="text-md text-muted-foreground">Selecione o Filtro:</p>
        <div className="ml-3"></div>
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-center border-2 border-black bg-white">
              {alertFilter || "Selecione o Alerta"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 border-2 border-black" side="bottom" align="center">
            <Command>
              <CommandInput placeholder="Procurar alerta..." />
              <CommandList>
                <CommandEmpty>Nenhum alerta encontrado.</CommandEmpty>
                <CommandGroup>
                  {alertOptions.map((alertOption, index) => (
                    <CommandItem
                      key={index}
                      value={alertOption}
                      onSelect={() => {
                        setAlertFilter(alertOption);
                        setOpenPopover(false);
                      }}
                    >
                      {alertOption}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="ml-3"></div>

        <Button onClick={handleExport}>Exportar Alertas por XLSX</Button>
      </div>

      <div className="w-full">
        <AnimatedListWidget/>
      </div>
    </div>
  );
}

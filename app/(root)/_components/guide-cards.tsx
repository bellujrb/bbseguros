import React from "react";
import { ChartLine, CircleHelp, ClockArrowUp, SquareStack } from "lucide-react";
import { cn } from "@/lib/utils";

export const Guides = () => {
  return (
    <div id="Guides" className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="w-full flex justify-center ">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          <GuideCard
            title="Otimização da Capacidade em Tempo Real"
            href="#realtime"
            icon={<ClockArrowUp size={40} />}
            className=""
            color="#fbe300"
          />
          <GuideCard
            title="Análise Inteligente de Demandas e Contratos"
            href="#analise"
            icon={<ChartLine size={40}/>}
            color="#EF462F"
          />
          <GuideCard
            title="Previsão Avançada de Tendências"
            href="#previsao"
            icon={<SquareStack size={40}/>}
            className=""
            color= "#D9014B"
          />
          <GuideCard
            title="Perguntas Frequentes"
            href="#faq"
            icon={ <CircleHelp size={40}/> }
            className=""
            color= "#260c09 "
          />
        </div>
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  color: string
}

const GuideCard = ({
  title,
  subtitle,
  icon,
  href,
  className,
  color
}: CardType) => {
  return (
    <a
      href={href}
      className={cn(
        "w-full h-full p-4 rounded relative overflow-hidden group bg-white border-2 border-black px-6 py-3 font-semibold translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] sm:p-6 lg:p-8",
        className
      )}
    >
      <div className={cn("absolute inset-0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-400 text-white flex items-center justify-center", className)} style={{ backgroundColor: color }}>
      </div>
      <div className="mb-2 text-black group-hover:text-white transition-colors relative z-10 duration-300">
        {icon}
      </div>
      <h3 className="font-medium mt-4 text-2xl text-slate-950 group-hover:text-white relative z-10 duration-300 mb-6">
        {title}
      </h3>
      <p className="text-zinc-900 group-hover:text-white relative z-10 duration-300 w-4/5">
        {subtitle}
      </p>
    </a>
  );
};
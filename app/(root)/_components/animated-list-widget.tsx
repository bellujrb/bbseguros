"use client"

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/app/(root)/_components/ui/animated-list";
import { time } from "console";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Solicitação de Assistência na Estrada",
    description: "125 clientes solicitaram ajuda devido a problemas mecânicos.",
    icon: "🚗",
    color: "#FF3D71",
    time: "30m atrás",
  },
  {
    name: "Consultas sobre Cobertura",
    description: "98 clientes pediram detalhes sobre a cobertura de assistência.",
    icon: "📋",
    color: "#00C9A7",
    time: "30m atrás",
  },
  {
    name: "Pedidos de Informações Adicionais",
    description: "76 clientes pediram detalhes sobre os próximos passos do atendimento.",
    icon: "❓",
    color: "#FFB800",
    time: "30m atrás",
  },
  {
    name: "Interações com Atendimento Automatizado",
    description: "150 clientes interagiram com o sistema de atendimento automático.",
    icon: "🤖",
    color: "#1E86FF",
    time: "30m atrás",
  },
  {
    name: "Perguntas sobre Tempo de Espera",
    description: "45 clientes perguntaram sobre o tempo estimado de chegada da assistência.",
    icon: "⏳",
    color: "#FFC107",
    time: "30m atrás",
  },
  {
    name: "Solicitações de Atendimento Personalizado",
    description: "32 clientes solicitaram assistência personalizada.",
    icon: "🛠️",
    color: "#22c55e",
    time: "30m atrás",
  },
  {
    name: "Feedbacks sobre Atendimento",
    description: "60 clientes deixaram feedbacks sobre a experiência de atendimento.",
    icon: "💬",
    color: "#17A2B8",
    time: "30m atrás",
  },
  {
    name: "Compartilhamento de Experiência",
    description: "30 clientes compartilharam suas experiências de atendimento.",
    icon: "📸",
    color: "#38bdf8",
    time: "30m atrás",
  },
];


notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-md p-3 sm:p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
      )}
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-base sm:text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-base sm:text-lg font-medium dark:text-white whitespace-pre">
            <span className="text-sm sm:text-base">{name}</span>
            <span className="mx-1 hidden sm:inline">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs sm:text-sm font-normal dark:text-white/60 truncate">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


export function AnimatedListWidget({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[595px] w-full flex-col p-6 overflow-hidden rounded-lg",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

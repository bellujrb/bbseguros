import { CloudSVG, LinesSVG } from "@/svgs/svgs";
import { ShieldCheck, Heart, Activity, Eye, MessageSquare, Users, Cpu } from "lucide-react";
import Link from "next/link";
import { Heading } from "../heading";

// Dados adaptados para refletir a solução BBCC AI
const solutionData = [
  {
    title: "Atendimento Rápido e Eficiente",
    desc: "Resolva emergências com apenas uma frase, eliminando menus complexos e agilizando o atendimento para os clientes.",
    icon: <Cpu />,
    color: "#4CAF50",
  },
  {
    title: "Acesso Personalizado e Seguro",
    desc: "Identifique o cliente e sua situação automaticamente, proporcionando um atendimento rápido e seguro.",
    icon: <ShieldCheck />,
    color: "#FFB347",
  },
  {
    title: "Integração Completa de Dados",
    desc: "Conecte-se com CRMs e bases de dados para informações em tempo real e histórico completo do cliente.",
    icon: <Activity />,
    color: "#D9014B",
  },
  {
    title: "Monitoramento em Tempo Real",
    desc: "Acompanhe o status do atendimento e o progresso da solução em tempo real, com feedbacks claros e informativos.",
    icon: <Eye />,
    color: "#CECDEE",
  },
];

export const VisionSection = () => {
  return (
    <>
      <div className="py-12 lg:py-24 relative container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solutionData.map((solution, index) => (
              <a
                className="group flex flex-col justify-center p-5 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
                href={""}
                key={index}
              >
                <div
                  className="flex justify-center items-center w-12 h-12 border rounded-lg"
                  style={{ backgroundColor: solution.color }}
                >
                  <div className="flex-shrink-0 w-6 h-6 text-primary-foreground">
                    {solution.icon}
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{solution.title}</h3>
                  <p className="mt-1 text-muted-foreground">{solution.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="lg:w-3/4">
            <Heading
              title="Solução Inteligente para Atendimento de Emergências"
              badge="BBCC AI"
              classNameBadge="flex justify-center md:justify-start"
              classNameTitle="text-center md:text-start"
              id="visao"
            />
            <p className="mt-3 text-base md:text-lg text-muted-foreground">
              Com o BBCC AI, você transforma o atendimento ao cliente em emergências. Nossa plataforma utiliza IA para simplificar o processo e eliminar menus complexos, proporcionando uma experiência de atendimento intuitiva e eficiente. 
            </p>
            <p className="mt-5">
              <Link
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4 text-sm md:text-base"
                href="/about"
              >
                Saiba mais sobre nossa solução
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

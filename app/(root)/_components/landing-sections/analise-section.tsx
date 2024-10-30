import { AbstractSVG, Cloud3SVG, Curly2SVG, RoxoSVG, VerdeSVG } from "@/svgs/svgs";
import { Heading } from "../heading";

export default function AnalisePrevisaoSection() {
  return (
    <section className="bg-white dark:bg-gray-900 mt-24 relative">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div>
          <Heading
            title="Análise de Demandas e Contratos com Suporte Preditivo"
            badge="Análise de Demandas e Contratos"
            classNameBadge="flex justify-center md:justify-start"
            classNameTitle="text-center md:text-start"
            id="analise"
          />
          <p className="mb-4 mt-4 text-center md:text-start text-base md:text-lg text-muted-foreground">
          Com a Análise de Demandas e Contratos, o gestor obtém uma visão clara e detalhada da complexidade 
          e criticidade de cada solicitação e acordo. Isso permite uma alocação precisa e eficiente dos recursos, 
          sempre baseada em dados sólidos.
          </p>
          <p className="mb-4 text-center md:text-start text-base md:text-lg text-muted-foreground">
          Nossa solução faz uso de análise preditiva, avaliando automaticamente demandas e contratos 
          com base em dados históricos e algoritmos de machine learning. Classificamos as tarefas por 
          complexidade e impacto, mas é o gestor quem toma as decisões finais, com todas as informações 
          necessárias para priorizar o que realmente importa.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-roxo h-96 flex items-center justify-center text-white text-xl font-extrabold border-2 border-black bg-background transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none">
            <VerdeSVG />
          </div>
          <div className="mt-4 w-full lg:mt-10 bg-verde h-96 flex items-center justify-center text-white text-xl font-extrabold border-2 border-black bg-background transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none">
            <RoxoSVG />
          </div>
        </div>
      </div>

      <div
        className="absolute transform -rotate-90 z-10 hidden 2xl:block"
        style={{ top: "40%", left: "-4%" }}
      >
        <Curly2SVG />
      </div>
      <div
        className="absolute transform -rotate-45 z-10 hidden xl:block"
        style={{ top: "-50%", left: "-5%" }}
      >
        <Cloud3SVG />
      </div>
      <div
        className="absolute transform z-10 hidden xl:block"
        style={{ top: "50%", left: "90%" }}
      >
        <AbstractSVG />
      </div>
    </section>
  );
}

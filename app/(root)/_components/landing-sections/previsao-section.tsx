import { Heading } from "../heading";
import { EyeSVG, Sparkle2SVG, SparkleSVG } from "@/svgs/svgs";


export const PrevisaoSection = () => {
  return (
    <section className="container mt-12 relative">
      <div className="py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <Heading
                title="Previsão de Tendências"
                badge="Previsão de Tendências"
                classNameBadge="flex justify-center"
                classNameTitle="text-center"
                id="previsao"
              />
              <p className="mt-4 text-base md:text-lg text-muted-foreground text-center">
                Fique à frente da curva com nossas ferramentas avançadas de
                análise de tendências e previsão. Nosso produto aproveita IA de
                última geração para prever tendências de mercado, ajudando sua
                empresa a tomar decisões baseadas em dados com confiança.
              </p>
            </div>


            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Nossa solução de previsão de tendências fornece insights claros e detalhados, 
                  ajudando sua empresa a antecipar necessidades e otimizar a alocação de recursos. 
                  Utilizando algoritmos avançados de análise preditiva, o sistema identifica padrões 
                  em dados históricos e em tempo real, oferecendo uma visão precisa das próximas demandas. 
                  Entretanto, a decisão final é sempre sua — nossa tecnologia é uma ferramenta para apoiar
                  sua tomada de decisões.
                </p>
              </div>

              <div className="p-6 rounded-md w-full border-2 border-blac bg-white">
                <p className="text-lg md:text-xl text-muted-foreground">
                  Com nossa plataforma, você terá à sua disposição todas as informações necessárias para gerir 
                  de forma eficiente a capacidade de sua equipe e atender às demandas futuras. A ferramenta 
                  oferece uma interface simples e intuitiva que facilita a visualização de dados complexos, 
                  mas é o gestor que direciona as ações e implementa as decisões. Nossa solução proporciona 
                  o suporte necessário para garantir que suas decisões sejam sempre informadas e estratégicas.
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute transform z-10 hidden rotate-12 md:block"
        style={{ top: "-16%", left: "78%" }}
      >
        <EyeSVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-14%", left: "10%" }}
      >
        <SparkleSVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-14%", left: "13%" }}
      >
        <Sparkle2SVG />
      </div>
      <div
        className="absolute transform z-10 hidden -rotate-12 md:block"
        style={{ top: "-5%", left: "12%" }}
      >
        <Sparkle2SVG />
      </div>
    </section>
  );
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/(root)/_components/ui/tabs";

// Dados atualizados para refletir a solução PiggyTrack
const tabsData = [
  {
    value: "item-1",
    trigger: "Automação de Atendimento em Emergências",
    content:
      "O sistema automatiza o atendimento ao cliente em situações de emergência, eliminando menus complexos e permitindo que o cliente resolva o problema rapidamente com uma única frase.",
  },
  {
    value: "item-2",
    trigger: "Monitoramento em Tempo Real",
    content:
      "Acompanhe o status e o progresso do atendimento em tempo real, garantindo que o cliente esteja sempre informado e ciente da assistência que está a caminho.",
  },
  {
    value: "item-3",
    trigger: "Detecção Automática de Necessidades",
    content:
      "Detecta automaticamente as necessidades dos clientes a partir de frases como 'meu carro quebrou' ou 'preciso de assistência', permitindo que o atendimento seja iniciado imediatamente.",
  },
  {
    value: "item-4",
    trigger: "Alerta de Alta Demanda",
    content:
      "Receba alertas sobre períodos de alta demanda, ajudando a empresa a alocar recursos e assistência de forma eficiente para atender todos os clientes rapidamente.",
  },
];


export const TabsRealtime = () => {
  return (
    <div>
      <Tabs defaultValue="item-1">
        <TabsList className="flex flex-wrap gap-2 h-fit bg-white mt-4">
          {tabsData.map((tab, index) => (
            <TabsTrigger
              value={tab.value}
              className="border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none"
              key={index}
            >
              <div className="text-xs md:text-sm text-black font-semibold text-center">
                {tab.trigger}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            <div className="border-2 border-black rounded-md p-4 md:p-6 bg-white h-full">
              <p className="font-semibold text-xl"> {tab.content}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

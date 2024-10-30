import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const accordionData = [
  {
    value: "item-1",
    trigger: "Como funciona o sistema de prevenção de esmagamento?",
    content: "Nosso sistema utiliza câmeras e sensores para monitorar os movimentos da matriz e identificar situações de risco para os leitões. Quando um risco é detectado, o sistema ativa intervenções automáticas para evitar o esmagamento, protegendo a vida dos leitões.",
    color: "bg-verde"
  },
  {
    value: "item-2",
    trigger: "Posso monitorar a saúde dos leitões em tempo real?",
    content: "Sim, o sistema de monitoramento de saúde fornece dados em tempo real sobre os sinais vitais e comportamentos dos leitões, permitindo a identificação precoce de problemas de saúde, como desidratação, fraqueza ou falta de amamentação.",
    color: "bg-roxo"
  },
  {
    value: "item-3",
    trigger: "Como o sistema identifica leitões fracos?",
    content: "A solução monitora o comportamento e as atividades dos leitões, identificando padrões que indicam fraqueza ou problemas de saúde. Esses leitões são imediatamente sinalizados para receber cuidados especiais.",
    color: "bg-verde"
  },
  {
    value: "item-4",
    trigger: "O sistema de monitoramento funciona 24 horas por dia?",
    content: "Sim, o sistema de monitoramento é contínuo, funcionando 24 horas por dia para garantir que os leitões estejam sempre seguros e sob vigilância, especialmente em períodos críticos como após o nascimento.",
    color: "bg-roxo"
  },
  {
    value: "item-5",
    trigger: "O sistema funciona em dispositivos móveis?",
    content: "Sim, nossa plataforma é totalmente compatível com dispositivos móveis, permitindo que você monitore a granja e receba alertas diretamente no seu smartphone ou tablet, em qualquer lugar e a qualquer momento.",
    color: "bg-verde"
  }
];


export const AccordionFAQ = () => {
  return (
    <div className="mt-12">
      <Accordion className="w-full" type="multiple">
        {accordionData.map((item) => (
          <AccordionItem
            key={item.value}
            className={`${item.color} lg:w-[570px] max-w-full border-2 border-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[4px_4px_0px_black]`}
            value={item.value}
          >
            <AccordionTrigger className="text-white text-xl font-extrabold text-start">{item.trigger}</AccordionTrigger>
            <AccordionContent className="font-bold text-md">{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

import { Question2SVG, Question3SVG, QuestionSVG } from "@/svgs/svgs";
import { AccordionFAQ } from "@/app/(root)/_components/accordion-faq";
import { Heading } from "../heading";

export const FaqSection = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="container mt-12">
          <Heading
            title="Perguntas Frequentes"
            badge="Perguntas Frequentes"
            classNameBadge="flex justify-center"
            classNameTitle="text-center"
            id="faq"
          />
          <p className=" mt-4 text-base md:text-lg text-muted-foreground text-center">
            A seção de Perguntas Frequentes oferece respostas rápidas e claras
            às dúvidas mais comuns sobre o produto. Aqui, você encontrará
            informações detalhadas sobre funcionalidades, suporte técnico e
            políticas de uso, garantindo que suas perguntas sejam respondidas de
            forma eficiente.
          </p>
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-center">
              <AccordionFAQ />
            </div>
          </div>
        </div>

        
      </div>
      {/* End Hero */}
    </>
  );
};

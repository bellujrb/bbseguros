import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/app/(root)/_components/ui/badge";
import { Button } from "@/components/ui/button";
import { Syne } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const Hero = () => {
  return (
    <section className="mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="text-center lg:text-start space-y-6 max-w-3xl">
          <Badge variant={"neutral"}>Simplificando o Atendimento</Badge>
          <main className={cn("text-5xl md:text-7xl font-bold", syne.className)}>
            <h1 className="inline">
              Transforme a Experiência <br />{" "}
              <span className="inline text-verde">de Atendimento</span>{" "}
            </h1>{" "}
            <h2 className="inline font-bold">
              <span className="inline text-roxo font-bold">com Inteligência Artificial</span>{" "}
              para resultados rápidos e eficazes
            </h2>
          </main>
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Reduza o tempo de resposta em emergências e elimine menus complexos com uma solução intuitiva e personalizada.
          </p>
          <div className="space-y-4 md:space-x-4">
            <Button className="w-2/3 sm:w-1/3">Conheça o BBCC AI</Button>
            <Link href="/video">
              <Button variant={"outline"}>
                Veja Como Funciona
                <ArrowUpRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Shadow Effect */}
      <div className="shadow"></div>
    </section>
  );
};

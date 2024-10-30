import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";
import { Grafico1Hero } from "./charts/grafico-1-hero";
import { Grafico2Hero } from "./charts/grafico-2-hero";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Bloco 1 - Produtor */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="rounded-full bg-gradient-to-br from-teal-400 to-indigo-700 h-8 w-8"></div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Produtor #31245</CardTitle>
            <CardDescription>@produtor</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          Com o monitoramento inteligente, consegui reduzir drasticamente a mortalidade dos leitões!
        </CardContent>
      </Card>

      {/* Bloco 2 - Fundador */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div
            className="absolute bg-gradient-to-br from-teal-400 to-indigo-700 -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Fundador</CardTitle>
          <CardDescription className="font-normal text-primary">
            CEO - Granjas Sustentáveis
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            A adoção dessa solução transformou o manejo de nossa granja, trazendo mais eficiência e cuidado com os leitões.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <Github className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="#"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

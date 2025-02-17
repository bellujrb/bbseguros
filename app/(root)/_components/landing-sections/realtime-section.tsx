import { AnimatedListWidget } from "../animated-list-widget";
import { TabsRealtime } from "@/app/(root)/_components/tabs-realtime";
import {
  BigExplosionSVG,
  Exclamation2SVG,
  ExplosionSVG,
  Lines2SVG,
  SketchSVG,
  Zap2SVG,
} from "@/svgs/svgs";
import { Heading } from "@/app/(root)/_components/heading";


export const ReatltimeSection = () => {
  return (
    <section className="relative">
      <div className="container mx-auto flex items-center h-auto md:h-144 border-black overflow-hidden mt-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4 md:p-6">
          <div className="flex p-4 md:p-6 mb-8">
            <div>
              <Heading
                title="Resultados de Automação em Tempo Real"
                badge="Automação Inteligente"
                classNameBadge="flex justify-center"
                classNameTitle="text-center"
                id="realtime"
              />
              <div>
                <TabsRealtime />
              </div>
            </div>
          </div>
          <div className="-mt-6">
            <AnimatedListWidget />
          </div>
        </div>
      </div>
    </section>
  );
};

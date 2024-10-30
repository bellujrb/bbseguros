import { Syne } from "next/font/google";
import { Badge } from "../ui/badge";
import { Guides } from "../guide-cards";
import { cn } from "@/lib/utils";
import { ThreeArrowsSVG } from "@/svgs/svgs";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function GuideSection() {
  return (
    <>
      <div className="overflow-hidden bg-white relative mt-4">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 py-20">
          <div className="relative mx-auto max-w-6xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <Badge className="mb-3">
                <p className="text-xs font-bold text-black tracking-wider uppercase">
                  Navegue pela solução
                </p>
              </Badge>
              <h1
                className={cn(
                  "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
                  syne.className
                )}
                id="guide"
              >
                Conheça as funcionalidades que tornam nossa Dashboard
                Inteligente a escolha ideal para sua empresa
              </h1>
            </div>
            {/* End Title */}
            <div>
              <div className="mx-auto max-w-7xl sm:flex sm:space-x-3 p-3">
                <div className="gap-x-2 w-full p-1">
                  <Guides />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 left-0 hidden xl:block"
          style={{ top: "27%", left: "80%" }}
        >
          <ThreeArrowsSVG />
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}

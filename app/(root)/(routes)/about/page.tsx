"use client";

import { TeamCard } from "@/app/(root)/_components/card-team";
import { Badge } from "@/app/(root)/_components/ui/badge";

const AboutPage = () => {
  return (
    <div className="">
      <div className="text-center -mt-12">
        <Badge variant="neutral" className="font-bold">
          Sobre o Projeto
        </Badge>
        <h1 className="text-4xl font-bold py-4">
          Conheça o Nosso Time
        </h1>
        <p className="text-lg text-gray-600">
          Conheça as pessoas talentosas que estão por trás do nosso projeto. Cada um de nós traz uma experiência única e uma paixão pelo que fazemos.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mt-8">
        <TeamCard
          color="#260c09 "
          image="https://github.com/RafaelRMJesus.png"
          github="RafaelRMJesus"
          name="Rafael - RM98296"
          description="Head of Front-end Development"
        />
        <TeamCard
          color="#EF462F"
          image="https://github.com/bellujrb.png"
          github="bellujrb"
          name="Belluzzo - RM99282"
          description="Head of Data Analytics"
        />
        <TeamCard
          color="#FADF0B"
          image="/grupo3.jpeg"
          name="Platini - RM551212"
          description="Frontend Specialist"
        />
        <TeamCard
          color="#D9014B"
          image="/grupo2.jpeg"
          name="Gabriel - RM97753"
          description="Head of Back-end Specialist"
        />
        <TeamCard
          color="#fbe300"
          image="/grupo1.jpeg"
          name="Breno - RM550434"
          description="Back-end Specialist"
        />
      </div>
    </div>
  );
};

export default AboutPage;

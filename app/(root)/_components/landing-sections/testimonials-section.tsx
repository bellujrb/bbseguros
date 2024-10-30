import { cn } from '@/lib/utils'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

const reviews = [
   {
     name: 'Carlos (Gerente de Produção)',
     username: '@carlos_silva',
     body: 'O sistema de prevenção de esmagamento salvou dezenas de leitões em nossa granja. A solução é essencial para nossa operação.',
     img: 'https://github.com/Carlos.png',
   },
   {
     name: 'Ana (Veterinária)',
     username: '@ana_veterinaria',
     body: 'O monitoramento de saúde em tempo real me permite agir rapidamente com leitões doentes, melhorando a taxa de sobrevivência.',
     img: 'https://github.com/Ana.png',
   },
   {
     name: 'João (Diretor de Operações)',
     username: '@joao_souza',
     body: 'A solução automatiza o controle das baias e permite que eu tenha total visibilidade dos leitões em cada etapa do processo.',
     img: 'https://github.com/Joao.png',
   },
   {
     name: 'Mariana (Gerente de Granjas)',
     username: '@mariana_oliveira',
     body: 'Com a PiggyTrack, conseguimos reduzir a mortalidade dos leitões por esmagamento em 14%. É revolucionário para nosso manejo.',
     img: 'https://github.com/Mariana.png',
   },
   {
     name: 'Ricardo (Produtor Rural)',
     username: '@ricardo_produtor',
     body: 'A tecnologia de visão computacional identificou um leitão com problemas de saúde antes que fosse tarde demais. Impressionante!',
     img: 'https://github.com/Ricardo.png',
   },
   {
     name: 'Fernanda (Veterinária)',
     username: '@fernanda_vet',
     body: 'As análises em tempo real nos ajudam a monitorar a saúde dos leitões constantemente, garantindo uma taxa de desmame muito maior.',
     img: 'https://github.com/Fernanda.png',
   },
   {
     name: 'Pedro (Gerente de Maternidade)',
     username: '@pedro_granja',
     body: 'A facilidade de uso da plataforma e os alertas automáticos me permitem monitorar várias baias ao mesmo tempo, sem sobrecarregar a equipe.',
     img: 'https://github.com/Pedro.png',
   },
   {
     name: 'Carolina (Gestora de Produção)',
     username: '@carolina_prod',
     body: 'Os relatórios detalhados me permitem ajustar a produção rapidamente e melhorar a eficiência da granja a cada ciclo.',
     img: 'https://github.com/Carolina.png',
   },
   {
     name: 'Luiz (Diretor de Operações)',
     username: '@luiz_oliveira',
     body: 'A integração do sistema de monitoramento com dispositivos móveis facilita o acompanhamento das baias de qualquer lugar.',
     img: 'https://github.com/Luiz.png',
   },
   {
     name: 'Juliana (Especialista em Saúde Animal)',
     username: '@juliana_santos',
     body: 'A PiggyTrack é indispensável para manter os leitões seguros e saudáveis durante o processo de desmame.',
     img: 'https://github.com/Juliana.png',
   },
   {
     name: 'Marcelo (Gestor de Granjas)',
     username: '@marcelo_granja',
     body: 'As previsões precisas de saúde e desempenho dos leitões são essenciais para otimizar a produção e evitar perdas.',
     img: 'https://github.com/Marcelo.png',
   },
 ]; 

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

function ReviewCard({
   img,
   name,
   username,
   body,
}: {
   img: string
   name: string
   username: string
   body: string
}) {
   return (
      <figure
         className={cn(
            'relative w-64 cursor-pointer overflow-hidden p-4 border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 translate-x-[-4px] translate-y-[-4px] rounded-md shadow-[2px_2px_0px_black] hover:translate-x-[0px] hover:translate-y-[0px] hover:shadow-none',
         )}
      >
         <div className="flex flex-row items-center gap-2">
            <Image className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
               <figcaption className="text-sm font-medium dark:text-white">
                  {name}
               </figcaption>
               <p className="text-xs font-medium dark:text-white/40">{username}</p>
            </div>
         </div>
         <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
   )
}

export function Testimonials() {
   return (
      <div className="bg-background relative flex size-full flex-col items-center justify-center overflow-hidden py-20 ">
         <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map(review => (
               <ReviewCard key={review.username} {...review} />
            ))}
         </Marquee>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
         <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
   )
}


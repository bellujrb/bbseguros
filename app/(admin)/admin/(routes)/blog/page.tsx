"use client"

import {Calendar} from "lucide-react";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {useState} from "react";
import {
    Select,
    SelectItem,
    SelectGroup,
    SelectTrigger,
    SelectLabel,
    SelectContent,
    SelectValue
} from "@/components/ui/select"

const roadmapData = [
    {
        category: "Visão Geral",
        updates: [
            {
                title: "Adição de gráficos principais",
                description: "Será adicionado um conjunto completo de gráficos que mostram os principais indicadores de desempenho, como número de chamados, taxa de resolução, tempo médio de atendimento, e outros KPIs importantes.",
                date: "26/09/2024"
            },
            {
                title: "Organização de gráficos",
                description: "Todos os gráficos serão organizados de forma a proporcionar uma visão geral coesa e clara da operação, facilitando a análise rápida e o entendimento global.",
                date: "26/09/2024"
            }
        ]
    },
    {
        category: "Demandas",
        updates: [
            {
                title: "Gráficos e indicadores das demandas",
                description: "Inclusão de gráficos e indicadores específicos relacionados às demandas, como o tempo médio de resposta e resolução, a complexidade dos chamados e a evolução das demandas ao longo do tempo.",
                date: "29/09/2024"
            },
            {
                title: "Mapa de calor de criticidade",
                description: "Adicionar um mapa de calor de criticidade para destacar as demandas mais críticas, com base em tempo de resolução e complexidade.",
                date: "29/09/2024"
            },
            {
                title: "Mapa de calor de Ausência x Complexidade",
                description: "Adicionar um mapa de calor de Ausência x Complexidade x Número de Chamados, permitindo uma análise mais detalhada das sazonalidades e sua correlação com o volume e complexidade de chamados.",
                date: "29/09/2024"
            }
        ]
    },
    {
        category: "Contratos",
        updates: [
            {
                title: "Indicadores relacionados aos contratos",
                description: "Adicionar mais indicadores relacionados aos contratos, como novos KPIs que facilitem a análise de desempenho e cumprimento de prazos.",
                date: "03/10/2024"
            },
            {
                title: "Navegação entre contratos",
                description: "Implementar uma forma mais eficiente de exibir em qual contrato o usuário está no momento, garantindo que a navegação entre contratos seja intuitiva.",
                date: "04/10/2024"
            }
        ]
    },
    {
        category: "Equipes",
        updates: [
            {
                title: "Desempenho das equipes ativas",
                description: "Mostrar as equipes ativas com detalhes de desempenho e indicadores de valor.",
                date: "07/10/2024"
            },
            {
                title: "Comparação de desempenho entre equipes",
                description: "Comparar o desempenho e o valor das equipes com base na quantidade de chamados finalizados por consultor.",
                date: "08/10/2024"
            },
            {
                title: "Balanço de senioridade das equipes",
                description: "Avaliar o balanço de senioridade das equipes comparando a complexidade dos chamados concluídos com o custo de cada consultor.",
                date: "09/10/2024"
            },
            {
                title: "Mapa de calor de ausências por equipe",
                description: "Implementar um mapa de calor de ausências por equipe, ajudando a identificar períodos críticos.",
                date: "10/10/2024"
            },
            {
                title: "Simulação de ausências futuras",
                description: "Simular ausências futuras com base no período de férias de cada consultor, permitindo a visualização de sazonalidades críticas.",
                date: "11/10/2024"
            },
            {
                title: "Cálculo de dias críticos",
                description: "Calcular dias ou períodos críticos com base em eventos como férias, Black Friday e outros feriados.",
                date: "12/10/2024"
            }
        ]
    },
    {
        category: "Consultores",
        updates: [
            {
                title: "Visão detalhada sobre consultores",
                description: "Fornecer uma visão detalhada sobre cada consultor, incluindo entregas, ausências frequentes e uma análise de custo x venda, destacando desequilíbrios.",
                date: "12/10/2024"
            },
            {
                title: "Informações gerais sobre consultores",
                description: "Mostrar informações gerais sobre consultores, como desempenho em projetos, engajamento e histórico de ausência.",
                date: "13/10/2024"
            }
        ]
    },
    {
        category: "Personalização",
        updates: [
            {
                title: "Funcionalidades de personalização",
                description: "Implementar funcionalidades de personalização para que o gerente tenha controle sobre seu perfil e possa ajustar preferências pessoais na plataforma.",
                date: "15/10/2024"
            }
        ]
    },
    {
        category: "Gerais",
        updates: [
            {
                title: "Melhoria da responsividade do Admin",
                description: "Melhorar a responsividade do Admin para uma melhor usabilidade em diferentes dispositivos.",
                date: "20/10/2024"
            }
        ]
    }
];


const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectChange = (value: string) => {
        setSelectedCategory(value);
    };

    return (
        <div className={"w-full h-full mb-12"}>
            <h1 className={"text-6xl font-extrabold text-center mt-32"}>
                Fique por dentro das próximas atualizações{" "}
                <span className={"bg-gradient-to-r from-roxo to-indigo-500 bg-clip-text text-transparent"}>
                    BBCCAI
                </span>
            </h1>
            <p className={"text-xl text-center mt-4 text-muted-foreground"}>
                Nós da BBCCAI prezamos pelo seu resultado, por isso estamos sempre à frente do mercado!
            </p>

            <div className={"flex w-full items-center justify-center mt-12"}>
                <div className={"h-52 rounded-xl w-3/4 bg-gradient-to-br from-violet-700 via-violet-400 to-roxo p-12"}>
                    <div className={"bg-white w-fit h-fit px-3 py-0.5 rounded-sm"}>
                        <p className={"text-sm font-semibold"}>Artigos em Alta</p>
                    </div>
                    <h1 className={"mt-2 text-white text-4xl font-bold"}>BBCCAI Roadmap</h1>
                    <p className={"mt-4 text-muted"}>
                        O Conteúdo a seguir é um planejamento dos próximos lançamentos BBCCAI.
                    </p>
                </div>
            </div>

            <div className={"w-full flex justify-center"}>
                <div className={"flex flex-col w-3/4 justify-center mt-20"}>
                    <div className={"flex justify-between items-center"}>
                        <h1 className={"text-3xl font-bold"}>Artigos mais Recentes</h1>
                        <Select onValueChange={handleSelectChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filtrar por categoria"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Categorias</SelectLabel>
                                    <SelectItem value="all">Mostrar Todos</SelectItem> {/* Opção para mostrar todos */}
                                    {roadmapData.map((category) => (
                                        <SelectItem key={category.category} value={category.category}>
                                            {category.category}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className={"mt-12 grid grid-cols-2 gap-8 mb-12"}>
                        {roadmapData
                            .filter((categoryData) => selectedCategory === "all" || !selectedCategory || categoryData.category === selectedCategory)
                            .flatMap((categoryData, categoryIndex) =>
                                categoryData.updates.map((update, updateIndex) => (
                                    <Card
                                        key={`${categoryIndex}-${updateIndex}`}
                                        className="flex flex-col h-full transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
                                    >
                                        <CardHeader className="flex-grow">
                                            <CardTitle>{update.title}</CardTitle>
                                            <CardDescription>{update.description}</CardDescription>
                                        </CardHeader>
                                        <CardFooter className={"text-sm text-muted-foreground flex items-center gap-x-2"}>
                                            <Calendar />
                                            {update.date}
                                            <div className={"bg-gray-200 text-xs font-semibold px-2 py-0.5 rounded-md ml-2"}>
                                                {categoryData.category}
                                            </div>
                                        </CardFooter>
                                    </Card>

                                ))
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
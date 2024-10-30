"use client";

import {Contrato, contratos, demandas} from "@/mocks/contracts";

import {GraficoDesvioEscopo} from "@/app/(admin)/_components/charts/grafico-desvio-escopo";
import {ModalContract} from "./modals/modal-contracts";
import {
    calcularCustoGestao,
    calcularDesvioEscopo,
    calcularDesvioSLA,
    calcularRentabilidade,
    calcularTotalHorasProjeto,
} from "./actions/contracts_helper";

import {Button} from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group"


import React, {useState, useContext} from 'react';
import {ContractContext} from '../_components/contexts/contract-context';
import {Card} from "@/components/ui/card";

export function ContractManagementPage() {
    const [selectedContract, setSelectedContract] = useState<Contrato | null>(contratos[0]);
    const [showModal, setShowModal] = useState(false);
    const [showFinancialData, setShowFinancialData] = useState(false);
    const [openCombobox, setOpenCombobox] = React.useState(false);

    const {updateContract} = useContext(ContractContext);

    const toggleButtons = [
        {
            value: 'financialData',
            label: 'Produtividade',
            state: showFinancialData,
            setState: setShowFinancialData,
        },
    ];

    return (
        <div className="w-full p-6">

            <div className="mb-6 flex justify-between items-center bg-white p-6 rounded-lg drop-shadow-md">
                <div className="flex items-center space-x-4 ">
                    <p className="text-md text-muted-foreground">Selecione um BAIA:</p>
                    <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-[150px] justify-center border-2 border-black bg-white"
                            >
                                {selectedContract ? (
                                    <>
                                        {selectedContract.projeto}
                                    </>
                                ) : (
                                    <>+ Selecione uma Baia</>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 border-2 border-black" side="right" align="start">
                            <Command>
                                <CommandInput placeholder="Procurar contrato..."/>
                                <CommandList>
                                    <CommandEmpty>Nenhum BAIA encontrado.</CommandEmpty>
                                    <CommandGroup>
                                        {contratos.map((contrato, index) => (
                                            <CommandItem
                                                key={index}
                                                value={contrato.projeto}
                                                onSelect={() => {
                                                    setSelectedContract(contrato);
                                                    updateContract(contrato);
                                                    setOpenCombobox(false);
                                                }}
                                            >
                                                <span>{contrato.projeto}</span>
                                            </CommandItem>
                                        ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>

            {selectedContract && (
                <>
                    <div className="p-4 rounded-lg mb-6 drop-shadow-md bg-roxo">
                        <h1 className="text-2xl font-bold text-center mb-8 text-white">Detalhes da BAIA</h1>
                        <div className="flex items-center space-x-4 w-full justify-around">
                            <Card
                                className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg hover:border-none hover:drop-shadow-none transition-all duration-300 hover:shadow-2xl">
                                <p className="font-bold">Numero da Baia</p> {selectedContract?.projeto}</Card>
                            <Card
                                className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg hover:border-none hover:drop-shadow-none transition-all duration-300 hover:shadow-2xl">
                                <p className="font-bold">Quantidade de Filhotes</p> 12
                            </Card>
                            <Card
                                className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg hover:border-none hover:drop-shadow-none transition-all duration-300 hover:shadow-2xl">
                                <p className="font-bold">Taxa de Ganho de Peso Diario</p> 1kg</Card>
                            <Card
                                className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg hover:border-none hover:drop-shadow-none transition-all duration-300 hover:shadow-2xl">
                                <p className="font-bold">Tempo de Permanencia da BAIA</p> 23 dias
                            </Card>
                            <Card
                                className="text-lg h-40 w-60 flex flex-col items-center justify-center text-center border-none drop-shadow-md rounded-lg hover:border-none hover:drop-shadow-none transition-all duration-300 hover:shadow-2xl">
                                <p className="font-bold">Data Prevista de Parto</p>02/11/2024
                            </Card>
                        </div>
                    </div>

                    <div className="w-full bg-white rounded-lg p-6 drop-shadow-md mb-6">
                        <h1 className="mb-4 font-bold text-2xl text-center -mt-2">Indicadores</h1>
                        <ToggleGroup size="lg" type="multiple" className={"gap-2"}>
                            {toggleButtons.map((button, index) => (
                                <ToggleGroupItem
                                    key={index}
                                    value={button.value}
                                    aria-label={`Toggle ${button.label}`}
                                    onClick={() => button.setState(!button.state)}
                                    className={`${button.state ? 'drop-shadow-md !bg-roxo !text-white' : 'drop-shadow-md border'}`}
                                >
                                    {button.state ? `Ocultar ${button.label}` : `Mostrar ${button.label}`}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    </div>

                    {
                        showFinancialData && (
                            <div className="grid grid-cols-3 gap-6 mb-6">
                                <div className="p-4 bg-white rounded-lg text-center drop-shadow-md">
                                    <p className="text-xl font-bold">Leitões que estão amamentado</p>
                                    <p className="text-3xl">
                                        8/12
                                    </p>
                                    <p className="text-sm text-red-500">
                                        80% amamentado
                                    </p>
                                </div>

                                <div className="p-4 bg-white rounded-lg text-center drop-shadow-md">
                                    <p className="text-xl font-bold">Mortalidade na BAIA</p>
                                    <p className="text-3xl">
                                        1/12
                                    </p>
                                </div>

                                <div className="p-4 bg-white rounded-lg text-center drop-shadow-md">
                                    <p className="text-xl font-bold">Natalidade na BAIA</p>
                                    <p className="text-3xl">2/12</p>
                                </div>
                            </div>
                        )
                    }

                    {/* Charts */
                    }
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        <GraficoDesvioEscopo
                            nome="Comportamento Anormal"
                            subtitle="Setembro - 2024"
                            valor={calcularDesvioEscopo(
                                calcularTotalHorasProjeto(demandas, selectedContract.projeto),
                                contratos[contratos.indexOf(selectedContract)].baseline
                            )}
                            labelFinal={`Escopo excedido em ${calcularDesvioEscopo(
                                calcularTotalHorasProjeto(demandas, selectedContract.projeto),
                                contratos[contratos.indexOf(selectedContract)].baseline
                            ).toFixed(2)}% devido ao uso de mais horas do que o planejado.`}
                        />
                        <GraficoDesvioEscopo
                            nome="Quantidade de leitões fracos"
                            subtitle="Setembro - 2024"
                            valor={calcularRentabilidade(selectedContract)}
                            labelFinal={`A rentabilidade do projeto é de ${calcularRentabilidade(selectedContract)}%. Este valor reflete a diferença entre os custos totais dos consultores e o valor do contrato.`}
                        />
                        <GraficoDesvioEscopo
                            nome="Quantidade de Controle Alimentar"
                            subtitle="Setembro - 2024"
                            valor={calcularDesvioSLA(demandas, contratos.indexOf(selectedContract))}
                            labelFinal={`${calcularDesvioSLA(demandas, contratos.indexOf(selectedContract))}% dos chamados ultrapassaram o prazo do SLA devido à alta complexidade e falta de recursos.`}
                        />
                    </div>

                    <ModalContract show={showModal} onClose={() => setShowModal(false)}
                                   selectedContract={selectedContract}/>
                </>
            )}
        </div>
    )
        ;
}

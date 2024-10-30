import { Contrato, Demanda } from "@/mocks/contracts";

export function calcularHorasContratadasGlobais(contratos: Contrato[]) {
    let totalHorasContratadas = 0;

    contratos.forEach(contrato => {
        const expertHoras = (contrato.baseline * parseFloat(contrato.expert.percentual)) / 100;
        const seniorHoras = (contrato.baseline * parseFloat(contrato.senior.percentual)) / 100;
        const plenoHoras = (contrato.baseline * parseFloat(contrato.pleno.percentual)) / 100;
        const juniorHoras = (contrato.baseline * parseFloat(contrato.junior.percentual)) / 100;
        const estagiarioHoras = (contrato.baseline * parseFloat(contrato.estagiario.percentual)) / 100;
        
        totalHorasContratadas += expertHoras + seniorHoras + plenoHoras + juniorHoras + estagiarioHoras + contrato.horas_gestao;
    });

    return totalHorasContratadas;
}

export function calcularHorasTrabalhadasGlobais(demandas: Demanda[]) {
    let totalHorasTrabalhadas = 0;

    demandas.forEach(demanda => {
        totalHorasTrabalhadas += demanda.horas;
    });

    return totalHorasTrabalhadas;
}

export function calcularOciosidadeTotal(contratos: Contrato[], demandas: Demanda[]) {
    const totalHorasContratadas = calcularHorasContratadasGlobais(contratos);
    const totalHorasTrabalhadas = calcularHorasTrabalhadasGlobais(demandas); 

    const totalOciosidade = Math.max(totalHorasContratadas - totalHorasTrabalhadas, 0);

    return {
        totalHorasContratadas,
        totalHorasTrabalhadas,
        totalOciosidade,
    };
}
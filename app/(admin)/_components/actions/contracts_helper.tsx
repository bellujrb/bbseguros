import {Contrato, Demanda} from "@/mocks/contracts";

export const calculateUtilizationRate = (selectedContract: Contrato) => {
    const totalHoursAllocated = selectedContract.horas_gestao;
    const totalHoursWorked =
      (parseFloat(selectedContract.expert.percentual.replace("%", "")) / 100) *
      totalHoursAllocated +
      (parseFloat(selectedContract.senior.percentual.replace("%", "")) / 100) *
      totalHoursAllocated +
      (parseFloat(selectedContract.pleno.percentual.replace("%", "")) / 100) *
      totalHoursAllocated +
      (parseFloat(selectedContract.junior.percentual.replace("%", "")) / 100) *
      totalHoursAllocated +
      (parseFloat(selectedContract.estagiario.percentual.replace("%", "")) / 100) *
      totalHoursAllocated;
    return ((totalHoursWorked / totalHoursAllocated) * 100).toFixed(2);
  };

  export const calcularDesvioEscopo = (horasTrabalhadas: number, baseline: number): number => {
    if (horasTrabalhadas > baseline) {
      let desvio = ((horasTrabalhadas - baseline) / baseline) * 100;

      if (desvio >= 100) {
        desvio = 100;
      }

      return desvio;
    }
    return 0;
  };


  export const calcularTotalHorasProjeto = (demandas: Demanda[], projetoNome: string): number => {
    return demandas
      .filter(demanda => demanda.projeto === projetoNome)
      .reduce((total, demanda) => total + demanda.horas, 0);
  };

  export const converterHorasParaHorasMinutos = (horasDecimais: number): string => {
    const horas = Math.floor(horasDecimais);
    const minutos = Math.round((horasDecimais - horas) * 60);

    return `${horas}h ${minutos}min`;
  };

  export const calcularDesvioSLA = (demandas: Demanda[], selectedContract: number): number => {
    let selectedProject = "";

    switch (selectedContract) {
      case 0:
        selectedProject = "PROJETO_01";
        break;
      case 1:
        selectedProject = "PROJETO_02";
        break;
      case 2:
        selectedProject = "PROJETO_03";
        break;
      default:
        selectedProject = "PROJETO_01";
    }

    const foraA = demandas.filter(
      (demanda) => demanda.status_chamado !== "Closed" && demanda.projeto === selectedProject
    );

    const totalChamadosProjeto = demandas.filter(
      (demanda) => demanda.projeto === selectedProject
    ).length;

    let desvioSLA = (foraA.length / totalChamadosProjeto) * 100;

    if (isNaN(desvioSLA)) {
      desvioSLA = 0;
    }

    return Math.round(desvioSLA * 100) / 100;
  };

  export const calcularCustoConsultores = (contrato: Contrato) => {
    const baseline = contrato.baseline;

    const expert =
      (parseFloat(contrato.expert.percentual) / 100) * baseline * parseFloat(contrato.expert.custo_venda.replace("R$", "").replace(",", "."));
    const senior =
      (parseFloat(contrato.senior.percentual) / 100) * baseline * parseFloat(contrato.senior.custo_venda.replace("R$", "").replace(",", "."));
    const pleno =
      (parseFloat(contrato.pleno.percentual) / 100) * baseline * parseFloat(contrato.pleno.custo_venda.replace("R$", "").replace(",", "."));
    const junior =
      (parseFloat(contrato.junior.percentual) / 100) * baseline * parseFloat(contrato.junior.custo_venda.replace("R$", "").replace(",", "."));
    const estagiario =
      (parseFloat(contrato.estagiario.percentual) / 100) * baseline * parseFloat(contrato.estagiario.custo_venda.replace("R$", "").replace(",", "."));

    return expert + senior + pleno + junior + estagiario;
  };

  export const calcularCustoGestao = (contrato: Contrato) => {
    return parseFloat(contrato.custo_venda_gestao.replace("R$", "").replace(",", ".")) * contrato.horas_gestao;
  };

  export const calcularLucroOperacional = (contrato: Contrato) => {
    const valorContrato = parseFloat(contrato.valor_contrato.replace("R$", "").replace(".", "").replace(",", "."));
    const custoTotalConsultores = calcularCustoConsultores(contrato);
    const custoGestao = calcularCustoGestao(contrato);

    const lucroOperacional = valorContrato - (custoTotalConsultores + custoGestao);

    if (lucroOperacional < 0) {
      return 0;
    }

    return lucroOperacional;
  };

  export const calcularRentabilidade = (contrato: Contrato) => {
    const lucroOperacional = calcularLucroOperacional(contrato);
    const custoTotalConsultores = calcularCustoConsultores(contrato) + calcularCustoGestao(contrato);

    let rentabilidade = (lucroOperacional / custoTotalConsultores) * 100;

    if (rentabilidade > 99 || rentabilidade < 0) {
      return 0;
    }

    return parseFloat(rentabilidade.toFixed(2));
  };
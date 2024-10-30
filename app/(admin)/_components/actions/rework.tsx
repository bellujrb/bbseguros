import { Demanda } from "@/mocks/contracts";

const complexidadesFiltrar = ["N1", "N2", "N3"];

export function filtrarDemandasPorRework(demandas: Demanda[]) {
    const demandasFiltradas = demandas.filter(demanda =>
      complexidadesFiltrar.includes(demanda.complexidade) && demanda.tipo_horas === "Horas de Rework"
    );
  
    const reworkPorComplexidade = complexidadesFiltrar.map(complexidade => {
      const horasComplexidade = demandasFiltradas
        .filter(demanda => demanda.complexidade === complexidade)
        .reduce((total, demanda) => total + demanda.horas, 0);
  
      return { name: complexidade, value: horasComplexidade };
    });
  
    return reworkPorComplexidade;
  }
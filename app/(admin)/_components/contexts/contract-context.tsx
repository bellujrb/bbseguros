// contracts-context.ts
import {createContext, ReactNode, useState} from 'react';
import {Contrato} from "@/mocks/contracts";

interface ContractContextType {
    selectedContract: Contrato | null;
    updateContract: (contract: Contrato) => void;
}

const ContractContext = createContext<ContractContextType>({
    selectedContract: null,
    updateContract: () => {}
});

// @ts-ignore
const ContractProvider = ({ children }) => {
    const [selectedContract, setSelectedContract] = useState<Contrato | null>(null);

    const updateContract = (contract: Contrato) => {
        setSelectedContract(contract);
    };

    return (
        <ContractContext.Provider value={{ selectedContract, updateContract }}>
            {children}
        </ContractContext.Provider>
    );
};

export { ContractProvider, ContractContext };
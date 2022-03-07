interface Data {
    id: number
    customer: string
    lastPurchase: string
    lastVehicle: string
    fleet: number
    hasRestriction: boolean
}

function createData(id: number, customer: string, lastPurchase: string, lastVehicle: string, fleet: number, hasRestriction: boolean): Data {
    return {
        id,
        customer,
        lastPurchase,
        lastVehicle,
        fleet,
        hasRestriction
    };
}

export const items = [
    createData(1, 'Bruno Pavan Adário Moreira', '01/01/2022', 'Civic Quatro Portas com teto solar, freio a disco', 10, true),
    createData(2, 'Marcelo Tucano', '01/01/2022', 'Siena', 11, true),
    createData(3, 'Matheus Souza', '01/01/2022', 'Polo', 12, false),
    createData(4, 'José da Silva Sauro Santos Oliveira Souza', '01/01/2022', 'Fit vermelho, Duas Portas com teto solar, freio a disco', 13, true),
    createData(5, 'Alberto Roberto da Silva Sauro dos Santos', '01/01/2022', 'Creta Branco', 14, true),
    createData(6, 'Victor Correia', '01/01/2022', 'Creta Branco', 15, false),
    createData(7, 'Gabrielle Melo Dias', '01/01/2022', 'Ferrari Azul', 16, false),
    createData(8, 'Luiza Oliveira Alves', '01/01/2022', 'Ferrari Vermelha', 17, false),
    createData(9, 'Alberto Roberto da Silva Sauro dos Santos', '01/01/2022', 'Ferrari Branca', 18, true),
    createData(10, 'Niyah Hartley', '01/01/2022', 'Ford Focus', 19, true),
    createData(11, 'Ahmed Rosales', '01/01/2022', 'Ford Mustang', 20, true),
    createData(12, 'Mahira Brewer', '01/01/2022', 'Koenigsegg Agera', 21, false),
    createData(13, 'Albi Brady', '01/01/2022', 'Velho Fusca', 22, true),
    createData(14, 'Falak Greenaway', '01/01/2022', 'Fusca', 23, false),
    createData(15, 'Patience Lopez', '01/01/2022', 'Novo Fusca', 24, false),
    createData(16, 'Bruno Moreira', '01/01/2022', 'Fiat Uno', 25, true)
];
export const customerFilterItems = [
    {
        customer : {
            type: ['Tipo de cliente 1', 'Tipo de cliente 2', 'Tipo de cliente 3'],
            personType: ['Pessoa Física', 'Pessoa Jurídica'],
            source: ['Loja', 'Internet'],
            gender: ['Masculino', 'Feminino'],
            occupationArea: ['Área de atuação 1', 'Área de atuação 2', 'Área de atuação 3'],
            address: {
                city: ['Salto', 'Montenegro', 'Rio de Janeiro'],
                state: ['SP', 'RS', 'RJ'],
                country: ['Brasil', 'Estados Unidos', 'Espanha']
            }
        }
    }
]

export const ticketFilterItems = [
    {
        ticket: {
            type: ['Tipo de data 1', 'Tipo de data 2'],
            source: ['Loja', 'Internet'],
            media: ['WhatsApp', 'Facebook']
        }
    }
]

export const vehicleFilterItems = [
    {
        vehicle: {
            hasVehicle: ['Sim', 'Não']
        }
    }
]
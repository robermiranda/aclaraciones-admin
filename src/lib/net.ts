import { TresponseServer } from '../types/aclaraciones'

const HOST = 'http://localhost:5000';

export async function getAclaracion (numeroFolio: number | undefined): Promise<TresponseServer> {
    try {
        let response
        if (numeroFolio) response = await fetch(`${HOST}/aclaraciones/${numeroFolio}`);
        else response = await fetch(`${HOST}/aclaraciones`);

        return response.json();
    }
    catch(error) {
        return {
            status: 'error',
            msg: 'ERROR al obtener el nombre de los datos a aclarar'
        }
    }
}


export async function getNombreDatosAclarar (): Promise<TresponseServer> {
    try {
        const response = await fetch(`${HOST}/datos-aclarar`)
        return response.json()
    }
    catch(error) {
        return {
            status: 'error',
            msg: 'ERROR al obtener el nombre de los datos a aclarar'
        }
    }
}

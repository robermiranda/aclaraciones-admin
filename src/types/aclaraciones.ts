export type Tpromovente = {
    nombre: string;
    apPaterno: string;
    apMaterno?: string;
    telefono?: string;
    email: string;
}

export type Ttitular = {
    nombre: string;
    apPaterno: string;
    apMaterno?: string;
}

export type TtipoActo = 'NACIMIENTO' | 'MATRIMONIO' | 'DEFUNCION'

export type TdatosRegistrales = {
    tipoActo: TtipoActo;
    juzgado: string | number;
    libro?: number;
    numeroActa: number;
    anio: number;
    fechaRegistro?: string;
}

export type TdatoAclarar = {
    id: number;
    dato: string;
    dice: string;
    debeDecir: string;
}

export type Tfolio = {
    numeroFolio: number;
    fechaSolicitud: string;
    statusMsg?: string; 
}

export type Taclaracion = {
    promovente: Tpromovente;
    titular: Ttitular;
    datosRegistrales: TdatosRegistrales;
    datosAclarar: Array<TdatoAclarar>;
    folio?: Tfolio;
}

export type TdatosAclararList = {
    nacimiento: Array<string>;
    matrimonio: Array<string>;
    defuncion: Array<string>;
}

type Tstatus = 'ok' | 'warn' | 'error'

export type TresponseServer = {
    status: Tstatus;
    data?: Tfolio | Taclaracion | Array<Taclaracion> | TdatosAclararList;
    msg?: string; 
}

export function isFolio (response: TresponseServer["data"]):  response is Tfolio {
    return (response as Tfolio).numeroFolio !== undefined
}

export function isAclaracion (response: TresponseServer["data"]):  response is Taclaracion {
    return (response as Taclaracion).datosRegistrales.tipoActo !== undefined
}

export function isDatosAclararList (response: TresponseServer["data"]): response is TdatosAclararList {
    return (response as TdatosAclararList).nacimiento !== undefined
}
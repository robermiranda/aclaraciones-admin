import { useState, useEffect } from "react"
import { Table, TableHead, TableBody, TableCell, TableContainer, TableRow } from "@mui/material"
import { Box, Link } from '@mui/material'
import Acuse from './Acuse/Acuse'
import { Taclaracion, TresponseServer } from '../types/aclaraciones'
import { getAclaracion } from '../lib/net'
import { fechaStr } from '../lib/util'
import Layout from './Layout';


export default function ListaSolicitudes () {

    const [aclaracion, setAclaracion] = useState<Taclaracion>({
        promovente: {
            nombre: '',
            apPaterno: '',
            email: ''
        },
        titular: {
            nombre: '',
            apPaterno: ''
        },
        datosRegistrales: {
            tipoActo: 'NACIMIENTO',
            juzgado: 0,
            numeroActa: 0,
            anio: 0
        },
        datosAclarar: [],
        folio: {
            numeroFolio: 0,
            fechaSolicitud: "00/00/0000"
        },
    });

    const [aclaraciones, setAclaraciones] = useState<Array<Taclaracion>>([])

    function folioLinkHandler (aclaracion: Taclaracion): void {
        setAclaracion(aclaracion);
    }

    useEffect(() => {
        getAclaracion(undefined)
        .then((response: TresponseServer) => {
            if (response.status === 'ok' && Array.isArray(response.data)) {
                setAclaraciones(response.data)
            }
        })
    }, [setAclaraciones])

    if (aclaraciones.length <= 0) {
        return <Layout>
            <p>Cargando Datos . . . . .</p>
        </Layout>
    }
    else return (
        <Layout>
            <TableContainer>
                <Table arial-label="simple-table" sx={{maxWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Folio</TableCell>
                            <TableCell align="left">Promovente</TableCell>
                            <TableCell align="left">Fecha Solicitud</TableCell>
                            <TableCell align="left">Estatus</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {aclaraciones.map(a => 
                            <TableRow key={a.folio?.numeroFolio}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                                hover={true}
                                onClick={event => folioLinkHandler(a)}>

                                <TableCell component="th" scope="row">
                                    <Link
                                        component="button"
                                        variant="body2"
                                        underline="always"
                                        color="inherit">

                                        {a.folio?.numeroFolio}
                                    </Link>
                                </TableCell>
                                <TableCell align="left">
                                    {a.promovente.nombre} {a.promovente.apPaterno}
                                </TableCell>
                                <TableCell align="left">
                                    {
                                        ! a.folio?.fechaSolicitud ? null :
                                        fechaStr(a.folio?.fechaSolicitud)
                                    }
                                </TableCell>
                                <TableCell align="left">{a.folio?.statusMsg}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box mt={4}>
                {
                    ( ! aclaracion.folio?.numeroFolio) ? null :
                    <Acuse
                        promovente={aclaracion.promovente}
                        titular={aclaracion.titular}
                        datosRegistrales={aclaracion.datosRegistrales}
                        datosAclarar={aclaracion.datosAclarar}
                        numeroFolio={aclaracion.folio.numeroFolio}
                        fecha={fechaStr(aclaracion.folio.fechaSolicitud)}
                        vistaPrevia={false}
                        statusAclaracionMsg={aclaracion.folio.statusMsg || ''}/>
                }
            </Box>
        </Layout>
    )
}
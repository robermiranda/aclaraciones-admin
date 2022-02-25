import { Typography, Box } from "@mui/material";
import Barchart from "./Barchart";
import Piechart from "./Piechart";


export default function Statistics ({month, year, today}) {

    const date = getDate();
    
    return (
        <>
            <Box>
                <Typography variant="body1" align="center" gutterBottom>
                    ESTADÍSTICAS DE SOLICITUDES PARA ACLARACIÓN
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" align="center" gutterBottom>
                    Año: {date.year}
                </Typography>
                <Barchart data={year}/>
            </Box>

            <Box mt={9}>
                <Typography variant="body1" align="center" gutterBottom>
                    Mes: {date.month}
                </Typography>
                <Barchart layout="vertical" data={month}/>
            </Box>

            <Box mt={9} ml={20}>
                <Typography variant="body1" align="left" gutterBottom>
                    Dia: {date.day}
                </Typography>
                <Piechart data={today}/>
            </Box>
        </>
    );
}

function getDate () {
    
    const today = new Date();
    
    function getMonth (n) {
        switch (n) {
            case 0 : return 'Enero';
            case 1 : return 'Febrero';
            case 2 : return 'Marzo';
            case 3 : return 'Abril';
            case 4 : return 'Mayo';
            case 5 : return 'Junio';
            case 6 : return 'Julio';
            case 7 : return 'Agosto';
            case 8 : return 'Septiembre';
            case 9 : return 'Octubre';
            case 10 : return 'Noviembre';
            case 11 : return 'Diciembre';
            default : return '';
        }
    }

    return {
        year : today.getFullYear(),
        month : getMonth(today.getMonth()),
        day : today.getDate()
    }
}
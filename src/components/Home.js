import { Grid, Typography } from "@mui/material";
import Layout from './Layout';


export default function Home () {

    return (
    <Layout>
        <Grid container spacing={2} direction="column" px={1} pb={1}>
            <Grid item xs={12}>
                <Typography variant="h6" component="div" gutterBottom align="center">
                    Área de aclaraciones. Registro Civil. CDMX
                </Typography>
                <Typography variant="subtitle2" component="div" gutterBottom align="center">
                    Panel de administración
                </Typography>
            </Grid>
        </Grid>
    </Layout>
    );
}
import { Box, Grid, Link, Paper, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';


export default function Layout ({children}) {

    const navigate = useNavigate()

    const redirectTo = url => navigate(url)

    return (
        <Box p={2}>
            <Grid container
                spacing={4}
                direction="column"
                px={{md: 40}}>
                
                <Grid item xs={12}>
                    <Paper variant="elevation">
                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignItems="center"
                            spacing={5}>

                            <img src="/logoRCivil.png" alt="logo registro civil"/>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => redirectTo('/admin/aclaraciones')}>
                            
                                Aclaraciones
                            </Link>
                            <Link
                                component="button"
                                variant="body2"
                                onClick={() => redirectTo('/admin/estadisticas')}>
                            
                                Estadisticas
                            </Link>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper variant="elevation">
                        {children}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}
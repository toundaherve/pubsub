import React from "react"
import { Container, Grid, Box, Typography, Button, Link } from "@material-ui/core"
import styled from "styled-components"

const FlexGrowGrid  = styled(Grid)`
    flex: 1;
`

const Home = () => {
    return (
        <Container disableGutters>
            <Box display="flex" flexDirection="column" minHeight="100vh">
                <Box display="flex" flexDirection="column" flexGrow="1" flexShrink="1">
                    <FlexGrowGrid container>
                        <Grid item xs={12} md={6}>
                            <Box padding={2} height="100%" display="flex" flexDirection="column" justifyContent="center">
                                <Box padding="20px" display="flex" flexDirection="column" >
                                    <Box component="span" paddingBottom="12px">Logo</Box>
                                    <Box marginTop="40px" marginBottom="40px">
                                        <Typography variant="h4">Happening now</Typography>
                                    </Box>
                                    <Box marginBottom="20px">
                                        <Typography variant="h5">Join Twitter today.</Typography>
                                    </Box>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6} md={12} >
                                                <Button fullWidth color="primary" variant="contained" size="large">Sign up</Button>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={12} >
                                                <Button fullWidth color="primary" variant="outlined" size="large">Log in</Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <FlexGrowGrid item xs={12} md={6}>
                            <Box minHeight="45vh" height="100%" bgcolor="primary.main" display="flex" justifyContent="center" alignItems="center">Logo</Box>
                        </FlexGrowGrid>
                    </FlexGrowGrid> 
                </Box>
                <Box padding="12px 16px">
                    <Grid container spacing={2} justify="center">
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(n => {
                            return (
                                <Grid item>
                                    <Link key={n} href="#">Link</Link>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Home
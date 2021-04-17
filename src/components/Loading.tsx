import React from "react"
import { CircularProgress, Container, Box } from "@material-ui/core"

const Loading = () => {
    return (
        <Container disableGutters>
            <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center">
                <CircularProgress />
            </Box>
        </Container>
    )
}

export default Loading
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Submit() {
    return createContainer()
}

function createContainer(): JSX.Element {
    return (
        <React.Fragment>
            <Container fixed sx={{background: "#ccc", maxWidth: "unset !important", paddingTop: "20px"}}>
                <Box maxWidth="md" sx={{background: "white", height: "100vh", margin: "0 auto"}}>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Submit;
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';

import styles from "./submit.module.scss"
import Image from 'next/image';
import { TextField } from '@mui/material';

function Submit() {
    return createContainer()
}

function createForm() {
    const src = "https://img.freepik.com/free-vector/woman-wearing-eyeglasses-reading-text-book-with-leafs-character_24877-70845.jpg?w=740"
    return (
        <FormControl>
            <Image width={100} height={100} src={src}/>
            <span>Logo size</span>
            <TextField />
        </FormControl>
    )
}

function createContainer(): JSX.Element {
    return (
        <React.Fragment>
            <Container className={styles.submitContainer} fixed>
                <Box maxWidth="md" sx={{background: "white", height: "100vh", margin: "0 auto"}}>
                    {
                        createForm()
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Submit;
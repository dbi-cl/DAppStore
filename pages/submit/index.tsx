import * as React from 'react';
import Image from 'next/image';
import { TextField, Box, Container, FormControl, FormControlLabel, Checkbox, Button } from '@mui/material';

import styles from "./submit.module.scss"
import utils from "../../styles/utils.module.scss"

function Submit() {
    return createContainer()
}

function createForm() {
    const [formValue, setFormValue] = React.useState({})
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        const { name, value } = e.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = () => {
        console.log(formValue)
    }

    const src = "https://img.freepik.com/free-vector/woman-wearing-eyeglasses-reading-text-book-with-leafs-character_24877-70845.jpg?w=740"
    return (
        <>  
            <Box className={utils.centerAlign} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Image width={100} height={100} src={src}/>
                <p>Logo size should less than 1MB (100 x 100)</p>
            </Box>
           
            <FormControl>
                <TextField className={styles.textArea} variant="standard" label="Title*" name='title' onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Description*" name="description"  onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Website*" name="website"  onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Category*" name="category" onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="BlockChain*" name="blockChain" onChange={handleInputChange}/>
                <h2>Smart Contracts</h2>
                <Box className={utils.centerAlign} sx={{background: "#eee", width: "80%", display: "flex !important", flexDirection: "column", alignItems: "center"}}>
                    <p style={{alignSelf: "flex-start", margin: "o auto"}}>#1</p>
                    <TextField className={styles.textArea} variant="standard" label="BlockChain*"  />
                    <TextField className={styles.textArea} variant="standard" label="Smart Contracts*"  />
                    <TextField className={styles.textArea} variant="standard" label="Note"  />
                </Box>
                <Button className={`${utils.centerAlign} ${styles.addBtn}`} variant="outlined" size="medium">
                    ADD
                </Button>
                <h2>Social network(URL)</h2>
                <TextField className={styles.textArea} variant="standard" label="Telegram" name="telegram" onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Twitter" name="twitter"  onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Discord" name="discord"  onChange={handleInputChange}/>
                <TextField className={styles.textArea} variant="standard" label="Weibo" name="weibo" onChange={handleInputChange}/>
                <h2>Marketing/Promotion</h2>
                <TextField className={styles.textArea} variant="standard" label="Email or Telegram/Budget/When start marketing compaign"  onChange={handleInputChange}/>
                <p style={{width: "80%", margin: "0 auto", marginBottom: "40px", color: "#b6b5b2"}}>
                    Are you interested in promoting your dapp on DappReview? We help dapps acquire 500-2000 new Users with
                    30-80k exposure on average.
                </p>
                <FormControlLabel sx={{width: "80%", margin: "0 auto", marginBottom: "60px"}} control={<Checkbox />} label="Does your dapp have an affiliate/referal program?" />
                <Button type='submit' className={`${utils.centerAlign} ${styles.submitBtn}`} variant="contained" onClick={handleSubmit}>
                    SUBMIT
                </Button>
            </FormControl>
        </>
    )
}

function createContainer(): JSX.Element {
    return (
        <React.Fragment>
            <Container className={styles.submitContainer} fixed>
                <Box maxWidth="md" sx={{background: "white", margin: "0 auto", paddingTop: "20px"}}>
                    {
                        createForm()
                    }
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Submit;
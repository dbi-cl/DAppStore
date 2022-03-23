import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Box, Container, FormControl, Button } from "@mui/material";

import { FileUploader, FormTextInput } from "@/components";
import { toBase64 } from "@/utils";
import { formType } from "../../types";

import styles from "./submit.module.scss";
import utils from "../../styles/utils.module.scss";

function Submit() {
  return createContainer();
}

function CreateForm() {
  const { control, handleSubmit } = useForm<formType>();
  const [avatarSrc, setAvatar] = useState(
    "https://dappimg.com/media/image/dapp/e8fd3f39df0c49d68001c68d958e9f7d.blob"
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: formType) => {
    axios
      .post("/api/dapps/new", { ...data, iconURL: avatarSrc })
      .then((json) => console.log(json));
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const inputFiles = e.target?.files;
    if (inputFiles) {
      const base64 = await toBase64(inputFiles);
      setAvatar(base64[0]);
    }
  };

  return (
    <>
      <Box
        className={utils.centerAlign}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {avatarSrc && (
          <Image
            width={100}
            height={100}
            src={avatarSrc}
            alt="logo"
            onClick={() => inputRef.current?.click()}
          />
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/png"
          hidden
          onChange={async (e) => await handleChange(e)}
        />
        <p>Logo size should less than 1MB (100 x 100)</p>
      </Box>
      <FormControl sx={{ width: "100%" }}>
        <FormTextInput label="Name*" name="name" control={control} required />
        <FormTextInput
          label="Short Brief*"
          name="briefing"
          control={control}
          required
        />
        <FormTextInput
          label="Description*"
          name="description"
          control={control}
          required
        />
        <FormTextInput
          label="Website*"
          name="landingURL"
          control={control}
          required
        />
        <FileUploader
          label="Upload snap shots"
          name="snapshotURLs"
          control={control}
        />
        <FormTextInput
          label="author*"
          name="authorName"
          control={control}
          required
        />
        <FormTextInput
          label="email*"
          name="authorEmail"
          control={control}
          required
        />

        <Button
          type="submit"
          className={`${utils.centerAlign} ${styles.submitBtn}`}
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          SUBMIT
        </Button>
      </FormControl>

      {/* <FormControl>
                <TextField className={styles.textArea} variant="standard" label="Title*" name='title' />
                <TextField className={styles.textArea} variant="standard" label="Description*" name="description"  />
                <TextField className={styles.textArea} variant="standard" label="Website*" name="website"  />
                <TextField className={styles.textArea} variant="standard" label="Category*" name="category" />
                <TextField className={styles.textArea} variant="standard" label="BlockChain*" name="blockChain" />
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
                <TextField className={styles.textArea} variant="standard" label="Telegram" name="telegram" />
                <TextField className={styles.textArea} variant="standard" label="Twitter" name="twitter"  />
                <TextField className={styles.textArea} variant="standard" label="Discord" name="discord"  />
                <TextField className={styles.textArea} variant="standard" label="Weibo" name="weibo" />
                <h2>Marketing/Promotion</h2>
                <TextField className={styles.textArea} variant="standard" label="Email or Telegram/Budget/When start marketing compaign"  />
                <p style={{width: "80%", margin: "0 auto", marginBottom: "40px", color: "#b6b5b2"}}>
                    Are you interested in promoting your dapp on DappReview? We help dapps acquire 500-2000 new Users with
                    30-80k exposure on average.
                </p>
                <FormControlLabel sx={{width: "80%", margin: "0 auto", marginBottom: "60px"}} control={<Checkbox />} label="Does your dapp have an affiliate/referal program?" />
                <Button type='submit' className={`${utils.centerAlign} ${styles.submitBtn}`} variant="contained">
                    SUBMIT
                </Button>
            </FormControl> */}
    </>
  );
}

function createContainer(): JSX.Element {
  return (
    <React.Fragment>
      <Container className={styles.submitContainer} fixed>
        <Box
          maxWidth="md"
          sx={{ background: "white", margin: "0 auto", paddingTop: "20px" }}
        >
          {CreateForm()}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Submit;

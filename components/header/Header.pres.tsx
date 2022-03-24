import { Button, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FunctionComponent } from "react";
import styles from "./Header.module.scss";

export const Header: FunctionComponent = () => {
  return (
    <header className={styles.head}>
      <div className={styles.routerTitle}>
        <span>Home</span>
        <span>Category</span>
      </div>
      <div className={styles.self}>
        <Button size="small" variant="contained" href="/submit">
          Submit Dapp
        </Button>
        <IconButton sx={{ ml: 8, width: 30, height: 30, p: 0 }}>
          <AccountCircleIcon sx={{ width: "100%", height: "100%" }} />
        </IconButton>
      </div>
    </header>
  );
};

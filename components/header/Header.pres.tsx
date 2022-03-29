import { Button, Box, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FunctionComponent } from "react";
import Router from "next/router";
import { IHeaderProps } from "./Header.props";
import styles from "./Header.module.scss";

export const Header: FunctionComponent<IHeaderProps> = ({ currentTab }) => {
  const titles = [
    {
      title: "Home",
      onClick: () => Router.push("/"),
    },
    {
      title: "Category",
      onClick: () => Router.push("/list"),
    },
  ];

  return (
    <header className={styles.head}>
      <Box className={styles.routerTitle}>
        {titles.map(({ title, onClick }, index) => (
          <span
            key={index}
            onClick={onClick}
            style={{
              textDecoration: currentTab === title ? "underline" : "",
            }}
          >
            {title}
          </span>
        ))}
      </Box>
      <Box className={styles.self}>
        <Button size="small" variant="contained" href="/submit">
          Submit Dapp
        </Button>
        <IconButton sx={{ ml: 8, width: 30, height: 30, p: 0 }}>
          <AccountCircleIcon sx={{ width: "100%", height: "100%" }} />
        </IconButton>
      </Box>
    </header>
  );
};

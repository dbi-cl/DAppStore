import { Box, Link as MuiLink, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { FunctionComponent, useMemo } from "react";
import styles from "./PopupBox.module.scss";
import edgeIcon from "@/assets/images/edge.svg";
import fortmaticIcon from "@/assets/images/fortmatic.svg";
import portisIcon from "@/assets/images/portis.svg";
import walletConnectIcon from "@/assets/images/wallet-connect.svg";
import coinbaseIcon from "@/assets/images/coinbase.png";

export const PopupBox: FunctionComponent = () => {
  const snackBarStyle = (className?: string) =>
    `${styles.snackbar} ${className}`;

  const links = useMemo(
    () => [
      {
        description: "Edge Wallet (Recommended)",
        icon: edgeIcon.src,
        url: "https://www.microsoft.com/en-us/edge",
      },
      {
        description: "WalletConnect",
        icon: walletConnectIcon.src,
        url: "",
      },
      {
        description: "Coinbase Wallet",
        icon: coinbaseIcon.src,
        url: "",
      },
      {
        description: "Fortmatic",
        icon: fortmaticIcon.src,
        url: "",
      },
      {
        description: "Portis",
        icon: portisIcon.src,
        url: "",
      },
    ],
    []
  );

  return (
    <Box className={styles.popup}>
      <div className={styles.header}>
        <span>Connect a wallet</span>
        <CloseIcon />
      </div>
      <div className={snackBarStyle(styles.topbar)}>
        <Typography className={styles.font}>
          By connecting a wallet, you agree to Microsoft Edge&apos;s{" "}
          <MuiLink
            sx={{ textDecoration: "underline" }}
            className={styles.highlight}
          >
            Terms of Service
          </MuiLink>{" "}
          and acknowledge that you have read and understand the Microsoft{" "}
          <span className={styles.highlight}>Protocol Disclaimer</span>
        </Typography>
      </div>
      {links.map(({ description, icon, url }, index) => (
        <Link key={index} href={url}>
          <div className={snackBarStyle(styles.linkbar)}>
            <span>{description}</span>
            <div className={styles.icon}>
              <img src={icon} />
            </div>
          </div>
        </Link>
      ))}
    </Box>
  );
};

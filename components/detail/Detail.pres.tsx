import { FunctionComponent } from "react";
import { Box, Button, Typography, IconButton, Link } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import { IDetailProps } from "./Detail.props";
import styles from "./Detail.module.scss";

export const Detail: FunctionComponent<IDetailProps> = ({ detail }) => {
  const { iconURL, name, description, landingURL, snapshotURLs } = detail;

  return (
    <Box className={styles.detailContainer}>
      <Box className={styles.detail}>
        <Box
          sx={{
            display: "flex",
            "& > *:first-child": {
              flex: "none",
            },
          }}
        >
          <Box className={styles.imageGroup}>
            <div className={styles.image}>
              <img src={iconURL} />
            </div>
            <Button
              className={styles.button}
              variant="contained"
              sx={{
                borderRadius: 1,
                backgroundColor: "#274fb5",
              }}
              href={landingURL}
            >
              Launch
            </Button>
          </Box>
          <Box className={styles.content}>
            <Typography className={styles.title}>{name}</Typography>
            <Typography className={styles.description}>
              {description}
            </Typography>
            <Box className={styles.tags}>
              <Button className={styles.tag} variant="contained" disabled>
                NFT
              </Button>
              <Button className={styles.tag} variant="contained" disabled>
                Games
              </Button>
              <Button className={styles.tag} variant="contained" disabled>
                Play To Earn
              </Button>
            </Box>
            <Box className={styles.buttons}>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <TelegramIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Link className={styles.link} href={landingURL}>
              Visit Website
            </Link>
          </Box>
        </Box>
        <Box className={styles.ranks}>
          <Box className={styles.rank}>
            <div>#8</div>
            <span>In General</span>
          </Box>
          <Box className={styles.rank}>
            <div>#5</div>
            <span>In Games</span>
          </Box>
          <Box className={styles.rank}>
            <div>#1</div>
            <span>In EOS</span>
          </Box>
        </Box>
      </Box>
      <Box className={styles.snapShotContainer}>
        {snapshotURLs &&
          snapshotURLs.map((snapshotURL) => (
            <Box key={snapshotURL} className={styles.snapshot}>
              <img src={snapshotURL}></img>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

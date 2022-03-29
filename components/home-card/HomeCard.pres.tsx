import { Score } from "@/components";
import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import styles from "./HomeCard.module.scss";
import { IHomeCardProps } from "./HomeCard.props";
import { getRandomNum } from "@/utils";

export const HomeCard: FunctionComponent<IHomeCardProps> = ({ item }) => {
  const { name, iconURL } = item;

  const volume = getRandomNum(10000, 999999);

  return (
    <Box className={styles.homeCard}>
      <div className={styles.imgContainer}>
        <img src={iconURL} alt="icon image" />
      </div>
      <div className={styles.content}>
        <Typography className={styles.name}>{name}</Typography>
        <Score
          sx={{
            mb: 2,
            "& > svg": {
              width: "15px",
            },
          }}
        />
        <Typography className={styles.uid}>Volume ${volume}</Typography>
      </div>
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FunctionComponent, useState } from "react";
import styles from "./HomeCard.module.scss";
import { IHomeCardProps } from "./HomeCard.props";

export const HomeCard: FunctionComponent<IHomeCardProps> = ({ item }) => {
  const { name, iconURL } = item;

  const GetRandomNum = (Min: number, Max: number) => {
    let Range = Max - Min;
    let Rand = Math.random();
    return Min + Math.round(Rand * Range);
  };

  const [point] = useState(GetRandomNum(5, 10));

  const uid = GetRandomNum(10000, 999999);

  return (
    <Box className={styles.homeCard}>
      <div className={styles.imgContainer}>
        <img src={iconURL} alt="icon image" />
      </div>
      <div className={styles.content}>
        <Typography className={styles.name}>{name}</Typography>
        <Box className={styles.stars}>
          <>
            {[...Array(Math.floor(point / 2))].map((_, index) => (
              <StarIcon key={index} />
            ))}
          </>
          <>
            {[...Array(point % 2)].map((_, index) => (
              <StarHalfIcon key={index} />
            ))}
          </>
          <>
            {point < 9 &&
              [...Array(Math.floor((10 - point) / 2))].map((_, index) => (
                <StarBorderIcon key={index} />
              ))}
          </>
        </Box>
        <Typography className={styles.uid}>Volume ${uid}</Typography>
      </div>
    </Box>
  );
};

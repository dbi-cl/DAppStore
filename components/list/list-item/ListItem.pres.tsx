import { Score } from "@/components";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";
import { IListItemProps } from "./ListItem.props";
import styles from "./ListItem.module.scss";
import { getRandomNum, splitNumber } from "@/utils";

export const ListItem: FunctionComponent<IListItemProps> = ({ item, sx }) => {
  const { id, name, iconURL } = item;

  const UserNumber = splitNumber(getRandomNum(1, 9999));
  const TxNumber = splitNumber(getRandomNum(10000, 99999));
  const Volume = splitNumber(getRandomNum(10000, 999999).toFixed(2));

  return (
    <Link href="/detail/[id]" as={`/detail/${id}`}>
      <Box sx={sx} className={styles.itemContainer}>
        <Box className={styles.content}>
          <Typography className={styles.name}>{name}</Typography>
          <Score
            sx={{
              color: "#ffd281",
              "& > svg": {
                width: "15px",
                height: "15px",
              },
            }}
          />
          <Box className={styles.information}>
            <span>Users</span>
            <span className={styles.users}>{UserNumber}</span>
          </Box>
          <Box className={styles.information}>
            <span>Tx</span>
            <span className={styles.tx}>{TxNumber}</span>
          </Box>
          <Box className={styles.information}>
            <span>Volume</span>
            <span className={styles.volume}>${Volume}</span>
          </Box>
        </Box>
        <Box className={styles.iconContainer}>
          <img src={iconURL} alt="icon image" />
        </Box>
      </Box>
    </Link>
  );
};

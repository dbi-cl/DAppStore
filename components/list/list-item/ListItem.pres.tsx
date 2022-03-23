import { Box, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { IListItemProps } from "./ListItem.props";
import styles from "./ListItem.module.scss";

export const ListItem: FunctionComponent<IListItemProps> = ({ item }) => {
  const { name, briefing, iconURL } = item;

  return (
    <Box className={styles.itemContainer}>
      <Box className={styles.iconContainer}>
        <img src={iconURL} alt="icon image" />
      </Box>
      <Box className={styles.content}>
        <Typography>{name}</Typography>
        <span className={styles.description}>{briefing}</span>
      </Box>
    </Box>
  );
};

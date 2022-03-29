import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";
import { IListItemProps } from "./ListItem.props";
import styles from "./ListItem.module.scss";

export const ListItem: FunctionComponent<IListItemProps> = ({ item, sx }) => {
  const { id, name, briefing, iconURL } = item;

  return (
    <Link href="/detail/[id]" as={`/detail/${id}`}>
      <Box sx={sx} className={styles.itemContainer}>
        <Box className={styles.iconContainer}>
          <img src={iconURL} alt="icon image" />
        </Box>
        <Box className={styles.content}>
          <Typography>{name}</Typography>
          <span className={styles.description}>{briefing}</span>
        </Box>
      </Box>
    </Link>
  );
};

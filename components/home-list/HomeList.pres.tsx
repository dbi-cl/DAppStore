import { Carousel, HomeCard } from "@/components";
import { Box, Link } from "@mui/material";
import { FunctionComponent } from "react";
import styles from "./HomeList.module.scss";
import { IHomeListProps } from "./HomeList.props";

export const HomeList: FunctionComponent<IHomeListProps> = ({
  title,
  list,
}) => {
  return (
    <Box
      sx={{
        width: "60%",
        minWidth: "1096px",
        mt: "25px",
        mx: "auto",
        caretColor: "transparent",
      }}
    >
      <Box className={styles.header}>
        <span className={styles.title}>{title}</span>
        <Link className={styles.link} href="/list">
          View All
        </Link>
      </Box>
      <Carousel verticalPadding={2} horizontalPadding={2}>
        {list.slice(0, 5).map((item, index) => (
          <HomeCard key={index} item={item} />
        ))}
      </Carousel>
    </Box>
  );
};

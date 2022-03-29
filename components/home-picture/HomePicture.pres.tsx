import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { IHomePictureProps } from "./HomePicture.props";
import styles from "./HomePicture.module.scss";

export const HomePicture: FunctionComponent<IHomePictureProps> = ({ list }) => {
  const urls = [
    "https://dappimg.com/media/image/banner/f20b6961a4914b5aaa1b592e974d1fdf.png",
    "https://dappimg.com/media/image/banner/531c4938421d4a8f9c1199dc05d38bff.png",
    "https://dappimg.com/media/image/banner/6af57b8a56064679b3c744e15343d8f5.png",
  ];

  const pictures = urls.map((item, index) => ({
    name: list[index].name,
    picture: item,
  }));

  return (
    <Box className={styles.container}>
      {pictures.map(({ name, picture }, index) => (
        <Box key={index} className={styles.imgContainer}>
          <span className={styles.name}>{name}</span>
          <img src={picture} />
        </Box>
      ))}
    </Box>
  );
};

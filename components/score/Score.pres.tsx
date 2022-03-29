import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FunctionComponent, useState } from "react";
import { IScoreProps } from "./Score.props";
import { getRandomNum } from "@/utils";

export const Score: FunctionComponent<IScoreProps> = ({ sx }) => {
  const [point] = useState(getRandomNum(5, 10));

  return (
    <Box sx={sx}>
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
  );
};

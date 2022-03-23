import { Box } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";
import { ICarouselProps } from "./Carousel.props";

export const Carousel: FunctionComponent<ICarouselProps> = ({
  children,
  gap,
  horizontalPadding,
  onClick,
  sx,
  verticalPadding,
}: PropsWithChildren<ICarouselProps>) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        overflowX: "scroll",
        width: "100%",
        pt: verticalPadding,
        pb: verticalPadding,

        "&::-webkit-scrollbar": {
          display: "none",
        },

        /** The leading body in the selector is so that this rule is more specific than the root rules for
         * some of the MUI components which would set the margin of the element to 0. */
        "body & > *": {
          flex: "0 0 auto",
          marginRight: gap ?? 2, // The spacing value is 8px so * 2 is 16px

          "&:first-of-type": {
            marginLeft: horizontalPadding ?? 0,
          },

          "&:last-of-type": {
            marginRight: horizontalPadding ?? 0,
          },
        },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

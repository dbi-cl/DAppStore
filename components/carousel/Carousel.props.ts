import { SxProps } from "@mui/system";
export interface ICarouselProps {
    title?: string;
    onClick?: () => void;
    horizontalPadding?: number;
    verticalPadding?: number;
    sx?: SxProps;
    gap?: number;
}

import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FunctionComponent } from "react";
import { ICategoriesCardProps } from "./CategoriesCard.props";

const StyledButton = styled(MuiButton)(() => ({
    "&:hover": {
        backgroundColor: "#eee",
    },
    color: "#00000080",
    "border-radius": "4px",
}));

export const CategoriesCard: FunctionComponent<ICategoriesCardProps> = ({ text, onClick }: ICategoriesCardProps) => {
    return (
        <StyledButton variant="text" onClick={onClick}>
            {text}
        </StyledButton>
    );
};

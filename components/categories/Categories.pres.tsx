import { FunctionComponent } from "react";
import { Carousel } from "@/components";
import { CategoriesCard } from "../categories-card";

export const Categories: FunctionComponent = () => {
  const categories = [
    "ALL",
    "ETH",
    "TRON",
    "BSC",
    "NEO",
    "IOST",
    "STEEM",
    "HIVE",
    "ICON",
  ];

  return (
    <Carousel sx={{ m: "10px" }}>
      {categories.map((item) => (
        <CategoriesCard key={item} text={item} />
      ))}
    </Carousel>
  );
};

import { FunctionComponent } from "react";
import { ListItem } from "./list-item";
import { IListProps } from "./List.props";
import styles from "./List.module.scss";

export const List: FunctionComponent<IListProps> = ({ list }) => {
  return (
    <div className={styles.listContainer}>
      {list.map((item, index) => (
        <ListItem key={index} item={item}></ListItem>
      ))}
    </div>
  );
};

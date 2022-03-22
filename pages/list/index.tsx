import { Categories, List } from "@/components";
import { DApp } from "@/model/DApp";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import type { NextPage } from "next";
import styles from "./list.module.scss";

interface IListPageProps {
  list: DApp[];
}

const ListPage: NextPage<IListPageProps> = ({ list }) => {
  return (
    <>
      <header className={styles.head}>
        <div className={styles.routerTitle}>
          <span>Home</span>
          <span>Category</span>
        </div>
        <div className={styles.self}>
          <Button
            size="small"
            variant="contained"
            onClick={() => history.pushState("", "", "/submit")}
          >
            Submit Dapp
          </Button>
          <AccountCircleIcon sx={{ ml: 8, width: 70, height: 30 }} />
        </div>
      </header>
      <Categories />
      <div className={styles.list}>
        <List list={list}></List>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4000/list");
  const list = await res.json();

  return {
    props: {
      list: new Array(4).fill([...list]).flat(),
    },
  };
};

export default ListPage;

import { Categories, List } from "@/components";
import { DApp } from "@/model/DApp";
import { Button, IconButton } from "@mui/material";
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
          <Button size="small" variant="contained" href="/submit">
            Submit Dapp
          </Button>
          <IconButton sx={{ ml: 8, width: 30, height: 30, p: 0 }}>
            <AccountCircleIcon sx={{ width: "100%", height: "100%" }} />
          </IconButton>
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
  const res = await fetch("https://dapp-store-deploy.vercel.app/api/dapps");
  const data = await res.json();
  const list = data && data.value;

  if (!list)
    return {
      notFound: true,
    };

  return {
    props: {
      list: new Array(8).fill([...list]).flat(),
    },
  };
};

export default ListPage;

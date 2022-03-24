import { Categories, List, Header } from "@/components";
import { DAppList } from "@/model/DApp";
import type { NextPage } from "next";
import styles from "./index.module.scss";
import { getDAppList } from "@/model/DAppStore";

interface IListPageProps {
  list: DAppList;
}

const ListPage: NextPage<IListPageProps> = ({ list }) => {
  return (
    <>
      <Header />
      <Categories />
      <div className={styles.list}>
        <List list={list}></List>
      </div>
    </>
  );
};

export const getServerSideProps = async () => ({
  props: {
    list: await getDAppList(),
  },
});

export default ListPage;

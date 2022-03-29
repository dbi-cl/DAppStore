import { Header, HomePicture } from "@/components";
import { HomeList } from "@/components";
import { DAppList } from "@/model/DApp";
import { getDAppList } from "@/model/DAppStore";
import type { NextPage } from "next";

interface IHomePageProps {
  list: DAppList;
}

const HomePage: NextPage<IHomePageProps> = ({ list }) => {
  const currentTab = "Home";
  const titles = ["Trending", "Games", "DeFi"];

  return (
    <>
      <Header currentTab={currentTab} />
      <HomePicture list={list} />
      {list.length > 0 &&
        titles.map((title, index) => (
          <HomeList key={index} title={title} list={list} />
        ))}
    </>
  );
};

export const getServerSideProps = async () => ({
  props: {
    list: await getDAppList(),
  },
});

export default HomePage;

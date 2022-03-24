import { Header, Detail } from "@/components";
import { DApp } from "@/model/DApp";
import { getDAppList, getDApp } from "@/model/DAppStore";
import { isNothing } from "@/model/Maybe";
import type { NextPage } from "next";

export interface IDetailPageProps {
  detail: DApp;
}

const DetailPage: NextPage<IDetailPageProps> = ({ detail }) => {
  return (
    <>
      <Header />
      <Detail detail={detail} />
    </>
  );
};

export const getStaticPaths = async () => {
  const list = await getDAppList();

  const paths = list.map((item) => ({
    params: { id: item.id },
  }));

  return { paths, fallback: false };
};

type Path = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: Path) => {
  const data = await getDApp(params.id);
  const detail = !isNothing(data) && data.value;

  if (!detail)
    return {
      notFound: true,
    };

  return {
    props: {
      detail,
    },
  };
};

export default DetailPage;

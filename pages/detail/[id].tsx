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

type Path = {
  params: {
    id: string;
  };
};

export const getServerSideProps = async ({ params }: Path) => {
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

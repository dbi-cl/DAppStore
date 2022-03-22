import { Categories, List } from "@/components"
import { DApp } from "@/model/DApp"
import type { NextPage } from "next"

interface IListPageProps {
    list: DApp[];
}

const ListPage: NextPage<IListPageProps> = ({ list }) => {
    return (
        <>
            <Categories />
            <List list={list}></List>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:4000/list")
    const list = await res.json()

    return {
        props: {
            list
        }
    }
} 

export default ListPage
import {getUser} from '@/api/user'
import {useEffect, useRef, useState} from "react";
import {Table} from "@douyinfe/semi-ui";
const { Column } = Table;
import s from './index.module.scss'

const About = () => {
    const renderRef = useRef(true)

    const [ data, setData ] = useState([])
    const pagination = {
        pageSize: 20,
        showSizeChanger:true,
        pagination:[50,100,150,200],
        style:{
        },

    }

    const scroll = {
        y: `calc(100vh - 150px)`
    }

    async function getFileList() {
        const {data: res} = await getUser()
        setData(res)

    }

    useEffect(() => {
        if (renderRef.current) {
            renderRef.current = false
            return
        }
        getFileList()
    }, [])

    return (
        <div className={s.container}>
            <Table dataSource={data} pagination={pagination} scroll={scroll} style={{ marginBottom: 12 }}>
                <Column title="名字" dataIndex="name" key="name"/>
                <Column title="年龄" dataIndex="age" key="age"/>
                <Column title="手机号" dataIndex="phone" key="phone"/>
                <Column title="邮箱" dataIndex="email" key="email"/>
                <Column title="地址" dataIndex="address" key="address"/>
            </Table>
        </div>
    )

}

export default About
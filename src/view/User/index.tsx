import {getUser} from '@/api/user'
import {useEffect, useRef, useState} from "react";
import {Button, Popconfirm, Table, Toast} from "@douyinfe/semi-ui";

const {Column} = Table;
import s from './index.module.scss'
import {IconAlertTriangle, IconDelete} from "@douyinfe/semi-icons";

const About = () => {
    const renderRef = useRef(true)
    const [data, setData] = useState([])
    const [visible, _setVisible] = useState(false);
    const [ loading,setLoading ] = useState(false)
    const pagination = {
        pageSize: 20,
        showSizeChanger: true,
        pagination: [50, 100, 150, 200],
        style: {},

    }

    const scroll = {
        y: `calc(100vh - 150px)`
    }

    async function getFileList() {
        setLoading(true)
        const {data: res} = await getUser({length: 20}).finally(()=> setLoading(false))
        setData(res)

    }

    const removeRecord = (uid:any) => {
        setLoading(true)
        let newDataSource = [...data]
        let index: number = newDataSource.findIndex((v: any) => v.uid === uid)
        setTimeout(()=>{
            newDataSource.splice(index, 1)
            Toast.success('删除成功!')
            setData(newDataSource)
            setLoading(false)
        },1000)
    }


    useEffect(() => {
        getFileList()
    }, [])

    return (
        <div className={s.container}>
            <Table dataSource={data} pagination={pagination} scroll={scroll} style={{marginBottom: 12}} loading={loading}>
                <Column title="名字" dataIndex="name" key="name"/>
                <Column title="年龄" dataIndex="age" key="age"/>
                <Column title="手机号" dataIndex="phone" key="phone"/>
                <Column title="邮箱" dataIndex="email" key="email"/>
                <Column title="地址" dataIndex="address" key="address"/>
                <Column title="操作" dataIndex="operate" key="operate" render={
                    (text, record) => (
                        <Popconfirm
                            okType='danger'
                            icon={<IconAlertTriangle style={{color: 'var(--semi-color-danger)'}} size="extra-large"/>}
                            trigger="click"
                            title="确定删除该数据吗？"
                            content="此操作将不可逆"
                            onConfirm={() => removeRecord(record.id)}
                        >
                            <Button key={record.uid} icon={<IconDelete/>} theme="borderless"/>
                        </Popconfirm>

                    )
                }/>

            </Table>
        </div>
    )

}

export default About
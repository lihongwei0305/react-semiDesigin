import {getUser} from '@/api/user'
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Button, Form, Modal, Popconfirm, Spin, Table, Toast, useFormState} from "@douyinfe/semi-ui";

const {Column} = Table;
import s from './index.module.scss'
import {IconAlertTriangle, IconDelete} from "@douyinfe/semi-icons";
import useModal from "@/hooks/Modal/useModel";
import useUserForm from "@/view/User/components/userForm";
import {createUUID} from '@/utils'


const User = () => {
    const [data, setData] = useState([])
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false)
    const pagination = {
        pageSize: 20,
        showSizeChanger: true,
        pagination: [50, 100, 150, 200],
        style: {},

    }

    // const scroll = useMemo(() => ({y}), []);


    async function getFileList() {
        setLoading(true)
        const {data: res} = await getUser({length: 20}).finally(() => setLoading(false))
        setData(res)

    }

    const removeRecord = (uid: any) => {
        setLoading(true)
        let newDataSource = [...data]
        let index: number = newDataSource.findIndex((v: any) => v.uid === uid)
        setTimeout(() => {
            newDataSource.splice(index, 1)
            Toast.success('删除成功!')
            setData(newDataSource)
            setLoading(false)
        }, 1000)
    }


    useEffect(() => {
        getFileList()
    }, [])


    const onOk = () => {
        let formData = getFormState()
        formData.id = createUUID()
        console.log(formData)
        let newDataSource = [...data]
        // @ts-ignore
        newDataSource.unshift(formData)
        setVisible(false)
        setData(newDataSource)
    }


    const {userForm, formRef, getFormState} = useUserForm()

    const {ModelContainer, open} = useModal({
        title: "新建用户",
        width: 400,
        height: 'auto',
        visible,
        onOk: onOk
    }, React.forwardRef(userForm))


    window.onresize = () => {
        calcHeight()
    }


    const [scroll, setScroll] = useState({y: 0})

    const calcHeight = () => {
        let innerHeight = window.innerHeight
        let clientHeight = (document.querySelector(".home_content") as any)?.firstChild.clientHeight || 60
        let y = innerHeight - clientHeight - 120
        setScroll({y})
    }


    useEffect(() => {
        calcHeight()
    }, [])


    return (
        <div className={s.container}>
            <div>
                <Button onClick={() => setVisible(true)}>新增</Button>
            </div>
            <Table dataSource={data} pagination={pagination} scroll={scroll} style={{marginBottom: 12}}
                   loading={loading}>
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
                            onConfirm={() => removeRecord(record.uid)}
                        >
                            <Button key={record.uid} icon={<IconDelete/>} theme="borderless"/>
                        </Popconfirm>

                    )
                }/>

            </Table>

            <ModelContainer></ModelContainer>

        </div>
    )

}

export default User
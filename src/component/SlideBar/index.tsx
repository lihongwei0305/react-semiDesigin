import React from 'react';
import {Nav} from '@douyinfe/semi-ui';
import {IconUser, IconStar, IconSetting} from '@douyinfe/semi-icons';
import s from './index.module.scss'
import menu from "@/component/SlideBar/menu";
import {useNavigate} from "react-router-dom";
import {observer} from 'mobx-react-lite'
import menuStore from "@/store/menuStore";

const SlideBar = () => {
    const navigate = useNavigate()

    let onSelect = (data: any) => {
        let {itemKey, text} = data.selectedItems[0]
        menuStore.setMenu({
            tagKey: itemKey,
            children: text,
            closable: true,
            color:'white'
        })
        navigate(itemKey)
    }
    return (
        <Nav
            className={s.SlideBar}
            bodyStyle={{height: '100%'}}
            items={menu}
            onSelect={data => onSelect(data)}
            selectedKeys={menuStore.selectedKeys}
            // onClick={data => console.log('trigger onClick: ', data)}
        />
    )

}

export default observer(SlideBar)
import React, {useEffect} from 'react';
import {Nav} from '@douyinfe/semi-ui';
import {IconUser, IconStar, IconSetting} from '@douyinfe/semi-icons';
import s from './index.module.scss'
import menu from "@/component/SlideBar/menu";
import {Navigation, NavigateFunction, useNavigate} from "react-router-dom";
import {observer} from 'mobx-react-lite'
import menuStore from "@/store/menuStore";


interface Props {
    navigate: NavigateFunction
}



const SlideBar: React.FC<Props> = ({navigate}) => {
    useEffect(()=>{
        menuStore.setMenuSelectedKeys("/home/homePage")
        menuStore.setTagDefaultActive(menu,'/home/homePage',navigate)
    },[])

    let onSelect = (data: any) => {
        let {itemKey, text} = data.selectedItems[0]
        menuStore.setMenuActive({
            tagKey: itemKey,
            children: text,
            closable: true,
            color: 'white'
        }, navigate)
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
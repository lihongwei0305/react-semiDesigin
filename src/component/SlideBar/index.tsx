import React from 'react';
import {Nav} from '@douyinfe/semi-ui';
import {IconUser, IconStar, IconSetting} from '@douyinfe/semi-icons';
import s from './index.module.scss'
import menu from "@/component/SlideBar/menu";
import {useNavigate} from "react-router-dom";
const SlideBar = () => {
    const navigate = useNavigate()

    let onSelect = (data: any) => {
        console.log(data)
       navigate(data.itemKey)
    }
    return (
        <Nav
            className={s.SlideBar}
            bodyStyle={{height: '100%'}}
            items={menu}
            onSelect={data => onSelect(data)}
            // onClick={data => console.log('trigger onClick: ', data)}
        />
    )

}

export default SlideBar
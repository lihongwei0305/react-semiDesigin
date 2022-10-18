import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconUser, IconStar, IconSetting } from '@douyinfe/semi-icons';
import s from './index.module.scss'
const NavBar = ()=>{

return (
    <Nav
        className={s.NavBar}
        bodyStyle={{ height: '100%' }}
        items={[
            { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
            { itemKey: 'union', text: '活动管理', icon: <IconStar /> },
            {
                text: '任务平台',
                icon: <IconSetting />,
                itemKey: 'job',
                items: ['任务管理', '用户任务查询'],
            },
        ]}
        onSelect={data => console.log('trigger onSelect: ', data)}
        onClick={data => console.log('trigger onClick: ', data)}
    />
)

}

export default NavBar
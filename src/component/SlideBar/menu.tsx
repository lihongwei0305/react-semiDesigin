import {IconHome, IconInfoCircle, IconSetting, IconStar, IconUser} from "@douyinfe/semi-icons";

let menu:any = [
    { itemKey: '/home/homePage', text: '首页', icon: <IconHome /> },
    { itemKey: '/home/user', text: '用户管理', icon: <IconUser /> },
    { itemKey: '/home/active', text: '活动管理', icon: <IconStar /> },
    {
        text: '任务平台',
        icon: <IconSetting />,
        itemKey: '/job',
        items: ['任务管理', '用户任务查询'],
    },
    { itemKey: '/home/about', text: '关于我们', icon: <IconInfoCircle /> },

]



export default menu
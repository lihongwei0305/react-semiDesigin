import {Space, Tag, TagGroup} from "@douyinfe/semi-ui";
import {observer} from 'mobx-react-lite'
import menuStore from '@/store/menuStore'
import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()


    return (
        <div>
            <Space>
                {menuStore.getMenu().map(v => {
                    return <Tag
                        color={v.color}
                        key={v.tagKey}
                        closable={true}
                        onClick={() => {
                            menuStore.setActiveMenu(v.tagKey)
                            navigate(v.tagKey)
                         }
                        }
                        onClose={() => menuStore.deleteMenu(v.tagKey)}>{v.children}
                    </Tag>
                })}
            </Space>
        </div>
    )


}


export default observer(Header)
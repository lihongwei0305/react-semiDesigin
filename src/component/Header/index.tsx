import {Space, Tag, TagGroup} from "@douyinfe/semi-ui";
import {observer} from 'mobx-react-lite'
import menuStore from '@/store/menuStore'
import React, {ReactPropTypes, useMemo, useState} from "react";
import {NavigateFunction} from "react-router-dom";


interface Props {
    navigate: NavigateFunction
}

const Header: React.FC<Props> = ({navigate}) => {
    return (
        <div>
            <Space>
                {menuStore.getMenu().map(v => {
                    return <Tag
                        color={v.color}
                        key={v.tagKey}
                        closable={v.closable}
                        onClick={() => {
                            menuStore.setActiveMenu(v.tagKey, navigate)
                        }}
                        onClose={() => menuStore.deleteMenu(v.tagKey,navigate)}>{v.children}
                    </Tag>
                })}
            </Space>
        </div>
    )


}


export default observer(Header)
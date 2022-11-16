import {makeAutoObservable} from 'mobx'
import {NavigateFunction, Navigation} from "react-router-dom";


const store = makeAutoObservable({
    menu: [] as any,
    selectedKeys: [] as any,
    /** 获取左侧菜单 */
    getMenu: () => {
        return [...store.menu]
    },
    findIndex: (tagKey: string) => {
        return store.menu.findIndex((v: any) => v.tagKey === tagKey)
    },
    /** 设置左侧菜单选中 */
    setSelectedKeys: (tagKey: string) => {
        store.selectedKeys = [tagKey]
    },

    /** 设置 tag 默认选中 */
    setDefaultMenu: (menu: any, tagKey: string, navigate: NavigateFunction) => {
        let data = menu.find((v: any) => v.itemKey === tagKey)
        // console.log(data)
        store.setMenu({
            tagKey: data.itemKey,
            children: data.text,
            closable: false,
            color: 'white'
        }, navigate)
    },

    /** 设置菜单 */
    setMenu: (data: any, navigate: NavigateFunction) => {
        if (store.findIndex(data.tagKey) === -1) {
            store.menu.push(data);
        }
        store.setSelectedKeys(data.tagKey)
        store.setActiveMenu(data.tagKey, navigate)
    },
    /** 设置顶部tag激活状态 */
    setActiveMenu: (tagKey: string, navigate: NavigateFunction) => {
        store.menu.forEach((v: any) => {
            v.color = v.tagKey === tagKey ? 'green' : 'white'
        })
        store.setSelectedKeys(tagKey)
        navigate(tagKey)
    },
    deleteMenu: (tagKey: string, navigate: NavigateFunction) => {
        if (store.findIndex(tagKey) === -1) return
        store.menu.splice(store.findIndex(tagKey), 1)
        store.setMenu(store.menu.at(-1), navigate)
    }
})

export default store

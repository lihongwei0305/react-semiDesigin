import {makeAutoObservable} from 'mobx'
import {NavigateFunction} from "react-router-dom";


const store = makeAutoObservable({
    menu: [] as any,
    selectedKeys: [] as any,

    /**
     *  @description 菜单
     *
     * */

    /** 获取左侧菜单 */
    getMenu: () => {
        return [...store.menu]
    },
    findMenuIndex: (tagKey: string) => {
        return store.menu.findIndex((v: any) => v.tagKey === tagKey)
    },
    /** 设置左侧菜单选中 */
    setMenuSelectedKeys: (tagKey: string) => {
        store.selectedKeys = [tagKey]
    },
    /** 设置菜单 */
    setMenuActive: (data: any, navigate: NavigateFunction) => {
        if (store.findMenuIndex(data.tagKey) === -1) {
            store.menu.push(data);
        }
        store.setMenuSelectedKeys(data.tagKey)
        store.setTagActive(data.tagKey, navigate)
    },
    deleteMenu: (tagKey: string, navigate: NavigateFunction) => {
        if (store.findMenuIndex(tagKey) === -1) return
        store.menu.splice(store.findMenuIndex(tagKey), 1)
        store.setMenuActive(store.menu.at(-1), navigate)
    },


    /**
     *  @description 顶部tag
     *
     * */

    /** 设置 tag 默认选中 */
    setTagDefaultActive: (menu: any, tagKey: string, navigate: NavigateFunction) => {
        let data = menu.find((v: any) => v.itemKey === tagKey)
        store.setMenuActive({
            tagKey: data.itemKey,
            children: data.text,
            closable: false,
            color: 'white'
        }, navigate)
    },


    /** 设置顶部tag激活状态 */
    setTagActive: (tagKey: string, navigate: NavigateFunction) => {
        store.menu.forEach((v: any) => {
            v.color = v.tagKey === tagKey ? 'green' : 'white'
        })
        store.setMenuSelectedKeys(tagKey)
        navigate(tagKey)
    },

})

export default store

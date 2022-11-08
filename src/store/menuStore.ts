import {makeAutoObservable} from 'mobx'
import {NavigateFunction, Navigation} from "react-router-dom";


const store = makeAutoObservable({
    menu: [] as any,
    selectedKeys: [] as any,
    getMenu: () => {
        return [...store.menu]
    },
    findIndex: (tagKey: string) => {
        return store.menu.findIndex((v: any) => v.tagKey === tagKey)
    },

    setSelectedKeys: (tagKey: string) => {
        store.selectedKeys = [tagKey]
    },

    setMenu: (data: any,navigate:NavigateFunction) => {
        if (store.findIndex(data.tagKey) === -1) {
            store.menu.push(data);
        }
        store.setSelectedKeys(data.tagKey)
        store.setActiveMenu(data.tagKey,navigate)
    },
    setActiveMenu: (tagKey: string, navigate: NavigateFunction) => {
        store.menu.forEach((v: any) => {
            v.color = v.tagKey === tagKey ? 'green' : 'white'
        })
        store.setSelectedKeys(tagKey)
        navigate(tagKey)
    },
    deleteMenu: (tagKey: string,navigate:NavigateFunction) => {
        if (store.findIndex(tagKey) === -1) return
        store.menu.splice(store.findIndex(tagKey), 1)
        store.setMenu(store.menu.at(-1),navigate)
    }
})

export default store

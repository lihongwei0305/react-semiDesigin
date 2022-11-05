import {makeAutoObservable} from 'mobx'


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

    setMenu: (data: any) => {
        if (store.findIndex(data.tagKey) === -1) {
            store.menu.push(data);
        }
        store.setSelectedKeys(data.tagKey)
        store.setActiveMenu(data.tagKey)
    },
    setActiveMenu: (tagKey: string) => {
        store.menu.forEach((v: any) => {
            v.color = v.tagKey === tagKey ? 'green' : 'white'
        })
        store.setSelectedKeys(tagKey)
    },
    deleteMenu: (tagKey: string) => {
        if (store.findIndex(tagKey) === -1) return
        store.menu.splice(store.findIndex(tagKey), 1)
    }
})

export default store

import {makeAutoObservable} from 'mobx'

const countStore = makeAutoObservable({
    data: {
        name: 0
    },
    changeName: (val: string) => (countStore.data.name++)
})

export default countStore

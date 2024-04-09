import { defineStore } from 'pinia'
import { store } from './index.js'
export const useAppStore = defineStore('appStore', {
    state: () => ({ openModalComingSoon: false,
    isScroll: false}),
    actions: {
        setModalComingSoon(data) {
            this.openModalComingSoon = data
        },
        setModalIsScroll(data) {
            this.isScroll = data
        }
    }
})

export function useAppStoreWithOut() {
    return useAppStore(store)
}

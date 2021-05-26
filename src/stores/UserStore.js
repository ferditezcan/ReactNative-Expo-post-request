import { observable, action } from 'mobx'

class UserStore {
    @observable user = {}

    @action setUser(val) {
        this.user = val
    }
}

export default new UserStore()
import { Api } from './api.js';
import {loadUserData, UserStore} from "../store/UserStore";
import {loadMyRoutinesData} from "../store/MyRoutinesStore";

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
        localStorage.setItem('token', Api.token)
    }

    static async myRoutines(page,size,orderby,direction){
        let result = await Api.get(`${Api.baseUrl}/users/current/routines/?page=${page}&size=${size}&orderBy=${orderby}&direction=${direction}`,true,null)
        loadMyRoutinesData(result);
        return result;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller).then(() => {
            Api.token = undefined;
            localStorage.removeItem('token')
        })
    }

    static async create(userInfo, controller) {
        const result = await Api.post(`${Api.baseUrl}/users`, false, userInfo, controller);
        return result;
    }

    static async validate(data, controller) {
        const result = Api.post(`${Api.baseUrl}/users/verify_email`, false, data, controller);
        return result;
    }

    static async resendVerification(data, controller) {
        const result = Api.post(`${Api.baseUrl}/users/resend_verification`,false,data,controller);
        return result;
    }

    static async getUser(id) {
        let data = await Api.get(`${Api.baseUrl}/users/${id}`, true, null);
        return data;
    }

    static async getProfileElements() {
        if (Api.token === undefined) {
            throw 'Must be logged in'
        }
        let data = await Api.get(`${Api.baseUrl}/users/current`, true, null);
        loadUserData(data);
        return data;
    }

    static async saveUserElements() {
        UserStore.gender = (UserStore.gender==='Masculino')?'male' : 'female';
        let result = Api.put(`${Api.baseUrl}/users/current`, true, UserStore, null)
        return result
    }

    static async getUserId() {
        if (Api.token === undefined || Api.token === null) return null
        let result = await Api.get(`${Api.baseUrl}/users/current`, true, null)
        return result.id;
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
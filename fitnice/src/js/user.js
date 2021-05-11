import { Api } from './api.js';

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/users`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, controller);
        Api.token = undefined;
    }

    static async create(userInfo, controller) {
        const result = await Api.post(`${Api.baseUrl}/users`, false, userInfo, controller);
        return result;
    }

    static async validate(data, controller) {
        const result = Api.post(`${Api.baseUrl}/users/verify_email`, false, data, controller);
        return result;
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
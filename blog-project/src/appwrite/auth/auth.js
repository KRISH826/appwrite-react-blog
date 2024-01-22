import config from "../../config/config";

import { Client, Account, ID } from "appwrite";

export class Authservice {
    client = new Client
    account;
    constructor() {
        this.client.setEndpoint(config.appwriteUrl).setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.loginAccount()
            } else {
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async loginAccount({ email, password }) {
        try {
            const loginUser = await this.account.createEmailSession(email, password)
            return loginUser;
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw error
        }

    }

    async logOutUser() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new Authservice()

export default authService
import axios from "axios";

import RelayAPIController from "../Relay_API/RelayAPI.controller";
import RelayAPIService from "../Relay_API/RelayAPI.service";

import {URL_REQUEST_BASE} from "../settings/env";

export default class ModeratorAPIController {

    static async login(login, password) {
       try {
           const req_login = await axios.post(`${URL_REQUEST_BASE}/api/auth/token/login/`, {
               username: login,
               password
           })

           return req_login.data;
       } catch (e) {
           return 400
       }
    }
    static async logOut(token) {
        const log_out = await axios.post(`${URL_REQUEST_BASE}/api/auth/token/logout/`, {}, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }
    static async getMe(token) {
        try {
            const moder_req = await axios.get(`${URL_REQUEST_BASE}/api/auth/users/me/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            return moder_req.data;
        } catch (e) {
            return 403;
        }
    }

    static async getAvailableStages(moderator) {
        if (!moderator.id) return [];

        const all_stages = await RelayAPIService.getAllStages();
        const race_stages = await RelayAPIController.getSages();

        if(moderator.role == 'admin') return race_stages;

        return all_stages.filter(stage => {
            return race_stages.find(st => st.id == stage.id) && stage.moderator == moderator.id;
        });
    }
}
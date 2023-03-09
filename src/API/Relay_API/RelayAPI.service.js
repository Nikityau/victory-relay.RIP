import axios from "axios";

import {URL_REQUEST_BASE} from "../settings/env";

export default class RelayAPIService {
    static async getActiveRace () {
       try {
           const { data } = await axios.get(`${URL_REQUEST_BASE}/api/race/`, {
               params: {
                   is_active:1,
                   limit:1
               }
           });

           return data;
       } catch (e) {

           return null;
       }
    }
    static getAllRaces = async () => {
        const { data } = await axios.get(`${URL_REQUEST_BASE}/api/race/`);
        return data;
    }
    static getLastFinished = async () => {
        const { data } = await axios.get(`${URL_REQUEST_BASE}/api/race/?is_finish=1&limit=1`);
        return data;
    }
    static getAllFinishedRaces = async () => {
        const { data } = await axios.get(`${URL_REQUEST_BASE}/api/race/?is_finish=1`)
        return data;
    }



    static getTeams = async () => {
        const { data } = await axios.get(`${URL_REQUEST_BASE}/api/teams`);
        return data;
    }
    static getTeamById = async (id) => {
        const res = await axios.get(`${URL_REQUEST_BASE}/api/teams/${id}`);
        return res.data;
    }
    static getResults = async () => {
        const res = await axios.get(`${URL_REQUEST_BASE}/api/results`)
        return res.data;
    }
    static getAllStages = async () => {
        const stages_req = await axios.get(`${URL_REQUEST_BASE}/api/stages/`);
        return stages_req.data;
    }


    static startRace = async (id, token) => {
        const req_start = await axios.get(`${URL_REQUEST_BASE}/api/race/${id}/start/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }

    static finishRace = async (id, token) => {
        const req_finish = await axios.get(`${URL_REQUEST_BASE}/api/race/${id}/finish/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }



    static postTeamResult = async (team, token, stage_id) => {
        try {
            const team_req = await axios.post(`${URL_REQUEST_BASE}/api/teams/${team.id}/results/`,
                {
                    stage_type: stage_id
                }, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })
            return team_req.data;
        } catch (e) {
            console.log(e.message, 'http')

            return null
        }
    }
    static patchTeamResult = async (team, token, stage_id) => {
       try {
           const team_req = await axios.patch(`${URL_REQUEST_BASE}/api/teams/${team.id}/results/${stage_id}/`,
               {
                   stage_type: stage_id
               }, {
                   headers: {
                       'Authorization': `Token ${token}`
                   }
               })

           return team_req
       } catch (e) {
           console.log(e.message, 'error')

           return null
       }
    }

    static getTeamResults = async (team_id) => {
        const { data } = await axios.get(`${URL_REQUEST_BASE}/api/teams/${team_id}/results/`)

        return data;
    }

    static finishTeam = async (race_id, team_id, token) => {
        try {
            const team_req = await axios.get(`${URL_REQUEST_BASE}/api/race/${race_id}/teams/${team_id}/finish/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
        } catch (e) {
            console.log(e.message)
        }
    }
}
import axios from "axios";

export default class RelayAPIService {
    static async getActiveRace () {
       try {
           const { data } = await axios.get('https://victory-relay.herokuapp.com/api/race/', {
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
        const { data } = await axios.get('https://victory-relay.herokuapp.com/api/race/');
        return data;
    }
    static getLastFinished = async () => {
        const { data } = await axios.get('https://victory-relay.herokuapp.com/api/race/?is_finish=1&limit=1');
        return data;
    }
    static getAllFinishedRaces = async () => {
        const { data } = await axios.get('https://victory-relay.herokuapp.com/api/race/?is_finish=1')
        return data;
    }



    static getTeams = async () => {
        const { data } = await axios.get('https://victory-relay.herokuapp.com/api/teams');
        return data;
    }
    static getTeamById = async (id) => {
        const res = await axios.get(`https://victory-relay.herokuapp.com/api/teams/${id}`);
        return res.data;
    }
    static getResults = async () => {
        const res = await axios.get('https://victory-relay.herokuapp.com/api/results')
        return res.data;
    }
    static getAllStages = async () => {
        const stages_req = await axios.get('https://victory-relay.herokuapp.com/api/stages/');
        return stages_req.data;
    }


    static startRace = async (id, token) => {
        const req_start = await axios.get(`https://victory-relay.herokuapp.com/api/race/${id}/start/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }

    static finishRace = async (id, token) => {
        const req_finish = await axios.get(`https://victory-relay.herokuapp.com/api/race/${id}/finish/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }

    static postTeamResult = async (team, token, stage_id) => {
        console.log(stage_id)
        //const team_req = autoDrawEnabled
        const team_req = await axios.post(`https://victory-relay.herokuapp.com/api/teams/${team.id}/results/`,
            {
                stage_type: stage_id
            }, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        return team_req.data;
    }
    static patchTeamResult = async (team, token, stage_id) => {
        const team_req = await axios.patch(`https://victory-relay.herokuapp.com/api/teams/${team.id}/results/${stage_id}/`,
            {
                stage_type: stage_id
            }, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
        return team_req
    }

    static finishTeam = async (race_id, team_id, token) => {
        const team_req = await axios.get(`https://victory-relay.herokuapp.com/api/race/${race_id}/teams/${team_id}/finish/`, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
    }
}
import axios from "axios";

import RelayAPIService from './RelayAPI.service'

export default class RelayAPIController {
    static async getRace() {
        const data = await RelayAPIService.getActiveRace();

        if(!data.results.length)
            return await RelayAPIService.getLastFinished();

        return data || [];
    }
    static async getTeams() {
        return await RelayAPIService.getTeams();
    }
    static async getTeamsById(id) {
        return await RelayAPIService.getTeamById(id);
    }
    static async getResults() {
        return await RelayAPIService.getResults();
    }
    static isRacesActive = async () => {
        const { data } = await RelayAPIService.getActiveRace();
        return data.length ? true : false
    }
    static async getSages() {
        const res_race = await RelayAPIController.getRace();
        const res_data = res_race?.results[0]?.stage_types;
        return res_data || [];
    }
}
import axios from "axios";

import RelayAPIService from './RelayAPI.service'

import * as synt from '../../SynteticData/SynteticData'

export default class RelayAPIController {
    static async getRace() {
        const data = await RelayAPIService.getActiveRace();

        if (!data.results.length) {
            const lastFinished = await RelayAPIService.getLastFinished()

            if(lastFinished) return lastFinished;

            return synt.race();
        }

        return data || [];
    }

    static async getTeams() {

        const teams = await RelayAPIService.getTeams();

        if(teams) return teams;

        return synt.teams();
    }

    static async getTeamsById(id) {
        return await RelayAPIService.getTeamById(id);
    }

    static async getResults() {
        return await RelayAPIService.getResults();
    }

    static isRacesActive = async () => {
        const {data} = await RelayAPIService.getActiveRace();
        return data?.length ? true : false
    }

    static async getSages() {
        const res_race = await RelayAPIController.getRace();
        const res_data = res_race?.results[0]?.stage_types;
        return res_data || [];
    }
}
import axios from "axios";


const findTeamsByHex = async (hex) => {
    const req_teams = await axios.get('https://victory-relay.herokuapp.com/api/teams/');
    const data = req_teams.data;

    const teams = [];
    data.map(team => {
        if(team.color_code_hex == hex)
            teams.push(team);
    })

    return {
        hex,
        teams
    }
}

export default (races) => {
    const filteredTeams = []

    console.log(races)

    races?.results[0].teams.map(async team => {
        const team_f = await findTeamsByHex(team.color_code_hex)
        filteredTeams.push(team_f)
    })

    return filteredTeams;
}


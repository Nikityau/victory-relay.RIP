export default (races) => {
    let count = 0;
    races?.results?.map(race => {
        count += race.teams.length;
    })

    return count;
}
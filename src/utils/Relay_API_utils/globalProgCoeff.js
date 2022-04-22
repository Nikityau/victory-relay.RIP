export default (races) => {
    let coeff = 0;
    races?.results?.map(race => {
        coeff += race.is_finish;
    })

    return coeff;
}
export default (totalStages, totalTeamsCount) => {
    let screen = document.documentElement.clientWidth >= 1600 ? 1600 : document.documentElement.clientWidth;

    if(screen <= 500) {
       screen = screen * 90 / 100;
    }

    const circle_pix = screen / (totalStages - 1);
    const team_pix = screen / (totalStages);

    return {
        circle_pix,
        team_pix
    }
}
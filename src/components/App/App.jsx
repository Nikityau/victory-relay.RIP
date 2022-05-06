import React, {useEffect, useMemo, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, useHistory
} from 'react-router-dom'


//components
import MobileNavigation from "../MobileNavigation/User/MobileNavigation";
import TeamList from "../TeamList/MobileVersion/TeamList";
import Relay from "../Relay/Relay";
import Auth from "../Auth/Auth";
import TeamDescription from "../TeamList/MobileVersion/TeamDescription/TeamDescription";
import PopUpInfoBar from "../Relay/PopUpInfoBar/PopUpInfoBar";
import RelayAPIController from "../../API/Relay_API/RelayAPI.controller";
import Moderator from "../Moderator/Moderator";

//styles
import "./App.css"
import '../../assets/fonts/fonts.css'

//context
export const AppContext = React.createContext(null)

const App = () => {

    const [updatePlug, setUpdatePlug] = useState(false)
    const [interval, setTimeInterval] = useState(null);
    const [races_API, setRaces_API] = useState([]);
    const [stages_API, setStages_API] = useState([]);
    const [teams_API, setTeams_API] = useState([])

    useEffect(() => {
        getData().catch(e => console.log(e))
        timer()
    }, [updatePlug])

    useEffect(() => {
        return () => {
           clearInrvl()
        }
    }, [])

    const getData = async () => {
        await getResults_API()
        await getStages_API()
        await getTeams_API()
    }

    const timeInterval = 1000 * 60 * 5
    //setInterval(getData, timeInterval)

    const timer =  () => {
        const intrvl = setInterval(async () => {
            try {
                await getData();
            } catch (e) {
                clearInrvl()
                timer()
            }
        }, timeInterval);
        setTimeInterval(intrvl);
    }

    const clearInrvl = () => {
        clearInterval(interval);
        setTimeInterval(null)
    }

    async function getResults_API()  {
        const data_api = await RelayAPIController.getRace();
        setRaces_API(data_api)
    }
    const getStages_API = async () => {
        const data_api = await RelayAPIController.getSages();
        setStages_API(data_api);
    }
    const getTeams_API = async () => {
        const teams = await RelayAPIController.getTeams();
        setTeams_API(teams)
    }

    const appContext = {
        prevDef: (e) => {
            e.preventDefault();
        }
    }

    const [popUpTeam, setPopUpTeam] = useState(null);
    const [isPopUpOpen, setIsPopUpOpen] = useState(false)

    const closePopUp = () => {
        setIsPopUpOpen(false)
        setTimeout(setPopUpTeam, 300, {})
    }
    const changePopUpTeamName = (name) => {
        setPopUpTeam(name)
    }
    const dynamicChangePopUp = (team) => {
        if (team?.id == popUpTeam?.id) return;

        if(isPopUpOpen == false) {
            changePopUpTeamName(team)
            setIsPopUpOpen(true)
        } else {
            setIsPopUpOpen(false);
            setTimeout(setIsPopUpOpen, 300, true);
            setTimeout(changePopUpTeamName, 300, team);
        }
    }


    const plugCallback = () => {
        setIsPopUpOpen(!updatePlug)
        getData().catch(e => console.log(e));
    }

    return (
       <AppContext.Provider value={appContext}>
           <Router>
               <div className="App">
                   <Switch>
                       <Route path={'/user'}>
                           <MobileNavigation/>
                           <PopUpInfoBar popUpCallback={closePopUp} stages={stages_API} races={races_API}
                                         team={popUpTeam} isOpen={isPopUpOpen} teams={teams_API}/>
                           <Switch>
                               <Route path="/user/relay">
                                   <Relay races={races_API} stages={stages_API}
                                          teams={teams_API} popUpCallback={dynamicChangePopUp}/>
                               </Route>
                               <Route path="/user/teams">
                                   {
                                       /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                                           ? <TeamList races={races_API}/>
                                           : <Redirect to={'/user/relay'}/>
                                   }

                               </Route>
                               <Route path={'/user/team/:id'}>
                                   <TeamDescription teams={teams_API} stages={stages_API} races={races_API}/>
                               </Route>
                               <Route path={'/user/login'}>
                                   <Auth/>
                               </Route>
                           </Switch>
                       </Route>

                       <Route path={'/admin'}>
                           <Switch>
                               <Route path={'/admin/:token'}>
                                   <Moderator plugCallback={plugCallback} stages={stages_API}  teams={teams_API} races={races_API}/>
                               </Route>
                           </Switch>
                       </Route>
                       <Route path={'/'}>
                           <Redirect to={'/user/relay'}/>
                       </Route>
                   </Switch>
               </div>
           </Router>
       </AppContext.Provider>
    );
};

export default App;
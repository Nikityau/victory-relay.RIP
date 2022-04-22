import React from 'react';

import Header from "./Header/Header";
import RelayDescription from "./RelayDescription/RelayDescription";
import RelayInfo from "./RelayInfo/RelayInfo";

const Relay = ({stages, popUpCallback, races,teams}) => {

    return (
        <div>
            <Header races={races} teams={teams}/>
            <RelayDescription/>
            <RelayInfo  teams={teams} races={races} stages={stages} popUpCallback={popUpCallback}/>
        </div>
    );
};

export default Relay;
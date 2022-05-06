import React, {useState} from 'react';

//images
import image from '../../../assets/image/victory-relay.png'

//styles
import classes from './RelayDescription.module.css'

const RelayDescription = () => {

    return (
        <div className={['container', classes.relayDescriptionContainer].join(' ')}>
            <div className={classes.imageContainer}>
                <img src={image} alt="img" onDragStart={(e) => e.preventDefault()}/>
            </div>
        </div>
    );
};

export default RelayDescription;
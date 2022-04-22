import React, {useState} from 'react';

//images
import image from '../../../assets/image/home.png'

//styles
import classes from './RelayDescription.module.css'

const RelayDescription = () => {

    const [titleDescription, setTitleDescription] = useState("«Эстафета Победы»")
    const [description, setDescription] = useState([])

    return (
        <div className={['container', classes.relayDescriptionContainer].join(' ')}>
            <div className={classes.imageContainer}>
                <img src={image} alt="img" onDragStart={(e) => e.preventDefault()}/>
            </div>
            <div className={classes.descriptionContainer}>
                <div className={classes.descTitle}>
                    <h2>{titleDescription}</h2>
                </div>
                <div className={classes.descText}>
                    {
                        description.map((item,index) =>
                            <p key={index}>{item.text}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default RelayDescription;
import React, {useState} from 'react';

//images
import image from '../../../assets/image/home.png'

//styles
import classes from './RelayDescription.module.css'

const RelayDescription = () => {

    const [titleDescription, setTitleDescription] = useState("Задачами игры «Эстафета Победы»")
    const [description, setDescription] = useState([
        { text: "воспитание у молодого поколения чувства патриотизма, гражданского долга, любви к Родине и своему народу;" },
        { text: `сохранение и развитие у молодежи исторической памяти, уважения к историческим ценностям, национальным традициям и культуре государства;
                    создание для молодежи пространства творческого общения и обмена опытом, ознакомление с лучшими образцами национальной культуры;
                    повышение уровня интеллектуальной, физической, морально-волевой и психологической подготовки молодежи.` },
        { text: ` Игра «Эстафета Победы-2022» – это спортивная игровая программа, включающая
                    в себя задания (8 Этапов) из сфер военно-прикладных действий, спорта, военной истории, а также историко-культурный компонент – выставки.` },
        { text: `Этапы соревнований: «Старт», «Снайперская», «Велогонка», «Полоса препятствий», «Автомат», «Медсанбат», «Военно-исторический», «Финиш» проходят на территории кампуса РГУПС. Торжественное награждение участников «Эстафеты Победы» состоится на стадионе университета.` },
    ])

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
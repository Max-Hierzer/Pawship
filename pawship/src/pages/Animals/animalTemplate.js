import React from 'react';
// import './animalTemplate.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AnimalTemplate(data) {
    const linkToImages = process.env.PUBLIC_URL + '/images/' + data.name + '/';
    return (
        <div className="animalTemplate">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                {data.images.map((i) => {
                    const picLink = linkToImages + i;
                    return (
                        <div>
                            <img src={picLink} alt={i} />
                        </div>
                    );
                })

                }
            </Carousel>
            <h1>{data.name}</h1>
            <h2>Steckbrief</h2>
            <h3>Alter: {data.age}</h3>
            <h3>Geschlecht: {data.gender}</h3>

            <h3>Natur:</h3>
            <ul>
            {data.nature.map((nat)=>(
                <li key = {data.name}>{nat}</li>
            ))}
            </ul>

        </div>
    )
}

export default AnimalTemplate;

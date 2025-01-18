import React from 'react';
// import './animalTemplate.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './animalTemplate.css';

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
            <div id='steckbrief'>
                <h1>{data.name}</h1>
                <h2>Steckbrief</h2>
                <div className="info">
                    <h3>
                        <span className="label">Alter:</span> <span className="value">{data.age}</span>
                    </h3>
                    <h3>
                        <span className="label">Geschlecht:</span> <span className="value">{data.gender}</span>
                    </h3>
                </div>

                <h3><span className='label'>Natur:</span></h3>
                <ul>
                    {data.nature.map((nat) => (
                        <li key={data.name}>{nat}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AnimalTemplate;

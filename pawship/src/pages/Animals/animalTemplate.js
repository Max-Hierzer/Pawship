import React from 'react';
// import './animalTemplate.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AnimalTemplate(data) {
    const linkToImages = '../../../../images/Tierbilder/' + data.name + '/'; //Tiername mit string ergänzen images folder soll gleich heißen wie tiername!!
    console.log(data.name);
    console.log(data.age);
    console.log(linkToImages);
    const displayImages = (images) => {
        images.forEach((i) => {
            const picLink = linkToImages + i
            return (
                <div>
                <img src={picLink} />
                </div>
            )
        })
    }
    return (
        <div className="animalTemplate">
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            {displayImages(data.images)}
            </Carousel>
        </div>
    )
}

export default AnimalTemplate;

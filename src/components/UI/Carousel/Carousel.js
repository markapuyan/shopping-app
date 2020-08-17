import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const MainCarousel = () => {
    return (
        <Carousel plugins={[
            'infinite',
            {
            resolve: autoplayPlugin,
            options: {
                interval: 2000,
            }
            },
        ]}
        animationSpeed={1000}
        >
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        <img src="https://via.placeholder.com/150" />
        </Carousel>
    );
};

export default MainCarousel;
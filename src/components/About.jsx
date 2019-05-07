import React from 'react';
import { about } from '../data/about';
import {Fade} from 'react-reveal';
import LazyLoad from 'react-lazyload';

const About = () => {
    return (
        <div className="wrapper">
            <div className="about">
                {about.map((item, i) => {
                    const {year, url, title, text} = item;
                    return (
                        <Fade>
                            <div className="about__item" key={i}>
                                <div className="about__year">{year}</div>                                
                                <img src={url} alt="about the band" className="about__img"/>                                
                                <div className="about__title">{title}</div>
                                <div className="about__text">{text}</div>
                            </div>
                        </Fade>
                    )
                })}
            </div>            
        </div>
    );
};

export default About;
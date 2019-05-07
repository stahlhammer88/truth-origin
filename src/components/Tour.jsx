import React from 'react';
import { tour } from '../data/tour';
import Button from './ui/Button';
import { Flip } from 'react-reveal';

const Tour = () => {
    return (
        <div className="wrapper">
            <div className="tour">
                {tour.map((tourItem, i) => {   
                    const {day, month, location} = tourItem;
                    return (
                        <Flip delay={i*80} right key={i}>
                            <div className="tour__item">
                                <div className="tour__date">
                                    <div className="tour__day">{day}</div>
                                    <div className="tour__month">{month}</div>
                                </div>
                                <div className="tour__details">
                                    <div className="tour__location">{location}</div>
                                    <Button text="BUY TICKETS"/>
                                </div>
                            </div>
                        </Flip>      
                    )
                })}
            </div>            
        </div>
    );
};

export default Tour;
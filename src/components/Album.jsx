import React from 'react';
import Socials from './ui/Socials';
import Fade from 'react-reveal/Fade';

const Album = ({id, title, year, coverUrl, preOrder, pricing, tracklist}) => {

    const renderTracks = () => {
        return tracklist.map((track, i) => {
            return <li key={i} className="album__track"> <i></i> <span>{track}</span></li>
        })
    }

    return (
        <Fade left delay={id*80} duration={900}>
            <div className="album">
                <div className="album__caption">
                    <h1>{title}</h1>
                    {preOrder ? null : <div className="album__year">{year}</div>}
                </div>  
                <img src={coverUrl} className="album__cover" alt="album cover"/>                                      
                
                <div className="album__info">
                    {preOrder? <div className="album__pre-order">PRE-ORDER</div> : null}
                    <div className="album__pricing">
                        <div className="album__pricing-item"><span>MP3</span> ${pricing.mp3}</div>
                        <div className="album__pricing-item"><span>CD</span> ${pricing.cd}</div>
                        <div className="album__pricing-item"><span>VINYL</span> ${pricing.vinyl}</div>
                    </div>
                    <div className="album__playlist">
                        {renderTracks()}
                    </div>
                    <div className="album__player">
                        <div className="album__trackline-container">
                            <div className="album__timing">--:--</div>
                            <div className="album__trackline"></div>
                            <div className="album__timing">--:--</div>
                        </div>
                        <div className="album__play-buttons">
                            <div className="album__prev"></div>
                            <div className="album__next"></div>
                        </div>
                    </div>
                    <Socials context="album"/>
                </div>
            </div>
        </Fade>
    );
};

export default Album;
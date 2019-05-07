import React from 'react';
import Album from '../Album';
import { albums } from '../../data/albums';
import { Fade } from 'react-reveal';

const Landing = () => {
    const silenceAlbum = albums.filter(album => album.id === 1)[0];
    return (
        <div className="landing">
            <div className="wrapper">
                <Album {...silenceAlbum}/>     
                <Fade bottom duration={800}>
                    <div className="landing__video-container">
                        <h1>NEW VIDEO \ ETERNITY</h1>                    
                        <img className="landing__video" src="/img/Player.jpg" alt="new video"/>
                    </div>
                </Fade>
            </div>            
        </div>
    );
};

export default Landing;
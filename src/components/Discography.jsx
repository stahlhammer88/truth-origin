import React from 'react';
import Album from './Album';
import { albums } from '../data/albums';

const Discography = () => {
    return (
        <div className="wrapper">
            {albums.map(album => <Album key={album.id} {...album}/>)}
        </div>
    );
};

export default Discography;
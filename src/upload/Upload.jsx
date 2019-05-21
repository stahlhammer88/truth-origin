import React, { Component } from 'react';
import './upload.scss';

class Upload extends Component {
    state = {
        isFileDropped: false,
        filesQueue: [],
        isDragStarted: false,
        dragFade: false,
        progress: 0
    }

    onDragHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();        
        this.setState({isDragStarted: true})
    }

    onDragExitHandler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({isDragStarted: false, dragFade: true}, () => {
            setTimeout(() => {this.setState({dragFade: false})}, 500)
        })
    }

    onDropHandler = e => {
        e.stopPropagation();
        e.preventDefault();
        const {filesQueue} = this.state;
        const newFileQueue = [...filesQueue, filesQueue.length];
        this.setState({
            filesQueue: newFileQueue, 
            isDragStarted: false, 
            dragFade: true}, 
            () => {
            setTimeout(() => {this.setState({dragFade: false})}, 500)
        })

        this.startUpload()
    }    

    startUpload = () => {        
        const interv = setInterval(() => {
            const {progress} = this.state;
            if (progress < 100)
                this.setState({progress: progress + 1})
            else
                clearInterval(interv);
        }, 50);
    }

    clickHandle = () => {
        this.setState({isFileDropped: false, filesQueue: []})
    }

    render() {
        const {isFileDropped, filesQueue, isDragStarted, dragFade, progress} = this.state;
        return (
            <div className="upload">
                <div className="upload__caption">
                    FILE UPLOAD
                </div>
                <div className={`upload__container ${isDragStarted ? 'upload__container--ondrag' : ''} ${dragFade ? 'upload__container--dragfade' : ''}`}
                    onDragEnter={this.onDragHandler}                    
                    onDragOver={this.onDragHandler}
                    onDragLeave={this.onDragExitHandler}
                    onDrop={this.onDropHandler}>
                    { isFileDropped || filesQueue.length ?
                        <div className="upload__files-list" onDragEnter={this.onDragHandler}>
                            {filesQueue.map((t, i) => {
                                return (
                                    <div key={i} className="upload__file-item">
                                        <div className="upload__file-icon"></div>
                                        <div className="upload__progress">
                                            <div className="upload__progress-completed" style={{width: `${progress}%`}}></div>
                                        </div>
                                        <div className="upload__cancel" onClick={this.clickHandle}></div>
                                    </div>
                                )
                            })}
                        </div> 
                        :
                        <div 
                            className="upload__initial">
                            <div className="upload__drop-here">
                                <div className="upload__drop-icon"></div>
                                <div className="upload__drop-text">DROP FILES HERE</div>
                            </div>
                            <div className="upload__delimeter">or</div>                            
                        </div>
                    }
                    <div className="upload__browse-btn">BROWSE</div>
                </div>
            </div>
        );
    }
}

export default Upload;
import React from "react";
import "./video.css";
import LakeVideo from '../../../assets/webpage-1/pexels-video.mp4';

function Video() {
    return (
        <div>
            <div className="large-img__container">
                <h1 className="video-title">Webpage 2</h1>
                <p className="video-text">
                    This webpage is an implementation of sustainable design principles.
                </p>
                <div className="video-container">
                    <video
                        src={LakeVideo}
                        controls
                        loop
                        muted
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Video;

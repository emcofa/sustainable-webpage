import React from "react";
import "./video.css";
import LakeVideo from "../../assets/pexels-video.mp4";

function Video() {
    return (
        <div>
            <div className="large-img__container">
                <h1 className="video-title">Webpage 1</h1>
                <p className="video-text">
                    This webpage is an implementation of various design
                    principles, methods, and techniques from 10 selected
                    websites with the purpose of measuring their performance and
                    energy efficiency.
                </p>
                <div className="video-container">
                    <video
                        src={LakeVideo}
                        controls
                        autoPlay
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

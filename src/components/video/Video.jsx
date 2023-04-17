import React from 'react'
import './video.css'
import LakeVideo from '../../assets/pexels-video.mp4'

function Video() {
    return (
        <div>
            <div className='large-img__container'>
                <h1 className='video-title'>Webpage 1</h1>
                <div className='video-container'>
                    <video src={LakeVideo} controls autoPlay loop muted width='100%' height='auto' />
                </div>
            </div>
        </div>
    )
}

export default Video

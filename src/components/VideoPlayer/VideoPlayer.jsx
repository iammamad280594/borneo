import React, { useRef } from 'react'
import PropTypes from 'prop-types'; // Import PropTypes

import './VideoPlayer.css'
import video from'../../assets/video.mp4'
const VideoPlayer = ({playState, setPlayState}) => {
  
  const player = useRef (null);

  const closePlayer = (e)=>{
    if (e.target === player.current){
      setPlayState(false);
    }
  }
  
  return (
    <div className={`video-player ${playState?'': 'hide' }`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

// Define prop types
VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired, // Define the type and requirement of playState
  setPlayState: PropTypes.func.isRequired // Define the type and requirement of setPlayState
}

export default VideoPlayer

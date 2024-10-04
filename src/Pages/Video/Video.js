import React from 'react'
import './video.css'
import Playvideo from '../../components/Playvideo/Playvideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

function Video() {
  const {videoID,categoryID} = useParams()
  return (
    <div className='play-container'>
      <Playvideo videoID={videoID}/>
      <Recommended categoryID={categoryID}/>
    </div>
  )
}

export default Video

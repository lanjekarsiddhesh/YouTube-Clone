import React, { useEffect, useState } from 'react'
import './playvideo.css'
import like from '../../assets/modheader-export-svg/like.svg'
import dislike from '../../assets/modheader-export-svg/dislike.svg'
import share from '../../assets/modheader-export-svg/share.svg'
import save from '../../assets/modheader-export-svg/save.svg'

import { API_KEY, ViewConvertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function Playvideo() {

  const {videoID} = useParams()

  const [apiData, SetapiData] = useState(null)
  const [channelID, SetChannelID] = useState(null)
  const [CommentData, SetCommentData] = useState([])

  const fetchVideoData = async ()=> {
    const videoAPI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`
    await fetch(videoAPI).then(response=>response.json()).then(data=>SetapiData(data.items[0]))
  }

  const fetchOtherData = async ()=>{
    const ChannelAPI = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?apiData.snippet.channelId:"UCo8bcnLyZH8tBIH9V1mLgqQ"}&key=${API_KEY}`
    await fetch(ChannelAPI).then(response=>response.json()).then(data=>SetChannelID(data.items[0]))


    const CommentAPI = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoID}&key=${API_KEY}`
    await fetch(CommentAPI).then(response=>response.json()).then(Commentdata=>SetCommentData(Commentdata.items))
  }

  useEffect(()=>{
    fetchVideoData(); // eslint-disable-next-line
  },[videoID])

  useEffect(()=>{
    fetchOtherData(); // eslint-disable-next-line
  },[apiData])


  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} title={videoID} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title not available"}</h3>
      <div className="play-video-info">
        <p>{apiData?ViewConvertor(apiData.statistics.viewCount):0} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"No Date available"}</p>
        <div>
          <span><img className='video-play-icon' src={like} alt="" />{apiData?ViewConvertor(apiData.statistics.likeCount):0}</span>
          <span><img className='video-play-icon' src={dislike} alt="" /></span>
          <span><img className='video-play-icon' src={share} alt="" />Share</span>
          <span><img className='video-play-icon' src={save} alt="" />Save</span>
        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={channelID?channelID.snippet.thumbnails.medium.url:""} alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:"Unknown"}</p>
          <span>
          {channelID?ViewConvertor(channelID.statistics.subscriberCount):0} Subscribers
          </span>
          
        </div>
        <button>Subscribed</button>
      </div>
      <div className="video-discription">
        <p>{apiData?apiData.snippet.description.slice(0,300):"Description not available"}</p>
        <hr/>
        <h4>{apiData?ViewConvertor(apiData.statistics.commentCount):0} Comments</h4>

        {CommentData.map((item,index)=>{
          return(
            <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>{ViewConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
              </div>
           </div>
          )
        })}

        
        
        
      </div>
    </div>
  )
}

export default Playvideo

import React, { useEffect, useState } from 'react'
import './recommended.css'
import thumbnail1 from '../../assets/modheader-export-svg/thumbnail1.png'
import thumbnail2 from '../../assets/modheader-export-svg/thumbnail2.png'
import thumbnail3 from '../../assets/modheader-export-svg/thumbnail3.png'
import thumbnail4 from '../../assets/modheader-export-svg/thumbnail4.png'
import thumbnail5 from '../../assets/modheader-export-svg/thumbnail5.png'
import thumbnail6 from '../../assets/modheader-export-svg/thumbnail6.png'
import thumbnail7 from '../../assets/modheader-export-svg/thumbnail7.png'
import thumbnail8 from '../../assets/modheader-export-svg/thumbnail8.png'

import { API_KEY, ViewConvertor } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'

function Recommended({categoryID}) {
  const [apiData, SetapiData] = useState([])

  const fetchRecommendedData = async ()=>{
    const RecommendedVideoAPI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryID}&key=${API_KEY}`
    await fetch(RecommendedVideoAPI).then(response=>response.json()).then(data=>SetapiData(data.items))
  }

  useEffect(()=>{
    fetchRecommendedData(); // eslint-disable-next-line
  },[])

  return (
    <div className='recommended'>
      {apiData.map((data,index)=>{
        return (
          <Link key={index} to={`/video/${data.snippet.categoryId}/${data.id}`} className="side-video-list">
            <img src={data.snippet.thumbnails.standard.url} alt="" />
            <div className="video-info">
                <h4>{data.snippet.title}</h4>
                <p>{data.snippet.channelTitle}</p>
                <p>{ViewConvertor(data.statistics.viewCount)} views</p>
            </div>
          </Link>
        )
      })}

     
      
    </div>
  )
}

export default Recommended

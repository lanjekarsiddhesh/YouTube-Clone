import React, { useContext, useEffect, useState } from 'react'
import './feed.css'
import moment from 'moment';

import { API_KEY, ViewConvertor } from '../../data'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../Context/context';

function Feed(props) {


  const [data, setData] = useState([])

  // const {searchbar} = useContext(NavbarContext)

  // const fetchFilterData = async()=>{
  //   const video_url= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=love&key=${API_KEY}`
  //   await fetch(video_url).then(response=>response.json()).then(data=>setData(data.items))
  // }


  const fetchData = async()=>{
    const video_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${props.category}&key=${API_KEY}`
    await fetch(video_url).then(response=>response.json()).then(data=>setData(data.items))
  }

  useEffect(()=>{
    fetchData(); // eslint-disable-next-line
  },[props.category])

  // useEffect(()=>{
  //   fetchFilterData(); // eslint-disable-next-line
  // },[])


  return (
    <div className="feed">
      {data.map((item,index)=>{
        return(
          <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
            <img src={item.snippet.thumbnails.standard.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{ViewConvertor(item.statistics.viewCount)} view &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
      
      
    </div>
    
  )
}

export default Feed

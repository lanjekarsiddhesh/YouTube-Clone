import React from 'react'
import './sidebar.css'
import home_icon from '../../assets/modheader-export-svg/home.svg'
import shorts_icon from '../../assets/modheader-export-svg/short.svg'
import subscriptions_icon from '../../assets/modheader-export-svg/subscriptions.svg'
import you_icon from '../../assets/modheader-export-svg/you.svg'
import history_icon from '../../assets/modheader-export-svg/history (2).svg'
import Like_icon from '../../assets/modheader-export-svg/like.svg'
import trending_icon from '../../assets/modheader-export-svg/trending.svg'
import music_icon from '../../assets/modheader-export-svg/music.svg'
import movies_icon from '../../assets/modheader-export-svg/movies.svg'
import live_icon from '../../assets/modheader-export-svg/live.svg'
import gaming_icon from '../../assets/modheader-export-svg/gaming.svg'
import news_icon from '../../assets/modheader-export-svg/news.svg'
import sports_icon from '../../assets/modheader-export-svg/sports.svg'
import course_icon from '../../assets/modheader-export-svg/courses.svg'
import fashion_icon from '../../assets/modheader-export-svg/fashion.svg'
import podcast_icon from '../../assets/modheader-export-svg/podcast.svg'


function Sidbar(props) {
  return (
    <div className={`sidebar ${props.sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className={`side-links ${props.category===0?"active":""}`} onClick={()=>props.setCategory(0)}>
                <img src={home_icon} alt="" /><p>Home</p>
            </div>
            {/* <div className={`side-links ${props.category===42?"active":""}`} onClick={()=>props.setCategory(42)} >
                <img src={shorts_icon} alt="" /><p>Shorts</p>
            </div> */}
            
            <div className="side-links">
                <img src={you_icon} alt="" /><p>You</p>
            </div>
            <div className="side-links">
                <img src={history_icon} alt="" /><p>History</p>
            </div>
            <div className="side-links">
                <img src={Like_icon} alt="" /><p>Like</p>
            </div>

        </div>
<hr/>
        <div className="subscription">
            <h3>Subscription</h3>
        <div className="side-links">
                <img src={subscriptions_icon} alt="" /><p>Subscriptions</p>
            </div>
        </div>
<hr/>
        <div className='Explore'>
            <h3>Explore</h3>
            <div className={`side-links ${props.category===24?"active":""}`} onClick={()=>props.setCategory(24)}>
                <img src={trending_icon} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-links ${props.category===10?"active":""}`} onClick={()=>props.setCategory(10)}>
                <img src={music_icon} alt="" /><p>Music</p>
            </div>
            {/* <div className={`side-links ${props.category===30?"active":""}`} onClick={()=>props.setCategory(30)}>
                <img src={movies_icon} alt="" /><p>Movies</p>
            </div> */}
            <div className={`side-links ${props.category===20?"active":""}`} onClick={()=>props.setCategory(20)}>
                <img src={gaming_icon} alt="" /><p>Gaming</p>
            </div>
            <div className={`side-links ${props.category===28?"active":""}`} onClick={()=>props.setCategory(28)}>
                <img src={live_icon} alt="" /><p>Science & Tech</p>
            </div>
            <div className={`side-links ${props.category===25?"active":""}`} onClick={()=>props.setCategory(25)}>
                <img src={news_icon} alt="" /><p>News</p>
            </div>
            <div className={`side-links ${props.category===17?"active":""}`} onClick={()=>props.setCategory(17)}>
                <img src={sports_icon} alt="" /><p>Sports</p>
            </div>
            {/* <div className={`side-links ${props.category===27?"active":""}`} onClick={()=>props.setCategory(27)}>
                <img src={course_icon} alt="" /><p>Education</p>
            </div> */}
            <div className={`side-links ${props.category===26?"active":""}`} onClick={()=>props.setCategory(26)}>
                <img src={fashion_icon} alt="" /><p>Fashion & Beauty</p>
            </div>
            {/* <div className={`side-links ${props.category===31?"active":""}`} onClick={()=>props.setCategory(31)}>
                <img src={podcast_icon} alt="" /><p>Anime/Animation</p>
            </div> */}
        </div>
        <hr/>
    
      
    </div>
  )
}

export default Sidbar

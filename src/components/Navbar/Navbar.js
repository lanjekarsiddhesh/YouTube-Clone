import React, { useContext} from 'react'
import './navbar.css'
import logo from '../../assets/modheader-export-svg/logo.svg'
import serach_icon from '../../assets/modheader-export-svg/search icon.svg'
import notification_icon from '../../assets/modheader-export-svg/notification.svg'
import profile_icon from '../../assets/modheader-export-svg/profile.svg'
import menu_icon from '../../assets/modheader-export-svg/half humberg.svg'
import upload_icon from '../../assets/modheader-export-svg/upload.svg'
import { Link } from 'react-router-dom'
import { NavbarContext } from '../../Context/context'

function Navbar({SetSidebar}) {

  const { searchbar,setsearchbar } = useContext(NavbarContext)

  const searchFeed = (event)=>{
    setsearchbar(event.target.value)
  }

 

  return (
    <nav className='flex-div'>
      <Link to="/" className='nav-left flex-div'>
      <img className='menu_icon' onClick={()=>SetSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
        <img className='logo' src={logo} alt="" />
      </Link>

      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
        <input type="text" value={searchbar} onChange={searchFeed} placeholder='Search' />
        <img className='serach_icon' src={serach_icon} alt="" />
        </div>
        
      </div>

      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
        
        <img src="" alt="" />
      </div>
    </nav>
  )
}

export default Navbar



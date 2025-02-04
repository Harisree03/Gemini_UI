import React, { useState } from 'react'
import './Sidebar.css'

import { Link } from 'react-router-dom'

import {assets} from '../../assets/assets'
const Sidebar = () => {

    const [extended,setExtended] = useState(false)
  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended
            ?
            <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>What is React...</p>
            </div>
        </div>
        :null
        }
           
      </div>
      <div className="bottom">
       <div className="bottom-item-recent-entry">
        <img src={assets.question_icon} alt="" />
        {extended? <ul>
          <Link to="/Help">Help</Link>
        </ul>:null}
        
       </div>
       <div className="bottom-item-recent-entry">
        <img src={assets.history_icon} alt="" />
        {extended? <ul>
          <Link to="/Activity">Activity</Link>
        </ul> :null}
       </div>
       <div className="bottom-item-recent-entry">
        <img src={assets.setting_icon} alt="" />
        {extended? <ul>
                <Link to="/Settings">Settings</Link>
                </ul>:null}
                
       </div>
      </div>
    </div>
  )
}

export default Sidebar

import React, { useContext } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Sidebar = ({ sidebar, setSidebar }) => {

  const {onLoad, onSent, previousPrompt, setPreviousPrompts } = useContext(Context)
  return (
    <div className={`sidebar ${sidebar ? "" : "compressed-bar"}`}>
      <div className='top'>
        <img src={assets.menu_icon} alt="" className='icon menu-button' onClick={() => setSidebar(!sidebar)} />
        <div className='new-chat'>
          <img src={assets.plus_icon} alt="" className='icon-plus' />
          <p>New Chat</p>
        </div>
        <div className='recent'>
          <p className='recent-title'>Recent</p>
          <div className='entry-box'>
            {previousPrompt.map((item, index) => {
              return (
                <div className='recent-entries' onClick={()=>}>
                  <img src={assets.message_icon} alt="" className='icon prompt-icon' />
                  <p className='entry'>{item.slice(0,18)} ..</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='recent-entries'>
          <img src={assets.question_icon} alt="" className='icon' />
          <p>Help</p>
        </div>
        <div className='recent-entries'>
          <img src={assets.history_icon} alt="" className='icon' />
          <p>Activities</p>
        </div>
        <div className='recent-entries'>
          <img src={assets.setting_icon} alt="" className='icon' />
          <p>Settings</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

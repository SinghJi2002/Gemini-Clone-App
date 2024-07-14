import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

const Main = ({ sidebar, setSidebar }) => {

    const { onSent, input, setInput, recentPrompt, setRecentPrompt, previousPrompt, setPreviousPrompts, showResult, setShowResult, loading, setLoading, resultData, setResultData } = useContext(Context)
    return (
        <div className='main'>
            <div className='navbar'>
                <div className='app-icon'>
                    <img src={assets.gemini_icon} alt="" className='gemini-pic' />
                    <p>Gemini</p>
                </div>
                <img src={assets.user_icon} alt="" className='profile-pic' />
            </div>
            {!showResult ?
                <>
                    <div className='greet'>
                        <p><span>Hello, Developer</span></p>
                        <p>How can I help you today?</p>
                    </div>
                    <div className={`suggest-blocks ${sidebar ? "" : "min-suggest-blocks"}`}>
                        <div className='block'>
                            <p className='block-title'>Write a thank you note to my colleague</p>
                            <img src={assets.compass_icon} alt="" className='block-pic' />
                        </div>
                        <div className='block'>
                            <p className='block-title'>Write a code to find palindrome string</p>
                            <img src={assets.code_icon} alt="" className='block-pic' />
                        </div>
                        <div className='block'>
                            <p className='block-title'>Suggest me a idea for raising awareness of environmental protection</p>
                            <img src={assets.bulb_icon} alt="" className='block-pic' />
                        </div>
                        <div className='block'>
                            <p className='block-title'>Create a music where 'We will rock you' is sung by SnoopDog</p>
                            <img src={assets.mic_icon} alt="" className='block-pic' />
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='result'>
                        <div className='result-title'>
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        {!loading ?
                            <>
                                <div className='result-response'>
                                    <img src={assets.gemini_icon} alt="" />
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                </div>
                            </>
                            :
                            <>
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            </>}
                    </div>
                </>
            }

            <div className={`search-bar ${sidebar ? "" : "min-search-bar"}`}>
                <input type="text" className='search' placeholder='Enter your prompt here' onChange={(e) => { setInput(e.target.value) }} value={input} />
                <img src={assets.send_icon} alt="" className='send-button' onClick={() => onSent()} />
                <img src={assets.mic_icon} alt="" className='mic-button' />
            </div>
        </div>
    )
}

export default Main

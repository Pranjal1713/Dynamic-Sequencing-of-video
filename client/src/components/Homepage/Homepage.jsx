import React from 'react'
import "./Homepage.css"
import { useNavigate } from 'react-router-dom'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const Homepage = (props) =>{

    const navigate = useNavigate()

    return(

        <>
        <div className='homepage'>
            {/* <i className='fa fa-user'></i> */}
            <h1><span>Hello</span> {props.usern}</h1>
            {/* <h1><span>Hello</span> User</h1> */}
            <div className="wrap">
                <div className='Search'>
                    <span>Search</span>
                    <i className='fa-solid fa-search'></i>
                </div>
                <div className="button" onClick={()=> navigate("/login")}>Logout</div>
                <div className="button" onClick={()=> navigate("/questions")}>Ask Questions</div>
                <div className="button" onClick={()=> navigate("/progress")}>Progress</div>
                <div className="button" onClick={()=> navigate("/history")}>History</div>
            </div>
        </div>

        <div>
            
         <VideoPlayer/>
        </div>

        </>


    )
}

export default Homepage
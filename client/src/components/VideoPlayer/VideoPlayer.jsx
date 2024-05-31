import React, { useState } from 'react'
import {DefaultPlayer as Video} from  "react-html5video"
import "react-html5video/dist/styles.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import "./VideoPlayer.css"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import video1 from "../videos/video1.mp4"
import video2 from "../videos/video2.mp4"
import video3 from "../videos/video3.mp4"
import { createRef } from 'react'
// import { modelNames } from 'mongoose';


export const data = [
    {
        id: 1,
        poster: img1,
        videoUrl: video1,
        tag: "Introduction" ,
    },
    {
        id: 2,
        poster: img2,
        videoUrl: video2,
        tag: "Variables" ,
    },
    {
        id: 3,
        poster: img2,
        videoUrl: video2,
        tag: "loop" ,
    },
    {
        id: 4,
        poster: img2,
        videoUrl: video2,
        tag: "Applications" ,
    },
    {
        id: 5,
        poster: img2,
        videoUrl: video2,
        tag: "Methods" ,
    },
    {
        id: 6,
        poster: img3,
        videoUrl: video3,
        tag: "Consants" ,
    }
]

const VideoPlayer = () => {

    const [model , setModel] = useState(false)
    const navigate = useNavigate()

    

    const handleQuiz = (id) => {
        navigate('/quiz')
    }

  return (
    <>
     <h1 style={{textAlign: 'center'}}>Video Gallery</h1> 
     <div className="gallery">
        {
            data.map((item, index) => {

                let divRef = createRef(null)
                const openModel = () => {
                    divRef.current.classList.remove('video')
                    divRef.current.classList.add('model')
                    setModel(true)
                }
                

                const closeModel = () => {
                    divRef.current.classList.add('video')
                    divRef.current.classList.remove('model')
                    setModel(false)
                }

                return(
                    <div key={index} ref={divRef} className="video">
                        {model && <button  className='model-close-btn' onClick={() => closeModel()}>X</button>}
                        <div className="video-container" onClick={() => openModel()}>
                            <Video
                                style={{width: "100%"}}
                                autoPlay={model}
                                controls={['PlayPause', 'Seek' ,'Time', 'Volume', 'Fullscreen']}
                                poster={item.poster}
                            >
                                <source src={item.videoUrl} type="video/webm"  />
                            </Video>
                        </div>
                        <div className='quiz' onClick={() => handleQuiz(index)} key={index}>
                            <h3>take quiz</h3>
                            <ArrowForwardIcon/>
                        </div>
                    </div>
                )
            })
        }
     </div>

    </>
  )
}

export default VideoPlayer
// export const data1 = data
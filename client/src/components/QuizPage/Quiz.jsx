import React, { useState } from 'react'
import "./Quiz.css"
import {useDispatch, useSelector} from "react-redux"
import { data } from '../VideoPlayer/VideoPlayer'
import { setVideo } from '../../redux/slice/VideoSlice/VideoSlice'
import "../VideoPlayer/VideoPlayer.css"
import {DefaultPlayer as Video} from  "react-html5video"

const Quiz = () => {

    const [checkboxes , setCheckboxes] = useState([])
    const dispatch = useDispatch();

    const [videoData , setVideoData] = useState({
        id: 0,
        poster: '',
        videoUrl: '',
        tag: '',
    })
    // const [video1 , setVideo1] = useState(false)
    const selector = useSelector(state => state.videos.video)
    console.log(selector)

    // const video1 = useSelector(state => state.videos)

    const handleChange = (value) => {
        // setVideo1(value)
        if (!checkboxes.includes(value)) {
          setCheckboxes([...checkboxes, value]);
          checkboxes.forEach((num) => {
            const vari = num
            const obj = data.filter((val) => {
                return val.tag === vari
            })
            dispatch(setVideo(obj))
            // console.log(obj)
            
        })

        //   dispatch(setVideo(data.tag === value ? data : [...data] ))
        } else {
          setCheckboxes(checkboxes.filter((checkbox) => checkbox!== value));
        //   checkboxes.forEach((num) => {
        //     const vari = num
        //     const obj = data.filter((val) => {
        //         return val.tag === vari
        //     })
        //   })
          
        //   dispatch(setVideo(data.tag === value ? data : [...data] ))
        }
      };



        // const myfunc = (checkboxes, data) => {
            // const obj = {}
            // checkboxes.forEach((num) => {
            //     const vari = num
            //     const obj = data.filter((val) => {
            //         return val.tag === vari
            //     })
            //     // console.log(obj)
                
            // })
            // return obj
        // }








  return (
    <div>
        <h1 className="heading" style={{textAlign: 'center'}}>Quiz</h1>
      <form>
        <div className="first">
            <h4>Q1 What is the default value of an instance variable (non-static variable) in Java if it is not initialized?</h4>
            <input type="radio" name="question1" value="1" />A) 0
            <input type="radio" name="question1" value="2" />B) Null
            <input type="radio" name="question1" value="3" />C) False
            <input type="radio" name="question1" value="4" /> D) Compilation Error
        </div>
        <br /><hr />
        <div className="second">
            <h4>Q2 Which keyword in Java is used to declare a constant variable?</h4>
            <input type="radio" name="question2" value="1" />A) final
            <input type="radio" name="question2" value="2" />B) static
            <input type="radio" name="question2" value="3" />C) const
            <input type="radio" name="question2" value="4" />D) readonly
        </div>
        <br /><hr />
        <div className="third">
            <h4>Q3 What happens if you declare a variable with the same name as an instance variable within a method or block in Java?</h4>
            <input type="radio" name="question3" value="1" /> A) It causes a compilation error.
            <br /><input type="radio" name="question3" value="2" /> B) It hides the instance variable within the scope of the method or block
            <br /><input type="radio" name="question3" value="3" />C) Sta It automatically initializes the instance variable
            <br /><input type="radio" name="question3" value="4" />D)  It makes the instance variable inaccessible
        <br /></div>
        <hr />
        <div className="fourth">
            <h4>Which videos to watch next? </h4>
            <input type="checkbox" name="question3" value='Variables' onChange={() => handleChange('Variables')} /> A) Variables in JAVA
            <br /><input type="checkbox" name="question3" value="Methods" onChange={() => handleChange('Methods')} /> B) Methods in JAVA
            <br /><input type="checkbox" name="question3" value="Applications" onChange={() => handleChange('Applications')} />C) Applications of JAVA
            <br /><input type="checkbox" name="question3" value="Loops" onChange={() => handleChange('Loops')} />D)  Loops in JAVA
        <br /></div>
        <hr />
      </form>
      <div>
        Checked checkboxes: {checkboxes.join(', ')}
      </div>


      <div>
      <div className="gallery">
        {
            data.map((item, index) => { 
                return(
                    // <div key={index} ref={divRef} className="video">
                    <div key={index} className="video">
                        {/* {model && <button  className='model-close-btn' onClick={() => closeModel()}>X</button>} */}
                        <div className="video-container">
                            <Video
                                style={{width: "100%"}}
                                autoPlay={false}
                                controls={['PlayPause', 'Seek' ,'Time', 'Volume', 'Fullscreen']}
                                poster={item.poster}
                            >
                                <source src={item.videoUrl} type="video/webm"  />
                            </Video>
                        </div>
                    </div>
                )
            })
        }
     </div>
      </div>
    </div>
  )
}

export default Quiz





import { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/register';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Quiz from './components/QuizPage/Quiz';
import Questions from './components/Questions/Questions';
import Progress from './components/Progress/Progress';
import History from './components/History/History';


function App() {

  const [user , setLoginUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user && user._id ? <Homepage usern={user.name}/> : <Login setLoginUser={setLoginUser}/>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/questions" element={<Questions />} />
          <Route exact path="/progress" element={<Progress />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

































// import "./App.css"
// // import Header from "./components/common/header/Header"
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// // import About from "./components/about/About"
// // import CourseHome from "./components/allcourses/CourseHome"
// // import Team from "./components/team/Team"
// // import Pricing from "./components/pricing/Pricing"
// // import Blog from "./components/blog/Blog"
// // import Contact from "./components/contact/Contact"
// // import Footer from "./components/common/footer/Footer"
// // import Home from "./components/home/Home"
// function App() {
//   return (
//     <>
//       {/* <Router>
//         <Header />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/courses' element={<CourseHome />} />
//           <Route path='/team' element={<Team />} />
//           <Route path='/pricing' element={<Pricing />} />
//           <Route path='/journal' element={<Blog />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router> */}

//       <div>
//         <h1>Login Page</h1>
//       </div>





//     </>
//   )
// }

// export default App



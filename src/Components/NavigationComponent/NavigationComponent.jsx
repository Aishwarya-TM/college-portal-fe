import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeComponent from '../../Routes/HomeComponent/HomeComponent'
import DepartmentComponent from '../../Routes/DepartmentComponent/DepartmentComponent'
import AboutComponent from '../../Routes/AboutComponent/AboutComponent'
import EventComponent from '../../Routes/EventComponent/EventComponent'
import './NavigationComponent.css'
const NavigationComponent = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <header>
          <nav className='navigation-panel'>
            <ul id='link-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/department">Departments</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </nav>
        </header>
        <footer>
          <p>© 2024 Saveetha Engineering College. All rights reserved.</p>
        </footer>
        <Routes>
          <Route exact path='/' element={<HomeComponent />}></Route>
          <Route exact path='/department' element={<DepartmentComponent />}></Route>
          <Route exact path='/about' element={<AboutComponent />}></Route>
          <Route exact path='/events' element={<EventComponent />}></Route>
        </Routes>
      </BrowserRouter>

    </React.Fragment>

  )
}

export default NavigationComponent
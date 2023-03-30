import React from 'react';
import Contact from './component/contact/contact';
import Home from './component/home/home'
import About from './component/about/about';
import Project from './component/project/project';
import { Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Carousel from './component/file/app/carousel'
import Team from './component/team/team';
// import Test from './component/team/test'
import Topscroll from './component/top/topscroll';
// import Footer from './component/footer/footer'

function App(params) {
  return (
    <>
      <Navbar />
      <Topscroll />
      {/* <Project />
      <Carousel />
      <Home /> */}
      <div className='header'>
        <Route exact path='/'>
          <Home />
          <About />
          <Project />
          <Carousel />
          <Team />
          {/* <Test /> */}
        </Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/carousel' component={Carousel} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/contact' component={Contact} />
        {/* <Footer /> */}
      </div>

    </>
  );
}
export default App;


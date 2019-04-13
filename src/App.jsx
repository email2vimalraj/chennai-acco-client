import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/css/font-awesome.min.css'
import './assets/css/font-awesome-animation.min.css'
import './App.css'
import './assets/css/responsive.css'
import './assets/css/color-skin/default.css'

import Home2 from './pages/Home/Home2'
import PropertyList from './pages/Property/PropertyList'
import PropertyItem from './pages/Property/PropertyItem'
import AddProperty from './pages/Property/AddProperty'
import AddPhoto from './pages/Property/AddPhoto'
import Header2 from './components/Header/Header2'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import Signup from './pages/Login/Signup'

const App = () => (
  <Router>
    <div>
      <Header2 />
      <Route exact path="/" component={AddProperty} />
      <Route exact path="/propertylist" component={PropertyList} />
      <Route path="/property/:id" component={PropertyItem} />
      <Route path="/addproperty" component={AddProperty} />
      <Route path="/addphoto/:propertyId" component={AddPhoto} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Footer />
    </div>
  </Router>
)

export default App

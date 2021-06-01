import React,{Suspense} from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import Explore from './Components/Explore'

const Steel = React.lazy(() => import('./Components/Steel'))
const Aerospace = React.lazy(() => import('./Components/Aerospace'))
const Network = React.lazy(() => import('./Components/Network'))
const Infrastructure = React.lazy(() => import('./Components/Infrastructure'))
const Aviation = React.lazy(() => import('./Components/Aviation'))
const Skilling = React.lazy(() => import('./Components/Skilling'))
const Media = React.lazy(() => import('./Components/Media'))
const Events = React.lazy(() => import('./Components/Events'))
const Affiliates = React.lazy(() => import('./Components/Affiliates'))
const Extra = React.lazy(() => import('./Components/Extra'))
const About = React.lazy(() => import('./Components/About'))
const Terms = React.lazy(() => import('./Components/Terms'))

export default function App() {
  return (
    <div className="App">
        <Suspense fallback={<p className="center">loading...</p>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/explore' component={Explore} />
            <Route path='/steel'><Steel /></Route>
            <Route path='/aerospace' component={Aerospace} />
            <Route path='/network' component={Network} />
            <Route path='/infrastructure' component={Infrastructure} />
            <Route path='/aviation' component={Aviation} />
            <Route path='/skilling' component={Skilling} />
            <Route path='/media' component={Media} />
            <Route path='/events' component={Events} />
            <Route path='/affiliates' component={Affiliates} />
            <Route path='/extra' component={Extra} />
            <Route path='/aboutus' component={About} />
            <Route path='/terms' component={Terms} />
          </Switch>
        </Suspense>
    </div>
  )
}
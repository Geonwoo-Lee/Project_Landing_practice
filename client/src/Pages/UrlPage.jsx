import React from 'react'
import Header from '../components/Common/Header/Header'
import UrlOverview from '../Pages/urlCategoriesPage/UrlOverview'
import Games from '../Pages/urlCategoriesPage/Games'
import Works from '../Pages/urlCategoriesPage/Works'
import Music from '../Pages/urlCategoriesPage/Music'
import Private from '../Pages/urlCategoriesPage/Private'
import Etc from '../Pages/urlCategoriesPage/Etc'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../components/urlNavComponent/Navbar'
import Shopping from './urlCategoriesPage/Shopping'
import './UrlPage.css'

function UrlPage() {
    return (
        <div>
            <Header />
            <Router>
      <Navbar/>
      <div className = "switch">
      <Switch >
        <Route path='/UrlPage' exact component={UrlOverview} />
        <Route path='/UrlPage/games' exact component={Games} />
        <Route path='/UrlPage/shopping' exact component={Shopping} />
        <Route path='/UrlPage/works' exact component={Works} />
        <Route path='/UrlPage/music' exact component={Music} />
        <Route path='/UrlPage/etc' exact component={Etc} />
        <Route path='/UrlPage/private' exact component={Private} />
      </Switch>
      </div>
    </Router>
        </div>
    )
}

export default UrlPage

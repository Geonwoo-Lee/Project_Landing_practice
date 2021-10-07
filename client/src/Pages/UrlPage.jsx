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

function UrlPage() {
    return (
        <div>
            <Header />
            <Router>
      <Navbar/>
      <Switch>
        {/* 각 컴포넌트 들은 urlCategoriesPage 폴더에서 보실 수 있으십니다 ! Etc.js 파일에 주석 달아놨으니 Etc.js 파일로 제일 먼저 오시면 됩니다 !*/}
        {/* UrlService를 눌렀을때 기본 Path가 /UrlPage이고 기본 컴포넌트는 UrlOverView 입니다 ! Url 전체보기 하는 폴더 입니다 ! 일단 임의로 전부 다 같은 컴포넌트만 넣어 놨습니다 ! */}
        <Route path='/UrlPage' exact component={UrlOverview} />
        <Route path='/UrlPage/games' exact component={Games} />
        <Route path='/UrlPage/shopping' exact component={Shopping} />
        <Route path='/UrlPage/works' exact component={Works} />
        <Route path='/UrlPage/music' exact component={Music} />
        <Route path='/UrlPage/etc' exact component={Etc} />
        <Route path='/UrlPage/private' exact component={Private} />
      </Switch>
    </Router>
        </div>
    )
}

export default UrlPage

import React from 'react'
import { Cards } from '../../components/UrlComponents/Cards'
import PlusButton from '../../components/UrlComponents/PlusButton'
import { UrlComponentWrap } from '../../components/utill/Styled'


function Private() {
    return (
        <UrlComponentWrap>
            <PlusButton/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
     </UrlComponentWrap>   
    )
}

export default Private
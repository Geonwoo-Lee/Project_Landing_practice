import React from 'react'
import { Cards } from '../../components/UrlComponents/Cards'
import PlusButton from '../../components/UrlComponents/PlusButton'
import { UrlComponentWrap } from '../../components/utill/Styled'


function Games() {
    return (
        <UrlComponentWrap>
            <PlusButton/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
     </UrlComponentWrap>   
    )
}

export default Games
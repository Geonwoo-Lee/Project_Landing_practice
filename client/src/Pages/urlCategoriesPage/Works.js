import React from 'react'
import { Cards } from '../../components/UrlComponents/Cards'
import PlusButton from '../../components/UrlComponents/PlusButton'
import { UrlComponentWrap } from '../../components/utill/Styled'


export default function Works() {
    return (
        <UrlComponentWrap>
        <PlusButton/>
        <Cards/>
        </UrlComponentWrap>   
    )
}
import React from 'react'
import { Cards } from '../../components/UrlComponents/Cards'
import { UrlComponentWrap } from '../../components/utill/Styled'
import './shrt.css'



function Etc() {
    return (
    <UrlComponentWrap>
        {/* 여기 div에 들어가는 애들이 url 페이지의 메인 컴포넌트가 되서 components 폴더에서 개발해서 컴포넌트를 가져오는 식으로 개발하면 될 것 같아요 ! Search 와 PlusButton 컴포넌트는 components 폴더에서 불러온겁니다 거기서 확인하시면 돼요 !  */}
        {/* 그리고 밑에 Search는 Material ui 사용 안해도 구현이 가능한지를 확인하기위해 넣어 놓은거라 나중에 Url 추가 Modal에 넣을때 사용하면 됩니다 ! 시각적으로 보기위해 일단 컴포넌트로 넣어 놓은 것이고 PlusButton은 Url추가 버튼을 구현한건데 Notion에서 영감을 받긴 했지만 밋밋해보이면 언제든지 바꿀 수 있으니 말씀 해주세요 ㅎㅎ */}
     
        <Cards/>
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

export default Etc
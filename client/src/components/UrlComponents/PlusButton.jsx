import React from 'react'
import styled from 'styled-components'


const UrlPlusButton = styled.button`
padding: 70px;
margin-left: 20%;
opacity: 40%;
margin-top: 10%;
background-color: #fff;
border-radius: 10px;
cursor: pointer;
border-width: 1px;
&:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
}
`
function PlusButton() {
    return (
        <div>
            {/* 여기는 URL 추가 버튼입니다 Etc.js에서 설명 적어놓은대로 입니다 언제든지 변경 가능 합니다 ! */}
            <UrlPlusButton>
                + Url 추가하기
            </UrlPlusButton>
        </div>
    )
}

export default PlusButton

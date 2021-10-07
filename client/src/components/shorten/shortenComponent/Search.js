import React, { useState } from 'react'
import styled from 'styled-components'
import shrtcode from '../api/shrtcode'
import './Search.css'


const TextArea = styled.textarea`
margin-bottom: 20px;
margin-left: 40%;
margin-right: 40%;
`

const SubmitButton = styled.button`
padding: 20px;
opacity: 50%;
margin-bottom: 20px;
color: #1E3BA8;
margin-left: 40%;
margin-right: 40%;
`

const SearchWrapper = styled.div`
margin-top: 20%;
.shortLink_wrap{
    margin-left: 40%;
    margin-right: 40%;
}
`

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

const Search = () => {
    const [link, setLink] = useState('')
    const [short, setShort] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REGEX)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateURL(link)){
            getLink();
            setLink('')
            setIsLoading(!isLoading)
        }else {
            setShort('잘못된 URL 입니다. 다시 입력해 주세요 ! ')
        }
    }

    const getLink = async () => {
        await shrtcode
        .get(`shorten?url=${link}`)
        .then((response) => {
            console.log(response.data.result.short_link)
            setShort(response.data.result.short_link)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <SearchWrapper>
            {/* 여기 밑에 주석이 되어있는건 Meterial ui 썻던거라 신경 안쓰셔도 되고 그 밑에 스타일 컴포넌트로 조잡하게라도 만들어 기능 구현이 되는지를 확인해 보았습니다 ! 기능 구현은 잘 작동 됩니다 ! */}
      
            <form onSubmit = {(e) => handleSubmit(e)}  style = {{display: 'flex', flexDirection: 'column'}}>
                {/* <TextField
                style = {{marginBottom: '20px'}}
                label="Url 줄이기"
                variant="outlined"
                value={link}
                onChange= {(e) => {setLink(e.target.value)}}
                /> */}
                <TextArea value={link}  onChange= {(e) => {setLink(e.target.value)}}>
                    원하는 URL을 넣어 보세요 ! 
                </TextArea>
                
            {!isLoading && (
            //      <Button onClick = {(e) => handleSubmit(e)} variant = "contained" 
            //      style= {{marginBottom: '20px'}}
            //      color="primary"
            //      >
            //      Submit
            //  </Button>
            <SubmitButton onClick = {(e) => handleSubmit(e)}>
                submit
            </SubmitButton>
            )}

            {isLoading && '로딩중'}
            </form>
            {short && (
                <div className = 'shortLink_wrap'>
                <div className = 'shortLink'> 줄여진 링크: {short} </div> 
                </div>
            )}
        </SearchWrapper>
    )
}

export default Search
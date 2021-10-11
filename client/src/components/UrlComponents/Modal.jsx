import { useState, useEffect } from 'react';
import React from 'react';
import * as BsIcons from 'react-icons/bs'
import shrtcode from '../shorten/api/shrtcode'
import logo from '../Common/img/logo.png'
import {ShortWrapper, TextArea, TextInputArea, TextAreaWrap, ButtonWrap,  CancleButton, SubmitButton, ModalBackdrop, ModalContainer, ModalView, Select} from '../utill/Styled'
import { isEmpty } from '../utill/IsEmpty'

// 건우 + 버튼 + 동우 + 모달

const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

const selectList = ["카테고리를 설정해 주세요","All", "games", "shopping", "works", "music", "etc", "private"]

export const Modal = ({isOpen, setIsOpen, openModalHandler}) => {

  const submitHandler = () => {
    if(isEmpty(isTitle) === true){
     alert('제목을 입력해 주세요 !')
    }
    if (validateURL(short) === false){
     alert('유효한 Url이 아닙니다 !')
    }
    if (isEmpty(isDes) === true){
        alert('내용을 입력해 주세요 !')
    }
    if(validateURL(short) === true){
      setIsOpen(!isOpen)
    }
  }
  const [link, setLink] = useState('')
  const [short, setShort] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isTitle, setIsTitle] = useState('')
  const [isDes, setIsDes] = useState('')
  const [isSelected, setIsSelected] = useState("")

  const handleSelect = (e) => {
    setIsSelected(e.target.value);
  };

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
    useEffect((e) =>{
        getLink()
        })

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
    <div>
      <ModalContainer>
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <BsIcons.BsArrowLeft onClick={openModalHandler} className='cancle-arrow'/>
            <img src = {logo} alt = "logo"/>
            <TextAreaWrap>
            <form onChange = {(e) => handleSubmit(e)}  style = {{display: 'flex', flexDirection: 'column'}}>  
          <TextInputArea placeholder = "URL을 입력해주세요" value={link}  onChange= {(e) => {setLink(e.target.value)}}></TextInputArea>
            </form>
            <ShortWrapper>
            {short && (
                <div >{short}</div>
                //onClick = {() => window.open(`http://${short}`, '_blank')}
            )}
            </ShortWrapper>
                <TextInputArea placeholder = "Title을 입력해주세요" value = {isTitle} onChange = {(e) => {setIsTitle(e.target.value)}} ></TextInputArea>
                <Select value = {isSelected} onChange = {handleSelect}>
                {selectList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                      {console.log(isSelected)}
                 </option>
                ))}
                </Select>
                <TextArea placeholder= 'URL 상세 정보를 입력해 주세요' value = {isDes} onChange = {(e) => {setIsDes(e.target.value)}}></TextArea>
            </TextAreaWrap>
            <ButtonWrap>
            <CancleButton onClick={openModalHandler}>
               Cancle
            </CancleButton>
            <SubmitButton short = {short} onClick = {submitHandler}>
               Submit
            </SubmitButton>
            </ButtonWrap>

          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
    </div>
  );
};
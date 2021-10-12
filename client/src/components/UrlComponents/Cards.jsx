import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as  BiIcons from 'react-icons/bi'
import {ShortWrapper, TextArea, TextInputArea, TextAreaWrap, ButtonWrap,  CancleButton, SubmitButton, ModalBackdrop, ModalContainer, ModalView,Card, CardModalView, CancleButtonCard, ButtonWrapCard, SubmitButtonCard } from '../utill/Styled'
import * as BsIcons from 'react-icons/bs'
import shrtcode from '../shorten/api/shrtcode'
import logo from '../Common/img/logo.png'

export const Cards= () => {
  const [link, setLink] = useState('')
  const [short, setShort] = useState('')
  const [isTitle, setIsTitle] = useState('')
  const [isDes, setIsDes] = useState('')
  const [edit, setEdit] = useState(false)
  const [isDelete, setIsDelete] = useState(false)


  const submitHandler = () => {

  } 

  const deleteHandler = () => {
    setIsDelete(!isDelete)
  }

    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REGEX)
    }

    const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateURL(link)){
            getLink();
            setLink('')
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
        })
        .catch((error) => {
            console.log(error)
        })
    }

  const editCard = () => {
    setEdit(!edit)
  }
  return (
    <div>
      <Card>
       <div className = 'icons'>
         <BiIcons.BiTrash className = 'trash' onClick = {deleteHandler}/>
         <BiIcons.BiPencil className = 'pencil' onClick = {editCard}/>
       </div>
       'title'
       <br/>
       'url'
       <br/>
       'des'
      </Card>
      {edit && 
      <ModalContainer>
        <ModalBackdrop onClick = {editCard}>
          <ModalView  onClick={(e) => e.stopPropagation()}>
          <BsIcons.BsArrowLeft onClick={editCard} className='cancle-arrow'/>
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
                <TextArea placeholder= 'URL 상세 정보를 입력해 주세요' value = {isDes} onChange = {(e) => {setIsDes(e.target.value)}}></TextArea>
            </TextAreaWrap>
            <ButtonWrap>
            <CancleButton onClick={editCard}>
               Cancle
            </CancleButton>
            <SubmitButton short = {short} onClick = {submitHandler}>
               Submit
            </SubmitButton>
            </ButtonWrap>
          </ModalView>
        </ModalBackdrop>
      </ModalContainer>
      }
      {isDelete && 
      <ModalContainer>
        <ModalBackdrop onClick = {deleteHandler}>
          <CardModalView>
            <div className = "header">
              Url을 삭제 하시겠습니까?
            </div>
            <div className = "message">
              삭제된 Url은 되돌릴 수 없습니다
            </div>
            <ButtonWrapCard>
              <CancleButtonCard onClick={deleteHandler}>
                 취소
              </CancleButtonCard>
              <SubmitButtonCard short = {short} onClick = {submitHandler}>
                 삭제
              </SubmitButtonCard>
            </ButtonWrapCard>
          </CardModalView>
        </ModalBackdrop>
      </ModalContainer>
      }
      
  </div>
   
  );
};

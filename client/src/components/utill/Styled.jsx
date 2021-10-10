import styled from 'styled-components'



export const UrlComponentWrap = styled.div`
display: grid;
row-gap: 20px;
grid-template-columns: 1fr 1fr 1.5fr;
`
export const UrlAll = styled.div`
margin-bottom: 20px;
`


export const ShortWrapper = styled.div`
margin-right: 50%;
margin-top: 20px;
`
export const TextArea = styled.textarea`
margin-top: 30px;
margin-left: 10%;
margin-right: 30%;
border-top: none;
border-left: none;
border-right: none;
height: 100px;
`
export const TextInputArea = styled.input `
margin-top: 10px;
margin-left: 10%;
margin-right: 30%;
border-top: none;
border-left: none;
border-right: none;
border-bottom: {
    opacity: 20%;
};
`

export const TextAreaWrap = styled.div`
display: grid;
margin-top: 60px;
width: 900px;
 .cissors{
     margin-left: 80%;
     cursor: pointer;
     font-size: 25px;
 }
`

export const ButtonWrap = styled.div`
margin-top: 50px;
margin-left : 60%;
`

export const CancleButton = styled.button`
background-color: transparent;
padding: 10px;
margin-right: 30px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
&:hover{
     background-color: #F26D6D;
     color: #fff;
     transition-duration: 1s;
 }
`

export const SubmitButton = styled.button`
background-color: transparent;
padding: 10px;
margin-right: 50px;
width: 80px;
border-radius: 5px;
border-color: #FCFFF5;
font-size: 10px;
font-family: monospace;
cursor: pointer;
&:hover{
     background-color: #1E6FD9;
     color: #fff;
     transition-duration: 1s;
 }

`


export const UrlPlusButton = styled.button`
    padding: 70px;
    width: 220px;
    opacity: 40%;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border-width: 1px;
    margin-right: 40%;

 &:hover{
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
}
`
export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;

export const ModalContainer = styled.div`
  height: 15rem;
  text-align: center;
  margin: 120px auto;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 700px;
    height: 500px;

   .cancle-arrow{
       font-size: 25px;
       font-weight: bold;
       margin-top: 5%;
       margin-right: 80%;
       cursor: pointer;
   }

    
`;
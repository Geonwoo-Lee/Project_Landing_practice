// import React, { useEffect, useState } from 'react'
// import styled from 'styled-components'
// import shrtcode from '../api/shrtcode'


// const TextArea = styled.textarea`
// margin-bottom: 20px;
// margin-left: 40%;
// margin-right: 40%;
// `


// const SearchWrapper = styled.div`
// margin-top: 20%;
// .shortLink_wrap{
//     margin-left: 40%;
//     margin-right: 40%;
// }
// `

// const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;

// const Search = () => {
//     const [link, setLink] = useState('')
//     const [short, setShort] = useState('')
//     const [isLoading, setIsLoading] = useState(false)

//     const validateURL = (string) => {
//         return string.match(HTTP_URL_VALIDATOR_REGEX)
//     }
    
//     const handleSubmit = (e) => {
//         // e.preventDefault();
//         if(validateURL(link)){
//             getLink();
//             setLink('')
//             setIsLoading(!isLoading)
//         }else {
//             setShort('잘못된 URL 입니다. 다시 입력해 주세요 ! ')
//         }
//     }
//     useEffect((e) =>{
//     getLink()
//     })

//     const getLink = async () => {
//         await shrtcode
//         .get(`shorten?url=${link}`)
//         .then((response) => {
//             console.log(response.data.result.short_link)
//             setShort(response.data.result.short_link)
//             setIsLoading(false)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     }


//     return (
//         <SearchWrapper>
//             <form onChange = {(e) => handleSubmit(e)}  style = {{display: 'flex', flexDirection: 'column'}}>

//                 <TextArea value={link}  onChange= {(e) => {setLink(e.target.value)}}>
               
//                 </TextArea>
//             {isLoading && '로딩중'}
//             </form>
//             {short && (
//                 <div className = 'shortLink_wrap'>
//                 <div className = 'shortLink'> 줄여진 링크: {short} </div> 
//                 </div>
//             )}
//         </SearchWrapper>
//     )
// }

// export default Search
import React from 'react';
import styled from 'styled-components';

export const Cards= () => {
  return (
    <div>
      
      <Card>
       
      </Card>
  </div>
   
  );
};
const Card = styled.div`
  position: relative;
  width: 220px;
  height: 150px;
  perspective: 500px;
  border-radius: 5px;
  background-color: pink;
  &:hover{
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 4px rgba(0, 0, 0, 0.2);
    transition: all;
  }
  .p{
    color: black;
  }
`;


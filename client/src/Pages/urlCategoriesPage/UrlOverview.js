import React from 'react';
import Search from '../../components/shorten/shortenComponent/Search';
import PlusButton from '../../components/UrlComponents/PlusButton';


const Overview = () => {
  


  return (
    <div >
      {/* URL 전체보기 컴포넌트 이지만 임의로 같은 컴포넌트들을 삽입해 놓았습니다 !  */}
      <PlusButton/>
      <Search/>
    </div>
  );
};

export default Overview;
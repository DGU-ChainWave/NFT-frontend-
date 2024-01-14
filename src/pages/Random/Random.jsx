import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const Random = () => {

  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
    // 랜덤한 팁 생성 함수
    const getRandomTip = () => {
      const tips = [
        'NFT는 주점에서 사용이 가능해요!',
        '뿌우는 2024년에 태어났어요.',
        '카카오톡 클립에서 NFT를 확인할 수 있어요.'
      ];

      const randomIndex = Math.floor(Math.random() * tips.length);
      return tips[randomIndex];
    };

    setRandomTip(getRandomTip());
  }, []); 

  const navigate = useNavigate();
  /*@media (min-width: 800px) {
    font-size: 30px;
  }*/

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full">
      <div className="bg-white flex flex-col items-center justify-center w-full">
          <div className="md:text-10xl lg:text-22xl xl:text-2xl m-5 font-extrabold text-[#ff8900] text-[28.4px] tracking-[0] leading-[normal] ">
            랜덤 BOX 열기
          </div>
          <img
          className="ml-10 w-[315px] h-[253px]  object-cover"
          alt="Image"
          src="box.png"
        />
          <div className="m-5 top-0 left-0  font-bold text-black text-[14.2px] tracking-[0] leading-[normal]">
           Tip. {randomTip}
          </div>
          <button className="m-3 w-[318px] h-[42px] bg-[#ff8900] font-bold text-white text-[17px] text-center tracking-[-0.30px] leading-[normal] p-[10px] rounded-[30px]" onClick={() => navigate('/issueComplete')}>
            NFT 발급받기
          </button>
      </div>
      </div>
  );
};
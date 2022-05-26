import React from 'react'
import { HomePageWrapper, BgAnime } from './homeStyle'

export default function Home() {
    return (
      <HomePageWrapper>
        <BgAnime  autoPlay={true} muted>
          <source  src='https://assets.e-money.com/videos/e-money-header-hd.mp4' 
          type="video/mp4" />
        </BgAnime>
     
      
      </HomePageWrapper>
    );
}

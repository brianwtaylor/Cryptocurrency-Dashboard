import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`

function getCoinsToDisplay(coinList, topSection, favorites) {
  return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 150);
}

const CoinGrid = ({topSection}) => {
  return (
    <AppContext.Consumer> 
    {({coinList, favorites}) => <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites).map(coin => 
        <CoinTile coinKey={coin} key={coin} topSection={topSection} />
      )}
    </CoinGridStyled>}
  </AppContext.Consumer>
  )     
}

export default CoinGrid;
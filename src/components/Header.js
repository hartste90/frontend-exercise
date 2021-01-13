import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";
import media, {margins} from "../responsive/media";

const Container = styled.section`
  background: ${colors.yellow};
  padding-top: 2rem;
  padding-bottom: 2rem;
  
`;

const HeaderTitle = styled.section`
  font-family: 'Feijoa Display'; 
  font-size: 3rem;
  margin-left: ${margins.main};
  @media ${media.mobileTwoChairs} { 
    font-size: 2rem;
    text-align: center;
    margin-left: ${margins.none};
  }
`;

function Header(props) {
    return (
        <Container>
            <HeaderTitle>
                Talk Therapy Blog
            </HeaderTitle>
        </Container>
    );
}

export default Header;
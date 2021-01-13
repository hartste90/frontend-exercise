import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";

const Container = styled.section`
  background: ${colors.olive};
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
`;

function Footer(props) {
    return (
        <Container>
                a frontend-exercise by Steven Hart
        </Container>
    );
}

export default Footer;

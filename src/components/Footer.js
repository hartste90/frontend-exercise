import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";

const Container = styled.section`
  background: ${colors.olive};
  padding: 1rem;
  text-align: center;
  color: ${colors.white};
`;

const footerText = "a frontend-exercise by Steven Hart";

function Footer(props) {
    return (
        <Container>
                {footerText}
        </Container>
    );
}

export default Footer;

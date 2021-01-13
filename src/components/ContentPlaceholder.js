import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";

const Container = styled.h1`
    font-family: "Faijoa";
    color: ${colors.olive};
    text-align: center;
    padding: 2rem;
`;

function ContentPlaceholder(props) {
    return (
        <Container>
            We're dilligently working on our blogs, please check back later!
            </Container>
    );
}

export default ContentPlaceholder;
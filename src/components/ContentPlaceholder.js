import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";

const Container = styled.h1`
    font-family: "Faijoa";
    color: ${colors.olive};
    text-align: center;
    padding: 2rem;
`;

const blogPlaceholderText = "We're dilligently working on our blogs, please check back later!";

function ContentPlaceholder(props) {
    return (
        <Container>
            {blogPlaceholderText};            
            </Container>
    );
}

export default ContentPlaceholder;
import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";

const Container = styled.section`
    background: ${colors.white};
    width: 100%;
    height: auto;
    font-family: 'Helvetica Neue'; 
    animation: fadeIn 1s;
  	opacity: 1;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const BlogDetailsContainer = styled.section`
    padding: 1rem;
    padding-left: 1rem;
    padding-top: .5rem;
    color: ${colors.mediumdarkgrey};
`;

const Date = styled.section`
    font-size: 1em;
    font-weight: bolder;
    margin-bottom: 1rem;
    color: ${colors.grey};
`;

const Image = styled.img`
    background: ${colors.tomato};
    vertical-align: middle;
    height: auto;
    width: 100%;
`;

const Title = styled.section`
    font-size: 1.4rem;
    font-family: 'Feijoa Display';
    letter-spacing: .05rem;  
    margin-bottom: 1.5rem;
`;

const Subtitle = styled.section`
    font-size: .8rem;
    font-weight: bold;
`;


function BlogListing({id, image, date_created, title, author}) {
    return (

        <Container key={id} className="BlogListing">
            <Image src= {image}/>
            <BlogDetailsContainer>
                <Date>{date_created}</Date>
                <Title>{title}</Title>
                <Subtitle>{author}</Subtitle>
            </BlogDetailsContainer>
            
        </Container>
    );
}

export default BlogListing;
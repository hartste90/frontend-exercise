import '../App.css';
import React from 'react';
import styled from 'styled-components'
import BlogData from './BlogData';
import media, {margins} from '../responsive/media';

const Container = styled.section`
      margin: ${margins.main};
      @media ${media.mobileTwoChairs} { 
        margin-left: ${margins.none};
        margin-right: ${margins.none};
      }
`;

function BlogGrid(props) {
    

    return (
        <Container>
            <BlogData/>
        </Container>
    );
}

export default BlogGrid;
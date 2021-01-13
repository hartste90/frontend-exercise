import React from 'react';
import styled from 'styled-components'
import colors from "../config/colors";
import Header from '../components/Header';
import BlogGrid from '../components/BlogGrid';
import Footer from '../components/Footer';


const Container = styled.section`
  height: 100%;
  background: ${colors.lightgrey};
`;

function BlogPage(props) {
    return (
        <Container className="BlogPage">
            <Header/>
            <BlogGrid/>
            <Footer/>
        </Container>
    );
}

export default BlogPage;
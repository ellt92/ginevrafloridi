import styled, { injectGlobal,css } from 'styled-components';
import Montserrat from 'fonts/Montserrat/Montserrat-Bold.ttf';
import Merriweather from 'fonts/Merriweather/Merriweather-Regular.ttf';

export const media = {
    phone: (...args) => css`
        @media (max-width: 640px) {
            ${ css(...args) }
        }
    `,
    desktop: (...args) => css`
        @media (min-width: 641px) {
            ${ css(...args) }
        }
    `
};

injectGlobal`
    @font-face {
        font-family: TitleFont;
        src: url('${Montserrat}') format('opentype');
    }
    @font-face {
        font-family: ParagraphFont;
        src: url('${Merriweather}') format('opentype');
    }
    html, body {
        margin: 0px;
    }
    h1, h2, h3, h4, h5 {
        font-family: TitleFont;
    }
    p, li, a {
        font-family: ParagraphFont;
        font-size: 14px;
    }
`;

export const Banner = styled.div`
    background-color: #43A047;
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    a {
        text-decoration: none;
        color: white;
        transition: all 0.5s;
    }
    a:hover {
        opacity: 0.5;
    }
`;

export const Nav = styled.div`
    float: right;
`;

export const NavItem = styled.a`
    margin-left: 2rem;
`;

export const Img = styled.img`
    float:right;
    max-width: 470px;
    padding-left: 2rem;
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

export const PageContent = styled.div`
    margin: 2rem 0;
`;

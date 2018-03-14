import styled, { injectGlobal,css } from 'styled-components';

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
`;

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Nav = styled.div`
    float: right;
`;

export const NavItem = styled.a`
    margin-left: 1rem;
`;

export const Img = styled.img`
    float:right;
    max-width: 470px;
`;

export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
`;

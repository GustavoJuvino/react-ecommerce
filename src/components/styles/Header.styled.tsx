import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 82.8%;
    margin-left: 165px;
    margin-right: 165px;
    margin-top: 20px;

    .Logo, .Cart, p, img {
        cursor: pointer;
    }

    nav {
        margin-top: 15px;
        display: flex;
    }

    .Logo {
        margin-right: 56px;
    }

    p {
        margin-left: 32px;
    }
`

export const UserSection = styled.div`
    display: flex;
    align-items: center;

    .Cart {
        margin-right: 46px;
    }

    img {
        width: 50px;
        height: 50px;
    }
`

export const Divider = styled.div`
    margin-left: 165px;
    margin-right: 165px;
    margin-top: 34px;
    width: 82.8%;
    height: 3px;
    background-color: var(--light-grayish-blue);
`
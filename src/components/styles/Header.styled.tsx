import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    width: 82.8%;
    margin-left: 165px;
    margin-right: 165px;
    margin-top: 20px;

    .Logo, .Cart, img {
        cursor: pointer;
    }

    nav {
        margin-top: 15px;
        display: flex;
    }

    .Logo {
        margin-right: 56.5px;
    }

    nav p {
        margin-left: 32px;
        cursor: default;
        color: var(--dark-grayish-blue);
    } 
    
    nav p:hover{
        color: black;
        transition: 0.8s;
    }

    nav p::after{
        content: "";
        display: block;
        width: auto;
        height: 4px;
        background-color: var(--orange);
        margin-top: 45px;
    }
`

export const UserSection = styled.div`
    display: flex;
    justify-content: center;

    .Cart {
        margin-right: 46px;
        margin-top: 20px;
    }

    img {
        width: 50px;
        height: 50px;
    }
`

export const Divider = styled.div`
    margin-left: 165px;
    margin-right: 165px;
    width: 82.8%;
    height: 3px;
    background-color: var(--light-grayish-blue);
`
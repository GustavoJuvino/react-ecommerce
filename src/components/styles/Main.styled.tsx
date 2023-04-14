import styled from "styled-components";

export const MainContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 125px;
    margin-top: 90px;

    @media (max-width: 950px) {
        grid-gap: 25px;
    }
`
export const MainTexts = styled.section`
    width: 55%; 
    height: auto;
    text-align: left;

    @media (max-width: 950px) {
        width: 200px; 
    }
    
    .logo-text {
        letter-spacing: 2px;
        font-size: 13px;
        font-weight: bold;
        color: var(--orange);
    }

    h1 {
        font-size: 48px;
        margin-top: 24px;

        @media (max-width: 1012px) {
            font-size: 28px;
        }
    }

    p {
        margin-top: 32px;
        font-size: 16px;
        line-height: 26px;
        color: var(--dark-grayish-blue);
    }

    h2 {
        display: flex;
        align-items: center;
        margin-top: 24px;
        font-size: 28px;
    }

    .old-price{
        margin-top: 10px;
        font-weight: bold;
        color: var(--grayish-blue);
    }
`

export const Offer = styled.div`
    width: 51px;
    height: 27px;
    padding-top: 4px;
    margin-left: 26px;
    border-radius: 6px;
    background-color: #FFEEE2;
    font-size: 16px;
    text-align: center;
    color: var(--orange);
`
import styled from "styled-components";

export const MainContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 125px;
    margin-top: 90px;

    @media (max-width: 950px) {
        grid-gap: 25px;
    }

    @media (max-width: 630px) {
        display: block;
        margin-top: 20px;
    }
`
export const MainImages = styled.section`
    .next, .previous {
        display: none;
    }

    @media (max-width: 630px) {
        display: flex;
        justify-content: space-between;
        text-align: center;

        .next, .previous {
            display: block;
            cursor: pointer;
            width: 56px;
            height: 56px;
            background-color: #ededed;
            border-radius: 50%;
            align-self: center;
            padding-top: 9px;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            color: black;
            user-select: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;

            @media (max-width: 516px) {
                position: absolute;
            }

            &:hover{
                transition: 0.2s;
                color: var(--orange);
            }
        }

        .next {
            right: 30px;
            @media (max-width: 516px) {
                right: 0px;
            }
        }

        .previous {
            left: 30px;
            @media (max-width: 516px) {
                left: 0px;
            }
        }
    }
`

export const MainTexts = styled.section`
    width: 55%; 
    height: auto;
    text-align: left;

    @media (max-width: 950px) {
        width: 200px; 
    }

    @media (max-width: 630px) {
        margin: 20px 24px 0px 24px;
        width: 65%;
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

        @media (max-width: 516px) {
            font-size: 24px;
        }
    }

    p {
        margin-top: 32px;
        font-size: 16px;
        line-height: 26px;
        color: var(--dark-grayish-blue);

        @media (max-width: 516px) {
            margin-top: 20px;
            font-size: 14px;
        }
    }

    .price {

        h2 {
            display: flex;
            align-items: center;
            margin-top: 24px;
            font-size: 28px;
            @media (max-width: 516px) {
                font-size: 24px;
            }
        }

        .old-price{
            margin-top: 10px;
            font-weight: bold;
            color: var(--grayish-blue);

            @media (max-width: 630px) {
                margin-top: 30px;
                text-align: end;
            }
        }

        @media (max-width: 630px) {
            display: flex;
            justify-content: space-between;
        }
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
import styled from "styled-components";

export const CartMenu = styled.div`
    position: absolute;
    right: 0px;
    margin-right: 165px;
    z-index: 2;
    align-items: flex-start;
    width: 360px;
    height: 256px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 20px 50px -20px #1D2026;

    h3 {
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding-top: 24px;
        padding-left: 24px;
        padding-bottom: 27px;
        border-bottom: 1px solid var(--grayish-blue);
    }

    p {
        position: absolute;
        top: 50%;
        left: 30%;
        font-size: 16px;
        font-weight: bold;
        color: var(--dark-grayish-blue);
        text-align: center;
    }

`
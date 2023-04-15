import styled from "styled-components";

export const MobileSection = styled.section`

    .active #hamburger{
        border-top-color: transparent;
        color: black;
    }

    .active #hamburger::before{
        transform: rotate(135deg);
    }

    .active #hamburger::after{
        transform: rotate(-135deg);
        top: -7px;
    }
`

export const MobileButton = styled.button`
    display: flex;
    margin-right: 16px;
    margin-top: 2px;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;

    #hamburger {
        color: #69707D;
        display: block;
        border-top: 3px solid;
        width: 25px;
    }
    
    #hamburger::after, #hamburger::before {
        content: "";
        display: block;
        width: 25px;
        height: 3px;
        background-color: currentColor;
        margin-top: 5px;
        transition: .3s;
        position: relative;
    }
`
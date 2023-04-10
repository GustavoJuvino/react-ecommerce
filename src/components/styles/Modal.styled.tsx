import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #0f0f0f58;
    
    .delete {
        position: absolute;
        top: -34px;
        right: 8px;
        width: 20px;
        height: 20px;
        fill: white;
        cursor: pointer;

        &:hover {
            transition: 0.2s;
            fill: var(--orange);
            stroke: var(--orange);
        }
    }

    .main-img-container {
        display: flex;

        img {
            border-radius: 15px;
            width: 550px;
            height: 550px;
        }

        .next, .previous {
            position: absolute;
            cursor: pointer;
            width: 56px;
            height: 56px;
            background-color: white;
            border-radius: 50%;
            align-self: center;
            padding-top: 9px;
            text-align: center;
            font-size: 25px;
            font-weight: bold;
            color: black;

            &:hover{
                transition: 0.2s;
                color: var(--orange);
            }
        }

        .next {
            right: -30px;
        }

        .previous {
            left: -30px;
        }
    }

    img{
        width: 100px;
        height: 100px;
        border-radius: 10px;
    }
` 

export const ModalSection = styled.section`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);

    ul {
        margin-top: 40px;
        margin-bottom: 89px;
        display: flex;
        justify-content: center;

        li {
            margin-left: 30px;
            cursor: pointer;
        }
    }

    
`
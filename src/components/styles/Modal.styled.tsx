import styled, { keyframes }  from "styled-components";

const testingImg = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: initial;
    }
`


export const Main = styled.main`
    animation: ${testingImg} 0.3s forwards;
    display: grid;
    grid-template-columns: 1fr;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: #0f0f0fab;
    
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
            user-select: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;

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
` 

export const ModalSection = styled.section`
    position: absolute;
    top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);

    ul {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;

        li {
            cursor: pointer;
            line-height: 0px;
        }

        .img-preview {
            width: 100px;
            height: 100px;
            border-radius: 10px;
        }

        .toggle-effect {
            box-shadow: 0px 0px 0px 2px var(--orange);
            transition: 0.4s;
            border-radius: 10px;

            .img-preview{
                outline: 50px solid rgba(255, 255, 255, 0.700);
                outline-offset: -100px;
            }
        }
    }

    
`
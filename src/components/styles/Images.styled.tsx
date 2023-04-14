import styled from 'styled-components';

export const ImagesSection = styled.section`
    margin-left: 213px;

    @media (max-width: 1330px) {
        margin-left: 50px;
    }

    ul {
        display: flex;
        padding: 0px;

        li {
            cursor: pointer;
            margin: 32px 31px 0px 0px;
            line-height: 0px;
            border-radius: 10px;
        }
    }

    .img-preview {
        width: 88px;
        height: 88px;
        border-radius: 10px;

        @media (max-width: 950px) {
            width: 55px;
            height: 55px;
        }
    }

    img[alt="main-img"] {
        cursor: pointer;
        width: 445px;
        height: 445px;
        border-radius: 15px;

        @media (max-width: 950px) {
            width: 325px;
            height: 325px;
        }
    }

    .toggle-effect {
        box-shadow: 0px 0px 0px 2px var(--orange);
        transition: 0.4s;
        .img-preview {
            opacity: 0.55;
        }
    }
`
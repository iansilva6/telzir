import styled from 'styled-components';

export const Overflow = styled.div`
    position: fixed;
    z-index: 500;
    bottom: 0;
    top: 0%;
    left: 0;
    background: rgba(0, 0, 0, 0.755327);
    height: 100%;
    width: 100%;
`;

export const Alert = styled.div`
    padding: 50px;
    width: 100%;
    border-radius: 26px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    @media (max-width: 768px) {
        padding: 10px;
        border-radius: 10px;
    }
`;

export const Modal = styled.div`
    padding: 50px;
    border-radius: 26px;
    background: #fff;

    img {
        margin: 0 auto;
        display: block;
    }

    h3 {
        font-weight: 600;
        font-size: 24px;
        color: #0BBA94;
        text-align: center;
        margin-top: 12px;
        padding: 10px 0px;
        font-style: normal;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    p {
        font-weight: 300;
        font-size: 16px;
        text-align: center;
        color: #7A7A7A;
        font-style: normal;
        @media (max-width: 768px) {
            font-size: 15px;
        }
    }
`;

export const Buttons = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 768px) {
        margin-top: 15px;
        display: block;
    }
    button {
        text-align: center;
        letter-spacing: 0.573158px;
        text-transform: uppercase;
        color: #000000;
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        padding: 10px 60px;
        margin: 0px 10px;
        background: #F3F3F3;
        border-radius: 10px;
        border: 2px solid #FFF;
        &:hover {
            border: 2px solid #0BBA94;
            color: #0BBA94;
        }
        @media (max-width: 768px) {
            width: 100%;
            font-size: 12px;
        }
    }
`;
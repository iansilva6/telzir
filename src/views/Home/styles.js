//Libs
import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    padding: 100px;
    margin: 25px 0px;
    background: #fff;
    box-shadow: -4px 11px 22px rgba(0, 0, 0, 0.101535);
    border-radius: 10px;
    /* Responsive */
    @media (max-width: 992px) {
        padding: 50px;
    }

    .center {
        display: flex;
        justify-content: center;
        margin: 10px 0px;
    }
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 52px;
    line-height: 46px;
    letter-spacing: -0.375px;
    color: #3B3B3B;
    text-align: center;
`;

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    letter-spacing: -0.375px;
    color: #3B3B3B;
    text-align: center;
`;

export const Label = styled.label`
    width: 100%;
    color: #0BBA94;
    font-weight: 600;
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Input = styled.input`
    line-height: 16px;
    color: #484848;
    background-color: #fff;
    width: 100%;
    padding: 10px 10px 9px;
    border-bottom: 2px solid transparent;
    margin-bottom: 15px;
    font-size: 16px;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: 0.3s;
    :focus {
        border-bottom: 3px solid #0BBA94;
        transition: 0.3s;
    }
`;
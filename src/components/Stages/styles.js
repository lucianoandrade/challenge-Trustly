import styled from 'styled-components';

export const LineStage = styled.div`
    max-width: 824px;
    width: 100%;
    border-bottom: ${props => `1px solid ${props.theme.palette.borderLineSelect}`};
    margin: 0 auto;

    @media screen and (max-width: 600px){
        display: none;
    }

    @media screen and (max-width: 769px){
        max-width: 650px;
    }
`;

export const Steps = styled.div`
    max-width: 859px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    
    @media screen and (max-width: 600px){
        display: none;
    }
`;

export const Step = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PhaseCart = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${props => props.theme.palette.destaq};
    border-radius: 100%;
    position: absolute;
    top: 135px;
`;

export const PhasePayment = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${props => props.theme.palette.destaq};
    border-radius: 100%;
    position: absolute;
    top: 135px;
`;

export const PhaseReceipt = styled.div`
    height: 15px;
    width: 15px;
    background-color: ${props => props.location === "review-and-confirmation" ? 
        props.theme.palette.destaq : props.theme.palette.borderLineSelect };
    border-radius: 100%;
    position: absolute;
    top: 135px;
`;

export const PhaseTitle = styled.div`
    font-family: Arial;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: ${({theme}) => theme.palette.black};
    margin-top: 15px;
`;
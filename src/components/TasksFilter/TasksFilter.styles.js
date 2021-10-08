import styled from 'styled-components';

export const ButtonDone = styled.button`
    width: 33.3%;
    height: 100%;    
    border: none;
    background-color: #FFFFFF;
`;

export const ButtonActive = styled(ButtonDone)`
    border-right: 1px solid #000000;
`;

export const ButtonAll = styled(ButtonDone)`
    border-right: 1px solid #000000;   
`;

export const TaskFilterWrapper = styled.div`
    width: 32%;
    height: 29;
    border: 1px solid #000000; 
    border-radius: 3px;
    background-color: #FFFFFF;
`;

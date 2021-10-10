import styled from 'styled-components';
import { device } from '../../common/devices';

export const ButtonComplite = styled.button`
    height: 29px;
    border: 1px solid #47A76A; 
    border-radius: 3px;
    background-color: #FFFFFF;
`;

export const ButtonRemove = styled(ButtonComplite)`
    border: 1px solid #A12312;
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 32%;


`;

export const TaskWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #000000;
`;

export const TextWrapper = styled.p`
    width: 50%;  
    text-decoration: ${({ complition }) => (complition ? 'line-through' : 'none')};
    word-wrap: break-word;
`;

import styled from 'styled-components';
import { device } from '../../common/devices';

export const InputSearch = styled.input`
    width: 60%;
    height: 25px;
    padding-left: 5px;
    border: 1px solid #000000;
    border-radius: 3px;

    @media ${device.mobileS} { 
        width: 50%;
    }
    @media ${device.mobileL} { 
        width: 60%;
    }
`;

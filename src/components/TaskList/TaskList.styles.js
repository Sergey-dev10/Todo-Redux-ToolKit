import styled from 'styled-components';
import { device } from '../../common/devices';

export const TaskListWrapper = styled.div`
    width: 28%;
    min-height: 200px;
    margin: 10% auto;

    @media ${device.mobileS} { 
        width: 100%;
    }
    @media ${device.tablet} { 
        width: 55%;
    }
    @media ${device.laptop} { 
        width: 42%;
    }
    @media ${device.laptopL} { 
        width: 30%;
    }
    @media ${device.desktopL} { 
        width: 25%;
    }
`;

export const SearchFilterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

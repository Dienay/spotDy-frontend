import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: #181818;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    align-items: center;
    height: 50px;
    width: 100%;

    h1 {
        color: #fff;
        margin: 0;
    }
`
export const Logo = styled.div`
    display: flex;
    justify-content: center;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
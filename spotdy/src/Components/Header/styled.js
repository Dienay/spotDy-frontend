import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: #181818;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr;
    padding: 8px 0;
    width: 100vw;

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
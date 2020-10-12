import styled from 'styled-components'

export const ContainerCreate = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;
    width: 100vw;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CardCreate = styled.div`
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 0 0 5px #d6d6d6;
    flex-direction: column;
    display: flex;
    height: 650px;
    justify-content: center;
    width: 350px;

    h2 {
        margin-top: 0;
    }
`

export const Back = styled.div`
    position: fixed;
    top: 16px;
    left: 16px;
`
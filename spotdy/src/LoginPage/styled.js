import styled from 'styled-components'

export const ContainerLogin = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CardLogin = styled.div`
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 0 0 5px #d6d6d6;
    flex-direction: column;
    display: flex;
    height: 350px;
    justify-content: center;
    width: 300px;

    h2 {
        margin-top: 0;
    }
`
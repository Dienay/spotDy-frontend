import styled from 'styled-components'

export const ContainerLogin = styled.div`
    background-color: rgba(24, 24, 24, .1);
    height: 100vh;
    
    section {
        align-items: center;
        display: flex;
        height: 90%;
        justify-content: center;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CardLogin = styled.div`
    background-color: #fff;
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 0 0 5px #d6d6d6;
    flex-direction: column;
    display: flex;
    height: 300px;
    justify-content: center;
    width: 300px;

    h2 {
        margin-top: 0;
    }
`
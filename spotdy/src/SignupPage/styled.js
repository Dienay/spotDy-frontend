import styled from 'styled-components'

export const ContainerSignup = styled.div`
    background-color: rgba(24, 24, 24, .1);
    height: 90vh;
    
    section {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const CardSignup = styled.div`
    background-color: #fff;
    align-items: center;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 0 0 5px #d6d6d6;
    flex-direction: column;
    display: flex;
    height: 570px;
    justify-content: center;
    width: 350px;

    h2 {
        margin-top: 0;
    }
`
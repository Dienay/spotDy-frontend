import styled from 'styled-components'

export const ContainerHome = styled.div`
   height: 92.5vh;
`

export const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
`

export const Middle = styled.div`
`

export const Musics = styled.div`
background-color: rgba(24, 24, 24, .1);
    height: 100%;

    > ul {
        margin-top: 0;
        padding: 8px;
    }

    > ul > li {
        border-bottom: 1px solid #c4c4c4;
        list-style: none;
    }

    > ul > li > div {
        display: grid;
        grid-template-columns: 2fr 3fr .4fr;
        align-items: center;
        padding: 8px;
        font-size: 14px;
    }

    > ul > li > div > img {
        width: 16px;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #282828;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: fixed;
        right: 16px;
        bottom: 16px;
        cursor: pointer;
    }

    > div > img {
        width: 30px;
        height: 30px;
    }
    `

export const Music = styled.div`
    :hover {
        background-color: #c4c4c4;
        transition: 200ms;
    }
`

export const Description = styled.div`
    display: flex;
    background-color: gray;
`
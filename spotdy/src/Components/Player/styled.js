import styled from 'styled-components'

export const PlayerContainer = styled.div`
    position: absolute;
    bottom: 0;
    background-color: #181818;
    height: 8vh;
    width: 100%;
`

export const TopSideBar = styled.div`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 32px;

> div {
    display: flex;
    cursor: pointer;
}

> div:hover {
    background-color: #c4c4c4;
    transition: 200ms;
}

> div > img {
    margin: 0 16px;
    width: 18px;
}

`

export const Playlists = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    padding: 0 24px;

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin-bottom: 8px;
        margin-left: 8px;
    }
`

export const AddNewPlaylist = styled.div`
border-bottom: 1px solid #c4c4c4;
cursor: pointer;
display: flex;
padding: 16px 0;

img {
        width: 16px;
        margin-right: 8px;
}
`
import styled from 'styled-components'

export const ContainerSidebar = styled.div`
    border-right: 1px solid #c4c4c4;
    font-size: 14px;
    font-weight: 500;
    height: 100%;

    img {
    margin-right: 8px;
    width: 16px;
}
`

export const TopSideBar = styled.div`
    border-bottom: 1px solid #c4c4c4;
    margin-bottom: 16px;
    padding: 16px 0;
> div {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 32px;
    padding: 0 24px;
}

> div:hover {
    background-color: #c4c4c4;
    transition: 200ms;
}

`

export const Playlists = styled.div`
    p {
        padding: 4px 24px;
    }

    li {
        padding: 4px 24px;
        cursor: pointer;
    }

    li:hover {
        background-color: #c4c4c4;
        transition: 200ms;
    }
    `

export const AddNewPlaylist = styled.div`
    cursor: pointer;
    display: flex;
    padding: 16px 24px;

    :hover {
        background-color: #c4c4c4;
        transition: 200ms;
    }
`
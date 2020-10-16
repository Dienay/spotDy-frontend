import styled from 'styled-components'

export const ContainerSidebar = styled.div`
    background-color: rgba(24, 24, 24, .1);
    border-right: 1px solid #c4c4c4;
    height: 92.5vh;

    section {
        font-weight: 500;
        font-size: 14px;
    }
`

export const TopSideBar = styled.div`
   margin-bottom: 32px;

> div {
    display: flex;
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
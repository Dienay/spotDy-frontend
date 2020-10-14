import styled from 'styled-components'

export const ContainerSidebar = styled.div`
    background-color: rgba(24, 24, 24, .1);
    border-right: 1px solid #c4c4c4;
    height: 92.5vh;

    section {
        margin: 0 16px;
        font-weight: 500;
        font-size: 14px;
    }
`

export const TopSideBar = styled.div`
   margin-bottom: 32px;

> div {
    display: flex;
}

> div > img {
    margin-right: 16px;
    width: 18px;
}

`
import styled from 'styled-components'

export const PlayerContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    background-color: #181818;
    height: 8vh;
    width: 100%;

    
`

export const MusicPlayer = styled.div`
    align-items: center;
    display: flex;
    height: 8vh;
    background-color: #181818;

    div {
        color: #c4c4c4;
    }

    .player-controls span{
        cursor: pointer;
        padding: 0 5px;
    }

    .player-controls span:hover {
    color: #EEE;
    }

    .player-display {
        float: left;
        float: right;
        margin-left: 50px;
    }

    .player-display .player-current-track {
        color: white;
    }

    .player {
        float: left;
    }

    .player-timeline {
        float: left;
        max-width: 200px;
        width: 200px;
        height: 4px;
        margin-top: 13px;
        background: #555;
        margin-left: 20px;
    }

    .player-timeline-control {
        height: 4px;
        background: #999;
    }
`

export const Music = styled.audio`
    height: 8vh;
    width: 100%;
    background-color: #181818;

`

export const Cover = styled.img`
   height: 6vh;
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


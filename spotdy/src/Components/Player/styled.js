import styled from 'styled-components'

export const PlayerContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    background-color: #181818;
    height: 8vh;
    min-height: 80px;
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

    .player-controls{
        align-items: center;
        justify-content: space-between;
        display: flex;
        cursor: pointer;
        padding: 0 5px;
        width: 100%
    }

    .player-controls img{
        cursor: pointer;
        height: 20px;
        margin: 0 8px;
        padding: 0 5px;
    }

    #play {
        height: 50px;
    }

    .player-display {
        float: left;
        float: right;
        margin-left: 50px;
    }

    .playing {
        font-size: 12px;
        position: absolute;
        left: 24px;
        width: 110px;
        
        p {
            animation: 3s ease-in 1s infinite alternate-reverse both running slidein;
            @keyframes slidein {
                from {
                    margin-left:100%;
                    width:100px;
                }

                to {
                    margin-left:0%;
                    width:100px;
                }
            }
        }
    }

    /* .player-timeline {
        display: flex;
    } */

    /* .player-timeline-control {
        height: 4px;
        background: #999;
    } */

    .volume-up {
        display: flex;
        position: absolute;
        right: 24px;
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


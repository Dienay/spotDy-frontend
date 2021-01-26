import React, { useState, useEffect } from 'react';

import { PlayerContainer, MusicPlayer } from './styled'
import Prev from '../../Images/player/prev.svg'
import Pause from '../../Images/player/pause.svg'
import Play from '../../Images/player/play-circle.svg'
import Stop from '../../Images/player/stop.svg'
import Next from '../../Images/player/next.svg'

function Player(props) {
    const [countTrack, setCountTrack] = useState(0)
    const [currentTrack, setCurrentTrack] = useState({})
    const [playlist, setPaylist] = useState([])
    const [volume, setVolume] = useState(50)

    useEffect(() => {
        setPaylist(props.musics)
        setCurrentTrack(playlist[countTrack])
    })
 
    useEffect(() => {
        setCurrentTrack(playlist[countTrack])
    },[countTrack])

    const audio = document.getElementsByTagName("audio")[0];

    const updateTrack = async (auto) => {
        setCurrentTrack(playlist[countTrack])
        audio.autoplay = auto
    }

    const playTrack =()=>{
        audio.play()
    }

    const pauseTrack =()=>{
        audio.pause()
    }

    const stopTrack =()=>{
        audio.pause()
        setCountTrack(0)
        updateTrack(false)
    }
    
    const prevTrack =()=>{
        if(countTrack < 1) {
            setCountTrack(playlist.length -1)
            updateTrack(true)
        } else {
            setCountTrack(countTrack -1)
            updateTrack(true)
        }
    }
    
    const nextTrack =()=>{
        if(countTrack < playlist.length -1){
            setCountTrack(countTrack +1)
            updateTrack(true)
        } else {
            setCountTrack(0)
            updateTrack(true)
        }
    }

    const onChangeVolume = event => {
        setVolume(event.target.value)
        audio.volume = event.target.value / 100;
    }

  return (
        <PlayerContainer>
            <MusicPlayer>
            <audio className="audio" src={currentTrack?.file} />
            <div className="playing">
                <p>Playing: {currentTrack?.title}</p>
            </div>
                <div className="player-controls">
                    <img onClick={prevTrack} src={Prev} alt="Voltar/Prev" />
                    <img onClick={pauseTrack} src={Pause} alt="Pause" />
                    <img onClick={playTrack} src={Play} alt="Play/Tocar" id="play"/>
                    <img onClick={stopTrack} src={Stop} alt="Stop/Parar" />
                    <img onClick={nextTrack} src={Next} alt="Próximo/Next" />
                </div>

                <div className="volume-up">
                    <div className="current-duration">vol</div>
                    <div className="vol-control">
                        <input type="range" min="0" max="100" onChange={onChangeVolume} step="1" value={volume}/>
                    </div>
                </div>
            </MusicPlayer>
        </PlayerContainer>
    )
}

export default Player;
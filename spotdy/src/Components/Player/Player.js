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
    //const [playlist, setPaylist] = useState("00:00")
    const [totalTime, setTotalTime] = useState(0)
    const [volume, setVolume] = useState(50)

    const playlist = [
        {
            album: "tustus",
            author: "Chico",
            date: "23/01/2021",
            file: "http://spoti4.future4.com.br/1.mp3",
            genre: "tuts",
            id: "a3ea4d2e-6797-43a4-a0d7-8f81353c24ba",
            title: "Musica 1"
        },
        {
            album: "nada",
            author: "Chico",
            date: "23/01/2021",
            file: "http://spoti4.future4.com.br/2.mp3",
            genre: "pop",
            id: "0035aff4-1132-4ea5-aaf4-8cf761c0aa6d",
            title: "Musica 2"
        },
        {
            album: "Tuts",
            author: "Chico",
            date: "26/01/2021",
            file: "http://spoti4.future4.com.br/3.mp3",
            genre: "music",
            id: "60fd3530-eea4-477f-ac6a-ae55952ff516",
            title: "Musica 3"
        }
    ]
    console.log(playlist)

    console.log(props.musics)
 
    useEffect(() => {
        setCurrentTrack(playlist[countTrack])
        
        const audio = document.getElementsByTagName("audio")[0]
        audio.onloadeddata = () => {
            const duration = audio.duration
            setTotalTime(secondsToMinutes(duration))
        }
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

    const secondsToMinutes = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = Math.floor(time % 60);
        return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
    }

    // const onChangeSeek = (event) => {
    //     const timeTotal = event.target.value
    //     const teste = audio.currentTime
    //     setCurrentTrackTime(secondsToMinutes(timeTotal))
    //     console.log(secondsToMinutes(teste))
    // }

    // const convertTime = (timestamp) => {
    //     let minutes = Math.floor(timestamp / 60);
    //   let seconds = timestamp - (minutes * 60);
    //     if (seconds < 10) { seconds = '0' + seconds; }
    //     timestamp = minutes + ':' + seconds;
    //     return timestamp;
    // }

    // console.log(currentTrackTime)

  return (
        <PlayerContainer>
            <MusicPlayer>
                <audio className="audio" src={currentTrack.file} />
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
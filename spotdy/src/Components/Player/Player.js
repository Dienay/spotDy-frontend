import React, { useState, useEffect } from 'react';

import { PlayerContainer, MusicPlayer } from './styled'

function Player() {
    const [countTrack, setCountTrack] = useState(0)
    const [currentTrack, setCurrentTrack] = useState({})
    const [currentTrackTime, setCurrentTrackTime] = useState("00:00")
    const [totalTime, setTotalTime] = useState(0)
    const [volume, setVolume] = useState(50)

    useEffect(() => {
        setCurrentTrack(playlist[countTrack])
        
        const audio = document.getElementsByTagName("audio")[0]
        audio.onloadeddata = () => {
            const duration = audio.duration
            setTotalTime(secondsToMinutes(duration))
        }
    },[countTrack])

    const playlist = [
        {
            title: "music1",
            file: "http://spoti4.future4.com.br/1.mp3",
            cover: "https://picsum.photos/50/50?a=1"
        },
        {
            title: "music2",
            file: "http://spoti4.future4.com.br/2.mp3",
            cover: "https://picsum.photos/50/50?a=2"
        },
        {
            title: "music3",
            file: "http://spoti4.future4.com.br/3.mp3",
            cover: "https://picsum.photos/50/50?a=3"
        }
    ]

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
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
    }

    const onChangeSeek = (event) => {
        const timeTotal = event.target.value
        const teste = audio.currentTime
        setCurrentTrackTime(secondsToMinutes(timeTotal))
        console.log(secondsToMinutes(teste))
    }

    console.log(currentTrackTime)

  return (
        <PlayerContainer>
            <div>
                <img className="image-cover" src={currentTrack.cover} alt="cover"/>
                <div className="author">
                    <p>{currentTrack.author}</p>
                </div>
            </div>
            <MusicPlayer>
                <audio className="audio" src={currentTrack.file} />
                <div className="player-controls">
                    <span className="player-prev" onClick={prevTrack} >Prev</span>
                    <span className="player-play" onClick={playTrack} >Play</span>
                    <span className="player-pause" onClick={pauseTrack} >Pause</span>
                    <span className="player-stop" onClick={stopTrack} >Stop</span>
                    <span className="player-next" onClick={nextTrack} >Next</span>
                </div>

                <div className="player-timeline">
                    <div className="current-duration">{currentTrackTime}</div>
                    <div className="timeline">
                        <input type="range" min="0" max={totalTime} onChange={onChangeSeek} step="1" value={currentTrackTime}/>
                    </div>
                    <div className="total-duration">{totalTime}</div>
                </div>

                <div className="volume-up">
                    <div className="current-duration">vol</div>
                    <div className="vol-control">
                        <input type="range" min="0" max="100" onChange={onChangeVolume} step="1" value={volume}/>
                    </div>
                </div>
                <div className="player-display">
                    <p>Playing:</p>
                    <span className="player-current-track">{currentTrack.title}</span>
                </div>
            </MusicPlayer>
            
        </PlayerContainer>
    )
}

export default Player;
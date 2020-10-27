import React, { useState, useEffect } from 'react';

import { PlayerContainer, MusicPlayer } from './styled'

function Player() {
    const [countTrack, setCountTrack] = useState(0)
    const [currentTrack, setCurrentTrack] = useState({})

    useEffect(() => {
        setCurrentTrack(playlist[countTrack])
    },[])

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

    const playTrack =()=>{
        audio.play()
    }

    const pauseTrack =()=>{
        audio.pause()
    }

    const stopTrack =()=>{
        audio.pause()
        setCountTrack(0)
        setCurrentTrack(playlist[countTrack])
        audio.autoplay = false
    }

    const prevTrack =()=>{
        if(countTrack > 0) {
            setCountTrack(countTrack -1)
            setCurrentTrack(playlist[countTrack])
            audio.autoplay = true
        } else {
            setCountTrack(0)
            audio.autoplay = true
        }
    }
    
    const nextTrack =()=>{
        if(countTrack < playlist.length -1){
            setCountTrack(countTrack +1)
            setCurrentTrack(playlist[countTrack])
            audio.autoplay = true
        } else {
            setCountTrack(0)
            setCurrentTrack(playlist[countTrack])
            audio.autoplay = true
        }
    }

    console.log(audio)
    console.log(countTrack)
    console.log(playlist.length)

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
                <div className="player"></div>
                <div className="player-timeline">
                    <div className="player-timeline-control"></div>
                </div>
                <div className="player-display">
  Playing: <span className="player-current-track">{currentTrack.title}</span>
                </div>
            </MusicPlayer>
            
        </PlayerContainer>
    )
}

export default Player;
import React, {  useEffect, useState } from 'react';

import iconPlus from "../../Images/icons/plus.svg"
import iconHome from "../../Images/icons/home.svg"
import iconBrowse from "../../Images/icons/browse.svg"

import { ContainerSidebar, TopSideBar, Playlists, AddNewPlaylist } from './styled'
import { axiosConfig, baseUrl } from '../../Common/CommonConst';
import axios from 'axios'

import { useHistory } from 'react-router-dom';

function SideBar() {
    const history = useHistory()
    const [playlists, setPlaylist] = useState([])

    useEffect(() => {
        getPlaylists()
    },[])

    const getPlaylists = () =>{
        axios
        .get(`${baseUrl}/playlist/playlists`, axiosConfig)
        .then(response => {
            setPlaylist(response.data.result)
        })
        .catch(err => {
        console.log(err.message)
        })
    }

    const goToHomePage = () => {
        history.push("/");
    }

    const goToCreateMusicPage = () => {
        history.push("/create-music");
    }

    const goToCreatePlaylistPage = () => {
        history.push("/create-playlist");
    }
    
    return (
        <ContainerSidebar>
                <TopSideBar>
                    <div onClick={goToHomePage}>
                        <img src={iconHome} alt="icons home"/>
                        <p>Home</p>
                    </div>
                    <div>
                        <img src={iconBrowse} alt="icons Browse"/>
                        <p>Browse</p>
                    </div>
                    <div onClick={goToCreateMusicPage}>
                        <img src={iconPlus} alt="icons Browse"/>
                        <p>Create Music</p>
                    </div>
                </TopSideBar>
                <Playlists>
                        <p>PLAYLISTIS</p>
                        <AddNewPlaylist onClick={goToCreatePlaylistPage} >
                            <img src={iconPlus} alt="icons plus" />
                            <span>New Playlist</span>
                        </AddNewPlaylist>
                        <ul>
                        {playlists.map(playlist => {
                            return (
                                <li key={playlist.id}>
                                    <div>
                                        <span>{playlist.title}</span>
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                </Playlists>
        </ContainerSidebar>
    )
}

export default SideBar;
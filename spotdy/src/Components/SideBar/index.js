import React, { useContext, useEffect, useState } from 'react';
import iconHome from "../../Images/icons/home.svg"
import iconBrowse from "../../Images/icons/browse.svg"
import { ContainerSidebar, TopSideBar } from './styled'
import { axiosConfig, baseUrl } from '../../Common/CommonConst';
import axios from 'axios'

function SideBar() {
    const [playlists, setPlaylist] = useState([
        {name: "Mùsica pra limpar a casa"},
        {name: "Mùsica pra lavar louça"},
        {name: "Mùsica pra domrir"}
    ])

    // useEffect(() => {
    //     getPlaylists()
    // },[playlist])

    // const getPlaylists = () =>{
    //     axios
    //     .get(`${baseUrl}/music/playlists`, axiosConfig)
    //     .then(response => {
    //         setPlaylist(response.data.result)
    //     })
    //     .catch(err => {
    //     console.log(err.message)
    //     })
    // }
    return (
        <ContainerSidebar>
            <section>
                <TopSideBar>
                    <div>
                        <img src={iconHome} alt="icons plus" />
                        <p>Home</p>
                    </div>
                    <div>
                        <img src={iconBrowse} alt="icons plus" />
                        <p>Browse</p>
                    </div>
                </TopSideBar>
            </section>

            {/* {
                (playlist === "" || playlist === undefined)
            ?
                <div>Carregando...</div>
            : */}
                <div>
                    <ul>
                    {playlists.map(music => {
                        return (
                            <li key={music.name}>
                                <div>
                                    <span>{music.name}</span>
                                </div>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            {/* } */}
        </ContainerSidebar>
    )
}

export default SideBar;
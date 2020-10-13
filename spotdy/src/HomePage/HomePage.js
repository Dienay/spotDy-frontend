import React, { useEffect, useState } from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst';
import { ContainerHome, Main, Middle, List } from './styled'

import Header from '../Components/Header/index'
import SideBar from '../Components/SideBar/index'


function HomePage() {
    const [list, setList] = useState("")

    useEffect(() => {
        getMusics()
    },[list])

    useProtectedRoute();

    const getMusics = () =>{
        axios
        .get(`${baseUrl}/music/musics`, axiosConfig)
        .then(response => {
            setList(response.data.result)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    return (
        <ContainerHome>
            <Header />
            <Main>
                <SideBar />
                <Middle>
                    {
                        (list === "" || list === undefined)
                    ?
                        <div>Carregando...</div>
                    :
                        <List>
                            <ul>
                                <li>
                                    <div>
                                        <span>Title</span>
                                        <span>Author</span>
                                    </div>
                                </li>
                                {list.map(music => {
                                    return (
                                        <li key={music.id}>
                                            <div>
                                                <span>{music.title}</span>
                                                <span>{music.author}</span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </List>
                    }
                </Middle>
            </Main>
        </ContainerHome>
    )
}

export default HomePage;
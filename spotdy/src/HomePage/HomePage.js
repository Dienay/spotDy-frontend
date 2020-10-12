import React, { useEffect, useState } from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst';
import { ContainerHome } from './styled'


function HomePage() {
    const [list, setList] = useState("")
    
    useProtectedRoute();

    useEffect(() => {
     getMusics()
    },[list])

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
            {(list === "" || list === undefined)  ?
                <div>Carregando...</div>
            :
                <>
                    {list.map(music => {
                        return (
                            <div key={music.id}>
                                <p>{music.title}</p>
                                <p>{music.author}</p>
                            </div>
                        )
                    })}
                </>
            }
        </ContainerHome>
    )
}

export default HomePage;
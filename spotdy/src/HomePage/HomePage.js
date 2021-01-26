import React, { useEffect, useState } from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst';
import { ContainerHome, Main, Middle, Musics, Music } from './styled'

import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'
import Player from '../Components/Player/Player'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Menu from '../Images/icons/menu.svg'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

function HomePage() {
    const [musics, setMusics] = useState("")
    const [currentMusic, setCurrentMusic] = useState({})

    useEffect(() => {
        getMusics()
    },[musics])

    useProtectedRoute();

    const getMusics = () =>{
        axios
        .get(`${baseUrl}/music/musics`, axiosConfig)
        .then(response => {
            setMusics(response.data.result)
        })
        .catch(err => {
          console.log(err.message)
        })
    }

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor, music) => (
     <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List>
            <p>Esc para sair</p>
            {[
                {text: "Title: ", item: music.title},
                {text: "Author: ", item: music.author},
                {text: "Date: ", item: music.date},
                {text: "Genre: ", item: music.genre},
                {text: "Album: ", item: music.album
            }].map((text) => (
            <ListItem button key={text}>
                <span>{text.text} {text.item}</span>
            </ListItem>
            ))}
        </List>
        </div>
    );


    return (
        <ContainerHome>
            <Header />
            <Main>
                <SideBar />
                <Middle>
                    {
                        (musics === "" || musics === undefined)
                    ?
                        <div>Carregando...</div>
                    :
                        <Musics>
                            <ul>
                                <li>
                                    <div>
                                        <span>Title</span>
                                        <span>Author</span>
                                    </div>
                                </li>
                                {musics.map(music => {
                                    return (
                                        <li key={music.id}>
                                            {[music.title].map((anchor) => (
                                                <Music key={music.id}>
                                                    <span>{anchor}</span>
                                                    <span>{music.author}</span>
                                                    <React.Fragment key={anchor}>
                                                        <img onClick={toggleDrawer(anchor, true, music)} src={Menu} alt="menu" />
                                                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                                            {list(anchor,music)}
                                                        </Drawer>
                                                    </React.Fragment>
                                                </Music>
                                            ))}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Musics>
                        
                    }
                </Middle>
            </Main> 
            <Player musics={musics}/>
        </ContainerHome>
    )
}

export default HomePage;
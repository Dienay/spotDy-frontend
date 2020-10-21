import React, { useEffect, useState } from 'react';
import useProtectedRoute from '../Hooks/useProtectedRoute';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst';
import { ContainerHome, Main, Middle, Musics, Music } from './styled'

import Header from '../Components/Header/index'
import SideBar from '../Components/SideBar/index'

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
                                                <React.Fragment key={anchor}>
                                                    <Music onClick={toggleDrawer(anchor, true, music)}>
                                                        <span>{anchor}</span>
                                                        <span>{music.author}</span>
                                                    </Music>
                                                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                                    {list(anchor,music)}
                                                    </Drawer>
                                                </React.Fragment>
                                            ))}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Musics>
                        
                    }
                </Middle>
            </Main>
        </ContainerHome>
    )
}

export default HomePage;
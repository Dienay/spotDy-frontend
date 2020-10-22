import React from 'react';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst'

import useForm from '../Hooks/useForm';

import { ContainerCreate, Main, Middle, CardCreate } from './styled'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Header from '../Components/Header/Header'
import SideBar from '../Components/SideBar/SideBar'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '300px',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300,
    },
  }));

function CreatePLaylistPage() {
     const classes = useStyles();

    const { form, onChange } = useForm({title: "", subtitle: ""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSignup = () => {
        if(!form.title || !form.subtitle) {
            alert("Title and subtitle are required")
        }

        const body = {
            title: form.title,
            subtitle: form.subtitle,
        }

        axios
        .post(`${baseUrl}/playlist/create`, body, axiosConfig)
        .then(response => {
            alert("Success, playlist created")
        })
        .catch(err => {
            console.log(err.message)
            alert("Error, playlist not created")
        })
    }

    return (
        <ContainerCreate>
            <Header />
            <Main>
                <SideBar />
                <Middle>
                    <CardCreate>
                        <h2>Create Playlist</h2>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField
                                id="title"
                                label="Title"
                                variant="outlined"
                                value={form.title}
                                onChange={handleInputChange}
                                type="text"
                                name="title"
                            />
                            <TextField
                                id="subtitle"
                                label="Subtitle"
                                variant="outlined"
                                value={form.subtitle}
                                onChange={handleInputChange}
                                type="text"
                                name="subtitle"
                            />
                            <Button variant="contained" color="primary" onClick={handleSignup}>Create</Button>
                        </form>
                    </CardCreate>
                </Middle>
            </Main>
        </ContainerCreate>
    )
}

export default CreatePLaylistPage;
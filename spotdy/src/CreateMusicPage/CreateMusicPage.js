import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Common/CommonConst'

import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

import { ContainerCreate, Back, CardCreate } from './styled'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

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

function CreateMusicPage() {
   const [date, setDate] = useState("")

    const classes = useStyles();

    const history = useHistory()

    const { form, onChange } = useForm({title: "", author: "", date: "", file:"", genre: "", album: ""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    useEffect (() => {
        const date = new Date(form.date),
         day  = (date.getDate()+1).toString().padStart(2, '0'),
         month  = (date.getMonth()+1).toString().padStart(2, '0'),
         year  = date.getFullYear()
         return setDate(day+"/"+month+"/"+year)
       },[form.date])

    const handleSignup = () => {
        if(!form.title || !form.author || !form.file || !form.genre || !form.album) {
            alert("Name and Password are required")
        }

        const body = {
            title: form.title,
            author: form.author,
            date: date,
            file: form.file,
            genre: form.genre,
            album: form.album
        }

        axios
        .post(`${baseUrl}/music/create`, body, axiosConfig)
        .then(response => {
            alert("Success, music created")
        })
        .catch(err => {
            console.log(err.message)
            alert("Error, music not created")
        })
    }

    const toGoHomePage = () => {
        history.push("/")
    }
    return (
        <ContainerCreate>
            <Back>
                <Link href="#" onClick={toGoHomePage} variant="body2">
                    Back to home
                </Link>
            </Back>
            <CardCreate>
                <h2>Create Music</h2>
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
                        id="author"
                        label="Author"
                        variant="outlined"
                        value={form.author}
                        onChange={handleInputChange}
                        type="text"
                        name="author"
                    />
                    <TextField
                        id="date"
                        label="Date"
                        variant="outlined"
                        value={form.date}
                        onChange={handleInputChange}
                        type="date"
                        name="date"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="file"
                        label="File/Url"
                        variant="outlined"
                        value={form.file}
                        onChange={handleInputChange}
                        type="text"
                        name="file"
                    />
                    <TextField
                        id="genre"
                        label="Genre"
                        variant="outlined"
                        value={form.confirmpassword}
                        onChange={handleInputChange}
                        type="text"
                        name="genre"
                    />
                    <TextField
                        id="album"
                        label="Album"
                        variant="outlined"
                        value={form.confirmpassword}
                        onChange={handleInputChange}
                        type="text"
                        name="album"
                    />
                    <Button variant="contained" color="primary" onClick={handleSignup}>Create</Button>
                </form>
            </CardCreate>
        </ContainerCreate>
    )
}

export default CreateMusicPage;
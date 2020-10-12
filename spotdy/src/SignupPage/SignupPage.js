import React from 'react';
import axios from 'axios'
import { baseUrl } from '../Common/CommonConst'

import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

import { ContainerSignup, CardSignup } from './styled'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
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
  }));

function SignupPage() {
    const classes = useStyles();

    const history = useHistory()

    const { form, onChange } = useForm({name: "", email: "", nickname: "", password:"", role: "", confirmpassword: ""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSignup = () => {
        if(!form.email || !form.password) {
            alert("Name and Password are required")
        }

        if(form.email.indexOf("@") === -1){
            alert("Invalid Email")
        }

        if(form.password.length < 6){
            alert("Password must have at least 6 characters")
        }

        if(form.password !== form.confirmpassword) {
          alert("Password do not match.")
        }

        const body = {
            name: form.name,
            email: form.email,
            nickname: form.nickname,
            password: form.password,
            role: form.role
        }

        axios
        .post(`${baseUrl}/user/signup`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            history.replace("/login")
        })
        .catch(err => {
            console.log(err.message)
            alert("Invalid Information")
        })
    }

    const toGoLoginPage = () => {
        history.replace("/login")
    }
    return (
        <ContainerSignup>
            <CardSignup>
                <h2>Signup</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        value={form.name}
                        onChange={handleInputChange}
                        type="text"
                        name="name"
                    />
                    <TextField
                        id="outlined-basic"
                        label="E-mail"
                        variant="outlined"
                        value={form.email}
                        onChange={handleInputChange}
                        type="email"
                         name="email"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Nickname"
                        variant="outlined"
                        value={form.nickname}
                        onChange={handleInputChange}
                        type="text"
                        name="nickname"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        value={form.password}
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Confirm password"
                        variant="outlined"
                        value={form.confirmpassword}
                        onChange={handleInputChange}
                        type="password"
                        name="confirmpassword"
                    />
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={form.role}
                        onChange={handleInputChange}
                        name="role"
                        label="Role"
                      >
                        <MenuItem value="NORMAL">Normal</MenuItem>
                        <MenuItem value="ADMIN">Admin</MenuItem>
                      </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleSignup}>Entrar</Button>
                    <Link href="#" onClick={toGoLoginPage} variant="body2">
                        Login
                    </Link>
                </form>
            </CardSignup>
        </ContainerSignup>
    )
}

export default SignupPage;
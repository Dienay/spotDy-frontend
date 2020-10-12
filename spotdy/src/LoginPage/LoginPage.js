import React from 'react';
import axios from 'axios'
import { baseUrl } from '../Common/CommonConst'

import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

import { ContainerLogin, CardLogin } from './styled'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '250px',
      },
    },
  }));

function LoginPage() {
    const classes = useStyles();

    const { form, onChange } = useForm({email: "", password:""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const history = useHistory()

    const handleLogin = event => {
        if(!form.email || !form.password) {
            alert("Name and Password are required")
        }

        if(form.email.indexOf("@") === -1){
            alert("Invalid Email")
        }

        if(form.password.length < 6){
            alert("Password must have at least 6 characters")
        }

        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password
        }

        axios
        .post(`${baseUrl}/user/login`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            history.replace("/")
        })
        .catch(err => {
            console.log(err.message)
            alert("Invalid Information")
        })
    }

    const toGoSignupPage = () => {
        history.replace("/signup")
    }
    return (
        <ContainerLogin>
            <CardLogin>
                <h2>Login</h2>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        value={form.email}
                        onChange={handleInputChange}
                        type="email"
                         name="email"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        value={form.password}
                        onChange={handleInputChange}
                        type="password"
                        name="password"
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>Entrar</Button>
                    <Link href="#" onClick={toGoSignupPage} variant="body2">
                        Create User
                    </Link>
                </form>
            </CardLogin>
        </ContainerLogin>
    )
}

export default LoginPage;
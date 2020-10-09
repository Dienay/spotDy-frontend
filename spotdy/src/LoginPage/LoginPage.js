import React from 'react';
import axios from 'axios'

import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

import { ContainerLogin } from './styled'
import Button from '@material-ui/core/Button';

function LoginPage() {
    const baseUrl = "https://spotdy.herokuapp.com/user"

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
        .post(`${baseUrl}/login`, body)
        .then(response => {
            window.localStorage.setItem("token", response.data.token)
            history.replace("/")
        })
        .catch(err => {
            console.log(err.message)
            alert("Invalid Information")
        })
    }
    return (
        <ContainerLogin>
            <div>
                <h2>Login</h2>
                <form>
                    <input
                    value={form.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="E-mail"    
                    required
                    />
                    <input
                    value={form.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="senha"
                    required
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin}>Entrar</Button>
                </form>
            </div>
        </ContainerLogin>
    )
}

export default LoginPage;
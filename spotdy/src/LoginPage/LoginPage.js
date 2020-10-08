import React from 'react';
import axios from 'axios'

import useForm from '../Hooks/useForm';
import { useHistory } from 'react-router-dom';

import { ContainerLogin } from './styled'
import { Button } from '../Common/Styled/Button'

function LoginPage() {
    const baseUrl = "https://spotdy.herokuapp.com/user"

    const { form, onChange } = useForm({email: "", password:""})

    const handleInputChange = event => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const history = useHistory()

    const handleLogin = event => {
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
        })
    }
    return (
        <ContainerLogin>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <Button>Entrar</Button>
                </form>
            </div>
        </ContainerLogin>
    )
}

export default LoginPage;
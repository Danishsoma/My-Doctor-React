import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button} from '@material-ui/core';
import { checkEmpty } from '../../utility/genericHelpers';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        setError(false);
        setSuccess(false);
        e.preventDefault()
        try {
            await axios.post("http://my-doctors.net:8090/authentication", {
                email: email,
                password: password,
                strategy: "local"
            })
            setSuccess(true)
        }
        catch (error) {
            setError(true)
        }

    }
    function disable(){
        return error ||  checkEmpty(email) || checkEmpty(password)
    }
    return (
        <>
            <form onSubmit={handleSubmit} autoComplete={false}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <br /><br />
                <TextField id="outlined-password-input" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br /><br />
                <Button type="submit" disabled={disable()} variant="contained">Submit</Button>
                {success && <p>Login Successfully</p>}
                {error && <p>Login Fail</p>}
            </form>

        </>
    )
}

export default Login;
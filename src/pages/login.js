import axios from 'axios'
import useSWR from 'swr'
import Link from 'next/link'
import React, {useState} from "react";
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";
import {useRouter} from "next/router";




 const checkLogin = async (userEmail, userPassword, router) => {

    const password = userEmail
        const email = userPassword
        let data = ""
        return await axios.post('/api/user/login', {
            email: email,
            password: password
          }).then((response) => {
            router.push('/home')
          }).catch(function (e) {
            alert(e.response.data)
          });

    

        return (
            <>
            
                <Link href="/"><h1>Better PokeAPI</h1></Link>
                <h2>email: {email}</h2>
                <h2>password: {password}</h2>
                 <h2> {data} </h2>
                    
                
            </>
        )
            };
    
    export default function Login() {
    

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const router = useRouter()
    
    return (
        <div style= {{display: 'flex', justifyContent: "center", textAlign: "center", width: "100%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column', maxWidth: '600px', rowGap: '15px', textAlign: "center"}}>
            <h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}>
                Login Page
                </h1>
                <p style={{marginTop: "1px", width: "100%"}}>
                </p>
        <TextField id="outlined-basic" label="Email" variant="outlined" type="text"
                    name="userEmail" fullWidth={true} value={userEmail} onChange={(event) => {
            setEmail(event.target.value)
        }}
        />
        <p style={{marginTop: "1px", width: "100%"}}>
                </p>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="text"
                    name="userPassword" fullWidth={true} value={userPassword} onChange={(event) => {
            setPassword(event.target.value)
        }}
        />
            <p style={{marginTop: "1px", width: "100%"}}>
                </p>
        {}
            <Button fullWidth={true} onClick={() => {
                    return checkLogin(userPassword, userEmail, router);
                    
                }} variant="contained">Login</Button>
                </Box>
            </div>
                                                
    )
            
        
}
            

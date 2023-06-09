import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Button, Box } from '@mui/material';

export default function Home() {

  return (
    <div>
      <Head>
        <title> Home Page </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Box
        sx={{
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}> 

      <Link href="/"><h1 style={{marginTop: "150px", width: "100%", textAlign: "center"}}> Home Page </h1></Link>
      <Link href="/animal"> <button> Create Animal </button> </Link>
      <Link href="/training"> <button> Add Training Log </button> </Link>
      <Link href="/admin"> <button> Admin </button> </Link>
      
      </Box>
    </div>
  )
}

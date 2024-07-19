// const express = require('express')


// const app = express()

// app.get('/', (req, res) => res.send('Hola'))

// app.listen(3000)
// console.log('Iniciando en puerto', 3000)


import {spawn} from 'node:child_process';
import { join } from 'node:path';

const childProcess = spawn('python', ['script.py'])

childProcess.stdout.on('data', (data) => {
    console.log(Buffer.from(data).toString());
});

childProcess.on("exit", (code) => {
    console.log(`child process has been exited with code ${code}`);

    //main process exit
    process.exit()
});



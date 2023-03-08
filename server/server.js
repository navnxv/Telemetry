// Copyright 2023 Nav

'use strict';

import Express from 'express'
import CORS from 'cors'
import Path from 'path'
import HTTP from 'http'
import FileSystem from 'fs-extra'

const __dirname = Path.resolve(Path.dirname(''));

//Import classes to dealt wotj sub apis
import GameAPI from './api/GameApi.js'

const PORT = 3000;

class Server
{
    #_port; 

    constructor( api, port = PORT)
    {
        this.api = Express();
        this.router = Express.Router();

        this.#_port = port;

        let corsOptions = {
            'allowedHeaders': ['Content-Type'],
            'allowedMethods': ['GET, POST, OPTIONS'],
            'origin': '*', 
            'preflightContinue': true,
        };

        this.api
                .use( Express.json())
                .use( Express.urlencoded({ extended:false }))
                .use( Express.static( Path.join(__dirname, '..')))
                .use( CORS( corsOptions )).options('/*', this.corsHandler)
                .use('/api/game', GameAPI)
    }

    run()
    {
        this.api.set('port', this.#_port);

        this.listener = HTTP.createServer(this.api);
        this.listener.listen(this.#_port);

        this.listener.on('listening', () => this.handleListenerListening());
    }


    handleListenerListening()
    {
        const address = this.listener.address();
        let bind = typeof address === 'string'? `pipe ${address}` : `port ${address.port}`;
        console.log(`listening on ${bind}`);
    }



    corsHandler(request, response)
    {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-with');

        response.sendStatus( 200 );
    }
}

//  Running the server app
const server = new Server();
server.run();
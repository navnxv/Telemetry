
'use strict';

import Express from 'express';
const Router = Express.Router();
import Result from '../Result.js';

const myTelemetryData = [];

Router.post('/settings:id', ( request, response, next ) => {

    //request.params /settings:id --> Post('api/game/settings/234566', dataJson )
    //request.body / settings { json }
    //request.query /settings?id=XXX 

    const result = new Result( "died", 420, {} );

    result.ok();
    response.send(result.serialize());
    next();
});

Router.post('/start', ( request, response, next ) => {

    const result = new Result( "died", 420, {} );

    result.ok();
    response.send(result.serialize());
    next();
});

export default Router;
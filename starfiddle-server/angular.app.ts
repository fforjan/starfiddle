import * as express from 'express';
import * as path from 'path';

const DIST_DIR = path.join(__dirname, 'starfiddle-ui');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export class AngularApp {

    constructor(private app: express.Application) {
        app.use(express.static(DIST_DIR));

        app.get('*', (req, res) => {
            res.sendFile(HTML_FILE);
        });
    }
}
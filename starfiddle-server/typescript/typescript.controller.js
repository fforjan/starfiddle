"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const asc = require("assemblyscript/cli/asc");
class TypescriptController {
    constructor() {
        this.path = '/typescript';
        this.router = express.Router();
        this.compileRequest = (request, response) => {
            // const post: Code = request.body;
            var compilatoin = this.compile(" hello world");
            response.send(compilatoin);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.compileRequest);
    }
    compile(source) {
        return asc.compileString(source);
    }
}
exports.default = TypescriptController;

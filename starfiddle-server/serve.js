"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const typescript_controller_1 = require("./typescript/typescript.controller");
const app = new app_1.default([
    new typescript_controller_1.default(),
], 5000);
app.listen();

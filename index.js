#!/usr/bin/env node
const fs = require('fs');
const process = require('process');

const set_output = (name, value) => {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}}`);
    console.log("Set output: " + name + "=" + value);
}

const today = new Date()

const output = {
    date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
}

set_output('date', `${output.date}`)
set_output('year', output.year)
set_output('month', output.month)
set_output('day', output.day)

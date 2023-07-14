#!/usr/bin/env node
const core = require('@actions/core');

const setOutput = (name, value) => {
    core.setOutput(name, value)
    core.info(`Set output ${name}=${value}`)
}

async function run() {
    const today = new Date()

    const output = {
        date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    }

    setOutput('date', `${output.date}`)
    setOutput('year', output.year)
    setOutput('month', output.month)
    setOutput('day', output.day)
}

run()

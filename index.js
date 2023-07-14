#!/usr/bin/env node
const core = require('@actions/core');

async function run() {
    const today = new Date()

    const output = {
        date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
    }

    core.setOutput('date', `${output.date}`)
    core.setOutput('year', output.year)
    core.setOutput('month', output.month)
    core.setOutput('day', output.day)
}

run()

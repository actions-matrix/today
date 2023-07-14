#!/usr/bin/env node

const log = (...args) => console.log(...args)
const set_output = (name, value) => log(`::set-output name=${name}::${value}`)

const today = new Date()

const output = {
    date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
}

log(`Today is ${output.date}`)

set_output('date', `${output.date}`)
set_output('year', output.year)
set_output('month', output.month)
set_output('day', output.day)

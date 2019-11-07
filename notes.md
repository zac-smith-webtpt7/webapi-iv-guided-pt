# Notes

## Preparing to deploy app to heroku.

- add `process.env.PORT` index.js
- CICD Continuos integration Continuous deployment
- add to package.json `"start": "node index.js"`
- `const sortField = req.query.sortBy || 'id'`
- 12 Factor App Development
- `npm i dotenv`
- very top of index.js, top of app `require('dotenv').config()`

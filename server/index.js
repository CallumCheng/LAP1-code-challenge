//starting the app
const app = require ('./app');

const port = 3000;

app.listen(port, () => {
    console.log(`You are now listening in on port ${port}.`)
})

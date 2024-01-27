const app = require("./app.js")

const PORT = process.env.PORT||7575

require("dotenv").config();

app.listen(PORT, () => {
    console.log(`Server ${PORT} is live`)
})
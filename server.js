const app = require("./app.js")

const PORT = process.env.PORT || 5555

require("dotenv").config();

app.listen(PORT, () => {
    console.log(`Server ${PORT} is live`)
})
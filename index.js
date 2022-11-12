const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

// Middle Wares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Doctors Portal Server IS Running')
})

app.listen(port, () => {
  console.log(`Doctors Portal Server is running on port: ${port}`)
})
import express from 'express';


const app = express()


app.use(express.json())


app.get('/', (req, res) => {
  res.json({message: 'started'})
})


app.listen(3000, () => console.log('server is running at 3000'))

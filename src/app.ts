import 'dotenv/config'
import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    console.log(req)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})

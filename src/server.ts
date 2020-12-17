import express from 'express'
import { analyzeTasks } from '.'

const app = express()

app.use(
    express.urlencoded({
        extended: true
      })
)

app.use(express.text())

const host = "http://localhost"
const port = 3000

const baseUrl = `${host}:${port}`
app.get('/', function (req, res){
    res.send(`Hello! To use this api POST your data (IN TEXT FORMAT) to this endpoint \`${baseUrl}/analyze/tasks\``)
})

app.post('/analyze/tasks', function (req, res) {
        const {body} = req

    if (body === undefined || body.length < 1){
        res.status(400)
        res.send("No text was sent with your request")
    }
    else try{

        const output = analyzeTasks(body)
        res.send(output)
    }
    catch(e){
        res.status(400)
        res.send(e)
    }

  })
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Example app listening at ${baseUrl}`)
    })
  }

export default app
import express from 'express'
import cors from 'cors'
import settingRouter from './routes/setting.route'
import expenseRouter from './routes/expense.route'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/setting' ,settingRouter)
app.use('/api/expense' ,expenseRouter)

app.listen(3333, ()=>{
    console.log("c");
    
})
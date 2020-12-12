/*
 * @Description: 
 * @Date: 2020-12-12 14:11:23
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 import express, {Express, Request, Response } from 'express'
 import bodyParser from 'body-parser'
 import cors from 'cors'
 import Models from './db'
 import config from './config'
 import path from 'path'

 const app: Express = express()

 app.use(cors({
   origin: config.origin,
   credentials: true,
   allowedHeaders: "Content-Type, Authorization",
   methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS"
 }))
 app.use(express.static(path.resolve(__dirname, 'public')))
 app.use(bodyParser.urlencoded({extended: false }))
 app.use(bodyParser.json())

 app.get('/api/users', async (req: Request, res: Response) => {
   const user = await Models.UserModel.find()
   console.log('GET /api/users: ', user)
   res.json({
     code: 0,
     data: user
   })
 })

 app.post('/api/user', async (req: Request, res: Response) => {
   let user = req.body
   console.log('POST /api/user: ', JSON.stringify(user))
   user = await Models.UserModel.create(user)
   res.json({
     code: 0,
     data: user
   })
 })

 app.listen(4000, () => {
   console.log('服务器在 http://localhost:4000 端口启动')
 })
/*
 * @Description: 
 * @Date: 2020-12-12 14:46:27
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 import mongoose, { Schema, Connection, Model} from 'mongoose'
 import config from './config';
 

 const conn: Connection = mongoose.createConnection(config.dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 const UserModel = conn.model("User", new Schema({
   name: {
     type: String
   }
 }))

 export default { UserModel }
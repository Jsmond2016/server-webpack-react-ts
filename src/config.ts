/*
 * @Description: 
 * @Date: 2020-12-12 14:20:51
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */

 interface IConfig {
   secret: string
   dbUrl: string
   origin: string []
 }

 const config: IConfig = {
   secret: 'webpack-react-ts-test',
   dbUrl: 'mongodb://localhost:27017/webpack-ts',
   origin: ['http://localhost:8080']
 }

 export default config
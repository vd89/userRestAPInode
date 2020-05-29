import express from 'express';
import path from 'path';
import dbConnect from './db/dbConnect';
import router from './routers/userRoutes';

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

//router
app.use('/',router)
  
  const port  = 8082
app.listen(port,() => {
  console.log(`The server is running on port ${port} 👻 👻 👻`);
})
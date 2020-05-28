import express from 'express';
import path from 'path';
const __dirname = path.resolve();
const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.render('index')
  })
  
  const port  = 8082
app.listen(port,() => {
  console.log(`The server is running on port ${port}`);
})
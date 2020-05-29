import mongoose from 'mongoose';


const URI = `mongodb://127.0.0.1:27017/userData`;
const opt = { useNewUrlParser: true, useUnifiedTopology: true };


export default mongoose.connect(URI, opt)
.then(() => {
  console.log(`Mongo db connected to app 👻 🔻`);
}).catch((err) => {
  console.log(err);
});
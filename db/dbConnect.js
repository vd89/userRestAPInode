import mongoose from 'mongoose';
import config from 'config';

const URI = config.get('URI');
const opt = { useNewUrlParser: true, useUnifiedTopology: true };

export default mongoose
	.connect(URI, opt)
	.then(() => {
		console.log(`Mongo db connected to app 👻 🔻`);
	})
	.catch((err) => {
		console.log(err);
	});

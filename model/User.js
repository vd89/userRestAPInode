import { Schema,mongoose } from "mongoose";

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
  },
  password: {
    type: String,
    required: true
  }
});

const user = mongoose.model('User',UserSchema)
export default user

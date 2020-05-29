import mongoose,{ Schema } from "mongoose";

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
	},
	token: {
		type: String
	},
	active: {
		type: Boolean,
		default: false
	}
});

const User = mongoose.model('User',UserSchema)
export default User

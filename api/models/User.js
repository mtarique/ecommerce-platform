const mongoose = require('mongoose');
const validator = require('validator')
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		validate: [validator.isEmail, "Invalid email address"], 
		index: true,
		unique: true, 
		trim: true
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
}, {
	strict: false, 
	timestamps: true, 
	versionKey: false
});

// Hash password before saving
// userSchema.pre('save', async function (next) {
// 	if (!this.isModified('password')) return next();
// 	const salt = await bcrypt.genSalt(10);
// 	this.password = await bcrypt.hash(this.password, salt);
// 	next();
// });

module.exports = mongoose.model('user', userSchema);
const {Schema} = require("mongoose")
const bcrypt = require("bcryptjs")

let userSchema = new Schema({
    email: {
        type: String,
        required: [true, "email Address is required"]
    },
    username: {
        type: String,
        required: [true,"username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    created_at: {
        type: Date,
        default: new Date()
    }
})

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password,12)
});

module.exports = {userSchema}
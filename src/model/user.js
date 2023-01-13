const mongoose = require('mongoose');

// tạo shape data
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String

});

// model()
const User = mongoose.model('user', userSchema); // trong '' là tên bảng

module.exports = User;
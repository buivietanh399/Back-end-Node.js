const mongoose = require('mongoose');

// tạo shape data
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    }, 
    {   timestamps: true  } // bao quát 2 trường createAt, updateAt
);

// model()
const Customer = mongoose.model('customer', customerSchema); // trong '' là tên bảng

module.exports = Customer;
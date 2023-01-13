const connection = require('../config/database');
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require('../services/CRUDService');
const User = require('../model/user');
const getHomepage = async (req,res) => {
   let results = await User.find({});
   
   res.render('home.ejs', {listUsers: results});
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHoidanit  = (req,res) => {
    res.render('sample.ejs');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req,res) => {
    // console.log('params = ', req.params.id);  => req.param lấy ra tham số truyền động của route 
    let userId = req.params.id;
    let user = await User.findById(userId).exec();  // exec() : dễ dàng nhận diện lỗi hơn
    res.render('edit.ejs', {userEdit: user});
}

const postCreateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // req.body lấy thông tin của client nhập vào
    // email, name, city là nội dung của thuộc tính 'name' trong HTML

    await User.create({
        email: email,
        name: name,
        city: city
    })

    
    res.send("Create user succeed!");
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    
    await User.updateOne({_id: userId}, {email: email, name: name, city: city});
   
    res.redirect('/'); //load về trang chủ khi thành công
}

const postDeleteUser = async (req,res) => {
    let userId = req.params.id;
    let user = await User.findById(userId).exec();  //
    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    let id = req.body.userId;
    await User.deleteOne({_id: id}).exec();
    res.redirect('/');
}


module.exports = {
    getHomepage, getABC, getHoidanit, postCreateUser, getCreatePage, 
    getUpdatePage, postUpdateUser, postDeleteUser,postHandleRemoveUser
}
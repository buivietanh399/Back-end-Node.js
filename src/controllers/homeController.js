const connection = require('../config/database');
const {getAllUsers, getUserById, updateUserById, deleteUserById} = require('../services/CRUDService');

const getHomepage = async (req,res) => {
   let results = await getAllUsers();
   return res.render('home.ejs', {listUsers: results});
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
    let user = await getUserById(userId) ;
    res.render('edit.ejs', {userEdit: user});
}

const postCreateUser = async (req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // req.body lấy thông tin của client nhập vào
    // email, name, city là nội dung của thuộc tính 'name' trong HTML

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)  
         VALUES (?, ?, ?)`, [email, name, city]
    );

    res.send("Create user succeed!");
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    
    await updateUserById(email, name, city, userId);
    // res.send('Updated user succeed!!')
    res.redirect('/'); //load về trang chủ khi thành công
}

const postDeleteUser = async (req,res) => {
    let userId = req.params.id;
    let user = await getUserById(userId) ;
    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    let id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}


module.exports = {
    getHomepage, getABC, getHoidanit, postCreateUser, getCreatePage, 
    getUpdatePage, postUpdateUser, postDeleteUser,postHandleRemoveUser
}
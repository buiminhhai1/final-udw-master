const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  idUser: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: String,
    required: true
  }
});

const Account = mongoose.model('Accounts', AccountSchema,'Accounts');
module.exports = Account;

//Cannot override model once complile



// const newAccount = new Account({
//   idUser: '5d06a7f928c5c3062c19e307',
//   email: 'nvb@gmail.com',
//   password: '123456', 
//   verified:'true'});

//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newAccount.password, salt, (err, hash) => {
//             if (err) throw err;
//             newAccount.password = hash;
//             newAccount
//               .save()
//               .then(user => {
//                 // res.redirect('/auth/login');
//               })
//               .catch(err => console.log(err));
//           });
//         });

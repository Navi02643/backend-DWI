const passwordDB = require('../database/password');
const userDB = require('../database/user');
const nodemailer = require('nodemailer');

async function generateKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let key = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 4; i++) {
    key += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return key;
}

async function sendEmail(email, key) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'karlos123jun@gmail.com',
      pass: 'upstkmxkzhjefwgw',
    },
  });
  const mailOptions = {
    from: 'karlos123jun@gmail.com',
    to: email,
    subject: 'Recuperacion de contraseña',
    text: `El codigo de recupercion es el siguiente ${key} y solo es valido los siguientes 5 minutos`,
  };
  transporter.sendMail(mailOptions);
  return 0;
}

async function generatePasswordRecovery(user) {
  const codeGen = await generateKey();
  const saveKey = passwordDB.generateKey(codeGen)
  sendEmail(user.email, codeGen);
  return saveKey;
}

async function updatePassword(data){
  const findKey = await passwordDB.searchKey(data.key);
  if(!findKey) return 'Codigo incorrecto';
  const updatePassword = await userDB.updatePassword(data.id, data.password);
  if(updatePassword){
    const deleteKey = await passwordDB.deleteKey(data.key);
    if(deleteKey) return 'Se cambio la contraseña'
  }
  return 'Ocurrio un error'
}

module.exports = { generatePasswordRecovery, updatePassword }
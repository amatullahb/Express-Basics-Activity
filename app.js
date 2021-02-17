const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const ATM = require('./atm');
const atm = new ATM(1000, 10);

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/balance', (req, res) => {
    res.send(`Balance: ${atm.getCurrentBalance()}`);
});
app.get('/withdraw', (req, res) => {
    let amt = 50;
    atm.withdraw(amt);
    atm.getCurrentBalance();
    res.send(`Withdrew ${amt} <br> Balance: ${atm.getCurrentBalance()}`);
});
app.get('/deposit', (req, res) => {
    let amt = 50;
    atm.deposit(amt);
    atm.getCurrentBalance();
    res.send(`Deposited ${amt} <br> Balance: ${atm.getCurrentBalance()}`);
});

app.listen(5000, () => {
    console.log('listening at port 5000. hello world!')
});
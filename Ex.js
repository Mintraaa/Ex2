class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accounts = [];
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    verify(name, address, phone, email) {
        if (this.name === name &&
            this.address === address &&
            this.phone === phone &&
            this.email === email) {
            return true;
        } else {
            return false;
        }
    }
    getAccount() {
        return this.accounts;
    }
    createAccount(bank, accountType) {
        return bank.createAccount(accountType)
    }
}

class Account {
    account = "";
    balance = "";
    constructor(account, balance) {
        this.account = account;
        this.balance = balance;
    }
    createTransaction() {

    }
    getTransaction() {
        return this.transaction;
    }
    getBalance() {
        return this.balance;
    }
    getAccountType() {
        return this.accountType;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer() {
        this.customer = customer;
    }
}


class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name, address, code) {
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType) {
        let account;
        if (accountType === "CurrentAccount") {
            account = new CurrentAccount("654259", 10000, 2000, 0.2%)
            return account
        } else {
            account = new SavingAccount("654255",10000, 0.5%);
            return account;
        }
    }
    createCustomer(name, address, phone, email) {
        const customer = Customer("Vick", "Vick Home", "0987897897", "Miss@gmail.com")
        return customer;
    }
    createATM() {
        const atm = new ATM("bankNPRU","bankSE")
        return atm;
    }
    verify() {

    }
    createTransaction() {

    }



}


class Transaction {
    transactionId = "";
    transactionType = "";
    amount = "";
    transactionData = "";
    status = "";
    constructor(transactionId, transactionType, amount, transactionData, status) {
        this.transactionId = transactionId;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionData = transactionData;
        this.status = status;
    }
    getTransactionId() {

    }
    getTransactionType() {

    }
    getAmount() {

    }
    getTransactionDate() {

    }
    getStatus() {

    }
    setStatus() {

    }
    setTransactionType() {

    }
    setAmount() {

    }
    setTransactionDate() {

    }
}

class ATM {
    location = "";
    mangedBy = "";
    constructor(location, mangedBy) {
        this.location = location;
        this.mangedBy = mangedBy;
    }
}

class CurrentAccount {
    overdrafLimit = "";
    overdrafInterest = "";
    constructor(overdrafLimit, overdrafInterest) {
        this.overdrafLimit = overdrafLimit;
        this.overdrafInterest = overdrafInterest;
    }
    getOverdrafLimit() {

    }
    setOverdrafLimit(amount) {

    }
}

class SavingAccount {
    interestRate = "";
    constructor(interestRate) {
        this.interestRate = interestRate;
    }
    getInterestRate() {

    }
    setInterestRate(rate) {

    }
}






// --------main
const main = () => {
    //------ Customer
    const Customer = new (
        "Alice",
        "Alice house",
        "0801234567Alice@asd.com",
        "Alice@asd.com"
    );

    console.log(customer.toString());
};
main();
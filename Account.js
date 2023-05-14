class Account{

    constructor(accountNumber, owner, transactions = []) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = transactions;
    }

    balance() {
        let sum = 0
        for(let i = 0; i < this.transactions.length; i++){
            sum += this.transactions[i].amount
        }
        return sum
    }
  
    deposit(amt) {
        if (amt < 0) {
            console.log("Cannot deposit a negative amount.");
            return;
        }
        const transaction = { type: "deposit", amount: amt };
        this.transactions.push(transaction);
    }
  
    charge(payee, amt) {
        if (amt < 0) {
            console.log("Cannot charge a negative amount.");
            return;
        }
        const balance = this.balance();
        if (balance < amt) {
            console.log("Insufficient funds.");
            return;
        }
        const transaction = { type: "charge", payee, amount: amt };
        this.transactions.push(transaction);
    }
}

const account = new Account("1234567890", "John Doe")

// Test deposit method
account.deposit(100); // Deposit $100
console.log(account.balance()) // Expected output: 100

account.deposit(50); // Deposit $50
console.log(account.balance()) // Expected output: 150

account.deposit(-20); // Attempt to deposit a negative amount
console.log(account.balance()) // Expected output: 150 (no change)

// Test charge method
account.charge("Electricity Bill", 80) // Charge $80
console.log(account.balance()) // Expected output: 70

account.charge("Phone Bill", 40) // Charge $40
console.log(account.balance()) // Expected output: 30

account.charge("Groceries", 50) // Attempt to charge an amount exceeding the balance
console.log(account.balance()) // Expected output: 30 (no change)

account.charge("Internet Bill", -20) // Attempt to charge a negative amount
console.log(account.balance())
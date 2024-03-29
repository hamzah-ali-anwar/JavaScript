let myAccount = {
    name: 'Andrew Tate',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

// addIncome

let addIncome = function (account, income) {
    account.income = account.income + income
}

// resetAccount
let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}
// getAccountSummary
let getAccountSummary = function(account) {
    let balance = account.balance - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))

// Account for Andrew has $900. $1000 in income. $100 in expenses.

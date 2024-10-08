// Entry
class Entry {
    constructor(date, amount, description) {
        this.date = date
        this.amount = amount
        this.description = description
    
    }
    getFormattedAmount() {
        return `${this.amount} €`
    }
}

// Income
class Income extends Entry {
    constructor(date, amount, description) {
        super(date, amount, description);
        this.type = "income";
    }
}

// Expense
class Expense extends Entry {
    constructor(date, amount, description, paid) {
        super(date, amount, description)
        this.type = "expense";
        this.paid = paid;
    }
    getFormattedAmount() {
        return `-${this.amount} €`;
    }
}

// Budget
class Budget {
    constructor() {
        this.entries = [];
    }
    addEntry(entry){
        this.entries.push(entry);
    }
    getCurrentBalance() {
        if (this.entries.length === 0) {
            return 0;
        }
        const totalIncome = this.entries
        .filter(entry => entry.type === 'income')
        .reduce((sum, income) => sum + income.amount, 0);
        const totalExpenses = this.entries
        .filter(entry => entry.type === 'expense')
        .reduce((sum, expense) => sum + Number(expense.amount), 0);

        return totalIncome - totalExpenses;

    }

}

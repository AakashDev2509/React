import './ExpenseItem.css';

function ExpenseItem() {
    const expenseItem = "Car Insurance"
    const expenseDate = new Date();
    const expensePrice = 294.67

    return (
        <div className="expense-item">
            <div>
                {expenseDate.toISOString()}
            </div>
            <div className="expense-item__description">
                <h2>{expenseItem}</h2>
                <div className="expense-item__price">
                    ${expensePrice}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
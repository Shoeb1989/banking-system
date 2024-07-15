document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawfield = document.getElementById('Amount');
    const newWithdrawAmountString = withdrawfield.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawtotalElement = document.getElementById('Withdraw-total')
    const previousWithdrawTotalString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawtotalElement.innerText = newWithdrawTotal;

    const BalanceElement = document.getElementById('Balance-total');
    const previousBalanceTotalString = BalanceElement.innerText;
    const previousBalanceTotal = parseFloat (previousBalanceTotalString);

    const newbalanceTotal = previousBalanceTotal - newWithdrawAmount;
    previousBalanceTotal.innerText = newbalanceTotal;
})

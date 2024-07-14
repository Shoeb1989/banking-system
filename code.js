document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

     const depositTotalElement = document.getElementById('deposit-total');
     const PreviousDepositTotalString = depositTotalElement.innerText;
     const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

     const newDepositTotal = PreviousDepositTotal + newDepositAmount;
     depositTotalElement.innerText =  newDepositTotal;

})

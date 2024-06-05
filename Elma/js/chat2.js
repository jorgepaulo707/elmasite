document.getElementById('bankDetailsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const accountNumber = document.getElementById('accountNumber').value;
    const accountName = document.getElementById('accountName').value;
    const pin = document.getElementById('pin').value;

    const selectedPlan = sessionStorage.getItem('selectedPlan');
    const selectedBank = sessionStorage.getItem('selectedBank');

    document.getElementById('result').textContent = `Plano: ${selectedPlan}, Banco: ${selectedBank}, Conta: ${accountNumber}, Nome: ${accountName}, PIN: ${pin}`;
});



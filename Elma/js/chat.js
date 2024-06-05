document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.plan').forEach(plan => {
            plan.classList.remove('selected');
        });
        this.closest('.plan').classList.add('selected');
        updateConfirmButtonState();
    });
});

document.querySelectorAll('input[name="bank"]').forEach(radio => {
    radio.addEventListener('change', updateConfirmButtonState);
});

document.getElementById('confirmButton').addEventListener('click', function() {
    const selectedPlan = document.querySelector('.plan.selected').dataset.plan;
    const selectedBank = document.querySelector('input[name="bank"]:checked').value;
    document.getElementById('result').textContent = `Você escolheu o plano ${selectedPlan} e o banco ${selectedBank}.`;
});

function updateConfirmButtonState() {
    const isPlanSelected = document.querySelector('.plan.selected') !== null;
    const isBankSelected = document.querySelector('input[name="bank"]:checked') !== null;
    document.getElementById('confirmButton').disabled = !(isPlanSelected && isBankSelected);
}

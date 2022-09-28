function calcTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value
    let serviceQual = document.getElementById('servicesQual').value
    let numberPeople = document.getElementById('people').value

    if(bill == '' | serviceQual == 0){
        alert('Por favor, complete os valores!');

        return;
    };

    if(numberPeople == '' | numberPeople <= 1){
        numberPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else{
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * serviceQual) / numberPeople;
    total = total.toFixed(2);

    document.getElementById('tips').innerHTML = total;
    document.getElementById('totalTips').style.display = 'block';
};

document.getElementById('totalTips').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsForm').addEventListener('submit', calcTip);





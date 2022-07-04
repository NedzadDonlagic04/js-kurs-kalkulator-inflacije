function inflationCalculator()
{
    let checker=document.querySelector('#newDiv');

    if(checker!==null)
    {
        checker.remove();
    }

    let inflationRate=document.getElementById('inflationRate').value;
    let money=document.getElementById('money').value;
    let years=document.getElementById('years').value;

    inflationRate=parseFloat(inflationRate);
    money=parseFloat(money);
    years=parseFloat(years);

    /*
    //Used for testing
    console.log(inflationRate,typeof(inflationRate));
    console.log(money,typeof(money));
    console.log(years,typeof(years));
    */

    let worth=money+(money*(inflationRate/100));

    for(let i=1;i<years;i++)
    {
        worth+=worth*(inflationRate/100);
    }

    let resultDiv=document.createElement('div');
    resultDiv.id='newDiv';
    resultDiv.className='new-value';
    resultDiv.innerText=`Danasnjih ${money}€ vrijedi isto kao ${worth.toFixed(2)}€ za ${years} godina.`;

    document.querySelector('.container').appendChild(resultDiv);
}
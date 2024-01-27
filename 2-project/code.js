const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const display = document.querySelector('#weightType')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid input ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid input ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`

        // display underweight, overwweight or normal
        if(bmi>0 && bmi<18.6) {
            display.innerHTML = 'Underweight';
        }
        else if(bmi>=18.6 && bmi<=24.9) {
            display.innerHTML = 'Normal';
        }
        else {
            display.innerHTML = 'Overweight';
        }
    }
})
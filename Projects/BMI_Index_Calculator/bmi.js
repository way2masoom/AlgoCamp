console.log("Hello BMI Calculator");

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // to Convert the String value into Integer we used ParseInt
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // displaying the Result
    const result = document.querySelector('#result');

    // Checking the user given the valid height and weight
    if (height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a Valid heigh = ${height}`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a Valid weight = ${weight}`;
    } else {
       // Convert height to meters and calculate BMI
       const bmi=(weight/((height*height)/10000)).toFixed(2);

       // Show the final BMI result
       result.innerHTML = `<span> Your BMI is ${bmi}</span>`;
    }


});




function bmiCalculator() {
    let heightValue = document.getElementById('height').value;
    let weightValue = document.getElementById('weight').value;
    let condition = document.getElementById('condition');
    let main = document.getElementById('main');
    let description= document.getElementById('description')

   
    weightValue = parseInt(weightValue);
    heightValue = parseInt(heightValue);

   
    heightValue = heightValue / 100;

    let BMIvalue = weightValue / (heightValue * heightValue);
    console.log("BMI value " + BMIvalue);

    if (BMIvalue < 18.5) {
        condition.innerText = "Underweight";
        main.style.backgroundColor="yellow";
        description.innerText="You are underweight. This may indicate that you need to gain some healthy weight. Consider a balanced diet and consult a healthcare professional if necessary."
        
    }
    else if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
        condition.innerText = "Normal";
        condition.style.color="white";
         main.style.backgroundColor="green";
         description.innerText="Great! Your BMI is in the healthy range. Keep maintaining a balanced diet and regular exercise to stay fit"
    }
    else if (BMIvalue >= 25 && BMIvalue <= 39.9) {
        condition.innerText = "Overweight";
         main.style.backgroundColor="orange";
         description.innerText="Your BMI is above the normal range. This may increase the risk of health issues. Consider adopting regular exercise and a balanced diet to manage your weight"
    }
    else if(BMIvalue>=40) {
        condition.innerText = "Obese";
         main.style.backgroundColor="red";
         description.innerText="Your BMI indicates obesity. This can pose serious health risks. It’s important to consult a healthcare professional and work on lifestyle changes for better health."
    }
    else{
     condition.innerText="Enter Valid Values"
    }
}

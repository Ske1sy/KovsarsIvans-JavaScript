function calculateBMI() {
    // Получение введенных пользователем данных
    var weight = parseFloat(document.getElementById('weightInput').value);
    var height = parseFloat(document.getElementById('heightInput').value);

    // Расчет BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Отображение результата
    document.getElementById('result').innerHTML = bmi.toFixed(2);
}
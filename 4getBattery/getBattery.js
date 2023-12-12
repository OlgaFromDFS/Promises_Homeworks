const button = document.querySelector('.page__button');
const batteryLevel = document.querySelector('.page__battery-level');

button.addEventListener('click', function() {
    navigator.getBattery()
        .then((battery) => batteryLevel.textContent = `Уровень заряда батереи вашего компьютера равен: ${battery.level * 100}%`);    
});

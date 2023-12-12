const button = document.querySelector('.page__button');
const geolocation = document.querySelector('.page__geolocation');

new Promise(function(resolve, reject) { 
    button.addEventListener('click', function(event) {
        event.target.disabled = true;

        navigator.geolocation.getCurrentPosition(
            function(position) {
                resolve(position.coords);
            
                event.target.disabled = false;
            }, function(error) {
                reject(error);
            }
        );
    });
})
.then(({ latitude, longitude }) => {
    geolocation.textContent = `Мое местоположение: ${latitude}° с.ш., ${longitude}° в.д.`;
})
.catch((error) => {
    geolocation.textContent = 'Вы запретили доступ к вашему местоположению.';
    geolocation.classList.add('page__geolocation__error');
});

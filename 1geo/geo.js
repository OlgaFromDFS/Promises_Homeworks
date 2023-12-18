const button = document.querySelector('.container__button');
const geolocation = document.querySelector('.container__geolocation');

new Promise(function(resolve, reject) { 
    button.addEventListener('click', function(event) {
        event.target.disabled = true;

        navigator.geolocation.getCurrentPosition(
            function(position) { 
            // position = coords: {
                    //     latitude:55.1827779
                    //     longitude:82.9512189
                        //}
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
    if (error instanceof GeolocationPositionError) {
        switch (error.code) {
            case GeolocationPositionError.TIMEOUT:
                geolocation.textContent = 'Время получения геолокации истекло.';
              break
            case GeolocationPositionError.PERMISSION_DENIED:
                geolocation.textContent = 'Вы запретили доступ к вашему местоположению.';
              break
            case GeolocationPositionError.POSITION_UNAVAILABLE:
                geolocation.textContent = 'Получить местоположение не удалось.';
              break
        }
    } else {
        geolocation.textContent = 'Ошибка!';
    }
    
    geolocation.classList.add('container__geolocation-error');
});

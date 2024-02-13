function creatingTheGreeting(userName) {
    const page = document.querySelector('.page');

    page.innerHTML = '';

    const greetingForm = document.createElement('section');
    greetingForm.classList.add('greeting-form');
    page.appendChild(greetingForm);

    const greeting = document.createElement('p');
    greeting.classList.add('greeting');
    greeting.textContent = `Привет, ${userName}!`;
    greetingForm.appendChild(greeting);
}

function getUserNameByForm() {
    return new Promise(function(resolve, reject) {
        const page = document.querySelector('.page');

        const theInputForm = document.createElement('section');
        theInputForm.classList.add('input-form');
        page.appendChild(theInputForm);
    
        const heading = document.createElement('p');
        heading.classList.add('heading');
        heading.textContent = 'Введите ваше имя для входа';
        theInputForm.appendChild(heading);
    
        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute('action', '');
        theInputForm.appendChild(form);
        
        const loginEnter = document.createElement('input');
        loginEnter.classList.add('login-enter');
        loginEnter.setAttribute('placeholder', 'Логин');
        form.appendChild(loginEnter);
    
        const button = document.createElement('button');
        button.classList.add('button');
        button.setAttribute('type', 'submit');
        button.textContent = 'Войти';
        form.appendChild(button);
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            localStorage.setItem('name', loginEnter.value);

            resolve(loginEnter.value);
        });
    }); 
}

function getUserName() {
    const userName = localStorage.getItem('name');

    if(userName) {
        return Promise.resolve(userName);
    } else {
        return getUserNameByForm();
    }
}

getUserName()
    .then(userName => {
        creatingTheGreeting(userName);
    })
    .catch((error) => {
        console.error(error);
        const page = document.querySelector('.page');
        page.innerHTML = '';
        const paragraph = document.createElement('p');
        paragraph.classList.add('error-text');
        paragraph.textContent = 'Не удалось отобразить страницу.';
        page.appendChild(paragraph);
    });

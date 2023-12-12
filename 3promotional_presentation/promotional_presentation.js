function getUserName() {
    return new Promise(function(resolve) {
        if (!localStorage.getItem('name')) {
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
            form.setAttribute('action', "");
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
        } else {
            resolve(localStorage.getItem('name'));
        }
    });
}

function createTheGreeting(name) {
    const page = document.querySelector('.page');
    page.innerHTML = '';

    const greetingForm = document.createElement('section');
    greetingForm.classList.add('greeting-form');
    page.appendChild(greetingForm);

    const greeting = document.createElement('p');
    greeting.classList.add('greeting');
    greeting.textContent = `Привет, ${name}!`;
    greetingForm.appendChild(greeting);
}

getUserName()
    .then((name) => createTheGreeting(name));
    
    

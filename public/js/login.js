const loginForm = document.getElementById('login-form')

// LOGIN FUNCTIONALITY
const login = async (e) => {
  e.preventDefault()

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!username) {
    showInvalid('login-username');
  }

  if (!password) {
    showInvalid('login-password');
  }

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username, password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    if (response.ok) {
      document.location.replace('/forum');
    } else {
      alert(response.statusText);
    }
  }
}

const showInvalid = (elementName) => {
  const element = document.getElementById(elementName)
  // sets the border of the input to be red
  element.setAttribute('class', `${element.getAttribute('class')} border-danger`);
  // grabs the parent element of the input box
  const parentDiv = element.parentElement;
  // creates a new <small> element
  const small = document.createElement('small');
  const newLine = document.createElement('br');
  // sets the classes and text of the <small> object appropriately
  small.setAttribute('class', 'form-text text-danger');
  small.textContent = 'This field cannot be left blank';
  // appends the new <small> element to the page
  parentDiv.appendChild(newLine);
  parentDiv.appendChild(small);
}



loginForm.addEventListener('submit', login);


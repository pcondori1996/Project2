const submitButton = document.getElementById('submitButton');

const resetEmail = async (event) => {
    const email = document.getElementById('emailInput').value.trim();

    const response = await fetch('/api/mail', {
        method: 'PUT',
        body: JSON.stringify({
            email 
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    if (response.ok) {
        showSent('emailInput');
    } else {
        alert(response.statusText);
    }
}

const showSent = (elementName) => {
    const element = document.getElementById(elementName)
  // sets the border of the input to be red
  element.setAttribute('class', `${element.getAttribute('class')} border-success`);
  // grabs the parent element of the input box
  const parentDiv = element.parentElement;
  // creates a new <small> element
  const small = document.createElement('small');
  const newLine = document.createElement('br');
  // sets the classes and text of the <small> object appropriately
  small.setAttribute('class', 'form-text text-success');
  small.textContent = 'Recovery email sent';
  // appends the new <small> element to the page
  parentDiv.appendChild(newLine);
  parentDiv.appendChild(small);
}

submitButton.addEventListener('click', resetEmail);
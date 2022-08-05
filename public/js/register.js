// Function to register user
const registerForm = document.getElementById('register-form')

const register = async(e) => {
    e.preventDefault()

    const username = document.getElementById('register-username').value.trim()
    const password = document.getElementById('register-password').value.trim()
    const email = document.getElementById('register-email').value.trim()

    if(username && password && email) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username,password,email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        if(response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText)
        }
    }
}

registerForm.addEventListener('submit', register)
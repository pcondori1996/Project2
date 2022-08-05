// Function for logging users out
const logout = async() => {
    const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
    });

    

    if (res.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    }
};

document.querySelector('#logout').addEventListener('click', logout);
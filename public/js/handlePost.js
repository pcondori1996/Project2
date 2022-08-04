const submitButton = document.getElementById('submitButton');
const dropdownOptions = document.getElementById('options');

const createPost = async(event) => {
    event.preventDefault();

    // grabs all of the user input
    const title = document.getElementById('titleInput').value.trim();
    const content = document.getElementById('contentInput').value.trim();
    const category = document.getElementById('dropdownMenuButton').textContent.trim();

    if (!title) {
        // sets the border of the input to be red
        document.getElementById('titleInput').setAttribute('class', 'form-control border-danger');
        // grabs the parent element of the input box
        const parentDiv = document.getElementById('titleInput').parentElement;
        // creates a new <small> element
        const small = document.createElement('small');
        // sets the classes and text of the <small> object appropriately
        small.setAttribute('class', 'form-text text-danger');
        small.textContent = 'This field cannot be left blank';
        // appends the new <small> element to the page
        parentDiv.appendChild(small);
    }

    if (category === 'Categories') {
        //sets the border of the category box to be red
       document.getElementById('dropdownMenuButton')
        .setAttribute('class','btn btn-light dropdown-toggle border-danger');
        // grabs the parent element of the category box
        const parentDiv = document.getElementById('dropdownMenuButton').parentElement;
        // creates a new <small> element
        const small = document.createElement('small');
        // sets the classes and text of the <small> object appropriately
        small.setAttribute('class', 'form-text text-danger');
        small.textContent = 'You must pick the category';
        // appends the new <small> element to the page
        parentDiv.appendChild(small);
    }

    // sends a POST request to append the table
    if (title && category !== 'Categories') {
        if (document.location.pathname === '/writepost') {
            // POST request that sends the information to the api
            const response = await fetch('/api/posts/', {
                method: 'POST',
                body: JSON.stringify({
                    title, content, category
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (response.ok) {
                document.location.replace('/forum');
            } else {
                alert(response.statusText);
            }
        } else {
            const path = document.location.pathname;
            const postId = path.substring(10, path.length);

            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title, content, category,
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            if (response.ok) {
                document.location.replace('/forum');
            } else {
                alert(response.statusText);
            }
        }
    }

}

// sets the dropdown to the appropriate value of the button clicked
const setCategory = async(event) => {
    event.preventDefault();
    // ensures that a single button has been clicked
    if (event.target.getAttribute('class') !== 'dropdown-item') return;
    const categoriesButton = document.getElementById('dropdownMenuButton');
    categoriesButton.textContent = event.target.textContent.trim();
}

dropdownOptions.addEventListener('click', setCategory);
submitButton.addEventListener('click', createPost);
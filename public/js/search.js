// Function to search for items
const searchbutton = document.getElementById('searchBtn');
const dropdownButton = document.getElementById('searchItems1');

const search = async (event) => {
    event.preventDefault();

    const category = document.getElementById('searchOption1').textContent.trim();
    const user = document.getElementById('searchOption2').value.trim()

    if (category !== 'Choose Category' && user) {
        document.location.replace(`/search?user=${user}&category=${category}`)
    } else if (user) {
    document.location.replace(`/search?user=${user}`);
    } else if (category !== 'Choose Category') {
        document.location.replace(`/search?category=${category}`);
    }
}

const setCategory = async(event) => {
    event.preventDefault();
    // ensures that a single button has been clicked
    if (event.target.getAttribute('class') !== 'dropdown-item') return;
    const categoriesButton = document.getElementById('searchOption1');
    categoriesButton.textContent = event.target.textContent.trim();
}

dropdownButton.addEventListener('click', setCategory);
searchbutton.addEventListener('click', search);
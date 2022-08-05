// Functions for profile page
const allPosts = document.getElementById('posts');

const click = async(event) => {
    if (event.target.getAttribute('class').includes('updateButton')) {
        const postNum = event.target.getAttribute('data-postNum');
        document.location.replace(`/editpost/${postNum}`);
    }
}

allPosts.addEventListener('click', click);
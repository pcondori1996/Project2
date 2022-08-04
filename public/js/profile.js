const allPosts = document.getElementById('posts');
console.log(allPosts);

const click = async(event) => {
    if (event.target.getAttribute('class').includes('updateButton')) {
        const postNum = event.target.getAttribute('data-postNum');
        document.location.replace(`/editpost/${postNum}`);
    }
}

allPosts.addEventListener('click', click);
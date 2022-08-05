
console.log('testing')

const commentForm = document.getElementById('comment-form')
const postId = commentForm.getAttribute('data-post')

const addComment = async (e) => {
    e.preventDefault()

    const content = document.getElementById('comment-content').value
    


    if(content) {
        const response = await fetch('/api/replies/', {
            method: 'POST',
            body: JSON.stringify({content,postId}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        if(response.ok) {
            document.location.reload()
        }
    }
}

commentForm.addEventListener('submit', addComment)
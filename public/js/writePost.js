const SumbitSearch = document.getElementById('searchSubmit')

const valueOFDD = document.querySelector('#CategoryOption').value



const search = async (e) => {
    e.preventDefault()

    const dropDownV = document.querySelector('#CategoryOption').value
    const titleText = document.getElementById('TitleH').value
    const descripText = document.getElementById('DescriptionValue').value
    const urlText = document.getElementById('URLValue').value.


        if(dropDownV && titleText && descriptText) {
            const response = await fetch('/api/users/postRoutes', {
                method: 'POST',
                body: JSON.stringify({
                    title, content, descripText, url,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

}

SumbitSearch.addEventListener('submit', submit);
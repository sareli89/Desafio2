// PATCH actualizar datos Fetch
const updateUserFetch =  (objPost, idPost) => {
    fetch(
       // `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, 
        {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(objPost)
        }
    ).then( (res)=> {
        return res.json()
    }).then ( (res) => {
        console.log(res)
        document.querySelector('#alert__response').classList.remove('d-none')
    })


}


let update__post = document.querySelector('#update__post')
update__post.addEventListener('click', () => {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let timetoread = document.querySelector('#timetoread').value
    let resume = document.querySelector('#resume').value

    if(
        title !== '' &&
        author !== '' &&  
        timetoread !== '' &&
        resume !== ''
    ){
        let idPost = location.search.slice(8)
        let postToUpdate = {
            title: title,
            author: author,
            timetoread: timetoread,
            resume: resume
        }
    
        // updateUser(postToUpdate, idPost )
        updateUserFetch(postToUpdate, idPost )
    } else {
        alert('Algunos datos estan vacios')
    }

})

// DELETE eliminar post

let delete__post = document.getElementById('delete__post')
delete__post.addEventListener('click', () => {
    let idPost = location.search.slice(8)
    const xhttp = new XMLHttpRequest()
    xhttp.open( "DELETE" , `https://genjs-292ac-default-rtdb.firebaseio.com/posts/${idPost}.json`, true)
    xhttp.onload = function(data) {
        if(data.target.status === 200){
            location.replace('http://127.0.0.1:5500/')
            // document.getElementById('alert__response').classList.remove('d-none')
        }
    }
    xhttp.send() 
})

const token = localStorage.getItem('token')

let createPost = document.querySelector('#send_post')
createPost.addEventListener('click', () => {
    if(token == null) {
        alert('No estas logueado')
        location.replace('login.html')
        return
    }

    let newTitulo = document.querySelector('#title').value    
    let newResume = document.querySelector('#resume').value 
    let newUrlImage = document.querySelector('#urlImage').value
    let newAuthor = document.querySelector('#author').value    
    let newUrlImgAutor = document.querySelector('#urlImageAuthor').value    
    let newTimetoRead = document.querySelector('#timetoread').value
    let newTag = document.querySelector('#tag').value

    // if(
    //     newTitulo != '' &&
    //     newResume != '' &&
    //     newUrlImage != '' &&        
    //     newAuthor != '' &&
    //     newUrlImage != '' &&
    //     newTimetoRead != '' &&
    //     newTag != ''
    //  ) {
    let newArticle = {
        title: newTitulo,
        resume: newResume,
        urlImage: newUrlImage,       
        author: newAuthor,
        urlImageAuthor: newUrlImgAutor,
        timetoread: newTimetoRead,
        tag: newTag
    }

        fetch('http://localhost:8080/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newArticle)
        })
        .then((response) => {
            if(response.ok == false){
                alert('No has iniciado sesión')
                location.replace('login.html')
                return
            }
            location.replace('index.html')
        })
        .catch(error => {
            console.log(error)
        })
            
     
     alert('Se deben llenar todos los campos')
})

// var date = '2022-01-14T02:48:35.433Z'
// var dateNew = new Date(date)
// var months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let month = dateNew.getMonth()
// let formatDate = months[month] +', '+ dateNew.getDate()

// const createPost = (objPost) => {
//     $.post('https://postsmedium-default-rtdb.firebaseio.com/posts/.json', JSON.stringify(objPost), (newPost) => {
//         $('#title').val('')
//         $('#resume').val('')
//         $('#urlImage').val('')
//         $('#author').val('')
//         $('#urlImageAuthor').val('')
//         $('#timetoread').val('')
//         $('#tag').val('')
//         $('#date').val('')
//         $('#post_id').html(newPost.name)
//         $('#alert_response').removeClass('d-none')
//     })   
// }

// $('#send_post').click(() => {
//     let title = $('#title').val()
//     let resume = $('#resume').val()
//     let urlImage = $('#urlImage').val()
//     let author = $('#author').val()
//     let urlImageAuthor = $('#urlImageAuthor').val()
//     let timetoread = $('#timetoread').val()
//     let tag = $('#tag').val()
//     // let date = $('#date').val()
        
//     if(
//         title !== '' &&
//         resume !== '' &&
//         urlImage !== '' &&
//         author !== '' &&  
//         urlImageAuthor !== '' &&  
//         timetoread !== '' &&
//         tag !== '' 
//     ){
//         let objPost = {
//             title: title,
//             resume: resume,
//             urlImage: urlImage,
//             author: author,
//             urlImageAuthor: urlImageAuthor,
//             timetoread: timetoread,
//             tag: tag,
//             date: formatDate
//         }

//         createPost(objPost)
//     } else {
//         alert('Algunos datos estan vacios')
//     }

// })
const token = localStorage.getItem('token')
// var date = '2022-01-14T02:48:35.433Z'
// var dateNew = new Date(date)
// var months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// let month = dateNew.getMonth()
// let formatDate = months[month] +', '+ dateNew.getDate()

// PATCH actualizar datos Fetch
// 
let idPost = location.search.slice(8)

fetch(`http://localhost:8080/articles/${idPost}`, {
    method: 'GET'
})
.then(response => response.json())
.then(json => {
    const article = json.article

    console.log(article)
        $('#title').val(article.title)
        $('#resume').val(article.resume)
        $('#urlImage').val(article.urlImage)
        $('#author').val(article.author)
        $('#urlImageAuthor').val(article.urlImageAuthor)
        $('#timetoread').val(article.timetoread)
        $('#tag').val(article.tag)
        $('#date').val(article.date)

})



$('#update_post').click(() => {
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
    let newDate = document.querySelector('#date').value

    // if(
    //     newTitulo != '' &&
    //     newAbstract != '' &&
    //     newAutor != '' &&        
    //     newTiempoLectura != '' &&
    //     newImagenPost != '' &&
    //     newContenidoPost != ''
    //  ){
    let newPostUpdate = {
        title: newTitulo,
        resume: newResume,
        urlImage: newUrlImage,       
        author: newAuthor,
        urlImageAuthor: newUrlImgAutor,
        timetoread: newTimetoRead,
        tag: newTag,
        date: newDate
    }


    fetch(`http://localhost:8080/articles/${idPost}`, {
        method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(newPostUpdate)
})
.then((response) => {
    if(response.ok == false) {
    alert('Sesión expirada')
    location.replace('login.html')
    return
    }
    location.replace('index.html')
   
})
.catch(error => console.error('Error de actualización: ', error))


    
})
//Delete
$('#delete_post').click(() => {
    let idPost = location.search.slice(8)
    fetch(`http://localhost:8080/articles/${idPost}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        } 
    })
    .then((response) => {
        if(response.ok == false) {
            alert('Sesión expirada')
            location.replace('login.html')
            return
            }
            location.replace('index.html')
    })
    .catch(error => console.error('Delete Article: ', error))
})

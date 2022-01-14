// PATCH actualizar datos Fetch
// 
let idPost = location.search.slice(8)
$.ajax({
    url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`
}).done((post) => {
        // $('#title').val(post.title)
        // $('#author').val(post.author)
        // $('#timetoread').val(post.timetoread)
        // $('#resume').val(post.resume)
        $('#title').val('')
        $('#resume').val('')
        $('#urlImage').val('')
        $('#author').val('')
        $('#urlImageAuthor').val('')
        $('#timetoread').val('')
        $('#tag').val('')
        $('#date').val('')

})
const updatePost = (upObject, idPost) => {
    $.ajax({
        method: 'PATCH',
        url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        data: JSON.stringify(upObject)
    }).done(() => {
        $('#alert__response').removeClass('d-none')
    })
}
$('#update_post').click(() => {
    let title = $('#title').val()
    let resume = $('#resume').val()
    let urlImage = $('#urlImage').val()
    let author = $('#author').val()
    let urlImageAuthor = $('#urlImageAuthor').val()
    let timetoread = $('#timetoread').val()
    let tag = $('#tag').val()
    let date = $('#date').val()

    if(title !== '' &&
    resume !== '' &&
    urlImage !== '' &&
    author !== '' &&  
    urlImageAuthor !== '' &&  
    timetoread !== '' &&
    tag !== '' &&
    date !== ''

    ){
        let idPost = location.search.slice(8)
        let upObject = {
            title: title,
            resume: resume,
            urlImage: urlImage,
            author: author,
            urlImageAuthor: urlImageAuthor,
            timetoread: timetoread,
            tag: tag,
            date: date

        }
        updatePost(upObject, idPost)
    } else {
        alert('Algunos datos estan vacios')
    }
})
//Delete
$('#delete_post').click( () => {
    let idPost = location.search.slice(8)
    $.ajax({
        method: 'DELETE',
        url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`
    }).done(() => {
        location.replace('http://127.0.0.1:5500/')
    })
})
// PATCH actualizar datos Fetch
// 
let idPost = location.search.slice(8)
$.ajax({
    url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`
}).done((post) => {

    console.log(post)
        $('#title').val(post.title)
        $('#resume').val(post.resume)
        $('#urlImage').val(post.urlImage)
        $('#author').val(post.author)
        $('#urlImageAuthor').val(post.urlImageAuthor)
        $('#timetoread').val(post.timetoread)
        $('#tag').val(post.tag)
        $('#date').val(post.date)

})
const updatePost = (upObject, idPost) => {
    $.ajax({
        method: 'PATCH',
        url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`,
        data: JSON.stringify(upObject)
    }).done(() => {

        $('#alert_response').removeClass('d-none')
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


    if(title !== '' &&
    resume !== '' &&
    urlImage !== '' &&
    author !== '' &&  
    urlImageAuthor !== '' &&  
    timetoread !== '' &&
    tag !== '' 


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
            date: new Date()


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

        location.replace('/index.html')

    })
})

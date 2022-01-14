var date = '2022-01-14T02:48:35.433Z'
var dateNew = new Date(date)
var months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = dateNew.getMonth()
let formatDate = months[month] +', '+ dateNew.getDate()

const createPost = (objPost) => {
    $.post('https://postsmedium-default-rtdb.firebaseio.com/posts/.json', JSON.stringify(objPost), (newPost) => {
        $('#title').val('')
        $('#resume').val('')
        $('#urlImage').val('')
        $('#author').val('')
        $('#urlImageAuthor').val('')
        $('#timetoread').val('')
        $('#tag').val('')
        $('#date').val('')
        $('#post_id').html(newPost.name)
        $('#alert_response').removeClass('d-none')
    })   
}

$('#send_post').click(() => {
    let title = $('#title').val()
    let resume = $('#resume').val()
    let urlImage = $('#urlImage').val()
    let author = $('#author').val()
    let urlImageAuthor = $('#urlImageAuthor').val()
    let timetoread = $('#timetoread').val()
    let tag = $('#tag').val()
    // let date = $('#date').val()
        
    if(
        title !== '' &&
        resume !== '' &&
        urlImage !== '' &&
        author !== '' &&  
        urlImageAuthor !== '' &&  
        timetoread !== '' &&
        tag !== '' 
    ){
        let objPost = {
            title: title,
            resume: resume,
            urlImage: urlImage,
            author: author,
            urlImageAuthor: urlImageAuthor,
            timetoread: timetoread,
            tag: tag,
            date: formatDate
        }

        createPost(objPost)
    } else {
        alert('Algunos datos estan vacios')
    }

})
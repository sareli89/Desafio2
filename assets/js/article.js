let idPost = location.search.slice(8)
$.ajax({
    url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`
}).done((post) => {
        let article = ''
        article += `
        <div class="card border-0 mb-3">
                    <h1 class="mt-5 mb-3 title">${post.title}</h1>
                    <div class="col col-md-8">
                        
                    </div>
                    
                    <div class="row g-0">
                        <div class="col-1">
                            <img src="${post.urlImageAuthor}" class="img-fluid rounded-circle author-img m-1" alt="Author">
                        </div>
                        
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title author">${post.author}</h5>
                            <p class="card-text"><small class="text-muted date">${post.date}<small class="text-muted timetoread">  ${post.timetoread}<i class="fas fa-star"></i></small></small></p>
                            </div>
                            <div class="col d-md=flex d-md-justify-content-end">
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook"></i>
                                <i class="fas fa-link"></i>
                                <i class="far fa-bookmark"></i>
                                <i class="far fa-window-minimize"></i>    
                            </div>
                        </div> 
                    </div>
                </div>
                <div>
                    <div class="col mb-2">
                        <img src="${post.urlImage}"  class="img-resposive w-100 mb-3" alt="">
                    </div>
                    
                    <p class="mb-5">${post.resume}</p>
                   
                </div>
        `
    $('#update_post').html(`<a href="update.html?idpost=${idPost}">Edit</a>`)
    $('.title').html(`${post.title}`)
    $('.card_article').html(article)
})

$('.back_button').click(() =>{
    location.replace('http://127.0.0.1:5500/')
})

// let idPost = location.search.slice(8)
// $.ajax({
//     url: `https://postsmedium-default-rtdb.firebaseio.com/posts/${idPost}.json`
// }).done((post) => {
//     let article = ''
//     for(view in post) {
//         let {title, author, resume, timetoread, date, tag, urlImageAuthor, urlImage} = post[view]
//         article += `
//         <div class="card border-0 mb-3">
//                     <h1 class="mt-5 mb-3">${title}</h1>
//                     <div class="col col-md-8">
                        
//                     </div>
                    
//                     <div class="row g-0">
//                         <div class="col-1">
//                             <img src="${urlImageAuthor}" class="img-fluid rounded-circle author-img m-1" alt="Author">
//                         </div>
                        
//                         <div class="col-md-8">
//                             <div class="card-body">
//                             <h5 class="card-title">${author}</h5>
//                             <p class="card-text"><small class="text-muted">${date}<small class="text-muted">${timetoread}<i class="fas fa-star"></i></small></small></p>
//                             </div>
//                             <div class="col d-md=flex d-md-justify-content-end">
//                                 <i class="fab fa-twitter"></i>
//                                 <i class="fab fa-facebook"></i>
//                                 <i class="fas fa-link"></i>
//                                 <i class="far fa-bookmark"></i>
//                                 <i class="far fa-window-minimize"></i>    
//                             </div>
//                         </div> 
//                     </div>
//                 </div>
//                 <div>
//                     <div class="col">
//                         <img src="${urlImage}"  class="img-resposive w-100 mb-3" alt="">
//                     </div>
                    
//                     <p class="mb-1">${resume}</p>
                   
//                 </div>
//         `
//     }
//     $('.card_article').html(article)
// })

// $('.back_button').click(() =>{
//     location.replace('http://127.0.0.1:5500/')
// })
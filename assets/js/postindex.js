$.get('https://postsmedium-default-rtdb.firebaseio.com/posts/.json', (listpost) => {
    let template = ''
    var postArray = Object.keys(listpost).reverse()

    for(let post of postArray) {
        let {title, author, resume, timetoread, date, tag, urlImageAuthor, urlImage} = listpost[post]

        template += `
        <article class="card border-0">
            <div class="d-flex flex-row bd-highlight ms-3">
                <div class="d-flex flex-row">
                    <img width="20" height="20"src="${urlImageAuthor}" alt="Autor Image"    class="rounded-pill">
                </div>
                <div class="d-flex flex-row ms-2">
                    <h6>${author}</h6>
                </div>
            </div>
            <div class="row flex-row">
            <div class="col-8">
                <div class="card-body">
                <a href="article.html?idpost=${post}" class="text-dark"><h2>${title}</h2></a>
                <a href="article.html?idpost=${post}" class="text-dark"><p class="card-text overflow-auto text-muted d-none d-md-block">${resume.substring(0,110)}...</p></a>
                
                <ul class="list-inline">                    
                    <li class="list-inline-item text-muted">${date}</li>
                    <li class="list-inline-item text-muted">${timetoread}</li>
                    <li class="list-inline-item rounded-pill p-2 text-muted">${tag}</li>
                    <li class="list-inline-item text-muted bg-">Selected For You.</li>
                    <button class="btn btn-outline-secondary border-0" style="background-color: white"> 
                        <img src="/images/SVG/bookmark_border_black_24dp.svg" alt="">
                    </button>
                    <button class="btn btn-outline-secondary border-0" style="background-color: white"> 
                        <img src="/images/SVG/more_horiz_black_24dp.svg" alt="">
                    </button>
                    </ul>
                </div>
            </div>
            <div class="col-4 d-flex align-items-center">
                <a href="article.html?idpost=${post}" style="background-image: url('${urlImage}');" class="img-post"></a>
            </div>
            </div>
        </article>
        `
    }
    $('.cards_list').html(template)
})

$('.back_button').click(() =>{
    location.replace('/')
})
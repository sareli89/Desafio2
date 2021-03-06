fetch('http://localhost:8080/articles', {
    method: 'GET',
})
.then(response => response.json())
.then(json => {
    const articles = json.articles
       
    let template = ''

    articles.forEach(article => {
        
        let htmlTemplate = `
        <article class="card border-0">
            <div class="d-flex flex-row bd-highlight ms-3">
                <div class="d-flex flex-row">
                    <img width="20" height="20"src="${article.urlImageAuthor}" alt="Autor Image"    class="rounded-pill">
                </div>
                <div class="d-flex flex-row ms-2">
                    <h6>${article.author}</h6>
                </div>
            </div>
            <div class="row flex-row">
            <div class="col-8">
                <div class="card-body">
                <a href="article.html?idpost=${article._id}" class="text-dark"><h2>${article.title}</h2></a>
                <a href="article.html?idpost=${article._id}" class="text-dark"><p class="card-text overflow-auto text-muted d-none d-md-block">${article.resume.substring(0,110)}...</p></a>
                
                <ul class="list-inline">                    
                    <li class="list-inline-item text-muted">${article.date}</li>
                    <li class="list-inline-item text-muted">${article.timetoread}</li>
                    <li class="list-inline-item rounded-pill p-2 text-muted">${article.tag}</li>
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
                <a href="article.html?idpost=${article._id}" style="background-image: url('${article.urlImage}');" class="img-post"></a>
            </div>
            </div>
        </article>
        `
        template += htmlTemplate
    })

    document.getElementById('content').innerHTML = template
})
.catch(error => {
    console.error('Get posts error: ', error)
})

$('#newpost').click(() => {
    location.replace('newPost.html')
})
$('#login').click(() => {
    location.replace('login.html')
})
$('.back_button').click(() =>{
    location.replace('http://127.0.0.1:5500/')
})
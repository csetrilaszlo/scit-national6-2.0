console.log('JavaScript - AJAX');
console.log('CRUD Operation - Read');

const articleListHtml = document.querySelector('.article-list');

document.getElementById('get-data').addEventListener('click', getData);

function getData(){
    fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONResponse);

//console.log('After Fetch');
}

function handleFetchResponse(response) {
    console.log('response', response);
    return response.json();
}

function useJSONResponse(json){
    console.log(json);
    renderArticles(json);
}

//scriere in html
function renderArticles(articleList) {
    articleListHtml.innerText = "";
    for (const articleData of articleList) {
        console.log(articleData);
        renderArticle(articleData);
    }
}

function renderArticle(articleData){
    const article = document.createElement('div');
    const articleTitle = document.createElement('h3');
    const articleContent = document.createElement('p');
    const removeButton = document.createElement('button');

    article.appendChild(articleTitle);
    article.appendChild(articleContent);
    article.appendChild(removeButton);

    removeButton.addEventListener('click', function(){
        article.remove();
    })

    articleListHtml.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;
    removeButton.innerText = "remove article";
}

// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log('card data: ', res.data.articles);
        console.log(res);
        let articles = res.data.articles;
        for (topic in articles) {
            articles[topic].forEach(article => {
                entry.append(Card(article));
            });
        }
    })
    .catch(err => console.log('API is not working, try again later', err));

function Card(article) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');
    //card
    card.classList.add('card');
    //headline
    headline.classList.add('headline');
    headline.textContent = article.headline;
    //author info
    authorContainer.classList.add('author');
    imageContainer.classList.add('image-container');
    authorImg.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`;
    //put elements together in order
    card.append(
        headline,
        imageContainer
    );
    authorContainer.append(
        imageContainer,
        authorName
    );
    imageContainer.append(authorImg);

    return card;
}

const entry = document.querySelector('.cards-container');
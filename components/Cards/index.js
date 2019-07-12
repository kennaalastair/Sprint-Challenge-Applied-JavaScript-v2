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
        res.data.articles.forEach(article => {
            articles.append(Card(article));
            
        })
    })
    .catch(err => console.log('API is not working, try again later', err));

function Card(article) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');

    const author = document.createElement('div');
    author.classList.add('author');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const avatar = document.createElement('img');

    const authorName = document.createElement('span');
    // authorName.textContent = `By ${}`;

    card.append(
        headline,
        author
    );
    author.append(
        imageContainer,
        authorName
    );
    imageContainer.append(avatar);

    return card;
}

const articles = document.querySelector('.cards-container');
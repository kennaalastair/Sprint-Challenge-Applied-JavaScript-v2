// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log('topic data: ', res.data.topics);
        res.data.topics.forEach(topic => {
            topics.appendChild(Tab(topic));
        });
    })
    .catch(err => console.log('API is not working, try again later', err));

function Tab(topic) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic;
    return tab;
}

const topics = document.querySelector('.topics');
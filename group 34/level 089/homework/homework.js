const cardsData = [
    { title: 'Suicide Squad', number: 85, image: '/group 34/level 089/homework/photos/movie 1.jpg' },
    { title: 'The Kissing Booth', number: 65, image: '/group 34/level 089/homework/photos/movie 2.jpg' },
    { title: 'The Cloverfield Paradox', number: 75, image: '/group 34/level 089/homework/photos/movie 3.jpg' },
    { title: 'Guardians Of The Galaxy Vol. 2', number: 55, image: '/group 34/level 089/homework/photos/movie 4.jpg' },
    { title: 'The Jungle Book', number: 95, image: '/group 34/level 089/homework/photos/movie 5.jpg' },
    { title: 'The Secret Life Of Walter Mitty', number: 45, image: '/group 34/level 089/homework/photos/movie 6.jpg' },
    { title: 'The Dark Knight', number: 70, image: '/group 34/level 089/homework/photos/movie 7.jpg' },
    { title: 'Inception', number: 90, image: '/group 34/level 089/homework/photos/movie 8.jpg' },
    { title: 'The Matrix', number: 60, image: '/group 34/level 089/homework/photos/movie 9.jpg' },
    { title: 'The Shawshank Redemption', number: 50, image: '/group 34/level 089/homework/photos/movie 10.jpg' },
    { title: 'Schindlers List', number: 70, image: '/group 34/level 089/homework/photos/movie 11.jpg' },
    { title: 'Forrest Gump', number: 65, image: '/group 34/level 089/homework/photos/movie 12.jpg' }
  ];

  const cardsContainer = document.getElementById('cards');

  function renderCards(data) {
    cardsContainer.innerHTML = '';
    data.forEach(card => {
      cardsContainer.innerHTML += `
        <div class="card">
          <img src="${card.image}" alt="${card.title}">
          <h2>${card.title}</h2>
          <p class="number">${card.number}</p>
        </div>
      `;
    });
  }

  function filterBelowAverage() {
    const average = cardsData.reduce((sum, card) => sum + card.number, 0) / cardsData.length;
    const filtered = cardsData.filter(card => card.number >= average);
    renderCards(filtered);
  }

  function sortAscending() {
    const sorted = [...cardsData].sort((a, b) => a.number - b.number);
    renderCards(sorted);
  }

  function sortDescending() {
    const sorted = [...cardsData].sort((a, b) => b.number - a.number);
    renderCards(sorted);
  }

  function sortRandom() {
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    renderCards(shuffled);
  }

  renderCards(cardsData);
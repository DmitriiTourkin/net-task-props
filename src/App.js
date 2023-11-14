function FilmListing() {
  const films = [
    {id: 1, rating: 3},
    {id: 2, rating: 5},
    {id: 3, rating: 0},
    {id: 4, rating: 4},
    {id: 5, rating: 3},
    {id: 6, rating: 2},
    {id: 7, rating: 6},
  ];

  return (
      <div className="films-block">
          {films.map((film) => (
              <div id={film.id} className="film-card">
                  <h4>Название фильма</h4>
                  <ul className="card-body-stars u-clearfix">
                    <Stars rating={film.rating}/>
                  </ul>
              </div>
          ))}
      </div>
  );
}
function Star() {
    return (
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
        </svg>
    );
}

function Stars(props) {
  const count = props.rating;

  if (count < 1 || count > 5 || typeof count === 'string') {
    return 'Рейтинг не найден';
  } 

  const listOfStars = [];
  for (let i = 0; i < count; i++) {
    listOfStars.push(<Star key={i}/>)
  };

  console.log(listOfStars)

  return (
      <div className="stars-ranking">
          <ul>
              <li>
                  {listOfStars.map((oneStarElement) => oneStarElement)}    
              </li>
          </ul>
      </div>
  )
}

function App() {
  return (
      <div className="films-showing">
        <FilmListing/>
      </div>
  )
}

export default App;

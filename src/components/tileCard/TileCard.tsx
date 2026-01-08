import "./TileCard.css";

export const TileCard = () => {
  return (
  <div className="card-container">
    <div className="card">
        <div className="card-thumbnail">
            <img alt="" src="https://ichef.bbci.co.uk/news/480/cpsprodpb/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg.webp" />
        </div>
        <div className="card-body">
          <div className="card-avatar">
              <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s"/>
          </div>
          <div className="card-details">
              <h3>Learn CSS Project</h3>
              <p>Banana Dev</p>
          </div>
        </div>
        <ul className="card-stats">
          <li>👍: 8</li>
          <li>💬: 2</li>
        </ul>
    </div>
  </div>
  );
}
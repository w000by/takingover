import logo from './logo.gif';
import bucks from './bucks.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"/>
        <p>
          <code>MetaBucks Under New Management. Check back soon!</code>
        </p>
        <a
          className="App-link"
          href="https://opensea.io/collection/the-meta-bucks-nft?search[sortAscending]=true&search[sortBy]=CREATED_DATE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={bucks} height="auto" width="auto"/>
        </a>
      </header>
    </div>
  );
}

export default App;

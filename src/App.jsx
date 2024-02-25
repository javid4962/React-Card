import './App.css';

// Card component
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      {image && <img src={image} alt="Card" className='img-fluid'/>}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

// Button component
const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

const App = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className='d-flex'>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://i.pinimg.com/564x/38/ea/a2/38eaa298cf24616c9b355286e37e34de.jpg"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://i.pinimg.com/474x/1c/df/dd/1cdfdd073c6e6dbddc6c2a490de32a0f.jpg"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    <div className="App">
      <Card
        title="Card Title"
        description="This is a card component"
        image="https://i.pinimg.com/474x/64/e6/07/64e6077fdb821b806fe61d5fac2f25b3.jpg"
      />
      <Button text="Click me" onClick={handleButtonClick} />
    </div>
    </div>
  );
};

export default App;

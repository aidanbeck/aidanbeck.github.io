import './App.css';
import Card from './components/Card';

function App() {

  return (
    <>
     <h1>My Portfolio Projects</h1>
     <section>
      <Card>
        <h2>Old Cove</h2>
        <p>A choose-your-own adventure!</p>
        <img src="oldCove.PNG" width="90%"></img>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>Vite</li>
        </ul>
      </Card>
      
      <Card>
        <h2>Syntaxlor</h2>
        <p>A tool for creating custom alternatives to JSON syntax.</p>
        <ul>
          <li>JavaScript</li>
          <li>NPM</li>
        </ul>
        <p>Install: <br/> <em>npm install syntaxlor</em></p>
        <p>
          Links:
          <ul>
            <li>GitHub</li>
            <li>NPM</li>
          </ul>
        </p>
      </Card>

      <Card>
        <h1>Place Holder</h1>
        <marquee scrollamount="5">This is a placeholder!</marquee>
        <marquee scrollamount="10">This is a placeholder!</marquee>
        <marquee scrollamount="15">This is a placeholder!</marquee>
        <marquee scrollamount="20">This is a placeholder!</marquee>
        <marquee scrollamount="25">This is a placeholder!</marquee>

        <marquee scrollamount="20">This is a placeholder!</marquee>
        <marquee scrollamount="15">This is a placeholder!</marquee>
        <marquee scrollamount="10">This is a placeholder!</marquee>
        <marquee scrollamount="5">This is a placeholder!</marquee>
      </Card>
    </section>
    <p>Hover over some cards to check out projects I've build!</p>
    </>
  )
}

export default App;
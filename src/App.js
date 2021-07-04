import "./App.css";
import "bulma/css/bulma.min.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="columns">
          <div className="column">
            <section className="hero is-primary">
              <div className="hero-body">
                <p className="title">React Forms</p>
                <p className="subtitle">with React Hook Form</p>
              </div>
            </section>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

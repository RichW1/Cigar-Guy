<p>You are logged in</p>
<button onClick={logout}>Exit</button>

<p>You have been logged out</p>
<button onClick={login}>Enter</button>

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        description: 'The content of a textarea goes in the value attribute'
      };
    }
    render() {
      return (
        <form>
        <textarea value={this.state.description} />
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('root'));

  const express = require('express');
const mongoose = require(`mongoose`);
const products = require(`./Routes/Product.Routes`);
const providers = require(`./routes/ProductProvider.Routes`);

const apiPort = 3444;
const dbName = `db1`;
const dbPort = 27017;
const dbUrl = `mongodb://localhost:${dbPort}/${dbName}`;

const api = express();

api.use(express.json());
api.use(`/products`, products);
api.use(`/product-providers`, providers);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on(`error`, console.error.bind(console, "Mongo Connection Error: "));

api.get('/secret', (req, res, next) => {
    res.set({
        "Content-Type": "text/html"
    });
    res.send(`<h1>SHHHHHHHH, it's a secret! AWESOME!</h1>`);
});

api.listen(apiPort, (err) => {
    if (err) {
        console.error(`error starting api server: `, err);
        return;
    }
    console.log(`Api server is listening at ${apiPort}...`);
});




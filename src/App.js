import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/Routes';
import Main from './components/Main';

function App() {

  return (
    <>
      {/* <button as={Link} to="/Main"> Start Here </button> */}
      <Routes />
      <Main />

    </>
  );
}

export default App;

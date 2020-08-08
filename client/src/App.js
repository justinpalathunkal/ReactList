import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import ReactList from './components/ReactList';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';

function App() {
  return (
    <Provider store ={store}>
    <div className="App">
      <AppNavBar></AppNavBar>
      <Container> 
        <ItemModal></ItemModal>
        <ReactList></ReactList>
      </Container>
    </div>
    </Provider>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AppNavBar from './components/AppNavBar';
// import ReactList from './components/ReactList';
// import { Container } from 'reactstrap';
// import { Provider } from 'react-redux';
// import store from './store';
// import ItemModal from './components/itemModal';

// function App() {
//   return (
//     <Provider store ={store}>
//     <div className="App">
//       <AppNavBar></AppNavBar>
//       <Container> 
//         <ItemModal></ItemModal>
//         <ReactList></ReactList>
//       </Container>
//     </div>
//     </Provider>
//   );
// }

// export default App;



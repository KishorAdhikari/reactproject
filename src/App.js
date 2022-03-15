import { Fragment } from 'react';
import Context from './context';
import Provider from './provider';

const Comp1 = ()=>{
  return <Comp2/>
}
const Comp2 = ()=> {
  return <FinalComp/>
}
const FinalComp = () =>{
  return <Context.Consumer>
    {
      (context) => (
        <div>
          <h3>Personal Infos</h3>
          <p>Name: {context.data.name}</p>
          <p>ID: {context.data.id}</p>
          <p>Address: {context.data.address}</p>
          <button onClick={context.changeAddress}>Change Address</button>
        </div>
      )
    }
  </Context.Consumer>
}
function App() {
  return (
    <Fragment>
    <Provider>
    <Comp1/>
    </Provider>
    </Fragment>
  );
}

export default App;

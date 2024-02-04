import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import { SplitScreen } from './components/design-patterns/SplitScreen';
import { CommonList } from './components/design-patterns/CommonList';
import { SmallPerson } from './components/design-patterns/SmallPerson';
import { LargePerson } from './components/design-patterns/LargePerson';
import { SmallerProduct } from './components/design-patterns/SmallerProduct';
import { LargerProduct } from './components/design-patterns/LargerProduct';
import { Modal } from './components/design-patterns/Modal';
import { UncontrolledForm } from './components/design-patterns/control-uncontrol/UncontrolledForm';
import { ControlledForm } from './components/design-patterns/control-uncontrol/ControlledForm';

const LeftComponent = () => {
  return (
    <h1>Left !</h1>
  )
}
const RightComponent = () => {
  return(
    <h1>Right !</h1>
  )
}

function App() {
  const people = [{
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  }, {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  }, {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  }];
  
  const products = [{
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  }, {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  }, {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  }];
  
  return (
    <div className="App">
      <Modal>
        <LargerProduct product={products[0]}></LargerProduct>
      </Modal>
      <UncontrolledForm/>
      <ControlledForm/>
      {/* <CommonList 
      items={people}
      resourceName="person"
      itemComponent={SmallPerson}
      ></CommonList>

      <CommonList
      items={people}
      resourceName="person"
      itemComponent={LargePerson}
      ></CommonList>

    <CommonList
    items = {products}
    resourceName = "product"
    itemComponent = {SmallerProduct}
    />
    <CommonList 
    items = {products}
    resourceName="product"
    itemComponent={LargerProduct}
    /> */}

      {/* <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' exact element={<UserList/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            </Routes>
        </Suspense>
      </Router> */}
      {/* <SplitScreen leftWeight={1} rightWeight={2}>
        <LeftComponent/>
        <RightComponent/>
      </SplitScreen> */}

      
      
    </div>
  );
}

export default App;

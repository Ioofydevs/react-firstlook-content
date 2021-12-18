// import { Greet } from 'components/props/GreetComponents/Greet';
import Person from 'components/props/MorePropsComponents/Person';
import Welcome from 'components/props/MorePropsComponents/Welcome';
import React from 'react';
import { PersonList } from 'components/props/MorePropsComponents/PersonList';

function App() {
  const personName = {
    first: 'Dimitri',
    last: 'Michaelescu',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Mikhaelosva',
      last: 'Romanov',
    },
    {
      first: 'Samuel',
      last: 'Digikov',
    },
  ];

  return (
    <div className='App'>
      {/* <Greet name='Ioofy' age={19} address='Jln.Kebanggaan Bogor Indonesia' /> */}
      <Welcome isLoggedIn={true} name='Samuel Konvezky' messageCount={25} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;

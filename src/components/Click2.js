import React from 'react';

const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value={{ username: 'John' }}>
      <Profile />
    </MyContext.Provider>
  );
}

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <MyContext.Consumer>
        {({ username }) => <p>Welcome, {username}!</p>}
      </MyContext.Consumer>
    </div>
  );
}

export default App;

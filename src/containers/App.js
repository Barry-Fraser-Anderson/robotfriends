import React, { useState, useEffect } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

function App () {
  const [ robots, setRobots ] = useState([]);
  const [ searchfield, setSearchfield ] = useState('');

  useEffect (() => {
     fetch("https://jsonplaceholder.typicode.com/users")
       .then((response) => response.json())
       .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  //const { robots, searchfield} = this.state;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (! robots.length) ?
    <h1>Loading...</h1> :
    (
      <div className="tc">
        <h1 className="f2">RobotFriends</h1>
        <Searchbox searchchange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default App;

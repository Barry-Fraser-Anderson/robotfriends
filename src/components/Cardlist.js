import React from "react";
import Card from './Card';

const Cardlist = ({ robots }) => {
  return (
    <div>
      {
        robots.map((r, i) => {
          return (
            <Card key={i} id={r.id} name={r.name} email={r.email} />
          );
        })
      }
    </div>
  );
};

export default Cardlist;
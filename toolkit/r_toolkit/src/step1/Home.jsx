import React from 'react';

function Home ({value}){
    // const [value, setValue] = React.useState({});
    // const value = 20;
    return(
        <div className="home">
            <p>Home</p>
            <h2>{value}</h2>
            <button >+</button>
            <button >-</button>
        </div>
    )
}
export default Home;
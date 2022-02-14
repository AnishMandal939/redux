import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
function Home (){
    // const [value, setValue] = React.useState({});
    // const value = 20;
    const dispatch = useDispatch();
    const {c} = useSelector(state => state.custom);
    const addBtn = () => {
        // dispatch({type: 'ADD'});
        dispatch({
            type: 'increment',
        });
    }
    const incrementBtn25 = () => {
        dispatch({
            type: 'incrementByValue',
            payload: 25,
        });
    }

    const subBtn = () => {
        // dispatch({type: 'SUB'});
        dispatch({
            type: 'decrement',
        });
    }

    return(
        <div className="home">
            <p>Home</p>
            <h2>{c}</h2>
            <button onClick={addBtn}>Increment</button>
            <button onClick={incrementBtn25}>Increment By 25</button>

            <button onClick={subBtn}>Decrement</button>
        </div>
    )
}
export default Home;
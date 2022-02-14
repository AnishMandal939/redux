## WHAT IS REDUX
<p>
    Redux is an open-source JS library for managing and centralizing application state -> acc to google<br />
    in simply <code>state is a variable</code>
    <br/>
    lets say we have 3 components 
    <ul>
        <li><App>App</App> </li>
        <li><Home>Home</Home> </li>
        <li><Post>Post</Post> </li>

    </ul>
    the above component flows from top to down that is from outer to innner component
   <code> <App>App</App> ---> <Home>Home</Home> ---> <Post>Post</Post> </code>
    it cannot flow from <App>App</App> <--- <Home>Home</Home> <--- <Post>Post</Post>  
    i.e in reverse order, this in how react flows 
</p>

## Redux creates store which holds data and anywhere we need data we fetch directly from that store 

<p>We have terminology to follow to work with redux </p>

<h3>
    Store, Reducer, Action & State
</h3>

<p>Store: </p>
<span>Where all data gets placed / stored </span>
</br>
<p>Reducer: </p>
<span>It is a state -> or a condition is state, i.e with the help of reducer we can change the value of state </span>
<p>Reducer is that function which can change state value</p>
</br>
<p>Action & State: </p>
<span>State is current value / current position </span>
<p>Trigger point is Action, Action is basically keyword</p>
<em>
    in eg: of gun and trigger , Gun is reducer and trigger is Action
</em>


## REDUX TOOLKIT

<p>To install redux toolkit </p><br />
<code>npm install @reduxjs/toolkit react-redux</code>
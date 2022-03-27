//to install redux   first    npm init -y     then   npm install redux

const redux = require("redux"); //this import redux

//so here we will  create  the  STORE , REDUCER FUNCTION , ACTION AND COMPONENT(SUBSCRIPER),

//the reducer always  recives two parameter  oldState and action by default  and then it outputs new state

/*A reducer function is a standard JavaScript function,but it will  be called by the Redux library
and it will then always receive two pieces of input two parameters, the old or existing state
and the action that was dispatched. and It must always return a new state VALUE .IT COULD BE OBJECT , NUMBER , STRING ...

NOTE:And there should be no side effects inside of that function.So you must not send a HTTP requesT or write something to local storage

or fetch something from local storage there. Instead, a reducer should really just be a function that takes the given inputs, which are provided by Redux
and then produces the expected output, a new state object.
*/
//Note:  the state is undifined since it runs for the first time  to prevent that we intialized  default value  which is 0;
//this reducer function will receive the current 'state' and the 'action'.It receives that by default because the reducer will ultimately be executed by the Redux library.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return { counter: state.counter + 1 }; //return  new state counter    state.counter is old state
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReducer); //we create store and pass the reducer function  becouse the store should know which function is responsible for the change of state

///so we have our store and the reducer function that update it  , now we need  the Subscriber component

const counterSubscriber = () => {
  //getState is a method which is available on the store created with create store.And it will give us the latest state snapshot after it was updated.
  const latestState = store.getState();
  console.log(latestState); // this outputs the latest state
};

//so we should make redux aware of this subscriber function  and tell it that this function should be executed whenever our state changes.
//And we do that by reaching out to the store and calling the subscribe method on the store,
//The subscribe method then wants such a subscriber function.So the subscribe method expects a function which Redux will then execute for us whenever the data and the store changed.
//NOTE:both the reducer, as well as the subscriber function will be executed by Redux. so we don't call them  like this 'store.subscribe(counterSubscriber());' we only pont at it.
store.subscribe(counterSubscriber);
//create and dispatch action  to the reducer function
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

////Note:  to run this code we write node redux-demo.js

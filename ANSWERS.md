- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components can increase the scale of your code, and allow you to apply the same functions multiplicatively instead of writing out the same functional components over and over again.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - called when the component is mounted. You can use this to call an API only after your elements are displaying. 
componentDidUpdate - called when updating happens. You can use this to pass props or state changes. 
render - updates elements into the DOM

- [ ] What is the purpose of a custom hook?

To be increase the scale of your code. You can't use one custom hook applied in an infinite amount of code as apposed to writing out each individual function. 

- [ ] Why is it important to test our apps?

So we can spot any problems and fix them without actually having to host or deploy the entire application. If you write a functional test, you can be sure that function is operational while working on the App. 
# Another Form of HOCs
- Another way of creating higher order components. 
- The first argument is the WrappedComponent, the children and the second are the function that you want the component to do or use. You can add as many action functions as third, fourth and so on. 
- We changed `WithClass` to `withClass` the lowercase means it's not a component anymore. It's now a function.
- You now use `withClass` in the export default, note that the second argument in that line is the function. And that's how you do it. Creating an higher order component without using `div`
- Now you know the two ways of adding higher order components. Both are popular.
- The first one is normally used when the HOC does more. Maybe it runs some logic like checking for erros, http requests.
- This second one is a sign that the HOC doesn't do much. It's just a semantic thing.
- Not really important. Choose the one you're more comfortable with. 
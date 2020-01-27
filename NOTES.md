# Controlling the useEffect() Behavior
- `useEffect()` combines `componentDidMount()` and `componentDidUpdate()`
- Use an array at the end to tell React that it should update whenever that `props` is touched or changes.
- If you don't want it to show anything, just add an empty array. It'll show the first time and it won't again.
# Optimizing Functional Components with React.memo()
- Use  React.memo() to remember during re-rendering. If the input or anything don't change, React won't re-render it. It only re-renders when the props change.
- We changed the persons to personsLength so that it doesn't update all the time. We're doing this for optimization. 
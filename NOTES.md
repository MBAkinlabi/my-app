# Component Update Lifecycle (for props Changes)
- `getDerivedStateFromProps(props, state)` It sync State to Props. Doesn't causes side-effects
- `shouldComponentUpdate(nextProps, nextState)` It decides whether to continue or not. May cancel updating process. Doesn't cause side-effects
- `render()`. It prepares and structures your JSX code
- Then React update child component props
- `getSnapshotBeforeUpdate(prevProps, prevState)` It does last-minute DOM ops. Doen't cause side effects.
- `componentDidUpdate()`. It does cause side effects. Doesn't update state (triggers re-render).
- I learned about various Lifecycle Hooks. Most of those commented out are no longer available (deprecated).
- I should learn more about them later.
- Instructor said there are better ways to do things than using Lifecycle Hooks. 
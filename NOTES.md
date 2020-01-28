# PureComponents instead of shouldComponentUpdate
- If you only want to confirm all props that matter to a component, there's an easier way of writing that. 
- Checking if the props changed and then you can do what you want to do
- If you're checking all props, then you shouldn't use shouldComponentUpdate. Instead, extend PureComponent. It does check everything you need.
# Passing Unknown Props
- The parent props, which is WrappedComponent inside the withClass function doesn't know the props of its child. So the props you created in the child after using the withClass won't work.
- You need to let the withClass of course WrappedComponent get all the props from the components that use it. So here what we do is pass them through {...props}. Now it works. 
- props is passed to the WrappedComponent. Wow, this is getting interesting. 
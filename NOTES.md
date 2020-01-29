# Setting State Correctly
- Keep in mind that you can setState but it's not guaranteed to execute and finish immediately.
- Memorize this part because it's important for counter.
- If you have a state that calls something like `this` of the name of the old state add or minus or anything like that, it could be affect somewhere else since you have multiple `setState` in your app.
- The best way to do this is to use the `prevState.` the name, then you can be sure that the previous state is still available. The app works normally but it's important that you keep this in mind.
- This is the best way of updating the state when you're depending on old state.
- It's the best practice. 
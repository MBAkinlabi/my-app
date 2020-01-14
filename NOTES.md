# Using Radium for Media Queries
- If you're using just pseudo selectors, then wrapping it in Radium is enough.
- But if you want to do more like use advanced CSS selectors like media queries and key-frames then you'll have to wrap your application with something provided by Radium called StyleRoot. You'll have to import that too to use it.
- If you don't wrap your application with it, your application will generate some errors in the console and you want to avoid that.
# When should you optimize?
- shouldcomponentupdate is for class and react.memo is for function components.
- If the parent update and it affects you, then you need to use this performance optimaztion. But if your parent update and it doesn't affect you, if both of you are separate, then you need this performance optimization trick using shouldcomponentupdate and react.memo. Keep this in mind.

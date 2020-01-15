# Working with CSS Modules
- Instructor doesn't recommend CSS-in-JS like we did before because CSS would be everywhere in JS.
- He personally doesn't like it.
- And now we're going to be using CSS Modules which he said is cooler and better.
- And the process in this lecture can be used with React Scripts 1 version. If it's the React Scripts 2 version, there's an alternative approach to doing it.
```shell
npm run eject
```
- Because I'm using Git, I quickly commit my files because we won't move forward if I don't.
- Then I re-run this again:
```shell
npm run eject
```
- Now I can see the config and scripts folders. 
- Go to `config` folder and find the `webpack.config.dev.js` file.
- Find this
```js
 test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
```
- Then make the changes as specified here
```js
loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'

                },
```
- Then go to this file `webpack.config.prod.js`
- Go here
```js
test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                      },
                    },
                    {
```
- Then make this changes too (add these two lines):
```js
options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                      },
                    },
```
- After doing that run
```shell
npm run start
```
- You may have to rewatch this if you have to. It'll help you remember faster and more. 
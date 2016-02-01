module.exports = {
  entry: {
    // Maps bundle name to entry point file. The entry point file should load all
    // of the "root" dependencies for that bundle.
    landing_application: "./landing_page_application.js.coffee",
    searcher_application: "./searcher_application.js.coffee"
  },

  output: {
    // Place all bundle files in `./bundles`
    path: __dirname + "/bundles",
    // [name] is equal to the name of the bundle being processed (defined in `entry`)
    filename: "[name].js"
  },

  module: {
    loaders: [
      // Pass all *.coffee files through `cofee-loader`. This will compile the cofeescript
      // into JS. All loaders happen _before_ the bundles are created, so all code
      // being passed into the bundler has had it's transformations applied to it.
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.json$/, loader: "json-loader" }
    ]
  }
}
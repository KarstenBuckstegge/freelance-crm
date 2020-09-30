module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      'prettier',
      'prettier/@typescript-eslint',
    ],

    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                            // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "fragment": "React.Fragment",  // Fragment to use, default to "React.Fragment"
        "version": "detect", // React version. "detect" automatically picks the version you have installed.
                              // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                              // default to latest and warns if missing
                              // It will default to "detect" in the future
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          "forbidExtraProps",
          {"property": "freeze", "object": "Object"},
          {"property": "myFavoriteWrapper"}
      ],
      "linkComponents": [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        "Hyperlink",
        {"name": "Link", "linkAttribute": "to"}
      ]
    }
  };
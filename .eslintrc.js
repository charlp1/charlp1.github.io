module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": 0,
        "no-param-reassign": 0,
        "no-multi-assign": 0,
        "function-paren-newline": 0,
        "prefer-arrow-callback": 0,
        "import/newline-after-import": 0,
        "class-methods-use-this": 0,
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx"] }
        ],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/self-closing-comp": [
            "error",
            {
                "component": true,
                "html": false
            }
        ],
        "react/no-unused-state": 0
    }
};

module.exports = {
    root:true,
    parser:"babel-eslint",
    "env": {
        "browser": true,
        "node":true,
        "commonjs": true,
        "es6": true,//至此es6语法检查
    },
    "extends": "eslint:recommended",//表示使用默认的规则进行校验
    "parserOptions": {
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "document":true,
        "navigator":true,
        "window":true,
        "jest": false,
        "describe": false,
        "it": false,
        "expect": false,
        "_": false,
        "$": false,
        "__uri": true,
        "__inline": true,
        "__NAPI_SOURCE__": false,
        "createUnitStore": false,
        "StateTypes": false,
        "require": true,
        "define": true,
        "module": true,
        "console": true,
        "window": true,
        "$Cookie": true,
        "$D": true,
        "$Html": true,
        "$JSON": true,
        "$Mobile": true,
        "$T": true,
        "$TextUtils": true,
        "$Url": true,
        "$Xml": true,
        "Vue": true,
        "React": true,
    },
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "html",
        "vue",
        "react"
    ],
    "rules": {
        //规则有3个等级：off（0）、warn（1）和error（2）。off表示禁用这条规则，warn表示给出警告，并不会导致检查不通过，而error则会导师检查不通过

        "semi": [2, "always"],//语句强制分号结尾
        "one-var": 1,//连续声明
        "prefer-const": 0,//首选const
        "no-console":"off",//不检查console.log的语法，忽略它
        "no-alert": 0,//禁止使用alert confirm prompt
        "no-extra-semi": 2,//禁止多余的冒号
        "no-func-assign": 2,//禁止重复的函数声明
        "arrow-parens": 0,//箭头函数用小括号括起来
        "block-scoped-var": 0, //把 var 语句看作是在块级作用域范围之内
        "curly": 1, //为所有控制语句指定花括号约定，警告
        "eol-last": 0, //强制文件最后一行为空行，关闭
        "eqeqeq": [1, "allow-null"], //要求使用 === 和 !==，但允许 == null
        "dot-notation": 2, //尽可能的使用点符号
        "no-console": 0, //不允许存在 console。关闭
        "no-empty": 1, //空的代码块
        "no-multi-spaces": 1, //不允许多个空格
        "no-self-compare": 1, //禁止自身比较
        "no-shadow": 1, //不允许声明在外层作用域下已声明过的变量
        "no-undef": 2, //不允许使用未申明变量
        "no-underscore-dangle": 0, //禁止标识符中有悬空下划线。关闭
        "no-unused-expressions": [1, { allowShortCircuit: true }], // 禁止在语句的位置使用表达式，但允许a && a()
        "no-unused-vars": 2, //变量定义后未使用
        "no-use-before-define": 1, //不允许在变量定义之前使用它们
        "quotes": [0, "single", "avoid-escape"], //使用单引号，除非为了避免转义
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
};
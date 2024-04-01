/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 模版标签排序
    'vue/attributes-order': 2,
    // 闭合标签前添加空格
    'vue/html-closing-bracket-spacing': 2,
    // 在新行闭合标签
    'vue/html-closing-bracket-newline': 2,
    // 属性换行规则
    'vue/max-attributes-per-line': [2, {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    // 标签属性缩进
    'vue/html-indent': [2, 'tab', {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    // 组件名验证
    'vue/multi-word-component-names': [
      2,
      {
        'ignores': ['index']
      }
    ],

    // 使用分号
    'semi': 2,
    // 末尾不留空格
    'no-trailing-spaces': 2,
    // 禁止连续的多个空格
    'no-multi-spaces': 2,
    // 肩头函数前后空格
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 引号规则
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],

    // 强制块之间的空格
    'block-spacing': [2, 'always'],
    '@typescript-eslint/block-spacing': [2, 'always'],

    // 强制 key 之间的空格
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    '@typescript-eslint/key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],

    // 强制关键字之间的空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    '@typescript-eslint/keyword-spacing': [2, {
      'before': true,
      'after': true
    }],

    // 强制运算符之间空格
    'space-infix-ops': 2,
    '@typescript-eslint/space-infix-ops': 2,

    // 不允许在对象和数组文字中使用尾随逗号。
    'comma-dangle': [2, 'never'],
    '@typescript-eslint/comma-dangle': [2, 'never'],

    // 强制逗号前后的间距一致
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    '@typescript-eslint/comma-spacing': [2, {
      'before': false,
      'after': true
    }],

    // 在块之前强制执行一致的间距
    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': 'error'
  }
};

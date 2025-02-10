module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },

  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off", // 코드상에 실제로 사용하지 않는 변수 있을 때 오류로 알려주는 옵션 off
    "react/prop-types": "off", // PropTypes 사용 여부를 비활성화
    "react/no-unknown-property": "off", // 알 수 없는 속성 관련 경고 끄기
    "react/jsx-no-undef": "off", // 정의되지 않은 JSX 관련 경고 끄기
    "react/react-in-jsx-scope": "off", // React가 scope에 없다는 경고 끄기
  },
};

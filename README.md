# Mine Sweeper

## 環境構築

まずはプロジェクトを初期化する。

```bash
npm init vite@latest
```

ESLint によるコードの静的解析を実施する。

```bash
npx eslint --init
> To check syntax, find problems, and enforce code style
> JavaScript modules (import/export)
> React
> Yes
> Browser
> Use a popular style guide
  > Airbnb: https://github.com/airbnb/javascript
> JavaScript
```

また不要なライブラリを削除しておく。

```bash
npm remove eslint-config-airbnb eslint-plugin-jsx-a11y
```

次にコードのスタイルを自動的に調整するためのライブラリをインストールする。

```bash
npm install --save-dev prettier eslint-config-prettier
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# tree
- root/dist/index.html : 최종 결과물의 pack
    - yarn preview port:4173
- root/index.html
- root/src/main.jsx : 초기 메인
- root/src/App.jsx : 화면
    - yarn dev port:5173


# script
```
yarn
yarn build
- run
    - yarn preview port:4173
    - yarn dev port:5173
```
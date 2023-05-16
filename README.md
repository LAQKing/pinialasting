## 概要

一个轻量级的可加密的pinia持久化插件
A lightweight and encrypted pinia persistence plug-in

## 使用

#### 安装

`npm install pinialasting --save`

#### 使用

```js
import { createPinia, defineStore } from "pinia"
import pinialasting from 'pinialasting'
const store = createPinia()
store.use(pinialasting)

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      a: '',
      b: '',
      c: ''
    }
  },
  lasting: {
    key: "userStore",
    storage: sessionStorage,
    encrypt: true,
    paths: ["a", "b"]
  }
})

```

# pinialasting

#### 介绍
一个轻量级的可加密的pinia持久化插件
jsversion为js版本，tsversion为ts版本

### 安装

ts版本

`npm install stateforever-ts --save`

or

`pnpm install stateforever-ts --save`

js版本

`npm install stateforever --save`

or

`pnpm install stateforever --save`

使用

```js
import { createPinia, defineStore } from "pinia"
// import stateforever from 'stateforever-ts' // ts
import stateforever from 'stateforever' // js
const store = createPinia()
store.use(stateforever)

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      a: '',
      b: '',
      c: ''
    }
  },
  persist: {
    key: "userStore", // 自定义存储id，默认为当前状态id，即store.$id
    storage: sessionStorage, // 默认以sessionStorage方式持久化
    encrypt: true, // 是否加密，默认不加密
    paths: ["a", "b"] // 设置持久化状态，不设置或者设置为true则持久化当前全部状态
  }
})

```
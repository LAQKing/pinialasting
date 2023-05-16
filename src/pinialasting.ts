import { StateTree } from "pinia"
import BASE64 from "./base64"
import { objectData, lastingOptions } from "./types"
const base64 = BASE64()
declare module "pinia" {
  export interface DefineStoreOptionsBase<S extends StateTree, Store> {
    lasting?: boolean | lastingOptions | lastingOptions[]
  }
}
const pinialasting = (stateOptions: any) => {
  const { options, store } = stateOptions
  const { lasting } = options
  if (lasting) {
    // 不设置key则使用当前pinia模块id
    // 不设置存储类型则默认sessionStorage
    // 不设置paths则默认缓存当前全部state
    const { encrypt, key = store.$id, paths, storage = sessionStorage } = lasting

    const getData = encrypt && storage.getItem(key) ? JSON.parse(base64.decode(storage.getItem(key))) : JSON.parse(storage.getItem(key))
    store.$patch(getData)
    store.$subscribe(
      () => {
        let storageObj = {} as objectData
        if (Object.prototype.toString.call(paths) == "[object Array]") {
          paths.forEach((item: any) => {
            if (typeof item == "string") {
              storageObj[item] = store.$state[item]
            }
          })
        } else {
          storageObj = store.$state
        }
        const setData = encrypt ? base64.encode(JSON.stringify(storageObj)) : JSON.stringify(storageObj)
        storage.setItem(key, setData)
      },
      {
        detached: true
      }
    )
  }
}
export default pinialasting

export interface objectData {
  [key: string]: any
}
export interface lastingOptions {
  /**
   * 持久化id.
   * @default $store.id
   */
  key?: string | ((id: string) => string)

  /**
   * 持久化类型 默认.
   * @default sessionStorage
   */
  storage?: any

  /**
   * 指定持久化状态
   * @default undefined
   */
  paths?: Array<string>

}
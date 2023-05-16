import { type StateTree } from 'pinia'

export type storagetype = Pick<Storage, 'getItem' | 'setItem'>

export interface persistStateOptions {
  key?: string | ((id: string) => string)
  storage?: storagetype
  paths?: Array<string>
  encrypt?: boolean
}

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S extends StateTree, Store> {
    persist?: boolean | persistStateOptions | persistStateOptions[]
  }
}
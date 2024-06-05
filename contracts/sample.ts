import {
  getState,
  setState,
  log,
  AnyJson,
} from '@xahau/hooks'

import { sampleIncludeEmitter } from './sample-include'

export const Hook: Hook = (tx) => {
  // TX Type causing this Hook to run
  console.log('otxn_type', otxn_type())
  // TX Hash causing this Hook to run
  console.log('otxn_id', otxn_id(0))

  try {  
    log('Triggering TX', tx)
    log('localstorage set name',              setState('name', 'Wietse'))
    log('localstorage set age',               setState('age', 36))
    log('localstorage set pets',              setState('pets', ['Evi', 'Pepper']))
    log('localstorage set isFemale',          setState('isFemale', false))
    log('localstorage set someObject',        setState('someObject', { wife: 'Nienke', kids: [ 'Arwèn', 'Quinn' ] }))

    log('localstorage get name',              getState('name'))
    log('localstorage get age',               getState('age'))
    log('Hook State get pets',                (getState('pets') as unknown as string[])?.[0])
    log('localstorage get isFemale',          getState('isFemale'))
    log('localstorage get someObject',        getState('someObject'))
    log('localstorage get someObject.kids',   (getState('someObject') as AnyJson)?.kids)

    sampleIncludeEmitter()

  } catch (e) {
    log('-------------- ERR', (e as Error).message)
    return accept('Sample Hook (End of Hook with Error)', 987)
  }
  
  return accept('Sample Hook (End of Hook)', 123)
}

export const Callback: Callback = (tx, code) => {
  log('Triggering TX', tx)
  return accept('Sample Hook (End of Callback)', code || 1337)
}

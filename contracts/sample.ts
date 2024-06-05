import { getState, setState, log, AnyJson, } from '@xahau/hooks'
import { sampleIncludeEmitter, } from './sample-include'

export const Hook: Hook = (tx) => {

  // Console.log mapped to log as well, see Xahaud node Trace output
  
  console.log('otxn_type', otxn_type())   // TX Type causing this Hook to run
  console.log('otxn_id', otxn_id(0))      // TX Hash causing this Hook to run

  try {  
    log('Triggering TX', tx)
    log('state set name',              setState('name', 'Wietse'))
    log('state set age',               setState('age', 36))
    log('state set pets',              setState('pets', ['Evi', 'Pepper']))
    log('state set isFemale',          setState('isFemale', false))
    log('state set someObject',        setState('someObject', { wife: 'Nienke', kids: [ 'Arwèn', 'Quinn' ] }))

    log('state get name',              getState('name'))
    log('state get age',               getState('age'))
    log('state get pets',                (getState('pets') as unknown as string[])?.[0])
    log('state get isFemale',          getState('isFemale'))
    log('state get someObject',        getState('someObject'))
    log('state get someObject.kids',   (getState('someObject') as AnyJson)?.kids)

    // This will emit a transaction, but for demo purposes: this lives in an external (import) file
    sampleIncludeEmitter()

  } catch (e) {
    log('ERR', (e as Error).message)
    return accept('Sample Hook (End of Hook with Error)', 987)
  }
  
  return accept('Sample Hook (End of Hook)', 123)
}

export const Callback: Callback = (tx, code) => {
  log('Triggering TX', tx)
  return accept('Sample Hook (End of Callback)', code || 1337)
}

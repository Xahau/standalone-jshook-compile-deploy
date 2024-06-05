import { enableEmit, prepareEmit, doEmit, log, } from '@xahau/hooks'

export const sampleIncludeEmitter = () => {
  enableEmit(10)

  const prepared = prepareEmit({
    TransactionType: 'Payment',
    Amount: '3000000', // 3mm drops = 3 XAH
    Memos: [ { Memo: { MemoType: 'DEAD', MemoData: 'BEEF' } } ],
    Destination: 'rwietsevLFg8XSmG3bEZzFein1g8RBqWDZ',
  })

  log('Prepared TX', prepared)
  log('Emitted', doEmit(prepared))
}

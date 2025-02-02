import {
  v37 as SignersSchema,
  latest as PersistedSignersSchema
} from '../../../../../main/store/state/types/signers'

const validSigner = {
  id: 'my-ledger',
  name: 'Secure ledger signer',
  model: 'Nano X',
  type: 'ledger',
  addresses: ['0x1234'],
  status: 'pending',
  createdAt: 0
}

it('parses a valid signer', () => {
  expect(SignersSchema.parse({ 'my-ledger': validSigner })).toStrictEqual({ 'my-ledger': validSigner })
})

it('does not persist signer data', () => {
  expect(PersistedSignersSchema.parse({ 'my-ledger': validSigner })).toStrictEqual({})
})

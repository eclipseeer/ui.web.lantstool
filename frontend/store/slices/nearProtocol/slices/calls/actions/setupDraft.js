import { action } from '@react-vault';

const getDefaultValues = () => ({
  // Account
  getAccount: {
    method: { value: 'getAccount', label: 'Get Account' },
    accountId: null,
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getAccountChanges: {
    method: { value: 'getAccountChanges', label: 'Get Account Changes' },
    accountIds: [{ accountId: null }],
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  // Contract
  getContractWasm: {
    method: { value: 'getContractWasm', label: 'Get Contract WASM' },
    contractId: null,
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getContractWasmChanges: {
    method: { value: 'getContractWasmChanges', label: 'Get Contract WASM Changes' },
    contractIds: [{ contractId: null }],
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getContractState: {
    method: { value: 'getContractState', label: 'Get Contract State' },
    contractId: null,
    keyPrefix: '',
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getContractStateChanges: {
    method: { value: 'getContractStateChanges', label: 'Get Contract State Changes' },
    contractIds: [{ contractId: null }],
    keyPrefix: '',
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  callContractViewMethod: {
    method: { value: 'callContractViewMethod', label: 'Call Contract View Method' },
    contractId: null,
    methodName: null,
    args: '',
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  // Keys
  getAccountKey: {
    method: { value: 'getAccountKey', label: 'Get Account Key' },
    accountId: null,
    publicKey: null,
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getChangesForAccountKey: {
    method: { value: 'getChangesForAccountKey', label: 'Get Changes for Account Key' },
    accountKeyPairs: [{ accountId: null, publicKey: null }],
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getAccountKeys: {
    method: { value: 'getAccountKeys', label: 'Get Account Keys' },
    accountId: null,
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getChangesForAccountKeys: {
    method: { value: 'getChangesForAccountKeys', label: 'Get Changes for Account Keys' },
    accountIds: [{ accountId: null }],
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  // Block
  getBlock: {
    method: { value: 'getBlock', label: 'Get Block' },
    blockTarget: 'latest',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getBlockChanges: {
    method: { value: 'getBlockChanges', label: 'Get Block Changes' },
    blockTarget: 'specific',
    finality: { value: 'final', label: 'Final' },
    blockId: '',
  },
  getChunk: {
    method: { value: 'getChunk', label: 'Get Chunk' },
    searchType: 'byChunkId',
    chunkId: '',
    blockId: '',
    shardId: '',
  },
  // Transaction
  getTransaction: {
    method: { value: 'getTransaction', label: 'Get Transaction' },
    transactionHash: '',
    signerId: null,
    waitUntil: { value: 'FINAL', label: 'Final' },
  },
  getDetailedTransaction: {
    method: { value: 'getDetailedTransaction', label: 'Get Detailed Transaction' },
    transactionHash: '',
    signerId: null,
    waitUntil: { value: 'FINAL', label: 'Final' },
  },
  getReceipt: {
    method: { value: 'getReceipt', label: 'Get Receipt' },
    receiptId: '',
  },
});

export const setupDraft = action(({ slice, payload: call }) => {
  const { callId, body } = call;

  slice.drafts[callId] = {
    origin: call,
    currentMethod: body.method.value,
    ...getDefaultValues(),
    [body.method.value]: body,
  };
});

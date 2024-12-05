// Account
import { GetAccount } from './account/GetAccount/GetAccount.jsx';
import { GetAccountChanges } from './account/GetAccountChanges/GetAccountChanges.jsx';
// Contract
import { GetContractWasm } from './contract/GetContractWasm.jsx';
import { GetContractState } from './contract/GetContractState.jsx';
import { GetContractWasmChanges } from './contract/GetContractWasmChanges.jsx';
import { GetContractStateChanges } from './contract/GetContractStateChanges.jsx';
import { CallContractViewMethod } from './contract/CallContractViewMethod/CallContractViewMethod.jsx';
// Keys
import { GetAccountKey } from './keys/GetAccountKey/GetAccountKey.jsx';
import { GetChangesForAccountKey } from './keys/GetChangesForAccountKey/GetChangesForAccountKey.jsx';
import { GetAccountKeys } from './keys/GetAccountKeys.jsx';
import { GetChangesForAccountKeys } from './keys/GetChangesForAccountKeys.jsx';
// Block
import { GetBlock } from './block/GetBlock.jsx';
import { GetBlockChanges } from './block/GetBlockChanges.jsx';
import { GetChunk } from './block/GetChunk/GetChunk.jsx';
// Transactions
import { GetTransaction } from './transactions/GetTransaction.jsx';
import { GetDetailedTransaction } from './transactions/GetDetailedTransaction.jsx';
import { GetReceipt } from './transactions/GetReceipt.jsx';
// Protocol
import { GetGenesisConfig } from './protocol/GetGenesisConfig.jsx';
import { GetProtocolConfig } from './protocol/GetProtocolConfig.jsx';
// Network
import { GetNodeStatus } from './network/GetNodeStatus.jsx';
import { GetNetworkInfo } from './network/GetNetworkInfo.jsx';
import { GetGasPrice } from './network/GetGasPrice/GetGasPrice.jsx';
// Validators
import { GetValidators } from './validators/GetValidators/GetValidators.jsx';
import { GetMaintenanceWindows } from './validators/GetMaintenanceWindows.jsx';

const methods = {
  // Account
  getAccount: GetAccount,
  getAccountChanges: GetAccountChanges,
  // Contract
  getContractWasm: GetContractWasm,
  getContractState: GetContractState,
  getContractWasmChanges: GetContractWasmChanges,
  getContractStateChanges: GetContractStateChanges,
  callContractViewMethod: CallContractViewMethod,
  // Keys
  getAccountKey: GetAccountKey,
  getChangesForAccountKey: GetChangesForAccountKey,
  getAccountKeys: GetAccountKeys,
  getChangesForAccountKeys: GetChangesForAccountKeys,
  // Block
  getBlock: GetBlock,
  getBlockChanges: GetBlockChanges,
  getChunk: GetChunk,
  // Transactions
  getTransaction: GetTransaction,
  getDetailedTransaction: GetDetailedTransaction,
  getReceipt: GetReceipt,
  // Protocol
  getGenesisConfig: GetGenesisConfig,
  getProtocolConfig: GetProtocolConfig,
  // Network
  getNodeStatus: GetNodeStatus,
  getNetworkInfo: GetNetworkInfo,
  getGasPrice: GetGasPrice,
  // Validators
  getValidators: GetValidators,
  getMaintenanceWindows: GetMaintenanceWindows,
};

export const getMethod = (method) => (!methods[method] ? null : methods[method]);

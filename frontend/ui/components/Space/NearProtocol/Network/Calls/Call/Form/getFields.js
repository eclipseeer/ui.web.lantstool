import { GetAccountData } from './methods/GetAccountData/GetAccountData.jsx';
import { GetAccountChanges } from './methods/GetAccountChanges/GetAccountChanges.jsx';
import { GetContractWasm } from './methods/GetContractWasm/GetContractWasm.jsx';
import { GetContractState } from './methods/GetContractState/GetContractState.jsx';
import { CallContractViewMethod } from './methods/CallContractViewMethod/CallContractViewMethod.jsx';

const fields = {
  getAccountData: GetAccountData,
  getAccountChanges: GetAccountChanges,
  getContractWasm: GetContractWasm,
  getContractState: GetContractState,
  callContractViewMethod: CallContractViewMethod,
};

export const getFields = (method) => (!fields[method?.value] ? null : fields[method?.value]);

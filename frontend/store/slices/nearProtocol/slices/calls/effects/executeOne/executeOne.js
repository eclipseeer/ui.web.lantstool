import { effect } from '@react-vault';
import { methods } from './methods/index.js';

const getErrorMessage = (error) => {
  try {
    return JSON.parse(error.message);
  } catch (e) {
    return { internalError: error.message };
  }
};

export const executeOne = effect(async ({ store, slice, payload }) => {
  const { spaceId, networkId, callId, formValues } = payload;
  const createRpc = store.getEffects((store) => store.nearProtocol.createRpc);
  const setResult = slice.getActions((slice) => slice.setResult);

  console.log(formValues);
  return;

  try {
    setResult({ callId, isOpen: true, isLoading: true });
    const rpc = await createRpc({ spaceId, networkId });

    const result = await methods[formValues.method.value](rpc, formValues.params);
    setResult({ callId, result, isLoading: false });
  } catch (e) {
    console.log(e);
    setResult({
      callId,
      result: getErrorMessage(e),
      isLoading: false,
    });
  }
});

import { getBlockTargetParams } from '../utils.js';

export const getAccountKey = (rpc, params) =>
  rpc.getAccountKey(
    getBlockTargetParams({
      accountId: params.accountId.value,
      publicKey: params.publicKey.value,
      blockTarget: params.blockTarget,
      finality: params.finality.value,
      blockId: params.blockId,
      responseNameConvention: 'snake_case',
    }),
  );

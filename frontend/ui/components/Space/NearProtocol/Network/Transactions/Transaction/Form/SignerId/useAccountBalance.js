import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStoreEntity } from '@react-vault';
import { formatNumber } from '../../../../../../../../../store/helpers/utils.js';

export const useAccountBalance = (accountId) => {
  const { spaceId, networkId } = useParams();
  const [balance, setBalance] = useState(null)
  const rpc = useStoreEntity((store) => store.nearProtocol.rpcProvider);

  useEffect(() => {
    if (!accountId) return;
    (async () => {
      try {
        await rpc.configure({ spaceId, networkId });
        const balance = await rpc.getAccount({ accountId: accountId.value });
        setBalance(formatNumber(balance.amount));
      } catch (e) {
        setBalance(null);
      }
    })();
  }, [accountId]);

  return balance;
};

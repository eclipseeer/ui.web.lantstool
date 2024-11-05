import { effect } from '@react-vault';
import { parseSeedPhrase } from 'near-seed-phrase';

export const importFromSeedPhrase = effect(async ({ store, slice, payload }) => {
  const { formValues, spaceId, networkId, closeModal } = payload;
  const [backend] = store.getEntities((store) => store.backend);
  const addKeyToList = slice.getActions((slice) => slice.addKeyToList);
  const setNotification = store.getActions((store) => store.setNotification);

  try {
    const { seedPhrase, derivationPath } = formValues;
    const { publicKey, secretKey: privateKey } = parseSeedPhrase(seedPhrase, derivationPath);

    const key = await backend.sendRequest('nearProtocol.keys.create', {
      publicKey,
      spaceId,
      networkId,
      privateKey,
      seedPhrase,
      derivationPath,
    });

    setTimeout(() => {
      setNotification({ isOpen: true, message: 'Key imported successfully', variant: 'success' });
    }, 100);
    addKeyToList(key);
    closeModal();
  } catch (e) {
    console.log(e);
  }
});

import { errorWithCode } from '../../../../utils/utils.js';

export const deleteFile = async (name) => {
  try {
    const dir = await navigator.storage.getDirectory();
    await dir.removeEntry(name);
  } catch (e) {
    errorWithCode(400, `Cannot remove file: ${name}`);
  }
};
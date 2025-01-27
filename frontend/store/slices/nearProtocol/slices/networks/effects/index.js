import { createFromPreset } from './createFromPreset.js';
import { createManually } from './createManually.js';
import { getAll } from './getAll.js';
import { getOne } from './getOne.js';
import { updateActiveRpc } from './updateActiveRpc.js';
import { removeOne } from './removeOne.js';
import { addPredefinedRpc } from './addPredefinedRpc.js';
import { addUserDefinedRpc } from './addUserDefinedRpc.js';
import { removeRpc } from './removeRpc.js';
import { editUserDefinedRpc } from './editUserDefinedRpc.js';

export const effects = {
  createFromPreset,
  createManually,
  getAll,
  getOne,
  updateActiveRpc,
  removeOne,
  addPredefinedRpc,
  addUserDefinedRpc,
  removeRpc,
  editUserDefinedRpc,
};

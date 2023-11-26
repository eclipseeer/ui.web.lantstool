import { initState } from './initState.js';
import { actions } from './actions/';
import { effects } from './effects/';

export const transactions = {
  ...initState,
  ...actions,
  ...effects,
};
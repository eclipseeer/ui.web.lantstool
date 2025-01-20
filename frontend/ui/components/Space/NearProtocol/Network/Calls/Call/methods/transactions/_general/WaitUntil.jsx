import { FormDropdown } from '../../../../../../../../_general/dropdown/FormDropdown.jsx';
import { config } from '../../_general/config.js';

const { waitUntil } = config;

const options = [
  waitUntil.NONE,
  waitUntil.INCLUDED,
  waitUntil.EXECUTED_OPTIMISTIC,
  waitUntil.INCLUDED_FINAL,
  waitUntil.EXECUTED,
  waitUntil.FINAL,
];

export const WaitUntil = ({ control }) => (
  <FormDropdown
    name="waitUntil"
    label="Wait Until"
    options={options}
    control={control}
    isSearchable
    copy={false}
  />
);

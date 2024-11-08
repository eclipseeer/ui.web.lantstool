import { Dropdown } from '../../../../../../../_general/Dropdown/Dropdown.jsx';
import { useAccountsOptions } from '../../../../_general/hooks/useAccountsOptions.js';
import { Form } from '../_general/Form/Form.jsx';
import { BlockTarget } from '../_general/BlockTarget/BlockTarget.jsx';

export const GetKeys = ({ call, draft }) => {
  const options = useAccountsOptions();
  return (
    <Form call={call} draft={draft}>
      <Dropdown
        name="accountId"
        label="Account Id"
        options={options}
        isSearchable
        isClearable
        creatableSelect
      />
      <BlockTarget />
    </Form>
  );
};

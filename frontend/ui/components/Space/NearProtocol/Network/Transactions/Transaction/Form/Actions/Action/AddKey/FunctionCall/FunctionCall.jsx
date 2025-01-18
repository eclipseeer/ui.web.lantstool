import { Allowance } from './Allowance/Allowance.jsx';
import { AllowedMethods } from './AllowedMethods/AllowedMethods.jsx';
import { FormDropdown } from '../../../../../../../../../../_general/dropdown/FormDropdown.jsx';
import { useAccountsOptions } from '../../../../../../../_general/hooks/useAccountsOptions.js';
import cn from './FunctionCall.module.scss';

export const FunctionCall = ({ form, getName }) => {
  const options = useAccountsOptions();

  return (
    <>
      <div className={cn.functionCall}>
        <FormDropdown
          control={form.control}
          options={options}
          name={getName('restrictions.contractId')}
          label="Contract Id"
          isClearable
          isSearchable
          creatableSelect
          placeholder="Select or type..."
        />
      </div>
      <Allowance form={form} getName={getName} />
      <AllowedMethods form={form} getName={getName} />
    </>
  );
};

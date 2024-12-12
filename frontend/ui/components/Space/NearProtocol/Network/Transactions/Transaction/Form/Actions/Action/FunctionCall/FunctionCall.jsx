import { Arguments } from './Arguments/Arguments.jsx';
import { ActionBase } from '../_general/ActionBase/ActionBase.jsx';
import { InputDropdownGroup } from '../../../../../../../../../_general/InputDropdownGroup/InputDropdownGroup.jsx';
import { FormDropdown } from '../../../../../../../../../_general/FormDropdown/FormDropdown.jsx';
import { Tooltip } from '../../../../../../../../../_general/Tooltip/Tooltip.jsx';
import { useAccountsOptions } from '../../../../../../_general/hooks/useAccountsOptions.js';
import {useDropdownOptions} from '../../../../../../_general/hooks/useDropdownOptions.js';
import cn from './FunctionCall.module.scss';

const gasOptions = [
  { value: 'tGas', label: 'TGas' },
  { value: 'gas', label: 'Gas' },
];

const depositOptions = [
  { value: 'NEAR', label: 'NEAR' },
  { value: 'yoctoNEAR', label: 'yoctoNEAR' },
];

export const FunctionCall = ({ iconStyle, form, getName, removeAction, order, name }) => {
  const { control } = form;
  const ContractOptions = useAccountsOptions();
  const methodNameOptions = useDropdownOptions(control, getName('contractId.value'));

  //TODO lock receiver when we select contract id
  return (
    <ActionBase
      removeAction={removeAction}
      label={name}
      order={order}
      color="purple"
      tooltipContent="Functioin call"
      iconStyle={iconStyle}
    >
      <div className={cn.container}>
        <FormDropdown
          control={control}
          options={ContractOptions}
          name={getName('contractId')}
          label="Contract ID"
          isSearchable
          isClearable
          creatableSelect
          placeholder="contract"
          copy={false}
          tooltip={<Tooltip content="Contract id" placement="top" defaultContent />}
        />
        <FormDropdown
          control={control}
          options={methodNameOptions}
          name={getName('methodName')}
          label="Method name"
          placeholder="contract_method"
          copy={false}
          tooltip={<Tooltip content="Method name" placement="top" defaultContent />}
        />

        <Arguments form={form} name={getName('arguments')} />
        <div className={cn.wrapper}>
          <InputDropdownGroup
            control={control}
            name={getName('gas')}
            label="Gas coverage"
            options={gasOptions}
            dropDownName={getName('gasType')}
            dynamicErrorSpace
            tooltip={<Tooltip content="Gas coverage" placement="top" defaultContent />}

          />
          <InputDropdownGroup
            control={control}
            name={getName('deposit')}
            label="Deposit"
            options={depositOptions}
            dropDownName={getName('depositType')}
            dynamicErrorSpace
            tooltip={<Tooltip content="Deposit" placement="top" defaultContent />}
          />
        </div>
      </div>
    </ActionBase>
  );
};

import Select from 'react-select';
import { Controller, useWatch } from 'react-hook-form';
import { useStoreEffect } from '../../../../../../../../react-vault';
import { useEffect, useState } from 'react';
import { selectStyles } from '../general/selectStyles.ts';
import { Option } from '../general/Option/Option.tsx';
import { getOptions } from './getOptions.ts';
import { SelectHeadLabel } from '../general/SelectHeadLabel/SelectHeadLabel.tsx';
import { IndicatorsContainer } from '../general/IndicatorsContainer/IndicatorsContainer.tsx';
import cn from './SignerKey.module.css';

export const SignerKey = ({ form }: any) => {
  const { control } = form;
  const getAccount = useStoreEffect((store: any) => store.vault.getAccount);
  const [options, setOptions] = useState([]);
  const accountId = useWatch({ control, name: 'signerId.value' });
  const signerKey = useWatch({ control, name: 'signerKey' });

  useEffect(() => {
    getOptions(accountId, getAccount, setOptions);
  }, [accountId]);

  return (
    <div className={cn.signerKey}>
      <SelectHeadLabel text="Access Key" permission={signerKey} />
      <Controller
        name="signerKey"
        control={control}
        render={({ field }: any) => (
          <Select
            {...field}
            components={{ Option, IndicatorsContainer }}
            isSearchable
            options={options}
            styles={selectStyles}
          />
        )}
      />
    </div>
  );
};

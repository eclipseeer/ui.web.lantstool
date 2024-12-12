import { useFieldArray, useWatch } from 'react-hook-form';
import { RadioButton } from '../../../../../../../../../../../_general/RadioButton/RadioButton.jsx';
import { Button } from '../../../../../../../../../../../_general/Button/Button.jsx';
import { FormDropdownGroup } from '../../../../../../../../../../../_general/FormDropdownGroup/FormDropdownGroup.jsx';
import { Tooltip } from '../../../../../../../../../../../_general/Tooltip/Tooltip.jsx';
import { useDropdownOptions } from '../../../../../../../../_general/hooks/useDropdownOptions.js';
import cn from './AllowedMethods.module.scss';

export const AllowedMethods = ({ form, getName }) => {
  const allowedMethodsName = getName('permission.restrictions.allowedMethods');
  const methodNamesName = getName('permission.restrictions.methodNames');
  const { control, register } = form;
  const options = useDropdownOptions(control, getName('permission.restrictions.receiverId.value'));

  const allowedMethods = useWatch({
    control,
    name: allowedMethodsName,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: methodNamesName,
  });

  const addMethod = () => append({ name: '' });
  const removeMethod = (index) => remove(index);

  return (
    <>
      <h2 className={cn.title}>Allowed methods</h2>
      <div className={cn.container}>
        <RadioButton label="All" name={allowedMethodsName} register={register} value="All" />
        <RadioButton
          label="Certain"
          name={allowedMethodsName}
          register={register}
          value="Certain"
        />
      </div>
      {allowedMethods === 'Certain' && (
        <div className={cn.methods}>
          {fields.map((method, index) => (
            <FormDropdownGroup
              key={index}
              control={control}
              options={options}
              name={`${methodNamesName}.${index}.name`}
              label="Method Name"
              onClick={() => removeMethod(index)}
              actionDisabled={fields.length === 1}
              iconStyles={cn.icon}
              tooltip={<Tooltip content="Method name" placement="top" defaultContent />}
            />
          ))}
          <Button iconLeftStyles={cn.iconAdd} color="secondary" size="medium" onClick={addMethod}>
            Add more
          </Button>
        </div>
      )}
    </>
  );
};

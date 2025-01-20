import { Form } from '../../_general/components/Form/Form.jsx';
import { FormInput } from '../../../../../../../../_general/input/FormInput/FormInput.jsx';
import { MethodDescription } from '../../_general/components/MethodDescription/MethodDescription.jsx';
import { ConfigureTitle } from '../../_general/components/ConfigureTitle/ConfiguresTitle.jsx';
import { schema } from './schema.js';

export const GetReceipt = ({ call, draft }) => {
  return (
    <Form
      call={call}
      draft={draft}
      schema={schema}
      methodDescription={
        <MethodDescription
          description={<>Returns details about a receipt.</>}
          link="https://docs.near.org/api/rpc/transactions#receipt-by-id"
        />
      }
    >
      <ConfigureTitle />
      <FormInput name="receiptId" label="Receipt Id" />
    </Form>
  );
};

import { Form } from '../../_general/components/Form/Form.jsx';
import { AccountId } from './AccountId.jsx';
import { PublicKey } from './PublicKey/PublicKey.jsx';
import { BlockTarget } from '../../_general/components/BlockTarget/BlockTarget.jsx';
import { ConfigureTitle } from '../../_general/components/ConfigureTitle/ConfiguresTitle.jsx';
import { MethodDescription } from '../../_general/components/MethodDescription/MethodDescription.jsx';
import { schema } from './schema.js';

export const GetAccountKey = ({ call, draft }) => {
  return (
    <Form
      call={call}
      draft={draft}
      schema={schema}
      methodDescription={
        <MethodDescription
          description={
            <>
              Returns full details about a specific account key, including detailed information such
              as nonce and permission.
            </>
          }
          link="https://docs.near.org/api/rpc/access-keys#view-access-key"
        />
      }
    >
      <ConfigureTitle />
      <AccountId />
      <PublicKey />
      <BlockTarget />
    </Form>
  );
};

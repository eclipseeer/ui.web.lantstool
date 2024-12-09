import { Button } from '../../../../../../../_general/Button/Button.jsx';
import { EditName } from './EditName/EditName.jsx';
import { useParams } from 'react-router-dom';
import { useStoreEffect } from '@react-vault';
import { Tooltip } from '../../../../../../../_general/Tooltip/Tooltip.jsx';
import { DuplicateOutline } from '../../../../../../../_general/icons/DuplicateOutline.jsx';
import { ExportLinear } from '../../../../../../../_general/icons/ExportLinear.jsx';
import { TrashBinOutline } from '../../../../../../../_general/icons/TrashBinOutline.jsx';
import { dateFormatter } from '../../../../../../../../../store/helpers/formatDate.js';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal/DeleteModal.jsx';
import cn from './Topbar.module.scss';

export const Topbar = ({ transaction }) => {
  const { spaceId, networkId, transactionId } = useParams();
  const duplicateOne = useStoreEffect((store) => store.nearProtocol.transactions.duplicateOne);
  const [isOpen, setOpen] = useState(false);

  const duplicate = () => duplicateOne({ spaceId, networkId, transactionId });
  const openModal = () => setOpen(true);

  return (
    <div className={cn.topbar}>
      <div>
        <EditName transaction={transaction} />
        <p className={cn.date}>Created {dateFormatter(transaction.createdAt)}</p>
      </div>
      <div className={cn.buttonWrapper}>
        <Tooltip arrow={false} content="Duplicate" placement="top">
          <Button onClick={duplicate} size="medium" color="secondary" IconLeft={DuplicateOutline} />
        </Tooltip>
        <Tooltip arrow={false} content="Export JSON" placement="top">
          <Button size="medium" color="secondary" IconLeft={ExportLinear} />
        </Tooltip>
        <Tooltip arrow={false} content="Delete" placement="top">
          <Button onClick={openModal} size="medium" color="secondary" IconLeft={TrashBinOutline} />
        </Tooltip>
      </div>
      {isOpen && <DeleteModal transaction={transaction} setOpen={setOpen} />}
    </div>
  );
};

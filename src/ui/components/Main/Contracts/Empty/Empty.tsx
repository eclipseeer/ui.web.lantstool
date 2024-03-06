import cn from './Empty.module.css';
import { CreateContract } from '../general/CreateContract/CreateContract.tsx';

export const Empty = () => {
  return (
    <div className={cn.empty}>
      <CreateContract styles={cn.modalContainer} />
    </div>
  );
};

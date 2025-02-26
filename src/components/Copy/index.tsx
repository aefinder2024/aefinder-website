import { CopyOutlined } from '@ant-design/icons';
import { message } from 'antd';
import clsx from 'clsx';

type CopyProps = {
  label?: string;
  content: string | number;
  isShowCopy?: boolean;
  className?: string;
};

message.config({
  top: 100,
  duration: 2,
  maxCount: 2,
});

export default function Copy({
  label,
  content,
  isShowCopy = false,
  className,
}: CopyProps) {
  const [messageApi, contextHolder] = message.useMessage();

  const handleCopy = () => {
    navigator?.clipboard?.writeText(String(content));
    messageApi.success({
      content: 'Copied',
      key: 'copy',
    });
  };

  return (
    <div className={clsx('inline-block', className)}>
      {contextHolder}
      <div className='text-gray-80 text-xs'>{label}</div>
      <div className='text-block text-base font-medium'>
        <span className='mr-2 max-w-[80%] overflow-hidden whitespace-pre-wrap break-words'>
          {content}
        </span>
        {isShowCopy && <CopyOutlined onClick={() => handleCopy()} />}
      </div>
    </div>
  );
}

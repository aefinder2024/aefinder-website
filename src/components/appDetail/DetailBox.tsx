import { CreateAppResponse } from '@/types/appType';

type DetailBoxProps = {
  currentAppDetail: CreateAppResponse;
};

export default function DetailBox({ currentAppDetail }: DetailBoxProps) {
  return (
    <div className='bg-gray-F5 mt-[30px] flex w-full items-start justify-start rounded-md px-[20px] py-[30px]'>
      <div className='w-[50%]'>
        <div className='text-block text-xl font-medium'>
          {currentAppDetail.appName}
        </div>
        <div>
          <div>aelf</div>
          <div>{currentAppDetail.UpdateTime}</div>
          <div>{currentAppDetail.CreateTime}</div>
        </div>
        <div>{currentAppDetail.description}</div>
      </div>
      <div>
        <div>{currentAppDetail.appId}</div>
        <div>{currentAppDetail.deployKey}</div>
        <div>{currentAppDetail.sourceCodeUrl}</div>
      </div>
    </div>
  );
}

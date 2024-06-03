import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';
import UnstyledLink from '@/components/links/UnstyledLink';

import { useAppSelector } from '@/store/hooks';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const username = useAppSelector((state) => state.common.username);
  return (
    <header className='border-gray-E0 flex h-[72px] w-full items-center justify-between border-b px-[40px] py-[24px]'>
      <Image src='/svg/aefinder-logo.svg' alt='logo' width={150} height={30} />
      {pathname !== '/login' && (
        <div>
          <PrimaryLink href='/dashboard'>My Dashboard</PrimaryLink>
          <UnstyledLink href='https://www.baidu.com' className='mx-[40px]'>
            Docs
          </UnstyledLink>
          <span className='w-25 border-gray-E0 inline-block h-10 rounded border px-[20px] leading-[40px]'>
            <Image
              src='/svg/user.svg'
              alt='user'
              width={18}
              height={18}
              className='mr-2 inline-block'
            />
            {username}
          </span>
        </div>
      )}
    </header>
  );
}

import { GithubOutlined,WechatOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = 'ZYAPI';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wzy279/zyapi-backend',
          blankTarget: true,
        },
        {
          key: 'zy出品，必出精品',
          title: 'zy出品，必出精品',
          href: 'https://github.com/wzy279/zyapi-backend',
          blankTarget: true,
        },
        {
          key: 'weichat',
          title: <WechatOutlined />,
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;

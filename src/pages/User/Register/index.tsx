import Footer from '@/components/Footer';
// import { login } from '@/services/ant-design-pro/api';
import {
userLoginByEmailGetCodeUsingGET,
userRegisterUsingPOST
} from '@/services/fragmentation-backend/userController';
import { LockOutlined,MailOutlined,UserOutlined } from '@ant-design/icons';
import { LoginForm,ProFormCaptcha,ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Helmet,history } from '@umijs/max';
import { Alert,message,Tabs } from 'antd';
import React,{ useState } from 'react';
import Settings from '../../../../config/defaultSettings';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};
const Register: React.FC = () => {
  const [userLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });
  /**
   * 获取邮箱验证码
   */
  const handleGetCaptcha = async (userEmail:string) => {
    console.log(userEmail)
    try {
      // 模拟成功获取验证码的情况
      // 这里假设调用 getFakeCaptcha 并传递邮箱参数来获取验证码
      const result = await userLoginByEmailGetCodeUsingGET({
        email: userEmail,
        encode: '1',
      });
      if (result.message === 'ok') {
        message.success('获取验证码成功！'); // 显示获取验证码成功的消息
      }
    } catch (error) {
      // 获取验证码失败的情况
      message.error('获取验证码失败，请重试！');
    }
  };
  const handleSubmit = async (values: API.UserRegisterRequest) => {
    try {
      // 登录
      const msg = await userRegisterUsingPOST({
        ...values,
      });
      if (msg.message === 'ok') {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);
        history.push('/user/login');
        return;
      }
    } catch (error) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      console.log(error);
      message.error(defaultLoginFailureMessage);
    }
  };
  // TODO 获取验证码的方法
  const { status, type: loginType } = userLoginState;
  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'注册'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          logo={<img alt="logo" src="/logo.svg" />}
          title="ZYAPI 开放平台"
          subTitle={'Welcome to ZYAPI'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: '注册',
              },
            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage content={'错误的用户名和密码(admin/ant.design)'} />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'用户名'}
                rules={[
                  {
                    required: true,
                    message: '用户名是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'确认密码'}
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('userPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不一致！'));
                    },
                  }),
                ]}
              />
                <ProFormText
                  name="userEmail"
                  fieldProps={{
                    size: 'large',
                    prefix: <MailOutlined />,
                  }}
                  placeholder="邮箱"
                  rules={[
                    {
                      // 邮箱是选填项
                      required: false,
                    },
                  ]}
                />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder="请输入验证码！"
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} 秒后重新获取`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '验证码是必填项！',
                  },
                ]}
                onGetCaptcha={async ()=>{
                  handleGetCaptcha("wangzhaoyiww@gmail.com")
                }}
              />
            </>
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <a
              style={{
                float: 'right',
              }}
              href={'/user/login'}
            >
              返回 登录
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};
export default Register;

/* eslint-disable react/function-component-definition */
import { Layout } from 'antd';

import './App.scss';
import ContentContent from './Components/ContentContent/ContentContent';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import './commonStyles/baseStyles.scss';

const { Header, Content } = Layout;
const App = () => {
  return (
    <Layout className="layout__layout">
      <Header className="layout__header">
        <HeaderContent />
      </Header>
      <Content className="layout__content">
        <ContentContent />
      </Content>
    </Layout>
  );
};
export default App;

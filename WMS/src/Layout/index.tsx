
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import Iten from '../components/Register/Item';
import { IRolePage } from '../routes';


const { Header, Footer } = Layout;
const items1: MenuProps['items'] = ['-A', '-B', '-C'].map((key) => ({
    key,
    label: `${key}`,
}));

function Layot({ roleProp }: IRolePage) {
    console.log(roleProp.role);


    return (
        <Layout>

            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }} />
            </Header>
            <Iten />
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default Layot

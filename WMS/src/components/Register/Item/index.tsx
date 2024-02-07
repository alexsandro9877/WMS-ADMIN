import React from 'react'

import { Breadcrumb, Layout, theme } from 'antd';

const { Content } = Layout;

const Iten = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Content style={{ padding: '0 48px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
            <Layout
                style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
            >

                <Content style={{ padding: '0 24px', minHeight: 280 }}>Contend</Content>
            </Layout>
        </Content>
    )
}

export default Iten

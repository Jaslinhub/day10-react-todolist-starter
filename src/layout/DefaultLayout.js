import {NavLink, Outlet} from "react-router";
import {Layout, Menu} from "antd";
import {FormOutlined, HomeOutlined, QuestionCircleOutlined,} from '@ant-design/icons';

const items = [
    {
        label: <NavLink to={'/'} >Home</NavLink>,
        key: 'home',
        icon: <HomeOutlined/>
    },
    {
        label: <NavLink to={'/todos'}> To do List </NavLink>,
        key: 'todos',
        icon: <FormOutlined />
    },
    {
        label: <NavLink to={'/about'}>About</NavLink>,
        key: 'about',
        icon: <QuestionCircleOutlined />
    }
]

export function DefaultLayout() {
    return <>
        <Layout style={{height: '100%'}}>
            <Layout.Header>
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Layout.Header>


            <Layout.Content>
                <h1>Welcome！</h1>
                <Outlet/>
            </Layout.Content>
            <Layout.Footer style={{textAlign: 'center'}}>
                Jasmine Design ©2025
            </Layout.Footer>
        </Layout>
    </>;
}
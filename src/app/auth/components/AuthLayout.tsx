import { Layout, Row, Space } from 'antd'
import React from 'react'
import Image from 'next/image';
import psyduck from "@/assets/images/psyduck.png"
const { Header, Footer, Sider, Content } = Layout;
interface LayoutProps {
    children: React.ReactNode
}
const AuthLayout = ({ children }: LayoutProps) => {
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}  >
            <Header style={{ backgroundColor: 'transparent' }}>
                <Row>
                    <Image src={psyduck} alt="" width={100} height={100} />
                </Row>
            </Header>
            {children}
        </Space >
    )
}

export default AuthLayout

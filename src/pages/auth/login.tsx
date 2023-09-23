import React, { useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card, Layout, Space, Row, Input, Form, Col } from "antd";
import psyduck from "@/assets/images/psyduck.png"
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, LinkButton } from "@/components/Button/CustomButton";

const { Header, Footer, Sider, Content } = Layout;

export default function LoginComponent() {
    const router = useRouter()
    const [form] = Form.useForm();
    const [loading, setLoading] = useState<boolean>(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    };
    return (

        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}  >
            <Header style={{ backgroundColor: 'transparent' }}>
                <Row>
                    <Image src={psyduck} alt="" width={100} height={100} />
                </Row>
            </Header>
            <Row align="middle" justify={"center"}>
                <Col xs={6} lg={9} sm={12}>
                    <Card
                        bordered={false}
                        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                    >
                        <h1>Sign in</h1>
                        <p className="sub-heading">Stay updated on your professional world</p>
                        <Form form={form} onFinish={onFinish}>
                            <Form.Item
                                name={"email"}
                            rules={[{ required: true, message: 'Please input your email!' }]}

                            >
                                <Input placeholder="Email or Phone" disabled={loading} prefix={<MailOutlined />} size="large" />
                            </Form.Item>
                            <Form.Item
                                name={"password"}
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    size="large"
                                    prefix={<LockOutlined />}
                                    disabled={loading}
                                />
                            </Form.Item>
                            <Form.Item>
                                <LinkButton title="Forgot Password?" />
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col span={24} >
                                        <Button type="primary" htmlType="submit" title="Sign In" style={{ width: '100%' }} loading={loading} />
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>

                        <hr className="hr-text" data-content="or" />
                        <div className="google-btn-container">
                            <p className="go-to-signup">
                                New to App?
                                <span onClick={() => router.push("/register")}>
                                    Join now
                                </span>
                            </p>
                        </div>
                    </Card>

                </Col>
            </Row>
        </Space >
    );
}
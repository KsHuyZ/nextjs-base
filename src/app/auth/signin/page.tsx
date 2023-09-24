"use client"
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import { Card, Layout, Space, Row, Input, Form, Col, Button as AntButton, Typography } from "antd";
import { GithubIcon, GoogleIcon } from "@/assets/icons";
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, LinkButton } from "@/components/Button/CustomButton";
import { validateEmail } from "@/utils";
import Head from "next/head";
import AuthLayout from "../components/AuthLayout";

const { Title, Paragraph } = Typography


export default function LoginPage() {
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
        <AuthLayout>
            <Row align="middle" justify={"center"}>
                <Head>
                    <title>Sign In</title>
                    <meta name="description" content="Hihihhhhihihihihi"/>
                </Head>
                <Col xs={6} lg={9} sm={12}>
                    <Card
                        bordered={false}
                        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
                    >
                        <Title>Sign in</Title>
                        <Space>
                            <Paragraph className="sub-heading">Stay updated on your professional world</Paragraph>
                        </Space>
                        <Form form={form} onFinish={onFinish}>

                            <Form.Item
                                name={"email"}
                                rules={[{ required: true, message: 'Please input your email!' }, { validator: validateEmail },]}

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
                        <Row style={{ margin: '10px 0' }}>
                            <AntButton type="default" icon={<GoogleIcon />} style={{ width: '100%' }} loading={loading}>Sign in with Google</AntButton>
                        </Row>
                        <Row style={{ margin: '10px 0' }}>
                            <AntButton type="default" icon={<GithubIcon />} style={{ width: '100%' }} loading={loading}>Sign in with Github</AntButton>
                        </Row>
                        <Row style={{ margin: '10px 0' }} justify={"center"}>
                            <Col>
                                <Space>  New to App?
                                    <LinkButton onClick={() => router.push("/register")} title="Join now" />
                                </Space>
                            </Col>

                        </Row>

                    </Card>

                </Col>
            </Row>
        </AuthLayout>
    );
}
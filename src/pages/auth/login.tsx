import React, { useState } from "react";
// import { LoginAPI } from "../api/AuthAPI";
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card, Layout, Space, Row, Input, Form, Button, Col } from "antd";
import psyduck from "../../assets/images/psyduck.png"
const { Header, Footer, Sider, Content } = Layout;

export default function LoginComponent() {
    const router = useRouter()
    const [form] = Form.useForm();
    const login = async () => {
        try {
            // let res = await LoginAPI(credentails.email, credentails.password);
            // localStorage.setItem("userEmail", res.user.email);
            router.push("/home");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}  >
            <Layout>
                <Header style={{ backgroundColor: 'transparent' }}>
                    <Row>
                        <Image src={psyduck} alt="" width={200} height={200} />
                    </Row>
                </Header>
                <Row>
                    <Col span={12} offset={6}>
                        <Card>
                            <h1>Sign in</h1>
                            <p className="sub-heading">Stay updated on your professional world</p>
                            <Form form={form} >
                                <Form.Item>
                                    <Input placeholder="Email or Phone" />
                                </Form.Item>
                                <Input.Password
                                    placeholder="Password"
                                />
                            </Form>
                            <Button onClick={login} className="login-btn">
                                Sign in
                            </Button>
                            <hr className="hr-text" data-content="or" />
                            <div className="google-btn-container">
                                <p className="go-to-signup">
                                    New to LinkedIn?{" "}
                                    <span className="join-now" onClick={() => router.push("/register")}>
                                        Join now
                                    </span>
                                </p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </Space>
    );
}
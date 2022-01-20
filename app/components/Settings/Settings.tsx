import React, { FC } from 'react'
import { Form, Input, Button, Select, Row, Col, Divider, Layout } from 'antd'
import TimezoneSelect from '@Components/Settings/TimezoneSelect'

import './Settings.scss'

const Settings = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const { Option } = Select
  const { Content } = Layout

  return (
    <Layout className="Settings" style={{ height: '100vh', padding: '25px' }}>
      <Content className="Settings__content" style={{ padding: '15px' }}>
        <section>
          <h1>Settings</h1>
          <p>Manage team settings</p>
          <Divider />
          <h2>General</h2>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            colon={false}
          >
            <Row gutter={[16, 0]}>
              <Col>
                <Form.Item
                  tooltip={<span>tooltip</span>}
                  label={<span>Name</span>}
                  name="name"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Identifier"
                  name="identifier"
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save settings
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section>
          <h2>
            Timezone
          </h2>
          <p>
            The timezone should be set as the location where most of your team members reside.
            All other times referenced by the team will be relative to this timezone setting.
            For example, if the team uses cycled, each cycle will start at midnight in the
            specified timezone
          </p>
          <TimezoneSelect />
        </section>
        <section>
          <h2>Estimates</h2>
          <p>
            Estimates are a great way of communicating the complexity of each issue
            or to calculate whether a cycle has more room left.
            Below you con chose how team estimates issue complexity.
          </p>
          <Row>
            <Col>
              <span>Issue estimation</span>
            </Col>
            <Col>
              <Select
                style={{ width: 200 }}
                defaultValue={'Exponential'}
              >
                <Option
                  value="Exponential">
                  <b>Exponential</b> (0,1,2,4,8,16,32,64 Points)
                </Option>
                <Option
                  value="Fibonacci"
                >
                  <b>Fibonacci</b> (0,1,2,3,5,8,13,21 Points)
                </Option>
                <Option
                  value="Linear"
                >
                  <b>Linear</b> (0,1,2,3,4,5,6,7 Points)
                </Option>
                <Option
                  value="T-Shirt"
                >
                  <b>T-Shirt</b> (-, XS,S,M,L,XL,XXL,XXXL)
                </Option>
              </Select>
            </Col>
          </Row>
        </section>
      </Content>
    </Layout>
  )
}

export default Settings

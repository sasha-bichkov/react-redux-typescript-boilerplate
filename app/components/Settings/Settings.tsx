import React from 'react'
import {
  Form, Input, Button, Select,
  Row, Col, Divider, Layout,
  Switch, Typography
} from 'antd'

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
  const { Paragraph } = Typography

  const SettingEstimationSelect = () => {
    return (
      <Row className='Settings__estimationSelect' align={'middle'}>
        <Col xs={{ span: 24 }} md={12} className="Settings__estimationSelectText Settings__text">
          <span>
            Issue estimation
          </span>
        </Col>
        <Col xs={24} md={12}>
          <Select
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
    )
  }

  return (
    <Layout className="Settings" style={{ height: '100%', padding: '25px' }}>
      <Content className="Settings__content" style={{ padding: '15px' }}>
        <section className="Settings__section
        ">
          <h1>Settings</h1>
          <Paragraph className="Settings__text">
            Manage team settings
          </Paragraph>
          <Divider />
          <h2>
            General
          </h2>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className="Settings__form"
          >
            <Form.Item
              tooltip={<span>tooltip</span>}
              label={<span>Name</span>}
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter the name of your team'
                }
              ]}
            >
              <Input className="Settings__input" />
            </Form.Item>
            <Form.Item
              label="Identifier"
              name="identifier"
              rules={[
                {
                  required: true,
                  message: 'Please enter the identifier'
                }
              ]}
            >
              <Input className="Settings__input" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save settings
              </Button>
            </Form.Item>
          </Form>
        </section>
        <section className="Settings__section">
          <h3>
            Timezone
          </h3>
          <Paragraph className="Settings__text">
            The timezone should be set as the location where most of your team members reside.
            All other times referenced by the team will be relative to this timezone setting.
            For example, if the team uses cycled, each cycle will start at midnight in the
            specified timezone
          </Paragraph>
          <TimezoneSelect />
        </section>
        <section className="Settings__section">
          <h3>
            Estimates
          </h3>
          <Paragraph className="Settings__text">
            Estimates are a great way of communicating the complexity of each issue
            or to calculate whether a cycle has more room left.
            Below you con chose how team estimates issue complexity.
          </Paragraph>
          <div className="Settings__estimates">
            {SettingEstimationSelect()}
            <Divider />
            <Row align={'middle'}>
              <Col xs={20}>
                <h3 className="Settings__estimatesTitle">Allow zero estimates</h3>
                <Paragraph className="Settings__text">
                  When enabled, issues can be estimated with zero points.
                  This is useful if for example you don't want to count parent
                  issues towards the total estimate.
                </Paragraph>
              </Col>
              <Col xs={4}>
                <Switch defaultChecked />
              </Col>
            </Row>
            <Row align={'middle'}>
              <Col xs={20}>
                <h3 className="Settings__estimatesTitle">Extended estimate scale</h3>
                <Paragraph className="Settings__text">
                  When enabled, the estimate scale is extended. This is normally not recommended,
                  as large estimates usually mean that an issue should be broken up
                  into smaller issues.
                </Paragraph>
              </Col>
              <Col xs={4}>
                <Switch defaultChecked />
              </Col>
            </Row>
            <Row align={'middle'}>
              <Col xs={20}>
                <h3 className="Settings__estimatesTitle">
                  Count unestimated issues
                </h3>
                <Paragraph className="Settings__text">
                  When enabled, issues that have not been estimated will count as 1 estimated point.
                  When disabled, unestimated issues count as 0 estimate points.
                </Paragraph>
              </Col>
              <Col xs={2}>
                <Switch />
              </Col>
            </Row>
          </div>
        </section>
      </Content>
    </Layout>
  )
}

export default Settings

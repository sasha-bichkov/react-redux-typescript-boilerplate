import React, { FC } from 'react'
import moment from 'moment'
import momentTimezone from 'moment-timezone'
import { Row, Col, Select } from 'antd'

const { Option, OptGroup } = Select

const defautlTimezone = momentTimezone.tz.guess()
const convertToGMT = (timezone: string) => {
  return `GMT ${moment.tz(timezone).format('Z')} - ${timezone}`
}

const TimezoneSelect: FC = () => {
  const renderOptions = () => {
    const timezones = moment.tz.names()
    const mappedValues = {}
    const regions:string[] = []

    timezones.map(timezone => {
      const splitTimezone = timezone.split('/')
      const region = splitTimezone[0]
      if (!mappedValues[region]) {
        mappedValues[region] = []
        regions.push(region)
      }
      mappedValues[region].push(convertToGMT(timezone))
    })
    return regions.map(region => {
      const options = mappedValues[region].map(timezone => {
        return <Option key={timezone}>{timezone}</Option>
      })
      return (
        <OptGroup
          key={region}
          title={<div style={{ fontSize: 30 }}>{region}</div>}
        >
          {options}
        </OptGroup>
      )
    })
  }

  return (
    <div className="TimezoneSelect">
      <Row>
        <Col>
          <Select
            defaultValue={convertToGMT(defautlTimezone)}
          >
            {renderOptions()}
          </Select>
        </Col>
      </Row>
    </div>
  )
}

export default TimezoneSelect

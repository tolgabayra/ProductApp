import React from 'react'
import { Button, Card, Checkbox, Steps } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;
Checkbox
const { Step } = Steps;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
import MainLayout from "../../layouts/home/index"

export default function savemoney() {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className='p-12'>
            <Collapse defaultActiveKey={['1']} onChange={onChange}>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}<Checkbox onChange={onChange}></Checkbox></p> 
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse>
            <div className='mt-12'>
            <Steps current={0}>
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
                <Step title="Finished" description="This is a description." />

            </Steps>
            </div>
           
        </div>
    )
}


savemoney.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}
import React from 'react';
import './CounterOutput.css';
const counterOutput = (props) => (
    <div className="CounterOutput">
       CurrentCounter:{props.value}
    </div>
)

export default counterOutput;
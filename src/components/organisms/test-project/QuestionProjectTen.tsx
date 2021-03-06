import React from 'react'
import { useState } from 'react'

function QuestionProjectTen() {
  const [valueTenProject, setValueTenProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-ten-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueTenProject) * -1}% ,#FD8E3E ${parseInt(valueTenProject)}%);
  width: ${parseInt(valueTenProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">10. Decima Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueTenProject}
          onChange={({ target: { value: radius} }) => {
            setValueTenProject(radius)
          }}
        />
        <div className="progress-bar-ten-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueTenProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectTen

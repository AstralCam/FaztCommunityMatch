import React from 'react'
import { useState } from 'react'

function QuestionUserSeventeen() {
  const [valueSeventeen, setValueSeventeen] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-seventeen {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueSeventeen) * -1}% ,#04AB5B ${parseInt(valueSeventeen)}%);
  width: ${parseInt(valueSeventeen) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">17. dicisieteava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueSeventeen}
          onChange={({ target: { value: radius} }) => {
            setValueSeventeen(radius)
          }}
        />
        <div className="progress-bar-seventeen"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueSeventeen)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserSeventeen

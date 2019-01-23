
import React from 'react'
//import './Button.css'

class Button extends React.Component {
  constructor() {
    super()
  }

  render() {
    const style = {
      'border': 'none',
      'padding': '20px 35px',
      'backgroundColor': '#aea',
      'textAlign': 'center',
      'fontSize': '18px',
      'color': '#333',

      'borderRadius': '10px',

      'WebkitAppearance': 'none',
      'MozAppearance': 'none',
      'appearance': 'none',
    }

    return (
      <button style={style} className="button">click me, f*cking retard</button>
    )
  }
}

export default Button

import React, { Component } from 'react';
import style from 'components/FourOhFourDefault/FourOhFourDefault.style';

class FourOhFourDefault extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 15 };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.count <= 0) {
        clearInterval(interval);
        window.location.reload();
      } else {
        this.setState({ count: this.state.count - 1 });
      }
    }, 1100);
  }

  render() {
    return (
      <div style={style.wrapper}>
        <h1 style={style.heading}>Error loading website!</h1>
        <p style={style.text}>
          So sorry, but I could not load right now. Trying again in:
        </p>
        <span style={style.count}>{this.state.count}</span>
      </div>
    );
  }
}

export default FourOhFourDefault;

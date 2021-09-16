import React from 'react';
import Quote from '../quote/quote';
import './quotes.scss';

export default class View extends React.PureComponent {

  // Memoization properties:
  _animationDuration = 1500;
  _incomingStyle = {
    animationDuration: '1.5s'
  };

  get carouselClassName() {
    const classNames = [ "carousel" ];
    classNames.push(
      this.props.forward ?
        "forward" :
        "backward"
    );
    if (this.props.animate) {
      classNames.push("animating");
    }
    return classNames.join(' ');
  }

  get incomingStyle() {
    if (
      this._animationDuration !== this.props.animationDuration
    ) {
      this._animationDuration = this.props.animationDuration;
      this._incomingStyle = {
        animationDuration: (this.props.animationDuration / 1000) + 's'
      };
    }
    return this._incomingStyle;
  }

  get rootClassName() {
    const classNames = [ "root" ];
    if (this.props.className) {
      classNames.push(this.props.className);
    }
    return classNames.join(' ');
  }

  render() {
    return (
      <div
        className={this.rootClassName}
        onMouseOut={this.props.onMouseOut}
        onMouseOver={this.props.onMouseOver}
      >
        <div
          className={"left " + this.props.leftArrowClassName}
          onClick={this.props.onPrevious}
        />
        <div className={this.carouselClassName}>
          <Quote
            key={'in ' + this.props.incoming.quote}
            style={this.incomingStyle}
            currentQuote={this.props.incoming}
            nextQuote={this.props.incomingNext}
          />
          <Quote
            key={'out ' + this.props.outgoing.quote}
            currentQuote={this.props.outgoing}
            nextQuote={this.props.outgoingNext}
          />
        </div>
        <div
          className={"right " + this.props.rightArrowClassName}
          onClick={this.props.onForward}
        />
      </div>
    );
  }
}

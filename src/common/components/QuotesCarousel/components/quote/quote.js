import React from 'react';
import './quote.scss';

export default class Quote extends React.PureComponent {
  render() {
    return (
      <div
        className={"root"}
        style={this.props.style || null}
      >
        <blockquote>
          <q children={this.props.currentQuote.quote} />
          <cite
            children={this.props.currentQuote.author}
            title={this.props.currentQuote.company}
          />
        </blockquote>
        <blockquote className="second-quote">
          <q children={this.props.nextQuote.quote} />
          <cite
            children={this.props.nextQuote.author}
            title={this.props.nextQuote.company}
          />
        </blockquote>
      </div>
    );
  }
}

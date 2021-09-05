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
          <q children={this.props.quote} />
          <cite
            children={this.props.author}
            title={this.props.company}
          />
        </blockquote>
      </div>
    );
  }
}

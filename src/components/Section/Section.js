import { Component } from 'react';

import '../../baseStyle.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className="main_section">
        <h2 className="main_title">{title}</h2>
        {children}
      </section>
    );
  }
}

export default Section;

import React, { Component } from 'react';
import { Footer as StyledFooter } from '../styles/footer';

export default class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <p>
          Copyright &copy; 2019 jayjamesjay. All Rights Reserved. Project under
          MIT licence.
        </p>
      </StyledFooter>
    );
  }
}

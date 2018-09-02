import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { BounceLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';
 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
export default class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='BounceLoader'>
        <BounceLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'palevioletred'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
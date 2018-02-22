import React from 'react';
import PropTypes from 'prop-types';
import { Player, BigPlayButton } from 'video-react';

import './index.css';

const VideoLoader = (props) =>
  <div className='VideoLoader'>
    <Player poster={props.poster} src={props.src}>
      <BigPlayButton position="center" />
    </Player>
  </div>

VideoLoader.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string
};
VideoLoader.defaultProps = {
  src:null,
  poster:null
};
export default VideoLoader;
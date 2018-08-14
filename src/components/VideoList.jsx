import React from 'react';
import VideoListItem from './VideoListItem.jsx';


const VideoList = (props) => {
  return(
    <ul className='col-md-4 list-group'> 
        {props.videos.map(video => <VideoListItem video={video} key={video.etag}/>)}
        
    </ul>
  );
};

export default VideoList;
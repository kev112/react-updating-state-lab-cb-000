const React = require('react');

export default class YouTubeDebugger extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
      };

    this.handleBitrate = this.handleBitrate.bind(this);
    this.handleResolution = this.handleResolution.bind(this);
   }
 
   handleBitrate() {
     this.setState( { 
       settings: Object.assign( {}, this.state.settings, {bitrate: 12} )
      } );
   }

  handleResolution() {
    let videoObject = Object.assign({}, this.state.settings.video, {resolution: '720p'})
    this.setState( { 
      settings: Object.assign( {}, this.state.settings, { video: videoObject } )  
     } );
  }
 
   render() {   
     return (
       <div>
         <button onClick={this.handleBitrate} className='bitrate'>
           'bitrate'
         </button>
         <button onClick={this.handleResolution} className='resolution'>
           'resolution'
         </button>
       </div>
     );
   }
   
 }
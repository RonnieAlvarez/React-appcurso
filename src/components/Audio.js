import React, { Component } from "react";
import song from "./comp_imgs/modern-spanish-pop-rumba-pop-cello-and-flamenco-guitar-2469.mp3"

// Import your audio file


class App extends Component {
  // Create state
  state = {
      
      // Get audio file in a variable
      audio: new Audio(song),
      // Set initial state of song
      isPlaying: false,
    };
    
    // Main function to handle both play and pause operations
    playPause = () => {
        
        // Get state of song
        let isPlaying = this.state.isPlaying;
        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
            // this.setState({audio: {...this.state.audio, pause: true}})
        } else {
            
            // Play the song if it is paused
            
              this.state.audio.play();
            
        }
        
        // Change the state of song
                
             this.setState({ isPlaying: !isPlaying });
        
    };
    
    render() {
        return (
            <div>
            
        {/* Show state of song on website */}
        <span>
          {this.state.isPlaying ? 
            "Song is Playing  " : 
            "Song is Paused  "}
        </span>
        
        {/* Button to call our main function */}
        <button className="btn btn-info btn-sm" onClick={this.playPause}>
          Play | Pause
        </button>
      </div>
    );
  }
}

export default App;
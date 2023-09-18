import React from 'react';
import { useTracker } from '@laudspeaker/react';

const Banner = () => {
    const { state, emitTrackerEvent } = useTracker('voiceless-sort-4602');
    const onClick = () => {
        emitTrackerEvent('click');
    }
    const onClickTwo = () => {
        emitTrackerEvent('clickTwo');
    }
    let value = 'Name not set';
    if (state !== undefined) {
        if (state.hasOwnProperty('name')) {
            value = JSON.stringify(state['name']);
          }
    }
    
     
    return ( 
        <>
          <p> This is a custom component powered by laudspeaker. The current name is: <br /><code>{value}</code></p>
          <div><button onClick={onClick}>send <code>click</code></button></div> 
          <div></div>
        </>
    )
}

export default Banner;
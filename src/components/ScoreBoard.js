import React, { useRef, useEffect, useState } from 'react'

function ScoreBoard(props) {
    

    return (
        <div>
            
            <div className="scoreboard">Score: {props.score}</div>
        </div>
    )
}

export default ScoreBoard
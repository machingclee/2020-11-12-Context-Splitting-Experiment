import React, { useContext, useRef } from "react"
import { Component2Context } from "../App";


const Component2 = React.memo(() => {
    const { inputText } = useContext(Component2Context);
    const appRenderCount = useRef<number>(0);

    return <div>
        <br />
        Component2 inputText: {inputText}
        <br />
        Component2 rendered {appRenderCount.current++} times</div>
})

export default Component2;
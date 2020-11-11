import React, { useContext, useRef } from "react"
import { Component1Context } from "../App";


const Component1 = React.memo(() => {
    const { inputText } = useContext(Component1Context);

    const appRenderCount = useRef<number>(0);
    return <div>
        <br />
        Component1 inputText: {inputText}
        <br />Component1 rendered {appRenderCount.current++} times</div>
})

export default Component1;
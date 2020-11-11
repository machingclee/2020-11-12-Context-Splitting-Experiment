import React, { createContext, memo, useRef, useState } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

interface IComponentContext {
  inputText: string
}

const Component1Context = createContext<IComponentContext>({ inputText: "" });
const Component2Context = createContext<IComponentContext>({ inputText: "" });

function App() {
  const [inputText1, setInputText1] = useState<string>("");
  const [inputText2, setInputText2] = useState<string>("");


  const context1Value = React.useMemo(() => ({ inputText: inputText1 }), [inputText1])
  const context2Value = React.useMemo(() => ({ inputText: inputText2 }), [inputText2])



  const onInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText1(e.target.value);
  }
  const onInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText2(e.target.value);
  }

  const appRenderCount = useRef<number>(0);

  return (
    <Component1Context.Provider value={context1Value}>
      <Component2Context.Provider value={context2Value}>

        {/* ========== input fields ========== */}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ marginTop: 20 }}>
            <div>
              <input
                value={inputText1}
                onChange={onInputChange1}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  width: 300
                }}
              />
            </div>

            <div style={{ marginTop: 10 }}>
              <input
                value={inputText2}
                onChange={onInputChange2}
                style={{
                  padding: 10,
                  borderRadius: 5,
                  borderWidth: 1,
                  width: 300
                }}
              />
            </div>

            {/* ========== input fields ========== */}

            <div style={{ marginTop: 20 }}>
              App rendered for {appRenderCount.current++} times
            </div>

            {/* Component1Context Consumer */}
            <Component1 />
            {/* Component1Context Consumer */}

            {/* Component2Context Consumer */}
            <Component2 />
            {/* Component2Context Consumer */}
          </div>
        </div>
      </Component2Context.Provider>
    </Component1Context.Provider>
  );
}









const AnotherCompoenent = memo(
  () => {
    const AnotherComponentRenderCount = useRef<number>(0);
    return (
      <div>
        AnotherComponent rendered for {AnotherComponentRenderCount.current++} times
      </div>
    )
  });

export { Component1Context, Component2Context }
export default App;

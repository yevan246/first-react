import { useEffect, useState } from "react";
import Greeting from "../../components/Greeting/Greeting";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [clicker, setClicker] = useState(0);

  useEffect(() => {
    console.log("clicked", clicked); // rerender
  }, [clicked]);

  useEffect(() => {(document.title = `You typed: ${inputValue}`)
  }, [inputValue])

  // useEffect(() => {
  //   document.title = `You clicked: ${clicker}`;
  // }, [clicker]);

  // const products = fruitsArr.map(item => <ProductItem key={item.title} img={item.img} title={item.title} price={item.price} />)

  return (
    <>
      <div>
        <button onClick={() => setClicker(clicker + 1)}>{clicker}</button>
      </div>
      <div>
          <button onClick={() => setClicked(!clicked)}>
          {clicked ? "hide" : "show"}
        </button>
        {clicked && (
          <>
            <div>
              Greeting1:
              <Greeting name="Eva" age="17">
                asdlsdkfnsdgs
              </Greeting>
            </div>
            <div>
              Greeting2: <Greeting name="Dima" age="16" />
            </div>
          </>
        )}
      </div>
      <div>
          <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
        /> 
      </div>
      {/* <div>
        You typed: {inputValue}
      </div> */}
    </>
  );
}

import { useEffect } from "react";

function Greeting({ name, age, children }) {
  // const {name, age} = props

  const handleClick = () => {
    console.log('clicked');
  }

  useEffect(() => {
    console.log('Greeting mounting');

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      console.log('Greeting unmounting');
    }
  }, [])

  return (
    <span>
      Hello {name}({age})! - {children}
    </span>
  );
}

export default Greeting;


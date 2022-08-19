

import Card from './Card';
import useCounter from '../hooks/use-counter';
const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;




























// const [counter, setCounter] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCounter((prevCounter) => prevCounter + 1);
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

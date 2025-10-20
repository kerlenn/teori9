// 'use client'

// import { useState, useEffect } from "react";


// export function Counter({ useInterval = false}) {

//     //state nya apa, nama function untuk ubah state nya, kalau nama state nya name dia nama func nya setName
//     const [count, setCount] = useState<number>(0);//krn typescript, tipe data nya number, default value nya 0
//     // const [name, setName] = useState('Taylor');
//     // const [age, setAge] = useState(42);

//     useEffect(() => {
//         if (!useInterval) return;
//         setInterval(() => setCount(prev => prev + 1), 1000);
//     }, [useInterval]);

//     const plusClick = (): void => {
//         setCount(count + 1);
//     };

//     const minusClick = (): void => {
//         setCount(count - 1);
//     };

//     const resetClick = (): void => {
//         setCount(0);
//     }; 
//     // function increment() {
//     //     setAge(a => a+1);
//     // }

//     return (
//         <div>
//             <p> You clicks {count} times </p>
//             <button onClick={plusClick}>Positive me</button> 
//             <button onClick={minusClick}>Negative me</button>
//             <button onClick={resetClick}>Reset me</button>
//         </div>
//     )
// }

// export default function Page() {
//     return (
//         <div>
//             <Counter />
//             <Counter />
//             <Counter />
//             <Counter useInterval={true}/>
//         </div>
//     );
// }
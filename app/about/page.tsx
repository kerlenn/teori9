// export default function About() {
//     return (
//         <div>
//             <h1> About Page </h1>
//             <Welcome name="John" />
//             <p>This is the about page of the application.</p>
//         </div>
//     );
// }

// type PersonProps = {
//     name: string;
//     age: number;
// }

// export function Welcome({ name , age }: PersonProps) { //guest itu default value, kalo name nya ga di isi, bbrti munculnya guest
//     return (
//         <div>
//             <h2> Welcome , {name}! </h2>
//             <p> You are {age} years old</p>
//         </div>
//     );
// }

import styles from "./page.module.css";
type ContactProps = {
    children: React.ReactNode;
}

export function Contact( { children }: ContactProps) {
    return (
        <div style = {{ borderTop: '1px solid #ccc', marginTop: 20, paddingTop:10 }}>
            { children }
        </div>
    );
}

export default function About() {
    return (
        <div>
            <h1 className = {styles.h1}> About Page </h1>
            <Contact>
                <h2>Contact Us</h2>
                <p> You can reach us at contact@example.com</p>
                <p> Phone: 123-456-7890 </p>
            </Contact>
        </div>
    );
}
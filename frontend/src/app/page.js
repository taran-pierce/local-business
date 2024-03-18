import { Rye } from "next/font/google";

import Container from "../components/Container";


export const metadata = {
  title: "Buckshot Bar & Grill",
  description: "Bar and grill",
};

const rye = Rye({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HomePage() {
  return (
   <main>
     <Container>
       <img
         src="/images/people-eating-food.jpg"
         alt="People eating food"
         style={{
          maxWidth: '100%',
          display: 'block',
         }}
       />
       <h1
        style={{
          background: '#ac2f2f',
          padding: '1rem',
          marginTop: '0',
          border: '2px solid rgba(0,0,0,.7)',
          marginBottom: '1rem',
        }}
        className={rye.className}
      >Buckshot Bar & Grill</h1>
       <p>Casual Family Dining with kids meals, burgers, sandwiches, and dinners including steaks! Full bar and full kitchen!</p>
       <p>Come see us tonight!</p>
     </Container>
   </main>
  );
}

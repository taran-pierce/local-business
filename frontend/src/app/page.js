import Container from "../components/Container";

export const metadata = {
  title: "Buckshot Bar & Grill",
  description: "Bar and grill",
};

export default function HomePage() {
  return (
   <main>
     <Container>
       <h1>Buckshot Bar & Grill</h1>
       <p>Casual Family Dining with kids meals, burgers, sandwiches, and dinners including steaks! Full bar and full kitchen!</p>
       <p>Come see us tonight!</p>
     </Container>
   </main>
  );
}

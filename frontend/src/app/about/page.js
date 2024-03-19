import { Rye } from "next/font/google";

import Container from "../../components/Container";

const rye = Rye({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "About | Local Restaurant",
};

export default function AboutPage() {
  return (
    <main>
      <Container>
        <h1 className={rye.className}>About Local Restaurant</h1>
        <p>We are located on 190 W Palmer Lake Dr, Pueblo West, CO, United States, 81007 and we are open 7 days a week.</p>
        <p>If you want to get in contact with us just use the form below.</p>
      </Container>
    </main>
  );
}

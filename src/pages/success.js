import Image from "next/image";
import confetti from "../../public/assets/confetti.png";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="section bg-pink h-screen">
      <div className="container">
        <div className="section-intro welcome">
          <Image
            src={confetti}
            height={200}
            width={200}
            alt="success-confetti"
            className="confetti"
          />
          <h1>You are in!</h1>
          <p>
            Now you have full access to everything! <br />
            Ready to get started?
          </p>
          <Link href="/" className="large-button">
            <div className="large-button-text">Get started!</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

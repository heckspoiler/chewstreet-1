import Link from "next/link";
import Image from "next/image";
import hero from "../../public/assets/hero.png";

export default function HomePage() {
  return (
    <div className="grid-halves h-screen-navbar">
      <div className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <h1>
                You want it? <br /> We got it.
              </h1>
              <p className="section-subtitle">
                All you need in one place, not lying.
              </p>

              <Link href="/products">
                <div className="large-button-text">Explore our Products</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-salmon">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <Image
              src={hero}
              className="callout-image"
              alt="hero-image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

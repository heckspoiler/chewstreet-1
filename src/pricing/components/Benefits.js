const benefits = [
  {
    title: "One low price",
    subtitle: "One price, one subscription, unlimited access to all we offer!",
  },
  {
    title: "Limitless",
    subtitle: "We don't hide any special courses or knowledge from you!",
  },
  {
    title: "Cancel anytime",
    subtitle:
      "Pause or stop your subscription at any time, no questions asked!",
  },
];

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="spacing-base">
              <h3>
                {benefit.title}
                <br />
              </h3>
              <div>{benefit.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

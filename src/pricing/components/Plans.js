import { useState } from "react";
import { SITE_URL } from "../../core/utils/index.js";
import { loadStripe } from "@stripe/stripe-js";

export default function Plans({ plans }) {
  const [selected, setSelected] = useState("month");
  const [isRedirecting, setRedirecting] = useState(false);
  const plan = plans.find((plan) => plan.interval === selected);

  function togglePlan() {
    selected === "month" ? setSelected("year") : setSelected("month");
  }

  async function onCheckout() {
    setRedirecting(true);
    const response = await fetch(`${SITE_URL}/api/checkout/${plan.id}`);
    const data = await response.json();
    console.log(data);
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    await stripe.redirectToCheckout({ sessionId: data.id });
    setRedirecting(false);
  }

  return (
    <div className="bg-teal border-right">
      <div className="column-padding centered">
        <div className="callout-wrap">
          <div className="plan">
            <div className="plan-wrap">
              <div className="plan-content">
                <div className="plan-switch">
                  Monthly
                  <label className="switch" for="slider">
                    <input type="checkbox" onChange={togglePlan} id="slider" />
                    <span className="slider" />
                  </label>
                  Yearly
                </div>
                <h2 className="plan-name">{plan.name}</h2>
                <div>
                  Just ${plan.price} / {plan.interval}
                </div>
                <div>
                  <button
                    disabled={isRedirecting}
                    className="large-button"
                    onClick={onCheckout}
                  >
                    <div className="large-button-text bg-pink ">
                      {isRedirecting ? "Nice, thanks!" : "Buy Now!"}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

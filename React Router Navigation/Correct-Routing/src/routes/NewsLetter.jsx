import React from "react";
import { Navigate } from "react-router-dom";
import LoadingSubscription from "../components/LoadingSubscription";

export default function NewsLetter() {
  const [loadingTime, setLoadingTime] = React.useState(0);
  const [subscrived, setSubscrived] = React.useState(false);
  const handleSubscription = () => {
    setSubscrived(true);
  };

  const handleSubscriptionView = () => {
    if (!subscrived) {
      console.log("not subscrived");
      return (
        <div>
          <h3>NewsLetter Page</h3>

          <span>Subscrive to our newsletter</span>
          <br />
          <button onClick={handleSubscription}>Subscrive</button>
        </div>
      );
    }
    return (
      <>
        {loadingTime < 5 ? (
          <LoadingSubscription
            loadingTime={loadingTime}
            setLoadingTime={setLoadingTime}
          />
        ) : (
          <Navigate to="/" />
        )}
      </>
    );
  };

  return <>{handleSubscriptionView()}</>;
}

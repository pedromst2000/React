import React, { useEffect, useState } from "react";
import axios from "axios";
import ActivityCart from "../../components/ActivityCart";
import Loading from "../../components/Loading";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://ecoly-api.cyclic.app/api/activities?fields=activities&filter=unfinished"
      )
      .then((res) => {
        // sort the id 
        setActivities(res.data.data.sort((a, b) => a.id - b.id));
      }).catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div>
      {
        activities.length > 0 ? (
          activities.map((activity) => (
            <ActivityCart key={activity.id} activity={activity} />
          ))
        ) : (
          <Loading />
        )
}
    </div>
  );
}

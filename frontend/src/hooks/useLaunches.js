import { useCallback, useEffect, useState } from "react";
import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from "./requests";

function useLaunches(bleepsManager) {
  const [launches, setLaunches] = useState([]);
  const [isPendingLaunch, setIsPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    setLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(
    async (event) => {
      event.preventDefault();

      setIsPendingLaunch(true);

      const data = new FormData(event.target);
      const launchDate = new Date(data.get("launch-day"));
      const mission = data.get("mission-name");
      const rocket = data.get("rocket-name");
      const target = data.get("planets-selector");

      const response = await httpSubmitLaunch({
        launchDate,
        mission,
        rocket,
        target,
      });

      const success = response.ok;
      if (success) {
        getLaunches();
        setTimeout(() => {
          setIsPendingLaunch(false);
          bleepsManager.bleeps.success.play();
        }, 800);
      } else {
        bleepsManager.bleeps.warning.play();
      }
    },
    [getLaunches, bleepsManager]
  );

  const abortLaunch = useCallback(
    async (id) => {
      const response = await httpAbortLaunch(id);

      const success = response.ok;
      if (success) {
        getLaunches();
        bleepsManager?.bleeps.success.play();
      } else {
        bleepsManager?.bleeps.warning.play();
      }
    },
    [getLaunches, bleepsManager]
  );

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;

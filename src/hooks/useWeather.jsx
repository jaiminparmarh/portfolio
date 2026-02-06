import { useEffect, useState } from "react";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetch(`https://wttr.in/${latitude},${longitude}?format=j1`)
          .then((res) => res.json())
          .then((data) => {
            const tempC = data.current_condition[0].temp_C;
            const desc = data.current_condition[0].weatherDesc[0].value;

            setWeather({
              name: "Your Location",
              main: { temp: tempC },
              weather: [{ description: desc }],
            });
          })
          .catch(() => setError(""));
      },
      () => setError("Location permission denied")
    );
  }, []);

  return { weather, error };
};

export default useWeather;

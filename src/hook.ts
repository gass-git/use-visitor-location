import { useState, useEffect, type ReactNode } from "react";
import axios from "axios";
import type { LocationData, Nullable, Options } from "./types.js";
import { config } from "./config.js";

export default function useVisitorLocation(
  options?: Options,
): Nullable<LocationData> {
  const [data, setData] = useState<Nullable<LocationData>>(config.initData);

  useEffect(() => {
    const endpoint = new URL(
      options?.fetch_only ?? "json",
      config.API_BASE_URL,
    ).toString();

    axios
      .get(endpoint)
      .then((resp) => {
        if (options?.fetch_only !== undefined) {
          setData((prev) => ({ ...prev, [options.fetch_only]: resp.data }));
        } else {
          setData(resp.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [options?.fetch_only]);

  return data;
}

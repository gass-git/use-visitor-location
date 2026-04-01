import { useState, useEffect } from "react";
import type { Nullable, Location } from "./types.ts";
import axios from "axios";

const base = "https://ipapi.co/";

export default function useVisitorLocation(
  specificField: string | undefined = undefined,
): Nullable<Location> {
  const endpoint = specificField ? base + specificField : base + "json";

  const [data, setData] = useState({
    ip: null,
    network: null,
    version: null,
    city: null,
    region: null,
    region_code: null,
    country: null,
    country_name: null,
    country_code: null,
    country_code_iso3: null,
    country_capital: null,
    country_tld: null,
    continent_code: null,
    in_eu: null,
    postal: null,
    latitude: null,
    longitude: null,
    timezone: null,
    utc_offset: null,
    country_calling_code: null,
    currency: null,
    currency_name: null,
    languages: null,
    country_area: null,
    country_population: null,
    asn: null,
    org: null,
  });

  useEffect(() => {
    axios
      .get(endpoint)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return data;
}

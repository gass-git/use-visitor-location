import { useState, useEffect, type ReactNode } from "react";
import axios from "axios";

const API_BASE_URL = "https://ipapi.co/";

export default function useVisitorLocation(specificField?: string | undefined) {
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

  const [text, setText] = useState("");

  useEffect(() => {
    const endpoint = new URL(specificField ?? "json", API_BASE_URL).toString();

    axios
      .get(endpoint)
      .then((resp) => {
        if (specificField !== undefined) {
          setText(resp.data);
        } else {
          setData(resp.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [specificField]);

  if (specificField !== undefined) {
    return text;
  } else {
    return data;
  }
}

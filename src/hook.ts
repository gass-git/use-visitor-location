import {useState, useEffect} from "react"
import axios from "axios"

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface Location {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
}

export default function useVisitorLocation(): Nullable<Location> {
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
  })

  // on-mount fetch
  useEffect(() => {
    (async function fetch(){
      const resp = await axios.get("https://ipapi.co/json")

      setData(resp.data)
    })();
  }, []) // the hook has no dependencies

  return data
}


import {useState, useEffect} from "react"
import axios from "axios"

/*
example response

{
	"country_code":"HU",
	"country_name":"Hungary",
	"city":"Tapioszecso",
	"postal":2251,
	"latitude":47.45,
	"longitude":19.6,
	"IPv4":"89.134.11.248",
	"state":"Pest megye"
}
*/

interface Location {
  country_code: string | null;
  country_name: string | null;
  city: string | null;
  postal: number | null;
  latitude: number | null;
  longitud: number | null;
  IPv4: string | null;
  state: string | null;
}

export default function useVisitorLocation(): Location {
  const [data, setData] = useState({
    country_code: null,
    country_name: null,
    city: null,
    postal: null,
    latitude: null,
    longitud: null,
    IPv4: null,
    state: null
  })

  // on-mount fetch
  useEffect(() => {
    const fetch = async () => {
      const JSONresp = await axios.get("https://geolocation-db.com/json")
      const parsedToJs = JSON.parse(JSONresp.toString())

      setData(parsedToJs)
    }
  }, []) // the hook has no dependencies

  return data
}


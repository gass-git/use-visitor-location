import { renderHook, waitFor } from "@testing-library/react";
import useVisitorLocation from "../src/hook.js";
import { vi, beforeEach, it, expect } from "vitest";
import axios from "axios";

vi.mock("axios");

const mockResp = {
  ip: "2a02:ab88:3703:a000:e9d0:924d:e9:5b5c",
  network: "2a02:ab88:3700::/41",
  version: "IPv6",
  city: "Budapest",
  region: "Budapest",
  region_code: "BU",
  country: "HU",
  country_name: "Hungary",
  country_code: "HU",
  country_code_iso3: "HUN",
  country_capital: "Budapest",
  country_tld: ".hu",
  continent_code: "EU",
  in_eu: true,
  postal: "1112",
  latitude: 47.5,
  longitude: 19.0412,
  timezone: "Europe/Budapest",
  utc_offset: "+0200",
  country_calling_code: "+36",
  currency: "HUF",
  currency_name: "Forint",
  languages: "hu-HU",
  country_area: 93030.0,
  country_population: 9768785,
  asn: "AS21334",
  org: "One Hungary Ltd.",
};

beforeEach(() => {
  vi.clearAllMocks();
});

it("fetches and returns all expected data", async () => {
  axios.get.mockResolvedValue({
    data: mockResp,
  });

  const { result } = renderHook(() => useVisitorLocation());

  await waitFor(() => {
    expect(result.current).toEqual(mockResp);
  });
});

it("fetches and returns a single specific field", async () => {
  axios.get.mockResolvedValue({
    data: mockResp.country_population,
  });

  const { result } = renderHook(() => useVisitorLocation({fetch_only: "country_population"}));

  await waitFor(() => {
    expect(result.current.country_population).toEqual(mockResp.country_population);
  });
});

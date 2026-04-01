# 🗺️ use-visitor-location

[![Downloads](https://img.shields.io/npm/dm/use-visitor-location.svg?style=flat-square)](https://www.npmjs.com/package/use-visitor-location)
[![version](https://img.shields.io/npm/v/use-visitor-location.svg?style=flat-square)](https://www.npmjs.com/package/use-visitor-location)

Lightweight React hook that fetches geolocation data using `ipapi.co` free API service. It sends a single request and returns structured location information about the visitor.

⚠️ The free version has a limited number of requests. [Visit the website](https://ipapi.co) for more info.

- [use-visitor-location](#use-visitor-location)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Options](#options)
  - [Returned Values](#returned-values)

## Installation

```
npm i use-visitor-location
```

## Usage

Fetch all available location data and destructure the fields you need:

```javascript
import useVisitorLocation from "use-visitor-location";

const { country_name, city, in_eu, continent_code } = useVisitorLocation();
```

Request and fetch only one specific field:

```javascript
import useVisitorLocation from "use-visitor-location";

const { country_population } = useVisitorLocation({
  fetch_only: "country_population",
});
```

## Basic Example

```javascript
import useVisitorLocation from "use-visitor-location";

export default function MyComponent() {
  const { city } = useVisitorLocation({ fetch_only: "city" });

  return (
    <h1 style={{ display: city ? `block` : `none` }}>
      {`How are things in ${city} ?`}
    </h1>
  );
}
```

## Options

| Option     | Type     | Defualt     | Description                                                                                                                                                         |
| ---------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fetch_only | `string` | `undefined` | Fetch only one specific field instead of the full response. This option only accepts keys that exist in the returned location data. TS will prevent invalid values. |

## Returned Values

| Key                    | Type      | Description                                  |
| ---------------------- | --------- | -------------------------------------------- |
| `ip`                   | `string`  | The visitor’s IP address                     |
| `city`                 | `string`  | City name                                    |
| `region`               | `string`  | Region or state name                         |
| `region_code`          | `string`  | Region or state code                         |
| `country`              | `string`  | ISO country code                             |
| `country_name`         | `string`  | Full country name                            |
| `continent_code`       | `string`  | Continent code (e.g., "EU")                  |
| `postal`               | `string`  | Postal or ZIP code                           |
| `latitude`             | `number`  | Latitude                                     |
| `longitude`            | `number`  | Longitude                                    |
| `timezone`             | `string`  | Visitor’s timezone                           |
| `utc_offset`           | `string`  | UTC offset                                   |
| `country_calling_code` | `string`  | Country calling code                         |
| `currency`             | `string`  | Local currency code                          |
| `languages`            | `string`  | Languages spoken in the country              |
| `asn`                  | `string`  | Autonomous system number                     |
| `org`                  | `string`  | Internet service provider                    |
| `in_eu`                | `boolean` | Whether the visitor is in the European Union |

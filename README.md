## Description

Lightweight React hook that fetches geolocation data using `ipapi.co` free API service. It sends a single request and returns structured location information about the visitor.


## Install with NPM

```
npm i use-visitor-location
```

## Usage

```typescript
import useVisitorLocation from "use-visitor-location"

const { 
  country_name, 
  city, 
  in_eu, 
  continent_code 
} = useVisitorLocation()
```

## Returned Values

| Key | Type | Description |
|-----|------|--------------|
| `ip` | `string` | The visitor’s IP address |
| `city` | `string` | City name |
| `region` | `string` | Region or state name |
| `region_code` | `string` | Region or state code |
| `country` | `string` | ISO country code |
| `country_name` | `string` | Full country name |
| `continent_code` | `string` | Continent code (e.g., "EU") |
| `postal` | `string` | Postal or ZIP code |
| `latitude` | `number` | Latitude |
| `longitude` | `number` | Longitude |
| `timezone` | `string` | Visitor’s timezone |
| `utc_offset` | `string` | UTC offset |
| `country_calling_code` | `string` | Country calling code |
| `currency` | `string` | Local currency code |
| `languages` | `string` | Languages spoken in the country |
| `asn` | `string` | Autonomous system number |
| `org` | `string` | Internet service provider |
| `in_eu` | `boolean` | Whether the visitor is in the European Union |



## Basic Example

```javascript
import useVisitorLocation from "use-visitor-location"

export default function MyComponent(){
  const { city } = useVisitorLocation()

  return (
    <h1 style={{display: city ? `block` : `none` }}>
      {`How are things in ${city} ?`}
    </h1>
  )
}
```
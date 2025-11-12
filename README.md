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


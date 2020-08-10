import React from 'react';
import { Helmet } from 'react-helmet';

const defaultTitle = "Progressive Weather App";
const defaultDescription = "A progressive web application to track the weather in your current location"
const defaultKeywords = "PWA, progressive web app, Geolocation API, geolocation api, OpenWeatherMap API, openweathermap";
const defaultOGURL = "https://weather-app-gray.now.sh";
const defaultOGImage = "https://weather-app-gray.now.sh/og.png";

const Head = () => (
    <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={defaultKeywords} />
        <meta name="theme-color" content="#D4E0E6" />
        {/* Icon Section */}
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="1024x1024" href="/images/logo.png" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* OG Section */}
        <meta name="og:url" content={defaultOGURL} />
        <meta name="og:title" content={defaultTitle} />
        <meta name="og:description" content={ defaultDescription} />
        <meta name="og:image" content={defaultOGImage} />
        <meta name="og:image:width" content="1320" />
        <meta name="og:image:height" content="930" />
        {/* Twitter Section */}
        <meta name="twitter:site" content={defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOGImage} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:title" content={defaultTitle} />
        <title>{defaultTitle}</title>
    </Helmet>
)

export default Head;
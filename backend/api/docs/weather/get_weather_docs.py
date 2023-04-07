# flake8: noqa
GET_WEATHER_DOCS = """BASE URL: https://api.seniverse.com

API Documentation
The API endpoint /v3/weather/now.json accepts a key string, a location string and responds with a JSON weather data. All URL parameters are listed below:

Query parameters table:
key | string | The key variable, this values should always be SEpzOdrtvPG8szyq7| required
location | string | Pass a location search.  | required
language | string | Pass a language parameter. This value should be in zh-Hans,zh-Hant,en,ja | optional
c |  string | Pass a unit search. These values are accepted: c, f, default is c | optional

Response schema (JSON object):
location | location object | location result
now | now | weather result
last_update | string | last update time, in YYYY-MM-DDThh:mm:ssZ format

location schema (JSON object):
id | string | weather id
name | string | location name
country | string | country
path | string | path
timezone | string | timezone
timezone_offset | string | timezone_offset

now schema (JSON object):
text | string| weather
code |integer| weather code
temperature | integer | temperature
feels_like | integer | temperature feels like
pressure | integer | pressure
humidity | integer | humidity, in percentage
visibility | float | visibility, in km
wind_direction | string | wind direction
wind_direction_degree | integer | wind direction degree
wind_speed | float | wind speed, in km/h
wind_scale | integer | wind scale
clouds | integer | cloudiness, in percentage
dew_point | integer | dew point
"""
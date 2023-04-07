# flake8: noqa
GET_AVAILABLE_MEETING_ROOM_DOCS = """BASE URL: http://localhost:5000/

API Documentation
The API endpoint /v1/meetingroom accepts a location string, a date string and responds with a JSON meeting rooms data. Time always starts at 0:00 today and contains 168 hours. All URL parameters are listed below:

Query parameters table:
location | string | The meeting room location, these values are accepted: Building1, Building2| optional
date | string | Pass a date search. This value should be in the format of yyyy-MM-dd | optional
participants | integer | Pass a number of participants. This value should be an integer | optional
required_facilities | string | Pass a comma seperated string of required facilities. Example: TV,Whiteboard | optional
from_time | string | Pass a time search. This value should be in the format of HH:mm | optional
to_time | string | Pass a time search. This value should be in the format of HH:mm | optional

Response schema (JSON object):
meeting_rooms | array[meeting_room] | (Meeting Room Result)
total_results | integer | optional

meeting_room schema (JSON object):
name | string | (Meeting Room Name)
max_capacity | integer | (Meeting Room Max Capacity)
facilities | array[string] | (Meeting Room Facilities)
date | string | (Meeting Room Available Date, in the format of yyyy-MM-dd)
available_from | string | (Meeting Room Available From Time, in the format of HH:mm)
available_to | string | (Meeting Room Available To Time, in the format of HH:mm)

    """
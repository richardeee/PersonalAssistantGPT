# flake8: noqa
BOOK_MEETING_ROOM_DOCS = """BASE URL: http://localhost:5000/

API Documentation
The API endpoint /v1/book_meeting_room accepts responds with a JSON format meeting room booking confirmation data. All URL parameters are listed below:

Query parameters table:
location | string | The meeting room location, these values are accepted: Building1, Building2| required
name | string | Pass a meeting room name. This value should be a string | required
from_time | string | Pass a time. This value should be in the format of HH:mm | required
to_time | string | Pass a time. This value should be in the format of HH:mm | required
date | string | Pass a date. This value should be in the format of yyyy-MM-dd | required

Response schema (JSON object):
meeting_room | MeetingRoom | (Meeting Room Result)
book_status | integer | 0 for failed, 1 for succeed

MeetingRoom schema (JSON object):
name | string | (Meeting Room Name)
max_capacity | integer | (Meeting Room Max Capacity)
facilities | array[string] | (Meeting Room Facilities)
date | string | (Meeting Room Available Date, in the format of yyyy-MM-dd)
available_from | string | (Meeting Room Available From Time, in the format of HH:mm)
available_to | string | (Meeting Room Available To Time, in the format of HH:mm)
    """
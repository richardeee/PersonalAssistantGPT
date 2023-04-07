def nonewlines(s: str) -> str:
    return s.replace('\n', ' ').replace('\r', ' ')

meeting_rooms = [
    {
        "location": "Building1",
        "name": "Room1",
        "max_capacity": "10",
        "facilities": ["Projector", "Whiteboard"]
    },
    {
        "location": "Building1",
        "name": "Room2",
        "max_capacity": "4",
        "facilities": ["Projector", "Whiteboard", "TV"]
    },
    {
        "location": "Building1",
        "name": "Room3",
        "max_capacity": "3",
        "facilities": ["TV"]
    },
    {
        "location": "Building2",
        "name": "Room4",
        "max_capacity": "6",
        "facilities": ["Projector", "Whiteboard"]
    },
    {
        "location": "Building2",
        "name": "Room5",
        "max_capacity": "8",
        "facilities": ["Projector", "Whiteboard", "TV"]
    }
]

if __name__ == '__main__':
    
    location = "Building1"
    date = ""
    participants = "3"
    required_facilities = "TV,Whiteboard"
    
    meeting_room = [room for room in meeting_rooms if room["location"] == "Building1" and int(room["max_capacity"]) >= 4 and set(room["facilities"]).issuperset(set(required_facilities.split(",")))]
    
    print(meeting_room)
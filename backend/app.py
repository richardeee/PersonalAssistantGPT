import logging
import os
from approaches.personalassistant import PersonalAssistant
from flask import Flask, jsonify, request

AZURE_OPENAI_SERVICE = os.environ.get("AZURE_OPENAI_SERVICE") or "az-openai-v2"
AZURE_OPENAI_GPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_GPT_DEPLOYMENT") or "text-davinci-003"
AZURE_OPENAI_CHATGPT_DEPLOYMENT = os.environ.get("AZURE_OPENAI_CHATGPT_DEPLOYMENT") or "gpt-35-turbo"


AZURE_OPENAI_API_KEY_SOUTH_CENTRAL_US = os.environ.get("AZURE_OPENAI_API_KEY_SOUTH_CENTRAL_US") or "95faf5ba448d45e9a981d027096e1ccb"
AZURE_OPENAI_BASE = os.environ.get("AZURE_OPENAI_BASE") or f"https://{AZURE_OPENAI_SERVICE}.openai.azure.com"

os.environ["OPENAI_API_TYPE"] = "azure"
os.environ["OPENAI_API_VERSION"] = "2023-03-15-preview"
os.environ["OPENAI_API_BASE"] = AZURE_OPENAI_BASE
os.environ["OPENAI_API_KEY"] = AZURE_OPENAI_API_KEY_SOUTH_CENTRAL_US

# from dotenv import load_dotenv
# load_dotenv()


approaches = {
    "rrr": PersonalAssistant(AZURE_OPENAI_CHATGPT_DEPLOYMENT, AZURE_OPENAI_GPT_DEPLOYMENT, AZURE_OPENAI_API_KEY_SOUTH_CENTRAL_US, AZURE_OPENAI_BASE)
}

app = Flask(__name__)

@app.route("/", defaults={"path": "index.html"})
@app.route("/<path:path>")
def static_file(path):
    return app.send_static_file(path)


@app.route("/chat", methods=["POST"])
def chat():
    # ensure_openai_token()
    approach = request.json["approach"]
    print(request)
    try:
        impl = approaches.get(approach)
        if not impl:
            return jsonify({"error": "unknown approach"}), 400
        r = impl.run(request.json["history"], request.json.get("overrides") or {})
        return jsonify(r)
    except Exception as e:
        logging.exception("Exception in /chat")
        return jsonify({"error": str(e)}), 500

meeting_rooms = [
    {
        "location": "Building1",
        "name": "Room1",
        "max_capacity": "10",
        "facilities": ["Projector", "Whiteboard"],
        "date": "2023-04-05",
        "available_from": "9:00",
        "available_to": "17:00"
    },
    {
        "location": "Building1",
        "name": "Room2",
        "max_capacity": "4",
        "facilities": ["Projector", "Whiteboard", "TV"],
        "date": "2023-04-05",
        "available_from": "9:00",
        "available_to": "17:00"
    },
    {
        "location": "Building1",
        "name": "Room3",
        "max_capacity": "3",
        "facilities": ["TV"],
        "date": "2023-04-05",
        "available_from": "9:00",
        "available_to": "17:00"
    },
    {
        "location": "Building2",
        "name": "Room4",
        "max_capacity": "6",
        "facilities": ["Projector", "Whiteboard"],
        "date": "2023-04-05",
        "available_from": "9:00",
        "available_to": "17:00"
    },
    {
        "location": "Building2",
        "name": "Room5",
        "max_capacity": "8",
        "facilities": ["Projector", "Whiteboard", "TV"],
        "date": "2023-04-05",
        "available_from": "9:00",
        "available_to": "17:00"
    }
]

def find_meeting_room(location, date, participants, required_facilities):
    meeting_room = []
    for room in meeting_rooms:
        if location is not None and location != "":
            if room["location"] != location:
                continue
            else:
                if required_facilities is not None and required_facilities != "":
                    if set(room["facilities"]).issuperset(required_facilities):
                        meeting_room.append(room)
                        continue
                    else:
                        meeting_room.append(room)
                        continue
        else:
            if required_facilities is not None and required_facilities != "":
                if set(room["facilities"]).issuperset(required_facilities):
                    meeting_room.append(room)
                else:
                    meeting_room.append(room)
                    
@app.route("/v1/meetingroom", methods=["GET"])
def get_available_meeting_room():
    print(request)
    print(request.args.get('location'))
    
    location = request.args.get('location') is not None and request.args.get('location') or ""
    date = request.args.get("date")
    participants = request.args.get("participants") is not None and request.args.get("participants") or "0"
    required_facilities = request.args.get("required_facilities") is not None and request.args.get("required_facilities") or ""
    
    print("location: ", location)
    print("date: ", date)
    print("participants: ", participants)
    print("required_facilities: ", required_facilities)
    print("meeting_rooms: ", meeting_rooms)
    
    print(set(meeting_rooms[0]).issuperset(required_facilities))
    
    # meeting_room = find_meeting_room(location, date, participants,required_facilities)
    # 根据条件筛选会议室
    meeting_room = [room for room in meeting_rooms if (room["location"] == location or location is not None) and int(room["max_capacity"]) >= int(participants) and set(room["facilities"]).issuperset(set(required_facilities.split(",")))]
    
    
    # meeting_room = [room for room in meeting_rooms if lambda room: room["location"] == location and int(room["max_capacity"]) >= int(participants) and set(room["facilities"]).issuperset(set(required_facilities.split(",")))]
    print(meeting_room)
    
    MeetingRoom = {
        "meeting_rooms":meeting_room,
        "total_results":len(meeting_room) or "0"
    }
    return jsonify(MeetingRoom)

@app.route("/v1/book_meeting_room", methods=["GET"])
def book_meeting_room():
    # print(jsonify(request))
    location = request.args.get('location') is not None and request.args.get('location') or ""
    name = request.args.get('name')
    from_time = request.args.get('from_time')
    to_time = request.args.get('to_time')
    date = request.args.get('date')
    meeting_room = [room for room in meeting_rooms if (room['name'] == name)][0] if len([room for room in meeting_rooms if (room['name'] == name)]) != 0 else ""
    if meeting_room != "":
        status = 1
        res = {
            "meeting_room": meeting_room,
            "book_status": status
        }
    else:
        status = 0
        res = {
            "meeting_room": {},
            "book_status": status
        }
    return jsonify(res)

if __name__ == '__main__':
    app.run()
 
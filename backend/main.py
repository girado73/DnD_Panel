from Characters import Character
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "name": "John Doe",
        "age": 30,
        "city": "Berlin"
    }
    return jsonify(data)

@app.route('/api/message', methods=['GET'])
def get_message():
    message = {
        "message": "Hello, this is a message from the server!"
    }
    return jsonify(message)

@app.route('/api/characterlist', methods=['GET'])
def get_character_list():
    return jsonify([char.to_dict() for char in characters])

@app.route('/api/character/lvlup/<charactername>', methods=['POST'])
def level_up_char(charactername):
    for x in characters:
        if x.Name == charactername:
            x.lvlup()
            x.to_file()
            return jsonify(x.to_dict())

    return jsonify({"error: Character not found"}), 404


@app.route('/api/character/damage/<charactername>/<int:damage>', methods=['POST'])
def apply_damage(charactername, damage: int):
    for x in characters:
        if x.Name == charactername:
            #if "-" in damage:
            #   damage = int(damage[1]) * (-1)
            #else:
            x.damage(int(damage))
            x.to_file()
            return jsonify(x.to_dict())

    return jsonify({"error": "Character not found"}), 404

@app.route('/api/character/create', methods=['POST'])
def create_character():
    data = request.get_json()
    print("---------------------------")
    print(data)
    print("---------------------------")
    characters.append(Character(data['name'], data['player'], int(data['maxHp']), data['characterclass'], data['race'], data['alignment'], data['bonusInfo']))

    file_path = f'characters/{data['name']}.json'
    characters[-1].to_file(file_path)
    return jsonify(data), 201

characters = []

def load_characters_from_files(directory='characters'):
    characters = []

    # Ensure the directory exists
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return characters

    # List all files in the directory
    for filename in os.listdir(directory):
        if filename.endswith('.json'):
            file_path = os.path.join(directory, filename)

            # Load the character from the file
            with open(file_path, 'r') as file:
                data = json.load(file)
                character = Character.from_dict(data)
                characters.append(character)

    return characters

characters += load_characters_from_files()

if __name__ == '__main__':
    try:
        app.run(debug=True)
        for character in characters:
            character.to_file()
    except:
        for character in characters:
            character.to_file()



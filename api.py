from flask import Flask, request, jsonify
from flask_cors import CORS


def get_song_list():
    import os
    path = "songs"
    dir_list = os.listdir(path)

    return dir_list


app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET', 'POST'])
def get_data():
    if request.method == 'POST':
        data = get_song_list()
        # Process the data or call your Python functions here
        result = {"message": "Data received", "data": data}
        return jsonify(result)
    else:
        return jsonify({"message": "Send a POST request with JSON data"})

if __name__ == '__main__':
    app.run(debug=True)


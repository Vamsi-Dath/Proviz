from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])


@app.route('/')
def health():
    return jsonify({'message': 'backend running OK'})

@app.route('/api/data', methods=['GET'])
def load_data():
    data = [{
        'greeting': 'hello from backend'
    },{
        'greeting': 'successfully fetched the data'
    }]
    print('getting data')
    return jsonify(data)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5001, debug=True)

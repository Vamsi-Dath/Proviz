from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def health():
    return jsonify({'message': 'backend runnning OK'})

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

app.debug = True

data = [
    {'id': 1, 'name': 'John Doe'},
    {'id': 2, 'name': 'Mary Doe'}
]

@app.route("/")
def hello():
    return "<p>Hello, World!</p>"

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/data")
def data_page():
    return render_template('data.html')

@app.route("/api")
def api():
    return jsonify(data)

@app.route('/add', methods=['POST'])
def add():
    data.append({'id': request.form['id'], 'name': request.form['name']})
    return jsonify("{'result': 'success'}")

@app.route('/api/add', methods=['POST'])
def api_add():
    content = request.json
    data.append({'id': request.json['id'], 'name': request.json['name']})
    return jsonify("{'result': 'success'}")
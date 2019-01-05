from flask import Flask, request, send_from_directory, render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', name='pavbox')

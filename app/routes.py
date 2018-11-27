from app import app
from flask import render_template


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/galeria')
def index2():
    return render_template('galeria.html')




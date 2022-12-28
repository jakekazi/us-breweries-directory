from flask import Flask, render_template
import urllib.request, json

app = Flask(__name__)

@app.route("/")
def get_breweries():
    url = ""

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    return render_template ("movies.html", movies=dict["results"])

@app.route("/hello")
def hello_world():
    return "<p>Hello, Jake!</p>"


if __name__ == '__main__':
    app.run(debug=True)

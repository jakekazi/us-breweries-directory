from flask import Flask, render_template
import urllib.request, json

app = Flask(__name__)

@app.route("/breweries")
def get_breweries():
    url = "https://api.openbrewerydb.org/breweries?by_city=harrisburg"

    response = urllib.request.urlopen(url)
    data = response.read()
    dict = json.loads(data)

    return render_template ("breweries.html", breweries=dict["results"])

if __name__ == '__main__':
    app.run(debug=True)

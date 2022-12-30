from flask import Flask
import requests, json

app = Flask(__name__)

@app.route("/breweries", methods=["GET"])
def get_breweries():
    req = requests.get("https://api.openbrewerydb.org/breweries?by_city=harrisburg")
    data = json.loads(req.content)
    return data

if __name__ == '__main__':
    app.run(debug=True)

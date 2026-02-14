from flask import Flask, render_template, request
import os

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
@app.route("/logIn", methods=['GET', 'POST'])
def login ():
    if request.method == "POST":
        name = request.form.get("login_name")
        date = request.form.get("login_date")
        if name == "Настя" and date == "02-09-2024":
            return render_template("index2.html")
        return render_template("logIn.html" , "Неправильно введенні данні")
    else:
        return render_template("logIn.html")

@app.route("/index2")
def home():
    return render_template("index2.html")


@app.route("/gallery")
def gallery():
    photo_list = os.listdir(r"C:\Users\sasap\OneDrive\Рабочий стол\valentine_site\static\img_gallery2")
    return render_template("gallery.html", photos = photo_list)


@app.route("/about")
def about():
    return render_template("about_us.html")

if __name__ == "__main__":
    app.run(debug=True)
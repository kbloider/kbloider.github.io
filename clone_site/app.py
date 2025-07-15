from pathlib import Path

from flask import Flask, render_template, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
TEMPLATE_DIR = BASE_DIR / "templates"
STATIC_ROOT = BASE_DIR / "site" / "static"

app = Flask(__name__, template_folder=str(TEMPLATE_DIR), static_folder=str(STATIC_ROOT))


@app.route("/")
def index():
    """Serve the cloned homepage."""
    return render_template("index.html")


@app.route("/static/<path:filename>")
def static_files(filename):
    """Serve downloaded static assets."""
    return send_from_directory(STATIC_ROOT, filename)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
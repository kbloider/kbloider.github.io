# Clone Site for https://subsidy2.kjsa12.com/

This small Flask project demonstrates how to download ("clone") a remote website and re-serve it locally with Python.

## Quick start

1.  Create a Python virtual environment (optional but recommended):
    ```bash
    python -m venv .venv
    source .venv/bin/activate
    ```
2.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3.  Run the **cloner** once to fetch HTML/CSS/JS assets:
    ```bash
    python clone.py
    ```
    *The script stores downloaded files inside the local `site/` directory and rewrites the HTML so that all static assets load from `/static/…`.*
4.  Start the Flask web server:
    ```bash
    python app.py
    ```
5.  Open http://localhost:5000 in your browser – you should see the cloned page rendered from your machine.

## How it works

* `clone.py` downloads the HTML from the **TARGET_URL** (currently set to `https://subsidy2.kjsa12.com/`).
* It parses the page with **BeautifulSoup**, finds linked CSS/JS/image/font files, downloads them, and rewrites their URLs so that they can be served locally.
* The processed HTML is saved as `templates/index.html`.
* `app.py` is a minimal Flask application that serves that Jinja template and the downloaded static files.

>  ⚠️  This project is intended **for educational purposes**.  Make sure you have permission to copy and re-host any content you clone.
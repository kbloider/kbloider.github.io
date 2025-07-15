import os
import re
import argparse
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
TARGET_URL = "https://subsidy2.kjsa12.com/"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "site")
STATIC_DIR = os.path.join(OUTPUT_DIR, "static")
TEMPLATE_PATH = os.path.join(os.path.dirname(__file__), "templates", "index.html")

# ---------------------------------------------------------------------------
# Helper functions
# ---------------------------------------------------------------------------

def ensure_dir(path: str):
    os.makedirs(path, exist_ok=True)


def download_file(session: requests.Session, url: str, local_path: str):
    """Download a single file to the local_path."""
    ensure_dir(os.path.dirname(local_path))
    try:
        resp = session.get(url, timeout=15)
        resp.raise_for_status()
    except Exception as exc:
        print(f"[WARN] Failed to download {url}: {exc}")
        return None
    with open(local_path, "wb") as f:
        f.write(resp.content)
    print(f"[OK] {url} -> {local_path}")
    return local_path


def is_static_asset(url: str) -> bool:
    return url.lower().endswith(
        (
            ".css",
            ".js",
            ".png",
            ".jpg",
            ".jpeg",
            ".gif",
            ".svg",
            ".ico",
            ".webp",
            ".woff",
            ".woff2",
            ".ttf",
            ".eot",
        )
    )


# ---------------------------------------------------------------------------
# Main cloning logic
# ---------------------------------------------------------------------------


def clone():
    session = requests.Session()
    resp = session.get(TARGET_URL)
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")

    # Rewrite asset links and download them
    for tag in soup.find_all(src=True):
        src = tag["src"]
        if src.startswith("data:"):
            continue
        abs_url = urljoin(TARGET_URL, src)
        parsed = urlparse(abs_url)
        local_asset_path = os.path.join(
            STATIC_DIR, parsed.netloc.replace(".", "_"), parsed.path.lstrip("/")
        )
        if is_static_asset(parsed.path):
            download_file(session, abs_url, local_asset_path)
            rel_path = os.path.relpath(local_asset_path, OUTPUT_DIR)
            tag["src"] = urljoin("/static/", rel_path[len("static/") :])

    for tag in soup.find_all(href=True):
        href = tag["href"]
        if href.startswith("#") or href.startswith("mailto:") or href.startswith("javascript:"):
            continue
        abs_url = urljoin(TARGET_URL, href)
        parsed = urlparse(abs_url)
        if is_static_asset(parsed.path):
            local_asset_path = os.path.join(
                STATIC_DIR, parsed.netloc.replace(".", "_"), parsed.path.lstrip("/")
            )
            download_file(session, abs_url, local_asset_path)
            rel_path = os.path.relpath(local_asset_path, OUTPUT_DIR)
            tag["href"] = urljoin("/static/", rel_path[len("static/") :])

    ensure_dir(os.path.dirname(TEMPLATE_PATH))
    with open(TEMPLATE_PATH, "w", encoding="utf-8") as f:
        f.write(str(soup))
    print(f"[DONE] Saved template to {TEMPLATE_PATH}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Clone the target site locally.")
    args = parser.parse_args()

    clone()
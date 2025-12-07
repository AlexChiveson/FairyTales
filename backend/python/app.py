from __future__ import annotations
import json
import os
from datetime import datetime
from pathlib import Path
from typing import Any, Dict, List

from flask import Flask, jsonify, request, send_from_directory

APP_ROOT = Path(__file__).resolve().parents[2]
PUBLIC_DIR = APP_ROOT / "public"
DATA_DIR = APP_ROOT / "data"
DATA_DIR.mkdir(exist_ok=True)
ORDERS_FILE = DATA_DIR / "orders.json"
REVIEWS_FILE = DATA_DIR / "reviews.json"

app = Flask(__name__, static_folder=str(PUBLIC_DIR), static_url_path="")


def _append_record(path: Path, payload: Dict[str, Any]) -> None:
  records: List[Dict[str, Any]] = []
  if path.exists():
    try:
      records = json.loads(path.read_text())
    except json.JSONDecodeError:
      records = []
  records.append(payload)
  path.write_text(json.dumps(records, indent=2, ensure_ascii=False))


def _serialize_cart(cart: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
  safe_fields = {"id", "title", "price", "quantity"}
  return [
    {k: item[k] for k in safe_fields if k in item}
    for item in cart
  ]


@app.route("/api/order", methods=["POST"])
def order() -> Any:
  payload = request.get_json(force=True, silent=True) or {}
  if payload.get("website"):
    return jsonify({"ok": True, "bot": True})

  required = ["firstName", "lastName", "email", "address", "subscription"]
  if any(not payload.get(field) for field in required):
    return jsonify({"error": "Missing fields"}), 400

  order_record = {
    "firstName": payload.get("firstName"),
    "lastName": payload.get("lastName"),
    "email": payload.get("email"),
    "address": payload.get("address"),
    "comment": payload.get("comment", ""),
    "subscription": payload.get("subscription"),
    "cart": _serialize_cart(payload.get("cart", [])),
    "createdAt": datetime.utcnow().isoformat() + "Z",
  }
  _append_record(ORDERS_FILE, order_record)
  # TODO: integrate email + Google Sheets sync (use env secrets & OAuth).
  return jsonify({"ok": True})


@app.route("/api/review", methods=["POST"])
def review() -> Any:
  payload = request.get_json(force=True, silent=True) or {}
  if payload.get("website"):
    return jsonify({"ok": True, "bot": True})

  if not payload.get("email") or not payload.get("reviewLink"):
    return jsonify({"error": "Missing fields"}), 400

  review_record = {
    "email": payload.get("email"),
    "reviewLink": payload.get("reviewLink"),
    "createdAt": datetime.utcnow().isoformat() + "Z",
  }
  _append_record(REVIEWS_FILE, review_record)
  return jsonify({"ok": True})


@app.route("/")
def home() -> Any:
  return send_from_directory(PUBLIC_DIR, "index.html")


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)

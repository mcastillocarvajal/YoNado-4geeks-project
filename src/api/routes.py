"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite, Activity
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


# >>>>>>>  LOGIN / REGISTER ENDPOINT


@api.route('/login', methods=['POST'])
def handle_login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()

    if user is None:
         return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)

    data = {
        "user": user.serialize(),
        "access_token": access_token,
    }
    return jsonify(data)

@api.route('/register', methods=['POST'])
def create_register():
    body = request.get_json()
    new_user = User(name=body["name"], last_name="last_name", email=body["email"], password=body["password"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(body), 200

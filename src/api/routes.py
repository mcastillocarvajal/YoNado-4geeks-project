"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Favorite, Activity
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

api = Blueprint('api', __name__)


# >>>>>>>> RESET PASSWORD


@api.route('/resetpassword', methods=['POST'])
def handle_resetpassword():

    email = request.json.get("email", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"msg": "Email not found"}), 401

    access_token = create_access_token(identity=email)
    link = os.environ.get('BACKEND_URL')
    position = 11
    new_character = '0'

    temp = list(link)
    temp[position] = new_character
    link = "".join(temp)

    message = Mail(
        from_email='yonado4geeks@gmail.com',
        to_emails=email,
        subject='Restablecer contraseña',
        html_content=
        f'<h3>Hola {user.name},<h3><br></br><p>Recibimos tu solicitud para restablecer tu acceso en Yo Nado.</p><br></br><p>Accede a este link para cambiar tu contraseña: {link}/resetpassword/DyhsHSAI46sdal</p>')
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
        print(response.status_code)
        print(response.body)
        print(response.headers)
        data = {
            "user": user.serialize(),
            "access_token": access_token,
        }
        return jsonify(data)

    except Exception as e:
        print(e.message)


@api.route('/password', methods=['PUT'])
def update_password():
    
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email).first()

    if user is None:
        raise APIException('User not found', status_code=404)
    
    user.password = password	
    db.session.commit()

    response = {
	"msg": "Password updated sucessfully"
    }  	
    return jsonify(response), 200


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
    new_user = User(name=body["name"], last_name=body["last_name"], email=body["email"], password=body["password"])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(body), 200


# >>>>>>>  FAVORITES ENDPOINT


@api.route('/favorite', methods=['POST'])
@jwt_required()
def create_favorite():

    body = request.get_json()
    new_favorite = Favorite(title=body["title"], description=body["description"], link=body["link"], user_id=body["user_id"])
    db.session.add(new_favorite)
    db.session.commit()
    return jsonify(body), 200

@api.route('/delete_favorite', methods=['DELETE'])
@jwt_required()
def delete_favorite():

    user = request.json.get("user_id", None)
    link = request.json.get("link", None)
    delete_favorite = Favorite.query.filter_by(user_id=user, link=link).first()
    db.session.delete(delete_favorite)
    db.session.commit()
    response = { "msg" : "Favorite deleted successfully" }
    return jsonify(response), 200


# >>>>>>>  ACTIVITY ENDPOINT


@api.route('/activity', methods=['POST'])
@jwt_required()
def create_activity():

    body = request.get_json()
    new_activity = Activity(exercise=body["exercise"], distance=body["distance"], date=body["date"], lapse=body["lapse"], user_id=body["user_id"], deleteNumber=body["deleteNumber"])
    db.session.add(new_activity)
    db.session.commit()
    return jsonify(body), 200

@api.route('/delete_activity', methods=['DELETE'])
@jwt_required()
def delete_activity():

    body = request.get_json()
    delete_activity = Activity.query.filter_by(deleteNumber=body["deleteNumber"]).first()
    db.session.delete(delete_activity)
    db.session.commit()
    response = { "msg" : "Activity deleted successfully" }
    return jsonify(response), 200



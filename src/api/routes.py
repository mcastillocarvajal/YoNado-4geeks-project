"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Exercises
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

    #Ejercicios

@api.route('/exercises', methods=['GET'])
def handle_Exercises():
    newExercise=Exercises.getAllExercises()
    response_body = {
        "msg": "Hello, this is your GET /exercise response"
    }

    return jsonify(newExercise), 200

@api.route('/exercises/<int:id>', methods=['DELETE'])
def delete_exercises(id):
    exercises.deleteExercises(id)
    response_body = {
        "msg": "Exercise Delete Succesfull"
    }
    return jsonify(response_body), 200
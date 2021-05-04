from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    favorites = db.relationship('Favorite',backref='user', lazy=True)
    activities = db.relationship('Activity',backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "favorites": list(map(lambda x: x.serialize(), self.favorites)),
            "activities": list(map(lambda x: x.serialize(), self.activities)),
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), nullable=False)
    description= db.Column(db.String(500), nullable=False)
    link= db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Favorite %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "description": self.description,
            "link": self.link,
        }

class Activity(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise = db.Column(db.String(120), nullable=False)
    distance= db.Column(db.Integer, nullable=False)
    date= db.Column(db.Date, nullable=False)
    lapse= db.Column(db.String, nullable=False)
    deleteNumber= db.Column(db.String, nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)

    def __repr__(self):
        return '<Activity %r>' % self.exercise

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "exercise": self.exercise,
            "distance": self.distance,
            "date": self.date,
            "lapse": self.lapse,
            "deleteNumber": self.deleteNumber,
        }
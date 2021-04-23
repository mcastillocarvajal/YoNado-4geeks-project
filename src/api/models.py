from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Exercises(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(500),  nullable=False)
    exercise_description= db.Column(db.String(500),  nullable=False)
    exercise_video= db.Column(db.String(500),  nullable=False)
    

    def __repr__(self):
        return '<Exercises %r>' % self.exercisesname

    def serialize(self):
        return {
            "id": self.id,
            "exercise_name": self.exercise_name,
            "exercise_description": self.exercise_description,
            "exercise_video": self.exercise_video,
            
        }

    def getAllExercises():
        all_excercises = Exercises.query.all()
        all_excercises = list(map(lambda x: x.serialize(), all_excercises)) 
        return all_excercises  


    def deleteExercises(id):
        exercises = Exercises.query.get(id)
        db.session.delete(exercises)
        db.session.commit()    
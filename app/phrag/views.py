from flask import Blueprint, make_response, jsonify, request
import datetime

from app.auth.helper import token_required
from app.models import User, Phrag
from app import db

phrag = Blueprint('phrag', __name__)


@phrag.route('/phrag/', methods=['GET'])
@token_required
def get_phrags(current_user):
    user = User.get_by_id(current_user.id)
    phrags = Phrag.by_silo(user.get_silo(), order_by=Phrag.modified_at.desc())
    return make_response(jsonify({
        'status': 'success',
        'phrags': [p.json() for p in phrags],
    })), 200


@phrag.route('/phrag/add', methods=['POST'])
@token_required
def add_phrag(current_user):
    user = User.get_by_id(current_user.id)
    silo = user.get_silo()
    phrags = Phrag.by_silo(silo)

    data = request.get_json()
    text = data.get('text')

    p = Phrag(silo.id, text)

    db.session.add(p)
    db.session.commit()

    return make_response(jsonify({
        'status': 'success',
    })), 200


@phrag.route('/phrag/update', methods=['POST'])
@token_required
def update_phrag(current_user):
    user = User.get_by_id(current_user.id)
    silo = user.get_silo()

    data = request.get_json()
    text = data.get('text')
    id = data.get('id')

    p = db.session.query(Phrag).get(id)
    p.modified_at = datetime.datetime.utcnow()
    p.text = text

    db.session.add(p)
    db.session.commit()

    return make_response(jsonify({
        'status': 'success',
    })), 200


@phrag.route('/phrag/tag/add', methods=['POST'])
@token_required
def add_tag(current_user):
    user = User.get_by_id(current_user.id)
    silo = user.get_silo()

    data = request.get_json()
    title = data.get('title')
    emoji = data.get('emoji')
    alts = data.get('alts')

    t = Tag(title, emoji, alts, silo.id)

    db.session.add(t)
    db.session.commit()

    return make_response(jsonify({
        'status': 'success',
    })), 200


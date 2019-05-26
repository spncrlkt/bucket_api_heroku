from flask import Blueprint, make_response, jsonify

from app.auth.helper import token_required

phrag = Blueprint('phrag', __name__)


# Serve React App
@phrag.route('/phrag/', methods=['GET'])
@token_required
def get_phrags(current_user):
    user = User.get_by_id(current_user.id)
    return make_response(jsonify({
        'status': 'success',
    })), 200

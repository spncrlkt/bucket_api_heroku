import os
from flask import Blueprint, send_from_directory, make_response, jsonify
from app.auth.helper import token_required

main = Blueprint('main', __name__, static_folder='public')


# Serve React App
@main.route('/')
def serve():
    return send_from_directory(main.static_folder, 'index.html')

@main.route('/ok/')
@token_required
def ok(current_user):
    return make_response(jsonify({
        'status': 'success',
    })), 200

@main.route('/static/', methods=['GET', 'POST'])
def static_root_path():
    return send_from_directory(main.static_folder, 'index.html')

@main.route('/static/css/<path:path>', methods=['GET', 'POST'])
def static_css_path(path):
    return send_from_directory(main.static_folder, 'static/css/{}'.format(path))

@main.route('/static/js/<path:path>', methods=['GET', 'POST'])
def static_js_path(path):
    return send_from_directory(main.static_folder, 'static/js/{}'.format(path))


@main.route('/static/<path:path>', methods=['GET', 'POST'])
def any_root_path(path):
    return send_from_directory(main.static_folder, 'static/' + path)


from flask import Blueprint, render_template as view

docs = Blueprint('docs', __name__, static_folder='static', template_folder='templates')


@docs.route('/docs/')
def index():
    """
    Show an index template
    :return:
    """
    return view('docs/index.html')

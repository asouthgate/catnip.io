import logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG)

from flask import Flask, render_template

# TODO: Separate out
from flask_socketio import SocketIO
from flask_socketio import send, emit

def create_app(test_config=None):
    """ Factory function to create an app!

    Returns:
        app: Flask application
    """

    app = Flask(__name__, instance_relative_config=True)
    socketio = SocketIO(app)


    # TODO: for when implementing users and login sessions
#    app.config.from_mapping(
#        SECRET_KEY='',
#        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
#    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # TODO: for when we need DB
#    try:
#        os.makedirs(app.instance_path)
#    except OSError:
#        pass

    @app.route('/')
    def hollow():
        return 'Hollow world!'

    # TODO: make game.py / look into blueprints
    @app.route('/game')
    def game():
        return render_template("foo.html")

    @socketio.on('my event')
    def handle_my_custom_event(json):
        """ Receive data

        Args:
            json: data sent by client

        Returns:
            response: data sent back to client
        """
        print('received json: ' + str(json))
        send(json)
        return 'one'

    return app

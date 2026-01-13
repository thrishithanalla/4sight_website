import sys
import os

# Add the backend directory to sys.path to allow imports like 'from models import ...'
# This is necessary because the backend code uses absolute imports assuming it's the root or PYTHONPATH includes it.
sys.path.append(os.path.join(os.path.dirname(__file__), '../backend'))

from main import app

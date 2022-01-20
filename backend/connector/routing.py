from django.urls import re_path

from . import server

websocket_urlpatterns = [
    re_path(r'echo$', server.EchoConsumer.as_asgi()),
]

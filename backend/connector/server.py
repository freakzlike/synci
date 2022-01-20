from channels.generic.websocket import WebsocketConsumer


class EchoConsumer(WebsocketConsumer):
    def connect(self):
        print('connected')
        self.accept()

    def disconnect(self, close_code):
        print('disconnected')
        pass

    def receive(self, text_data):
        print(f'received: {text_data}')

        self.send(text_data=text_data)

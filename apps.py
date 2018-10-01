from django.apps import AppConfig
import subprocess

class startDevServer(AppConfig):
    name = 'app'
    verbose_name = "app"

    def ready(self):
        print('attempting to run UI')
        proc = subprocess.Popen(['yarn run serve'], shell=True,
                                stdin=None, stdout=None, stderr=None, close_fds=True)

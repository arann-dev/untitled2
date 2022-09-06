import sys
import os
import subprocess
import platform
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/runscript', methods=['POST'])
def rs():
    # subprocess.call(r'Nonadmin.cmd', shell=True)
    # subprocess.run('testbatfile.bat', shell=True)
    val = request.form.get('value')
    print(val)
    if val != 'runn':
        return {'message': "errrr"}

    if platform.system() == 'Windows':
        os.system('Nonadmin.cmd')
        os.system('testbatfile.bat')
        os.system('vagrant up')
    if platform.system() == 'Linux':
        sudoPassword = 'nhatnam12312'
        command = './linux.sh'
        p = os.system('echo %s|sudo -S %s' % (sudoPassword, command))

    print('nhatnam')
    return {}


if __name__ == "__main__":
    app.run(debug=True, port=5000)

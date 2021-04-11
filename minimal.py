from flask import Flask, render_template

# give our app the name of the current module. This helps Flask locate things. 
app = Flask(__name__) 

# give it a route
@app.route('/')
def whatever():
    return render_template('react_test.html')

# tell it to run, and why not use port 5000
# note, when you add debug=True, one aspect of debug mode is it hard refreshes each time
app.run(host='0.0.0.0', debug=True, port=5000)


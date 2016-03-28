java \
-classpath \
js.jar \
org.mozilla.javascript.tools.shell.Main \
r.js \
-o \
build.js

node r.js -o build.js
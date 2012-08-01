build:
	mkdir -p bin
	cp js/jquery.simplepopover.js bin/jquery.simplepopover.js
	uglifyjs bin/jquery.simplepopover.js > bin/jquery.simplepopover.min.js
	touch bin/jquery.simplepopover.css
	lessc less/jquery.simplepopover.less > bin/jquery.simplepopover.css
clean:
	rm -rf bin
lint:
	@jshint ./
	@echo "Everything seems all well and good."
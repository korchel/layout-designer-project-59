lint:
	npx stylelint ./app/sass/**/*.scss

deploy:
	npx surge ./build/
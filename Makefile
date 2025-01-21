install: # install dependencies
	npm ci
brain-games: #start brain-games
	node bin/brain-games.js
publish: #
	npm publish --dry-run
lint: # linter
	npx eslint .
brain-even: #start brain-even
	node bin/brain-even.js

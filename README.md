# eslint-plugin-nested

> eslint-plugin-nested

## Usage

```bash
$ npm i eslint eslint-plugin-nested -D
```

Add following `eslintConfig` into your package.json or eslintrc file

```json
{
	"name": "project-name",
	"eslintConfig": {
		"plugins": [ "nested" ],
		"rules": {
			"nested/max-nested-if": [ "error", 2 ]
		}
	}
}
```

![editor](/media/editor.png)
![cmd](/media/cmd.png)

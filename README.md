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

<img src="/media/editor.png" alt="editor" width="400">

<img src="/media/cmd.png" alt="cmd" width="500">

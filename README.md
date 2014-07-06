RequireJS Handlebars Plugin
===========================
Allows to compile [Handlebars](http://handlebarsjs.com/) templates easily via [require.js](http://requirejs.org) or pre-
compile them for a performance boost.

Basic Usage
-----------
Define a texture like `foo.mustache`:
```mustache
<div class="foo">
	<h1>{{bar}}</h1>
	<ul>
		{{#names}}
			<li>{{.}}</li>
		{{/names}}
	</ul>
</div>
```

Load your template with the `hndl.js`` plugin:
```js
require (['hndl!foo'], function (template) {
	console.log (template ({
		bar:			'Hello World',
		names:			['Foo', 'Bar', 'Potato']
	});
});
```

By default templates will be loaded with the [RequireJS text plugin](https://github.com/requirejs/text) and compiled
automatically.


Release History
---------------
| Release Date | Version | Comment         |
| ------------ | ------- | --------------- |
| 2014-07-06   | v0.1.0  | Initial Release |

License
-------
	Copyright (C) 2014 Johannes Donath <johannesd@evil-co.com>

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
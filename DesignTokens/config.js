import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const sd = new StyleDictionary({
  "source": [
    "tokens/**/**.json"
  ],
  "preprocessors": [
    "tokens-studio"
  ],
  "platforms": {
    "css": {
      "buildPath": "build/css/",
      "prefix": "",
      "transformGroup": "tokens-studio",
      "transforms": [
        "name/kebab"
      ],
      "files": [
        {
          "destination": "_variables.css",
          "format": "css/variables"
        }
      ]
    },
    "js": {
      "transformGroup": "tokens-studio",
      "buildPath": "build/js/",
      "files": [
        {
          "destination": "variables.js",
          "format": "javascript/es6"
        }
      ]
    }
  }
});

await sd.buildAllPlatforms();
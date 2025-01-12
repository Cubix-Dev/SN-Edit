/* generated by pull.js */
const manifest = {
  "editorOnly": true,
  "name": "Extra key support",
  "description": "Adds more keys to the \"key () pressed?\" and \"when () key pressed\" block dropdowns, such as enter, dot, comma, and more.",
  "tags": [
    "beta"
  ],
  "credits": [
    {
      "name": "Tacodude7729",
      "link": "https://scratch.mit.edu/users/Tacodude7729/"
    }
  ],
  "info": [
    {
      "type": "warning",
      "text": "The \"experimental keys\" include equals, slash, semicolon and more. They may not work on all operating systems or keyboard layouts.",
      "id": "experimentalKeysWarn"
    },
    {
      "type": "warning",
      "text": "The \"Shift keys\" include keys which typically require the Shift key and a number key, like hashtag, exclamation mark and more. These keys only work with the \"when () key pressed\" block and do not work on all operating systems or keyboard layouts.",
      "id": "shiftKeysWarn"
    },
    {
      "type": "warning",
      "text": "The \"TurboWarp keys\" will only work in TurboWarp, not in Scratch.",
      "id": "twKeysWarn"
    }
  ],
  "settings": [
    {
      "dynamic": true,
      "name": "Enable experimental keys",
      "id": "experimentalKeys",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Enable Shift keys",
      "id": "shiftKeys",
      "type": "boolean",
      "default": false
    },
    {
      "dynamic": true,
      "name": "Enable TurboWarp keys",
      "id": "twKeys",
      "type": "boolean",
      "default": false
    }
  ],
  "userscripts": [
    {
      "url": "userscript.js"
    }
  ],
  "dynamicDisable": true,
  "enabledByDefault": true
};
export default manifest;

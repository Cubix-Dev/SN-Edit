/* generated by pull.js */
const manifest = {
  "name": "Hide delete button",
  "description": "Hides delete button (trash can icon) from sprites, costumes and sounds. They can still be deleted using the right click context menu.",
  "tags": [],
  "dynamicDisable": true,
  "updateUserstylesOnSettingsChange": true,
  "settings": [
    {
      "dynamic": true,
      "name": "Sprites",
      "id": "sprites",
      "type": "boolean",
      "default": true
    },
    {
      "dynamic": true,
      "name": "Costumes and backdrops",
      "id": "costumes",
      "type": "boolean",
      "default": true
    },
    {
      "dynamic": true,
      "name": "Sounds",
      "id": "sounds",
      "type": "boolean",
      "default": true
    }
  ],
  "userstyles": [
    {
      "url": "sprites.css",
      "if": {
        "settings": {
          "sprites": true
        }
      }
    },
    {
      "url": "costumes.css",
      "if": {
        "settings": {
          "costumes": true
        }
      }
    },
    {
      "url": "sounds.css",
      "if": {
        "settings": {
          "sounds": true
        }
      }
    }
  ]
};
export default manifest;

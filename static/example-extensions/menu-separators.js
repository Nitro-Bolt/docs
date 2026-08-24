class MenuSeparators {
  getInfo() {
    return {
      id: "menuseparatorsexample",
      name: "Menu Separators",
      blocks: [
        {
          opcode: "chooseFood",
          blockType: Scratch.BlockType.REPORTER,
          text: "choose [FOOD]",
          arguments: {
            FOOD: {
              type: Scratch.ArgumentType.STRING,
              menu: "FOOD_MENU",
              defaultValue: "water"
            }
          }
        }
      ],
      menus: {
        FOOD_MENU: {
          items: [
            "water",
            "juice",
            "---",
            "salad",
            "soup"
          ]
        }
      }
    };
  }

  chooseFood(args) {
    return args.FOOD;
  }
}

Scratch.extensions.register(new MenuSeparators());

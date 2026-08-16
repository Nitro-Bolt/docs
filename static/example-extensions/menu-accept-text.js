class MenuAcceptText {
  getInfo() {
    return {
      id: "menuaccepttextexample",
      name: "Menu Accept Text",
      blocks: [
        {
          opcode: "choose",
          blockType: Scratch.BlockType.REPORTER,
          text: "choose [COLOR]",
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.STRING,
              menu: "COLOR_MENU",
              defaultValue: "red"
            }
          }
        }
      ],
      menus: {
        COLOR_MENU: {
          acceptText: true,
          items: ["red", "green", "blue"]
        }
      }
    };
  }

  choose(args) {
    return args.COLOR;
  }
}
Scratch.extensions.register(new MenuAcceptText());

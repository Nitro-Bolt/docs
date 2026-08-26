class ExtraMenuProperties {
  getInfo() {
    return {
      id: "extramenupropertiesexample",
      name: "Extra Menu Properties",
      blocks: [
        {
          opcode: "choose",
          blockType: Scratch.BlockType.REPORTER,
          text: "choose [COLOR]",
          arguments: {
            COLOR: {
              type: Scratch.ArgumentType.STRING,
              menu: "colors",
              defaultValue: "red"
            }
          }
        }
      ],
      menus: {
        colors: {
          acceptText: true,
          items: [
            "red", "green", "blue",
            "---",
            "cyan", "magenta", "yellow"
          ]
        }
      }
    };
  }

  choose(args) {
    return args.COLOR;
  }
}
Scratch.extensions.register(new ExtraMenuProperties());

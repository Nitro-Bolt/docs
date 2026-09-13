class MutatorDropdownExample {
  getInfo() {
    return {
      id: "mutatordropdownexample",
      name: "Mutator Dropdown Example",
      blocks: [
        {
          opcode: "convert",
          blockType: Scratch.BlockType.REPORTER,
          text: "[MODE] [INPUT] with delimiter [DELIMITER]",
          arguments: {
            MODE: {
              type: Scratch.ArgumentType.STRING,
              menu: "MODE_MENU",
              defaultValue: "SPLIT"
            },
            INPUT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "a,b,c"
            },
            DELIMITER: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ","
            }
          }
        }
      ],
      menus: {
        MODE_MENU: {
          items: [
            {text: "split", value: "SPLIT"},
            {text: "join", value: "JOIN"}
          ],
          mutator: {
            SPLIT: {
              output: Scratch.BlockType.ARRAY,
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: "a,b,c"
                }
              }
            },
            JOIN: {
              output: Scratch.BlockType.REPORTER,
              arguments: {
                INPUT: {
                  type: Scratch.ArgumentType.ARRAY
                }
              }
            }
          }
        }
      }
    };
  }

  convert(args) {
    if (args.MODE === "JOIN") {
      const value = Array.isArray(args.INPUT) ? args.INPUT : [args.INPUT];
      return value.join(args.DELIMITER);
    }
    return String(args.INPUT).split(args.DELIMITER);
  }
}

Scratch.extensions.register(new MutatorDropdownExample());

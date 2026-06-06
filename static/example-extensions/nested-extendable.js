class NestedExtendable {
  getInfo() {
    return {
      id: "nestedextendableexample",
      name: "Nested Extendable",
      blocks: [
        {
          opcode: "nested",
          blockType: Scratch.BlockType.COMMAND,
          text: "nested [INPUTS]",
          arguments: {
            INPUTS: {
              type: Scratch.ArgumentType.EXTENDABLE,
              text: "layer 1 [HEY] [NUMBER]",
              arguments: {
                HEY: {
                  type: Scratch.ArgumentType.EXTENDABLE,
                  text: "layer 2 [ABC]",
                  arguments: {
                    ABC: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: 5,
                    },
                  },
                  separator: "||",
                },
                NUMBER: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 10,
                },
              },
              separator: "|",
            },
          },
        },
      ],
    };
  }

  nested(args, util) {
    const numbers = util.extendableToArray(args, "INPUTS", "NUMBER");
    const abcValues = util.extendableToArray(args, "INPUTS", "HEY", "ABC");

    console.log("Numbers on layer one:", numbers);
    console.log("Numbers on layer two:", abcValues);

    abcValues.forEach((innerList, i) => {
      console.log(`Input ${i} has ${innerList.length} items in layer 2`);
    });
  }
}
Scratch.extensions.register(new NestedExtendable());
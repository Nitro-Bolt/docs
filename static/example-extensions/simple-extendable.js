class SimpleExtendable {
  getInfo() {
    return {
      id: "simpleextendableexample",
      name: "Simple Extendable",
      blocks: [
        {
          opcode: "hello",
          blockType: Scratch.BlockType.REPORTER,
          text: "hello [INPUTS]",
          arguments: {
            INPUTS: {
              type: Scratch.ArgumentType.EXTENDABLE,
              text: "[ABC]",
              arguments: {
                ABC: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ""
                }
              }
            }
          }
        }
      ]
    };
  }

  hello(args, util) {
    // Returns an array with the values of all the ABC inputs, in order
    const values = util.extendableToArray(args, "INPUTS", "ABC");
    return values.join("");
  }
}
Scratch.extensions.register(new SimpleExtendable());
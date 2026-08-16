class ObjectArray {
  getInfo() {
    return {
      id: "objectarrayexample",
      name: "Object & Array",
      blocks: [
        {
          opcode: "object",
          blockType: Scratch.BlockType.OBJECT,
          text: "object with [KEY] = [VALUE]",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key"
            },
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "value"
            }
          }
        },
        {
          opcode: "array",
          blockType: Scratch.BlockType.ARRAY,
          text: "array with [ITEM]",
          arguments: {
            ITEM: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "item"
            }
          }
        },
        {
          opcode: "readKey",
          blockType: Scratch.BlockType.REPORTER,
          text: "key [KEY] of [OBJ]",
          arguments: {
            KEY: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "key"
            },
            OBJ: {
              type: Scratch.ArgumentType.OBJECT
            }
          }
        },
        {
          opcode: "length",
          blockType: Scratch.BlockType.REPORTER,
          text: "length of [ARR]",
          arguments: {
            ARR: {
              type: Scratch.ArgumentType.ARRAY
            }
          }
        }
      ]
    };
  }

  object(args) {
    return { [args.KEY]: args.VALUE };
  }

  array(args) {
    return [args.ITEM];
  }

  readKey(args) {
    if (!args.OBJ) return "";
    return args.OBJ[args.KEY];
  }

  length(args) {
    if (!args.ARR) return 0;
    return args.ARR.length;
  }
}
Scratch.extensions.register(new ObjectArray());

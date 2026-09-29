class Counter {
  constructor() {
    this.value = 0;
  }

  getInfo() {
    return {
      id: "dualblockexample",
      name: "Counter",
      blocks: [
        {
          opcode: "changeCounter",
          blockType: Scratch.BlockType.COMMAND,
          dualType: Scratch.BlockType.REPORTER,
          text: "change counter by [AMOUNT]",
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: "counterValue",
          blockType: Scratch.BlockType.REPORTER,
          text: "counter value"
        },
        {
          opcode: "resetCounter",
          blockType: Scratch.BlockType.COMMAND,
          text: "reset counter"
        }
      ]
    };
  }

  changeCounter(args) {
    this.value += Scratch.Cast.toNumber(args.AMOUNT);
    return this.value;
  }

  counterValue() {
    return this.value;
  }

  resetCounter() {
    this.value = 0;
  }
}

Scratch.extensions.register(new Counter());

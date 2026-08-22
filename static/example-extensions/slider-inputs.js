class SliderInputs {
  getInfo() {
    return {
      id: "sliderinputsexample",
      name: "Slider Inputs",
      blocks: [
        {
          opcode: "amount",
          blockType: Scratch.BlockType.REPORTER,
          text: "amount [AMOUNT]",
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.SLIDER,
              defaultValue: 50,
              min: 0,
              max: 100,
              precision: 1
            }
          }
        },
        {
          opcode: "fineAmount",
          blockType: Scratch.BlockType.REPORTER,
          text: "fine amount [AMOUNT]",
          arguments: {
            AMOUNT: {
              type: Scratch.ArgumentType.SLIDER,
              defaultValue: 0,
              min: -1,
              max: 1,
              precision: 0.01
            }
          }
        }
      ]
    };
  }

  amount(args) {
    return args.AMOUNT;
  }

  fineAmount(args) {
    return args.AMOUNT;
  }
}

Scratch.extensions.register(new SliderInputs());

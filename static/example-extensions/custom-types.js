(function (Scratch) {
  "use strict";

  class Counter {
    static get shape() {
      return Scratch.BlockShape.SQUARE;
    }

    constructor(value) {
      this.value = Scratch.Cast.toNumber(value || 0);
    }

    static cast(value) {
      if (value instanceof Counter) return value;
      return new Counter(value);
    }

    toString() {
      return `counter:${this.value}`;
    }

    static visualReport(abc) {
      return `<p>${abc.value}</p><hr><p>that's like ${abc.value - 31} more than 31</p>`;
    }

    valueOf() {
      return this.value;
    }

    toJSON() {
      return { count: this.value };
    }

    static fromJSON(json) {
      return new Counter(json.count);
    }
  }

  Scratch.types.register("counter", Counter);

  class CustomTypesDemo {
    getInfo() {
      return {
        id: "customTypesDemo",
        name: "Custom Types Demo",
        useUnsandboxedRuntime: true,
        color1: "#9966FF",
        blocks: [
          {
            opcode: "newCounter",
            blockType: Scratch.BlockType.REPORTER,
            text: "counter [VALUE]",
            outputType: "counter",
            arguments: {
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 },
            },
          },
          {
            opcode: "counterPlus",
            blockType: Scratch.BlockType.REPORTER,
            text: "[COUNTER] plus [VALUE]",
            outputType: "counter",
            arguments: {
              COUNTER: { type: "counter" },
              VALUE: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
            },
          },
          {
            opcode: "counterEquals",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "[COUNTER] = [OTHER]",
            arguments: {
              COUNTER: { type: "counter" },
              OTHER: { type: "counter" },
            },
          },
          {
            opcode: "showCounter",
            blockType: Scratch.BlockType.COMMAND,
            text: "remember counter [COUNTER]",
            arguments: {
              COUNTER: { type: "counter" },
            },
          },
          {
            opcode: "reportCounter",
            blockType: Scratch.BlockType.REPORTER,
            text: "last counter",
            outputType: "counter",
          },
        ],
      };
    }

    constructor() {
      this.lastCounter = null;
      this.lastScore = null;
    }

    newCounter({ VALUE }) {
      return new Counter(VALUE);
    }

    counterPlus({ COUNTER, VALUE }) {
      return new Counter(COUNTER?.value + VALUE);
    }

    counterEquals({ COUNTER, OTHER }) {
      return COUNTER?.value === OTHER?.value;
    }

    showCounter({ COUNTER }) {
      this.lastCounter = COUNTER;
    }

    reportCounter() {
      return this.lastCounter;
    }
  }

  Scratch.extensions.register(new CustomTypesDemo());
})(Scratch);

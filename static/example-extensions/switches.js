class Switches {
  getInfo() {
    return {
      id: "switchesexample",
      name: "Switches",
      blocks: [
        {
          opcode: "abc",
          blockType: Scratch.BlockType.COMMAND,
          text: "i can switch with def",
          switches: ["def"]
        },
        {
          opcode: "def",
          blockType: Scratch.BlockType.COMMAND,
          text: "i can switch with abc",
          switches: ["abc"]
        }
      ]
    };
  }

  abc() {
    console.log("abc");
  }

  def() {
    console.log("def");
  }
}
Scratch.extensions.register(new Switches());

class BlockMetadata {
  getInfo() {
    return {
      id: "blockmetadataexample",
      name: "Block Metadata",
      blocks: [
        {
          opcode: "purple",
          blockType: Scratch.BlockType.REPORTER,
          text: "purple reporter",
          color1: "#8b5cf6",
          color2: "#3a82ed",
          color3: "#28d9a4",
          tooltip: "This block is purple!",
          allowDropAnywhere: true
        },
        {
          opcode: "hexagonal",
          blockType: Scratch.BlockType.REPORTER,
          text: "hexagonal reporter",
          blockShape: 1
        }
      ]
    };
  }

  purple() {
    return "purple";
  }

  hexagonal() {
    return "hexagon";
  }
}
Scratch.extensions.register(new BlockMetadata());

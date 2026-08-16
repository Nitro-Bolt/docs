class ExtensionMetadata {
  getInfo() {
    return {
      id: "extensionmetadataexample",
      name: "Extension Metadata",
      color1: "#ff6b6b",
      color2: "#ee5a5a",
      color3: "#c73f3f",
      requiredExtensions: ["text2speech"],
      showStatusButton: true,
      blocks: [
        {
          opcode: "hello",
          blockType: Scratch.BlockType.REPORTER,
          text: "hello",
        }
      ]
    };
  }

  hello() {
    return "neighbor";
  }
}
Scratch.extensions.register(new ExtensionMetadata());

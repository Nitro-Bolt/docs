class DragToDuplicate {
  getInfo() {
    return {
      id: 'dragtoduplicateexample',
      name: 'Drag to Duplicate',
      blocks: [
        {
          opcode: 'duplicateReporter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'duplicate',
          duplicateOnDrag: true // important
        },
        {
          opcode: 'hello',
          blockType: Scratch.BlockType.COMMAND,
          text: 'hello [INP]',
          arguments: {
            INP: {
              type: Scratch.ArgumentType.STRING,
              shadow: 'duplicateReporter' // important
            }
          }
        }
      ]
    };
  }

  duplicateReporter() {
    return 'hi';
  }

  hello({ INP }) {
    console.log(INP);
  }
}
Scratch.extensions.register(new DragToDuplicate());
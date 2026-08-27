class StringInputsExample {
  getInfo() {
    return {
      id: 'stringinputsexample',
      name: 'String Inputs',
      blocks: [
        {
          opcode: 'logNormal',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello'
            }
          }
        },
        {
          opcode: 'logMultiline',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log multiline [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'first line\nsecond line',
              canMultiline: true
            }
          }
        },
        {
          opcode: 'logFixedMultiline',
          blockType: Scratch.BlockType.COMMAND,
          text: 'log fixed multiline [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'first line\nsecond line',
              canMultiline: true,
              acceptReporters: false
            }
          }
        }
      ]
    };
  }

  logNormal({TEXT}) {
    console.log(TEXT);
  }

  logMultiline({TEXT}) {
    console.log(TEXT);
  }

  logFixedMultiline({TEXT}) {
    console.log(TEXT);
  }
}

Scratch.extensions.register(new StringInputsExample());

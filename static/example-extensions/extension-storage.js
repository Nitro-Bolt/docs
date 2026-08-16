(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This Extension Storage example must run unsandboxed');
  }

  class ExtensionStorage {
    constructor() {
      this.extensionId = 'extensionstorageexample';
    }

    getInfo() {
      return {
        id: this.extensionId,
        name: 'Extension Storage',
        blocks: [
          {
            opcode: 'save',
            blockType: Scratch.BlockType.COMMAND,
            text: 'save [DATA]',
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'hello'
              }
            }
          },
          {
            opcode: 'load',
            blockType: Scratch.BlockType.REPORTER,
            text: 'load saved data'
          },
          {
            opcode: 'clear',
            blockType: Scratch.BlockType.COMMAND,
            text: 'clear saved data'
          }
        ]
      };
    }

    save(args) {
      const storage = Scratch.vm.runtime.extensionStorage;
      storage[this.extensionId] = {
        data: String(args.DATA)
      };
    }

    load() {
      const storage = Scratch.vm.runtime.extensionStorage;
      const entry = storage[this.extensionId];
      return entry ? entry.data : '';
    }

    clear() {
      delete Scratch.vm.runtime.extensionStorage[this.extensionId];
    }
  }

  Scratch.extensions.register(new ExtensionStorage());
})(Scratch);

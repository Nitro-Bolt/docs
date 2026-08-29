(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This example must run unsandboxed');
  }

  class CompilerExample {
    getInfo() {
      return {
        id: 'compilerexample',
        name: 'Compiler Example',
        blocks: [
          {
            opcode: 'ifBlock',
            blockType: Scratch.BlockType.CONDITIONAL,
            text: 'if [CONDITION]',
            arguments: {
              CONDITION: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            },
            branchCount: 1,
            compiler: this.compileIfBlock
          }
        ]
      };
    }

    ifBlock(args, util) {
      if (args.CONDITION) {
        util.startBranch(1, false);
      }
    }

    compileIfBlock(args, util) {
      return `
        if (${args.CONDITION}) {
          ${util.compileBranch(1, false)}
        }
      `;
    }
  }

  Scratch.extensions.register(new CompilerExample());
})(Scratch);
